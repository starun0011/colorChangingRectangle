var rect = document.querySelector('#center');
var body = document.querySelector('body');



rect.addEventListener("mousemove",function(mouseDetails){
    // document.getElementById("alert").style.display = "none"  ;
    gsap.to('#alert',{
        display:"none",
        delay:-5,
    });
    var rectangleDetails = rect.getBoundingClientRect();
    var insiderectval = mouseDetails.clientX - rectangleDetails.left;

    
    
    
    if (insiderectval < rectangleDetails.width/2){
        var redValue = gsap.utils.mapRange(0, rectangleDetails.width/2, 255, 0, insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redValue},0,0)`,
            ease:"power4",
        })
        
    }
    if (insiderectval > rectangleDetails.width/2){
        var blueValue = gsap.utils.mapRange(rectangleDetails.width/2, rectangleDetails.width, 0, 255, insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueValue})`,
            ease:"power4",
        })
    }


    
   
});

rect.addEventListener("mouseleave",function(){

    gsap.to('#alert',{
        display:"flex",  
    })
    gsap.to(rect,{
        backgroundColor:"black",
        ease:"power4",
        
    })
    
   
});



