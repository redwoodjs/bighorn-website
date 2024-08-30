function loadSavedThemeType(): ThemeType | null {
  return localStorage.getItem('bighorn-theme') as ThemeType
}

export function getDefaultThemeType(): ThemeType {
  // If we don't have window fallback to 'system'
  if (typeof window === 'undefined') {
    return 'system'
  }

  // If we have a stored theme, return it
  const storedTheme = loadSavedThemeType()
  if (storedTheme) {
    return storedTheme as ThemeType
  }

  // Fallback to system theme
  return 'system'
}

export function handleThemeTypeChange(newTheme: ThemeType): void {
  const currentTheme = loadSavedThemeType()

  // Skip if no change in theme
  if (newTheme === currentTheme) {
    return
  }

  // Persist the new theme to local storage
  localStorage.setItem('bighorn-theme', newTheme)

  // Determine if the dark class should be added based on user and browser preferences
  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const addDark =
    newTheme === 'dark' || (newTheme === 'system' && browserTheme === 'dark')

  // Add or remove the dark class to the documentElement
  if (addDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
