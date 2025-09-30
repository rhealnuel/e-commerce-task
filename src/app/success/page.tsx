// src/app/success/page.tsx
'use client'
import { useEffect } from 'react'
import { useCart } from '@/utils/cartContext'

export default function SuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart() // clear once user lands on success page
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-green-600">✅ Payment Successful!</h1>
      <p className="mt-4">Thank you for your order.</p>
    </div>
  )
}
