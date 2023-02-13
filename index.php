<!DOCTYPE html>
<html>
<html lang="de">
<head>
    <title>DnD Character Sheet</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
    <!-- CSS -->
    <link rel="stylesheet" href="css/stylesheet.css">

    <!-- 
        TODO:

    -->

    <script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/conversion.js"></script>
    <script type="text/javascript" src="js/calculation.js"></script>
    <script type="text/javascript" src="js/healtbar.js"></script>
    <script type="text/javascript" src="js/spellcasting.js"></script>
    <script type="text/javascript" src="js/localization.js"></script>
    <script type="text/javascript" src="js/fontchange.js"></script>

</head>

<body>
    <div class="headerbox">
        <div class="box grey">

            <img src="assets/header.png">
        </div>
    </div>
    <form>
    <div class="abilitywrapLang">
        <button class="buttonLangEN" onclick="localizationEN()" type="button"></button>
        <button class="buttonLangDE" onclick="localizationDE()" type="button"></button>
        <!-- dynamic font changing -->
        <select class= "selectFont" id="fontchangeDropdownFrom" onchange="changeFont()">
            <option id="optionfont_1">Diablo</option>
            <option id="optionfont_2">Onuava</option>
        </select>
    </div>

    <div class="abilitywrap">
        <table>
            <tr>
                <td><label id="char_lbl">Charakter Name: </label><input id="name" class="resizedTextbox" type="text"></td>
                <td><label id="class_lbl">Klasse: </label><input id="class" class="resizedTextbox" type="text" onchange="calcProfBonus2()"></td>
                <td><label id="subclass_lbl">Unterklasse: </label><input id="subclass" class="resizedTextbox" type="text"></td>
            </tr>
            <tr>
                <td><label id="level_lbl">Level: </label><input id="level" class="resizedTextboxSlim" type="text" onchange="calcProfBonus()"></td>
                <td><label id="race_lbl">Rasse: </label><input id="race" class="resizedTextbox" type="text"></td>
                <td><label id="age_lbl">Alter: </label><input id="age" class="resizedTextboxSlim" type="text"></td>
            </tr>
            <tr>
                <td><label id="sex_lbl">Geschlecht: </label><input id="sex" class="resizedTextbox" type="text"></td>
                <td><label id="height_lbl">Größe: </label><input id="size" class="resizedTextboxSlim" type="text"></td>
                <td><label id="weight_lbl">Gewicht: </label><input id="weight" class="resizedTextboxSlim" type="text"></td>
            </tr>
            <tr>
                <td><label id="background_lbl">Hintergrund: </label><input id="background" class="resizedTextbox" type="text"></td>
                <td><label id="aligment_lbl">Ausrichtung: </label><input id="aligment" class="resizedTextbox" type="text"></td>
                <td><label id="deity_lbl">Gottheit: </label><input id="deity" class="resizedTextbox" type="text"></td>
            </tr>
            <tr>
                <td><label id="playername_lbl">Spielername: </label><input id="playername" class="resizedTextbox" type="text"></td>
                <td><label id="xp_lbl">Erfahrung: </label><input id="xp" class="resizedTextboxSlim" type="text"></td>
            </tr>
        </table>
    </div>
    <!-- Attribute 1 -->
    <div class="abilitywrap">
        <table>
            <tr>
                <td><label id="prof_lbl">Übungsbonus: </label><input id="atr_prof_bonus" class="resizedTextboxSlim" type="text"></td>
                <td><label id="init_lbl">Initiative Bonus: </label><input id="atr_init_bonus" class="resizedTextboxSlim" type="text"></td>
                <td><label id="passperc_lbl">Passive Wahrnehmung: </label><input id="atr_passive_perc" class="resizedTextboxSlim" type="text"></td>
                <button class="buttonReloadBonus" onclick="calcProfBonus2(); calcHP(); colorAttribute(); calcSTR();" type="button">Reload</button>
            </tr>
            <tr>
                <td><label id="armor_lbl">Rüstungsklasse: </label><input id="atr_armor_class" class="resizedTextboxSlim" type="text"></td>
                <td><label id="speed_lbl">Geschwindigkeit: </label><input id="atr_spd_value" class="resizedTextboxSlim" type="text"></td>
            </tr>
        </table>
    </div>
</div>

        <!--Attribute-->

