# Khazimiyya Herbal Medicine — Website Starter

A premium botanical-style Next.js website starter for Khazimiyya Herbal Medicine.

## Important project status

This is a **fresh starter package**, not a copy of the existing project on your computer. It provides a polished responsive homepage and an enquiry link that can be connected to the business WhatsApp number. It does not yet include a database, admin dashboard, authentication, a managed product catalogue, or an enquiry-management backend.

Product claims, ingredients, prices, availability, business contact details and all other business-specific facts must be confirmed by the owner before publication. Do not add unsupported health or treatment claims.

## Requirements

- Node.js 20.9 or later (the project was initially targeted at the Next.js 16 stack)
- npm

## Setup

1. Extract the ZIP.
2. Open the extracted `khazimiyya-platform` folder in VS Code.
3. In a terminal opened at that folder, run:

   ```powershell
   npm install
   ```

4. Copy `.env.example` to `.env.local`.
5. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the business WhatsApp number in international digits-only format (for example, `2348012345678`). Do not include a plus sign, spaces or dashes.
6. Start the development server:

   ```powershell
   npm run dev
   ```

7. Visit http://localhost:3000.

## Production build

```powershell
npm run build
npm run start
```

## Current features

- Responsive premium botanical visual direction
- Brand header and navigation
- Introductory hero section
- Business approach section
- Customer information/enquiry cards
- WhatsApp call-to-action, activated by environment configuration
- General-information disclaimer
- SEO title and description

## Before launch

- Confirm the legal business name and brand assets.
- Obtain owner-approved product names, descriptions, ingredient lists, images, prices and availability.
- Confirm the WhatsApp contact number and customer-support hours.
- Review all copy and claims with the business owner and appropriate qualified professionals.
- Add privacy, terms and any required regulatory disclosures before collecting personal information.
- Implement and test the product data source and enquiry workflow if required.
- Run a production build and test on mobile and desktop.

## Architecture notes

The current version is intentionally lightweight: the homepage uses local content and does not require a database or third-party service. This avoids introducing recurring costs or storing customer data before the business requirements are confirmed. A database and admin interface should be added only after the product-management workflow and hosting budget are agreed.
