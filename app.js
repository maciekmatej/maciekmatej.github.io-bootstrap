const form = document.querySelector("#input-form");
const ul = document.querySelector(".list-group");
// const delBtn = document.querySelector(".");

const userInput = form.elements.userInput;
console.dir(userInput);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(userInput.value){
        if(ul.childElementCount < 8){
            // NEW LI
        const newLi = document.createElement('li');
        newLi.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-center');
        const newDoneBtn = document.createElement('button');
        newDoneBtn.innerHTML ='<i class="bi bi-check-square"></i>';
        const newDelBtn = document.createElement('button');
        newDelBtn.innerHTML ='<i class="bi bi-trash"></i>';
        const btnWrap = document.createElement('div');
        btnWrap.classList.add('btn-group')
        newDelBtn.classList.add('btn', 'btn-warning');
        newDelBtn.setAttribute('id','delete');
        newDoneBtn.classList.add('btn','btn-success');
        newDoneBtn.setAttribute('id','done')
        
        newLi.innerText = `${userInput.value}`;
        newLi.append(btnWrap);
        btnWrap.append(newDoneBtn, newDelBtn);
        ul.append(newLi);
        userInput.value = "";
        }else{
            alert('list is full')
        }
    }else {
    alert('You need to type sth to add it to the list')
    }
})
ul.addEventListener('click', (e) => {
    console.log(e);
    const liNode = e.target.parentElement.parentElement;
    if(e.target && e.target.id === "delete"){
        liNode.classList.add('fall')
        liNode.addEventListener('transitionend',() => {
            liNode.remove();
        })
            
    }else if(e.target && e.target.id === "done"){
        liNode.classList.toggle("strikethrough");
       
    }

})
