function clickCount()
{
    if(sessionStorage.clickcount)    
    {
        sessionStorage.clickcount=Number(sessionStorage.clickcount)+1
    }
    else{
        sessionStorage.clickcount=1
    }

    document.getElementById("d1").innerHTML=sessionStorage.clickcount
}

function clickCount2()
{
    if(localStorage.clickcount)    
    {
        localStorage.clickcount=Number(localStorage.clickcount)+1
    }
    else{
        localStorage.clickcount=1
    }

    document.getElementById("d3").innerHTML=localStorage.clickcount
}

//localStorage.clear()