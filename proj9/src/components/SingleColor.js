import { useState } from 'react';
import Values from 'values.js';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// color object has properties rgb and weight
// because we want hex values, we need to convert rgb to hex
const SingleColor = ({rgb, weight, index}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);

    const copyClipboard = () => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    };

    // to display the color, we kinda need to inline style the divs
    if (index > 10) {
        return (
            <div style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {copyClipboard()}}>
                <p style={{color: 'white'}}>{weight}%</p>
                <p style={{color: 'white'}}>{hex}</p>
            </div>
        );
    }
    return (
        <div style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {copyClipboard()}}>
            <p>{weight}%</p>
            <p>{hex}</p>
        </div>
    );
};

export default SingleColor;