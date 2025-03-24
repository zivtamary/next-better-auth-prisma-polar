# 🚀 Next.js SaaS Boilerplate

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

**Supercharge your SaaS development** with this comprehensive, production-ready boilerplate built on cutting-edge technologies. Get from idea to market faster with all the essential tools and integrations already configured! ✨

## ✅ Features

### Core Technologies
* **🔥 Next.js 15 (App Router)** - Lightning-fast performance with server components and streaming
* **💾 Prisma ORM** - Type-safe database queries with intuitive schema modeling
* **💰 Polar.sh** - Integrated payment processing and subscription management
* **🛡️ BetterAuth** - Self-hosted authentication and authorization solution
* **🎭 shadcn/ui** - Beautiful, accessible, and customizable UI components
* **🔄 React Query** - Powerful data fetching with automatic caching and state management
* **✅ Zod** - Runtime type validation with TypeScript integration
* **🎨 TailwindCSS** - Utility-first CSS framework for rapid UI development

### Developer Experience
* **📏 ESLint & Prettier** - Consistent code formatting and quality
* **🧪 Jest & Testing Library** - Comprehensive testing suite
* **🔒 TypeScript** - Type safety throughout the codebase
* **🔄 Fast Refresh** - Instant feedback during development
* **🐶 Husky & lint-staged** - Pre-commit hooks for code quality

### Production Ready
* **🔍 SEO Optimized** - Built-in meta tags, JSON-LD, and performance optimization
* **🌐 Internationalization** - Ready for global audiences
* **📱 Responsive Design** - Works beautifully on all device sizes
* **🔒 Environment Variable Validation** - Type-safe env variables with t3-env
* **📈 Performance Monitoring** - Track and improve application metrics

## 📋 Prerequisites

- Node.js 20.x or later
- pnpm 8.x or later
- PostgreSQL (or any database supported by Prisma)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zivtamary/next-better-auth-prisma-polar.git
cd your-repo-name
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your own values.

### 4. Set up the database

```bash
pnpm prisma migrate dev --name init
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

### Project Structure

```
├── app/                 # Next.js App Router
├── components/          # UI Components
├── hooks/               # Custom React Hooks
├── lib/                 # Utility functions and shared code
├── prisma/              # Prisma schema and migrations
├── public/              # Static assets
└── styles/              # Global styles
```

### Authentication

The boilerplate uses BetterAuth for authentication and user management. Configure your auth settings in the `.env.local` file.

### Database

Prisma is configured with PostgreSQL by default. You can modify the schema in `prisma/schema.prisma`.

### Payments & Subscriptions

Polar.sh integration is set up for handling payments and subscription management. Configure your Polar.sh API keys in the environment variables.

### UI Components

We use shadcn/ui components that are built on Radix UI. These are fully customizable and accessible by default.

## 🛠️ Customization

### Styling

All styling is done with TailwindCSS. Configure the theme in `tailwind.config.js`.

### Adding New Features

1. Create new components in the `components` directory
2. Add new API routes in the `app/api` directory
3. Create new pages in the appropriate directories under `app`

## 📈 Deployment

This boilerplate can be deployed on any platform that supports Next.js:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Self-hosted with Docker

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Polar.sh](https://polar.sh/)
- [BetterAuth](https://betterauth.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)

---

<p align="center">Created with ❤️ for the developer community</p># next-better-auth-prisma-polar
