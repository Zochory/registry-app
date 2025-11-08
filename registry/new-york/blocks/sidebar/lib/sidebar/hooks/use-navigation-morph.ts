'use client';

import { useState, useEffect, useCallback } from "react";

export function useNavigationMorph(contentSwitchDelay = 450) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showToolbarContent, setShowToolbarContent] = useState(false);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const collapse = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  const expand = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  useEffect(() => {
    if (isCollapsed) {
      const timer = setTimeout(() => {
        setShowToolbarContent(true);
      }, contentSwitchDelay);
      return () => clearTimeout(timer);
    }

    setShowToolbarContent(false);
  }, [isCollapsed, contentSwitchDelay]);

  return {
    isCollapsed,
    showToolbarContent,
    toggleCollapse,
    collapse,
    expand,
  };
}
