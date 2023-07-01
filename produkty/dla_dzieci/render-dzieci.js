function renderDzieci() {
  dzieciPage.render();
  }
  
  let CATALOG = [];
  
  fetch("dzieci.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderDzieci();
      }, 500);
    });
  

    
