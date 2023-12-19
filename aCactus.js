const Values = [
    ['Normal', .10, .215, .32, .46, .54],
    ['Deep', .20, .46, .68, .75 , .82],

];
const Refridgerator = [
    [30, 40],
    [50, 70],
];

const OvenNumbers = [40, 60];

const CabinetsNumbers = [100, 50];

const BlindNumbers = [
    [5,8],
    [8,10],
];

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
//getting square feet value

let squareFeetEntry = document.querySelector("#squareFeet");
let squareFeet = 0;

squareFeetEntry.addEventListener("input", () =>{
    squareFeet = parseFloat(squareFeetEntry.value) || 0;
    
});

//getting type of cleanig value
let typeOfCleaning = document.querySelectorAll('input[name="typeOfCleaning"]');
let typeOfCleaningvalue = 0;

typeOfCleaning.forEach(radio => {
    radio.addEventListener("change", () => {
        typeOfCleaningvalue = parseFloat(radio.value) || 0;
        
    });
});
//level of dirty
let levelOfDirty = document.querySelectorAll('input[name="Level"]');
let levelOfDirtyvalue = 1;

levelOfDirty.forEach(radio => {
    radio.addEventListener("change", () => {
        levelOfDirtyvalue = parseFloat(radio.value) || 0;
        
    });
});
//frequency
let frequency = document.querySelector("#frequency");
let frequencyvalue = 1;

frequency.addEventListener("change", () =>{
    frequencyvalue = parseFloat(frequency.options[frequency.selectedIndex].value)|| 0;
});
//distance in miles
let distanceAway = document.querySelectorAll('input[name="Distance"]');
let distanceAwayvalue = 0;

distanceAway.forEach(radio => {
    radio.addEventListener("change", () => {
        distanceAwayvalue = parseFloat(radio.value) || 0;
        
    });
});
//kitchens
let kitchens = document.querySelector("#Kitchens");
let kitchensvalue = 1;

kitchens.addEventListener("input", () => {
    kitchensvalue = parseFloat(kitchens.value) || 0;
});
//do they have kids
let isChildren = document.querySelectorAll('input[name="isChildren"]');
let isChildrenvalue = 0;

isChildren.forEach(radio => {
    radio.addEventListener("change", () => {
        isChildrenvalue = parseFloat(radio.value) || 0;
        
    });
});
//do they have pets
let isPets = document.querySelectorAll('input[name="isPets"]');
let isPetsvalue = 0;

isPets.forEach(radio => {
    radio.addEventListener("change", () => {
        isPetsvalue = parseFloat(radio.value) || 0;
        
    });
});
//Blinds
let blinds = document.querySelector("#Blinds");
let blindsvalue = 0;
blinds.addEventListener("input", () => {
    blindsvalue = parseFloat(blinds.value) || 0;
});

//Windows
let windows = document.querySelector("#Windows");
let windowsvalue = 0;
windows.addEventListener("input", () => {
    windowsvalue = parseFloat(windows.value) || 0;
});
//fridges
let fridges = document.querySelector("#Fridges");
let fridgesvalue = 0;
fridges.addEventListener("input", () => {
    fridgesvalue = parseFloat(fridges.value) || 0;
});
//size of fridges
let fridgeSize = document.querySelectorAll('input[name="sizeFridge"]');
let fridgeSizevalue = 1;

fridgeSize.forEach(radio => {
    radio.addEventListener("change", () => {
        fridgeSizevalue = parseFloat(radio.value) || 0;
        
    });
});
//how Dirty is fridge
let fridgeLevel = document.querySelectorAll('input[name="dirtyFridge"]');
let fridgeLevelvalue = 0;

fridgeLevel.forEach(radio => {
    radio.addEventListener("change", () => {
        fridgeLevelvalue = parseFloat(radio.value) || 0;
        
    });
});
//size of Blinds
let blindsSize = document.querySelectorAll('input[name="sizeBlinds"]');
let blindsSizevalue = 0;

blindsSize.forEach(radio => {
    radio.addEventListener("change", () => {
        blindsSizevalue = parseFloat(radio.value) || 0;
        
    });
});
//how Dirty are blinds
let blindsLevel = document.querySelectorAll('input[name="dirtyBlinds"]');
let blindsLevelvalue = 0;

blindsLevel.forEach(radio => {
    radio.addEventListener("change", () => {
        blindsLevelvalue = parseFloat(radio.value) || 0;
        
    });
});
//Ovens
let ovens = document.querySelector("#Ovens");
let ovensvalue = 0;
ovens.addEventListener("input", () => {
    ovensvalue = parseFloat(fridges.value) || 0;
});
//how Dirty is oven
let ovenLevel = document.querySelectorAll('input[name="dirtyOven"]');
let ovenLevelvalue = 1;

