/* construction des galeries photos:
les photos sont dans différents dossiers, classés par theme.

1. récuperer les infos de chaque photo qui se trouvent dans les dossiers.
    - enregistrer son nom pour l'identifier
    - enregistrer son chemin d'accès
    - enregistrer un texte en cas d'affichage rompu.

2. afficher les photos sur la droite de l'écran en format miniature.

3. afficher et faire défiler les photos de la galerie selectionnée en moyenne taille dans la zone principale de droite.


sur les miniatures, on peut:
        - faire défiler de haut en bas pour voir toutes les photos.
        - cliquer sur une miniature pour voir l'image en "GRAND" autant de temps que l'on veut,
        
            * soit on clique sur le bouton fermer pour revenir à la vue principale.
        
            * soit on clique sur une autre photo pour l'afficher en "GRAND" autant de temps que l'on veut.


l'affichage en "GRAND" recouvre les zones 1/2/3/4/5/6 mais laisse la zone 7 des miniatures visible.

=======================================================================
|      (1)    |              sub         (4)                          |
|             |                 menu                                  |
| ============| =============================================|========|
|             |                                              |        |
|             |                                              | zones  |
|             |                                              |  des   |
|             |                             (5)              |        |
|             |        zone                                  |        |
|             |              principale                      |miniatur|
|     (2)     |                 d'affichage                  |   es   |
|             |                     en                       |        |
|             |                     taille                   |        |
|             |                       moyenne                |   (7)  |
|             |                     (avec timer)             |        |
|             |                                              |        |
|=============|=======================================================|
|    (3)      |                             (6)                       |
|             |                                                       | 
=======================================================================



*/
//-----------------------------------------------------------------------------
/* 1. récuperer les infos de chaque photo qui se trouvent dans les dossiers.
    - enregistrer son nom pour l'identifier
    - enregistrer son chemin d'accès
    - enregistrer un texte en cas d'affichage rompu. 
 
    tableau [
        {nom: nomPhoto(1), url: url/Dossier/nomPhoto(1).jpg, alt:"texte" }
        {nom: nomPhoto(2), url: url/Dossier/nomPhoto(2).jpg, alt:"texte" }
        {nom: nomPhoto(3), url: url/Dossier/nomPhoto(3).jpg, alt:"texte" }
        {nom: nomPhoto(4), url: url/Dossier/nomPhoto(4).jpg, alt:"texte" }
        ...
    ] 
*/
// modèle:
// construction du tableau (vide) "Animaux":
const animalsArray = [];
// nombre de photos dans le dossier = 28 photos >> servira d'index pour la boucle; à changer en cas d'ajout de nouvelles photos.
for (let i = 1; i <= 28; i++) {
  // on ajoute dans le tableau:
  animalsArray.push({
    // 1. le nom de la photo: nomPhoto(i)
    name: `animals(${i})`,
    // 2. url de la photo:
    url: `./media/img_maxRez/animaux/animals(${i}).jpg`,
    //3. texte en commun à la galerie:
    alt: `image d'un animal`,
  });
}

//créations des autres tableaux sur le même modele:
// galeries Autos (28 photos):
const carsArray = [];
for (let i = 1; i <= 28; i++) {
  carsArray.push({
    name: `cars(${i})`,
    url: `./media/img_maxRez/auto/cars(${i}).jpg`,
    alt: `image d'une voiture`,
  });
}
// galeries N & B (10 photos):
const nbArray = [];
for (let i = 1; i <= 10; i++) {
  nbArray.push({
    name: `nb(${i})`,
    url: `./media/img_maxRez/N&B/n&b(${i}).jpg`,
    alt: `image en noir et blanc`,
  });
}
// galeries paysage (7 photos):
const paysageArray = [];
for (let i = 1; i <= 7; i++) {
  paysageArray.push({
    name: `paysage(${i})`,
    url: `./media/img_maxRez/paysage/paysage(${i}).jpg`,
    alt: `image d'un paysage`,
  });
}
// galeries spitzberg (17 photos)
const spitzbergArray = [];
for (let i = 1; i <= 17; i++) {
  spitzbergArray.push({
    name: `spitzberg(${i})`,
    url: `./media/img_maxRez/spitzberg/spitzberg(${i}).jpg`,
    alt: `image du spitzberg`,
  });
}

//--------------------------------------------------------------------------
//2. afficher les photos sur la droite de l'écran en format miniature.
//--------------------------------------------------------------------------
//      remarque: il faudra savoir sur quelle page de galleries on se trouve.
//                (sera testé à la fin)

// chaque page de galeries a une zone avec DIV spéciale pour l'insertion des petites images:
// exemple: la page galeries-auto.html à une div vide reprise comme ceci:
//                     <section class="gridContainer-smallPic">
//                                  <div class="smallPic autoGal"></div>
//                     </section>
// idem pour la page galeries-n&b.html...

