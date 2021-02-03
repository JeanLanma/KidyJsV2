// simplificadores de funciones
const println = console.log; //Console Log

//simplifica querySelector
const selectElement = (id) => {
    return element = document.querySelector(id) || false;
}

//Clase kidy || Magia MODULO
const $ = (domElement) => {
    return new kidy(domElement);
}

const kidy = function(element) {
    this.el = selectElement(element);
}

kidy.prototype.text = function(string) {
    this.el.textContent = string;
}

kidy.prototype.on = function(eventType, callback) {
    if ((typeof this.el) !== 'object') {
        return;
    }
    this.el.addEventListener(eventType, callback);
}

kidy.prototype.showmethis = function() {
    println(this);
}

kidy.prototype.add = function(child) {
    this.el.append(child);
}

kidy.prototype.clean = function() {
    while (this.el.firstChild) {
        this.el.removeChild(this.el.firstChild);
    }
}

let Iterador = function(itemsArr = []) {
    for (let item of itemsArr) {
        println(item);
    }
}
let objectIterador = function(object) {
    for (let prop in object) {
        println(`${prop} : ${object[prop]}`)
    }
}

// Template Engine
function renderTpl(template, data) {
    let reg = /{([^}]+)}/g;
    let group;
    while ((group = reg.exec(template)) !== null) {
        template = template.replace(group[0], data[group[1]]);
        console.log(group)
    }
    return template;
}
/* Ejemplo de uso
println(renderTpl('Hola soy {name} pero me pueden llamar {alias}', { name: 'jean', alias: 'Less' }));
 */

/*  MODULO STORAGE */
let addLocalStorage = function(key, value) {
    localStorage.setItem(key, value);
    return;
}

/* MODULO HTML*/
let crearElemento = (tagName = '', attributes = {}) => {
    let element = document.createElement(tagName);

    for (const attribute in attributes) {
        if (Object.hasOwnProperty.call(attributes, attribute)) {
            element.setAttribute(attribute, attributes[attribute])
        }
    }
    return element;
}

let inElement = (parentElement, childs) => {
    if (childs.length) {
        childs.forEach(element => {
            parentElement.append(element);
        });
        return;
    }
    parentElement.append(childs);
    return;
}

// next spec
// Funcion para editar html directamente de la pagina
let editable = $('#editthis').el;

function editElementText(target) {
    println(target.textContent)
    return target;
}

function makeEditable(target) {
    target.setAttribute("contenteditable", true);
    target.setAttribute("data-title-main", target.id);
}

function localSave() {

}
/* 
editable.addEventListener('mousedown', function(e) {
    makeEditable(editable);
    editElementText(editable);
    println(e.type);

        document.addEventListener('click', function(e) {
            if (e.target != editable) {
                let updatedData = editable.textContent;
                localStorage.setItem(e.target.id, updatedData)
            }
        })
    document.addEventListener('keypress', function(e) {
        if (e.key == 'Enter') {
            let updatedData = editable.textContent;
            localStorage.setItem(e.target.id, updatedData)
        }
    })
}) */