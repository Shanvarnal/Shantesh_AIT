import React,{ Component }from 'react';

class User extends Component{
    constructor()
    {
        super();
        this.state={
            userData: [{userid: 101,userName: 'Shan', status: 'Active'},
            {userid: 102,userName: 'Shail', status: 'Active'},
            {userid: 103,userName: 'Shanaya', status: 'Desiable'},
            {userid: 104,userName: 'Shruthi', status: 'Active'},
            {userid: 105,userName: 'Shrikant', status: 'Disbale'}],
            
            newStatus: 'Rest'
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(status1)
    {
        
        // let {newStatus}=this.state;
        // newStatus=status1;
        this.setState({newStatus :status1});
        console.log(status1)
    }
    render()
    {
        return(
            <>
            <h2>UserStatus: {this.state.newStatus}</h2>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th>UserId</th>
                        <th>UserName</th>
                        <th>Select</th>
                    </tr>
                    {this.state.userData.map((item,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{item.userid}</td>
                                <td>{item.userName}</td>
                                <td><button className='btn btn-info' onClick={()=>this.onClickHandler(item.status)}>Select</button></td>
                            </tr>
                             )
                        })
                    }
                </tbody>
            </table>
            </>
        );
    }
}

export default User;