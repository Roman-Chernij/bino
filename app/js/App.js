function App() {
	this.init();
}




App.prototype = Object.create(Helper.prototype);
App.prototype.init = function () {
  new Mmenu({
	  wrapper:'.wrapper-inner',
	  wrapperMobi: '.wrapper-mobi-nav',
	  navWraper: '.nav',
	  nav: '.nav-list',
	  run: '767',
	  btn: {
		  item:'SPAN',
		  attr: 'data-btn',
		  value: 'mobi-btn',
		  className: '.nav-mobile__item'
	  }
  });
}

window.addEventListener( "DOMContentLoaded", function() {

	new App();

	slider();

	filter ({
		blockFilter: '.works',
		filterBlock: '.works-filter-holder',
		btnFilterCheck: {
			tag: 'A',
			dataAttr: 'data-filter-value',
			dataTarget: 'data-filter-target'
		},
		productFilterBox: '.works-content',
		productFilterItem: '.works-holder',
		startRespons: 767,
		selector: '.works-selector',
		defaultItem: 0
	});

	blogScroll('.blog-holder__description')
});
