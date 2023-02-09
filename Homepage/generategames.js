//Links

//Games

let Games = {
    "a-dark-room":
    {
        Name: "A Dark Room",
        Image: "",
        Description: "awake. head throbbing. vision blurry. come light the fire."
    }
}
//Variables

//Code
function GenerateTest(id)
{
    var iframe = document.createElement('iframe');

    // div tag in which iframe will be added should have id attribute with value myDIV
    document.getElementById("gamesdiv").appendChild(iframe);
    // provide height and width to it
    iframe.setAttribute("style","height:400px;width:400px;");
    iframe.contentWindow.document.open();
    iframe.src = "gamespage.html"
    iframe.contentWindow.document.close();
}

function Generate(id)
{
    GenerateTest(id)
}