import React, {useState,useEffect} from 'react';

let cData=[{cId :101, Name:"Shan", salary:"25000", dept:"Web Develpoer"},
{cId :102, Name:"Shail", salary:"25000", dept:"Web Develpoer"},
{cId :103, Name:"Shantanu", salary:"25000", dept:"Tester"},
{cId :104, Name:"Suresh", salary:"25000", dept:"Web Develpoer"},
{cId :105, Name:"Shital", salary:"25000", dept:"Admin"},
{cId :106, Name:"Kumar", salary:"25000", dept:"Tester"},
{cId :107, Name:"Karthik", salary:"25000", dept:"Web Develpoer"},
{cId :108, Name:"Sam", salary:"25000", dept:"Tester"},
{cId :108, Name:"Sam", salary:"25000", dept:"HR"},
{cId :108, Name:"Sam", salary:"25000", dept:"HR"}];

function ClientRecord(){
    const[clientArr,setClientArr]=useState(cData);
    const[clientArr2,setClientArr2]=useState(cData);
    const [loading,setLoading]=useState(true);
    const [ filtr, setFiltr ]=useState("");
    const[dropValue,setdropValue]=useState([]);
    


useEffect(()=>{
   
    let fitData=[...new Set(cData.map(itm=> itm.dept))];
    
    if(loading)
    {
        
        setdropValue(fitData);
        //console.log("filter",fitData);
        setLoading(false);
       
        
    }
})

const onSelectHandler=(event)=>{
    let {value,options,selectedIndex}=event.target;
    console.log(options[selectedIndex].text);
    setFiltr(options[selectedIndex].text);
    console.log("filter",filtr);
    //  let carr=clientArr;
    //  console.log(carr);
    console.log("clientarr2 ",clientArr2);
    setClientArr(clientArr2);
    console.log("clientarr: ",clientArr);
    let newCData=clientArr.filter(function (a){return a.dept===options[selectedIndex].text});
     console.log("filter data ",newCData);
    setClientArr(newCData);
   
}

    return(
        <>
     <div className='col-8 border border-dark m-5 p-3'>
       <h1>Employee List</h1>
       {loading?<span>Loading Data....</span>:null}
       <br></br>
       <select className=' border border-secondary' onChange={onSelectHandler}>
           {dropValue.map((data,idx)=><option key={idx} >{data}</option>)}
           
       </select>
       <br></br>
       <br></br>
       <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Employee Id</th> 
                  <th>Employee Name</th> 
                  <th>Salary</th> 
                  <th>Department</th>  
                </tr>
                {clientArr.map((data,idx)=>
                {
                    return(
                        <tr key={idx}>
                            <td>{data.cId}</td>
                            <td>{data.Name}</td>
                            <td>{data.salary}</td>
                            <td>{data.dept}</td>
                        </tr>
                    )
                })}
           </tbody>
       </table>
       </div>
      
        
        </>
    );
}


export default ClientRecord;
