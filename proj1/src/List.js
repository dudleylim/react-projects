import React, { useState } from "react";
import data from './data';

const List = ({stuff}) => {
    return(
        <>
            {stuff.map(stuf => {
                // destructure each object
                const {id, name, age} = stuf;
                return (
                    <div key={id} className="main-list-item">
                        <h2>{name}</h2>
                        <p>{age}</p>
                    </div>
                );
            })}
        </>
    );
};

export default List;