import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData/Choose'
import ChooseUSDetails from '../ChooseUSDetails/ChooseUSDetails';

const ChooseUs = () => {
    const [chooseUs, setChooseUs] = useState([])

    useEffect(() => {
        const information = fakeData;
        setChooseUs(information)
    }, [])

    console.log(chooseUs);

    return (
        <section className="container text-center my-5">
            <h1><span className="commonColor">WHY</span>CHOOSE US</h1>
            <div className='row my-5'>
                {
                    chooseUs.map(details => <ChooseUSDetails key={details.id} details={details}></ChooseUSDetails>)
                }
            </div>
        </section>
    );
};

export default ChooseUs;