ovenLevel.forEach(radio => {
    radio.addEventListener("change", () => {
        ovenLevelvalue = parseFloat(radio.value) || 0;
        
    });
});
//Clean washer and dryer
let washerDryer = document.querySelectorAll('input[name="washer&dryer"]');
let washerDryervalue = 0;

washerDryer.forEach(radio => {
    radio.addEventListener("change", () => {
        washerDryeralue = parseFloat(radio.value) || 0;
        
    });
});
//Clean dish washer
let cleanDisher = document.querySelectorAll('input[name="cleanDishWasher"]');
let cleanDishervalue = 0;

cleanDisher.forEach(radio => {
    radio.addEventListener("change", () => {
        cleanDishervalue = parseFloat(radio.value) || 0;
        
    });
});
//Clean inside cabinets
let cleanCabinets = document.querySelectorAll('input[name="cleanCabinets"]');
let cleanCabinetsvalue = 0;

cleanCabinets.forEach(radio => {
    radio.addEventListener("change", () => {
        cleanCabinetsvalue = parseFloat(radio.value) || 0;
        
    });
});
//are the cabinets empty
let emptyCabinets = document.querySelectorAll('input[name="emptyCabinets"]');
let emptyCabinetsvalue = 0;

emptyCabinets.forEach(radio => {
    radio.addEventListener("change", () => {
        emptyCabinetsvalue = parseFloat(radio.value) || 0;
        
    });
});

//resets page
function resetForm() {
    // Reset square feet
    squareFeetEntry.value = 0;
    
    // Reset type of cleaning
    typeOfCleaning.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    typeOfCleaningvalue = 0;
    
    // Reset level of dirty
    levelOfDirty.forEach(radio => {
        radio.checked = radio.value === "1"; // Assuming "1" is the default value
    });

    // Reset frequency
    frequency.selectedIndex = 0; // Assuming the first option is the default

    // Reset distance in miles
    distanceAway.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "1" is the default value
    });

    // Reset kitchens
    kitchens.value = 1;

    // Reset do they have children
    isChildren.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    isChildrenvalue = 0;

    // Reset do they have pets
    isPets.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    isPetsvalue = 0;

    // Reset blinds
    blinds.value = 0;

    // Reset windows
    windows.value = 0;

    // Reset fridges
    fridges.value = 0;

    // Reset size of fridges
    fridgeSize.forEach(radio => {
        radio.checked = radio.value === "1"; // Assuming none is the default value
    });
    fridgeSizevalue = 1;

    // Reset how dirty is fridge
    fridgeLevel.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "1" is the default value
    });
    fridgeLevelvalue = 0;

    // Reset size of blinds
    blindsSize.forEach(radio => {
        radio.checked = radio.value === "0";
    });
    blindsSizevalue = 0;

    // Reset how dirty are blinds
    blindsLevel.forEach(radio => {
        radio.checked = radio.value === "0";
    });
    blindsLevelvalue = 0;

    // Reset ovens
    ovens.value = 0;

    // Reset how dirty is oven
    ovenLevel.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "1" is the default value
    });
    ovenLevelvalue = 0;

    // Reset clean washer and dryer
    washerDryer.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    washerDryervalue = 0;

    // Reset clean dish washer
    cleanDisher.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    cleanCabinetsvalue = 0;

    // Reset clean inside cabinets
    cleanCabinets.forEach(radio => {
        radio.checked = radio.value === "0"; // Assuming "0" is the default value
    });
    cleanCabinetsvalue = 0;

    // Reset are the cabinets empty
    emptyCabinets.forEach(radio => {
        radio.checked = radio.value === "1"; // Assuming "1" is the default value
    });
    emptyCabinetsvalue = 1;

    // Reset the total quote display
    document.getElementById("Total").innerHTML = "Enter Square Feet";
}


//math for the quote
function getQuote(){
    let quote = (
        (squareFeet * Values[typeOfCleaningvalue][levelOfDirtyvalue]) * frequencyvalue
      ) +
      distanceAwayvalue + (kitchensvalue * 50) + (windowsvalue * 5) +
      (blindsvalue * BlindNumbers[blindsSizevalue][blindsLevelvalue]) +//add blindLevel here after asking 
      (fridgesvalue * Refridgerator[fridgeSizevalue][fridgeLevelvalue]) +
      (ovensvalue * OvenNumbers[ovenLevelvalue]) +
      (washerDryervalue * 50) +
      (cleanDishervalue * 30) +
      (cleanCabinetsvalue * CabinetsNumbers[emptyCabinetsvalue])
      ;
    
    if (quote < 100){
        quote = "$" + 100;
    }else{
        quote = "$" + quote;
    }
    document.getElementById("Total").innerHTML = quote;
}
