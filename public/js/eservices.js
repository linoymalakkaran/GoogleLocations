$(document).ready(function (e) {

	var hs;

	$('[data-toggle-btn]').on('click', function (event) {

		event.stopPropagation();
		event.preventDefault();
		var _this = this;

		var access_id = $(this).attr('data-toggle-btn'); // user_account 

		var _section = $(".form_wrap").find("[data-form-section='" + access_id + "']");

		if (_section.css('visibility') === 'visible') {

			_section.css({ "visibility": "hidden", 'position': 'absolute' }); // data-form-section 
			_section.addClass("remove_block");

			// unchanged. 
			$(_this).find('i').removeClass("fa-chevron-down").addClass("fa-chevron-up"); 	// fa-chevron-down 
			$(_this).parent().parent().removeClass('isopen');
		}
		else {
			_section.css({ 'position': 'relative', "visibility": "visible" });
			_section.removeClass("remove_block");

			// unchanged. 
			$(_this).find('i').removeClass("fa-chevron-up").addClass("fa-chevron-down"); 	// fa-chevron-down 
			$(_this).parent().parent().addClass('isopen');
		}
	});

	$('#toggle_eservice_menu').on('click', function () {
		$('#eservices_menus_wrap').toggle();
	});

});