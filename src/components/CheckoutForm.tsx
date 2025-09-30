'use client'
import { useState } from 'react'
import { useCart } from '../utils/cartContext'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    specialInstructions: ''
  })

  const { getFinalTotal } = useCart()
  const total = getFinalTotal()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const stripe = await stripePromise

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        total
      })
    })

    const { id } = await res.json()
    await stripe?.redirectToCheckout({ sessionId: id })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg w-2xl">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm 
                     focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm 
                     focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
        />
      </div>

   

      {/* Pay Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 
                   text-white font-semibold rounded-xl shadow-md 
                   hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Processing…' : `Pay ₦${(total / 100).toLocaleString()}`}
      </button>
    </form>
  )
}
