import React, {useState,useEffect} from 'react';

function Drop(){

    const[studentArr,setStudentArr]=useState([]);
    const[loading,setLoading]=useState(true);
    const [ filtr, setFiltr ]=useState("");
    const[dropValue,setdropValue]=useState([]);

    useEffect(()=>{
        let sData=[{id:101, name:"Shan",marks:65,add:"Pune"},
        {id:102, name:"Shail",marks:75,add:"Pune"},
        {id:103, name:"Kumar",marks:86,add:"Mumbai"},
        {id:104, name:"Karthik",marks:61,add:"Banglore"},
        {id:105, name:"Sam",marks:53,add:"Mumbai"},
        {id:106, name:"Mrunal",marks:40,add:"Hyderabad"},
        {id:107, name:"Kiran",marks:65,add:"Pune"}];
        
        let fitData=[...new Set(sData.map(itm=> itm.add))];
        
        if(loading)
        {
            
            setStudentArr(sData);
            setdropValue(fitData);
            console.log("filter",fitData);
            setLoading(false);
            
        }
    })

    const onSelectHandler=(event)=>
    {
        let {value,options,selectedIndex}=event.target;
        let temp=options[selectedIndex].text;
        console.log(temp);
        setFiltr(temp);
        if(filtr!==""){
        setTimeout(() => {
            console.log("filter",filtr);
            let newSData=studentArr.filter(function (a){return a.add===filtr});
            console.log(newSData);
             setStudentArr(newSData);
             },1000);
        }

    }

    const onChangeHandler=()=>
    {

    }

    const onFromSubmit=()=>
    {

    }

    return(
        <>
        <div className="row">
         <div className='col-3 bg-secondary text-white border border-dark m-5 p-3'>
            <h3 className='bg-primary text-white '>Student Data</h3>
         <form className='formGroup' onSubmit={onFromSubmit}>
                        <label>Student Id:</label><br/>
                        <input type="text" className='form-control' name="id" value={setStudentArr.id} onChange={onChangeHandler}/><br/>
                        <label>Student Name:</label><br/>
                        <input type="text" className='form-control' name="sname" value={setStudentArr.sname} onChange={onChangeHandler}/><br/>
                        <label>Marks:</label><br/>
                        <input type="text" className='form-control' name="marks" value={setStudentArr.marks} onChange={onChangeHandler}/><br/>
                        <label>Address:</label><br/>
                        <input type="text" className='form-control' name="add" value={setStudentArr.add} onChange={onChangeHandler}/><br/>
                    <input type="submit" className='btn btn-success'/><br/>
                    </form>
            </div>
        <div className='col-7 border border-dark m-5 p-3'>
       <h1 className='bg-primary text-white'>Student Details</h1>
       {loading?<div className='bg-success text-white border border-dark w-75 m-2 '>Loading Data....!</div>:null}
       <br></br>
       <select className=' border border-secondary' onChange={onSelectHandler}>
           {dropValue.map((data,idx)=><option key={idx} >{data}</option>)}
           
       </select>
       <br></br>
       <br></br>
        <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Student Id</th> 
                  <th>Student Name</th> 
                  <th>Marks</th> 
                  <th>Address</th>  
                </tr>
                {studentArr.map((data,idx)=>
                {
                    return(
                        <tr key={idx}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.marks}</td>
                            <td>{data.add}</td>
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

export default Drop;
