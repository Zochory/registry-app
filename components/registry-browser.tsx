'use client'

import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { getPreviewComponent } from "@/components/preview-map"

const registryBaseUrl = process.env.NEXT_PUBLIC_REGISTRY_BASE_URL ?? "https://haxdesign.com/r"

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  author?: string
  dependencies?: string[]
  registryDependencies?: string[]
}

interface RegistryData {
  items: RegistryItem[]
}

interface RegistryItemSectionProps {
  item: RegistryItem
  registryBaseUrl: string
}

function RegistryItemSection({ item, registryBaseUrl }: RegistryItemSectionProps) {
  const installCommand = `npx shadcn@latest add ${item.name} --registry "${registryBaseUrl}"`
  const PreviewComponent = getPreviewComponent(item.name)

  return (
    <section className="flex flex-col gap-4 border rounded-lg p-4 relative">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="flex-shrink">
            <h2 className="text-xl font-semibold min-w-0 truncate">{item.name}</h2>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
          <OpenInV0Button url={`${registryBaseUrl}/${item.name}.json`} />
        </div>
      </div>

      <div className="bg-muted/40 border rounded-md p-4 font-mono text-xs sm:text-sm overflow-x-auto">
        <code>{installCommand}</code>
      </div>

      {PreviewComponent && (
        <div className="border rounded-md overflow-hidden bg-background">
          <PreviewComponent />
        </div>
      )}
    </section>
  )
}

export function RegistryBrowser() {
  const [registryData, setRegistryData] = React.useState<RegistryData | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function fetchRegistry() {
      try {
        const response = await fetch('/r/registry.json')
        if (!response.ok) {
          throw new Error(`Failed to fetch registry: ${response.statusText}`)
        }
        const data = await response.json()
        setRegistryData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load registry')
      } finally {
        setLoading(false)
      }
    }

    fetchRegistry()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Loading registry...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-destructive">Error loading registry: {error}</p>
      </div>
    )
  }

  if (!registryData || !registryData.items || registryData.items.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">No registry items found.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 gap-8">
      {registryData.items.map((item) => (
        <RegistryItemSection key={item.name} item={item} registryBaseUrl={registryBaseUrl} />
      ))}
    </div>
  )
}

