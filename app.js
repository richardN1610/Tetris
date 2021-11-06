if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', Ready)
} else {
    Ready();
}
function Ready(){
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));   //selecting al lthe squares in grid & creating array by using array from
    const width = 10;

    const lShape = [
        [0, width+1, width*2+1,1],
        [width, width+1, width+2,width*2],
        [1, width+1, width*2+1,width*2+2],
        [width+2, width*2, width*2+1,width*2+2]
    ]
    const tShape = [
        [width, width+1, width+2,width*2+1],
        [1,width,width+1, width*2+1],
        [1,width,width+1, width+2],
        [1,width+1,width+2, width*2+1]
    ]

    const oShape = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iShape = [
        [1,width+1, width*2+1,width*3+1],
        [width,width+1, width+2, width+3],
        [1,width+1, width*2+1,width*3+1],
        [width,width+1, width+2, width+3]
    ]

    const zShape = [
        [0,1,width+1, width+2],
        [0,width, width+1, width*2],
        [0,1,width+1, width+2],
        [0,width, width+1, width*2]
    ]
    const sShape = [
        [2,1,width,width+1],
        [1,width, width+1, width*2],
        [2,1,width,width+1],
        [1,width, width+1, width*2]
    ]

    const jShape = [
        [1,width+1,width*2+1,width*2],
        [1,width+1, width+2, width+3],
        [1,2,width+1, width*2+1],
        [1,2,3,width+3]
    ]

    const shapeArray = [lShape,tShape,oShape,iShape,zShape,sShape,jShape]

    let currentPosition = 4;
    let currentArrayShape = shapeArray[6][2];
    

    function DrawShape(){
        currentArrayShape.forEach(index =>{
            squares[currentPosition + index].classList.add('tetris-shape');
        })
    }
    DrawShape();
}