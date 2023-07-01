function renderNaturals() {
    naturalsPage.render();
  }
  
  let CATALOG = [];
  
  fetch("naturals.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderNaturals();
      }, 500);
    });
  