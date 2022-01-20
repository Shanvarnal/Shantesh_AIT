var sub1=parseInt(prompt("Enter marks of subject1:"))
var sub2=parseInt(prompt("Enter marks of subject2:"))
var sub3=parseInt(prompt("Enter marks of subject3:"))
var sub4=parseInt(prompt("Enter marks of subject4:"))
var sub5=parseInt(prompt("Enter marks of subject5:"))

var total=sub1+sub2+sub3+sub4+sub5
var per=(total/500)*100
document.write("Percentage is="+per+"<br>")
if(per>=75)
{
    document.write("Grade id A")
}
else if(per>=60)
{
    document.write("Grade is B")
}
else if(per>=50)
{
    document.write("Grade is C")
}
else if(per>=35)
{
    document.write("Grade is D")
}
else 
{
    document.write("Grade is E")
}