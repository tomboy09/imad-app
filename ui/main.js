console.log('Loaded!');

//move the image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft+5;
  img.style.marginLeft=marginLeft+'px';
  
  
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};
//move image
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //make a request to the counter end point 
    var request=new XMLhttpRequest();
    
    
    
    //capture the response and store it in a variable
    
    
    //render the varible in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHtml=counter.toString();
};

