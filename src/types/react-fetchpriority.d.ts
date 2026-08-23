/**
 * React 18's DOM renderer has no special handling for the `fetchpriority` attribute, so the
 * camelCase `fetchPriority` prop that @types/react declares would be logged at runtime as an
 * unrecognised prop — a console error, which Lighthouse counts against Best Practices. The
 * lowercase spelling is passed straight through to the DOM instead, so that is what the
 * components use; this declaration just teaches TypeScript about it.
 *
 * `export {}` is what makes this file a module, which is what turns `declare module "react"`
 * into an *augmentation* of React's types rather than a replacement of them.
 *
 * When the project moves to React 19 (which supports `fetchPriority` natively) this file and the
 * lowercase attributes can both go away.
 */
export {};

declare module "react" {
  interface ImgHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }

  interface LinkHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
