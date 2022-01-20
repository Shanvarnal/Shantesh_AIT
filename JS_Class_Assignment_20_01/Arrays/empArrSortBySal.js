var emparr=[
    {
        eid:101,
        ename:"shan",
        esal:25000
    },
    {
        eid:102,
        ename:"shail",
        esal:15000
    },
    {
        eid:103,
        ename:"soham",
        esal:55000
    },
    {
        eid:104,
        ename:"sam",
        esal:35000
    },
    {
        eid:105,
        ename:"Om",
        esal:45000
    }
]
emparr.sort(function(a,b)
{
    return a.esal-b.esal
})
for(var e of emparr)
document.write(e.eid+" "+e.ename+" "+e.esal+"<br>")
