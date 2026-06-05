let     container = document.querySelector(".container");
let     nSquares = document.querySelector("#nsquare").value;
let     reset = document.querySelector(".reset");
let     random = document.querySelector("#random");
let     grad   = document.querySelector("#gradient");
let     mod = 0;
const   radios = [random, grad];
const     square = [];

document.addEventListener("load", renderGrid());
container.style.width = (100 / nSquares ) * nSquares;

for ( let rad of radios )
{
    rad.addEventListener("change", ()=>{
        if ( rad === radios[0] )
            mod = 0;
        else
            mod = 1;
    })
}

function    renderGrid()
{
    for ( let i = 0; i < (nSquares * nSquares); i++ )
    {
        square[i] = document.createElement("div");
        square[i].classList.add("sq");
        square[i].style.width = (100 / nSquares).toString() + "%";
        square[i].style.height = `${(100 / nSquares)}vh`;
        square[i].style.backgroundColor = "rgb(255, 255, 255)";
        square[i].style.borderBottom = "1px solid #000";
        square[i].style.borderRight = "1px solid #000";
        square[i].style.opacity = 1;
        container.appendChild(square[i]);
    }
}

reset.addEventListener("click", ()=>{
    for ( squa of square )
    {
        squa.style.backgroundColor = "rgb(255, 255, 255)";
        squa.style.opacity = 1;
    }
})

function    randomColor()
{
    return ( Math.round(0 + Math.random() * 255) );
}

for ( let squa of square )
{
    squa.addEventListener( "mouseover", ()=>{
        if ( mod )
            squa.style.opacity -= .1;
        if ( mod === 0 )
        {
            squa.style.opacity = 1;
            const   rgb = [randomColor(), randomColor(), randomColor()];
            squa.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            squa.style.backgroundColor = `rgba(${opacit[0]}, ${opacit[1]}, ${opacit[2]}, ${opacit[3] -= .01})`;
        }
    });
}