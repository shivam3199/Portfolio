import React from 'react'
import Seperator from '../../Common/separator';
import { ProjectData } from '../../Data/Projects';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Seperator />
            <lable className='section-title'> Projects </lable>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project} />;
                })}

            </div>
        </div>
    )
}

export default Projects