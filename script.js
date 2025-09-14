//create <div> in js







//16 x 16 square grid write code to create gid of divs x across by x wide
gridCreator()

function gridCreator(x) {
    const container = document.querySelector('#container');
    for(i = 0; i < x * x; i++){
    const box = document.createElement('div');
    box.classList.add('divJS');
    const flexB = 100/x
    box.style.flexBasis=`${flexB}%`;
   box.addEventListener('mouseover', () => {
      box.style.backgroundColor = '#2fc5c5ff';
      });
    container.appendChild(box);
    };
};

function getInputValue(){
  const inputElement = document.getElementById('gridNum').value
  gridCreator(inputElement);
};


  




//event listen for hover to change div background color to a darker blue









