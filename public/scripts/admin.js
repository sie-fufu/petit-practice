
  document.getElementById("decisive-btn").addEventListener("click", () => {
    localStorage.setItem("isCancel", false);
  });

  document.getElementById("cancel-btn").addEventListener("click", () => {
    localStorage.setItem("isCancel", true);
  });

