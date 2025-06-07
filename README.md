# Next.js Nodemailer Contact Form

A modern contact form application built with Next.js 15, TypeScript, and Nodemailer.

## 🚀 Technologies

- **Framework:** Next.js 15.3.3
- **Language:** TypeScript
- **Form Management:** React Hook Form + Zod
- **Email:** Nodemailer
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS

## 🛠️ Installation

1. Clone the project:

```bash
git clone [repo-url]
cd nextjs-nodemailer
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Create `.env` file:

```env
EMAIL_HOST=your-smtp-host
EMAIL_PORT=your-smtp-port
EMAIL_USER=your-email
EMAIL_PASS=your-password
EMAIL_FROM_NAME=your-name
```

4. Start the development server:

```bash
yarn dev
# or
npm run dev
```

## 📦 Features

- Modern and responsive design
- Form validation (Zod)
- Email sending (Nodemailer)
- Toast notifications
- TypeScript type safety

## 🏗️ Project Structure

```
├── app/                 # Next.js app router
│   ├── contact/        # Contact form page
│   └── layout.tsx      # Root layout
├── components/         # UI components
├── lib/               # Helper functions and types
└── public/            # Static files
```

## 📝 License

MIT
