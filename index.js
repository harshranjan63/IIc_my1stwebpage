window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

var c=0;

function change(c)
{
    if(c==1)
    {
        // document.getElementsByClassName("Text")div.style.Color = "#ffffff";
        document.getElementById("a1").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a2").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a3").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a4").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a5").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a6").style.color = "rgb(128, 0, 128)";
        document.getElementById("a1").style.Color = "#ffffff";
        document.getElementById("abtme").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("Skills").style.backgroundColor = "#ffffff";
        document.getElementById("Hobbies").style.backgroundColor = "#ffffff";
        document.getElementById("Qualification").style.backgroundColor = "#ffffff";
        document.getElementById("Loacation").style.backgroundColor = "#ffffff";
        document.getElementById("contactme2").style.backgroundColor = "rgb(128, 0, 128)";
        
    }
    else if(c==2)
    {
        document.getElementById("Skills").style.Color = "#ffffff";
        document.getElementById("a2").style.Color = "#ffffff";
        document.getElementById("a2").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a1").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a3").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a4").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a5").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a6").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("Skills").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("abtme").style.backgroundColor = "#ffffff";
        document.getElementById("Hobbies").style.backgroundColor = "#ffffff";
        document.getElementById("Qualification").style.backgroundColor = "#ffffff";
        document.getElementById("Loacation").style.backgroundColor = "#ffffff";
        document.getElementById("contactme2").style.backgroundColor = "rgb(128, 0, 128)";
    }
    else if(c==3)
    {
        document.getElementById("Hobbies").style.Color = "#ffffff";
        document.getElementById("a3").style.Color = "#ffffff";
        document.getElementById("a3").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a2").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a1").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a4").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a5").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a6").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("Hobbies").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("Skills").style.backgroundColor = "#ffffff";
        document.getElementById("abtme").style.backgroundColor = "#ffffff";
        document.getElementById("Qualification").style.backgroundColor = "#ffffff";
        document.getElementById("Loacation").style.backgroundColor = "#ffffff";
        document.getElementById("contactme2").style.backgroundColor = "rgb(128, 0, 128)";
    }
    else if(c==4)
    {
        document.getElementById("Qualification").style.Color = "#ffffff";
        document.getElementById("a4").style.Color = "#ffffff";
        document.getElementById("a4").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a2").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a3").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a1").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a5").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a6").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("Qualification").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("Skills").style.backgroundColor = "#ffffff";
        document.getElementById("Hobbies").style.backgroundColor = "#ffffff";
        document.getElementById("abtme").style.backgroundColor = "#ffffff";
        document.getElementById("Loacation").style.backgroundColor = "#ffffff";
        document.getElementById("contactme2").style.backgroundColor = "rgb(128, 0, 128)";
    }
    else if(c==5)
    {
        document.getElementById("Loacation").style.Color = "#ffffff";
        document.getElementById("a5").style.Color = "#ffffff";
        document.getElementById("a1").style.Color = "#ffffff";
        document.getElementById("a5").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a2").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a3").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a4").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a1").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a6").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("Loacation").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("Skills").style.backgroundColor = "#ffffff";
        document.getElementById("Hobbies").style.backgroundColor = "#ffffff";
        document.getElementById("Qualification").style.backgroundColor = "#ffffff";
        document.getElementById("abtme").style.backgroundColor = "#ffffff";
        document.getElementById("contactme2").style.backgroundColor = "rgb(128, 0, 128)";
    }
    else if(c==6)
    {
        document.getElementById("a6").style.Color = "#ffffff";
        document.getElementById("a6").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("a2").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a3").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a4").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a5").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("a1").style.backgroundColor = "rgb(128, 0, 128)";
        document.getElementById("contactme2").style.backgroundColor = "rgb(0,128,0)";
        document.getElementById("Skills").style.backgroundColor = "#ffffff";
        document.getElementById("Hobbies").style.backgroundColor = "#ffffff";
        document.getElementById("Qualification").style.backgroundColor = "#ffffff";
        document.getElementById("Loacation").style.backgroundColor = "#ffffff";
        document.getElementById("abtme").style.backgroundColor = "#ffffff";
    }
}