document.addEventListener('DOMContentLoaded', function () {
  window.slider = $('.parent-slider').unslider({
    nav: false,
    arrows: {
      prev: '<a class="unslider-arrow prev"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 501.5 501.5"><g><path fill="#ccc" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg></a>',
      next: '<a class="unslider-arrow next"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 501.5 501.5"><g><path fill="#ccc" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg></a>'
    }
  });
	$('.child-slider').unslider({ autoplay: true, nav: false, arrows: false, delay: 5000 });

  window.slider.on('unslider.change', function(event, index, slide) {
  	if(!slide.parent().parent().hasClass('child-slider')) {
      slide.find('.child-slider').unslider('animate:first');
      // slide.find('.child-slider').unslider({ autoplay: true, nav: false, arrows: false, delay: 4000});
    }
  });

  // var slider = document.querySelector('.parent-slider');
  //
  // function nextSlider(currentSlide) {
  //   if (currentSlide && currentSlide.target.className.indexOf('child-slider') !== -1) {
  //     console.log('child next');
  //   } else {
  //     var slides = document.getElementsByClassName('parent-slide');
  //
  //     if (window.childSlider) {
  //       window.childSlider.destroy();
  //       clearInterval(window.sliderInterval);
  //       window.childSlider = null;
  //       console.log("Slider found and destroyed");
  //     }
  //
  //     // Create new slider on child element
  //     var slideNum = currentSlide ? currentSlide.detail.currentSlide : 0;
  //     var childSlider = slides[slideNum].getElementsByClassName('child-slider')[0];
  //     var sliderIndex = 0;
  //
  //     window.childSlider = lory(childSlider, {
  //       rewind: true,
  //       enableMouseEvents: false,
  //       classNamePrevCtrl: 'child-prev',
  //       classNameNextCtrl: 'child-next',
  //     });
  //
  //     // Set interval so slider loops automatically
  //     window.sliderInterval = setInterval(function() {
  //       window.childSlider.next();
  //       sliderIndex++;
  //       if(sliderIndex == 3) {
  //         window.childSlider.reset();
  //         sliderIndex = 0;
  //       }
  //     }, 3000);
  //   }
  // }
  //
  // slider.addEventListener('after.lory.slide', nextSlider);
  //
  // window.parentSlider = lory(slider, {
  //   rewind: false
  // });
  //
  // nextSlider(false);

});
