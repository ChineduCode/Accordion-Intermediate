const accordions = document.querySelectorAll('.content')
accordions.forEach(accordion => {
  accordion.addEventListener('click', ()=>{
    accordion.classList.toggle('toggle-answer')
  })
});