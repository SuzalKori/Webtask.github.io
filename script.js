
const signup_front_page = document.getElementById('signup_front_page');
const block = document.getElementById('block');
const front_page = document.getElementById('front_page');
signup_front_page.addEventListener('click',() => {
    block.classList.add('show');
    front_page.classList.add('hide');
});

const exit = document.getElementById('exit');
exit.addEventListener('click',() =>{
    block.classList.remove('show');
    front_page.classList.remove('hide');
});


let signUp = document.getElementById('signup_button');
signUp.addEventListener('click',()=>{
    let firstName = document.getElementById("firstname_input").value;
    let lastName = document.getElementById('lastname_input').value;
    let _name = firstName + lastName;
    let email = document.getElementById('Email_input').value;
    let password = document.getElementById('input_pass').value;
    let sport = document.getElementById('sport').value;
    let contact = document.getElementById('contact_input').value;
    let Gender;
    document.getElementsByName('Gender')
        .forEach(radio => {
            if(radio.checked){
                Gender = radio.value;
            }
        });
    let _namelength = 0;
    let idx;
    for(let i=0;i<_name.length;i++){
        if((_name[i]>='a'&&_name[i]<='z')||
            (_name[i]>='A'&&_name[i]<='Z')){
                _namelength++;
            }
    }
    if(_namelength<5){
       alert('Error!\nName should contain minimun 5 alphabets');
       return;
    }
    else{
       let _name2 = _name.toLowerCase();
       let _name3 = _name2.trim();
        for(let i=0;i<_name.length;i++){
            if(_name3[i]>'z'||_name3[i]<'a'){
                alert('Error!\nName should not contain numeric digits or any special character');
                return;
            }
        }
    }
    for(let i=0;i<email.length;i++){
        if(email[i]=='@'){
            let gmail='@';
            for(let j=i+1;j<i+6;j++){
                gmail+=email[j];
                idx=j;
            }
            if(gmail!="@gmail"){
                alert('Email Error!\nOnly Gmail account is allowed');
                return;
            }
            break;
        }
    }
    if(password.length<8){
        alert('Password Error!\nPassword should be of minimum 8 characters');
        return;
    }
    if(contact.length!=10){
        alert('Error!\nPhone number should be of 10 digits');
        return;
    }
    else{
        for(let i=0;i<10;i++){
            if(contact[i]>'9'||contact[i]<'0'){
                alert('Error!\nPhone number should contain numeric characters');
                return;
            }
        }
    }
    if(sport=="none"){
        alert('Unfilled box\nChoose a Sport');
        return;
    }
    if(Gender!="Male"&&Gender!="Female"){
        alert('Error!\nChoose your gender');
        return;
    }
    
    //Printing details to console
    let firstName2 = firstName.trim();
    let lastName2 = lastName.trim();
    console.log('Name :',firstName2,lastName2,'\n');
    let email2 = email.slice(0,idx+1);                                                     
    email2+=".com";
    console.log('Email :',email2,'\n');
    console.log('Password :',password,'\n');
    console.log('Sport :',sport,'\n');
    console.log('Gender :',Gender);
    console.log('Contact : ',contact);

    alert('You have signed up successfully.\nNow you are directed to Home page.');
    block.classList.remove('show');                                                         
    front_page.classList.remove('hide');                                                    
    
});


