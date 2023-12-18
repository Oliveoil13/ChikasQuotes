function changeMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
    
    if(element.className == "light-mode"){
        modeText = "⋆⁺₊⋆ ☾ ⋆⁺₊⋆";
    }else{
        modeText = "๋࣭⭑☁. ☀︎ ๋࣭ ☁.๋࣭⭑";
    }
    
    document.getElementById("modeText").innerHTML = modeText;
}