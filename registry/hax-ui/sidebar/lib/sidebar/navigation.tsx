"use client"

import { Github, BookOpen, Search, Network, Grid3x3, Scale } from "lucide-react"
import { SettingsIcon } from "@/components/sidebar/sidebar-icons"
import type { NavigationItem, NavigationSection } from "@/lib/sidebar/navigation"

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: "search",
    label: "Search",
    icon: <Search className="size-[18px]" />,
  },
  {
    id: "agentic-fleet",
    label: "Agentic Fleet",
    icon: <Network className="size-[18px]" />,
  },
  {
    id: "agentic-fabric",
    label: "Agentic Fabric",
    icon: <Grid3x3 className="size-[18px]" />,
  },
  {
    id: "qlaw",
    label: "Qlaw",
    icon: <Scale className="size-[18px]" />,
  },
]

export const FOOTER_LINKS: NavigationItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
  {
    id: "github",
    label: "Github",
    icon: <Github className="size-[18px]" />,
  },
  {
    id: "docs",
    label: "Documentation",
    icon: <BookOpen className="size-[18px]" />,
  },
]

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    items: MAIN_NAVIGATION,
  },
]

export const DEFAULT_ACTIVE_ITEM: NavigationItem["id"] = "search"
