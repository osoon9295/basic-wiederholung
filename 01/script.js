// 1. 버튼 태그를 가져온다.
// 2. 버튼 태그에 이벤트를 등록한다.

// 이벤트가 발생하면
// 3. 모달 태그를 가져온다.
// 4. 모달 태그에 class show를 추가한다.

function toggleModal() {
  document.querySelector(".modal").classList.toggle("show");
}

function toggleWarning(message) {
  document.querySelector(".경고메세지").style.display = message;
}

document.querySelector(".modal-btn").addEventListener("click", toggleModal);

document.querySelector(".close-btn").addEventListener("click", toggleModal);

document.querySelector(".login").addEventListener("click", () => {
  // 1. 아이디 input에 값이 없으면
  if (
    !document.querySelector(".아이디").value ||
    !document.querySelector(".비밀번호").value
  ) {
    toggleWarning("block");
  } else {
  }
});

document.querySelector(".경고창닫기").addEventListener("click", () => {
  toggleWarning("none");
});

const btn = document.querySelector(".btn");
let like = 0;
btn.addEventListener("click", () => {
  ++like;
  btn.innerHTML = like;
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  like = 0;
  btn.innerHTML = like;
});
