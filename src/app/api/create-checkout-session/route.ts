// src/app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil', // keep up-to-date
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, total } = body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'ngn',
            product_data: {
              name: `Order for ${fullName}`,
            },
            unit_amount: total, // kobo
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    })

    return NextResponse.json({ id: session.id }, { status: 200 })
  } catch (err: any) {
    console.error('Stripe session error:', err)
    return NextResponse.json(
      { error: err.message || 'Failed to create session' },
      { status: 500 }
    )
  }
}
