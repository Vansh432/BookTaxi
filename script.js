console.log("hello Taxi websites");

//close side bar--->

let sideBar=document.getElementById('sideBar');
let sideBarTaxi=document.getElementById('sideBarTaxi');
function closeSideBar(){
      sideBar.style.right='-30%'
      sideBarTaxi.style.width='0%'
      console.log('hello ')
}
function sideBarOpen(){
    sideBar.style.right='0%';
    sideBarTaxi.style.width='100%'
}



//service box put using json data-->
let serviceBox=document.getElementById('serviceBox');
fetch('serviceData.json').then((response)=>{
    return response.json();
}).then((data)=>{
putService(data);
});

function putService(data){
 
   for(let i in data){
    serviceBox.innerHTML+=` <div class="serBox" data-aos="slide-up">
    <div class="serviceImage">
       <img src="${data[i].Img}" alt="">
    </div>
    <div class="serviceBoxDescription">
       <h3>${data[i].Heading}</h3>
       <p>${data[i].decription}</p>
       <a href="#bookForm" class="bookTaxi"><span class="bookText"> Book Taxi </span></a>
    </div>
   </div>`
   }
}



// form details sending

function sendMail(){

   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}
