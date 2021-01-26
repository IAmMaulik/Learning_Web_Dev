// How to select a particular element. This is exactly the same as document.querySelector
$("h1")

// This is how to select all eements which is the equivalanet of document.querySelectorAll
$("button");

// This is how we add and remove class of an element
$("h1").addClass("big-title big-title-not-removed");
$("h1").removeClass("big-title");
$("a").addClass("This-is-a-class");
console.log($("h1").hasClass("big-title-not-removed")); // Will return true

// Manipulating Text and adding HTML with jQuery
$("h1").text("This is now now a different text");
$("button").text("Don't Click Me");
$("h1").html("<em>This is now now a different text</em>");

// Manipulating the attributes
console.log($("img").attr("src")); // Gets the source of the image
$("a").attr("href", "https://mail.google.com");

// Getting all the classes with the attr() method
console.log($("a").attr("class"));


// Adding Event Listeners
$("h1").click(() => {
    $("h1").css("color", "red");
});

// Adding event listeners to many elements at the same time
$("button").click(() => {
    $("h1").css("color", "blue");
});

// Adding a keypress listener to the whole body
$("body").keypress(function(event){
    $("h1").text(event.key);
});

// We can also add an event listener like this
$("h1").on("mouseover", () => {
    $("h1").css("color", "yellow");
});


// Adding new elements with jQuery
$("h1").before("<button>This is a new button before the h1</button>");
$("h1").after("<button>This is a new button after the h1</button><br>");
$("h1").prepend("<button>This is a new button prepended to the h1</button>");
$("h1").append("<button>This is a new button appended to the h1</button>");


// Animations with jQuery with custom css
$("h1").click(() => {
    $("h1").animate({
        opacity: 0.5
    });
});
