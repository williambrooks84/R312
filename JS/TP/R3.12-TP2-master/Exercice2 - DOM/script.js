/*  Objectif :
    Création dynamique de contenus DOM sur la base d'un objet structuré.

    Attention, comme d'habitude, interdiction de toucher à un autre fichier que celui-ci.
*/

// objet recipe : contient les données sur une recette de cookie.
let recipe = {

    info: {
        name: "Cookies maison",
        photo: './asset/cookies.jpg',
        time: {
            preparation: 15,
            cooking: 10
        },
        cost: 'Bon marché',
        difficulty: 'Facile',
        description: "Réalisez de délicieux cookies en un clin d'oeil !"
    },

    // ingredients est un tableau d'objets, chaque objet contient le nom 
    // et la quantité d'un ingrédient de la recette
    ingredients : [
        {name:'sel', quantity:'1cac'},
        {name:'chocolat noir', quantity:'100g'},
        {name:'farine', quantity:'150g'},
        {name:'sucre vanillé', quantity:'1 sachet'},
        {name:'beurre', quantity:'85g'},
        {name:'oeuf', quantity:'1'},
        {name:'sucre', quantity:'85g'},
        {name:'levure chimique', quantity:'1cac'}
    ]
};


/* Q1
   Sur la base de l'image objectif.jpg du répertoire asset, reproduisez le même contenu et la même structure
   de DOM en utilisant (entre autre) les méthodes createElement/appendChild/insertBefore et les données de 
   l'objet recipe ci-dessus.
   Dans un premier temps, ignorez la liste des ingrédients.
*/
// let divCard = document.querySelector("div.card");
// let divCardText = document.querySelector("div.card__text");

// let img = document.createElement('img');
// img.src = recipe.info.photo;
// img.classList.add("card__header");
// divCard.insertBefore(img, divCardText);

// let h1 = document.createElement('h1');
// h1.textContent = recipe.info.name;
// h1.classList.add("card__food");
// divCardText.appendChild(h1);

// let i1 = document.createElement('i');
// i1.textContent = `${recipe.info.time.cooking + recipe.info.time.preparation} Mins`;
// i1.classList.add("card__clock-o");
// divCardText.appendChild(i1);

// let i2 = document.createElement('i');
// i2.textContent = `Niveau : ${recipe.info.difficulty}`;
// i2.classList.add("card__users");
// divCardText.appendChild(i2);

// let i3 = document.createElement('i');
// i3.textContent = `Coût : ${recipe.info.cost}`;
// i3.classList.add("card__clock-o");
// divCardText.appendChild(i3);

// let p1 = document.createElement('p');
// p1.textContent = recipe.info.description;
// p1.classList.add("card__info");
// divCardText.appendChild(p1);

/*  Q2
    A présent, ajoutez la liste des ingrédients
*/
// let p2 = document.createElement('p');
// p2.classList.add("card__info");
// divCardText.appendChild(p2);

// let ul = document.createElement('ul');
// for (let ingredient of recipe.ingredients) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     li.textContent = ingredient.name;
//     span.textContent = ingredient.quantity;
//     span.classList.add("card__item__quantity");
//     li.appendChild(span);
//     ul.appendChild(li);
// }

// p2.appendChild(ul); 


/*  Q3
    Re-structurer.
    Avant d'aller plus loin, commentez vos réponses aux questions précédentes (ne supprimez pas, vous en aurez besoin)

    Ce que vous venez de faire, c'est afficher des données. 
    En développement, tout ce qui relève de l'affichage/interface, on appelle ça la Vue.
    La Vue est en lien direct avec ce que voit l'utilisateur (et les interactions qu'il peut avoir avec).
    En développement, la Vue est la partie de l'application dans laquelle on va 
    regrouper toutes fonctions/méthodes en lien avec l'interface. Que ce soit en 
    terme d'affichage (ou bien plus tard, de surveillance des événements).

    Vous allez donc regrouper dans un objet Vue toutes les instructions que vous venez d'écrire
    en les organisant dans des fonctions/méthodes. Pour vous aider, on  vous donne la réponse à la
    sous question Q3.1. Prenez-là en exemple pour répondre aux autres.
*/

// Déclaration d'un objet V qui symbolise la Vue.
// C'est dans cet objet que l'on va placer toutes les fonctions/méthodes liées à l'affichage
let V = {};

/* Q3.1
   Ajouter à V une méthode renderImage qui prend en paramètre l'url d'une image et l'utilise pour
   l'affichage de la recette.
*/
V.renderImage = function( url ){
    let divCard = document.querySelector("div.card");
    let divCardText = document.querySelector("div.card__text");

    // ajout de l'image
    let ima = document.createElement("img");
    ima.src = url;
    ima.classList.add("card__header");
    divCard.insertBefore(ima, divCardText);
}


/*  TEST Q3.1
    Pour vérifier votre fonction V.renderImage, décommentez la ligne ci-après.
    Si ça fonctionne, l'image des cookies doit s'afficher.
*/
// V.renderImage( recipe.info.photo );


/* Q3.2
   Ajouter à V une méthode renderTitle qui prend en paramètre un nom de recette et l'utilise pour
   l'affichage de la recette.
*/
V.renderTitle = function(titre) {
    let divCardText = document.querySelector("div.card__text");
    let h1 = document.createElement('h1');
    h1.textContent = titre;
    h1.classList.add("card__food");
    divCardText.appendChild(h1);
}

/*  TEST Q3.2
    Pour vérifier votre fonction V.renderTitle, décommentez la ligne ci-après.
    Si ça fonctionne, l'image des cookies doit s'afficher.
*/
// V.renderTitle(recipe.info.name);

