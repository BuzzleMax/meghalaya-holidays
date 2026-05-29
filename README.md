# Meghalaya Holidays

A modern, responsive travel booking website for Meghalaya, Assam & Arunachal Pradesh. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Hero Section**: Stunning landing with animated elements and trust badges
- **Tour Packages**: Curated travel itineraries with detailed information
- **Cab Fleet**: Premium vehicle options with specifications and pricing
- **Why Choose Us**: Feature highlights showcasing service benefits
- **Reviews**: Auto-scrolling customer testimonials carousel
- **Booking Tabs**: Interactive booking interface for cabs, packages, and homestays
- **Responsive Design**: Mobile-first approach with touch-optimized interactions

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/meghalaya-holidays.git

# Navigate to the project directory
cd meghalaya-holidays

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
meghalaya-holidays/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, TourPackages, etc.)
│   ├── ui/              # Reusable UI components (Button, Input, etc.)
│   └── features/        # Feature components
├── lib/                  # Utility functions
│   └── motion-variants.ts # Shared Framer Motion variants
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Tailwind Theme

The project uses a custom Tailwind configuration defined in `tailwind.config.ts`:

- Custom colors: primary, accent, background, text
- Custom font families
- Custom background images
- Custom backdrop blur settings

### Component Variants

Shared Framer Motion variants are centralized in `lib/motion-variants.ts`:
- `containerVariants` - Staggered container animations
- `cardVariants` - Card entrance animations
- `itemVariants` - Individual item animations
- `fadeInUpVariants` - Fade and slide animations
- `tabVariants` - Tab transition animations

## 🚢 Deployment

### Vercel

The project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Environment Variables

Currently, no environment variables are required. If you need to add them:

1. Create a `.env.local` file in the root directory
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL=your_api_url`)
3. Restart the development server

### Build Optimization

The project includes:
- Static page generation for optimal performance
- Automatic image optimization via Next.js Image component
- Tree shaking for minimal bundle size
- CSS purging via Tailwind CSS

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Touch targets are optimized for mobile (minimum 44x44px) following accessibility guidelines.

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory (`components/ui/`, `components/sections/`, etc.)
2. Use shared variants from `lib/motion-variants.ts` for animations
3. Use reusable UI components (`Button`, `Input`, `SectionHeader`) when possible
4. Follow TypeScript best practices with proper typing

### Styling Guidelines

- Use Tailwind utility classes
- Leverage shared components for consistency
- Maintain mobile-first responsive approach
- Ensure adequate touch targets for mobile

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
