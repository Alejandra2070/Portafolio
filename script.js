function color1(){
    let color1 = getComputedStyle(document.documentElement).getPropertyValue("--color-uno");
    let color1F = getComputedStyle(document.documentElement).getPropertyValue("--color-uno_font");
    let color1S = getComputedStyle(document.documentElement).getPropertyValue("--color-uno_section");
    let color1B = getComputedStyle(document.documentElement).getPropertyValue("--color-uno_box");
    let color1H = getComputedStyle(document.documentElement).getPropertyValue("--color-uno_hover");
    document.documentElement.style.setProperty("--color-font", color1F)
    document.documentElement.style.setProperty("--color-body", color1)
    document.documentElement.style.setProperty("--color-sections", color1S)
    document.documentElement.style.setProperty("--color-boxShadow", color1B)
    document.documentElement.style.setProperty("--color-hoverHabs", color1H)
}

function color2(){
    let color2 = getComputedStyle(document.documentElement).getPropertyValue("--color-dos");
    let colorF = getComputedStyle(document.documentElement).getPropertyValue("--color-dos_font");
    let colorS = getComputedStyle(document.documentElement).getPropertyValue("--color-dos_section");
    let colorB = getComputedStyle(document.documentElement).getPropertyValue("--color-dos_box");
    let colorH = getComputedStyle(document.documentElement).getPropertyValue("--color-dos_hover");
    document.documentElement.style.setProperty("--color-font", colorF)
    document.documentElement.style.setProperty("--color-body", color2)
    document.documentElement.style.setProperty("--color-sections", colorS)
    document.documentElement.style.setProperty("--color-boxShadow", colorB)
    document.documentElement.style.setProperty("--color-hoverHabs", colorH)
}

function color3(){
    let color3 = getComputedStyle(document.documentElement).getPropertyValue("--color-tres");
    let color3F = getComputedStyle(document.documentElement).getPropertyValue("--color-tres_font");
    let color3S = getComputedStyle(document.documentElement).getPropertyValue("--color-tres_section");
    let color3B = getComputedStyle(document.documentElement).getPropertyValue("--color-tres_box");
    let color3H = getComputedStyle(document.documentElement).getPropertyValue("--color-tres_hover");
    document.documentElement.style.setProperty("--color-font", color3F)
    document.documentElement.style.setProperty("--color-body", color3)
    document.documentElement.style.setProperty("--color-sections", color3S)
    document.documentElement.style.setProperty("--color-boxShadow", color3B)
    document.documentElement.style.setProperty("--color-hoverHabs", color3H)
}

function color4(){
    let color4 = getComputedStyle(document.documentElement).getPropertyValue("--color-cuatro");
    let color4F = getComputedStyle(document.documentElement).getPropertyValue("--color-cuatro_font");
    let color4S = getComputedStyle(document.documentElement).getPropertyValue("--color-cuatro_section");
    let color4B = getComputedStyle(document.documentElement).getPropertyValue("--color-cuatro_box");
    let color4H = getComputedStyle(document.documentElement).getPropertyValue("--color-cuatro_hover");
    document.documentElement.style.setProperty("--color-font", color4F)
    document.documentElement.style.setProperty("--color-body", color4)
    document.documentElement.style.setProperty("--color-sections", color4S)
    document.documentElement.style.setProperty("--color-boxShadow", color4B)
    document.documentElement.style.setProperty("--color-hoverHabs", color4H)
}