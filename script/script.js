$(document).ready(function() {
 

    //  Setup Color Picker
    var color = ['yellow',"black","maroon","grey","green","blue","pink", "purple"]
    for (var i = 0 ; i < color.length ; i++) {
        $('.colors').append("<div class='color' style='background-color:" + color[i] + "'"+ "data='" + color[i] +"'" + "></div>");
    }

    //  Replace image color based on the value 
    $('.color').click(function () {
        let data = $(this).attr('data');
        $('.main-image').attr("src","./res/"+ data +".jpg");

    });

    // Get total items

    let s = 0 
    let m = 0 
    let l= 0 
    let xl = 0 
    let xxl = 0 
    let xxxl = 0 


   let x =  $('.price').html();
   console.log(x)


   $('.count').on('propertychange input',function() {

     data = $(this).attr('data');
     if (data === "s") {
      
        temp = $(this).val();
        s = parseInt(temp)
        console.log(s)
     }
     else if (data === "m"){
    
        temp = $(this).val();
        m = parseInt(temp)
        console.log(m)
    }
    else if (data === "l"){
      
        temp = $(this).val();
        l = parseInt(temp)
        console.log(l)
    }
    else if (data === "xl"){
      
        temp = $(this).val();
        xl = parseInt(temp)
        console.log(xl)
    }
    else if (data === "2xl"){
      
        temp = $(this).val();
        xxl = parseInt(temp)
        console.log(xxl)
    }
    else if (data === "3xl"){
      
        temp = $(this).val();
        xxxl = parseInt(temp)
        console.log(xxxl)
    }

    
    let total = (s+m+l+xl+xxl+xxxl)
    $('.price').text(total);
    
    //  Total Price
   $(".total-price").text(total*48.56)

   });

//    Print Method
   $(".print-btn").click(function() {
    $(".print-btn").removeClass("selected")
        $(this).addClass('selected')

   });





















    
})

