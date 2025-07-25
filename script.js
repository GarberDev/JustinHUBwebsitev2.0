document.addEventListener("DOMContentLoaded", () => {
  // This ensures Lucide icons are rendered on all pages
  lucide.createIcons();

  // --- Logic for sales.html ---
  const toggleScheduleBtn = document.getElementById("toggle-schedule");
  if (toggleScheduleBtn) {
    toggleScheduleBtn.addEventListener("click", () => {
      const content = document.getElementById("schedule-content");
      const chevron = document.getElementById("schedule-chevron");
      content.classList.toggle("hidden");
      if (content.classList.contains("hidden")) {
        chevron.setAttribute("data-lucide", "chevron-down");
      } else {
        chevron.setAttribute("data-lucide", "chevron-up");
      }
      lucide.createIcons(); // Re-render icons after changing attributes
    });

    const pinSubmitBtn = document.getElementById("pin-submit");
    pinSubmitBtn.addEventListener("click", () => {
      const pinInput = document.getElementById("pin-input");
      const errorEl = document.getElementById("pin-error");
      if (pinInput.value === "2027") {
        // Correct PIN for sales schedule
        document.getElementById("pin-entry").classList.add("hidden");
        document.getElementById("schedule-embed").classList.remove("hidden");
        errorEl.textContent = "";
      } else {
        errorEl.textContent = "Incorrect PIN. Please try again.";
      }
    });
  }

  // --- Logic for secure.html ---
  const securePinSubmitBtn = document.getElementById("secure-pin-submit");
  if (securePinSubmitBtn) {
    securePinSubmitBtn.addEventListener("click", () => {
      const pinInput = document.getElementById("secure-pin-input");
      const errorEl = document.getElementById("secure-pin-error");
      if (pinInput.value === "1469853") {
        // Correct PIN for secure projects
        document.getElementById("secure-pin-entry").classList.add("hidden");
        document.getElementById("secure-content").classList.remove("hidden");
        errorEl.textContent = "";
      } else {
        errorEl.textContent = "Invalid PIN.";
      }
    });
  }
});
