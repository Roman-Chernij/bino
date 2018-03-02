function blogScroll(item) {
    var myScroll;
    loaded ();
    function loaded () {
    	myScroll = new IScroll(item, {
    		scrollbars: true,
    		mouseWheel: true,
    		interactiveScrollbars: true,
    		shrinkScrollbars: 'scale',
    		fadeScrollbars: true
    	});
    }

}



// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
// 	capture: false,
// 	passive: false
// } : false);

function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}
