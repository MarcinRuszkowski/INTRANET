// po wpisaniu liter proponuje dokument
function suggestDoc() {
  let avaibleDocs = [
    "Procedury zatrudnienia",
    "Stosowane umowy",
    "Pierwsze kroki",
    "Delegacje",
  ];
  const docsInput = document.querySelector("#docs-input");
  const suggestionList = document.querySelector("#suggestions-list");
  // const searchBtn = document.querySelector("#search-btn");

  // searchBtn.addEventListener("click", () => {});

  docsInput.onkeyup = () => {
    let result = [];
    let input = docsInput.value;

    if (input.length) {
      result = avaibleDocs.filter((doc) => {
        return doc.toLowerCase().includes(input.toLowerCase());
      });
      displaySuggestions(result);
    } else {
      suggestionList.innerHTML = "";
    }

    // jeśli nie ma dopasowań
    if (!result.length && input.length) {
      suggestionList.innerHTML = "Brak dopasowań";
    }
  };

  // usuwa podpowiedzi gdy input jest pusty
  docsInput.onfocus = () => {
    if (!docsInput.value.length) {
      suggestionList.innerHTML = "";
    }
  };

  // wyświetla sugestie po wpisaniu litery
  function displaySuggestions(result) {
    const content = result
      .map((list) => {
        return `
        <li class="hover:bg-blue-500 hover:text-white p-3">
          ${list}
        </li>`;
      })
      .join("");
    suggestionList.innerHTML = `<ul class="w-full">${content}</ul>`;

    // wypełnia input klikniętym elementem
    document.querySelectorAll("#suggestions-list li").forEach((item) => {
      item.addEventListener("click", () => selectDoc(item));
    });
  }

  const selectDoc = (list) => {
    docsInput.value = list.innerText;
    suggestionList.innerHTML = "";
  };
}

suggestDoc();
