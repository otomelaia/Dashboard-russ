
// plain JS
document.querySelector('.circle').addEventListener('click', () => {
    document.querySelector('.vertical').classList.toggle('open');
    document.querySelector('.line-wrapper').classList.toggle('open');
    document.querySelector('.content').classList.toggle('open');
  });
  
  
  // // jQuery
  // $('.circle').on('click', () => {
  //   $('.line-wrapper').toggleClass('open');
  //   $('.vertical').toggleClass('open');
  //   $('.content').toggleClass('open');
  // });