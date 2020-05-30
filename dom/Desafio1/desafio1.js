const wrapper = document.querySelector('.wrapper')
const hover = document.querySelector ('.hover')

wrapper.addEventListener('mouseover', function(e) {
  hover.style.display = 'flex';
})

wrapper.addEventListener('mouseout', function(e){
  hover.style.display = 'none';
})
