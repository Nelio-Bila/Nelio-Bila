'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { ContentType } from '@/types/content'

interface LanguageContextType {
  contentLanguage: ContentType
  toggleContentLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialContent,
  contentLangs
}: {
  children: ReactNode
  initialContent: ContentType
  contentLangs: {
    [key: string]: ContentType
  }
}) {
  const [contentLanguage, setContentLanguage] = useState(initialContent)

  const toggleContentLanguage = () => {
    setContentLanguage(
      contentLanguage.lang === 'pt-br' ? contentLangs['en-us'] : contentLangs['pt-br']
    )
  }

  return (
    <LanguageContext.Provider value={{ contentLanguage, toggleContentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (undefined === context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}