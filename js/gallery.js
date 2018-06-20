var $galBtn = document.querySelectorAll('.gal_btn');
var $highImg = document.querySelector('#sub_high_img');



function galClick(id){

    function galleryImage(event){
      //console.log('galleryImage');
      event.preventDefault();

      $galBtn[id]
      
      $highImg.style.background = 'url(img/img_' + id + '.jpg) no-repeat center center'
      $highImg.style.backgroundSize = 'cover'

    }

    $galBtn[id].addEventListener('click', galleryImage);
}



function selectGal(){

    for(var i = 0; i < $galBtn.length; i++){
        galClick(i);
    }
}

selectGal ();