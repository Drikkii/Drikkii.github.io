// window.onload = () => {
//   // инициализация слайдера
//   new ItcSimpleSlider(".itcss", {
//     loop: true,
//     autoplay: true,
//     interval: 2000,
//     swipe: true,
//   });
// };
window.addEventListener("load", function () {
  new ItcSimpleSlider(".itcss", {
    loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
  });
});
