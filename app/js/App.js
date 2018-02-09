function App() {
	this.init();
}




App.prototype = Object.create(Helper.prototype);
App.prototype.init = function () {
  new Mmenu();
}


window.addEventListener( "DOMContentLoaded", function() {

	new App();

	slider();
	filter ({
		blockFilter: '.works',
		btnFilterBlock: '.works-filter',
		btnFilterCheck: {
			tag: 'A',
			dataAttr: 'data-filter-value'
		},
		productFilterBox: '.works-content',
		productFilterItem: '.works-holder',
		startRespons: 767
	});
});
