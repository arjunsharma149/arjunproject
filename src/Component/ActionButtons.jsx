import React from 'react';
import { useNavigate } from 'react-router-dom';


export default () => {
    const navigate = useNavigate();
    const isWithdraw = window.location.pathname.includes('/withdraw');

    return <div className="action-button-container" >
        <div className={`action-btn ${isWithdraw ? '' : 'active'}`} onClick={() => navigate('deposit')} >Deposit</div>
        <button className={`action-btn ${isWithdraw ? 'active' : ''}`} onClick={() => navigate('withdraw')} >Withdraw</button>
    </div>
}