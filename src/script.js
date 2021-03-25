$(function(){

    // Navbar
   let links =  $('.nav-ul').find(' li a')

   links.mouseenter(function(){
       $(this).css({backgroundColor:'#c2bebe'})
   })
   links.mouseleave(function(){
       $(this).css({backgroundColor:'inherit'})
   })
    



    // Making carousel 
   let gallery = $('#home').find("img").first()

   let images =[
       "img/New_York_River_Road.jpeg",
       "img/UpState.jpeg",
       "img/kucab8gricix.jpeg",
       "img/Wat-park.jpeg"
   ]

   let i = 0 


   setInterval(function(){
    i = (i +1) % images.length
    gallery.fadeOut(function(){
        $(this).attr('src', images[i]).fadeIn()
    })
   },3600)

//    End of carousel

// ======About Page Image hover=====

let aboutImages = $('.right-about').find('img')

aboutImages.mouseenter(function(){
    $(this).stop().css({
        width:'400px',
        zIndex:2
    })
})

aboutImages.mouseleave(function(){
    $(this).stop().css({
        zIndex:0,
        width:'310px'
    })
})

// =====About end===========



// ==========  Services  ==========


let button = $('.price').find('button')

button.mouseenter(function(){
    $(this).css({
        boxShadow:' 5px 10px 20px'
    })
})
button.mouseleave(function(){
    $(this).css({
        boxShadow:'none'
    })
})
button.mousedown(function(){
    $(this).css({
        width:'45%',
        height:'65px',
        fontSize:'17px'
    })
})
button.mouseup(function(){
    $(this).css({
        width:'50%',
        height:'70px',
        fontSize:'20px'
    })
})





// ==========End of services==========

})
