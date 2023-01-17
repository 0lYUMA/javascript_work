const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 저장될 값의 아이템의 이름 & 값은 username 변수
    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // 변수와 string을 결합하고 싶다면 ${변수명} 표현 & 백틱 기호 사용
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null)
{
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
{
    // show the greeting
    paintGreetings(savedUsername);
}