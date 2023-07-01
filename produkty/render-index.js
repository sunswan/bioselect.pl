function render() {
  productsPage.render();
}

let CATALOG = [];

fetch("catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      render();
    }, 500);
  });
