import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../utils/cartContext'
import type { Metadata } from 'next'

// 🔹 Define SEO metadata for all pages (you can override per page)
export const metadata: Metadata = {
  title: {
    default: 'Your Store – Buy Quality Tech Products Online',
    template: '%s | Your Store'
  },
  description:
    'Shop the latest tech products including laptops, accessories, and gaming gear at affordable prices. Fast delivery, secure checkout, and quality guaranteed.',
  keywords: [
    'ecommerce',
    'online store',
    'tech products',
    'gadgets',
    'buy laptops',
    'gaming accessories'
  ],
  authors: [{ name: 'Your Store Team' }],
  metadataBase: new URL('https://e-commerce-task-one.vercel.app'),
  openGraph: {
    type: 'website',
    url: 'https://e-commerce-task-one.vercel.app',
    title: 'Your Store – Buy Quality Tech Products Online',
    description:
      'Affordable tech, fast delivery. Shop laptops, gaming, and accessories.',
    siteName: 'Your Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Store Hero Banner'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourstore',
    creator: '@yourstore'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: 'https://e-commerce-task-one.vercel.app'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
