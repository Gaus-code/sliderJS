// // Получаем элементы слайдера
const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
const sliderLinks = document.querySelectorAll('.town');
const cityText = document.querySelector('.city-js');
const timeText = document.querySelector('.time-js');
const areaText = document.querySelector('.area-js');
let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);

//автоматическое прокручивание слайдов
// setInterval(() => {
//     showNextSlide()
// }, 9000);

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function changeTown(){
    if(sliderCount == 0){
        cityText.innerHTML = "Rostov-on-Don<br>LCD admiral";
        timeText.innerHTML = "3.5 months";
        areaText.innerHTML = "81 m2";
    }else if(sliderCount == 1){
        cityText.innerHTML = "Sochi<br>Thieves";
        timeText.innerHTML = "4 months";
        areaText.innerHTML = "105 m2";
    }else{
        cityText.innerHTML = "Rostov-on-Don<br>Patriotic";
        timeText.innerHTML = "3 months";
        areaText.innerHTML = "93 m2";
    }
}

function showNextSlide(){
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlider(sliderCount);
    changeTown(sliderCount);
}

function showPrevSlide(){
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlider(sliderCount);
    changeTown(sliderCount);
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlider(index){
    sliderDots.forEach(item => item.classList.remove('active'));
    sliderDots[index].classList.add('active');
    sliderLinks.forEach(item => item.classList.remove('active-link'));
    sliderLinks[index].classList.add('active-link');
}
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlider(sliderCount);
        changeTown(sliderCount);
    })
})

sliderLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      sliderCount = index;
      rollSlider();
      thisSlider(sliderCount);
      changeTown(sliderCount);
  })
})



    