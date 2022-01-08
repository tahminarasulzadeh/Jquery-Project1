$("img").on("click", function () {
  $("body").css({
    "background-color": "red",
  });

  $("img").css({
    "border-radius": "25px",
  });

  $(".container").css({
    display: "flex",
    "justify-content": "center",
    "margin-top": "50px",
  });
});
$("#btn").on("click", function () {
  
  $("img").toggle();
});
