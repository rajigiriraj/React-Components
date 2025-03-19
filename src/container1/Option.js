import React from 'react';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
const Option = ({ id, placeholder, selected, onSelect }) => {
    return (
        <div className='optioncontainer'>
            <input type='text' className='optioncss' placeholder={placeholder} disabled></input>
            <i className='icon' onClick={() => onSelect(id)} style={{ color: selected ? 'cadetblue' : 'gray' }}>
                {selected ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
            </i>
        </div>
 
    );
};
 
export default Option;