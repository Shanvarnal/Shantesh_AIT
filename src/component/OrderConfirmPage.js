import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyCart.css';

function OrderConfirm(){

    const navigate = useNavigate();
    const onBtnClick = () => {
        navigate("/");
    }

    return(
        <>
          <div className='orderPage'>
          <h1 className=' msgOrder'>Order SuccessFull...!</h1>
            <button  className='onContinueOrder' onClick={onBtnClick}>Continue Shopping</button>
          </div>
        </>
    );
}

export default OrderConfirm;