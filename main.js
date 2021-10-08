var selectContainer = document.getElementById('container');
console.log(selectContainer)


document.body.addEventListener('keydown', function(e){
  var x = e.keyCode;
  
  switch(x){
    
    case (65 || 97):
      var Aid = document.getElementById('A');
      document.getElementById('soundA').play();
      Aid.style.border = "5px solid yellow";
      setTimeout(() => { Aid.style.border = "none"; }, 500);
      break
      
    case (83 || 115):
      var Sid = document.getElementById('S');
      document.getElementById('soundS').play();
      Sid.style.border = "5px solid yellow";
      setTimeout(() => { Sid.style.border = "none"; }, 500);
      break;
      
    case (68 || 100):
      var Did = document.getElementById('D');
      document.getElementById('soundD').play();
      Did.style.border = "5px solid yellow";
      setTimeout(() => { Did.style.border = "none"; }, 500);
      break;
      
    case (70 || 102):
      var Fid = document.getElementById('F');
      document.getElementById('soundF').play();
      Fid.style.border = "5px solid yellow";
      setTimeout(() => { Fid.style.border = "none"; }, 500);
      break;
      
    case (71 || 103):
      var Gid = document.getElementById('G');
      document.getElementById('soundG').play();
      Gid.style.border = "5px solid yellow";
      setTimeout(() => { Gid.style.border = "none"; }, 500);
      break;
      
    case (72 || 104):
      var Hid = document.getElementById('H');
      document.getElementById('soundH').play();
      Hid.style.border = "5px solid yellow";
      setTimeout(() => { Hid.style.border = "none"; }, 500);
      break;
      
    case (74 || 106):
      var Jid = document.getElementById('J');
      document.getElementById('soundJ').play();
      Jid.style.border = "5px solid yellow";
      setTimeout(() => { Jid.style.border = "none"; }, 500);
      break;
      
    case (75 || 107):
      var kid = document.getElementById('K');
      document.getElementById('soundK').play();
      Kid.style.border = "5px solid yellow";
      setTimeout(() => { Kid.style.border = "none"; }, 500);
      break;
      
      case (76 || 108):
      var Lid = document.getElementById('L');
      document.getElementById('soundL').play();
      Lid.style.border = "5px solid yellow";
      setTimeout(() => { Lid.style.border = "none"; }, 500);
      break;
  }
})
