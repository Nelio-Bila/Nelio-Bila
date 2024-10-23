import { LanguageProvider } from './providers'
import HomePage from '@/components/HomePage'
import { getContent } from '@/lib/content'

export default async function Home() {
  const contentLangs = await getContent()

  return (
    <LanguageProvider
      initialContent={contentLangs['pt-br']}
      contentLangs={contentLangs}
    >
      <HomePage />
    </LanguageProvider>
  )
}