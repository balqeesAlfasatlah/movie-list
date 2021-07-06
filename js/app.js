'use strict';

let myForm = document.getElementById('myForm');
let myTable =  document.getElementById('myTable');

function MyMovies ( name,image,release ){
    
    this.name = name;
    this.image = image;
    this.release = release;
    MyMovies.all.push(this);
}

MyMovies.all =[];

MyMovies.prototype.render = function(){

    let tr = document.createElement('tr');
    myTable.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = this.name;
    
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    let image = document.createElement('image');
    th2.appendChild(image);
    th2.innerHTML = image.src;


    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = this.release;
    
}






function moveHandler(eve){

    eve.preventDefault();

    let name = eve.target.name.value;
    let image = eve.target.image.value;
    let release = eve.target.release.value;

    let newMove = new MyMovies( name,image,release);

    newMove.render();

    localStorage.setItem('mymove' , JSON.stringify(MyMovies.all));
}


function getData(){

    let data = JSON.parse(localStorage.getItem('mymove'));
    if(data){
        for(let i=0; i<data.length; i++){
            let newMove = new MyMovies(data[i].name ,data[i].image, data[i].release);
            newMove.render(); 
        }
    }
}



getData();

myForm.addEventListener('submit' , moveHandler);