var DivSlider = ["SlideDaddy", "SlideH1", "SlideF1", "SlideH2", "SlideF2", "SlideH3"];
var NumId = 0;
var SousNum;
function suivant(ClikID) {
    NumId = NumId + ClikID;
    SousNum = NumId - ClikID;
    document.getElementById(DivSlider[SousNum]).style.display = "none";
    if (NumId < 0) {
        NumId = DivSlider.length -1;
    }
    if (NumId > DivSlider.length -1) {
        NumId = 0;
    }
   
    Slider();
}
function Slider() {
     // document.querySelectorAll(".slide").style.display ="none";
    // document.getElementById(DivSlider[NumId - 1]).style.display = "none";
    // document.getElementById(DivSlider[SousNum]).style.display = "none !important";
    document.getElementById(DivSlider[NumId]).style.display = "unset";


    console.log("Sous" + document.getElementById(DivSlider[SousNum]));
    console.log("Num" + document.getElementById(DivSlider[NumId]));
    console.log(SousNum);
}
function Pardefaut() {
    document.getElementById(DivSlider[0]).style.display = "unset";

}