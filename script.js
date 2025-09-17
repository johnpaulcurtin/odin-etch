//create <div> in js







//16 x 16 square grid write code to create gid of divs x across by x wide

let inputElement = 5;

gridCreator(inputElement);

function gridCreator(x) {
    const container = document.querySelector('#container');
    for(i = 0; i < x * x; i++){
    const box = document.createElement('div');
    box.style.width = `${(500 / x) - 2}px`;
    box.style.height = `${(500 / x) - 2}px`;
    box.id='divJS';
   box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      });
    container.appendChild(box);
    };
};



function getInputValue(){
  gridRemover();
  inputElement = document.getElementById('gridNum').value;
  gridCreator(inputElement);
};

function gridRemover(){
   const container = document.querySelector('#container');
  while (container.firstChild){
    container.removeChild(container.firstChild);
  };
};
  




//event listen for hover to change div background color to a darker blue









