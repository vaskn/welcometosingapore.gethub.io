
 $(document).ready(function() {
// iframes
    $("#adam_curtis").click(function(e) {
        e.preventDefault();
        genBox("adam_curtis.html", e);
    });
});

$(document).ready(function() {
$("#whatdidiknow").click(function(e) {
  e.preventDefault();
  genBox("whatdidiknow.html", e);
  });
});

$(document).ready(function() {
  $("#workhorses").click(function(e) {
    e.preventDefault();
    genBox("workhorses.html", e);
    });
  });

  $(document).ready(function() {
    $("#camo").click(function(e) {
      e.preventDefault();
      genBox("camo.html", e);
      });
    });

    $(document).ready(function() {
      $("#consumption").click(function(e) {
        e.preventDefault();
        genBox("consumption.html", e);
        });
      });

      $(document).ready(function() {
        // iframes
            $("#tax").click(function(e) {
                e.preventDefault();
                genBox("tax.html", e);
            });
        });



function getposX(e)
{
  const el = document.getElementById(e);
  return el.offsetLeft;
}
function getposY(e)
{
  const el = document.getElementById(e);
  return el.offsetTop;
}
function genBox(fileaddress,elem)
{
    const tempdiv = document.createElement("div");
    const closebtn = document.createElement("button");
    const box = document.createElement("iframe");
    console.log(elem);
    tempdiv.className = "window";
    const divX = getposX(elem.target.id);
    const divY = getposY(elem.target.id);
    tempdiv.setAttribute("style",`top:${divY+20}px; left:${divX+20}px;`);
    closebtn.className = "close";
    closebtn.innerText = "X";
    box.setAttribute("src" , fileaddress);
    tempdiv.appendChild(closebtn);
    tempdiv.appendChild(box);
    // document.body.append(tempdiv);

   document.body.append(tempdiv);
  //  console.log($(id));
    // box.className = "drag"
    // $( ".window" ).resizable();
    $(".window").draggable();
   
    $(".close").click(function (){
        $((this).parentNode).remove();
        
        console.log("this is working");
    });
}