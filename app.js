  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      if (value === "C") {
        display.value = "";
        return;
      }

      if (value === "=") {
        try {
          display.value = eval(display.value); // penting: website lokal ini aman
        } catch {
          display.value = "Error";
        }
        return;
      }

      display.value += value;
    });
  ]