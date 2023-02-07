var app = document.getElementById("app");
app.style.top = Math.floor(Math.random() * 50).toString() + "px";
app.style.left = Math.floor(Math.random() * 50).toString() + "px";

app.addEventListener("mousemove", function () {
  let viewport_width = window.innerWidth;
  let viewport_height = window.innerHeight;

  let box_height = app.clientHeight;
  let box_width = app.clientWidth;

  app.style.top =
    Math.floor(Math.random() * (viewport_height - box_height)).toString() +
    "px";
  app.style.left =
    Math.floor(Math.random() * (viewport_width - box_width)).toString() + "px";
});
