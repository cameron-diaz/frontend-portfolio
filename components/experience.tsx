'use client';
import SectionHeading from './section-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import React from 'react';

export default function Experience() {
    return (
        <section id='experience'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible
                            contentStyle={{
                                boxShadow: 'none',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{
                                borderRight: '0.4rem solid #9ca3af',
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: 'white',
                                fontSize: '1.5rem',
                            }}
                        >
                            <h3 className='font-semibold capitalize'>
                                {item.title}
                            </h3>
                            <p className='!mt-0 font-normal'>{item.location}</p>
                            <p className='!mt-1 font-normal'>{item.company}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
