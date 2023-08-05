
  const hoverElement = document.querySelector(".wrapper");
  let hoverStartTime;

  hoverElement.addEventListener("mouseenter", function() {
    hoverStartTime = Date.now();
    this.classList.add("rotated");
  });

  hoverElement.addEventListener("mouseleave", function() {
    const hoverDuration = Date.now() - hoverStartTime;
    if (hoverDuration < 2000) {
      this.classList.remove("rotated");
    } else {
      this.classList.toggle("rotated");
    }
  });