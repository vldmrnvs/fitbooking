'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 border-b border-base-200 mb-4">
      <div className="container mx-auto flex justify-between items-center px-2">
        <Link href="/" className="font-bold text-lg">
          FitBooking
        </Link>
        <div className="space-x-4">
          <Link href="/lumi/schedule" className="btn btn-sm btn-ghost">
            Agenda
          </Link>
          <Link href="/admin" className="btn btn-sm btn-ghost">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}