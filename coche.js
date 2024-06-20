
// let listadoCoche=[];


// for(let i=0; i<=4; i++){

//     let marcaCoche;
//     marcaCoche = prompt("introduce una marca de coche");
//     listadoCoche.push(marcaCoche);
   
// }



// console.log(listadoCoche);







let listadoCoche = [];

let UL = document.createElement("ul");

document.body.appendChild(UL);




for(let i=0; i<=4; i++){

    let marcaCoche;
    marcaCoche = prompt("introduce una marca de coche");

    let LI = document.createElement("li");
    UL.appendChild(LI).textContent = `${marcaCoche}`;

   

}




