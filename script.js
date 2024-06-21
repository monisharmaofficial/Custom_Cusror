let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mouseover", function (dets) {
  // console.log(dets.x);
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
