# Haxdesign Registry

This Next.js app hosts a custom [shadcn](https://ui.shadcn.com/docs/registry) registry exposing the **@sidebar** block from the Haxdesign project. The item bundles the morphing sidebar, floating toolbar, supporting hooks, and utilities so it can be installed in any shadcn-enabled project via the CLI.

## Structure

- `registry/` – source files for registry items (we currently ship `registry/hax/sidebar`).
- `registry.json` – top-level registry definition that references `@sidebar`.
- `public/r/` – static registry payloads served at runtime (generated via `pnpm shadcn build`).
- `app/page.tsx` – simple landing page with install instructions and links.

## Local Development

```bash
cd registry-app
pnpm dev
```

The development server exposes the registry endpoints under `http://localhost:3000/r`. You can point the shadcn CLI at the local registry with:

```bash
npx shadcn@latest add @sidebar --registry "http://localhost:3000/r"
```

> Tip: Set `NEXT_PUBLIC_REGISTRY_BASE_URL` to the deployed registry URL so the UI shows the correct install command.

## Updating the Registry Payloads

Whenever you change files under `registry/`, rebuild the public payloads:

```bash
pnpm shadcn build
```

This command regenerates `public/r/registry.json` and `public/r/@sidebar.json` so consumers receive the latest contents.

## Deployment

The app is a standard Next.js project and can be deployed to Vercel or any platform that supports Next 15. Ensure the `/public/r` directory is included so static JSON endpoints are available immediately.
