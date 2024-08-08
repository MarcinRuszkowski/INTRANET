// Pokazuje szczegóły użytkownika
function showUserDetails() {
  const bg = document.querySelector("#bg-user-details");
  const userDetailsDisplay = document.querySelector("#user-details-display");
  const closeBtn = document.querySelector("#detail-close-btn");
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

// Otwieranie okna do filtrowania
function openFilterWindow() {
  const filterBtn = document.querySelector("#filter-btn");
  const closeBtn = document.querySelector("#filter-close-btn");
  const filterDisplay = document.querySelector("#filter-display");

  filterBtn.addEventListener("click", () => {
    filterDisplay.classList.remove("hidden");
    filterDisplay.classList.add("flex");
  });
  closeBtn.addEventListener("click", () => {
    filterDisplay.classList.remove("flex");
    filterDisplay.classList.add("hidden");
  });
}

// Funkcja do przełączania widoczności sekcji filtrów
function toggleDropdown(button) {
  const section = button.closest("h3").nextElementSibling;
  section.classList.toggle("hidden");

  // Znajdź ikonę SVG w przycisku
  const svgIcon = button.querySelector("svg");
  svgIcon.classList.toggle("-rotate-180");
}

// Funkcja do aktualizowania aktywnych filtrów
function updateActiveFilters(checkbox) {
  const activeFiltersContainer = document.getElementById("active-filters");

  if (checkbox.checked) {
    // Dodaj filtr do aktywnych filtrów
    const filterElement = document.createElement("div");
    filterElement.className =
      "fElement flex items-center gap-2 bg-green-500 px-2 rounded-md w-max";
    filterElement.innerHTML = `
      <span class="text-white">${checkbox.nextElementSibling.textContent}</span>
      <img src="./imgs/close-icon.svg" alt="Usuń filtr" class="fElement-delete-btn bg-white rounded-md w-3 h-3 cursor-pointer" onclick="removeFilter(this)" />
    `;
    activeFiltersContainer.appendChild(filterElement);
  } else {
    // Usuń filtr z aktywnych filtrów
    const filters = activeFiltersContainer.querySelectorAll(".fElement");
    filters.forEach((filter) => {
      if (
        filter.querySelector("span").textContent ===
        checkbox.nextElementSibling.textContent
      ) {
        filter.remove();
      }
    });
  }
}

// Funkcja do usuwania filtra
function removeFilter(button) {
  const filterElement = button.closest(".fElement");
  const filterText = filterElement.querySelector("span").textContent;

  // Usuń filtr z paska aktywnych filtrów
  filterElement.remove();

  // Odznacz odpowiedni checkbox w oknie filtrów
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.nextElementSibling.textContent === filterText) {
      checkbox.checked = false;
    }
  });
}

// Funkcja do czyszczenia filtrów
function clearFilters() {
  // Odznacz wszystkie checkboxy
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Usuń wszystkie filtry z paska aktywnych filtrów
  const activeFiltersContainer = document.getElementById("active-filters");
  activeFiltersContainer.innerHTML = "";
}

showUserDetails();
openFilterWindow();
