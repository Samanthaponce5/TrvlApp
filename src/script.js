$(function(){

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
   },3400)

//    End of carousel

})
