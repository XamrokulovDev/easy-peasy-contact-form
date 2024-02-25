const button = document.querySelector('#submit')
const names = document.querySelector('#name')
const age = document.querySelector('#age')
const married = document.querySelector('#married')
const box = document.querySelector('#box')

button.addEventListener('click',()=>{
    let h2Name = document.createElement('h2')
    names.addEventListener('input',(e)=>{
        h2Name.innerText = `Name: ${e.target.value}`
    })
    box.append(h2Name)
    
    let h2Age = document.createElement('h2')
    age.addEventListener('input',(e)=>{
        h2Age.innerText = `Age: ${e.target.value}`
    })
    box.append(h2Age)
    
    let h2Married = document.createElement('h2')
    married.addEventListener('input',(e)=>{
        h2Married.innerText = `is married: ${e.target.value}`
    })
    box.append(h2Married)
})