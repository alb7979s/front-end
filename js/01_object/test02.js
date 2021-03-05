// 객체 생성 및 값의 초기화
let member1 = { id: 'hong', email: 'hong@a.com' };
// let member1 = { "id": 'hong', "email": 'hong@a.com' }; 같음, tip] json 가면 key부분 ""붙여줘야함, js는 일반적으로 안붙여줌
// 동적인 프로퍼티 추가
member1.name = '홍길동';

// 객체의 프로퍼티 이름은 "" 생략 가능
let member2 = { id: 'kim', email: 'kim@a.com' };
console.log(member2);


// 문자열 표현 여러가지 방법들
let msg1 = "안녕하세요";
let msg2 = '안녕하세요';
let id = 'hong'
let msg3 = `안녕하세요 ${id}`;    //얘는 여러줄도 가능하고, ${}로 포맷팅도 가능하고 (cf. jsp에서도 똑같이 써서 충돌날수도 있음!, 참고로 jsp는 (html + css + js) + java 쓸수있게해줌)
                                 //따라서 jsp에서 사용해줄려면 `\${}` 이렇게 역슬래시 붙여서 해결해줌
let msg4 = "안\n\
녕하세요";                  //얘는 그냥 이런 방법도 있다인데 굳이 안쓸듯?
