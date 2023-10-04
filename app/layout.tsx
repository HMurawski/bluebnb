import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation/Navigation'
import Modal from './components/modals/Modal'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlueBnb',
  description: 'BlueBnb is a clone of the popular booking site - Airbnb. Made by HM9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal />
        <Navigation />
        {children}
        </body>
    </html>
  )
}
