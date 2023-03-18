import React from 'react'
import Seperator from '../../Common/separator';
import { SkillsData } from '../../Data/Skills';
import SkillCard from './skill-card';
import './skills.css';

function Skills() {
    const data = SkillsData;
    return (
        <div className='skills'>
            <Seperator />
            <lable className='section-title'>Skills</lable>
            <div className='skills-container'>
                {data.map((item) => {
                    return (
                        <div className='skills-section'>
                            <lable className='skills-section-title'>{item.type}</lable>
                            <div className='skills-list'>
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills