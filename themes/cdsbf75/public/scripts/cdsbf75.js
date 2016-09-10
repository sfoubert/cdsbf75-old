  $(document).ready(function(){

    // Auto-hide bootstrap navbar
    $("nav.navbar-fixed-top").autoHidingNavbar();

    // backstretch
    $(".page-home").backstretch([
        "/images/background1.jpg",
        "/images/background2.jpg",
        "/images/background3.jpg"
    ], {duration: 3000, fade: 750});

    // fancybox
		$(".fancybox").fancybox({
    beforeShow : function() {
        var alt = this.element.find('img').attr('alt');
        this.inner.find('img').attr('alt', alt);
        this.title = alt;
        }
    });

    $(".various").fancybox({
      maxWidth: 800,
      maxHeight: 600,
      fitToView: false,
      width: '70%',
      height: '70%',
      autoSize: false,
      closeClick: false,
      openEffect: 'none',
      closeEffect: 'none'
    });

  });
