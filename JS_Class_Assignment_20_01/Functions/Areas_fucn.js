function area_circle(r)
{
    const pi=3.14
    let area=pi*r*r
    document.write("area of circle ="+area+"<br>")
}
function area_triangle(b,h)
{
    let area=0.5*b*h
    document.write("area of  triangle ="+area+"<br>")
}
function area_rectangle(l,h)
{

    let area=l*h
    document.write("area of rectangle ="+area+"<br>")
}
function arear_square(a)
{
   
    let area=a*a
    document.write("area of square ="+area+"<br>")
}

area_triangle(10,8)
area_rectangle(10,20)
arear_square(6)
area_circle(3)