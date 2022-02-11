import React, { Component } from 'react';

class Product extends Component{

    constructor(){
        super();
        this.state={editIndex:-1,edifFlag:false,defaultCat:"",verfyDelete:false,pStatus:false,pShow:false,pStore:false,selectedIndex:-1,
           productCode1:101,Product:{productcode:"",productName:"",category:"",status:"",store:""},productData:[],pData:[]}
    }
onChangeHandler=(e)=>{
    console.log("change ", e.target);
    let { Product,productCode1 } = this.state;
    let { name, value, checked } = e.target;
    if(value ==='Show room')
    {
        this.setState({pShow:true,pStore:false})
    }
    if(value ==='Store1') {
        this.setState({pShow:false,pStore:true})
    }
    if (name === 'status') {
        value = checked;
        this.setState({pStatus:checked});
    }
    Product.productcode=productCode1;
    
    this.setState({ Product: { ...Product, [name]: value } });
    console.log("change product",Product);
}
onSubmit = (e) => {
    e.preventDefault();
    let { productData, Product, editIndex,productCode1,edifFlag } = this.state;
    if(editIndex>=0)
    {
        productData[editIndex] = Product;
    } else {
        
        productData.push(Product);
    }        
    this.setState({productData, pStatus:false});        
    this.setState({pData:productData});
    Product = { productcode: '', productName: '', category:'',status: '', store: '' };
    this.setState({Product});
    this.setState({productCode1:productCode1+1});
    this.setState({pShow:false,pStore:false, editIndex:-1,defaultCat:"Select"});
}
onDelete=(indxParameter)=>{
    this.setState({verfyDelete:true,selectedIndex:indxParameter})
}
onClickYes = ()=>{
    let  { pData,selectedIndex } = this.state;
    pData.splice(selectedIndex,1);
    this.setState({pData,verfyDelete:false});
}
onClickNo=()=>{
    this.setState({verfyDelete:false});
}
onEdit = (item, index)=>{
    console.log("Item ", item);
    let  { Product, pStatus, pShow, pStore, editIndex,productCode1 ,edifFlag} = this.state;
    editIndex = index;
    productCode1 = item.productcode;
    Product.productName = item.productName;
    Product.category = item.category;
    Product.status = item.status;
    Product.store = item.store;
    pStatus = item.status;
    edifFlag=true;
    if(item.store ==='Show room')
    {
        pShow = true;
        pStore = false;
    }
    if(item.store ==='Store1')
    {
        pStore = true;
        pShow = false;
    }
    this.setState({Product, pStatus, pShow, pStore, editIndex,productCode1,edifFlag});

}
    render(){
        let {Product,pStatus,pShow,pStore,pData,pCat,productCode1}=this.state;
        return(
            <>
                 <div className='row'>
                    <div className="col-3 border border-dark bg-secondary text-white m-5 p-3">
                        <form onSubmit={this.onSubmit}>
                            <h5 className='bg-primary text-white'>Product</h5>
                            <div className="form-group">
                                <label>Product Code</label>
                                <input type="number" className="form-control" name="productCode1" value={productCode1} onChange={this.onChangeHandler} />
                            
                                <label>Product Name</label>
                                <input type="text" className="form-control" name="productName" value={Product.productName} onChange={this.onChangeHandler} />
                                <br></br>
                                <label>Category:</label>
                                <select  name="category" value={Product.category} onChange={this.onChangeHandler}>
                                <option  value="Select">--Select--</option>
                                <option  value="Electronics">Electronics</option>
                                <option   value="Cloth">Cloth</option>
                                </select>
                                <br></br>
                                <label>Status</label>
                                <input type="checkbox" className="ml-3" name="status" checked={pStatus} onChange={this.onChangeHandler} />
                                <br></br>
                                <label>Type : </label>
                                <span className="m-1">Show room:</span>  <input type="radio" name="store" checked = {pShow} className=" " value="Show room" onChange={this.onChangeHandler} />
                                <span className="m-1">Store1:</span>   <input type="radio" name="store" checked = {pStore} className=" " value="Store1" onChange={this.onChangeHandler} />
                                <br></br>
                                <input type="submit" className="btn btn-success m-2" />
                               
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6 border border-dark bg-light m-3 p-3'>
                    {this.state.verfyDelete ?
                <div className='border border-dark bg-warning m-2'>
                <h2>Do you want to delete?</h2>
                <button className='btn btn-danger m-3' onClick={this.onClickYes}>Yes</button>
                <button className="btn btn-success  " onClick={this.onClickNo} >No</button>
                </div> : null}
                    <h5 className='bg-primary text-white'>Product List</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Store</th>
                                </tr>
                                {pData.map((item,idx)=>{
                                    return(
                                        <tr key={idx}>
                                            <td>{item.productcode}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.category}</td>
                                            <td><input type="checkbox" checked={item.status} onChange={()=>{}}/> </td>
                                            <td>{item.store}</td>
                                            <td><button className="btn btn-info" onClick={()=>this.onEdit(item,idx)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.onDelete(idx)}>Delete</button></td>
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
}


export default Product;