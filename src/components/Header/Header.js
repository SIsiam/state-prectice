import React, { useContext } from 'react';
import { CatagoryContex } from '../../App';

const Header = () => {
    const [catagory, setCatagoty] = useContext(CatagoryContex)
    return (
        <div>
            <h2>This Is a Header : {catagory} </h2>
            <button onClick={() => setCatagoty("laptop")} >laptop Me</button>
            <button onClick={() => setCatagoty("Mobile")} >Mobile Me</button>
            <button onClick={() => setCatagoty("Camera")} >Camera Me</button>
        </div>
    );
};

export default Header;