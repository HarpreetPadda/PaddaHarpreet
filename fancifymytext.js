function Bigger()
{
    document.getElementById("text").style.fontSize = "24pt";

}


function Fancytext()
{
    document.getElementById("fancy").checked = false;
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "#0000FF";
    document.getElementById("text").style.textDecoration = "underline";
}




function Boringtext()
{
    document.getElementById("boring").checked = false
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "#000000";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "10pt";
}

function Moo()

{
    let Moo = document.getElementById("text");
    Moo.style.textTransform = "uppercase";
    let parts = Moo.value.split(".");
    Moo.value = parts.join("-Moo")
}