


// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   



docReady(function() {

	// functions
	// go
	// here

  const footnoteButtons = document.querySelectorAll('.footnote a');
    
  function showFootnotes() {
    let footnoteToShow = this.parentNode.nextElementSibling;
    console.log(footnoteToShow);
    footnoteToShow.classList.toggle('active');
  } 

  footnoteButtons.forEach(function(button) {
    button.addEventListener('click', showFootnotes);
  });

  unBlurOnScrollInView();

});

function unBlurOnScrollInView() {
  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  const unBlurImage = (images) => {
    images.forEach((image) => {
      console.log(image);
      if (image.isIntersecting) {
        image.target.classList.add('unblur');
      } else {
        image.target.classList.remove('unblur');
      }
    });
  };

  const observer = new IntersectionObserver(unBlurImage, options);

  const imagesToWatch = document.querySelectorAll('img');

  imagesToWatch.forEach((image) => {
    observer.observe(image)
  });
}
