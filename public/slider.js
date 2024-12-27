document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("auto-slider");
  const sliderChildren = [...slider.children];

  // Clone slides to ensure seamless scrolling
  sliderChildren.forEach((child) => {
    const clone = child.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollAmount = 0;

  function scrollSlider() {
    scrollAmount -= 1; // Adjust speed (higher negative value for faster scroll)
    if (Math.abs(scrollAmount) >= sliderChildren[0].offsetWidth) {
      scrollAmount = 0; // Reset scroll amount when a full slide has passed
      slider.appendChild(slider.children[0]); // Move first element to the end
    }
    slider.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollSlider);
  }

  scrollSlider();
});




