// // geting box 1
const Box1_hidden = document.getElementById('Box1-hidden');
const Box_2_hidden = document.getElementById('Box_2_hidden');
const Box_2_Container = document.getElementById('Box_2_Container');
const Box_3_hidden = document.getElementById('Box_3_hidden');
const  About_Me = document.getElementById("About_Me");

 Box1_hidden.style.display ='none';
 Box_3_hidden.style.display = 'none';
 About_Me.style.display = 'none';

 //getting container 1
 let Boxt1_container = document.getElementById('box1');
 Boxt1_container.addEventListener('click', function(){
 Box1_hidden.style.display ='block';
 Box_3_hidden.style.display ='none';
 Box_2_hidden.style.display ='none';
 About_Me.style.display = 'none';
 }) 

//getting Box 2 Container
Box_2_Container.addEventListener('click',function(){
    Box_2_hidden.style.display ='block';
    Box1_hidden.style.display='none';
    About_Me.style.display = 'none';
    Box_3_hidden.style.display = 'none';
})

// getting Box3 container
  const Box_3_Container = document.getElementById('Box_3_Container');
  Box_3_Container.addEventListener("click",function(){
    Box_3_hidden.style.display ="block";
    Box_2_hidden.style.display = "none";
    About_Me.style.display = 'none';
    Box1_hidden.style.display ='none';
  }) 

//   About me Box Fixing it hidden part when you will click on add to card button it will open and for close click again on upper boxes 
// Button Add To Card selecting
const Add_To_Card = document.getElementById("btn2");

Add_To_Card.addEventListener('click', function(){
    About_Me.style.display ='block'
}) 
 

 