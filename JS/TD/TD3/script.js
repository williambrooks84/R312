//The controller 
let C = {};

C.init = function(){
    V.init();
}

C.handler_fetchCat = async function(ev){
    let id = ev.target.dataset.cat;
    if (id!==undefined){
        //let response = await fetch("https://api.thecatapi.com/v1/images/search?category_ids="+id);
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&category_ids="+id);
        let data = await response.json();
        //V.renderCat(data[0].url);
        V.clearCat();
        for (let cat of data){
            V.renderCat(cat.url);
        }
    }
}

//The view
let V = {};

V.init = function(){
    let menu = document.querySelector("menu");
    menu.addEventListener("click", C.handler_fetchCat);
}

V.renderCat = function(url){
    //let kitty = document.querySelector("#kitty");
    //kitty.src = url;
    let tpl = document.querySelector("template");
    let fragment = tpl.content.cloneNode(true);
    let img = fragment.querySelector("img");
    img.src=url;
    let section = document.querySelector("section");
    section.appendChild(fragment);
}

V.clearCat = function(){
    let section = document.querySelector("section");
    section.innerHTML = "";
}

C.init();