function localizationEN(){
    document.getElementById("char_lbl").innerHTML = "Character Name: ";
    document.getElementById("class_lbl").innerHTML = "Class: ";
    document.getElementById("subclass_lbl").innerHTML = "Subclass: ";
    document.getElementById("level_lbl").innerHTML = "Level: ";
    document.getElementById("race_lbl").innerHTML = "Race: ";
    document.getElementById("age_lbl").innerHTML = "Age: ";
    document.getElementById("sex_lbl").innerHTML = "Sex: ";
    document.getElementById("height_lbl").innerHTML = "Height: ";
    document.getElementById("weight_lbl").innerHTML = "Weight: ";
    document.getElementById("background_lbl").innerHTML = "Background: ";
    document.getElementById("aligment_lbl").innerHTML = "Aligment: ";
    document.getElementById("deity_lbl").innerHTML = "Deity: ";
    document.getElementById("playername_lbl").innerHTML = "Playername: ";
    document.getElementById("xp_lbl").innerHTML = "XP: ";

    //Attribute 1
    document.getElementById("prof_lbl").innerHTML = "Proficiency Bonus: ";
    document.getElementById("init_lbl").innerHTML = "Initiative: ";
    document.getElementById("passperc_lbl").innerHTML = "Passive Perception: ";
    document.getElementById("armor_lbl").innerHTML = "Armor Class: ";
    document.getElementById("speed_lbl").innerHTML = "Speed: ";

    //Attribute
    document.getElementById("str_lbl").innerHTML = "STR";
    document.getElementById("dex_lbl").innerHTML = "DEX";
    document.getElementById("con_lbl").innerHTML = "CON";
    document.getElementById("int_lbl").innerHTML = "INT";
    document.getElementById("wis_lbl").innerHTML = "WIS";
    document.getElementById("cha_lbl").innerHTML = "CHA";

    //Saving Throws
    document.getElementById("savingthrow_lbl").innerHTML = "Saving Throws";
    document.getElementById("savestr_lbl").innerHTML = "Strength";
    document.getElementById("savedex_lbl").innerHTML = "Dexterity";
    document.getElementById("savecon_lbl").innerHTML = "Constitution";
    document.getElementById("saveint_lbl").innerHTML = "Intelligence";
    document.getElementById("savewis_lbl").innerHTML = "Wisdom";
    document.getElementById("savecha_lbl").innerHTML = "Charisma";

    //Inventory
    document.getElementById("inventory_lbl").innerHTML = "Inventory";
    document.getElementById("currencyplatin_lbl").innerHTML = "P";
    document.getElementById("currencygold_lbl").innerHTML = "G";
    document.getElementById("currencysilver_lbl").innerHTML = "S";
    document.getElementById("currencycopper_lbl").innerHTML = "C";
    //Dropdown
    document.getElementById("optioncopper_lbl").innerHTML = "Copper";
    document.getElementById("optionsilver_lbl").innerHTML = "Silver";
    document.getElementById("optiongold_lbl").innerHTML = "Gold";
    document.getElementById("optionplatin_lbl").innerHTML = "Platinum";

    document.getElementById("spancopper_lbl").innerHTML = "Copper";
    document.getElementById("spansilver_lbl").innerHTML = "Silver";
    document.getElementById("spangold_lbl").innerHTML = "Gold";
    document.getElementById("spanplatin_lbl").innerHTML = "Platinum";
    document.getElementById("calculate").innerHTML = "Calculate";

    //Abilities
    document.getElementById("ability_lbl").innerHTML = "Abilities";

    //Strength
    var strDiv = document.getElementById("abstr_lbl");
    var abstr_lbl = strDiv.childNodes[0];
    abstr_lbl.nodeValue = "STRENGTH";

    document.getElementById("athletic_lbl").innerHTML = "Athletic";

    //Dexterity
    var dexDiv = document.getElementById("abdex_lbl");
    var abdex_lbl = dexDiv.childNodes[0];
    abdex_lbl.nodeValue = "DEXTERITY";

    document.getElementById("acrobatic_lbl").innerHTML = "Acrobatic";
    document.getElementById("sleightofhand_lbl").innerHTML = "Sleight of Hand";
    document.getElementById("sneak_lbl").innerHTML = "Sneak";

    //Constitution
    var conDiv = document.getElementById("abcon_lbl");
    var abcon_lbl = conDiv.childNodes[0];
    abcon_lbl.nodeValue = "CONSTITUTION";

    //Intelligence
    var intDiv = document.getElementById("abint_lbl");
    var abint_lbl = intDiv.childNodes[0];
    abint_lbl.nodeValue = "INTELLIGENCE";

    document.getElementById("arcana_lbl").innerHTML = "Arcana";
    document.getElementById("history_lbl").innerHTML = "History";
    document.getElementById("investigation_lbl").innerHTML = "Investigation";
    document.getElementById("nature_lbl").innerHTML = "Nature";
    document.getElementById("religion_lbl").innerHTML = "Religion";

    //Wisdom
    var wisDiv = document.getElementById("abwis_lbl");
    var abwis_lbl = wisDiv.childNodes[0];
    abwis_lbl.nodeValue = "WISDOM";

    document.getElementById("medicin_lbl").innerHTML = "Medicin";
    document.getElementById("animalhandling_lbl").innerHTML = "Animal Handling";
    document.getElementById("insight_lbl").innerHTML = "Insight";
    document.getElementById("survival_lbl").innerHTML = "Survival";
    document.getElementById("perception_lbl").innerHTML = "Perception";

    //Charisma
    var chaDiv = document.getElementById("abcha_lbl");
    var abcha_lbl = chaDiv.childNodes[0];
    abcha_lbl.nodeValue = "WISDOM";

    document.getElementById("performance_lbl").innerHTML = "Performance";
    document.getElementById("intimidation_lbl").innerHTML = "Intimidation";
    document.getElementById("deception_lbl").innerHTML = "Deception";
    document.getElementById("persuasion_lbl").innerHTML = "Persuasion";


    //Notes
    document.getElementById("notes_lbl").innerHTML = "Notes";
    document.getElementById("languages_lbl").innerHTML = "Languages";


    //Hit Dice
    document.getElementById("hitdiece_lbl").innerHTML = "Dice";
    document.getElementById("diceclass_lbl").innerHTML = "Class";

    //Status
    document.getElementById("status_lbl").innerHTML = "States";

    document.getElementById("temphp_lbl").innerHTML = "Temporary Hit Points: ";
    document.getElementById("currenthp_lbl").innerHTML = "Current Hit Points: ";
    document.getElementById("maxhp_lbl").innerHTML = "Maximal Hit Points: ";

    document.getElementById("hitdice_lbl").innerHTML = "Hit Dice: ";
    document.getElementById("temphitdice_lbl").innerHTML = "Temporary Hit Dice: ";

    document.getElementById("deathrollsuccess_lbl").innerHTML = "Death saving throws successes: ";
    document.getElementById("deathrollfail_lbl").innerHTML = "Death saving throws failures: ";
    
    document.getElementById("status2_lbl").innerHTML = "States: ";
    document.getElementById("boons_lbl").innerHTML = "Boons: ";

    //Attacks
    document.getElementById("attacks_lbl").innerHTML = "Attacks";

    document.getElementById("atkname_lbl").innerHTML = "Name";
    document.getElementById("atkbonus_lbl").innerHTML = "Bonus";
    document.getElementById("atkdamage_lbl").innerHTML = "Damage";

    document.getElementById("spellsavingthrow_lbl").innerHTML = "Spell saving throw: ";
    document.getElementById("apellattackbonus_lbl").innerHTML = "Spell attack bonus: ";
    document.getElementById("spellcastingattribute_lbl").innerHTML = "Attribute to cast spell: ";

    //Spells
    document.getElementById("spells_lbl").innerHTML = "Spells";

    document.getElementById("spellsname_lbl").innerHTML = "Name";
    document.getElementById("spellsgrade_lbl").innerHTML = "Grade";

}

