'use client';

import { useState, useCallback } from "react";

import { DEFAULT_ACTIVE_ITEM } from "@/lib/sidebar/navigation";
import { NavigationItemId } from "@/lib/sidebar/navigation";

export function useNavigationState(initialItem: NavigationItemId = DEFAULT_ACTIVE_ITEM) {
  const [activeItem, setActiveItem] = useState<NavigationItemId>(initialItem);

  const handleItemClick = useCallback((id: NavigationItemId) => {
    setActiveItem(id);
  }, []);

  const resetToDefault = useCallback(() => {
    setActiveItem(DEFAULT_ACTIVE_ITEM);
  }, []);

  return {
    activeItem,
    setActiveItem: handleItemClick,
    resetToDefault,
  };
}
