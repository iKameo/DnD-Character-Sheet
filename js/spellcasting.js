function colorAttribute(){

    //hex colors:
    //--strcolor: #cf4d01;
    //--dexcolor: #168500;
    //--concolor: #9c8d00;
    //--intcolor: #3b6edd;
    //--wiscolor: #2b8da5;
    //--chacolor: #8a003a;

    var _attType = document.getElementById("atr_spell_casting").value;

    switch (_attType) {
        case ("STÄ"):
            document.getElementById("atr_spell_casting").style.color = "#cf4d01";
            break;
        case ("GES"):
            document.getElementById("atr_spell_casting").style.color = "#168500";
            break;
        case ("KON"):
            document.getElementById("atr_spell_casting").style.color = "#9c8d00";
            break;
        case ("INT"):
            document.getElementById("atr_spell_casting").style.color = "#3b6edd";
            break;
        case ("WEI"):
            document.getElementById("atr_spell_casting").style.color = "#2b8da5";
            break;
        case ("CHA"):
            document.getElementById("atr_spell_casting").style.color = "#8a003a";
            break;
    }

}