//German localization

function localizationDE(){
    document.getElementById("char_lbl").innerHTML = "Charakter Name: ";
    document.getElementById("class_lbl").innerHTML = "Klasse: ";
    document.getElementById("subclass_lbl").innerHTML = "Unterklasse: ";
    document.getElementById("level_lbl").innerHTML = "Level: ";
    document.getElementById("race_lbl").innerHTML = "Rasse: ";
    document.getElementById("age_lbl").innerHTML = "Alter: ";
    document.getElementById("sex_lbl").innerHTML = "Geschlecht: ";
    document.getElementById("height_lbl").innerHTML = "Größe: ";
    document.getElementById("weight_lbl").innerHTML = "Gewicht: ";
    document.getElementById("background_lbl").innerHTML = "Hintergrund: ";
    document.getElementById("aligment_lbl").innerHTML = "Ausrichtung: ";
    document.getElementById("deity_lbl").innerHTML = "Gottheit: ";
    document.getElementById("playername_lbl").innerHTML = "Spielername: ";
    document.getElementById("xp_lbl").innerHTML = "Erfahrung: ";

    //Attribute 1
    document.getElementById("prof_lbl").innerHTML = "Übungsbonus: ";
    document.getElementById("init_lbl").innerHTML = "Initiative Bonus: ";
    document.getElementById("passperc_lbl").innerHTML = "Passive Wahrnehmung: ";
    document.getElementById("armor_lbl").innerHTML = "Rüstungsklasse: ";
    document.getElementById("speed_lbl").innerHTML = "Geschwindigkeit: ";

    //Attribute
    document.getElementById("str_lbl").innerHTML = "STÄ";
    document.getElementById("dex_lbl").innerHTML = "GES";
    document.getElementById("con_lbl").innerHTML = "KON";
    document.getElementById("int_lbl").innerHTML = "INT";
    document.getElementById("wis_lbl").innerHTML = "WEI";
    document.getElementById("cha_lbl").innerHTML = "CHA";

    //Saving Throws
    document.getElementById("savingthrow_lbl").innerHTML = "Rettungswürfe";
    document.getElementById("savestr_lbl").innerHTML = "Stärke";
    document.getElementById("savedex_lbl").innerHTML = "Geschick";
    document.getElementById("savecon_lbl").innerHTML = "Konstitution";
    document.getElementById("saveint_lbl").innerHTML = "Intelligenz";
    document.getElementById("savewis_lbl").innerHTML = "Weisheit";
    document.getElementById("savecha_lbl").innerHTML = "Charisma";

    //Inventory
    document.getElementById("inventory_lbl").innerHTML = "Inventar";
    document.getElementById("currencyplatin_lbl").innerHTML = "P";
    document.getElementById("currencygold_lbl").innerHTML = "G";
    document.getElementById("currencysilver_lbl").innerHTML = "S";
    document.getElementById("currencycopper_lbl").innerHTML = "K";
    //Dropdown
    document.getElementById("optioncopper_lbl").innerHTML = "Kupfer";
    document.getElementById("optionsilver_lbl").innerHTML = "Silber";
    document.getElementById("optiongold_lbl").innerHTML = "Gold";
    document.getElementById("optionplatin_lbl").innerHTML = "Platin";

    document.getElementById("spancopper_lbl").innerHTML = "Kupfer";
    document.getElementById("spansilver_lbl").innerHTML = "Silber";
    document.getElementById("spangold_lbl").innerHTML = "Gold";
    document.getElementById("spanplatin_lbl").innerHTML = "Platin";
    document.getElementById("calculate").innerHTML = "Berechnen";

    //Abilities
    document.getElementById("ability_lbl").innerHTML = "Fertigkeiten";

    //Strength
    var strDiv = document.getElementById("abstr_lbl");
    var abstr_lbl = strDiv.childNodes[0];
    abstr_lbl.nodeValue = "STÄRKE";

    document.getElementById("athletic_lbl").innerHTML = "Athletik";

    //Dexterity
    var dexDiv = document.getElementById("abdex_lbl");
    var abdex_lbl = dexDiv.childNodes[0];
    abdex_lbl.nodeValue = "GESCHICKLICHKEIT";

    document.getElementById("acrobatic_lbl").innerHTML = "Akrobatik";
    document.getElementById("sleightofhand_lbl").innerHTML = "Fingerfertigkeit";
    document.getElementById("sneak_lbl").innerHTML = "Schleichen";

    //Constitution
    var conDiv = document.getElementById("abcon_lbl");
    var abcon_lbl = conDiv.childNodes[0];
    abcon_lbl.nodeValue = "KONSTITUTION";

    //Intelligence
    var intDiv = document.getElementById("abint_lbl");
    var abint_lbl = intDiv.childNodes[0];
    abint_lbl.nodeValue = "INTELLIGENZ";

    document.getElementById("arcana_lbl").innerHTML = "Arkane Kunde";
    document.getElementById("history_lbl").innerHTML = "Geschichte";
    document.getElementById("investigation_lbl").innerHTML = "Nachforschung";
    document.getElementById("nature_lbl").innerHTML = "Naturkunde";
    document.getElementById("religion_lbl").innerHTML = "Religion";

    //Wisdom
    var wisDiv = document.getElementById("abwis_lbl");
    var abwis_lbl = wisDiv.childNodes[0];
    abwis_lbl.nodeValue = "WEISHEIT";

    document.getElementById("medicin_lbl").innerHTML = "Heilkunde";
    document.getElementById("animalhandling_lbl").innerHTML = "Mit Tieren umgehen";
    document.getElementById("insight_lbl").innerHTML = "Motiv erkennen";
    document.getElementById("survival_lbl").innerHTML = "Überlebeskunst";
    document.getElementById("perception_lbl").innerHTML = "Wahrnehmung";

    //Charisma
    var chaDiv = document.getElementById("abcha_lbl");
    var abcha_lbl = chaDiv.childNodes[0];
    abcha_lbl.nodeValue = "CHARISMA";

    document.getElementById("performance_lbl").innerHTML = "Auftreten";
    document.getElementById("intimidation_lbl").innerHTML = "Einschüchtern";
    document.getElementById("deception_lbl").innerHTML = "Täuschen";
    document.getElementById("persuasion_lbl").innerHTML = "Überzeugen";


    //Notes
    document.getElementById("notes_lbl").innerHTML = "Notizen";
    document.getElementById("languages_lbl").innerHTML = "Sprachen";


    //Hit Dice
    document.getElementById("hitdiece_lbl").innerHTML = "Trefferwürfel";
    document.getElementById("diceclass_lbl").innerHTML = "Klasse";

    //Status
    document.getElementById("status_lbl").innerHTML = "Zustände";

    document.getElementById("temphp_lbl").innerHTML = "Temporäre Trefferpunkte: ";
    document.getElementById("currenthp_lbl").innerHTML = "Aktuelle Trefferpunkte: ";
    document.getElementById("maxhp_lbl").innerHTML = "Maximale Trefferpunkte: ";

    document.getElementById("hitdice_lbl").innerHTML = "Trefferwürfel: ";
    document.getElementById("temphitdice_lbl").innerHTML = "Temporärer Trefferwürfel: ";

    document.getElementById("deathrollsuccess_lbl").innerHTML = "Todesrettungswürfe Erfolge: ";
    document.getElementById("deathrollfail_lbl").innerHTML = "Todesrettungswürfe Fehlschläge: ";
    
    document.getElementById("status2_lbl").innerHTML = "Zustände: ";
    document.getElementById("boons_lbl").innerHTML = "Boni: ";

    //Attacks
    document.getElementById("attacks_lbl").innerHTML = "Angriffe";

    document.getElementById("atkname_lbl").innerHTML = "Name";
    document.getElementById("atkbonus_lbl").innerHTML = "Bonus";
    document.getElementById("atkdamage_lbl").innerHTML = "Schaden";

    document.getElementById("spellsavingthrow_lbl").innerHTML = "Zauberrettungswurf: ";
    document.getElementById("apellattackbonus_lbl").innerHTML = "Zauberangriffsbonus: ";
    document.getElementById("spellcastingattribute_lbl").innerHTML = "Attribut zum Zauber wirken: ";

    //Spells
    document.getElementById("spells_lbl").innerHTML = "Zauber";

    document.getElementById("spellsname_lbl").innerHTML = "Name";
    document.getElementById("spellsgrade_lbl").innerHTML = "Stufe";

}