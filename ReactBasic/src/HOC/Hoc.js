import React,{Component} from 'react';
export default function HOC(ComponentName)
{
    return class extends Component
    {
        render()
        {
            return(
                <>
                   <div className="bg-warning text-white p-5 mt-1">
                        <ComponentName/>
                   </div>
                </>
            )
        }
    }
    // return(
    //     <>
    //     <div className="bg-success text-white p-5 mt-1">
    //          <ComponentName/>
    //     </div>
    //  </>
    // )
  
}