let previewWindow = document.querySelector("#previewWindow")

let linkOne = document.querySelector("#SlinkOne");

linkOne.addEventListener("click", () => {
    previewWindow.src = "https://docs.google.com/document/d/1N5K1-hk4LPSOpmTMqQzt4LjeJ7POhlAqZvimaTe4TuQ/edit"
})

document.querySelector("#SlinkTwo").addEventListener("click", () => {
    // previewWindow.src = "https://cbp.help/repair/changing-chromebook-serial-number/";
    previewWindow.src = "https://docs.google.com/document/d/1VGgXymh1N_56tnMvDb578XJBsc_VCtVvOlh0Oh1Hb2Q/view?pli=1";
    
})