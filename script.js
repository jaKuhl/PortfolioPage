var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    // Access color information from data attribute
    var colors = JSON.parse(this.el.getAttribute('data-color'));
    var color = colors[this.loopNum % colors.length]; // get color based on loop counter
  
    // Include pipe character before the text
    this.el.innerHTML = '<span class="wrap" style="color: ' + color + '">' + this.txt + '</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
};
  
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      
      // Add color information to the data attribute (optional)
      var colors = ['#FFBC66', '#6CB4F5', '#AA76A6', '#B28C60', '#178783']; // Define an array of colors
      elements[i].setAttribute('data-color', JSON.stringify(colors));
  
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
};
  




let swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
  nextEl:'.swiper-button-next',
  prevEl:'.swiper-button-prev'
  },
  
pagination: {
  el:'.swiper-pagination',
  clickable: true,
  dynamicBullets: true
}
});
  