# Posicionament position

## Resultat final
<image src="./images/posicionamentPosition.png" alt="Imatge de resultat final">

## Objectiu
Entendre la lògica de posicionament de les caixes.

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
Cada vegada que afegim una etiqueta o característica, caldrà visualitzar el resultat al navegador web i canviar els valors dels atributs des del l'eina per a Desenvolupadors incorporat al navegador web (polsant F12 visualitzem l'eina).
1. Creació de caixa amb etiqueta div
2. Assignem classe "quadratfixe" i estil "inline" position: fixed
3. Classe quadratfixe amb següents atributs:
  
    width: 50px;
  
    height: 50px;
  
    background-color: #aaa;
4. Creació de caixa amb etiqueta div
5. Assignem classe "rectangle"
6. Classe rectangle amb següents atributs:
  
    width: 70px;
  
    height: 700px;
  
    background-color: red;
7. Creació de caixa amb etiqueta div
8. Assignem classe "quadratRelative" i estil "inline" position: relative
9. Classe quadratRelative amb següents atributs:
  
    width: 50px;
  
    height: 50px;
  
    background-color: #aaa;
  
    left: 200px;
  
    top: -700px;
10. Creació de caixa amb etiqueta div
11. Assignem classe "quadratAbsolute"
12. Classe quadratAbsolute amb següents atributs:
  
    width: 200px;
  
    height: 200px;
  
    background-color: #aaa;
  
    position: relative;
  
    left: 300px;
  
    top: -750px;
13. Creació de caixa amb etiqueta div, filla d'element anterior (filla de caixa creada al pas 10)
14. Assignem classe "cercle"
15. Classe cercle amb següents atributs:
    
    width: 10px;
    
    height: 10px;
    
    background: blue;
    
    border-radius: 50%;
    
    position: absolute;
    
    top: 25px;
    
    left: 10px;