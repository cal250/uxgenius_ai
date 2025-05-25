import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
     title: 'UXGenius AI - AI-Powered UX Design Platform',
     description: 'Transform your user experience with AI-powered design insights and recommendations.',
     keywords: 'UX Design, AI, User Experience, Design Tools, UX Audit',
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               <body className={inter.className}>
                    <main className="min-h-screen bg-secondary-50">
                         {children}
                    </main>
               </body>
          </html>
     );
} 