// on veut enregistrer dans cette zone de galerie, qui comporte la classe de la page ou l'on se trouve, nos petites photos:
let animalsSmallPic = document.querySelector(".animalsGal");
(autoSmallPic = document.querySelector(".autoGal")),
  (nbSmallPic = document.querySelector(".nbGal")),
  (paysageSmallPic = document.querySelector(".paysageGal")),
  (spitzbergSmallPic = document.querySelector(".spitzbergGal"));

// on utilise une fonction pour ajouter chacune des photos du dossier en petit format sur la droite de l'écran.
// lorsque la fonction sera appelée plus tard, il faudra préciser en 1er argument le nom de la variable ci dessus qui gère la gallerie sur laquelle on se trouve et en 2e argument le nom du tableau de photos correspondants.
//les paramètres de la fonction sont donc (nameOfsmallPic,nameOfArray) qui correspondront plus tard quand la fonction sera appelée.

function addingSmallRightImg(galOfsmallPic, nameOfArray) {
  // on parcours le tableau choisi:
  for (let i = 0; i < nameOfArray.length; i++) {
    // on crée notre nouvelle petite image
    let newSmallPic = document.createElement("img");
    // avec ses 3 caractéristiques:
    newSmallPic.src = nameOfArray[i].url;
    newSmallPic.id = nameOfArray[i].name;
    newSmallPic.alt = nameOfArray[i].alt;
    // on ajoute une classe ".imgGenerate" qui nous servira à "écouter" la petite photo.
    newSmallPic.classList = "imgGenerate";
    // on insère les photos dans la zone choisie plus haut (section de droite, zone 7)
    galOfsmallPic.appendChild(newSmallPic);
  }
}
//------------------------------------------------------------------------------------------
//3. afficher et faire défiler les photos de la galerie selectionnée en moyenne taille dans la zone principale de droite (zone 5).
//------------------------------------------------------------------------------------------
// (a) on enregistre notre zone 5 pour affichage (div vide avec la classe mainDisplay)
// (b) on crée notre 1ere image en taille normale
// (c) on assigne 0 pour l'index du tableau.
// (d) on récupère l'url de notre 1ere image en parcourant le tableau de la galerie parcourue:
// (e) puis on l'affiche dans notre zone 5 (".mainDisplay"):
// (f) on affiche les autres photos avec la fonction setInterval:
// (g) on incrémente "index" par pas de 1 toutes les 5 secondes pour qu'il parcours le tableau d'images en entier, puis on réinitialise de nouveau à 0 à la fin du tableau.
// (h) puis on affiche nos autres photos:
// (i) avec 5 secondes d'intervale.

function showPictureLarge(nameOfArray) {
  // (a)
  let mainDisplay = document.querySelector(".mainDisplay"),
    // (b)
    displayNormalPic = document.createElement("img"),
    // (c)
    index = 0;
  // (d)
  displayNormalPic.src = nameOfArray[index].url;
  // (e)
  mainDisplay.appendChild(displayNormalPic);
  // (f)
  function changingPictures() {
    // (g)
    if (index++ >= nameOfArray.length - 1) {
      index = 0;
    }
    // (h)
    displayNormalPic.src = nameOfArray[index].url;
    mainDisplay.appendChild(displayNormalPic);
  }
  // (i)
  setInterval(changingPictures, 5000);
}
//------------------------------------------------------------------------------------------
/* sur les miniatures, on peut:
        1 faire défiler de haut en bas pour voir toutes les photos.
        2 cliquer sur une miniature pour voir l'image en "Géant" autant de temps que l'on veut,
        
            a) soit on clique sur le bouton fermer pour revenir à la vue principale.
        
            b) soit on clique sur une autre photo pour l'afficher en "Géant" autant de temps que l'on veut.


l'affichage en "Géant" recouvre les zones 1/2/3/4/5/6 mais laisse la zone 7 des miniatures visible.*/
//------------------------------------------------------------------------------------------

// 1 = CSS.

// 2: cliquer sur une miniature pour voir l'image en "Géant" autant de temps que l'on veut,
/* En cliquant sur une photo miniature, l'utilisateur affiche en "Géant" la photo sélectionnée.
la photo s'affiche par dessus tout le reste sans interrompre les autres fonctions en cours (défilé de photos).
seul les miniatures et la photo en géant reste affichées.*/

// on écoute si l'utilisateur clique sur une petite photo, puis on l'affiche en grand si elle n'existe pas déja. si il y a déja une photo d'afficher, il faut effacer l'ancienne et afficher la nouvelle que l'utilisateur à choisi, soit fermer l'ancienne si l'utilisateur a cliqué sur le bouton "fermer l'image"

