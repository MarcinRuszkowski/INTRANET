// usuwanie pojedynczych użytkowników
function deleteUser() {
  const binBtn = document.querySelector("#bin-btn");

  binBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxes.length > 0) {
      const confirmDelete = confirm("Czy na pewno usunąć użytkownika?");
      if (confirmDelete) {
        checkboxes.forEach((checkbox) => {
          const row = checkbox.closest("tr");
          if (row) {
            row.remove();
          }
        });
      }
    } else {
      window.alert("Nie wybrano użytkownika!");
    }
  });
}

// zaznaczenie wszystkich użytkowników
function checkAllUsers() {
  const selectAllBtn = document.querySelector("#select-all");

  selectAllBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isChecked = selectAllBtn.checked;

    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });
}

// po wpisaniu liter proponuje użytkownika
function suggestUser() {
  let avaibleUsers = [
    "Imie NazWisko",
    "Imie Nazzzzwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Na zwisko",
    "Imie Nazw i sko",
  ];

  const suggestionList = document.querySelector("#suggestions-list");
  const userFinder = document.querySelector("#user-finder");

  // wyszukuje dopasownia liter do nazwy użytkownika
  userFinder.onkeyup = () => {
    let result = [];
    let input = userFinder.value;

    if (input.length) {
      result = avaibleUsers.filter((user) => {
        return user.toLowerCase().includes(input.toLowerCase());
      });
    }
    displaySuggestions(result);

    // jeśli nie ma takiego użytkownika
    if (!result.length) {
      suggestionList.innerHTML = "Brak danego pracownika";
    }
  };

  // usuwa podpowiedzi gdy input jest pusty
  userFinder.onfocus = () => {
    if (!userFinder.value.length) {
      suggestionList.innerHTML = "";
    }
  };

  // wyświetla sugestie po wpisaniu litery
  function displaySuggestions(result) {
    const content = result
      .map((list) => {
        return `
        <li class="hover:bg-blue-500 flex hover:text-white rounded-md p-3 flex-row gap-1 items-center">
          <img src="./imgs/user-avatar.svg" alt="" class="w-7 h-7" />
          <span>${list}</span>
        </li>`;
      })
      .join("");
    suggestionList.innerHTML = `<ul>${content}</ul>`;

    // wypełnia inputa klikniętym użytkownikiem
    document.querySelectorAll("#suggestions-list li").forEach((item) => {
      item.addEventListener("click", () => selectUser(item));
    });
  }

  const selectUser = (list) => {
    userFinder.value = list.querySelector("span").innerText;
    suggestionList.innerHTML = "";
  };
}

// otwieranie okna do wyszukania pracownika na przycik '+dodaj pracownika'
function openUserFinder() {
  const openUserFinderBtn = document.querySelector("#user-finder-btn");
  const closeUserFinderBtn = document.querySelector("#close-user-finder-btn");
  const userFinderWindow = document.querySelector("#user-finder-window");
  const bgBhFinder = document.querySelector("#bg-bh-finder");
  const userFinder = document.querySelector("#user-finder");

  openUserFinderBtn.addEventListener("click", () => {
    userFinderWindow.classList.remove("hidden");
    bgBhFinder.classList.add("brightness-50");
  });

  closeUserFinderBtn.addEventListener("click", () => {
    userFinderWindow.classList.add("hidden");
    bgBhFinder.classList.remove("brightness-50");
    userFinder.value = "";
  });
}

deleteUser();
checkAllUsers();
suggestUser();
openUserFinder();
