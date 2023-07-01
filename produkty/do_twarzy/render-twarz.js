function renderTwarz() {
    twarzPage.render();
  }
  
  let CATALOG = [];
  
  fetch("twarz.json")
    .then((res) => res.json())
    .then((body) => {
      CATALOG = body;
      setTimeout(() => {
        renderTwarz();
      }, 500);
    });
  

    
