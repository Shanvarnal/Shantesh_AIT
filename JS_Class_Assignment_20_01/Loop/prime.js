var a=4
var flag=true
for(var i=2;i<a;i++)
{
    if(a%i==0)
    {
         flag=false
        break
    }

}
if(flag==true)
{
    document.write("Given number "+a+" is Prime number"+"<br>")

}
else
{
    document.write("Given number "+a+" is Not a Prime number"+"<br>")
}
