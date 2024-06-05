'use client';
import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    return (
        <button
            className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105
        '
            onClick={toggleTheme}
        >
            {theme === 'light' ? <BsSun /> : <BsMoon />}
        </button>
    );
}
