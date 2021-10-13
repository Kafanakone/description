var DivSlider = ["Daddy", "SlideH1", "SlideF1", "SlideH2", "SlideF2", "SlideH3"];
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
    document.getElementById(DivSlider[NumId]).style.display = "unset";
    // Change color of selected
    if (DivSlider[NumId] =="Daddy") {
        document.getElementById("Daddi").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }else{
        document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }


     if (DivSlider[NumId] =="SlideH1") {
        document.getElementById("Me").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }
    else{
        document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }

    
    if (DivSlider[NumId] =="SlideF1") {
        document.getElementById("claudia").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }else{
        document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }


     if (DivSlider[NumId] =="SlideH2") {
        document.getElementById("soumaila").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }
    else{
        document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }

    if (DivSlider[NumId] =="SlideF2") {
        document.getElementById("josey").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }else{
        document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }


     if (DivSlider[NumId] =="SlideH3") {
        document.getElementById("claud").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
    }
    else{
        document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";
    }


}
function Pardefaut() {
    document.getElementById(DivSlider[0]).style.display = "unset";

}

function DesSlide(identifiant) {
    NumId = identifiant;
    personne = DivSlider[NumId];
    switch (personne !="") {
        
        // Change Slider
            // Daddy
        case personne == "Daddy":
            document.getElementById("Daddy").style.display = "unset";
            document.getElementById("SlideH1").style.display = "none";
            document.getElementById("SlideH2").style.display = "none";
            document.getElementById("SlideH3").style.display = "none";
            document.getElementById("SlideF1").style.display = "none";
            document.getElementById("SlideF2").style.display = "none";

                // Change color of selected

            document.getElementById("Daddi").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;
            
            // Me
        case personne == "SlideH1":
            document.getElementById("SlideH1").style.display = "unset";
            document.getElementById("Daddy").style.display = "none";
            document.getElementById("SlideH2").style.display = "none";
            document.getElementById("SlideH3").style.display = "none";
            document.getElementById("SlideF1").style.display = "none";
            document.getElementById("SlideF2").style.display = "none";

                // Change color of selected

            document.getElementById("Me").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;

            // claudia
        case personne == "SlideF1":
            document.getElementById("SlideF1").style.display = "unset";
            document.getElementById("Daddy").style.display = "none";
            document.getElementById("SlideH2").style.display = "none";
            document.getElementById("SlideH3").style.display = "none";
            document.getElementById("SlideH1").style.display = "none";
            document.getElementById("SlideF2").style.display = "none";

                // Change color of selected

            document.getElementById("claudia").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;

            // soumaila
        case personne == "SlideH2":
            document.getElementById("SlideH2").style.display = "unset";
            document.getElementById("Daddy").style.display = "none";
            document.getElementById("SlideH1").style.display = "none";
            document.getElementById("SlideH3").style.display = "none";
            document.getElementById("SlideF1").style.display = "none";
            document.getElementById("SlideF2").style.display = "none";

                // Change color of selected

            document.getElementById("soumaila").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;

            // josey
        case personne == "SlideF2":
            document.getElementById("SlideF2").style.display = "unset";
            document.getElementById("Daddy").style.display = "none";
            document.getElementById("SlideH2").style.display = "none";
            document.getElementById("SlideH3").style.display = "none";
            document.getElementById("SlideF1").style.display = "none";
            document.getElementById("SlideH1").style.display = "none";

                // Change color of selected

            document.getElementById("josey").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claud").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;
            
            // claud
        case personne == "SlideH3":
            document.getElementById("SlideH3").style.display = "unset";
            document.getElementById("Daddy").style.display = "none";
            document.getElementById("SlideH2").style.display = "none";
            document.getElementById("SlideF2").style.display = "none";
            document.getElementById("SlideF1").style.display = "none";
            document.getElementById("SlideH1").style.display = "none";

                // Change color of selected

            document.getElementById("claud").className = "border-0 bg-warning2 w-100 rounded-pill p-2";
            document.getElementById("Daddi").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("Me").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("soumaila").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("claudia").className = "border-0 bg-warning w-100 rounded-pill p-2";
            document.getElementById("josey").className = "border-0 bg-warning w-100 rounded-pill p-2";

            break;
    }
  
    
}
// if (DivSlider[NumId] ="Daddy") {
//         document.getElementById("Daddi").className = "border-0 bg-success w-100 rounded-pill p-2";
//     }
