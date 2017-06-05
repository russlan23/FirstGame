var initX=0;
var initY=0;
var timerNukeFall;
var listNukes=[];

function startThrowingNukes(){
  mainFrame=document.getElementById('mainFrameSection');
  createNukeAtRandomPosition(mainFrame);
  rectPosition=listNukes[0].getBoundingClientRect();
  console.log(rectPosition);
  timerNukeFall= setInterval(moveNukes,50);
}

function moveNukes(){
  deltaY=3;
  deltaX=0;
  el=listNukes[0];
  if (parseInt(el.style.top)>290) {
    stopThrowingNukes();
    alert("Game End !");
  }
  el.style.top= parseInt(el.style.top, 10)+deltaY+"px";
  el.style.left= parseInt(el.style.left, 10)+deltaX+"px";
}

function stopThrowingNukes(){
  mainFrame=document.getElementById('mainFrameSection');
  clearInterval(timerNukeFall);
  images=mainFrame.getElementsByTagName('img');
  while(images.length > 0) {
      images[0].parentNode.removeChild(images[0]);
  }
  listNukes=[];
}

function createNukeAtRandomPosition(parentObject){
  var img=document.createElement("img");
  parentObject.appendChild(img);
  img.setAttribute("src","images/nuke1.png");
  img.setAttribute("id","nuke1");
  img.style.width="50px";
  img=document.getElementById("nuke1");
  img.style.left="300px";
  img.style.position="relative";
  img.style.top="0px";
  console.log(img);

  listNukes.push(img);
}

// <img alt="Youtube" src="images/youtube.png" width="50px"
// 	style="vertical-align: middle;">
