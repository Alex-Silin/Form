const form = document.querySelector("form");
    
form.addEventListener("submit", (event) => {
    event.preventDefault();
        
const email = event.target.email.value;
const password = event.target.password.value;

fetch("https://jsonplaceholder.typicode.com/users", {
method: 'POST',
headers: {'Content-Type': 'application/json'
},
body: JSON.stringify({
email,
password
})
})
.then(response => response.json())
.then((data) => {
if (data.length > 0) {
console.log('Авторизация успешна');
} else {
console.log('Неверные учетные данные');
}
})
.catch((error) => console.log(error));
});