import { Nunito, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import StyledComponentsRegistry from '@/lib/registry'
import { FixedBorderLed } from '@/components/FixedBorderLed'
import { Container, Content } from '@/styles/app'
import { GlobalStyle } from '@/styles/global'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Nélio Sousa F. Bila',
  description: 'Portfolio',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Container>
            <FixedBorderLed />
            <Content>
              {children}
            </Content>
          </Container>
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}