import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeremymyrland.com'),
  title: 'Jeremy Myrland | Senior Product Leader',
  description: '15 years of product leadership at Nike, Workday, Wayfair, and Apple. I specialize in orchestration — connecting fragmented systems, teams, and workflows so they produce real outcomes.',
  generator: 'v0.app',
  // Icons come from the app/ file convention (icon.svg, icon.png, apple-icon.png).
  // The block that used to sit here pointed at four files that were never
  // committed, so every request 404'd and browsers fell back to the globe.
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
