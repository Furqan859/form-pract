function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    console.log("result",results)
  }
  
  const form = document.querySelector('.form');
  form.addEventListener('submit', handleFormSubmit);
  