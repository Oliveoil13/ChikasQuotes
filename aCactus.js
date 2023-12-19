function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    
    if(element.className == "dark-mode"){
        modeText = "๋࣭⭑☁. ☀︎ ๋࣭ ☁.๋࣭⭑";
    }else{
        modeText = "⋆⁺₊⋆ ☾ ⋆⁺₊⋆";   
    }
    
    document.getElementById("modeText").innerHTML = modeText;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

function getQuote(){
    let quote = 2000;
    document.getElementById("Total").innerHTML = quote;
}