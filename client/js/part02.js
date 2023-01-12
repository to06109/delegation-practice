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
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
]

// const list = document.querySelectorAll('.navigation > li')

// list.forEach((item) => {
//   //
// })

// // 이벤트 위임 X
// $('.navigation > li').click(function (e) {
//   console.log($(this))
//   e.preventDefault() // 태그가 더이상 자신의 일을 하지 않음(a태그가 이동 기능 상실)
//   // $(this): target li가 나옴, index(): 자체적으로 index 수집해놓음(dataset꺼 아님)
//   let index = $(this).index()

//   $('.navigation > li').removeClass('is-active')
//   $(this).addClass('is-active')

//   $('.visual img').attr({
//     src: `./assets/part01/${data[index].src}`,
//     alt: data[index].alt,
//   })
// })

// 이벤트 위임
$('.navigation').on('click', 'li', function (e) {
  e.preventDefault()

  let index = $(this).attr('data-index')

  $('.navigation > li').removeClass('is-active')
  $(this).addClass('is-active')

  $('.visual img').attr({
    src: `./assets/part01/${data[index - 1].src}`,
    alt: data[index - 1].alt,
  })
})
