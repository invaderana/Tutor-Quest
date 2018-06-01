console.log("game nerd")
let item1 = document.querySelector('#setting')
let item2 =document.querySelect('#credit')
console.log(item1)
item1.addEventListener('mouseover',()=>{
    if(item1.classList.contains('active')){
        item1.classList.remove('active')
    }
    else{
        item1.classList.add('active')
    }
})
item2.addEventListener('mouseover',()=>{
    if(item2.classList.contains('active')){
        item2.classList.remove('active')
    }
    else{
        item2.classList.add('active')
    }
})
