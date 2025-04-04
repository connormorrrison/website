import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul>
          <li className="mb-2"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="mb-2"><Link href="/about" className="hover:underline">About</Link></li>
          <li className="mb-2"><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li className="mb-2"><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li className="mb-2"><Link href="/books" className="hover:underline">Books</Link></li>
          <li className="mb-2"><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-4">
        Under Construction
      </div>
    </div>
  );
}