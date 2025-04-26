"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        <li><Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
        <li><Link href="/books" className={pathname === '/books' ? 'active' : ''}>Books</Link></li>
        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
}
