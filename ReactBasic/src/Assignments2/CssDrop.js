import React, { useEffect, useState } from 'react';

function CssDrop(){
    const[dataArr,setDataArr]=useState([]);
    const[dataArr2,setDataArr2]=useState([]);
    const [loading,setLoading]=useState(true);
    const[eid,setEmpEid]=useState();
    const[eName,setEmpEName]=useState("");
    const[status,setEmpStatus]=useState("");
    const[cssClass,setCssClass]=useState("");
    const[cssStyle,setCssStyle]=useState({});
  

    useEffect(()=>{
        if(loading)
        {
            setLoading(false);
        }
    })
  const onSelectHandler1=(event)=>
    {
        let {options,selectedIndex}=event.target;
         setEmpStatus(options[selectedIndex].text);
         console.log("status",options[selectedIndex].text);
       
    }
    const onSelectHandler2=(event)=>
    {
        let {options,selectedIndex}=event.target;
        if(options[selectedIndex].text==="Classname")
        {  
            setCssClass(options[selectedIndex].text);
        }
        else{
            setCssStyle(options[selectedIndex].text);
        }
    
        console.log("css code",options[selectedIndex].text);
    }
   
    const onFromSubmit=(e)=>{
        e.preventDefault();
        let obj=new Object();
        obj.eid=eid;
        obj.eName=eName;
        obj.status=status;
        
        if(status==="Active" && cssClass==="Classname")
        {
            obj.cssClass="bg-primary text-white";
        }
        else  if(status==="DeActive" && cssClass==="Classname")
        {
            obj.cssClass="bg-warning text-white";
        }
        if(status==="Active" && cssStyle==="Style")
        {
            obj.cssStyle={'color':'white','backgroundColor':"Green"};
            obj.cssClass="";
        }
        else  if(status==="DeActive" && cssStyle==="Style")
        {
            obj.cssStyle={'color':'white','backgroundColor':"red"};
            obj.cssClass="";
        }
       
        dataArr.push(obj);
        console.log("Submited ...", dataArr); 
        setDataArr2([...dataArr]);
       console.log(dataArr2);
    }
    return(
        <>
        <div className="row">
         <div className='col-3 bg-secondary text-white border border-dark m-5 p-3'>
            <h3 className='bg-primary text-white '>Employee Data</h3>
         <form className='formGroup' onSubmit={onFromSubmit}>
                        <label>Employee Id:</label><br/>
                        <input type="text" className='form-control' name="eid" value={eid} onChange={e=>setEmpEid(e.target.value)}/><br/>
                        <label>Employee Name:</label><br/>
                        <input type="text" className='form-control' name="eName" value={eName} onChange={e=>setEmpEName(e.target.value)}/><br/>
                    <label>Status:</label>
                    <select onChange={onSelectHandler1}>
                        <option>Active</option>
                        <option>DeActive</option>
                    </select>
                    <br></br> <br></br>
                    <label>CSS:</label>
                    <select onChange={onSelectHandler2}>
                        <option>Style</option>
                        <option>Classname</option>
                    </select>
                    <br></br> <br></br>
                    <input type="submit" className='btn btn-success'/><br/>
                    </form>
            </div>
            <div className='col-7 border border-dark m-5 p-3'>
       <h1 className='bg-primary text-white'>Employee Details</h1>
       {loading?<div className='bg-success text-white border border-dark w-75 m-2 '>Loading Data....!</div>:null}
       <br></br>
        <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Employee ID</th> 
                  <th>Employee Name</th> 
                  <th>Status</th> 
                </tr>
                {dataArr2.map((data,idx)=>
                {
                    return(
                        <tr key={idx} >
                            <td>{data.eid}</td>
                            <td>{data.eName}</td>
                            <td className={data.cssClass} style={data.cssStyle}>{data.status}</td>
                        </tr>
                    )
                })}
           </tbody>
       </table>
       </div>
            </div>
        </>
    );
}

export default CssDrop;
