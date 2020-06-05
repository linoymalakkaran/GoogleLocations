
// detect IE browsers . paste this js into core js file

var _yes_its_IE = false;
// ie 11 detection http://jsfiddle.net/danield770/qn63n/2/ check footer
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);

b.setAttribute('data-platform', navigator.platform );
b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
var n = navigator.userAgent.indexOf("rv:11.0");
if(n > -1)
{
  _yes_its_IE = true;
}
else
{
  var n = navigator.userAgent.indexOf("MSIE 10.0");
  if(n > -1)
  {
    _yes_its_IE = true; 
  }
}

if(!_yes_its_IE)
{
  if (getInternetExplorerVersion() >= 10){
    _yes_its_IE = true;  
  };
}

function getInternetExplorerVersion(){
  
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer'){
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
    rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape'){
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
    rv = parseFloat( RegExp.$1 );
  }
  return rv;
}; 

$(document).ready(function(e) {

  $('#mySlider ul').bxSlider({
    auto: true,
    autoControls: true,
    pager:false
  });

  $('#stampsSection div.stampBox').bxSlider({
    auto: false,
    pager:false
  });

  $('#partnersSection div.partnerBox').bxSlider({
    auto: false,
    pager:false
  });

  $('header .dropdown').hover(function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  }, function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
  });
  $('.dropdown > a').click(function () {
      location.href = this.href;
  });

  // Quicktool Function
  $(".quicktoolBox .quicktools").on('click',function(e) {
    e.preventDefault();
    $(".quicktoolBox .dropdown-menu").toggle();
    if (!$(".quicktoolBox .dropdown-menu").is(':visible')) {
      $(".quicktools").addClass('closed');
    } else {
      $(".quicktools").removeClass('closed');
    }
  });

  $('.signUpForm').on('click', function(event) {
    event.stopPropagation();
  });

  $(".validate-tracking").on('click',function(event) {
    var validate = false;

    if (validate) {
      $(this).parent('form').submit();
    }
  });

	$('.decrease-font').on('click',function(event) {
		event.preventDefault();
		$('p','.contentBox').css('font-size','11px');
		$('p','.stampBox').css('font-size','11px');
		//$('p','.newsTxtInfo').css('font-size','11px');
		var cfz = $('p','.newsTxtInfo').css('font-size');
		cfz = parseInt(cfz)-parseInt(1);
		$('p','.newsTxtInfo').css('font-size',cfz+'px');
		
		var cfz = $('a','.newsTxtInfo').css('font-size');
		cfz = parseInt(cfz)-parseInt(1);
		$('a','.newsTxtInfo').css('font-size',cfz+'px');
	});
	$('.increase-font').on('click',function(event) {
		event.preventDefault();
		$('p','.contentBox').css('font-size','13px');
		$('p','.stampBox').css('font-size','13px');
		//$('p','.newsTxtInfo').css('font-size','13px');
		var cfz = $('p','.newsTxtInfo').css('font-size');
		cfz = parseInt(cfz)+parseInt(1);
		$('p','.newsTxtInfo').css('font-size',cfz+'px');
		
		var cfz = $('a','.newsTxtInfo').css('font-size');
		cfz = parseInt(cfz)+parseInt(1);
		$('a','.newsTxtInfo').css('font-size',cfz+'px');
	});
  
  // $(".serviceMenu .megaMenu").on('mouseover',function(e) {
    // $(this).trigger('click');

    // $('li a:first','.main-navigation').css('opacity','0.2');
    // $(".dropdown").removeClass("open");
    // $(".serviceMenu .dropdown-menu").toggle();
  // });

  $('.submitbtn').on('click', function(event) {
    event.stopPropagation();
    var _this = this;
    var val = $(_this).prev('input').val();
    console.log(val);
    if (val.length < 3) {
      // alert('insert at least 3 letters');
      $(_this).parent('form').addClass('error');
      $(_this).prev('input').focus();
    } else {
      $(_this).parent('form').submit();
    }
  });

  $('.input-keyword').on('blur',function(event) {
    $('.submitbtn').parent('form').removeClass('error');
  });

  $('.input-keyword').on('keyup', function(event) {
    var _this = this;
    if ($(this).val().length > 2) {
      $(_this).parent('form').removeClass('error');
    }
  });


// bxslider



