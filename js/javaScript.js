let     container = document.querySelector(".container");
let     num = document.querySelector("#nsquare");
let     reset = document.querySelector(".reset");
let     random = document.querySelector("#random");
let     grad   = document.querySelector("#gradient");
let     nSquares = filterInput( parseInt(num.value) ) ;
const   radios = [random, grad];
const   square = [];
let     mod = 0;

if ( random.checked )
    mod = 0;
else
    mod = 1;

renderGrid( nSquares );

num.addEventListener("change", ()=>{
    let newValue = filterInput( parseInt(num.value) );
    clearGrid( nSquares );
    renderGrid( newValue );
    nSquares = newValue;
});

for ( let rad of radios )
{
    rad.addEventListener("change", ()=>{
        if ( rad === radios[0] )
            mod = 0;
        else
            mod = 1;
    })
}

reset.addEventListener("click", ()=>{
    for ( squa of square )
    {
        squa.style.backgroundColor = "rgb(255, 255, 255)";
        squa.style.opacity = 1;
    }
})

container.addEventListener("mouseover", ()=>{
    for ( let squa of square )
    {
        squa.addEventListener( "mouseover", ()=>{
            if ( mod )
                squa.style.opacity -= .001;
            if ( mod === 0 )
            {
                squa.style.opacity = 1;
                squa.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                squa.style.backgroundColor = `rgba(${opacit[0]}, ${opacit[1]}, ${opacit[2]}, ${opacit[3] -= .01})`;
            }
        });
    }
})

function    filterInput( value )
{
    if ( value > 100 )
        return ( 100 );
    else if ( value < 0 )
        return ( 1 );
    return ( value );
}

function    randomColor()
{
    return ( Math.round(0 + Math.random() * 255) );
}

function    clearGrid( len )
{
    for ( let i = 0; i < (len * len) ; i++ )
        container.removeChild(square[i]);
}

function    renderGrid( numSquars )
{
    for ( let i = 0; i < (numSquars * numSquars); i++ )
    {
        square[i] = document.createElement("div");
        square[i].classList.add("sq");
        square[i].style.width = (100 / numSquars).toString() + "%";
        square[i].style.height = `${(100 / numSquars)}vh`;
        square[i].style.backgroundColor = "rgb(255, 255, 255)";
        square[i].style.borderBottom = "1px solid #000";
        square[i].style.borderRight = "1px solid #000";
        square[i].style.opacity = 1;
        container.appendChild(square[i]);
    }
}