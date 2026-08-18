Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path $PSScriptRoot "public\pwa-512x512.png"
if (-not (Test-Path $sourcePath)) {
    Write-Error "Source image not found: $sourcePath"
    exit 1
}

$bytes = [System.IO.File]::ReadAllBytes($sourcePath)
$msSrc = New-Object System.IO.MemoryStream($bytes, $false)
$srcImage = [System.Drawing.Image]::FromStream($msSrc)

function Resize-Image {
    param(
        [System.Drawing.Image]$Image,
        [int]$Width,
        [int]$Height
    )
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
    $destImage = New-Object System.Drawing.Bitmap($Width, $Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $destImage.SetResolution($Image.HorizontalResolution, $Image.VerticalResolution)

    $graphics = [System.Drawing.Graphics]::FromImage($destImage)
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $wrapMode = New-Object System.Drawing.Imaging.ImageAttributes
    $wrapMode.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
    $graphics.DrawImage($Image, $destRect, 0, 0, $Image.Width, $Image.Height, [System.Drawing.GraphicsUnit]::Pixel, $wrapMode)
    $graphics.Dispose()
    $wrapMode.Dispose()

    return $destImage
}

# Generate PNGs
$sizes = @(16, 32, 48, 64, 150, 180, 192, 512)
$bitmaps = @{}

foreach ($size in $sizes) {
    $bmp = Resize-Image -Image $srcImage -Width $size -Height $size
    $bitmaps[$size] = $bmp
    if ($size -eq 16) { $bmp.Save((Join-Path $PSScriptRoot "public\favicon-16x16.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($size -eq 32) { 
        $bmp.Save((Join-Path $PSScriptRoot "public\favicon-32x32.png"), [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Save((Join-Path $PSScriptRoot "public\favicon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    }
    if ($size -eq 48) { $bmp.Save((Join-Path $PSScriptRoot "public\favicon-48x48.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($size -eq 150) { $bmp.Save((Join-Path $PSScriptRoot "public\mstile-150x150.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($size -eq 180) { $bmp.Save((Join-Path $PSScriptRoot "public\apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($size -eq 192) { $bmp.Save((Join-Path $PSScriptRoot "public\pwa-192x192.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    if ($size -eq 512) { $bmp.Save((Join-Path $PSScriptRoot "public\pwa-512x512.png"), [System.Drawing.Imaging.ImageFormat]::Png) }
    Write-Host "Generated size ${size}x${size}"
}

# Now construct a valid standard multi-resolution ICO containing 16x16, 32x32, 48x48, 64x64, 128x128, 256x256
$icoSizes = @(16, 32, 48, 64)
# Build ICO with PNG streams (standard for modern Windows/Edge)
$icoPngStreams = @()
foreach ($s in @(16, 32, 48, 64, 128, 256)) {
    $bmp = Resize-Image -Image $srcImage -Width $s -Height $s
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $bytes = $ms.ToArray()
    $ms.Dispose()
    $bmp.Dispose()
    $icoPngStreams += @{ Width = $s; Height = $s; Bytes = $bytes }
}

$icoStream = New-Object System.IO.MemoryStream
$writer = New-Object System.IO.BinaryWriter($icoStream)

# ICONDIR Header
$writer.Write([UInt16]0) # Reserved
$writer.Write([UInt16]1) # Type (1 = ICO)
$writer.Write([UInt16]$icoPngStreams.Count) # Number of images

$offset = 6 + ($icoPngStreams.Count * 16)

# ICONDIRENTRY entries
foreach ($img in $icoPngStreams) {
    $w = if ($img.Width -ge 256) { 0 } else { [byte]$img.Width }
    $h = if ($img.Height -ge 256) { 0 } else { [byte]$img.Height }
    $writer.Write([byte]$w)
    $writer.Write([byte]$h)
    $writer.Write([byte]0) # Color count
    $writer.Write([byte]0) # Reserved
    $writer.Write([UInt16]1) # Color planes
    $writer.Write([UInt16]32) # Bits per pixel
    $writer.Write([UInt32]$img.Bytes.Length) # Image size
    $writer.Write([UInt32]$offset) # Offset
    $offset += $img.Bytes.Length
}

# Write image data
foreach ($img in $icoPngStreams) {
    $writer.Write($img.Bytes)
}

$writer.Flush()
$icoBytes = $icoStream.ToArray()
$writer.Dispose()
$icoStream.Dispose()

[System.IO.File]::WriteAllBytes((Join-Path $PSScriptRoot "public\favicon.ico"), $icoBytes)
[System.IO.File]::WriteAllBytes((Join-Path $PSScriptRoot "public\kssfavicon.ico"), $icoBytes)

Write-Host "Generated favicon.ico and kssfavicon.ico with size: $($icoBytes.Length) bytes"

$srcImage.Dispose()
foreach ($b in $bitmaps.Values) { $b.Dispose() }
