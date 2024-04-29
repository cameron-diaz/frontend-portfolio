import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

export default function Projects() {
    return (
        <section>
            <SectionHeading>
                Projects
            </SectionHeading>
            <div className="">
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    )
                )}
            </div>
        </section>
    )
}

function Project({
    title,
    description, 
    tags,
    imageUrl,
}) {
    return (
        <div></div>
    )
}