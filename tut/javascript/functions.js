// 함수에서 함수 반환

function createGreeting(msg) {
    return function (name) {
        console.log(`${msg} ${name} 님!`);
    }
}

const hello = createGreeting("안녕하세요");
hello("홍길동");