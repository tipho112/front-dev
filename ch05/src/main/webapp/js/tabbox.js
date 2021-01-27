var TabBox = {
	onWindowLoad: function() {
		let divTabBox = document.getElementsByClassName('tab-box')[0];
		let ulTabBox = divTabBox.childNodes[1];
	
		let liTabs = ulTabBox.getElementsByTagName('li');
		Array.prototype.forEach.call(liTabs, function(li) {
			li.addEventListener('click', TabBox.onTabClicked);
		});
	},
	onTabClicked: function() {
		let liSelecteds = document.getElementsByClassName('selected');
		(liSelecteds.length == 1) && (liSelecteds[0].className = '');
	
		this.className = "selected";
	},
	init: function() {
		let _t = this;
		window.addEventListener('load', _t.onWindowLoad);
	}
}