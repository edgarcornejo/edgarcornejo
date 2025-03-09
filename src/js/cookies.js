const cookieBox = document.querySelector(".wrapper-cookies"), buttons = document.querySelectorAll(".btn");

const executeCodes = () => {
  if (document.cookie.includes("cookieDe")) return;
  cookieBox.classList.add("show");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (btn.id == "btn-accept") {
        document.cookie = "cookieDe= EdgarCornejo; max-age=" + 60 * 60 * 24 * 30;
      }
    })
  })
};

window.addEventListener("load", executeCodes);