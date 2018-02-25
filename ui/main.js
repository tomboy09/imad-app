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
//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //create a request object 
    var request=new XMLHttpRequest();
 //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
               var counter= request.responseText;
               counter=counter+1;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        
    };
    //make the request
    request.open('GET','http://http://abhishekpandey09041998.imad.hasura-app.io/counter',true);
    request.send(null);
};

