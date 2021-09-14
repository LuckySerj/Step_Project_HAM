`use strict`;
const serviceTab = function () {
  const tabContent = document.querySelectorAll(`.services-content-tabs`);
  const tabs = document.querySelector(`.services-nav-list`);

  tabs.addEventListener(`click`, selectTabNav);
  function selectTabNav(e) {
    if (e.target.classList.contains(`services-nav-item`)) {
      document
        .querySelector(`.active-services`)
        .classList.remove(`active-services`);
      e.target.classList.add(`active-services`);

      let tabName = e.target.getAttribute(`data-tab-name`);
      selectTabContent(tabName);
    }
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add(`active-services`)
        : item.classList.remove(`active-services`);
    });
  }
};

serviceTab();

const amazingFilter = function () {
  const amazingContent = document.querySelectorAll(`.amazing-gallery-item`);
  const amazingNav = document.querySelector(`.amazing-nav-list`);

  amazingNav.addEventListener(`click`, amazingFilter);
  function amazingFilter(e) {
    if (e.target.classList.contains(`amazing-nav-item`)) {
      document
        .querySelector(`.active-amazing`)
        .classList.remove(`active-amazing`);
      e.target.classList.add(`active-amazing`);

      let filter = e.target.dataset.content;

      amazingContent.forEach((e) => {
        e.classList.add(`amazing-filter`);
        let contentFilter = e.dataset.content;
        if (filter === `All`) {
          e.classList.remove(`amazing-filter`);
        } else if (filter === contentFilter) {
          e.classList.remove(`amazing-filter`);
        }
      });
    }
  }
};

amazingFilter();

document.querySelector(`.load-more`).onclick = () => {
  document.querySelector(`.load-more`).style.display = `none`;
  document.querySelector(`.loading`).style.display = `inline-block`;
  setTimeout(loadMoreImg, 1000);
  function loadMoreImg() {
    document.querySelectorAll(`.amazing-gallery-item`).forEach((e) => {
      e.classList.remove(`amazing-hidden`);
    });
    document.querySelector(`.loading`).style.display = `none`;
  }
};

$(document).ready(function () {
  $(`.carousel-wrapper`).slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".slick2-wrapper").slick({
    dots: false,
    arrows: true,
    prevArrow: ".arrow-left",
    nextArrow: ".arrow-right",
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: ".carousel-wrapper",
    focusOnSelect: true,
    variableHeight: true,
    variableWidth: true,
  });
});
