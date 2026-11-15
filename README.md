# Khazimiyya Herbal Medicine Platform

A responsive website for Khazimiyya Herbal Medicine, built with Next.js, React, TypeScript and Tailwind CSS.

## Project Overview

The platform provides an online introduction to Khazimiyya Herbal Medicine. Visitors can learn about the business, explore its general product-information offerings and find information about contacting the business.

## Current Features

- Responsive homepage.
- Premium Botanical visual design.
- About Khazimiyya section.
- Product-information and customer-enquiry sections.
- Contact section.
- Basic SEO metadata.
- General medical-information disclaimer.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting Started

### Requirements

- Node.js 20.9 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Pharouqmk/khazimiyya-platform.git
cd khazimiyya-platform
```

Install dependencies:

```bash
npm install
```

Start the development server using Webpack:

```bash
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

Run:

```bash
npm run build -- --webpack
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
khazimiyya-platform/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Current Development Scope

This version is an informational website starter.

The following capabilities are not yet implemented:

- Dynamic product catalogue.
- Database integration.
- Admin dashboard.
- Customer enquiry management.
- Connected WhatsApp contact workflow.

These features will be considered as development progresses.

## Business Information and Safety

Product names, descriptions, ingredients, availability and other business information must be confirmed by the business owner before publication.

Website content is for general informational purposes only. It is not medical advice, diagnosis or a substitute for consultation with a qualified healthcare professional.

## Development

The project is being developed incrementally, with priority given to maintainability, security, responsive design and cost-effective infrastructure.