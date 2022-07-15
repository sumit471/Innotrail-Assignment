var source,dest;
document.addEventListener('DOMContentLoaded', (event) => {

var items = document.querySelectorAll('.container .box');



function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor = generateRandomColor();
}


    function handleDragStart(e) {
      this.style.opacity = '0.4';

      dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
    //   items.forEach(function (item) {
    //     item.classList.remove('over');
    //   });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
        // this.classList.add('over');
    }
  
    function handleDragLeave(e) {
    //   this.classList.remove('over');
    }

    function handleDrop(e) {

      e.stopPropagation();

      if(dragSrcEl !== this) 
      {
        dragSrcEl.innerHTML = this.innerHTML;
        var c = dragSrcEl.style.backgroundColor;
        dragSrcEl.style.backgroundColor= this.style.backgroundColor;
        dragSrcEl.style.transition="3s";
        this.style.backgroundColor= c;
        this.innerHTML = e.dataTransfer.getData('text/html');

        source = dragSrcEl;
        dest = this;
      }

  return false;
}
    
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });    
   
});

function undoAction(){

  // dragSrcEl.innerHTML = this.innerHTML;
  // var c = dragSrcEl.style.backgroundColor;
  // dragSrcEl.style.backgroundColor= this.style.backgroundColor;
  // dragSrcEl.style.transition="3s";
  // this.style.backgroundColor= c;
  // this.innerHTML = e.dataTransfer.getData('text/html');
 
  var data = dest.innerHTML;
  dest.innerHTML=source.innerHTML;
  source.innerHTML=data;

  var bg = dest.style.backgroundColor;
  dest.style.backgroundColor = source.style.backgroundColor;
  source.style.backgroundColor=bg;



}


