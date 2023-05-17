# Inserció imatges

## Resultat final
<image src="./images/lleoigirafa.png" alt="Imatge de resultat final">

## Objectiu
Practicar la inserció d'imatges i la modificació amb els atributs

## Conceptes
Atributs:
- position
- top
- bottom
- left
- right
- radius
Classes
Elements fills 
## Comportament valor d'atribut position:
  **Fixed**: la posició de l'element es queda fixada, encara que es faci scroll, sempre queda a la mateixa posició.

  **Relative**: la posició de l'element és relativa a l'anterior ítem.

  **Absolute**: la posició de l'element és absoluta respecte al seu pare.
## Guió
Cada vegada que afegim o modifiquem els valors dels atributs, caldrà visualitzar el resultat al navegador web i canviar els valors des del l'eina per a Desenvolupadors incorporat al navegador web (polsant F12 visualitzem l'eina).
1. Descarregar imatge d'internet (les pàgines https://www.pexels.com/es-es/ i https://pixabay.com/es/users/free-photos-242387/ ofereixen continguts lliures)
2. Crear pàgina web bàsica
3. Crear etiqueta div
4. dins de l'etiqueta div, crear etiqueta img amb els atributs obligatoris src i alt.
```htm
exemple:
<img src="images/leopard.jpg" alt="Ímatge de lleopard">
```
> l'atribut src conté la ruta on es troba la imatge
> l'atribut alt conté el missatge que es visualitzarà en cas que no es pugui carregar la imatge

5. Afegir estils a etiqueta div:
- width: 50%
- position:fixed;
- top: 50px;
- left:200px;
6. Què passa si no posem l'atribut position:fixed?
7. Modificar els valors dels atributs top, left, width, heigh amb valors de %.
8. Afegir una altra imatge amb diferents valors
9. Treiem els atributs afegits anteriorment
10. Afegim als div de cada imatge l'atribut de display:block; i a la imatge una mida de width:300px; height:300px;
11. Afegim al contenidor dels div de les imatges (pot ser el body o un div nou) style="display: flex; flex-wrap: wrap;
12. Afegim els atributs de padding, border, i margin a les imatges i en visualitzem el resultat al navegador.
13. Modifiquem els valors.