function calculateCurrency(){
    
  var _amount = document.getElementById("conversionAmountInput").value
  var _from = document.getElementById("currencyDropdownFrom").value;

    const _toCurrency = _from;
    switch (_toCurrency){
      case "Kupfer":
        document.getElementById("copperSpan").innerHTML = _amount + "K";
        document.getElementById("silverSpan").innerHTML = _amount / +"10" + "S";
        document.getElementById("goldSpan").innerHTML = _amount / +"100" + "G";
        document.getElementById("platinumSpan").innerHTML = _amount / +"1000" + "P";
        break;
      case "Silber":
        document.getElementById("copperSpan").innerHTML = _amount * +"10" + "K";
        document.getElementById("silverSpan").innerHTML = _amount + "S";
        document.getElementById("goldSpan").innerHTML = _amount / +"10" + "G";
        document.getElementById("platinumSpan").innerHTML = _amount / +"100" + "P";
        break;
      case "Gold":
        document.getElementById("copperSpan").innerHTML = _amount * +"100" + "K";
        document.getElementById("silverSpan").innerHTML = _amount * +"10" + "S";
        document.getElementById("goldSpan").innerHTML = _amount + "G"
        document.getElementById("platinumSpan").innerHTML = _amount / +"10" + "P";
        break;
      case "Platin":
        document.getElementById("copperSpan").innerHTML = _amount * +"1000" + "K";
        document.getElementById("silverSpan").innerHTML = _amount * +"100" + "S";
        document.getElementById("goldSpan").innerHTML = _amount * +"10" + "G";
        document.getElementById("platinumSpan").innerHTML = _amount + "P";
        break;
    }

}
