# Morphing Sidebar Block

This package delivers the morphing sidebar / floating toolbar experience showcased in Haxdesign. Install it via the shadcn registry CLI:

```bash
npx shadcn@latest add @sidebar
```

## What's Included

- Animated sidebar that collapses into a floating toolbar (`Sidebar`, `NavigationContainer`).
- Navigation, footer, and toolbar UI primitives (`SidebarNav`, `FloatingToolbar`, `ToolbarTabItem`, etc.).
- Theme utilities (`ThemeProvider`, `ThemeToggle`) and supporting hooks/constants.
- Ready-to-use navigation data, motion presets, and iconography.

## After Installation

1. **Wrap your app** with the provided `ThemeProvider` (or wire its logic into an existing provider) to ensure light/dark tokens and local storage persistence work.
   ```tsx
   // app/layout.tsx or main entrypoint
   import { ThemeProvider } from "@/components/theme/theme-provider";

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           <ThemeProvider>{children}</ThemeProvider>
         </body>
       </html>
     );
   }
   ```

2. **Drop the navigation component** where you want the morphing behaviour. Use `NavigationContainer` if you want automatic toolbar morphing, or mount `Sidebar` directly when you only need the fixed sidebar.

   ```tsx
   import { NavigationContainer } from "@/components/sidebar";

   export function AppShell() {
     return (
       <div className="flex">
         <NavigationContainer />
         <main className="flex-1">{/* your content */}</main>
       </div>
     );
   }
   ```

3. **Review targets that may overlap** with existing project utilities (`components/common/icon-button.tsx`, `lib/utils/storage.ts`, etc.). Rename or merge as needed before running the CLI if you have conflicting implementations.

4. **Configure Tailwind (optional).** The components rely on arbitrary values already covered by the default Tailwind configuration. Ensure your project enables arbitrary values and the fonts referenced (Inter, Inter Display) or swap them out in the components.

## Customisation Tips

- Update the navigation items in `@/lib/sidebar/navigation.tsx` to match your product surface.
- Icons are powered by the included SVG glyphs and `lucide-react`. Extend or replace them via the same file.
- Animation timings live in `@/lib/sidebar/morph.ts` and `@/lib/sidebar/stagger.ts` if you want to tweak transition pacing.

Enjoy building!
