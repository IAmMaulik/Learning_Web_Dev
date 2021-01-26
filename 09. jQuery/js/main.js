// How to select a particular element. This is exactly the same as document.querySelector
$("h1")

// This is how to select all eements which is the equivalanet of document.querySelectorAll
$("button");

// This is how we add and remove class of an element
$("h1").addClass("big-title big-title-not-removed");
$("h1").removeClass("big-title");
alert($("h1").hasClass("big-title-not-removed")); // Will return true

// Manipulating Text and adding HTML with jQuery
$("h1").text("This is now now a different text");
$("button").text("Don't Click Me");
$("h1").html("<em>This is now now a different text</em>");