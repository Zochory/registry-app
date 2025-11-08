import * as React from "react"
import Link from "next/link"

import { OpenInV0Button } from "@/components/open-in-v0-button"

const registryBaseUrl = process.env.NEXT_PUBLIC_REGISTRY_BASE_URL ?? "https://haxdesign.com/r"

export default function Home() {
  const installCommand = `npx shadcn@latest add @sidebar --registry "${registryBaseUrl}"`

  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Haxdesign Registry</h1>
        <p className="text-muted-foreground">
          A custom shadcn registry exposing the morphing navigation sidebar block.
        </p>
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <section className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-xl font-semibold">@sidebar</h2>
                <p className="text-sm text-muted-foreground">
                  Animated sidebar that morphs into a floating toolbar with supporting theme, hooks, and navigation utilities.
                </p>
              </div>
              <OpenInV0Button name="@sidebar" className="w-fit" />
            </div>
            <div className="text-sm text-muted-foreground">
              <span>Registry item JSON:</span>{" "}
              <Link prefetch={false} href="/r/@sidebar.json" className="underline">
                /r/@sidebar.json
              </Link>
            </div>
          </div>

          <div className="bg-muted/40 border rounded-md p-4 font-mono text-xs sm:text-sm overflow-x-auto">
            <code>{installCommand}</code>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>Includes sidebar, floating toolbar, hooks, constants, and supporting utilities.</li>
            <li>
              Files resolve to the <code>@/components</code>, <code>@/lib</code>, and <code>@/types</code> aliases expected by
              shadcn consumers.
            </li>
            <li>Adjust <code>NEXT_PUBLIC_REGISTRY_BASE_URL</code> to point CLI commands at your deployed host.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
