import React,{useState} from 'react';
import ADPDCTStore from '../store/ADPDCTStore';
import ADPDCTAction from '../action/ADPDCTAction';

function AddProduct(props){
    const [edValue,setEdValue]=useState(props.parameter1);
    const [productName,setProductName]=useState(edValue);
    const [discription,setDiscription]=useState("");
    const [price,setPrice]=useState("");
    const [status,setStatus]=useState(false);
    

    const onSubmitDetails=()=>{
        console.log(productName,"--",discription,"--",price,"--",status);
        setProductName('');
        setDiscription('');
        setPrice('');
        setStatus(false);
        
        ADPDCTStore.dispatch(ADPDCTAction(productName,discription,price,status));

        let Result = ADPDCTStore.getState();
        console.log("result: ",Result);
    }

    const onCancle=()=>{
        setProductName('');
        setDiscription('');
        setPrice('');
        setStatus(false);
    }

    return(
        <>
            <div className='productmain'>
            <div className='productsub-main'>
                <div>
                    <div>
                        <h4 className=' m-5'>Add Product Page</h4>
                        <div >
                            <input type="text" placeholder='Product Name' className='name'  value={productName}  onChange={(e)=>setProductName(e.target.value)} />
                        </div>
                        <div className='second-input'>
                            <input type="text-area" placeholder='Description ' className='name'  value={discription}  onChange={(e)=>setDiscription(e.target.value)}/>
                        </div>
                        <div className='second-input'>
                            <input type="text" placeholder='Price ' className='name'  value={price}  onChange={(e)=>setPrice(e.target.value)} />
                        </div>
                        <div className='second-input'>
                            <label className='labesTags'>Status:</label> <input type='checkbox' checked={status} onChange={(e)=>setStatus(e.target.checked)} />
                        </div>
                        <div className='loginButton'>
                            <button  className='proBtn1'  onClick={onSubmitDetails}>Submit</button>
                            <button  className='proBtn2' onClick={onCancle}>Cancle</button>
                        </div>
                           
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AddProduct;