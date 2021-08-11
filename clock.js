const clock = document.querySelector("#clock");

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0"); //쉽게 사용할 수 있는 function이 있는지 찾아보기
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;

    // if(date.getSeconds()<10) {
    //     clock.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
    // } else {
    //     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // }
}

getTime(); //브라우저를 열자마자 바로 볼 수 있게 하기 위해서
setInterval(getTime, 1000); //1초마다 함수를 실행