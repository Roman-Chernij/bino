let  filter = (setings) => {
  let parent = document.querySelector(setings.blockFilter),
      btnFilter = parent.querySelector(setings.btnFilterBlock),
      productFilterBox = parent.querySelector(setings.productFil);


        btnFilter.addEventListener('click', addEventClick);

  function addEventClick (e) {
    let target = e && e.target || e.srcElement,
        targetAttr = target.setAttribute(setings.btnFilterCheck.dataAttr);

        if (target.tagName == setings.btnFilterCheck.tag || !targetAttr);

    console.log(target);
  };
  console.log(parent);
};