// scripts for responsive layout
if($(window).width() < 768){
  var getQuickTool = $(".quicktoolBox").parents(".col-lg-2").html();
  $(".quicktoolBox").parents(".col-lg-2").remove();
  $("#mySlider").after(getQuickTool);
  
  var getFooter = $("#footer1").html();
  getFooter = $("#footer1").remove();
  $(".phoneNumber").after(getFooter);
  

var menu_slide_direction = window.menu_slide_direction;
  // drop down menu for mobile
  $('[data-submenu]').on('click',function(event) {
    /* Act on the event */
    event.stopPropagation();
    event.preventDefault();
    var _this = this;
    var sub_menu    = $(this).attr('data-submenu'); // .settings-menu
    var parent_menu   = $(this).attr('data-parent');  // .settingMenu

    var sub_ele     = $('.'+sub_menu);
    var parent_ele    = $('.'+sub_menu);

    if ($(this).hasClass('active')) {
      // $(sub_ele).slideToggle();
      $(sub_ele).toggle('slide', { direction: menu_slide_direction }, '400');
      $(this).toggleClass("active mobmenu-active");
      return;
    }

    $(".navbar-nav > li.active").removeClass("active mobmenu-active");
    // $(".navbar-nav > li.active").removeClass("mobmenu-active");

    $(".actionBar").hide();
    $(sub_ele).toggle('slide', { direction: menu_slide_direction }, '400', function() {
      // $('.mobmenu-active').removeClass('mobmenu-active');
      // if ($(_this).hasClass('mobmenu-active')) {
      //   $(_this).removeClass('mobmenu-active');
      // } else {
      //   $('.mobmenu-active').removeClass('mobmenu-active');
      //   $(_this).addClass('mobmenu-active');
      // }
      // if ($(sub_ele).is(':visible')) {
        // $(_this).addClass('mobmenu-active');
        // $(".submenu-active").removeClass('submenu-active');
      // }
    });
    $('.epg-submenu').hide();
    $('.back-mobmenu').hide();
    $(this).toggleClass("active mobmenu-active");
  });

  $('.trigger-submenu').on('click', function(event) {
    event.stopPropagation();
    $(this).parents('ul').addClass('submenu-active');
    // $(this).show("slide", { direction: "left" }, 1000);
    // $(this).toggle('slide', { direction: 'left' }, '400'
    $(this).next('.epg-submenu').toggle('slide', { direction: menu_slide_direction }, '400', function() {
    // $(this).next('.epg-submenu').slideToggle('400', function() {
      if ($('.level_2').is(':visible') || $('.level_1').is(':visible')) {
        $('.back-mobmenu').show();
      }
    });
  });

  $('.back-mobmenu').on('click',function(event) {
    event.stopPropagation();
    if ($('.level_2').is(':visible')) {
      $('.level_2').hide('slide', { direction: menu_slide_direction }, '400');
    } else if ($('.level_1').is(':visible')) {
      $('.level_1').hide('slide', { direction: menu_slide_direction }, '400');
    }

    setTimeout(function() {
      if (!$('.level_2').is(':visible') && !$('.level_1').is(':visible')) {
        $('.back-mobmenu').hide('fast');
      }
    }, 500);
    
  });

  $(document).click(function() {
    // alert('clicked outside');
    $('.mobmenu-active').trigger('click');
  });

  // $('.row').on('click', function(e) {
  //   // e.stopPropagation();
  //   if($(window).width() < 768){
  //     if ($('.actionBar').is(':visible')) {
  //       $('.actionBar').hide();
  //     }
  //   }
  // });

  $('#contentSlider div.bxsliderMain').bxSlider({
      auto: false,
      minSlides: 1,
    maxSlides: 3,
    slideWidth: 500,
    slideMargin: 10,
    pager:false
  });

}
else{
  $('#contentSlider div.bxsliderMain').bxSlider({
        auto: false,
        minSlides: 3,
      maxSlides: 3,
      slideWidth: 230,
      slideMargin: 10,
      pager:false
  }); 
}

	/* voting poll js */
	
	/* show vote form */
	$('#votingPoll > .iconBox').on('click', function() {
		
		$('#votingPoll > .txtPlace').hide();
		$("#voting_layer").show();
		$('#votingPoll > .hide_voting').css("display", "block");
	});
	
	/* hide vote box*/
	$('#votingPoll > .hide_voting').on('click', function() {
		
		$('#votingPoll > .hide_voting').css("display", "none");
		
		$("#voting_layer").hide();
		
		$('#votingPoll > .txtPlace').show();
		
	});
	
	/*show result */
	$('#view_results').on('click', function() {
		
		// do your ajax submission and bring the result 
		$.ajax({url: "./inc/vote_casting.php?t=show", success: function(result){
			 
			$('#vote_form').hide();
			$("#vote_result .result_here").html(result);
			$("#vote_result").fadeIn();
		}});
	});
	
	/*submit vote */
	$('#vote_here').on('click', function() {
		
		var vote = $('input[name=voting]:checked', '#voteform').val();
	
		// do your ajax submission and bring the result 
		$.ajax({url: "./inc/vote_casting.php?t=submit&vote="+vote, success: function(result){
			 
			$('#vote_form').hide();
			$("#vote_result .result_here").html(result);
			$("#vote_result").fadeIn();
		}});
	});
	
	/*go back to vote  form */
	
	$('#back_to_voting').on('click', function() {
		
		$("#vote_result .result_here").html("");
		$("#vote_result").hide();
		$('#vote_form').fadeIn();
	});
	
	
	// SUBPAGES - mobile toggle menus on subpages.
	
	$('#toggle_menus').on('click', function() {
		
		$('#subpage_menus_wrap').toggle();
	}); 
	
	/* subpages header image responsive resizing */
	
  var imageHeight, wrapperHeight, overlap, container = $('.image-wrap');  

  function centerImage() {
      imageHeight = container.find('img').height();
      wrapperHeight = container.height();
      overlap = (wrapperHeight - imageHeight) / 2;
      container.find('img').css('margin-top', overlap);
  }
   	  
  $(window).on("load resize", centerImage);
     
	var el = document.getElementById('wrapper');
	
  if ($('.home').length == 0)
  	if (el && el.addEventListener) {  
  		el.addEventListener("webkitTransitionEnd", centerImage, false); // Webkit event
  		el.addEventListener("transitionend", centerImage, false); // FF event
  		el.addEventListener("oTransitionEnd", centerImage, false); // Opera event
  	}
	
	/// end image resizng 
	
	
	// dropwdown select change 
	$(".form_wrap .dropdown-menu li a").click(function(){
		
		var selText = $(this).text();
		// <span class="fleft">select emirate</span>
		// <span class="caret fright"></span>
		$(this).parents('.form_dropdown').find('.dropdown-toggle').html( '<span class="fleft">' + selText+'</span> <span class="caret fright"></span>');
	});
	
});