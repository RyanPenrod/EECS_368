//adapted from https://jayhawk-nation.web.app/examples/TicTacToe

let canvas;
let context;
let t = 0;
let i = 0;
let model = {
  board: "......./......./......./......./......./.......",
  next: "X",
}


function tick() {
  window.requestAnimationFrame(splat);
}

function splat(n) {
  let d = n - t;
  t = n;
  context.clearRect(0,0,canvas.width,canvas.height)


  // Taken from https://www.html5canvastutorials.com/tutorials/html5-canvas-lines/

  for(let i = 0;i < 7;i++) {
    context.beginPath();
    context.moveTo(60, 60 + i * 60);
    context.lineTo(480, 60 + i * 60);
    context.strokeStyle = '#ff0000';
    context.lineWidth = 5;
    context.stroke();
  }
  for(let i =0;i < 8;i++) {
    context.beginPath();
    context.moveTo(60 + i * 60, 60);
    context.lineTo(60 + i * 60, 420);
    context.strokeStyle = '#ff0000';
    context.lineWidth = 5;
    context.stroke();
  }
  context.font = "28pt Calibri"
  context.fillStyle = "blue";

  for(let i = 0; i <= 6; i++) {
    for(let j = 0; j <= 5; j++) {
      let me = model.board.charAt(i + j * 8);
      if (me != '.') {
	context.fillText(me, 75 + i * 60, 100 + j * 60);
      }
    }
  }

  context.font = "90pt Calibri";
  context.fillStyle = "blue";
  context.fillText("Connect", 500, 150);
  context.fillText("Four", 500, 250);

  context.font = "10pt Calibri";
  context.fillText("Ryan Penrod - 6 May 2021", 60, 440);

  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.querySelector("#myCanvas");
  console.log("Got here");
  context = canvas.getContext("2d");
  console.log(context);
  splat();
})

function roundMe(x){ return Math.ceil((x-70)/60)-1 }

function winner()
{
  if (model.next == 'X') {
    model.next = 'O'
  } else if (model.next == 'O') {
    model.next = 'X'
  }
  alert(model.next + " is the Winner");
  location.reload();
}

document.addEventListener("click", e => {
  const [i,j] = [e.x,e.y].map(roundMe);
  if (i < 0 || i > 7) return;
  if (j < 0 || j > 6) return;

  const ix = i + j * 8;
  if (model.board.charAt(ix) != '.') {
    return;
  }
  if (model.board.charAt(ix+8) == '.') {
    return;
  }

  model.board =
    model.board.slice(0,ix) +
    model.next +
    model.board.slice(ix+1,48)

  let hasWon = 0;

  for(let i=0;i<48;i++){
    if(hasWon == 0){
    if (model.board.slice(i,i+1) == model.next){
      if(i>24){
        if(model.board.slice(i-8,i-7) == model.next){
          if(model.board.slice(i-16,i-15) == model.next){
            if(model.board.slice(i-24,i-23) == model.next){
              setTimeout(() => { winner() }, 50);
              hasWon=1;
              console.log(model.next + " Wins UP");
            }
          }
        }
      }
      if(i>24){
        if (model.board.slice(i-7,i-6) == model.next){
          if (model.board.slice(i-14,i-13) == model.next){
            if (model.board.slice(i-21,i-20) == model.next){
              setTimeout(() => { winner() }, 50);
              hasWon=1;
              console.log(model.next + " Wins UP-RIGHT")
            }
          }
        }
      }
      if (model.board.slice(i+1,i+2) == model.next){
        if (model.board.slice(i+2,i+3) == model.next){
          if (model.board.slice(i+3,i+4) == model.next){
            setTimeout(() => { winner() }, 50);
            hasWon=1;
            console.log(model.next + " Wins RIGHT")
          }
        }
      }
      if (model.board.slice(i+9,i+10) == model.next){
        if (model.board.slice(i+18,i+19) == model.next){
          if(model.board.slice(i+27,i+28) == model.next){
            setTimeout(() => { winner() }, 50);
            hasWon=1;
            console.log(model.next + " Wins DOWN-RIGHT")
          }
        }
      }
      if (model.board.slice(i+8,i+9) == model.next){
        if (model.board.slice(i+16,i+17) == model.next){
          if(model.board.slice(i+24,i+25) == model.next){
            setTimeout(() => { winner() }, 50);
            hasWon=1;
            console.log(model.next + " Wins DOWN")
          }
        }
      }
      if (model.board.slice(i+7,i+8) == model.next){
        if (model.board.slice(i+14,i+15) == model.next){
          if(model.board.slice(i+21,i+22) == model.next){
            setTimeout(() => { winner() }, 50);
            hasWon=1;
            console.log(model.next + " Wins DOWN-LEFT")
          }
        }
      }
      if (model.board.slice(i-1,i) == model.next){
        if (model.board.slice(i-2,i-1) == model.next){
          if(model.board.slice(i-3,i-2) == model.next){
            setTimeout(() => { winner() }, 50);
            hasWon=1;
            console.log(model.next + " Wins LEFT")
          }
        }
      }
      if(i>27){
        if (model.board.slice(i-9,i-8) == model.next){
          if (model.board.slice(i-18,i-17) == model.next){
            if(model.board.slice(i-27,i-26) == model.next){
              setTimeout(() => { winner() }, 50);
              hasWon=1;
              console.log(model.next + " Wins UP-LEFT")
            }
          }
        }
      }
    }
    }
  }
  if (model.next == 'X') {
    model.next = 'O'
  } else if (model.next == 'O') {
    model.next = 'X'
  }
})
