import './globals.css';
import Sidebar from './sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
