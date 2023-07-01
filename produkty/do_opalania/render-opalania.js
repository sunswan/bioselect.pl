function renderOpalania() {
    opalaniaPage.render();
  }
  
  let CATALOG = [];
  
  fetch("opalania.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderOpalania();
      }, 500);
    });
  

    
