function Mmenu() {
  this.nav = document.querySelector('.nav');
  this.navList = this.nav.querySelector('.nav-list');
  this.wrapperMobiNav = document.querySelector ('.wrapper-mobi-nav');
  this.wrapperContent = document.querySelector ('.wrapper-inner');

  this.init ();
}


Mmenu.prototype = Object.create(App.prototype);

Mmenu.prototype.init = function () {

  let widthWindow = document.body.clientWidth;


  this.nav.addEventListener('click', this.modiIconClick.bind(this));
}


Mmenu.prototype.modiIconClick = function (e) {
    let target = e && e.target || e.srcElement,
        targetAttr = target.getAttribute('data-btn');

        if(target.tagName != 'SPAN' || targetAttr !='mobi-btn') return;

        let targetStatus = target.getAttribute('data-status'),
            widthMobi = this.wrapperMobiNav.clientWidth;

        if(targetStatus === 'true') {
          this.wrapperContent.style.cssText += `transform: translateX(0px);`;
          target.setAttribute('data-status', 'false');
        } else {
          this.wrapperContent.style.cssText += `transform: translateX(-${widthMobi}px);`
          target.setAttribute('data-status', 'true')
        }





    console.log('targetStatus', targetStatus);

}
