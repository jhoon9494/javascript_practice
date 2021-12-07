const dynamic = document.getElementById('dynamic');

function selectString() {
  //아래 배열 중 랜덤한 텍스트가 함수의 리턴값으로 반환됨.
  const stringArray = ['Learn to HTML', 'Learn to CSS', 'Learn to Javascript', 'Learn to Python'];
  const selectedString = stringArray[Math.floor(Math.random() * stringArray.length)];

  return selectedString;
}

//방법 1. 빈 배열 생성 후 선택된 텍스트를 빈 배열에 push 후 join 메소드를 사용하여 텍스트 표시
function textTyping(string) {
  const stringArray = [];
  let i = 0;
  const timer = setInterval(() => {
    if (i < string.length) {
      //텍스트 타이핑 효과
      stringArray.push(string[i]);
      dynamic.innerText = stringArray.join('');
      i++;
    } else {
      //타이핑 3초 후 새로운 타이핑 효과 적용
      clearInterval(timer);
      setTimeout(() => {
        dynamic.innerText = '';
        //재귀함수를 통해 타이핑 효과 반복 실시, 파라미터값으로 함수를 넣어줘야 중복되는 값이 나오지 않음
        textTyping(selectString());
        i = 0;
      }, 3000);
    }
  }, 70);
}

//방법 2. 선택된 텍스트를 split() 메소드를 통해 배열로 변환 시킨 뒤 ,shift() 메소드를 사용하여 텍스트 표시
function textTyping2(randomArr) {
  if (randomArr.length > 0) {
    //텍스트 타이핑 효과
    //innerText 사용 시 공백을 제외시키므로 textContent 사용함.
    dynamic.textContent += randomArr.shift();
    setTimeout(() => textTyping2(randomArr), 70);
  } else {
    //타이핑 3초 후 새로운 타이핑 효과 적용
    setTimeout(() => {
      dynamic.textContent = '';
      //재귀함수를 통해 타이핑 효과 반복 실시, 파라미터값으로 함수를 넣어줘야 중복되는 값이 나오지 않음
      textTyping2(selectString().split(''));
    }, 3000);
  }
}

//방법 1.
// textTyping(selectString());

//방법 2.
textTyping2(selectString().split(''));

//커서 깜빡임 효과
setInterval(() => {
  dynamic.classList.toggle('active');
}, 500);
