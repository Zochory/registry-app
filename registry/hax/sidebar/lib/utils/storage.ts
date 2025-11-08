type StorageValue = string | number | boolean | object | null;

class SafeStorage {
  private isAvailable: boolean;

  constructor() {
    this.isAvailable = this.checkAvailability();
  }

  private checkAvailability(): boolean {
    try {
      const test = "__storage_test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  get<T = StorageValue>(key: string, defaultValue?: T): T | null {
    if (!this.isAvailable) {
      return defaultValue ?? null;
    }

    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue ?? null;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(`Error reading from localStorage key "${key}":`, error);
      return defaultValue ?? null;
    }
  }

  set(key: string, value: StorageValue): boolean {
    if (!this.isAvailable) {
      return false;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error);
      return false;
    }
  }

  remove(key: string): boolean {
    if (!this.isAvailable) {
      return false;
    }

    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Error removing from localStorage key "${key}":`, error);
      return false;
    }
  }

  clear(): boolean {
    if (!this.isAvailable) {
      return false;
    }

    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn("Error clearing localStorage:", error);
      return false;
    }
  }

  isStorageAvailable(): boolean {
    return this.isAvailable;
  }
}

export const storage = new SafeStorage();

export const STORAGE_KEYS = {
  THEME: "theme",
  ACTIVE_NAV_ITEM: "activeNavItem",
  SIDEBAR_COLLAPSED: "sidebarCollapsed",
  USER_PREFERENCES: "userPreferences",
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
