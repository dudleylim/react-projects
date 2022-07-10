import React, {useState} from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

const Question = ({title, info}) => {
    const [toggle, setToggle] = useState(false);
    const toggleInfo = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    return (
        <li>
            <h1>{title}</h1>
            <p>{toggle ? info : ""}</p>
            <button onClick={() => {toggleInfo()}}>
                {!toggle ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
            </button>
        </li>
    );
};

export default Question;