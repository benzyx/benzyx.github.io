function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function toggleAbout() {
	var about_elem = document.getElementById("about");
	var menu_elem = document.getElementById("menu");

	if (menu.style.display == 'none') {
		// Currently showing About, so show Menu.

		// First, hide about
		about_elem.className = 'hidden';
		setTimeout(function(){
			about_elem.style.display = 'none';

			// Then, show About
			menu_elem.style.display = 'block';
			menu_elem.className = 'visible';
		}, 200);
		
	}
	else {
		// Currently showing Menu, so show About.

		// First, hide Menu
		menu_elem.className = 'hidden';
		setTimeout(function(){
			menu_elem.style.display = 'none';

			// Then, show About
			about_elem.style.display = 'block';
			about_elem.className = 'visible';
		}, 200);
		
	}
}

var togglers = document.getElementsByClassName("toggle-about");
for (var i = 0; i < togglers.length; i++) {
	togglers[i].addEventListener('click', toggleAbout, false);
}


