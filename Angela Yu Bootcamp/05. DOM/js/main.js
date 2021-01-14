document.querySelector("#list a").style.color = "yellow";

// Like this, we can add a class to any element and use css to change it
document.querySelector("h1").classList.add("huge");

// Like this, we can change the inner HTML of any tag
document.querySelector("h1").innerHTML = "<em>This has been changed</em>";

// So when we want to change the content only, we must use this instead of innerHTML
document.querySelector("h1").textContent = "This has been changed";

// We can also change the HTML attributes of any tag
alert(document.querySelector("h1").attributes);
alert(document.querySelector("#list a").getAttribute("href"));
document.querySelector("#list a").setAttribute("href", "https://iammaulik.github.io");
