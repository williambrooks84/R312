/*
   Objectif de l'exercice :
   
   . Apprendre à supprimer, créer/insérer dynamiqement des "bouts de DOM" dans une page HMTL
   . Savoir utiliser à bon escient la propriété innerHTML
   . Savoir utiliser à bon escient l'API DOM 
   . Savoir utiliser basiquement un élément <template>, comprendre son intérêt

   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.jpg disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

*/


/* Q1
   Echangez le contenu de la seconde colonne avec le contenu de la quatrième colonne.

   Note : 
   Le contenu d'un noeud/élément est manipulable de plusieurs façons. La principale est l'API DOM et 
   les méthodes qui permettent de créer/supprimer/ajouter/déplacer/éditer des éléments.
   Mais aussi, dans certains cas, il peut être plus commode d'agir sur la propriété innerHTML d'un élément.
   Elle représente tout le contenu HTML d'un noeud/élément (le bout de DOM inclus dans l'élément) sous la 
   forme d'une chaîne de caractères.
   Quand on veut modifier partiellement le contenu d'un élément, utiliser la propriété innerHTML n'est pas
   pratique car cela revient à modifier une chaîne de caractères, une opération techniquement réalisable mais
   possiblement pénible.
   En revanche, quand on veut faire des opérations de type : 
        . effacer TOUT le contenu d'un noeud/élément
        . remplacer TOUT le contenu d'un noeud/élément
    Ces opérations "tout ou rien" sont simples à réaliser via la propriété innerHTML.
    La documentation relative à cette propriété est là : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML

    Indice : Coca / orangina
*/

// Ajoutez votre code ici
let columns = document.querySelectorAll('.collumn'); // liste des colonnes
// for (let i=0; i<=columns.length; i++){
//     let column2 = i[2]; 
//     let column4 = i[4]; 

//     let tmp = column2.textContent;
//     column2.textContent = column4.textContent;
//     column4.textContent = tmp;
// }
let tmp = columns[1].innerHTML;
columns[1].innerHTML = columns[3].innerHTML;
columns[3].innerHTML = tmp;

/* Q2
   Insérez un nouveau paragraphe (<p>) entre la figure d'Hermine et le paragraphe en dessous (paragraphe, pas légende)

   Cette question est typiquement pénible à faire en utilisant innerHTML. Car ce n'est pas une opération "tout ou rien".
   Il sera donc plus simple d'utiliser l'API DOM pour : 
    . créer un nouveau paragraphe (https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
    . lui affecter le texte que l'on souhaite
    . insérer le nouveau paragraphe à l'endroit souhaité (https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore)
   Gardez en tête qu'un élément HTML que l'on crée ne peut pas être visible dans la page tant qu'on ne l'a pas ajouté au DOM
   de la page. Seul ce qui est rattaché au DOM sera afficher par le navigateur.
*/
// le texte du paragraphe à utiliser :
let text = "It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking also\
helped to restore confidence. At any rate, as the dusk came on a slow, intermittent movement upon the sand\
pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained\
unbroken. Vertical black figures in twos and threes would advance, stop, watch, and advance again, spreading\
out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns. I,\
too, on my side began to move towards the pit.";

// Ajoutez votre code ici
let p = document.createElement("p");
p.textContent = text;
columns[1].insertBefore(p, columns[1].lastElementChild);

/* Q3

    On vous demande de créer une figure et de l'insérer dans la troisème colonne entre les 2 paragraphes de texte.
    Au besoin vérifiez le visuel attendu sur l'image objectif.jpg dans le répertoire asset.
    Le "bout de DOM" que vous devez créer dynamiquement en JS doit in fine correspondre au HTML suivant : 
    
    <figure class="figure">
        <img class="media" src="http://i.giphy.com/4fDWVPMoSyhgc.gif" alt="">
        <figcaption class="figcaption">"This time, let go your conscious self and act on instinct."</figcaption>
    </figure>

    Cet HTML est analogue à la figure d'Hermione dans la seconde colonne (si vous avez bien fait la Q1 !).
    Les données à utiliser pour 'constuire' votre "bout de DOM" sont données dans l'objet dataFigure.

    Note : attention, 2 paragraphes de texte ne signifie pas qu'il n'y a que deux éléments <p> dans la 3ème colonne.

*/

let dataFigure = {
    image : {
        url : "http://i.giphy.com/4fDWVPMoSyhgc.gif",
        alt : "Luke Skywalker",
        css : "media"
    },
    caption : {
        css : "figcaption",
        txt : "This time, let go your conscious self and act on instinct."
    }
}

// Ajoutez votre code ici
let fig = document.createElement("figure");

let img = document.createElement("img");
img.src = dataFigure.image.url;
img.alt = dataFigure.image.alt;
img.className = dataFigure.image.css;
fig.appendChild(img);

let cap = document.createElement("figcaption");
cap.className = dataFigure.caption.css;
cap.textContent = dataFigure.caption.txt;

fig.appendChild(cap);

let c3 = columns[2];
let second_p = c3.children[2];
c3.insertBefore(fig, second_p);


/* Q4
 
    Remplacer le premier élément <p> de la dernière colonne par une entête contenant le titre et l'auteur
    donnés dans l'objet article ci-après. Là encore, vérifiez le visuel attendu dans asset/objectif.jpg.
    Pour réaliser cette question vous devez utiliser le template d'identifiant 'headline' défini en fin 
    de fichier index.html.

    Indications : 
    Pour réaliser cette question, vous allez procédé différemment de la question précédente. Comme vous l'avez perçu,
    créer un à un les éléments d'un "bout de DOM", les éditer, les organiser en sous-arbre DOM... Cela peut devenir
    fastidieux, surtout si le "bout de DOM" devient conséquent. 
    En outre il y a un autre inconvénient à procéder ainsi : une personne, sans compétence en JS, qui serait néanmoins
    chargée de faire le CSS du "bout de DOM" aura bien du mal à visualiser la structure HTML produite par un script JS 
    puisqu'elle ne comprendra pas ce qu'il fait.
    C'est à ce niveau que l'on peut faire bon usage de l'élément <template>. Un élément <template> contient un
    "bout de DOM" définit statiquement mais clairement en HTML (donc lisible avec uniquement des compétences HTML/CSS).
    Les éléments <template> sont royalement ignorés par le navigateur à l'affichage. Par contre ils sont toujours 
    manipulables en JS.

    Documentez-vous un peu : https://developer.mozilla.org/fr/docs/Web/HTML/Element/template
    Puis, accéder au template, dupliquez-le et éditez le avec les données de l'objet article.
    Ensuite remplacer le premier élément <p> par votre clone formaté du template.
    Par "remplacer" il faut entendre enlever (https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild) puis insérer.

*/

// données à utiliser
let article = {
    title: "It wasn't a dream",
    author: "Franz Kafka"
}

// Ajoutez votre code ici
let tp1 = document.querySelector("#headline");
let clone = document.importNode(tp1.content, true);
let spans = clone.querySelectorAll("span");
spans[0].textContent = article.title;
spans[1].textContent = "by" + article.author.toUpperCase();

let c5 = columns[4];
c5.replaceChild(clone, c5.firstElementChild);
