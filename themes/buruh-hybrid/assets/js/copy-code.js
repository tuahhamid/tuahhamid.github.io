(function () {
  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var done = false;
    try {
      done = document.execCommand("copy");
    } catch (e) {}
    area.remove();
    return done ? Promise.resolve() : Promise.reject();
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return fallbackCopy(text);
      });
    }
    return fallbackCopy(text);
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-copy-code]");
    if (!button) return;
    var code = button.closest(".codeblock").querySelector("code");
    if (!code) return;

    // Line numbers are part of the markup but not of the code.
    var clone = code.cloneNode(true);
    clone.querySelectorAll(".ln").forEach(function (number) {
      number.remove();
    });

    copy(clone.textContent).then(function () {
      button.textContent = "COPIED";
      window.clearTimeout(button.copyTimer);
      button.copyTimer = window.setTimeout(function () {
        button.textContent = "COPY";
      }, 1200);
    });
  });
})();
