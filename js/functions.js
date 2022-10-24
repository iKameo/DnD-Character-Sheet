function saveFile() {    
    _name = document.getElementById("name")
    _class = document.getElementById("class")
    _subclass = document.getElementById("subclass")
    _level = document.getElementById("level")
    _race = document.getElementById("race")
    _age = document.getElementById("age")
    _sex = document.getElementById("sex")
    _size = document.getElementById("size")
    _weight = document.getElementById("weight")
    _background = document.getElementById("background")
    _playername = document.getElementById("playername")
    _xp = document.getElementById("xp")
    _aligment = document.getElementById("aligment")
    _deity = document.getElementById("deity")
//Attributs
    _atr_prof_bonus = document.getElementById("atr_prof_bonus")
    _atr_init_bonus = document.getElementById("atr_init_bonus")
    _atr_passive_perc = document.getElementById("atr_passive_perc")
    _atr_armor_class = document.getElementById("atr_armor_class")
    _atr_spd_value = document.getElementById("atr_spd_value")
    _atr_spell_atk_save = document.getElementById("atr_spell_atk_save")
    _atr_spell_atk_bonus = document.getElementById("atr_spell_atk_bonus")
    _atr_spell_casting = document.getElementById("atr_spell_casting")
//Attributs 2
    _atr_2_Strength = document.getElementById("atr_2_Strength")
    _atr_2_Dexterity = document.getElementById("atr_2_Dexterity")
    _atr_2_Constitution = document.getElementById("atr_2_Constitution")
    _atr_2_Intelligence = document.getElementById("atr_2_Intelligence")
    _atr_2_Wisdom = document.getElementById("atr_2_Wisdom")
    _atr_2_Charisma = document.getElementById("atr_2_Charisma")
//Attributs 2 Modifier
    _atr_2_StrengthMod = document.getElementById("atr_2_StrengthMod")
    _atr_2_DexterityMod = document.getElementById("atr_2_DexterityMod")
    _atr_2_ConstitutionMod = document.getElementById("atr_2_ConstitutionMod")
    _atr_2_IntelligenceMod = document.getElementById("atr_2_IntelligenceMod")
    _atr_2_WisdomMod = document.getElementById("atr_2_WisdomMod")
    _atr_2_CharismaMod = document.getElementById("atr_2_CharismaMod")
//Status
    _stat_temp_hitpoint = document.getElementById("stat_temp_hitpoint")
    _stat_hitpoint = document.getElementById("stat_hitpoint")
    _stat_max_hitpoint = document.getElementById("stat_max_hitpoint")
    _stat_hit_dice = document.getElementById("stat_hit_dice")
    _stat_temp_hit_dice = document.getElementById("stat_temp_hit_dice")
    _stat_save_success1 = document.getElementById("stat_save_success1")
    _stat_save_success2 = document.getElementById("stat_save_success2")
    _stat_save_success3 = document.getElementById("stat_save_success3")
    _stat_save_fail1 = document.getElementById("stat_save_fail1")
    _stat_save_fail2 = document.getElementById("stat_save_fail2")
    _stat_save_fail3 = document.getElementById("stat_save_fail3")
    _stat_status = document.getElementById("stat_status")
    _stat_boni = document.getElementById("stat_boni")
//Proficiencies
    _prof_athletic_bonus = document.getElementById("prof_athletic_bonus")
    _prof_acrobatic_bonus = document.getElementById("prof_acrobatic_bonus")
    _prof_stealth_bonus = document.getElementById("prof_stealth_bonus")
    _prof_sleightofhand_bonus = document.getElementById("prof_sleightofhand_bonus")
    _prof_arcana_bonus = document.getElementById("prof_arcana_bonus")
    _prof_history_bonus = document.getElementById("prof_history_bonus")
    _prof_investigation_bonus = document.getElementById("prof_investigation_bonus")
    _prof_nature_bonus = document.getElementById("prof_nature_bonus")
    _prof_religion_bonus = document.getElementById("prof_religion_bonus")
    _prof_medicine_bonus = document.getElementById("prof_medicine_bonus")
    _prof_animalhandling_bonus = document.getElementById("prof_animalhandling_bonus")
    _prof_insight_bonus = document.getElementById("prof_insight_bonus")
    _prof_survival_bonus = document.getElementById("prof_survival_bonus")
    _prof_perception_bonus = document.getElementById("prof_perception_bonus")
    _prof_performance_bonus = document.getElementById("prof_performance_bonus")
    _prof_intimidation_bonus = document.getElementById("prof_intimidation_bonus")
    _prof_deception_bonus = document.getElementById("prof_deception_bonus")
    _prof_persuasion_bonus = document.getElementById("prof_persuasion_bonus")
//Equipment
    _eq_name_1 = document.getElementById("eq_name_1")
    _eq_name_2 = document.getElementById("eq_name_2")
    _eq_name_3 = document.getElementById("eq_name_3")
    _eq_name_4 = document.getElementById("eq_name_4")
    _eq_bonus_1 = document.getElementById("eq_bonus_1")
    _eq_bonus_2 = document.getElementById("eq_bonus_2")
    _eq_bonus_3 = document.getElementById("eq_bonus_3")
    _eq_bonus_4 = document.getElementById("eq_bonus_4")
    _eq_damage_1 = document.getElementById("eq_damage_1")
    _eq_damage_2 = document.getElementById("eq_damage_2")
    _eq_damage_3 = document.getElementById("eq_damage_3")
    _eq_damage_4 = document.getElementById("eq_damage_4")
//Inventory
    _inventory_slots = document.getElementById("inventory_slots")
    _currency_platin = document.getElementById("currency_platin")
    _currency_gold = document.getElementById("currency_gold")
    _currency_silver = document.getElementById("currency_silver")
    _currency_copper = document.getElementById("currency_copper")
//Information
    _informationField = document.getElementById("informationField")
//Language
    _lang_1 = document.getElementById("lang_1")
    _lang_2 = document.getElementById("lang_2")
    _lang_3 = document.getElementById("lang_3")
    _lang_4 = document.getElementById("lang_4")
    _lang_5 = document.getElementById("lang_5")
    _lang_6 = document.getElementById("lang_6")
    _lang_7 = document.getElementById("lang_7")
    _lang_8 = document.getElementById("lang_8")
    _lang_9 = document.getElementById("lang_9")
    _lang_10 = document.getElementById("lang_10")
    _lang_11 = document.getElementById("lang_11")
    _lang_12 = document.getElementById("lang_12")
//Savethrows
    _save_str = document.getElementById("save_str")
    _save_dex = document.getElementById("save_dex")
    _save_con = document.getElementById("save_con")
    _save_int = document.getElementById("save_int")
    _save_wis = document.getElementById("save_wis")
    _save_cha = document.getElementById("save_cha")
//Spells
    _spell_name_1 = document.getElementById("spell_name_1")
    _spell_name_2 = document.getElementById("spell_name_2")
    _spell_name_3 = document.getElementById("spell_name_3")
    _spell_name_4 = document.getElementById("spell_name_4")
    _spell_name_5 = document.getElementById("spell_name_5")
    _spell_name_6 = document.getElementById("spell_name_6")
    _spell_name_7 = document.getElementById("spell_name_7")
    _spell_name_8 = document.getElementById("spell_name_8")
    _spell_name_9 = document.getElementById("spell_name_9")
    _spell_name_10 = document.getElementById("spell_name_10")
    _spell_name_11 = document.getElementById("spell_name_11")
    _spell_name_12 = document.getElementById("spell_name_12")
    _spell_name_13 = document.getElementById("spell_name_13")
    _spell_name_14 = document.getElementById("spell_name_14")
    _spell_name_15 = document.getElementById("spell_name_15")
    _spell_name_16 = document.getElementById("spell_name_16")
    _spell_name_17 = document.getElementById("spell_name_17")
    _spell_name_18 = document.getElementById("spell_name_18")
    _spell_name_19 = document.getElementById("spell_name_19")
    _spell_name_20 = document.getElementById("spell_name_20")

    _spell_level_1 = document.getElementById("spell_level_1")
    _spell_level_2 = document.getElementById("spell_level_2")
    _spell_level_3 = document.getElementById("spell_level_3")
    _spell_level_4 = document.getElementById("spell_level_4")
    _spell_level_5 = document.getElementById("spell_level_5")
    _spell_level_6 = document.getElementById("spell_level_6")
    _spell_level_7 = document.getElementById("spell_level_7")
    _spell_level_8 = document.getElementById("spell_level_8")
    _spell_level_9 = document.getElementById("spell_level_9")
    _spell_level_10 = document.getElementById("spell_level_10")
    _spell_level_11 = document.getElementById("spell_level_11")
    _spell_level_12 = document.getElementById("spell_level_12")
    _spell_level_13 = document.getElementById("spell_level_13")
    _spell_level_14 = document.getElementById("spell_level_14")
    _spell_level_15 = document.getElementById("spell_level_15")
    _spell_level_16 = document.getElementById("spell_level_16")
    _spell_level_17 = document.getElementById("spell_level_17")
    _spell_level_18 = document.getElementById("spell_level_18")
    _spell_level_19 = document.getElementById("spell_level_19")
    _spell_level_20 = document.getElementById("spell_level_20")
//Cantrips
    _cantrip_name_1 = document.getElementById("cantrip_name_1")
    _cantrip_name_2 = document.getElementById("cantrip_name_2")
    _cantrip_name_3 = document.getElementById("cantrip_name_3")
    _cantrip_name_4 = document.getElementById("cantrip_name_4")
    _cantrip_name_5 = document.getElementById("cantrip_name_5")
    _cantrip_name_6 = document.getElementById("cantrip_name_6")
    _cantrip_name_7 = document.getElementById("cantrip_name_7")
    _cantrip_name_8 = document.getElementById("cantrip_name_8")
    _cantrip_name_9 = document.getElementById("cantrip_name_9")
    _cantrip_name_10 = document.getElementById("cantrip_name_10")
    _cantrip_name_11 = document.getElementById("cantrip_name_11")
    _cantrip_name_12 = document.getElementById("cantrip_name_12")
    _cantrip_name_13 = document.getElementById("cantrip_name_13")
    _cantrip_name_14 = document.getElementById("cantrip_name_14")
    _cantrip_name_15 = document.getElementById("cantrip_name_15")
    _cantrip_name_16 = document.getElementById("cantrip_name_16")
    _cantrip_name_17 = document.getElementById("cantrip_name_17")
    _cantrip_name_18 = document.getElementById("cantrip_name_18")
    _cantrip_name_19 = document.getElementById("cantrip_name_19")
    _cantrip_name_20 = document.getElementById("cantrip_name_20")




    _jsonData = {
        "name":_name.value,
        "class":_class.value,
        "subclass":_subclass.value,
        "age":_age.value,
        "size":_size.value,
        "weight":_weight.value,
        "level":_level.value,
        "race":_race.value,
        "background":_background.value,
        "playername":_playername.value,
        "xp":_xp.value,
        "aligment":_aligment.value,
        "deity":_deity.value,
        //Attributes
        "atr_prof_bonus":_atr_prof_bonus.value,
        "atr_init_bonus":_atr_init_bonus.value,
        "atr_passive_perc":_atr_passive_perc.value,
        "atr_armor_class":_atr_armor_class.value,
        "atr_spd_value":_atr_spd_value.value,
        "atr_spell_atk_save":_atr_spell_atk_save.value,
        "atr_spell_atk_bonus":_atr_spell_atk_bonus.value,
        "atr_spell_casting":_atr_spell_casting.value,
        //Attributes 2
        "atr_2_Strength":_atr_2_Strength.value,
        "atr_2_Dexterity":_atr_2_Dexterity.value,
        "atr_2_Constitution":_atr_2_Constitution.value,
        "atr_2_Intelligence":_atr_2_Intelligence.value,
        "atr_2_Wisdom":_atr_2_Wisdom.value,
        "atr_2_Charisma":_atr_2_Charisma.value,
        //Attributes 2 Modifier
        "atr_2_StrengthMod":_atr_2_StrengthMod.value,
        "atr_2_DexterityMod":_atr_2_DexterityMod.value,
        "atr_2_ConstitutionMod":_atr_2_ConstitutionMod.value,
        "atr_2_IntelligenceMod":_atr_2_IntelligenceMod.value,
        "atr_2_WisdomMod":_atr_2_WisdomMod.value,
        "atr_2_CharismaMod":_atr_2_CharismaMod.value,
        //Status
        "stat_temp_hitpoint":_stat_temp_hitpoint.value,
        "stat_hitpoint":_stat_hitpoint.value,
        "stat_max_hitpoint":_stat_max_hitpoint.value,
        "stat_hit_dice":_stat_hit_dice.value,
        "stat_temp_hit_dice":_stat_temp_hit_dice.value,
        "stat_save_success1":_stat_save_success1.value,
        "stat_save_success2":_stat_save_success2.value,
        "stat_save_success3":_stat_save_success3.value,
        "stat_save_fail1":_stat_save_fail1.value,
        "stat_save_fail2":_stat_save_fail2.value,
        "stat_save_fail3":_stat_save_fail3.value,
        "stat_status":_stat_status.value,
        "stat_boni":_stat_boni.value,
        //Proficiencies
        "prof_athletic_bonus":_prof_athletic_bonus.value,
        "prof_acrobatic_bonus":_prof_acrobatic_bonus.value,
        "prof_stealth_bonus":_prof_stealth_bonus.value,
        "prof_sleightofhand_bonus":_prof_sleightofhand_bonus.value,
        "prof_arcana_bonus":_prof_arcana_bonus.value,
        "prof_history_bonus":_prof_history_bonus.value,
        "prof_investigation_bonus":_prof_investigation_bonus.value,
        "prof_nature_bonus":_prof_nature_bonus.value,
        "prof_religion_bonus":_prof_religion_bonus.value,
        "prof_medicine_bonus":_prof_medicine_bonus.value,
        "prof_animalhandling_bonus":_prof_animalhandling_bonus.value,
        "prof_insight_bonus":_prof_insight_bonus.value,
        "prof_survival_bonus":_prof_survival_bonus.value,
        "prof_perception_bonus":_prof_perception_bonus.value,
        "prof_performance_bonus":_prof_performance_bonus.value,
        "prof_intimidation_bonus":_prof_intimidation_bonus.value,
        "prof_deception_bonus":_prof_deception_bonus.value,
        "prof_persuasion_bonus":_prof_persuasion_bonus.value,
        //Equipment
        "eq_name_1":_eq_name_1.value,
        "eq_name_2":_eq_name_2.value,
        "eq_name_3":_eq_name_3.value,
        "eq_name_4":_eq_name_4.value,
        "eq_bonus_1":_eq_bonus_1.value,
        "eq_bonus_2":_eq_bonus_2.value,
        "eq_bonus_3":_eq_bonus_3.value,
        "eq_bonus_4":_eq_bonus_4.value,
        "eq_damage_1":_eq_damage_1.value,
        "eq_damage_2":_eq_damage_2.value,
        "eq_damage_3":_eq_damage_3.value,
        "eq_damage_4":_eq_damage_4.value,
        //Inventory
        "inventory_slots":_inventory_slots.value,
        "currency_platin":_currency_platin.value,
        "currency_gold":_currency_gold.value,
        "currency_silver":_currency_silver.value,
        "currency_copper":_currency_copper.value,
        //Information
        "informationField":_informationField.value,
        //Language
        "lang_1":_lang_1.value,
        "lang_2":_lang_2.value,
        "lang_3":_lang_3.value,
        "lang_4":_lang_4.value,
        "lang_5":_lang_5.value,
        "lang_6":_lang_6.value,
        "lang_7":_lang_7.value,
        "lang_8":_lang_8.value,
        "lang_9":_lang_9.value,
        "lang_10":_lang_10.value,
        "lang_11":_lang_11.value,
        "lang_12":_lang_12.value,
        //Savethrows
        "save_str":_save_str.value,
        "save_dex":_save_dex.value,
        "save_con":_save_con.value,
        "save_int":_save_int.value,
        "save_wis":_save_wis.value,
        "save_cha":_save_cha.value,
        //Spells
        "spell_name_1":_spell_name_1.value,
        "spell_name_2":_spell_name_2.value,
        "spell_name_3":_spell_name_3.value,
        "spell_name_4":_spell_name_4.value,
        "spell_name_5":_spell_name_5.value,
        "spell_name_6":_spell_name_6.value,
        "spell_name_7":_spell_name_7.value,
        "spell_name_8":_spell_name_8.value,
        "spell_name_9":_spell_name_9.value,
        "spell_name_10":_spell_name_10.value,
        "spell_name_11":_spell_name_11.value,
        "spell_name_12":_spell_name_12.value,
        "spell_name_13":_spell_name_13.value,
        "spell_name_14":_spell_name_14.value,
        "spell_name_15":_spell_name_15.value,
        "spell_name_16":_spell_name_16.value,
        "spell_name_17":_spell_name_17.value,
        "spell_name_18":_spell_name_18.value,
        "spell_name_19":_spell_name_19.value,
        "spell_name_20":_spell_name_20.value,

        "spell_level_1":_spell_level_1.value,
        "spell_level_2":_spell_level_2.value,
        "spell_level_3":_spell_level_3.value,
        "spell_level_4":_spell_level_4.value,
        "spell_level_5":_spell_level_5.value,
        "spell_level_6":_spell_level_6.value,
        "spell_level_7":_spell_level_7.value,
        "spell_level_8":_spell_level_8.value,
        "spell_level_9":_spell_level_9.value,
        "spell_level_10":_spell_level_10.value,
        "spell_level_11":_spell_level_11.value,
        "spell_level_12":_spell_level_12.value,
        "spell_level_13":_spell_level_13.value,
        "spell_level_14":_spell_level_14.value,
        "spell_level_15":_spell_level_15.value,
        "spell_level_16":_spell_level_16.value,
        "spell_level_17":_spell_level_17.value,
        "spell_level_18":_spell_level_18.value,
        "spell_level_19":_spell_level_19.value,
        "spell_level_20":_spell_level_20.value,
        //Cantrips
        "cantrip_name_1":_cantrip_name_1.value,
        "cantrip_name_2":_cantrip_name_2.value,
        "cantrip_name_3":_cantrip_name_3.value,
        "cantrip_name_4":_cantrip_name_4.value,
        "cantrip_name_5":_cantrip_name_5.value,
        "cantrip_name_6":_cantrip_name_6.value,
        "cantrip_name_7":_cantrip_name_7.value,
        "cantrip_name_8":_cantrip_name_8.value,
        "cantrip_name_9":_cantrip_name_9.value,
        "cantrip_name_10":_cantrip_name_10.value,
        "cantrip_name_11":_cantrip_name_11.value,
        "cantrip_name_12":_cantrip_name_12.value,
        "cantrip_name_13":_cantrip_name_13.value,
        "cantrip_name_14":_cantrip_name_14.value,
        "cantrip_name_15":_cantrip_name_15.value,
        "cantrip_name_16":_cantrip_name_16.value,
        "cantrip_name_17":_cantrip_name_17.value,
        "cantrip_name_18":_cantrip_name_18.value,
        "cantrip_name_19":_cantrip_name_19.value,
        "cantrip_name_20":_cantrip_name_20.value,

    }

    //convert JavaScript object to JSON and download it
    var _jsonText = JSON.stringify(_jsonData)
    var _file = new Blob([_jsonText], { type: 'application/json' });
    var a = document.createElement("a"),
        url = URL.createObjectURL(_file);
    a.href = url;
    a.download = 'characterSheet';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function loadFile(){
    var importedFile = document.getElementById('import-file').files[0];
  
    var reader = new FileReader();
    reader.onload = function() {
      var fileContent = JSON.parse(reader.result);
  
      // Do something with fileContent

      const { elements } = document.querySelector('form')

        for (const [ key, value ] of Object.entries(fileContent) ) {
        const field = elements.namedItem(key)
        field && (field.value = value)
}

    };
    reader.readAsText(importedFile);      

}