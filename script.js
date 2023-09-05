const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')
function add_task(){
    if(inputBox.value===''){
        alert('Add a chore to check!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
       
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        
    }

}, false);


const firebaseConfig = {
    apiKey: "AIzaSyBuME_F4qsZCHnqz3ceM5dZvs6S87oLn70",
    authDomain: "chorechecker-bd374.firebaseapp.com",
    projectId: "chorechecker-bd374",
    storageBucket: "chorechecker-bd374.appspot.com",
    messagingSenderId: "772091225554",
    appId: "1:772091225554:web:ca793e4447863858ce540b",
};
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
const database=firebase.database()
function login(){
    email=document.getElementById('email').value
    password=document.getElementById('psw').value
    full_name=document.getElementById('full_name').value
}
if (validate_email(email)==false || validate_psw(psw)==false){
    alert('Enter valid email or password')
    return;
}
auth.createUserWithEmailAndPassword(email,password)
.then(function(){
    var user=auth.currentUser
    var database_ref=database.ref()
    var user_data={
        email:email,
        full_name:full_name,
        last_login:Date.now()
    }
    database_ref.child('users/'+user.uid).set(user_data)

})
.catch(function(error) {
    var error_code=error.code;
    var error_message=error.message;

    alert(error_message);
})
function validate_email(){
    exp=/^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(exp.test(email)==true){
        return true;
    }
    else{
        return false;
    }
}
function validate_psw(){
    if(psw>6){
        return true;
    }
    else{
        false;
    }
}