const hesapla = document.getElementById("hesapla");
const ortalama = document.getElementById("ortalama");
const harfNote = document.getElementById("harfNotu");

hesapla.addEventListener("click" , noteCalculation);

function noteCalculation(){
    const nt1 = document.getElementById("vize").value;
    const nt2 = document.getElementById("final").value;
    var ort , harfnot ; 
    ort = (nt1*0.4)+ (nt2*0.6);
    if(ort<=100 && ort>=85){
        harfnot = "A"
    }else if (ort>=70 && ort<85){
        harfnot = "B"
    }else if (ort>=55 && ort<70){
        harfnot = "C"
    }else if(ort>=45 && ort<55){
        harfnot = "D"
    }else if (ort>=0 && ort<45){
        harfnot = "F"
        alert("kaldiniz)
    }
    ortalama.value = ort;
    harfNote.value = harfnot
}
