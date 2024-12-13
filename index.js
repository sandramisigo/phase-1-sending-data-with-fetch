function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function(response) {
        return response.json(); // used to parse the response JSON
      })
      .then(function(object) {
        const id = object.id; // gets the id from the response
        const idElement = document.createElement('p'); 
        idElement.textContent = id; // sets the content to the id
        document.body.appendChild(idElement); // appends the <p> element to the DOM
      })
      .catch(function(error) {
        const errorMessage = document.createElement('p'); // creates a new <p> element for the error message
        errorMessage.textContent = error.message; // sets the error message
        document.body.appendChild(errorMessage); // appends the error message to the DOM
      });
  }
  