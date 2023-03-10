const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방울 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
]

// 네비게이션에게 이벤트를 건다.
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.

const navigation = getNode('.navigation')
const visualImg = getNode('.visual img')

function makeArray(arrayLike) {
  return Array.from(arrayLike)
}

function handler(e) {
  let target = e.target.closest('li')
  // target이 null이면 함수 종료
  if (!target) return

  let list = makeArray(navigation.children)
  let index = attr(target, 'data-index')
  // console.log('test', list[0])

  // 내가 선택하지 않은(모든 li)li에게 is-active 클래스를 제거함
  // forEach 배열에만 쓸 수 있음 -> 배열로 만들기
  // [...list] / Array.prototype.slice.call(list)

  // [li li li li]
  list.forEach((item) => removeClass(item, 'is-active'))

  // 타겟의 index 뽑아내기
  // console.log(target.dataset.index) // 이렇게도 됨
  console.log(index)
  // attr(visualImg, 'src', `./assets/part01/${data[index-1].src}`)
  attr(visualImg, 'src', `./assets/part01/visual${index}.jpg`)
  attr(visualImg, 'alt', data[index - 1].alt)

  // 내가 한 코드
  // visualImg.src = `./assets/part01/visual${index}.jpg`
  // visualImg.alt = e.target.alt

  // 선택한 li에게 is-active를 넣어줌
  addClass(target, 'is-active')
}

navigation.addEventListener('click', handler)
