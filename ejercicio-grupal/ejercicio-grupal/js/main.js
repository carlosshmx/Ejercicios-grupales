
let board = document.querySelector(".board")

function rellenar(){
   
    for(let i=0; i<=7; i++){
        if(i%2){
            for(let j=0; j<=3; j++){
                let black= document.createElement("div");
                black.setAttribute("class", `black row#${i}`)
                board.appendChild(black);
                let white = document.createElement("div");
                white.setAttribute("class", `white row#${i}` )
                board.appendChild(white);

            }

        }else{
            for(let j=0; j<=3; j++){
                let white = document.createElement("div");
                white.setAttribute("class", `white row#${i}` )
                board.appendChild(white);
                let black= document.createElement("div");
                black.setAttribute("class", `black row#${i}`)
                board.appendChild(black);
            }

        }
        
        
    }
    
}
rellenar()

// document.addEventListener('DOMContentLoaded', ()=>{
//     const tableros = document.getElementsByClassName('board');

//     for(let tablero of tableros){
//         for(let fila=1; fila<=8; fila ++){
//             for(let col=1; col<=8; col++){
//                 const div = document.createElement('div');
//                 div.classList.add(espar(fila + col) ? 'black' : 'white');
//                 tablero.append(div);
//             }
//         }
//     }
// })

// function espar(num){
//     return num%2 == 0;
// }