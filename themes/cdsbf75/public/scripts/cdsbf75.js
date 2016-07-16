  $(document).ready(function(){

    // Auto-hide bootstrap navbar
    $("nav.navbar-fixed-top").autoHidingNavbar();

    // backstretch
    $(".page-home").backstretch("/images/background.jpg");

    // fancybox
		$(".fancybox").fancybox({
    beforeShow : function() {
        var alt = this.element.find('img').attr('alt');
        this.inner.find('img').attr('alt', alt);
        this.title = alt;
        }
    });

  });
