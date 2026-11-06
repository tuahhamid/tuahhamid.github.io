(function () {
  var CELL = 48;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll("[data-grid-hover]").forEach(function (band) {
    var overlay = band.querySelector(".grid-hover");
    var cell = band.querySelector(".grid-hover__cell");
    if (!overlay || !cell) return;

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

    band.addEventListener("pointermove", function (event) {
      if (!canHover.matches || reduced.matches || event.pointerType !== "mouse") return;
      var box = band.getBoundingClientRect();
      x = event.clientX - box.left;
      y = event.clientY - box.top;
      if (frame === null) frame = requestAnimationFrame(paint);
    });

    band.addEventListener("pointerleave", function () {
      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
      overlay.classList.remove("is-active");
    });
  });
})();
