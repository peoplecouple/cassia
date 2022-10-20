window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('scroll', () => {
    let sct = window.scrollY;
    sct > 0
      ? document.querySelector('#Header').classList.add('on')
      : document.querySelector('#Header').classList.remove('on')

      sct > 500 
      ? document.querySelector('.to_top').classList.add('on')
      : document.querySelector('.to_top').classList.remove('on')
  })

  const MainSlider = new Swiper('.MainSlider', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  const SCE_ELE = document.querySelectorAll('.active-event');
  window.addEventListener('scroll', () => {
    let sct = window.scrollY;
    SCE_ELE.forEach(e => {
      sct > e.offsetTop - 500
        ? e.classList.add('on')
        : e.classList.remove('on')
    })

  });

  document.querySelector('.to_top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  document.querySelector('.mopen').addEventListener('click', (e) => {
    const TG = e.currentTarget;
    TG.classList.toggle('on') 
    // 이건 헤더의 on을 뗏다 붙혀서 스크롤시 이벤트를 없애는거임
    // 대신 제일 위에 조건문 써서 해도됨
    document.querySelector('#Header').classList.toggle('ox')
  });

  document.querySelector('#Header').addEventListener('wheel', (e)=>{
    e.preventDefault() //이벤트 자체를 막는다.
  })

})