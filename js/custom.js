var myCarousel = document.querySelector('#carouselIESManacor')
var carousel = new bootstrap.Carousel(myCarousel,{
    interval: false 
})  
document.querySelector("#anterior").addEventListener('click',function(){
    carousel.prev();
})
document.querySelector("#seguent").addEventListener('click',function(){
    carousel.next();
})

// My modal
var myModal = document.querySelector('#myModal');
var modal = new bootstrap.Modal(myModal,{
    backdrop: 'static'
})

document.querySelector("#openmodal").addEventListener('click',function(){
    modal.show()
})
