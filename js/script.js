const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', () =>{
  menu.classList.toggle('open')
})

window.onload = () => {
  const transition = document.querySelector('#transition')
  const anchors = document.querySelectorAll('a')

  setTimeout(() => {
    transition.classList.remove('is-active')
  }, 500);

  for( let i = 0; i < anchors.length; i++){
    const anchor = anchors[i];
     anchor.addEventListener('click', e =>{
       e.preventDefault();
       let target = e.target.href;
       transition.classList.add('is-active');

       setTimeout(() => {
         window.location.href = target;
       }, 500)
     })
   }

}