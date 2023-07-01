function renderMezczyzn() {
  mezczyznPage.render();
  }
  
  let CATALOG = [];
  
  fetch("mezczyzn.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderMezczyzn();
      }, 500);
    });
  

    
