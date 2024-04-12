import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cameron | Developer Porfolio',
  description: 'Front-End Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#e2fbe4] blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='md:left=[-33rem] xl:left=[-15rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] lg:left-[-28rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
