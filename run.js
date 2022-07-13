(function () {
  setTimeout(() => {
    for (element of document.getElementsByClassName("ytd-watch-next-secondary-results-renderer")) {
      element.style.display = "none";
    }
  }, 1500);
})();
