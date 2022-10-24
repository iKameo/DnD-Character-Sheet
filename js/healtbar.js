function calcHP(){

    var _maxHP = document.getElementById("stat_max_hitpoint");
    var _tempHP = document.getElementById("stat_temp_hitpoint");
    var _currentHP = document.getElementById("stat_hitpoint");

    var _hpBar = document.getElementById("hpbar");

    _hpBar.max = _maxHP.value;
    _hpBar.value = _maxHP.value - _currentHP.value;

}