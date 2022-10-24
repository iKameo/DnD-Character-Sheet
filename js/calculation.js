function calcSTR(){    

    var _strValue = document.getElementById("atr_2_Strength").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_StrengthMod").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_StrengthMod").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_StrengthMod").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_StrengthMod").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_StrengthMod").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_StrengthMod").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_StrengthMod").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_StrengthMod").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_StrengthMod").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_StrengthMod").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_StrengthMod").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_StrengthMod").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_StrengthMod").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_StrengthMod").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_StrengthMod").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_StrengthMod").value = "+10";
            break;
        default:
            document.getElementById("atr_2_StrengthMod").value = "0";
            break;
        }        
}

function calcDEX(){    

    var _strValue = document.getElementById("atr_2_Dexterity").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_DexterityMod").value = "-5";
            document.getElementById("atr_init_bonus").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_DexterityMod").value = "-4";
            document.getElementById("atr_init_bonus").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_DexterityMod").value = "-3";
            document.getElementById("atr_init_bonus").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_DexterityMod").value = "-2";
            document.getElementById("atr_init_bonus").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_DexterityMod").value = "-1";
            document.getElementById("atr_init_bonus").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_DexterityMod").value = "0";
            document.getElementById("atr_init_bonus").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_DexterityMod").value = "+1";
            document.getElementById("atr_init_bonus").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_DexterityMod").value = "+2";
            document.getElementById("atr_init_bonus").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_DexterityMod").value = "+3";
            document.getElementById("atr_init_bonus").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_DexterityMod").value = "+4";
            document.getElementById("atr_init_bonus").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_DexterityMod").value = "+5";
            document.getElementById("atr_init_bonus").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_DexterityMod").value = "+6";
            document.getElementById("atr_init_bonus").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_DexterityMod").value = "+7";
            document.getElementById("atr_init_bonus").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_DexterityMod").value = "+8";
            document.getElementById("atr_init_bonus").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_DexterityMod").value = "+9";
            document.getElementById("atr_init_bonus").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_DexterityMod").value = "+10";
            document.getElementById("atr_init_bonus").value = "+10";
            break;
        default:
            document.getElementById("atr_2_DexterityMod").value = "0";
            document.getElementById("atr_init_bonus").value = "0";
            break;
}
}

function calcCON(){    

    var _strValue = document.getElementById("atr_2_Constitution").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_ConstitutionMod").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_ConstitutionMod").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_ConstitutionMod").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_ConstitutionMod").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_ConstitutionMod").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_ConstitutionMod").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_ConstitutionMod").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_ConstitutionMod").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_ConstitutionMod").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_ConstitutionMod").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_ConstitutionMod").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_ConstitutionMod").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_ConstitutionMod").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_ConstitutionMod").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_ConstitutionMod").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_ConstitutionMod").value = "+10";
            break;
        default:
            document.getElementById("atr_2_ConstitutionMod").value = "0";
            break;
}
}

function calcINT(){    

    var _strValue = document.getElementById("atr_2_Intelligence").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_IntelligenceMod").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_IntelligenceMod").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_IntelligenceMod").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_IntelligenceMod").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_IntelligenceMod").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_IntelligenceMod").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_IntelligenceMod").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_IntelligenceMod").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_IntelligenceMod").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_IntelligenceMod").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_IntelligenceMod").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_IntelligenceMod").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_IntelligenceMod").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_IntelligenceMod").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_IntelligenceMod").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_IntelligenceMod").value = "+10";
            break;
        default:
            document.getElementById("atr_2_IntelligenceMod").value = "0";
            break;
}
}

function calcWIS(){    

    var _strValue = document.getElementById("atr_2_Wisdom").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_WisdomMod").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_WisdomMod").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_WisdomMod").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_WisdomMod").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_WisdomMod").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_WisdomMod").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_WisdomMod").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_WisdomMod").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_WisdomMod").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_WisdomMod").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_WisdomMod").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_WisdomMod").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_WisdomMod").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_WisdomMod").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_WisdomMod").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_WisdomMod").value = "+10";
            break;
        default:
            document.getElementById("atr_2_WisdomMod").value = "0";
            break;
}
}

