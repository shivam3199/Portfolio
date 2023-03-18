import React from 'react'
import Seperator from '../../Common/separator';
import { WorkData } from '../../Data/work';
import WorkCard from './work-card';
import './work.css';

function Work() {
    const data = WorkData;
    return (
        <div className='work'>
            <Seperator />
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {data.map((item) => {
                    return <WorkCard item={item} />;
                })}
            </div>
        </div>
    )

}

export default Work