<section class="layout">
    <div>          
        <!--Stärke-->
        <div class="abilitywrapChild">
            <label id="str_lbl" class="strlabel">STÄ</label>
        </br>
            <input id="atr_2_Strength" class="resizedTextboxSlim" type="text" onchange="calcSTR()">
            <div class="abilitywrapMod">
                <input id="atr_2_StrengthMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>

        <!--Geschicklichkeit-->
            <div class="abilitywrapChild">
                <label id="dex_lbl" class="dexlabel">GES</label>
        </br>
            <input id="atr_2_Dexterity" class="resizedTextboxSlim" type="text" onchange="calcDEX()">
            <div class="abilitywrapMod">
                <input id="atr_2_DexterityMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>

        <!--Konstitution-->
            <div class="abilitywrapChild">
                <label id="con_lbl" class="conlabel">KON</label>
        </br>
            <input id="atr_2_Constitution" class="resizedTextboxSlim" type="text" onchange="calcCON()">
            <div class="abilitywrapMod">
                <input id="atr_2_ConstitutionMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>

        <!--Intelligenz-->
            <div class="abilitywrapChild">
                <label id="int_lbl" class="intlabel">INT</label>
        </br>
            <input id="atr_2_Intelligence" class="resizedTextboxSlim" type="text" onchange="calcINT()">
            <div class="abilitywrapMod">
                <input id="atr_2_IntelligenceMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>

        <!--Weisheit-->
            <div class="abilitywrapChild">
                <label id="wis_lbl" class="wislabel">WEI</label>
        </br>
            <input id="atr_2_Wisdom" class="resizedTextboxSlim" type="text" onchange="calcWIS()">
            <div class="abilitywrapMod">
                <input id="atr_2_WisdomMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>

        <!--Charisma-->
            <div class="abilitywrapChild">
                <label id="cha_lbl" class="chalabel">CHA</label>
        </br>
            <input id="atr_2_Charisma" class="resizedTextboxSlim" type="text" onchange="calcCHA()">
            <div class="abilitywrapMod">
                <input id="atr_2_CharismaMod" class="resizedTextboxMod" type="text">
                </div>
            </div>
        </br>
    </div>
</div>

<div>
    <div class="layoutStacked">
        <!--Rettungswürfe-->
        <div class="abilitywrapSavethrow">
            <h2 id="savingthrow_lbl">Rettungswürfe</h2>
                <div class="tablelayout">
                    <input id="save_str" class="tableinput" type="text"><label id="savestr_lbl" class="strlabel">Stärke</label>                   
                </br>
                    <input id="save_dex" class="tableinput" type="text"><label id="savedex_lbl" class="dexlabel">Geschick</label>
                </br>
                    <input id="save_con" class="tableinput" type="text"><label id="savecon_lbl" class="conlabel">Konstitution</label>
                </br>
                    <input id="save_int" class="tableinput" type="text"><label id="saveint_lbl" class="intlabel">Intelligenz</label>
                </br>
                    <input id="save_wis" class="tableinput" type="text"><label id="savewis_lbl" class="wislabel">Weisheit</label>
                </br>
                    <input id="save_cha" class="tableinput" type="text"><label id="savecha_lbl" class="chalabel">Charisma</label>
                </div>
                    <span class="profBonusSpan" id="save_Bonus">0</span>
                    <span class="profBonusSpan" id="save_Bonus2">0</span>
            </div>
        </div>

        <!--Inventar-->
        <div class="abilitywrapFixedWidth">
            <h2 id="inventory_lbl">Inventar</h2>
                <div class="tablelayout">
                    <textarea id="inventory_slots" class="resizedTextareaInventory" type="text"></textarea>
            <div class="converterBorder">
                <img class="coinsSVG" src="/assets/coins.svg">
                    <input id="currency_platin" class="tableinputCurrency" type="text"><label id="currencyplatin_lbl" class="platinum">P</label>
                </br>
                    <input id="currency_gold" class="tableinputCurrency" type="text"><label id="currencygold_lbl" class="gold">G</label>
                </br>
                    <input id="currency_silver" class="tableinputCurrency" type="text"><label id="currencysilver_lbl" class="silver">S</label>
                </br>
                    <input id="currency_copper" class="tableinputCurrency" type="text"><label id="currencycopper_lbl" class="copper">K</label>
                </div>
            </div>
                <div class="converter">
                    <div class="converterBorder">
                    <input id="conversionAmountInput" class="tableinput" type="text">
                    <select id = "currencyDropdownFrom">
                        <option id="optioncopper_lbl">Kupfer</option>
                        <option id="optionsilver_lbl">Silber</option>
                        <option id="optiongold_lbl">Gold</option>
                        <option id="optionplatin_lbl">Platin</option>
                    </select>
                    <button id="calculate" type="button" onclick="calculateCurrency();">Berechnen</button>
                </br>
                    <span id="spanplatin_lbl" class="platinumSpan" id="platinumSpan">Platin</span>
                </br>
                    <span id="spangold_lbl" class="goldSpan" id="goldSpan">Gold</span>
                </br>
                    <span id="spansilver_lbl" class="silverSpan" id="silverSpan">Silver</span>
                </br>
                    <span id="spancopper_lbl" class="copperSpan" id="copperSpan">Kupfer</span>
                </br>
                </div>
            </div>
        </div>
    </div>
