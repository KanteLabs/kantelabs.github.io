
var goTo = function(url) {
	var win=window.open(url, '_blank');
  	win.focus();
}

var scrollToSection = function(e,t){
	var paddingTop = $(e).css('padding-top');
	paddingTop = parseInt(paddingTop, 10);
    var header = $('header').height();
	$("html, body").animate({
		scrollTop: $(e).offset().top - paddingTop - header + 'px'
	},t);
}

var moveMarker = function(el) {
	$('.active').removeClass('active');
    var width = $(el).width();
    var height = $(el).height();
    $(el).addClass('active');
    var left = $(el).offset().left;
    $('#marker').stop().animate( { top: top + 'px', left: left + 'px'}, 1000 );
    $('#marker').width(width);
}


if ($(window).width() >= 768) {
    var marker = document.createElement('div');
    $(marker).attr('id', 'marker');
    $('nav').append(marker);
    $('li').click( function() { 
        moveMarker(this);
    });
    var position = $('.active').position();
    var height = $('.active').height();
    var width = $('.active').width();
    $('#marker').css("top", position.top + height + 10);
    $('#marker').css("left", position.left);
    $('#marker').width(width);

    $('img').load(function() {
        var project = $(this).closest('.project');
        $(project).height($(this).height() + 150 + 'px');
    });
}

if ($(window).width() < 400) {
    var header = $('header').height();
    $('#home').attr('padding-top', header + 20 + 'px');
}


