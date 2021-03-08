import React, { useContext } from 'react';
import { CatagoryContex } from '../../App';

const CatagoryDetails = () => {
    const cat = useContext(CatagoryContex) 

    return (
        <div>
            <h3>This Is Grandson CatagoryDetails : {cat} </h3>
        </div>
    );
};

export default CatagoryDetails;