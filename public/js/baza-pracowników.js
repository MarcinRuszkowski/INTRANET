// pokazuje szczegóły użytkownika 
function showUserDetails() {
  const bg = document.querySelector("#bg-user-details");
  const userDetailsDisplay = document.querySelector("#user-details-display");
  const closeBtn = document.querySelector("#close-btn");
  const showDetailsBtns = document.querySelectorAll(".show-details-btn");

  showDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      bg.classList.add("brightness-50");
      userDetailsDisplay.classList.add("flex");
      userDetailsDisplay.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    bg.classList.remove("brightness-50");
    userDetailsDisplay.classList.remove("flex");
    userDetailsDisplay.classList.add("hidden");
  });
}



showUserDetails();
