let str = `
010-1234-5678
the@naver.com
https://www.omdbapi.com/
The quick brown fox jumps over the lazy dog.
aaaabbbbccccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// //const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi //리터럴 방식
// console.log(str.match(regexp))
// // g - 대문자, gi - 대소문자

// const regexp = /fox/gi
// //console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

// console.log(str.match(/\.$/gim)) //.으로 끝나는 부분 찾기 
// //이스케이프 문자(Escape Charactor)란 \ 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 의미.

const h = `  the hello  world   !

`
console.log(
	//str.match(/d$/gm) //d로 끝나는
	//str.match(/^t/gim)  //t로 시작하는 
	//str.match(/fox|dog/g) // fox, dog 찾기 
	//str.match(/https?/g) //s가 있거나 없거나.
	//str.match(/\b\w{2,3}\b/g) //2개이상 3개이하 글자에 대한 경계 정의
	//str.match(/[가-힇]{1,}/g)
	//str.match(/\w/g)
	//str.match(/\bf\w{1,}\b/g) //f로 시작한 영단어 
	//str.match(/\d/g) //숫자
	//h.replace(/\s/g, '') //공백문자들이 비어있는 문자 데이터로 들어감(삭제)
  //str.match(/.{1,}(?=@)/g) //@앞 1글자 이상 일치 
	str.match(/(?<=@).{1,}/g)
	)