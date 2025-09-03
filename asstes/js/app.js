


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        items:5,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});


const grid = document.querySelector('.grid');

  // Init Isotope
  const iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: { columnWidth: '.grid-sizer' },
    getSortData: {
      title: '[data-title]',
      price: '[data-price] parseInt'
    }
  });

  // Layout after each image loads
  imagesLoaded(grid, () => iso.layout());

  // Init LightGallery on the grid (so all <a> inside work)
  lightGallery(grid, {
    selector: 'a', // every anchor in grid
    plugins: [lgZoom, lgThumbnail],
    speed: 400
  });

 
    