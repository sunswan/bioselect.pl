function renderCialo() {
  cialoPage.render();
  }
  
  let CATALOG = [];
  
  fetch("cialo.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderCialo();
      }, 500);
    });
  

    
