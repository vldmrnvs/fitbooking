import './globals.css';
import type { Metadata } from 'next';
// Import Geist Sans font from the `geist` package. This package provides
// first‑class support for Vercel's Geist typeface in Next.js. See
// https://www.npmjs.com/package/geist for details. We register the font with
// a custom CSS variable (`--font-geist`) so that it integrates with our
// Tailwind configuration (see tailwind.config.js where `fontFamily.geist` is
// defined to use this variable). The subsets option ensures latin characters
// are included.
// The Geist font is loaded via a Google Fonts import in `globals.css`. See
// that file for the `@import` statement. Tailwind's theme includes a
// `font-geist` class that sets the `font-family` to Geist. We no longer import
// the font through the `geist` package here because it caused build errors in
// the user's environment.

export const metadata: Metadata = {
  title: 'FitBooking',
  description: 'Agenda para estudios de fitness, yoga y pilates'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="fitbooking">
      {/* Apply Geist font globally using the `font-geist` class defined in
          tailwind.config.js. The actual font is loaded via a Google Fonts
          @import in `globals.css`. */}
      <body className="font-geist">
        <nav className="navbar bg-base-100 border-b border-base-200 mb-4">
          <div className="container mx-auto flex justify-between items-center px-2">
            <a href="/" className="font-bold text-lg">FitBooking</a>
            <div className="space-x-4">
              <a href="/lumi/schedule" className="btn btn-sm btn-ghost">Agenda</a>
              <a href="/admin" className="btn btn-sm btn-ghost">Admin</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}