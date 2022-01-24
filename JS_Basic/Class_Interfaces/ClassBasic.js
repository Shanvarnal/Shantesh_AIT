class Car
{
    constructor()
    {
        console.log("This is costructor")
       

    }
    constructor(c_ID,c_Name,c_Price)
    {
        this.c_ID=c_ID;
        this.c_Name=c_Name;
        this.c_Price=c_Price;

        console.log("this is parametrized constructor")
    }

    show()
    {
        console.log("In show method")
        document.write("In show method"+"<br>")
        return this.c_Name+" Super Model"
    }
}

var car1=new Car()
var tx=car1.show
console.log(tx)
var car2=new Car(121,"Telsa",65000)
console.log(car2.c_Name)
document.write(car2.c_Name+"<br>")
var txt=car2.show()
document.write(txt+"<br>")
console.log(txt)
document.write("in document print "+car2.show()+"<br>")


