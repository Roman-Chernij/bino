function Mmenu(setings) {
  this.setings = setings;
  this.nav = document.querySelector(this.setings.navWraper);
  this.navList = this.nav.querySelector(this.setings.nav);
  this.wrapperMobiNav = document.querySelector (this.setings.wrapperMobi);
  this.wrapperContent = document.querySelector (this.setings.wrapper);
  this.btn = this.nav.querySelector(this.setings.btn.className);

  this.init ();


}

Mmenu.prototype = Object.create(App.prototype);

Mmenu.prototype.init = function () {

  let widthWindow = document.body.clientWidth;


  this.nav.addEventListener('click', this.mobiIconClick.bind(this));

  window.addEventListener('resize', this.mobiResize.bind(this));
}


Mmenu.prototype.mobiIconClick = function (e) {
    const target = e && e.target || e.srcElement,
          targetAttr = target.getAttribute(this.setings.btn.attr);

        if(target.tagName != this.setings.btn.item || targetAttr != this.setings.btn.value) return;

        this.mobiTransform (target);
}

Mmenu.prototype.mobiTransform = function (elem) {

    const targetStatus = elem.getAttribute('data-status'),
          widthMobi = this.wrapperMobiNav.clientWidth;

    if(targetStatus === 'true') {
      this.wrapperContent.style.cssText += `transform: translateX(0px);`;
      elem.setAttribute('data-status', 'false');
    } else {
      this.wrapperContent.style.cssText += `transform: translateX(-${widthMobi}px);`
      elem.setAttribute('data-status', 'true')
    }
}


Mmenu.prototype.mobiResize = function (elem) {

    this.wrapperContent.style.cssText += `transform: translateX(0px);`;
    this.btn.setAttribute('data-status', 'false');
}
