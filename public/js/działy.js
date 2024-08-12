function showDepartmentTab() {
  const departmentTabs = document.querySelectorAll(".department-tab");

  departmentTabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku (np. nawigacji)

      // Usuwanie klasy 'text-blue-700' ze wszystkich zakładek i dodanie 'text-gray-500'
      departmentTabs.forEach((otherTab) => {
        otherTab.classList.remove("text-blue-700");
        otherTab.classList.add("text-gray-500");
      });

      // dodanie klasy 'text-blue-700' do klikniętej zakładki
      tab.classList.add("text-blue-700");
      tab.classList.remove("text-gray-500");
    });
  });
}

showDepartmentTab();