/* Q3.3
   Ajouter à V une méthode renderTime qui prend en paramètre une durée et l'utilise pour
   l'affichage de la recette.
*/
V.renderTime = function(time) {
    let divCardText = document.querySelector("div.card__text");
    let i1 = document.createElement('i');
    i1.textContent = `${time} Mins`;
    i1.classList.add("card__clock-o");
    divCardText.appendChild(i1);
}

/*  TEST Q3.3
    Pour vérifier votre fonction V.renderTime, décommentez la ligne ci-après.
    Si ça fonctionne, le temps total de la recette doit s'afficher.
*/
// V.renderTime( recipe.info.time.preparation + recipe.info.time.cooking );


/* Q3.4
   Ajouter à V une méthode renderLevel qui prend en paramètre un niveau de difficulté et 
   l'utilise pour l'affichage de la recette.
*/
V.renderLevel = function(level) {
    let divCardText = document.querySelector("div.card__text");
    let i2 = document.createElement('i');
    i2.textContent = `Niveau : ${level}`;
    i2.classList.add("card__users");
    divCardText.appendChild(i2);
}

/*  TEST Q3.4
    Pour vérifier votre fonction V.renderLevel, décommentez la ligne ci-après.
    Si ça fonctionne, la difficulté de la recette doit s'afficher.
*/
// V.renderLevel( recipe.info.difficulty );


/* Q3.5
   Ajouter à V une méthode renderCost qui prend en paramètre un coût et 
   l'utilise pour l'affichage de la recette.
*/

V.renderCost = function(cost) {
    let divCardText = document.querySelector("div.card__text");
    let i3 = document.createElement('i');
    i3.textContent = `Coût : ${cost}`;
    i3.classList.add("card__clock-o");
    divCardText.appendChild(i3);
}

/*  TEST Q3.5
    Pour vérifier votre fonction V.renderCost, décommentez la ligne ci-après.
    Si ça fonctionne, le coût de la recette doit s'afficher.
*/
// V.renderCost( recipe.info.cost );


/* Q3.6
   Ajouter à V une méthode renderDescription qui prend en paramètre une description et 
   l'utilise pour l'affichage de la recette.
*/

V.renderDescription = function(desc) {
    let divCardText = document.querySelector("div.card__text");
    let i4 = document.createElement('i');
    i4.textContent = desc;
    i4.classList.add("card__info");
    divCardText.appendChild(i4);
}

/*  TEST Q3.6
    Pour vérifier votre fonction V.renderDescription, décommentez la ligne ci-après.
    Si ça fonctionne, la description de la recette doit s'afficher.
*/
// V.renderDescription( recipe.info.description );


/* Q3.7
   Ajouter à V une méthode renderIngredients qui prend en paramètre un tableau d'ingrédients
   et l'utilise pour l'affichage de la recette.
*/
V.renderIngredients = function(list) {
    let divCardText = document.querySelector("div.card__text");
    let p = document.createElement('p');
    p.classList.add("card__info");
    divCardText.appendChild(p);
    let ul = document.createElement('ul');
    for (let ingredient of list) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.textContent = ingredient.name;
        span.textContent = ingredient.quantity;
        span.classList.add("card__item__quantity");
        li.appendChild(span);
        ul.appendChild(li);
    }
    p.appendChild(ul);
}


/*  TEST Q3.7
    Pour vérifier votre fonction V.renderIngredients, décommentez la ligne ci-après.
    Si ça fonctionne, la liste des ingrédients de la recette doit s'afficher.
*/
// V.renderIngredients( recipe.ingredients );


/* Q3.8
   Si ce n'est déjà le cas, (re)commentez les "TEST" des réponses précédentes avant de poursuivre.
   Ajouter à V une méthode renderRecipe qui prend en paramètre un objet recette (structuré comme celui 
   des cookies) et l'utilise pour son affichage global.
*/
V.renderRecipe = function(recipe) {
    V.renderImage(recipe.info.photo);
    V.renderTitle(recipe.info.name);
    V.renderTime(recipe.info.time.preparation + recipe.info.time.cooking);
    V.renderLevel(recipe.info.difficulty);
    V.renderCost(recipe.info.cost);
    V.renderDescription(recipe.info.description);
    V.renderIngredients(recipe.ingredients);
}

/*  TEST Q3.8
    Pour vérifier votre fonction V.renderRecipe, décommentez la ligne ci-après.
    Si ça fonctionne, la recette des cookies doit s'afficher.
*/
// V.renderRecipe(recipe); 

/*  Q4
    Affichez cette autre recette que l'on vous donne ci-après (commentez votre réponse 
    à la question précédente avant).
*/
let tian = {
    info: {
        name: "Tian de légumes",
        photo: './asset/tian.jpg',
        time: {
            preparation: 15,
            cooking: 120
        },
        cost: 'Bon marché',
        difficulty: 'Facile',
        description: "Le Tian est à la fois un plat en terre cuite vernissée et la préparation culinaire que l’on cuit longuement au four. C'est un plat parfait pour accompagner des grillades au cours d'un dîner estival."
    },

    // ingredients est un tableau d'objets, chaque objet contient le nom 
    // et la quantité d'un ingrédient de la recette
    ingredients : [
        {name:'courgettes', quantity:'2'},
        {name:'aubergines', quantity:'1'},
        {name:'tomates', quantity:'2'},
        {name:'oignon', quantity:'1'},
        {name:"huile d'olive", quantity:'15 cl'},
        {name:'herbes de provence', quantity:'25g'},
        {name:'sel et poivre', quantity:'1 pincée'}
    ]
};


V.renderRecipe(tian); 