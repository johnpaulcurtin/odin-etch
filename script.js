//create <div> in js







//16 x 16 square grid write code to create gid of divs x across by x wide


function gridCreator(x) {
    const container = document.querySelector('#container');
    const containerHeight = 40 + (40 * x);
    container.style.height=`${containerHeight}px`;
    container.style.width=`${containerHeight}px`
    console.log(containerHeight);

    for(i = 0; i < x * x; i++){
    const box = document.createElement('div');
    box.classList.add('divJS');
    const flexB = 100/x
    box.style.flexBasis=`${flexB}%`;

    
    container.appendChild(box);
    }
  }

gridCreator(16); 





