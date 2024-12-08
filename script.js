let menu = document.getElementById("menu-link");
let navbar = document.getElementById("nav-id");
let mes = document.getElementById('message');
let mes2 = document.getElementById('message2');
let rd = document.getElementById('reserve-date');
let rt = document.getElementById('reserve-time');
let rs = document.getElementById('reserve-size');
let rtb = document.getElementById('reserve-table');

let option1 = document.getElementById('option1');
let name1 = document.getElementById('reserve-name');
let email = document.getElementById('reserve-email');
let feed = document.getElementById("feedback");
let feed2 = document.getElementById("feedback2");

let user_name = document.getElementById('user-name');
let user_email = document.getElementById('user-email');
let user_phone = document.getElementById('user-phone');
let user_address = document.getElementById('user-add');
let user_message = document.getElementById('user-mess');
// navbar toggle  toggle
function toggle() {
  if ((navbar.style.height == "80px")) {
    menu.style.display = "block";
    navbar.style.height = '380px';
  } 
  else{
    menu.style.display = 'none';
    navbar.style.height = '80px';
  }
  navbar.style.transition = 'all 0.3s ease' ;
}
// success and danger message displaying function
function messageToggle(event){
  event.preventDefault()
  if( rd.value === "" || rt.value === "" || rs.value === "" || rtb.value === "" ||name1.value === "" || email.value === ""){
   mes2.style.display = 'block';
   mes2.style.color = '#dc3545';
  }
  else if(rd.value ===''){
    alert('Enter date')
  }
  else if(rt.value === ''){
    alert('Enter time')
  }
  else if(rtb.value === ''){
    alert('Enter no of tables')
  }
  else if(rs.value === ''){
    alert('Enter table size')
  }
  else if(name1.value === ""||email.value === ""){
    mes.style.display = 'none'
  }
  else{
    mes.style.display = 'block';
    mes.style.margin = '10px';
    mes.style.color = '#28a745'
    mes2.style.display = 'none'
  }
}

// reset button resets every fields
function resetMessage(event){
  event.preventDefault();
  mes2.style.display = 'none';
  mes.style.display = 'none';
  rd.value = '';
  rt.value = option1.value;
  rs.value = '';
  rtb.value = '';
  name1.value = '';
  email.value = '';
}

// submit function for contact forms
function submitfunction(event) {
  event.preventDefault()
  if(user_name.value === "" || user_email.value === "" || user_phone.value === "" || user_message.value === "" || user_address.value === ""){
      feed2.style.display = 'block'
      feed2.style.color = '#dc3545'
      feed2.style.textAlign = 'center'
  }
  else{
    feed.style.display = 'block'
    feed.style.color = '#28a745'
    feed.style.margin = '10px'
    feed.style.textAlign = 'center'
    feed2.style.display = 'none'
    
  }
}
// reset for contact 
function resetfunction(event){
  event.preventDefault();
  feed.style.display = 'none'
  feed2.style.display = 'none'
  user_name.value = ''
  user_email.value = ''
  user_phone.value = ''
  user_message.value = ''
  user_address.value = ''
}