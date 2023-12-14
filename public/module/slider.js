const slider = async () => {
  let res = await data.json();
  let slide1 = `
  ${res.slider
    .map((elem) => {
      return `<div class="swiper-slide">
    <div class="lgxl">
      <img
        src="${elem.image}"
        alt="${elem.alt}"
      />
      <h3>${elem.title}</h3>
      <a href="${elem.link}">${elem.name}</a>
    </div>
    <img class="lgxl" src="${elem.image1}" alt="${elem.alt1}" />
    <div class="mdsmxs">
      <img
        src="${elem.image}"
        alt="${elem.alt}"
      />
      <h3>${elem.title}</h3>
      <a href="${elem.link}">${elem.name}</a>
    </div>
    <img class="mdsmxs" src="${elem.image2}" alt="${elem.alt1}" />
  </div>`;
    })
    .join("")}   
  `;
  document.querySelector(" .swiper-wrapper").innerHTML = slide1;
};
export default slider;
