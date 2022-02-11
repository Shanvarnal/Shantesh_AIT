import React, {useState,useEffect} from 'react';

function Cal()
{
    const [amount,setAmount]=useState();
    const [year,setYear]=useState();
    const [rate,setRate]=useState(9);
    const [totalAmount,setTotalAmount]=useState("");
    const [loading,setLoading]=useState(false);

   const onSubmitBtn=()=>
    {
        let amt=amount;
        let yr=year*12;
        let rt=rate/100;
        let a=amt*rt;
        let b=a+parseInt(amt);
        let c=Math.ceil(b/yr);
        setTotalAmount(c);
        setLoading(true);
        console.log(rt,yr,a,b,c)
    }

   return(
       <>
       
       <div  className='m-5 p-3 border border-dark col-3'>
       <h3>Calculator</h3>
       <div className='form-group col-8 ' >
           <label>Amount</label>
           <input type="text" className='form-control' onChange={(e)=>setAmount(e.target.value)}/>
       </div>
       <div className='form-group col-8'>
           <label>Year</label>
           <input type="text" className='form-control' onChange={(e)=>setYear(e.target.value)}/>
       </div>
       <div className='form-group col-8'>
           <label>Rate</label>
           <input type="text" className='form-control' onChange={(e)=>setRate(e.target.value)}/>
       </div>
       <br></br>
       <div className='form-group col-8'>
           <button className='btn btn-success' onClick={onSubmitBtn}>Calculate</button>
       </div>
       <br></br>

       {loading?<h3 className='bg-primary '>TotalAmount : {totalAmount}</h3>:null}
       </div>  
       </>
   ); 
}

export default Cal;
