import React from 'react'
import './project-card.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>{project.name}</label>
        <div className='project-links'>
          {project.demo && (
            <a className='project-link' href={project.demo}>
              <div className='link-button'>
                <VisibilityIcon fontSize='small' />Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className='project-link' href={project.github}>
              <div className='link-button'>
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className='project-tags'>
          {project.tags.map((tag) => {
            return <label className='tag'>{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt='' className='project-photo' />
    </div>
  )
}

export default ProjectCard