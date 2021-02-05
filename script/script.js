$(document).ready(function() {
    $('.img-list').click(function() {
        let data = $(this).attr('data');
        $('.main-image').attr("src","./res/image"+ data +".jpg");
        $('.img-list').removeClass("img-selected")
        $('.'+ data).addClass("img-selected")
      
      
    });
})

