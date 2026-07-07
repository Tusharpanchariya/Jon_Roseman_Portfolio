import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { BRAND_DATA } from '../../../data/content';

const SHIPPING_COUNTRIES: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] = [
  'US',
  'GB',
  'CA',
  'AU',
  'AT',
  'BE',
  'BG',
  'CH',
  'CY',
  'CZ',
  'DE',
  'DK',
  'EE',
  'ES',
  'FI',
  'FR',
  'GR',
  'HR',
  'HU',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'NO',
  'PL',
  'PT',
  'RO',
  'SE',
  'SI',
  'SK',
];

// Instantiate Stripe safely with fallback
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-11-20.acacia' as any })
  : null;

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Invalid items payload' }, { status: 400 });
    }

    // Resolve details and calculate line items
    const lineItems: any[] = [];
    for (const item of items) {
      const book = BRAND_DATA.books.find((b) => b.id === item.id);
      if (!book) continue;

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: book.title,
            description: `${book.subtitle} - ISBN: ${book.details.find(d => d.label === 'ISBN')?.value || ''}`,
            images: [`${req.headers.get('origin') || ''}${book.coverImage}`],
          },
          unit_amount: Math.round(book.price * 100), // in cents
        },
        quantity: item.quantity,
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: 'No valid books found' }, { status: 400 });
    }

    // Secure fallback mock redirection if keys are missing
    if (!stripe) {
      console.warn("Stripe Secret Key is missing in environment variables. Falling back to sandbox checkout success mockup.");
      const mockSuccessUrl = `${req.headers.get('origin') || ''}/checkout/success?session_id=mock_session_${Date.now()}`;
      return NextResponse.json({ url: mockSuccessUrl });
    }

    // Stripe checkout session creation
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin') || ''}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin') || ''}/`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: SHIPPING_COUNTRIES,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
