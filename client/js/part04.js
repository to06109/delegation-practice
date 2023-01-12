const contents = getNode('.contents')
const textField = getNode('#comment37')

function clearText(target) {
  target.value = ''
}

function handler(e) {
  let target = e.target

  // data-name이 없는 경우
  while (!attr(target, 'data-name')) {
    target = target.parentNode

    // 무한반복 방지: 못찾겠으면 끝내
    if (target.nodeName === 'BODY') {
      target = null
      return
    }
  }

  if (target.dataset.name === 'like') {
    toggleClass(target, 'active')
  }

  if (target.dataset.name === 'comment') {
    textField.focus()
  }

  if (target.dataset.name === 'send') {
    console.log(textField.value)
    let template = /* html */ `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/oh.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">최예송</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `

    insertLast('.comment_container', template)

    clearText(textField)
  }
}

contents.addEventListener('click', handler)
// 댓글달고 엔터 쳤을 때 댓글 올리기 ->  keydown 이벤트
textField.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    textField.value

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `
    insertLast('.comment_container', template)

    clearText(textField)
  }
})

// const off = bindEvent(contents,'click',handler);
