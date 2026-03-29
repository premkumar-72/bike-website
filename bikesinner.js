
let img1=document.getElementById('img1');

 let icon1=document.getElementsByClassName('icon1')[0];
 let icon2=document.getElementsByClassName('icon2')[0];
 let icon3=document.getElementsByClassName('icon3')[0];
 let icon4=document.getElementsByClassName('icon4')[0];
 let icon5=document.getElementsByClassName('icon5')[0];

 let color=document.getElementById( 'color');


console.log(icon1)
function rem(){
    icon1.classList.remove('active');
    icon2.classList.remove('active');
    icon3.classList.remove('active');
    icon4.classList.remove('active');
    icon5.classList.remove('active');

}
function fun(a,b,c){

img1.src=a;

if (b==1){
    rem();
    icon1.classList.add('active'); 
    color.innerText=c;
}
if (b==2){
    rem();
    icon2.classList.add('active'); 
    color.innerText=c;
    
}
if (b==3){
    rem();
    icon3.classList.add('active'); 
    color.innerText=c;
    
}
if (b==4){
    rem();
    icon4.classList.add('active'); 
    color.innerText=c;
    
}
if (b==5){
    rem();
    icon5.classList.add('active'); 
    color.innerText=c;
    
}

}

let view=document.getElementById('view')
let para=document.getElementsByClassName('para')[0];
let sta=false;
function vie(){
    sta=!sta;
    if(sta==true){
        para.style.height='auto';
        view.innerText="Less"
    }
    if(sta==false){
           para.style.height='50px';
        view.innerText="Full view"
    }
        
}
let tab=document.getElementsByClassName('tab')[0];
let points=document.getElementsByClassName('points')[0];
let priceva=document.getElementsByClassName('priceva')[0];
function spes(){
    tab.classList.add('specsre');
    points.classList.add('specsre');
    priceva.classList.add('specsre');
    

}
  points.classList.add('specsre');
    priceva.classList.add('specsre');
function specs(a){
    if(a==1){
      spes();
       tab.classList.add('points-com');
       tab.classList.remove('specsre')
    }
        if(a==2){
      spes();
      points.classList.add('points-com');
    points.classList.remove('specsre');

    //    points.style.display='block';
    }
        if(a==3){
      spes();
           priceva.classList.add('points-com')
    priceva.classList.remove('specsre');

    //    priceva.style.display='block';
         
    }
    
    
}