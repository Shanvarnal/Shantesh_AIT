var a="%"
//a=a.charAt(0)
if(a>=0 && a<9)
{
    document.write("Then given char '" +a+"' is numeric")
}
else if(a>="a" && a<="z")
{
    document.write("Then given char '" +a+"' is alphabte")
}
else{
    document.write("Then given char '" +a+"' is not numeric and alphabte")
}