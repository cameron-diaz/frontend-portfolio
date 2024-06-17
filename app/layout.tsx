import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Cameron | Developer Portfolio',
    description: 'Front-End Developer Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body
                className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900
                dark:bg-opacity-80 dark:text-gray-50 dark:text-opacity-90 sm:pt-36
                `}
            >
                <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[41.25rem] w-[40rem] rounded-full bg-[#e2fbe4] blur-[9rem] dark:bg-[#6774b3] sm:w-[68.75rem]'></div>
                <div className='md:left=[-33rem] xl:left=[-15rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] lg:left-[-28rem] 2xl:left-[-5rem]'></div>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position='top-right' />
                    </ActiveSectionContextProvider>
                    <ThemeSwitch />
                </ThemeContextProvider>
            </body>
        </html>
    );
}
