const buttonsArr = document.querySelectorAll(".panel");

for (let i = 0; i < buttonsArr.length; i++) {
    document.querySelectorAll(".panel")[i].addEventListener("click", function(){
        document.querySelectorAll(".panel")[i].classList.add("glow");
        setTimeout(function(){
            document.querySelectorAll(".panel")[i].classList.remove("glow");
        }, 350);
    })
}