function calcCHA(){    

    var _strValue = document.getElementById("atr_2_Charisma").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=1 ):
            document.getElementById("atr_2_CharismaMod").value = "-5";
            break;
        case (_value >= 2 && _value <= 3):
            document.getElementById("atr_2_CharismaMod").value = "-4";
            break;
        case (_value >= 4 && _value <= 5):
            document.getElementById("atr_2_CharismaMod").value = "-3";
            break;
        case (_value >= 6 && _value <= 7):
            document.getElementById("atr_2_CharismaMod").value = "-2";
            break;
        case (_value >= 8 && _value <= 9):
            document.getElementById("atr_2_CharismaMod").value = "-1";
            break;
        case (_value >= 10 && _value <= 11):
            document.getElementById("atr_2_CharismaMod").value = "0";
            break;
        case (_value >= 12 && _value <= 13):
            document.getElementById("atr_2_CharismaMod").value = "+1";
            break;
        case (_value >= 14 && _value <= 15):
            document.getElementById("atr_2_CharismaMod").value = "+2";
            break;
        case (_value >= 16 && _value <= 17):
            document.getElementById("atr_2_CharismaMod").value = "+3";
            break;
        case (_value >= 18 && _value <= 19):
            document.getElementById("atr_2_CharismaMod").value = "+4";
            break;
        case (_value >= 20 && _value <= 21):
            document.getElementById("atr_2_CharismaMod").value = "+5";
            break;
        case (_value >= 22 && _value <= 23):
            document.getElementById("atr_2_CharismaMod").value = "+6";
            break;
        case (_value >= 24 && _value <= 25):
            document.getElementById("atr_2_CharismaMod").value = "+7";
            break;
        case (_value >= 26 && _value <= 27):
            document.getElementById("atr_2_CharismaMod").value = "+8";
            break;
        case (_value >= 28 && _value <= 29):
            document.getElementById("atr_2_CharismaMod").value = "+9";
            break;
        case (_value >= 30):
            document.getElementById("atr_2_CharismaMod").value = "+10";
            break;
        default:
            document.getElementById("atr_2_CharismaMod").value = "0";
            break;
}
}

function calcProfBonus(){

    var _strValue = document.getElementById("level").value;

    var _value = _strValue;
    switch (true) {
        case (_value <=4 ):
            document.getElementById("atr_prof_bonus").value = "+2";
            break;
        case (_value >= 5 && _value <= 8):
            document.getElementById("atr_prof_bonus").value = "+3";
            break;
        case (_value >= 9 && _value <= 12):
            document.getElementById("atr_prof_bonus").value = "+4";
            break;
        case (_value >= 13 && _value <= 16):
            document.getElementById("atr_prof_bonus").value = "+5";
            break;
        case (_value >= 17 && _value <= 20):
            document.getElementById("atr_prof_bonus").value = "+6";
            break;        
        default:
            document.getElementById("atr_prof_bonus").value = "0";
            break;
}
}

function calcPerception(){

    var _string = document.getElementById("prof_perception_bonus").value;
    document.getElementById("atr_passive_perc").value = (parseInt(_string, 10)) + 10;

}

function calcProfBonus2(){

    //hex colors:
    //--strcolor: #cf4d01;
    //--dexcolor: #168500;
    //--concolor: #9c8d00;
    //--intcolor: #3b6edd;
    //--wiscolor: #2b8da5;
    //--chacolor: #8a003a;


    var _className = document.getElementById("class").value;

    //var _value = _className;
    switch (_className) {
        case ("Barbar"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#cf4d01";
            document.getElementById("save_Bonus2").style.color = "#9c8d00";
            break;
        case ("Barde"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#168500";
            document.getElementById("save_Bonus2").style.color = "#8a003a";
            break;
        case ("Druide"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#3b6edd";
            document.getElementById("save_Bonus2").style.color = "#2b8da5";
            break;
        case ("Hexenmeister"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#2b8da5";
            document.getElementById("save_Bonus2").style.color = "#8a003a";
            break;
        case ("Kämpfer"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#cf4d01";
            document.getElementById("save_Bonus2").style.color = "#9c8d00";
            break;
        case ("Kleriker"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#2b8da5";
            document.getElementById("save_Bonus2").style.color = "#8a003a";
            break;
        case ("Magier"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#3b6edd";
            document.getElementById("save_Bonus2").style.color = "#2b8da5";
            break;
        case ("Mönch"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#cf4d01";
            document.getElementById("save_Bonus2").style.color = "#168500";
            break;
        case ("Paladin"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#2b8da5";
            document.getElementById("save_Bonus2").style.color = "#8a003a";
            break;
        case ("Schurke"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#168500";
            document.getElementById("save_Bonus2").style.color = "#3b6edd";
            break;
        case ("Waldläufer"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#cf4d01";
            document.getElementById("save_Bonus2").style.color = "#168500";
            break;
        case ("Zauberer"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#9c8d00";
            document.getElementById("save_Bonus2").style.color = "#8a003a";
            break;
        case ("Magieschmied"):
            document.getElementById("save_Bonus").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus2").innerHTML = document.getElementById("atr_prof_bonus").value;
            document.getElementById("save_Bonus").style.color = "#9c8d00";
            document.getElementById("save_Bonus2").style.color = "#3b6edd";
            break;
}
}