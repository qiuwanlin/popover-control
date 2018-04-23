button.addEventListener('click',function(){
    popper.classList.add('active')
    button.addEventListener('click',buttonClose) 
})
component.addEventListener('click',function(e){
    e.stopPropagation()
})
document.addEventListener('click',function(){
    popper.classList.remove('active')
    button.removeEventListener('click',buttonClose)
})

function buttonClose(){
    popper.classList.remove('active')
    button.removeEventListener('click',buttonClose)
}

