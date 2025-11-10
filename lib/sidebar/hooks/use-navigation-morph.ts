"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export function useNavigationMorph(contentSwitchDelay = 300) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showToolbarContent, setShowToolbarContent] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isTransitioningRef = useRef(false)

  const toggleCollapse = useCallback(() => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setIsCollapsed((prev) => !prev)

    // Reset transition lock after animation completes
    setTimeout(() => {
      isTransitioningRef.current = false
    }, contentSwitchDelay + 100)
  }, [contentSwitchDelay])

  const collapse = useCallback(() => {
    if (!isCollapsed && !isTransitioningRef.current) {
      toggleCollapse()
    }
  }, [isCollapsed, toggleCollapse])

  const expand = useCallback(() => {
    if (isCollapsed && !isTransitioningRef.current) {
      toggleCollapse()
    }
  }, [isCollapsed, toggleCollapse])

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (isCollapsed) {
      // Show toolbar content after delay
      timerRef.current = setTimeout(() => {
        setShowToolbarContent(true)
      }, contentSwitchDelay)
    } else {
      // Hide toolbar content immediately when expanding
      setShowToolbarContent(false)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isCollapsed, contentSwitchDelay])

  return {
    isCollapsed,
    showToolbarContent,
    toggleCollapse,
    collapse,
    expand,
  }
}
