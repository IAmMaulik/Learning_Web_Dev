const buttonsArr = document.querySelectorAll(".panel");

for (let i=0; i<buttonsArr.length; i++){
    document.querySelectorAll(".panel")[i].addEventListener("click", () => {
        alert("Panel "+(i+1)+" has been clicked");
    });
}
