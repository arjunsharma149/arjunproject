import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
    const avaliableDenominations = useSelector((state) => state.notes)
    return <>
        <br />
        <div className="row" >
            <h3  ><u>Available Denominations</u></h3>
        </div>
        <div className="row" >
            <ul>
                {
                    Object.entries(avaliableDenominations).reverse().map(([note, copies]) => (<li>{`Rs. ${note} X ${copies} = ${note * copies}`}</li>))
                }
            </ul>
        </div>
    </>
}