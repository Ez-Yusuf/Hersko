//Links

//Games
let Games = {
    "a-dark-room":
    {
        Name: "A Dark Room"
    }
}
//Variables

//Code
function GenerateTest(name)
{
    var iframe = document.createElement('iframe');

    // div tag in which iframe will be added should have id attribute with value myDIV
    document.getElementById("gamesdiv").appendChild(iframe);
    
    // provide height and width to it
    iframe.setAttribute("style","height:600px;width:600px;");
    iframe.contentWindow.document.open();
    iframe.src = "Games/Strategy/adarkroom/index.html"
    iframe.contentWindow.document.close();
}

function Generate(id)
{
    alert(Games[id]["Name"])
}