import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'PM Resources | AI-First Product Management',
  description: 'Expert Resources in Product Management by Aditya Kuranjekar — PM Coordinator at Finance Club IIT Patna & Founder of Skillify Me.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
