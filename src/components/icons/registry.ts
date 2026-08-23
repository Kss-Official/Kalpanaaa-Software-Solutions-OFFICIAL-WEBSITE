/**
 * Explicit lucide-react icon registry.
 *
 * `src/data/site.ts` stores icon names as strings, and the components used to resolve them with
 * `import * as Lucide from "lucide-react"` + `(Lucide as any)[name]`. A namespace import of a
 * barrel with ~5,000 exports is not tree-shakeable — every dynamic member access forces Rollup to
 * keep the whole library, which is what produced the 704 kB `lucide-react` chunk.
 *
 * Named imports are tree-shakeable, so this module lists exactly the icons the data can ask for.
 * The set below is derived from every `icon: "..."` value in `src/data/site.ts` plus the two
 * hard-coded lists in `ServiceDetail.tsx`, and it must stay in sync with them: if a new icon name
 * is added to the data, add it here too or it will render the fallback.
 *
 * Note: the data contains one name that is not a lucide icon at all ("Finance"). That already
 * rendered the fallback before this change, and still does — behaviour is unchanged.
 */
import {
  Accessibility,
  Archive,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Box,
  Brain,
  Building2,
  Calendar,
  ClipboardCheck,
  Cloud,
  Code2,
  Component,
  Database,
  FileCheck,
  FileCode,
  GitBranch,
  GraduationCap,
  Landmark,
  Languages,
  Lock,
  Palette,
  Route,
  Scale,
  ScanSearch,
  ScrollText,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Train,
  TrendingUp,
  UserRound,
  Users,
  UtensilsCrossed,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Accessibility,
  Archive,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Box,
  Brain,
  Building2,
  Calendar,
  ClipboardCheck,
  Cloud,
  Code2,
  Component,
  Database,
  FileCheck,
  FileCode,
  GitBranch,
  GraduationCap,
  Landmark,
  Languages,
  Lock,
  Palette,
  Route,
  Scale,
  ScanSearch,
  ScrollText,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Train,
  TrendingUp,
  UserRound,
  Users,
  UtensilsCrossed,
  Workflow,
  Zap,
};

/**
 * Resolves a data-driven icon name. Drop-in replacement for `(Lucide as any)[name] ?? Fallback` —
 * pass the same fallback the call site used so the rendered output does not change.
 */
export function getIcon(name: string | undefined, fallback: LucideIcon = Box): LucideIcon {
  return (name && ICONS[name]) || fallback;
}

export { Box, Code2, Sparkles };
export type { LucideIcon };
