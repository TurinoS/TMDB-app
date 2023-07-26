import StyledComponentsRegistry from '../../registry'
import { AppContextProvider } from '@/context/AppContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <StyledComponentsRegistry>
          <AppContextProvider>
            <body>{children}</body>
          </AppContextProvider>
        </StyledComponentsRegistry>
    </html>
  )
}
