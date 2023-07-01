function renderMydla() {
  mydlaPage.render();
  }
  
  let CATALOG = [];
  
  fetch("mydla.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderMydla();
      }, 500);
    });
  

    
