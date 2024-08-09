// Pokazuje szczegóły użytkownika
function showUserDetails() {
  const bg = document.querySelector("#bg-user-details");
  const userDetailsDisplay = document.querySelector("#user-details-display");
  const closeBtn = document.querySelector("#detail-close-btn");
  const showDetailsBtns = document.querySelectorAll(".show-details-btn");

  showDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      bg.classList.add("brightness-50");
      // bg.classList.add("md:w-8/12");
      userDetailsDisplay.classList.add("flex");
      userDetailsDisplay.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    bg.classList.remove("brightness-50");
    // bg.classList.remove("md:w-8/12");
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
  const activeFiltersContainer = document.querySelector("#active-filters");

  if (checkbox.checked) {
    // Dodaj filtr do aktywnych filtrów
    const filterElement = document.createElement("div");
    filterElement.className =
      "fElement flex items-center gap-2 bg-blue-700 px-2 rounded-md w-max";
    filterElement.innerHTML = `
      <span class="active-filter text-white">${checkbox.nextElementSibling.textContent}</span>
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
  const activeFiltersContainer = document.querySelector("#active-filters");
  activeFiltersContainer.innerHTML = "";
}

function suggestUser() {
  function showUser() {
    const searchTerm = document
      .querySelector("#user-finder")
      .value.toLowerCase();
    const userDisplays = document.querySelectorAll(".user-liDisplay");
    const userFinder = document.querySelector("#user-finder");

    userDisplays.forEach((userDisplay) => {
      const username = userDisplay
        .querySelector(".username")
        .textContent.toLowerCase();

      if (username.includes(searchTerm) && searchTerm !== "") {
        userDisplay.classList.remove("hidden");
        userDisplay.classList.add("flex");
      } else {
        userDisplay.classList.add("hidden");
        userDisplay.classList.remove("flex");
      }

      if (userFinder.value === "") {
        userDisplay.classList.remove("hidden");
        userDisplay.classList.add("flex");
      }
    });
  }

  document.querySelector("#user-finder").addEventListener("input", showUser);
}

// function filterUserByActiveFilters() {
//   const userDisplays = document.querySelectorAll(".user-liDisplay");
//   const activeFilters = Array.from(
//     document.querySelectorAll("span.active-filter")
//   ).map((span) => span.textContent.trim().toUpperCase());

//   userDisplays.forEach((userDisplay) => {
//     const userInfo = Array.from(userDisplay.querySelectorAll(".user-info")).map(
//       (span) => span.textContent.trim().toUpperCase()
//     );

//     // Sprawdź, czy którykolwiek z aktywnych filtrów pasuje do informacji użytkownika
//     const matches = activeFilters.some((filter) => userInfo.includes(filter));

//     if (matches) {
//       userDisplay.classList.add("flex");
//       userDisplay.classList.remove("hidden");
//     } else {
//       userDisplay.classList.remove("flex");
//       userDisplay.classList.add("hidden");
//     }
//   });
// }

openFilterWindow();
showUserDetails();
suggestUser();
// filterUserByActiveFilters();
