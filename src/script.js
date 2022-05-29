const submit = document.querySelector(".submit-button")
const resultContent = document.querySelector(".result")

const showContent = (event) => {
    resultContent.style.display = "block"
    event.preventDefault();
    console.log("FORM SUBMITTED")
}

let emailInput = document.querySelector('#email-input')
let emailVal = emailInput.value


var formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event) {
  // 1. Setup the request
  // ================================
  // 1.1 Headers
  var headers = new Headers();
  // Tell the server we want JSON back
  headers.set('Accept', 'application/json');

  // Show Results
  resultContent.style.display = "block";
  const emailTest = "milan.wynyard%40gmail.com"

  // 1.2 Form Data
  // We need to properly format the submitted fields.
  // Here we will use the same format the browser submits POST forms.
  // You could use a different format, depending on your server, such
  // as JSON or XML.
  var formData = new FormData();
  for (var i = 0; i < formEl.length; ++i) {
    formData.append(formEl[i].name, formEl[i].value);
  }
  
  // This is for the purpose of this demo using jsFiddle AJAX Request endpoint
  formData.append('json', JSON.stringify({example: 'return value'}));

  // 2. Make the request
  // ================================
  var url = `https://api.debounce.io/v1/?api=627238f52d347&email=${emailInput.value}`;
  var fetchOptions = {
    method: 'POST', headers,
    body: formData
  };
  
  var responsePromise = fetch(url, fetchOptions)
  
  // 3. Use the response
  // ================================
  responsePromise
  	// 3.1 Convert the response into JSON-JS object.
    .then(function(response) {
      return response.json();
    })
    // 3.2 Do something with the JSON data
    .then(function(jsonData) {
    	console.log(jsonData.debounce);
      document.getElementById('results').innerText =
      	JSON.stringify(jsonData);
        document.querySelector('#reason').innerText =
      	JSON.stringify(jsonData.debounce.reason).replace(/['"]+/g, '');
        document.querySelector('#result').innerText =
      	JSON.stringify(jsonData.debounce.result).replace(/['"]+/g, '');
    });
  console.log('form submitted - function')
  

  event.preventDefault();
});

//info@urbanedge.com.au
