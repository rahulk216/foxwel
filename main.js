document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('gallery-slider') != null) {
		new Splide('#gallery-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
		}).mount();
	}
	if (document.getElementById('team-slider') != null) {
		new Splide('#team-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
		}).mount();
	}
});

if(document.getElementById("business-brandPopup")!=null)
{
  const modal=document.getElementById("business-brandPopup");
  const modal_title=document.getElementById("business-brandPopup-title");
  const modal_content=document.getElementById("business-brandPopup-body");
  function openModal(elem) {
    modal.style.width = "100%";
    modal_title.innerText = elem.dataset.title;
    modal_content.innerText = elem.dataset.content;
    body.classList.add('overflow-y-hidden')
  }
  
  function closePopup() {
    modal.style.width = "0%";
    body.classList.remove('overflow-y-hidden')
  }
}
