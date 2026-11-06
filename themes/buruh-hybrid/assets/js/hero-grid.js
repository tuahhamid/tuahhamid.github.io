(function () {
  var hero = document.querySelector("[data-hero]");
  if (!hero) return;
  var overlay = hero.querySelector("[data-hero-hover]");
  var cell = hero.querySelector("[data-hero-cell]");
  if (!overlay || !cell) return;

  var CELL = 48;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frame = null;
  var x = 0;
  var y = 0;

  function paint() {
    frame = null;
    overlay.style.setProperty("--gx", x + "px");
    overlay.style.setProperty("--gy", y + "px");
    cell.style.transform =
      "translate(" + Math.floor(x / CELL) * CELL + "px," + Math.floor(y / CELL) * CELL + "px)";
    overlay.classList.add("is-active");
  }

  hero.addEventListener("pointermove", function (event) {
    if (!canHover.matches || reduced.matches || event.pointerType !== "mouse") return;
    var box = hero.getBoundingClientRect();
    x = event.clientX - box.left;
    y = event.clientY - box.top;
    if (frame === null) frame = requestAnimationFrame(paint);
  });

  hero.addEventListener("pointerleave", function () {
    if (frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    overlay.classList.remove("is-active");
  });
})();
