import { geist } from './ui/fonts';
import './ui/global.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Acme Dashboard',
    template: '%s | Acme Dashboard'
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <footer className="py-2 flex justify-center items-center">
          <p>Copyright © {new Date().getFullYear()} | Made with ❤️ by <Link className="hover:underline" href="https://www.linkedin.com/in/lucascalvino">Lucas Calviño</Link></p>
        </footer>
      </body>
    </html>
  );
}
