$(function(){
	$('article').each(function(i, item) {
		testCases.forEach(function(testCase) {
			createOptionsMenu($(item), testCase);
		});
	});
});

function createOptionsMenu(el, options) {
	var menu = $('<menu class="options">');
	var li = $('<li>');

	function handleClick() {
		var option = $(this);

		option.attr('class', option.data('originalClasses'));
		option.data('instructions')
			.forEach(function(instruction) {
				var target = $(instruction.selector, el);
				var lastUsed = target.data('lastUsed');

				if(lastUsed) {
					option.closest('menu').find('li').removeClass('active');
				}

				target
					.removeClass(lastUsed)
					.data('lastUsed', instruction.toggle)
					.toggleClass(instruction.toggle);
			});

		option.toggleClass('active');
	}

	for(var name in options) {
		li.clone()
			.text(name)
			.data('instructions', options[name].instructions)
			.appendTo(menu)
			.on('click', handleClick);
	}

	el.find('header').append(menu);
}