function clickForPicGiant(nameOfArray) {
  // on enregistre la zone d'affichage de la photo géante:
  const divFullScreen = document.querySelector(".fullScreen");
  // on enregistre les élements à écouter dans le tableau:
  const GiantPic = document.querySelectorAll(".imgGenerate");
  // on va écouter chaque photo de ce tableau s'il y a un clic:
  for (let index = 0; index < GiantPic.length; index++) {
    GiantPic[index].onclick = function () {
      // est ce que la photo existe déja?(si elle existe, elle possède la classe ".exist")
      let exist = document.querySelector(".exist");
      // >> non, elle n'existe pas, il faut alors crééer la photo:
      if (exist === null) {
        const imgGiant = document.createElement("img");
        imgGiant.src = nameOfArray[index].url;
        imgGiant.alt = nameOfArray[index].alt;
        imgGiant.id = nameOfArray[index].name;
        // on l'affiche sur toutes nos zones (sauf 7), on affiche la photo par dessus le reste et on indique que la photo géante existe.
        divFullScreen.appendChild(imgGiant);
        divFullScreen.style.zIndex = "10000";
        imgGiant.classList.add("exist");
        closeBtn();
        let clseBtn = document.querySelector("#closeBtnPic");
        clseBtn.addEventListener("click", function () {
          exist = document.querySelector(".exist");
          let clseBtn = document.querySelector("#closeBtnPic");
          divFullScreen.style.zIndex = "-10000";
          exist.remove();
          clseBtn.remove();
        });
      } // oui, elle existe, et l'utilisateur veut regarder d'autres photos avant de fermer l'image en cliquant sur le bouton:
      else {
        let clseBtn = document.querySelector("#closeBtnPic");
        divFullScreen.style.zIndex = "-10000";
        exist.remove();
        clseBtn.remove();
        const imgGiant = document.createElement("img");
        imgGiant.src = nameOfArray[index].url;
        imgGiant.alt = nameOfArray[index].alt;
        imgGiant.id = nameOfArray[index].name;
        // on l'affiche sur toutes nos zones (sauf 7), on affiche la photo par dessus le reste et on indique que la photo géante existe.
        divFullScreen.appendChild(imgGiant);
        divFullScreen.style.zIndex = "10000";
        imgGiant.classList.add("exist");
        closeBtn();
        clseBtn = document.querySelector("#closeBtnPic");
        clseBtn.addEventListener("click", function () {
          exist = document.querySelector(".exist");
          clseBtn = document.querySelector("#closeBtnPic");
          divFullScreen.style.zIndex = "-10000";
          exist.remove();
          clseBtn.remove();
        });
      }
    };
  }
}
//affichage du bouton de fermeture pour les photos Géantes:
function closeBtn() {
  const insertBtn = document.querySelector(".insertBtn");
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.class = "closeBtn";
  closeBtn.id = "closeBtnPic";
  
  insertBtn.appendChild(closeBtn);
  closeBtn.textContent = "<< retour galerie";
}
// fonction à revoir:
// // affichage de la photo Geant:
// function GiantPic(nameOfArray, index) {
//   const imgGiant = document.createElement("img");
//   imgGiant.src = nameOfArray[index].url;
//   imgGiant.alt = nameOfArray[index].alt;
//   imgGiant.id = nameOfArray[index].name;
//   // on l'affiche sur toutes nos zones (sauf 7), on affiche la photo par dessus le reste et on indique que la photo géante existe.
//   divFullScreen.appendChild(imgGiant);
//   divFullScreen.style.zIndex = "10000";
//   imgGiant.classList.add("exist");
// }

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//        on teste notre page et on appelle nos fonctions pour affichage des zones
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

if (animalsSmallPic !== null) {
  addingSmallRightImg(animalsSmallPic, animalsArray);
  showPictureLarge(animalsArray);
  clickForPicGiant(animalsArray);
} else if (autoSmallPic !== null) {
  addingSmallRightImg(autoSmallPic, carsArray);
  showPictureLarge(carsArray);
  clickForPicGiant(carsArray);
} else if (nbSmallPic !== null) {
  addingSmallRightImg(nbSmallPic, nbArray);
  showPictureLarge(nbArray);
  clickForPicGiant(nbArray);
} else if (paysageSmallPic !== null) {
  addingSmallRightImg(paysageSmallPic, paysageArray);
  showPictureLarge(paysageArray);
  clickForPicGiant(paysageArray);
} else if (spitzbergSmallPic !== null) {
  addingSmallRightImg(spitzbergSmallPic, spitzbergArray);
  showPictureLarge(spitzbergArray);
  clickForPicGiant(spitzbergArray);
}
