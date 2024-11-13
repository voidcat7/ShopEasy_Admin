// Toggle popup visibility
let isPopupVisible = false;
let scale = 1;
let translateX = 0;
let translateY = 0;
let startX, startY, isDragging = false;

const toggleIcon = document.getElementById("toggle-icon");
const popupBackground = document.getElementById("popupBackground");
const popupImage = document.getElementById("popupImage");

toggleIcon.addEventListener("click", () => {
  isPopupVisible = !isPopupVisible;
  popupBackground.style.display = isPopupVisible ? "block" : "none";
  resetImage();
});

// Zoom in/out on mouse wheel
popupImage.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomIntensity = 0.1;
  scale += e.deltaY < 0 ? zoomIntensity : -zoomIntensity;
  scale = Math.max(1, Math.min(scale, 4)); // Set zoom limits
  updateTransform();
});

// Start dragging
popupImage.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - translateX;
  startY = e.clientY - translateY;
  popupImage.style.cursor = "grabbing";
});

// Stop dragging
document.addEventListener("mouseup", () => {
  isDragging = false;
  popupImage.style.cursor = "grab";
});

// Drag image
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  }
});

// Update image transformation
function updateTransform() {
  popupImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}

// Reset image to initial state
function resetImage() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  updateTransform();
}