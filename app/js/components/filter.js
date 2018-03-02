let  filter = (setings) => {
  let parent = document.querySelector(setings.blockFilter);

    if (!parent) return;

  let filterBlock = parent.querySelector(setings.filterBlock),
      productFilterBox = parent.querySelector(setings.productFil),
      selector = parent.querySelector(setings.selector),
      content = parent.querySelector(setings.productFilterBox).children,
      status = true;

      runFilter();
      console.log(content);
      filterBlock.addEventListener('click', addEventClick);
        // window.addEventListener('resize', runFilter);

  function addEventClick (e) {
    let target = e && e.target || e.srcElement,
        targetAttr = target.getAttribute(setings.btnFilterCheck.dataAttr);

        if (target.tagName == setings.btnFilterCheck.tag || target.hasAttribute(setings.btnFilterCheck.dataAttr)) {
            for (let i = 0; i < content.length; i++) {
                let attr =  content[i].getAttribute(setings.btnFilterCheck.dataTarget),
                    find = attr.indexOf(targetAttr);

                if (find !== -1 && content[i].classList.contains('hide')) {
                    content[i].classList.remove('hide')
                }

                if (find === -1) {
                    content[i].classList.add('hide')
                }
            }
        };
  };


  function runFilter () {
      let widthWindow = document.body.clientWidth;

      if (status && setings.startRespons >= widthWindow) {



      }
  }

};
