// 객체는 연관 있는 데이터를 묶어서 관리(객체지향 언어의 클래스 처럼, 기능과 데이터를 묶는다.)
let member = {
  id: 'hong',
  name: '홍길동',
  setId: function (id) {
    this.id = id;
  },
  getId: function () {
    return this.id;
  },
};
console.log(member.id, member.getId());
//아이디 변경
member.setId('kang');

console.log(member.id, member.getId());

// 여러명의 교육생 정보를 관리해야 한다면?? => test06처럼!
