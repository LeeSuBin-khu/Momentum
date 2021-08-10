const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

//event를 발생시키는 함수는 첫번째 argument로 정보를 받음.
function onLoginSubmit(event) {
    event.preventDefault(); //정보의 preventDefault함수를 호출하면 브라우저의 기본 동작을 방지함.
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);



const LocalUserName = localStorage.getItem(USERNAME_KEY);

if(LocalUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);

} else {
    greeting.innerText = `Hello ${LocalUserName}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

