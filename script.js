const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')

function add_task(){
    if(inputBox.value===''){
        alert('Add a chore to check!'); 
        return;
    }
    if(finish.value===''){
        alert('Add your deadline!');
        return;
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value+' - '+finish.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    save();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        save();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        save();
    }

}, false);
function save(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function display(){
    listContainer.innerHTML=localStorage.getItem('data');
}
display();
