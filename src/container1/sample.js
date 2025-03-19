import React, { useState } from 'react';
import Option from "./Option.js";
const Search_1 = ({ placeholder, icon }) => {
    const [isDisplay, setIsDisplay] = useState(true);
    const options = [{
        id: 1,
        placeholder: 'ALABAMA'
    }, {
        id: 2,
        placeholder: 'ALASKA'
    }, {
        id: 3,
        placeholder: 'ARIZONA'
    }]
    const [selectedId, setIsSelectedId] = useState(null);
    return (
        <div className="innercontainer">
            <div onClick={() => setIsDisplay(!isDisplay)} className="search-box">
                <input type="text" className="labelcss" placeholder={placeholder} disabled />
                <i className="sicon">{icon}</i>
            </div>
            {isDisplay && (
                <div>
                    {options.map(option => {
                        return (
                            <Option id={option.id} placeholder={option.placeholder} selected={selectedId === option.id} onSelect={setIsSelectedId} />
                        )
                    })}
                </div>
            )}
        </div>
 
    );
};
export default Search_1;