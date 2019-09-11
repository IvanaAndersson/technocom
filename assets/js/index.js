const dropdownMenuButton = document.getElementById("dropdownMenuButton");
if (dropdownMenuButton !== null) {
  dropdownMenuButton.addEventListener("click", event => {
    dropdownMenuButton.classList.toggle("expanded");
  });
}
