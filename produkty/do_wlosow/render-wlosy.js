function renderWlosy() {
  wlosyPage.render();
}

let CATALOG = [];

fetch("wlosy.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      renderWlosy();
    }, 500);
  });