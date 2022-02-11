import React, { Component } from 'react';
class Client extends Component {
    constructor() {
        super();
        this.state = {
            Counter: 1, Name: 'Test', ClientData: [{ clientid: 123, clientname: 'A1 Pvt Ltd', address: 'New Delhi' },
            { clientid: 124, clientname: 'A2 Pvt Ltd', address: 'New Delhi' },
            { clientid: 125, clientname: 'A3 Pvt Ltd', address: 'New Delhi' },
            { clientid: 126, clientname: 'A4 Pvt Ltd', address: 'New Delhi' },
            { clientid: 127, clientname: 'A5 Pvt Ltd', address: 'New Delhi' }
            ], showDeleteModel: false, selectedIndex: -1, ClientElements:{clientid:'',clientname:'',address:''}
        };
    }
    onDelete = (rowIndex) => {
        this.setState({ showDeleteModel: true, selectedIndex: rowIndex });
    }
    onDeleteYes = () => {
        let { ClientData } = this.state;
        ClientData.splice(this.state.selectedIndex, 1);
        this.setState({ ClientData, showDeleteModel: false });
    }
    onDeleteNo = () => {
        this.setState({ showDeleteModel: false })
    }
    onSubmit =()=>{
        console.log(this.state.ClientElements);
    }
    onChangeHandler =(e)=>{
        // console.log("Event ", e.target.name, e.target.value);
        let { name, value } = e.target;
        let { ClientElements } = this.state;
        this.setState({ClientElements:{...ClientElements,[name]:value}})
        console.log("Submit ", this.state.ClientElements);
    }

    render() {
        return (
            <>
                <h1>User Status : </h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Client Id</label>
                            <input type="text" className="form-control" name="clientid" value={this.state.ClientElements.clientid} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Client Name</label>
                            <input type="text" className="form-control" name="clientname" value={this.state.ClientElements.clientname} onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" name="address" value={this.state.ClientElements.address} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {this.state.showDeleteModel ? <div>
                            <h1>Are you sure delete this record</h1>
                            <button className='btn btn-info mr-5' onClick={this.onDeleteYes}>Yes</button>
                            <button className='btn btn-info mr-5' onClick={this.onDeleteNo} >No</button>
                        </div> : null}
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th>Client Id</th>
                                    <th>Client Name</th>
                                    <th>Address</th>
                                    <th>Delete</th>
                                </tr>
                                {this.state.ClientData.map((item, idx) => {
                                    return (
                                        <tr key={idx}><td>{item.clientid}</td>
                                            <td>{item.clientname}</td>
                                            <td>{item.address}</td>
                                            <td><button className='btn btn-danger' onClick={() => this.onDelete(idx)} >Delete</button></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </>
        )
    }
}

export default Client;