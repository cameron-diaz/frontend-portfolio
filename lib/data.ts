import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const; // properties become readonly

export const projectsData = [
    {
        title: 'CorpComment',
        description:
            'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
        tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
        imageUrl: corpcommentImg,
    },
    {
        title: 'rmtDev',
        description:
            'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
        tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
        imageUrl: rmtdevImg,
    },
    {
        title: 'Word Analytics',
        description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
        tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const experiencesData = [
    {
        title: 'Web Developer',
        location: 'Remote (Durham, NC)',
        company: 'Momentum',
        description:
            'Achieved successful completion of immersive software development training over 16 weeks, specializing in refining skills in Python/Django, JavaScript, HTML, and CSS through hands-on, project-based learning. Engaged in solo, pair programming, and group projects daily and weekly to master contemporary development tools, methodologies, and industry best practices.',
        icon: React.createElement(LuGraduationCap),
        date: '2021',
    },
    {
        title: 'Associate Software Engineer',
        location: 'Remote (Raleigh, NC)',
        company: 'Insight Enterprises',
        description:
            'Engaged in a variety of client projects, refining skills in Front-End development and contributing to Back-End tasks. Utilized technologies such as React.js, HTML/CSS, Tailwind CSS, Next.js, Node.js, and AWS. Demonstrated adaptability to rapidly meet client needs and commitment to continuous learning. Designed UI for a Generative AI Chat application using Next.js.',
        icon: React.createElement(CgWorkAlt),
        date: '2021 - 2022',
    },
    {
        title: 'Software Engineer',
        location: 'Remote (Raleigh, NC)',
        company: 'Insight Enterprises',
        description:
            'Elevated proficiency in Front-End development with React and TypeScript, while broadening expertise to encompass Back-End tasks utilizing Node.js, AWS, and serverless technologies.Bridged the gap in back end development on a client project, seamlessly integrating front end and back end tasks to complete project requirements, thereby strengthening client relationships.',
        icon: React.createElement(FaReact),
        date: '2023 - 2024',
    },
] as const;

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Github',
    'Tailwind',
    'Prisma',
    'MongoDB',
    'Redux',
    'Express',
    'Python',
    'Django',
    'Framer Motion',
] as const;
