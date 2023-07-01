function renderOrganics() {
    organicsPage.render();
  }
  
  let CATALOG = [];
  
  fetch("organic.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderOrganics();
      }, 500);
    });
  

    
