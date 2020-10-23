import React, { useEffect, useState } from 'react';
import fakeWork from '../../../fakeData/Work'
import WorkOutDetails from '../WorkOutDetails/WorkOutDetails';

const WorkOut = () => {
    const [workInfo, setWorkInfo] = useState([])

    useEffect(() =>{
        const workData = fakeWork;
        setWorkInfo(workData)
    },[])
    console.log(workInfo)
    return (
        <section className='container my-5'>
            <div className="row">
                {
                    workInfo.map(work => <WorkOutDetails key={work.id} work={work}></WorkOutDetails>)
                }
            </div>
        </section>
    );
};

export default WorkOut;