</div>
         <!--Fertigkeiten-->
        <div class="abilitywrapFixedWidth">
            <h2 id="ability_lbl">Fertigkeiten</h2>
            <div id="abstr_lbl" class="abSTR">STÄRKE
                <div class="tablelayout">
                    <input id="prof_athletic_bonus" class="tableinput" type="text"><label id="athletic_lbl">Athletik</label>
                </div>
            </div>

            <div id="abdex_lbl" class="abDEX">GESCHICKLICHKEIT
                <div class="tablelayout">
                    <input id="prof_acrobatic_bonus" class="tableinput" type="text"><label id="acrobatic_lbl">Akrobatik</label>
                </br>
                    <input id="prof_sleightofhand_bonus" class="tableinput" type="text"><label id="sleightofhand_lbl">Fingerfertigkeit</label>
                </br>
                    <input id="prof_stealth_bonus" class="tableinput" type="text"><label id="sneak_lbl">Schleichen</label>
                </div>
            </div>

            <div id="abcon_lbl" class="abCON">KONSTITUTION
                <div class="tablelayout">
                </div>
            </div>

            <div id="abint_lbl" class="abINT">INTELLIGENZ
                <div class="tablelayout">
                    <input id="prof_arcana_bonus" class="tableinput" type="text"><label id="arcana_lbl">Arkane Kunde</label>
                </br>
                    <input id="prof_history_bonus" class="tableinput" type="text"><label id="history_lbl">Geschichte</label>
                </br>
                    <input id="prof_investigation_bonus" class="tableinput" type="text"><label id="investigation_lbl">Nachforschung</label>
                </br>
                    <input id="prof_nature_bonus" class="tableinput" type="text"><label id="nature_lbl">Naturkunde</label>
                </br>
                    <input id="prof_religion_bonus" class="tableinput" type="text"><label id="religion_lbl">Religion</label>
                </div>
            </div>

            <div id="abwis_lbl" class="abWIS">WEISHEIT
                <div class="tablelayout">
                    <input id="prof_medicine_bonus" class="tableinput" type="text"><label id="medicin_lbl">Heilkunde</label>
                </br>
                    <input id="prof_animalhandling_bonus" class="tableinput" type="text"><label id="animalhandling_lbl">Mit Tieren umgehen</label>
                </br>
                    <input id="prof_insight_bonus" class="tableinput" type="text"><label id="insight_lbl">Motiv erkennen</label>
                </br>
                    <input id="prof_survival_bonus" class="tableinput" type="text"><label id="survival_lbl">Überlebeskunst</label>
                </br>
                    <input id="prof_perception_bonus" class="tableinput" type="text" onchange="calcPerception()"><label id="perception_lbl">Wahrnehmung</label>
                </div>
            </div>

            <div id="abcha_lbl" class="abCHA">CHARISMA
                <div class="tablelayout">
                    <input id="prof_performance_bonus" class="tableinput" type="text"><label id="performance_lbl">Auftreten</label>
                </br>
                    <input id="prof_intimidation_bonus" class="tableinput" type="text"><label id="intimidation_lbl">Einschüchtern</label>
                </br>
                    <input id="prof_deception_bonus" class="tableinput" type="text"><label id="deception_lbl">Täuschen</label>
                </br>
                    <input id="prof_persuasion_bonus" class="tableinput" type="text"><label id="persuasion_lbl">Überzeugen</label>
                </div>
            </div>
        </div>
    </div>
    <!--Notizen-->
    <div class="abilitywrapSavethrow">
        <h2 id="notes_lbl">Notizen</h2>
            <div class="tablelayout">
                <textarea id="informationField" class="resizedTextareaNotes" type="text"></textarea>

                <div class="informationBorder">
                <h2 id="languages_lbl">Sprachen</h2>
                <input id="lang_1" class="learnedLanguage" type="text">
                <input id="lang_2" class="learnedLanguage" type="text">
                </br>
                <input id="lang_3" class="learnedLanguage" type="text">
                <input id="lang_4" class="learnedLanguage" type="text">
                </br>
                <input id="lang_5" class="learnedLanguage" type="text">
                <input id="lang_6" class="learnedLanguage" type="text">
                </br>
                <input id="lang_7" class="learnedLanguage" type="text">
                <input id="lang_8" class="learnedLanguage" type="text">
                </br>
                <input id="lang_9" class="learnedLanguage" type="text">
                <input id="lang_10" class="learnedLanguage" type="text">
                </br>
                <input id="lang_11" class="learnedLanguage" type="text">
                <input id="lang_12" class="learnedLanguage" type="text">
            </div>
                

                <div class="informationBorder">
                    <table>
                        <tr>
                          <th id="hitdiece_lbl" class="tableStyleHeader">Trefferwürfel</th>
                          <th id="diceclass_lbl" class="tableStyleHeader">Klasse</th>
                        </tr>
                        <tr>
                          <td class="tableStyle">d4</td>
                          <td class="tableStyle">-</td>
                        </tr>
                        <tr>
                          <td class="tableStyleAlternating">d6</td>
                          <td class="tableStyleAlternating">Magier, Zauberer</td>
                        </tr>
                        <tr>
                          <td class="tableStyle">d8</td>
                          <td class="tableStyle">Barde, Druide, Hexenmeister, Kleriker, Mönch, Schurke, Magieschmied</td>
                        </tr>
                        <tr>
                          <td class="tableStyleAlternating">d10</td>
                          <td class="tableStyleAlternating">Kämpfer, Paladin, Waldläufer</td>
                        </tr>
                        <tr>
                          <td class="tableStyle">d12</td>
                          <td class="tableStyle">Barbar</td>
                        </tr>
                      </table> 
                </div>
            </div>
    </div>

    <!--Layout-->
