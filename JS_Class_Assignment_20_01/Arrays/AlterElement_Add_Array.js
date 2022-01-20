var arr=[1,2,88,6,77,9,0.22]
var sum=0;
for(var a=0;a<arr.length;a++)
{
    if(a%2==0)
    {
        sum=sum+arr[a]
    }
}
document.write("Sum of alternate elements="+sum+"<br>")