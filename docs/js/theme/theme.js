export class Theme {
  iconChangeTheme;
  defaultTheme;

  constructor() {
    this.defaultTheme = "theme--dark";
    this.iconChangeTheme = document.querySelector(".dark-mode");
    this.readCurrentTheme();
    this.addEventToChangeTheme();
  }

  readCurrentTheme() {
    const theme = localStorage.getItem("theme") || this.defaultTheme;
    document.body.classList.add(theme);
  }

  setTheme(oldTheme, theme) {
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme);
  }

  addEventToChangeTheme() {
    this.iconChangeTheme.addEventListener("click", () => {
      if (document.body.className.includes("theme--dark")) {
        this.setTheme("theme--dark", "theme--light");
        localStorage.setItem("theme", "theme--light");
      } else {
        this.setTheme("theme--light", "theme--dark");
        localStorage.setItem("theme", "theme--dark");
      }
    });
  }
}
