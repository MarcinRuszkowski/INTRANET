function deleteUser() {
  const binBtn = document.querySelector("#bin-btn");
  binBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxes.length > 0) {
      const confirmDelete = confirm(
        "Czy na pewno usunąć zaznaczonego użytkownika?"
      );
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

function deleteAllUsers() {
  const selectAllBtn = document.querySelector("#select-all");
  selectAllBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isChecked = selectAllBtn.checked;

    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });
}

deleteAllUsers();
deleteUser();
