'use client'

import { SidebarPreview } from "@/components/sidebar-preview"
import { TabBarsPreview } from "@/components/tab-bars-preview"
import { ReactNode } from "react"

type PreviewComponent = () => ReactNode

const previewMap: Record<string, PreviewComponent> = {
  "@sidebar": SidebarPreview,
  "@tab-bars": TabBarsPreview,
}

export function getPreviewComponent(name: string): PreviewComponent | null {
  return previewMap[name] || null
}

export function hasPreview(name: string): boolean {
  return name in previewMap
}

