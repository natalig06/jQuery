$(document).ready(function() {

 $("#bt1").on("click", function() {
  $("#mesListes").children().eq(1)
   .empty()
   .append("<p></p>")
   .children().text("je suis tout seul")
 });
 $("button").last().on("click", function() {
  $("#duTexte").children().eq(1)
   .after("<p></p>").next().text("Uchronie");
  $("#partieFonctionnelle").prepend("<p></p>")
   .children().first().text("mes boutons");
 });
 $("#li1").parentsUntil("body").css("border", "dotted black 3px");
 $("#bt2").on("click", function() {
  $("#mesListes").children().last()
   .children().not($("#li8"))
   .css({
    "backgroundColor": "black",
    "color": "white"
   });
 });
 $("#partieFonctionnelle").append("<button>bouton4</button")
  .children().last()
  .on("click", function() {
   $("button").last().siblings("button")
    .text("on a changé")
    .off()
    .on("click", function() {
     var $ligne = $("ul").eq(1).children().first();
     console.log($ligne);
     $("ul").eq(1).append($ligne);
    });
  });


});