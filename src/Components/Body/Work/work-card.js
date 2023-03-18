import React from 'react'
import './work-card.css';

function WorkCard({ item }) {
    return <div className='work-card'>
        <img src={item.companyLogo} alt='' className='company-logo' />
        <div className='work-info'>
            <lable className="company-name">{item.company}</lable>
            <div className='designation'>
                <label>{item.designation}</label>
            </div>
            <div className='work-dates'>
                <lable>{item.dateJoining}</lable>-<label>{item.dateEnd}</label>
            </div>
            <div className='work-desc'>
                <p>{item.work}</p>
            </div>
        </div>
    </div>;
}

export default WorkCard