</section>
        <!--Zustände-->
        <div class="abilitywrap">
            <h2 id="status_lbl">Zustände</h2>
            <table>
                <tr>                    
                    <td><label id="temphp_lbl">Temporäre Trefferpunkte: </label><input id="stat_temp_hitpoint" class="resizedTextboxSlim" type="text"></td>
                    <td><label id="currenthp_lbl">Aktuelle Trefferpunkte: </label><input id="stat_hitpoint" class="resizedTextboxSlim" type="text" onchange="calcHP()"></td>
                    <td><label id="maxhp_lbl">Maximale Trefferpunkte: </label><input id="stat_max_hitpoint" class="resizedTextboxSlim" type="text" onchange="calcHP()"></td>
                </tr>
                <tr>
                    <td><label id="hitdice_lbl">Trefferwürfel: </label><input id="stat_hit_dice" class="resizedTextboxSlim" type="text"></td>
                    <td><label id="temphitdice_lbl">Temporärer Trefferwürfel: </label><input id="stat_temp_hit_dice" class="resizedTextboxSlim" type="text"></td>
                </tr>
            </table>
            <progress id="hpbar"></progress>
        

        <div>
            <label id="deathrollsuccess_lbl">Todesrettungswürfe Erfolge: </label><input id="stat_save_success1" class="fauxcheckboxSuccess" maxlength="1" type="text"><input id="stat_save_success2" class="fauxcheckboxSuccess" maxlength="1" type="text"><input id="stat_save_success3" class="fauxcheckboxSuccess" maxlength="1" type="text">
        </div>
        <div>
            <label id="deathrollfail_lbl">Todesrettungswürfe Fehlschläge: </label><input id="stat_save_fail1" class="fauxcheckboxFail" maxlength="1" type="text"><input id="stat_save_fail2" class="fauxcheckboxFail" maxlength="1" type="text"><input id="stat_save_fail3" class="fauxcheckboxFail" maxlength="1" type="text">
        </div>
    </div>

        <div class="abilitywrap">
            <div>
                <label id="status2_lbl">Zustände: </label><textarea id="stat_status" class="resizedTextarea" type="text"></textarea>
                <label id="boons_lbl">Boni: </label><textarea id="stat_boni" class="resizedTextarea" type="text"></textarea>
            </div>
        </div>

        <!--Ausrüstung-->
        <div class="abilitywrap">
            <h2 id="attacks_lbl">Angriffe</h2>
                <div class="tablelayout">
                    <table>
                        <tr>
                            <th id="atkname_lbl">Name</th>
                            <th id="atkbonus_lbl">Bonus</th>
                            <th id="atkdamage_lbl">Schaden</th>
                        </tr>
                        <tr>
                            <td><input id="eq_name_1" class="eqNameTextbox" type="text"></td>
                            <td><input id="eq_bonus_1" class="eqBonusTextbox" type="text"></td>
                            <td><input id="eq_damage_1" class="eqDamageTextbox" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="eq_name_2" class="eqNameTextbox" type="text"></td>
                            <td><input id="eq_bonus_2" class="eqBonusTextbox" type="text"></td>
                            <td><input id="eq_damage_2" class="eqDamageTextbox" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="eq_name_3" class="eqNameTextbox" type="text"></td>
                            <td><input id="eq_bonus_3" class="eqBonusTextbox" type="text"></td>
                            <td><input id="eq_damage_3" class="eqDamageTextbox" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="eq_name_4" class="eqNameTextbox" type="text"></td>
                            <td><input id="eq_bonus_4" class="eqBonusTextbox" type="text"></td>
                            <td><input id="eq_damage_4" class="eqDamageTextbox" type="text"></td>
                        </tr>                        
                    </table>
                    <td><label id="spellsavingthrow_lbl" class="spelllabel">Zauberrettungswurf: </label><input id="atr_spell_atk_save" class="resizedTextbox" type="text"></td>
                </br>
                    <td><label id="apellattackbonus_lbl" class="spelllabel">Zauberangriffsbonus: </label><input id="atr_spell_atk_bonus" class="resizedTextbox" type="text"></td>
                </br>    
                    <td><label id="spellcastingattribute_lbl" class="spelllabel">Attribut zum Zauber wirken: </label><input id="atr_spell_casting" class="resizedTextboxSlim" type="text" onchange="colorAttribute()"></td>
                </div>
        </div>

        <!--Zauber-->
        <div class="abilitywrap">
            <h2 id="spells_lbl">Zauber</h2>
                <div class="tablelayout">
                    <table>
                        <tr>
                            <th id="spellsname_lbl">Name</th>
                            <th id="spellsgrade_lbl">Stufe</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><input id="spell_name_1" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_1" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_1" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_2" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_2" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_2" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_3" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_3" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_3" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_4" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_4" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_4" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_5" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_5" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_5" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_6" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_6" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_6" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_7" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_7" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_7" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_8" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_8" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_8" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_9" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_9" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_9" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_10" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_10" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_10" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_11" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_11" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_11" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_12" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_12" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_12" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_13" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_13" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_13" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_14" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_14" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_14" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_15" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_15" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_15" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_16" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_16" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_16" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_17" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_17" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_17" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_18" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_18" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_18" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_19" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_19" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_19" class="spellCantrips" type="text"></td>
                        </tr>
                        <tr>
                            <td><input id="spell_name_20" class="spellHeader" type="text"></td>
                            <td><input id="spell_level_20" class="spellSlots" type="text"></td>
                            <td class="tableSpacer"><input id="cantrip_name_20" class="spellCantrips" type="text"></td>
                        </tr>

                    </table>                    
                </div>
        </div>


    </form>
    <!--Download-->
		<div class="downloadbox">
			<div class="leftaligndownloadbox">
				<div>
					<button id="downloadJSON" onclick="saveFile();">Download Sheet</button>
				</div>
				<div>
					<input type="file" class="inputDefault" accept=".json" id="import-file"/>
				</div>
				<div>
					<button id="loadJSON" onclick="loadFile();">Load Sheet</button>
				</div>
			</div>
		</div>       

    </div>
	<hr>
	<div class="footer">
		<footer>
		<div class="social"><a href="https://github.com/iKameo" target="_blank">
            <p class="copyright">iKameo © 2022</p>
            <?php 
            include("counter.php");
            ?> 
		</footer>
	</div>
</body>
</html>