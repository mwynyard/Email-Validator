const submit = document.querySelector(".submit-button")
const resultContent = document.querySelector(".result")
const emailInput = document.querySelector('#email-input')
const emailVal = emailInput.value


var formEl = document.getElementById('form');
var token = config.MY_API_TOKEN

formEl.addEventListener('submit', function(event) {

  var headers = new Headers();

  headers.set('Accept', 'application/json');

  resultContent.style.display = "block";
  const emailTest = "milan.wynyard%40gmail.com"

  var formData = new FormData();
  for (var i = 0; i < formEl.length; ++i) {
    formData.append(formEl[i].name, formEl[i].value);
  }
  formData.append('json', JSON.stringify({example: 'return value'}));

  var url = `https://api.debounce.io/v1/?api=${token}&email=${emailInput.value}`;
  var fetchOptions = {
    method: 'POST', headers,
    body: formData
  };
  
  var responsePromise = fetch(url, fetchOptions)

  responsePromise
    .then(function(response) {
      return response.json();
    })
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
