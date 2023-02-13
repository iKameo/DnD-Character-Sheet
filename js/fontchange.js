function changeFont() { 

    var _fontValue = document.getElementById("fontchangeDropdownFrom").value;

    switch (_fontValue) {
        case ("Diablo"):
            //Change label font
            var _fonts = document.querySelectorAll("label");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change h2 font
            var _fonts = document.querySelectorAll("h2");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change input font
            var _fonts = document.querySelectorAll("input");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change option font
            var _fonts = document.querySelectorAll("select");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change button font
            var _fonts = document.querySelectorAll("button");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change th font
            var _fonts = document.querySelectorAll("th");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change td font
            var _fonts = document.querySelectorAll("td");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change span font
            var _fonts = document.querySelectorAll("span");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "diablo";
            }

            //Change div font
            var _fonts = document.getElementById("abstr_lbl");
            _fonts.style.fontFamily = "diablo";
            var _fonts = document.getElementById("abdex_lbl");
            _fonts.style.fontFamily = "diablo";
            var _fonts = document.getElementById("abcon_lbl");
            _fonts.style.fontFamily = "diablo";
            var _fonts = document.getElementById("abint_lbl");
            _fonts.style.fontFamily = "diablo";
            var _fonts = document.getElementById("abwis_lbl");
            _fonts.style.fontFamily = "diablo";
            var _fonts = document.getElementById("abcha_lbl");
            _fonts.style.fontFamily = "diablo";
             

            break;
        case ("Onuava"):
            var _fonts = document.querySelectorAll("label");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change h2 font
            var _fonts = document.querySelectorAll("h2");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change input font
            var _fonts = document.querySelectorAll("input");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change option font
            var _fonts = document.querySelectorAll("select");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change button font
            var _fonts = document.querySelectorAll("button");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change th font
            var _fonts = document.querySelectorAll("th");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change td font
            var _fonts = document.querySelectorAll("td");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change span font
            var _fonts = document.querySelectorAll("span");
            for (i = 0; i < _fonts.length; ++i) {
                _fonts[i].style.fontFamily = "onuava";
            }

            //Change div font
            var _fonts = document.getElementById("abstr_lbl");
            _fonts.style.fontFamily = "onuava";
            var _fonts = document.getElementById("abdex_lbl");
            _fonts.style.fontFamily = "onuava";
            var _fonts = document.getElementById("abcon_lbl");
            _fonts.style.fontFamily = "onuava";
            var _fonts = document.getElementById("abint_lbl");
            _fonts.style.fontFamily = "onuava";
            var _fonts = document.getElementById("abwis_lbl");
            _fonts.style.fontFamily = "onuava";
            var _fonts = document.getElementById("abcha_lbl");
            _fonts.style.fontFamily = "onuava";

            break;
    }
}