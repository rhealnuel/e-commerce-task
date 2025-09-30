 🛒 Ecommerce App (Next.js + Stripe)

A modern ecommerce web app built with **Next.js (App Router)**, **TypeScript**, **Stripe Checkout**, and **TailwindCSS**.  
Includes cart management, product listings, checkout flow, and SEO best practices.

---

## 🚀 Tech Stack
- [Next.js 14+](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Stripe](https://stripe.com/) for payments
- Context API for Cart State

---

## ⚙️ Setup Instructions

### 1. Clone Repo
```
git clone https://github.com/rhealnuel/e-commerce-task.git
cd e-commerce-task
---
```


### 2. Install Dependencies
```

npm install
# or
yarn install


```
### 3. Setup Environment Variables
```
Create a .env.local file in the root:

env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_123456
STRIPE_SECRET_KEY=sk_test_123456
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

### 4. Run Dev Server
```
npm run dev
Visit 👉 http://localhost:3000

🛠 Features
🛍 Product listing and filtering

🛒 Shopping cart with add/remove

💳 Stripe checkout integration

📦 Order flow with checkout session

🔍 SEO setup (metadata)

📂 Project Structure

src/
  app/            # Next.js app router
  components/     # UI components (Header, Footer, ProductCard, etc.)
  utils/          # cartContext and helpers
  data/           # Product JSON data
📜 License
MIT License © 2025 Kawekwune Emmanuel
```
