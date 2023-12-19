function changeMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    if(element.className == "dark-mode"){
        modeText = "๋࣭⭑☁. ☀︎ ๋࣭ ☁.๋࣭⭑";
    }else{
        modeText = "⋆⁺₊⋆ ☾ ⋆⁺₊⋆";   
    }
    
    document.getElementById("modeText").innerHTML = modeText;
}