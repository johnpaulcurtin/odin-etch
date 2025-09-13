//create <div> in js







//16 x 16 square grid write code to create gid of divs x across by x wide


function gridCreator(x) {
    const container = document.querySelector('#container');
    const containerHeight = 40 + (40 * x);
    container.style.height=`${containerHeight}px`;
    container.style.width=`${containerHeight}px`


    for(i = 0; i < x * x; i++){
    const box = document.createElement('div');
    box.classList.add('divJS');
    const flexB = 100/x
    box.style.flexBasis=`${flexB}%`;
   box.addEventListener('mouseover', () => {
      box.style.backgroundColor = '#62d6d6a4';
      }, .5);
    container.appendChild(box);
    };
};


gridCreator(4); 



//event listen for hover to change div background color to a darker blue









