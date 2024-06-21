const sidebar = document.getElementById("sidebar");

      const toggleSidebar = document.getElementById("toggleSidebar");

      const closeSidebar = document.getElementById("closeSidebar");

      toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-hidden");

        sidebar.classList.toggle("sidebar-visible");
      });

      closeSidebar.addEventListener("click", () => {
        sidebar.classList.add("sidebar-hidden");

        sidebar.classList.remove("sidebar-visible");
      });