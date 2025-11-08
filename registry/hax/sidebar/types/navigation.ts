import { ReactNode } from "react";

export type NavigationItemId =
  | "new-chat"
  | "search"
  | "browse"
  | "bookmarked"
  | "settings"
  | "agentic-fleet"
  | "agentic-fabric"
  | "qlaw"
  | "mcp"
  | "github"
  | "docs";

export type NavigationVariant = "default" | "primary";

export interface NavigationItem {
  id: NavigationItemId;
  label: string;
  icon: ReactNode;
  variant?: NavigationVariant;
}

export interface NavigationSection {
  title?: string;
  items: NavigationItem[];
}

export interface NavigationProps {
  activeItem?: NavigationItemId;
  onItemClick?: (item: NavigationItemId) => void;
}
