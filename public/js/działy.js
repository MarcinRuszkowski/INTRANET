function showDepartmentTab() {
  const departmentTabs = document.querySelectorAll(".department-tab");

  departmentTabs.forEach((departmentTab) => {
    departmentTab.addEventListener("click", () => {
      // Usuwanie klasy 'text-blue-700' ze wszystkich zakładek i dodanie 'text-gray-500'
      departmentTabs.forEach((tab) => {
        tab.classList.remove("text-blue-700");
        tab.classList.add("text-gray-500");
      });

      // Dodanie klasy 'text-blue-700' do klikniętej zakładki
      departmentTab.classList.add("text-blue-700");
      departmentTab.classList.remove("text-gray-500");
    });
  });
}

showDepartmentTab();
