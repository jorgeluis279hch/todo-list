let tasks = [];

let task = function (val) {
    this.id = "item".concat(count().toString());
    this.val = val;
}

const sumaUno = val => val += 1;

const count = () => {
    return sumaUno(document.querySelectorAll(".out").length);
}

const add = () => {
    let t = document.getElementById("entrada").value;
    
    t = t.replace(/>|</g, " ");
    console.log(t)


    if (t === ""){
        alert("Escriba una tarea para agregar!");
    } else if(tasks.find(tarea => tarea.val === t)) {
        if (window.confirm("ya existe una tareas igual esta \n¿seguro que  quiere agregar la tarea?")) {
            create(t);
            t = "";
        }
    } else {
        create(t);
        t = "";
    }
}


const create = t =>  {
    let tarea = new task(t);
    tasks.push(tarea);
    view(tarea.id, count(), tarea.val);
}

const view = (identidad, order, taskValue) => {
    let output = document.querySelector(".output");
    let templ = `<div class="out" id="${identidad}">  
                    <span class="numero"> ${order} </span>
                    <div class="item ${identidad}">${taskValue}</div>
                    <div class="control" onclick="removeItem(this)"><span class="icon-cancel-circle"></span></div>
                    <div class="control" onclick="completed(this)"><span class="icon-checkmark"></span></div>
                </div>`
            
    output.innerHTML += templ;
}
let clean = () => {
    tasks = [];
    document.querySelector(".output").innerHTML = "";
};

const removeItem = (a) => {
    let padre = a.parentNode;
    let tmp = count();
    if (window.confirm("Esta seguro de liminar item?")){
        tmp -= 1;
        if (tmp <= 1){
            tasks = [];
        }
        document.getElementById(padre.id).parentNode.removeChild(padre);
    }
}

const completed = (e) => {
    let i = e.parentNode.id;
    let elem = document.querySelector("."+i).textContent;
    document.querySelector("."+i).innerHTML = elem.strike();
    // console.log(i);
}








    // let padre = document.createElement("div");
    // let hijo_span = document.createElement("span");
    // let hijo_div_uno = document.createElement("div");
    // let hijo_div_dos = document.createElement("div");
    // let hijo_div_tres = document.createElement("div");

    // padre.setAttribute("class", "out");
    // padre.setAttribute("id", `${identidad}`);

    // hijo_span.setAttribute("class", "numero");
    // hijo_span.textContent = order;


    // hijo_div_uno.setAttribute("class", "item");
    // hijo_div_dos.setAttribute("class", "control");
    // hijo_div_tres.setAttribute("class", "control");


