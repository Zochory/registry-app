'use client'

import { NavigationContainer } from "@/components/sidebar/navigation-container"

export function SidebarPreview() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
      <div className="absolute inset-0 flex bg-background">
        <div className="h-full">
          <NavigationContainer />
        </div>
        <div className="flex-1 bg-muted/20" />
      </div>
    </div>
  )
}

