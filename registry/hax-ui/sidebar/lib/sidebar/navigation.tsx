'use client';

import { Github, BookOpen } from "lucide-react";

import {
  AgenticFabricIcon,
  AgenticFleetIcon,
  BookmarkIcon,
  BrowseIcon,
  MCPIcon,
  NewChatIcon,
  QlawIcon,
  SearchIcon,
  SettingsIcon,
} from "@/components/sidebar/sidebar-icons";
import { NavigationItem, NavigationSection } from "@/types/navigation";

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: "new-chat",
    label: "New Chat",
    icon: <NewChatIcon />,
    variant: "primary",
  },
  {
    id: "search",
    label: "Search",
    icon: <SearchIcon />,
  },
  {
    id: "browse",
    label: "History",
    icon: <BrowseIcon />,
  },
  {
    id: "bookmarked",
    label: "Bookmarked",
    icon: <BookmarkIcon />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

export const EXPLORE_NAVIGATION: NavigationItem[] = [
  {
    id: "agentic-fleet",
    label: "Agentic Fleet",
    icon: <AgenticFleetIcon />,
  },
  {
    id: "agentic-fabric",
    label: "Agentic Fabric",
    icon: <AgenticFabricIcon />,
  },
  {
    id: "qlaw",
    label: "Qlaw",
    icon: <QlawIcon />,
  },
  {
    id: "mcp",
    label: "MCP",
    icon: <MCPIcon />,
  },
];

export const FOOTER_LINKS: NavigationItem[] = [
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
];

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    items: MAIN_NAVIGATION,
  },
  {
    title: "Explore",
    items: EXPLORE_NAVIGATION,
  },
];

export const DEFAULT_ACTIVE_ITEM: NavigationItem["id"] = "new-chat";
