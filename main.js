const url ='https://script.google.com/macros/s/AKfycbwUjnLzkgucnFCvfjaXzCVTqwbzwvdT9w6nDigCJw__Zu3rlH9N/exec?';
let careerList;
const name_card = document.querySelectorAll('.about-flip-card-inner');
const foxwel_url = 'https://script.google.com/macros/s/AKfycbzgo1uzGneIuxSQ1b17UKlGLuf0TLLVDQZRo9XlSdvPiSBUk3Q/exec?';

const open = document.getElementById('open');
const close = document.getElementById('close');
const navlinks = document.querySelector('.nav-list');

const open_link = document.querySelector('.open');
const close_link = document.querySelector('.close')




document.addEventListener('DOMContentLoaded', function () {
  	if (document.getElementById('gallery-slider-left') != null) {
    var sec =	new Splide('#gallery-slider-left', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
      pagination:false,
		}).mount(); 

    var primary = new Splide('#gallery-slider', {
			width: '100%',
			autoplay: true,
      arrows: false,
			infinite: true,
		});

    primary.sync(sec).mount();
	}
	 if (document.getElementById('gallery-slider') != null) {
     
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

if (document.getElementById('business-brandPopup') != null) {
	const modal = document.getElementById('business-brandPopup');
	const modal_title = document.getElementById('business-brandPopup-title');
	const modal_content = document.getElementById('business-brandPopup-body');
	function openModal(elem) {
		modal.style.width = '100%';
		modal_title.innerText = elem.dataset.title;
		modal_content.innerText = elem.dataset.content;
		body.classList.add('overflow-y-hidden');
	}

	function closePopup() {
		modal.style.width = '0%';
		body.classList.remove('overflow-y-hidden');
	}
}

/*........CAREER..........*/

/*job*/
if(document.querySelector(".modal")!=null)
  {
    const modal=document.querySelector(".modal");
    const overlay=document.querySelector(".overlay");
    const modal_title=document.querySelector(".modal-title h1");
    const modal_content=document.querySelector(".modal-content p");
    
    const amodal=document.querySelector(".apply-modal");
    const aoverlay=document.querySelector(".apply-overlay");
    const amodal_title=document.querySelector(".apply-title h1");
    
    function openModal(elem) {
      overlay.style.display = "block";
      modal.style.display = "block";
      modal_title.innerText = elem.dataset.title;
      modal_content.innerText = elem.dataset.content;
      body.classList.add('overflow-y-hidden')
    }
    function openModal2(elem) {
      aoverlay.style.display = "block";
      amodal.style.display = "block";
      amodal_title.innerText = elem.dataset.title;
      document.querySelector(".apply-modal form input[name='jobid']").value=elem.dataset.jobid;
      body.classList.add('overflow-y-hidden');
    }
    
    function closePopup() {
      modal.style.display = "none";
      amodal.style.display="none";
      body.classList.remove('overflow-y-hidden')
      overlay.style.display = "none";
      aoverlay.style.display = "none";
    }
  }
  
function openCareerModal(){
    document.getElementById("career-modal").style.display = "block";
  }
  function closePopup() {
    document.getElementById("career-modal").style.display = "none";
  }
  
  if(document.getElementsByClassName("collapsible")!=null){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("collapsible-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    
    if(document.querySelector('.career-section .grid-container')!=null){
      document.querySelector('.filter-text i').addEventListener('click',()=>{
        document.querySelector('.collapsable-group').classList.toggle('collapse-toggle')
      })
      var data = getData('career');
      data.then(d=>{
        careerList=d;
        if(careerList.length !=0){
          document.querySelector('.no-jobs-available').style.display='none';
          listJt=document.querySelector('.jt-list');
          listJd=document.querySelector('.jd-list')
          jdList=jtList=[]
          for(var i in careerList)
          {
            var listItem=document.createElement('li')
            listItem.setAttribute('class', 'list__item')
            listItem.innerHTML=`<label class="label--checkbox"><input type="checkbox" class="checkbox jt" name="jobtype" value="${careerList[i].type}" onclick="filterOnJobChange()">${careerList[i].type}</label>`
            if(!jtList.includes(careerList[i].type)){ listJt.appendChild(listItem); jtList.push(careerList[i].type)}
            
            listItem=document.createElement('li')
            listItem.setAttribute('class', 'list__item')
            listItem.innerHTML=`<label class="label--radio"><input type="radio" class="radio jd"  name="jobdomain" value="${careerList[i].domain}" onclick="filterOnJobChange()">${careerList[i].domain}</label>`
            if(!jdList.includes(careerList[i].domain)){ listJd.appendChild(listItem); jdList.push(careerList[i].domain)}
            
            var card=document.createElement('div')
            card.setAttribute('class', 'career-card')
            card.setAttribute('data-type', careerList[i].type)
            card.setAttribute('data-domain', careerList[i].domain)
            card.innerHTML=`<img src='${careerList[i].imageURL}' loading="lazy"><div class='career-card-body'><div class='card-text'><h4>${careerList[i].position}</h4><p>${careerList[i].jobid}</p><p>${careerList[i].type}</p><p>${careerList[i].domain}</p></div><div class="career-btn-grp"><button onclick="openModal(this)" data-title="${careerList[i].position}" data-content="${careerList[i].details}">Job Description</button><button onclick="openModal2(this)" data-jobid="${careerList[i].jobid}" data-title="${careerList[i].position}">Apply Now</button></div></div>`
            document.querySelector('.career-card-container').append(card)
          } 
        }
        else{
          document.querySelector('.no-jobs-available').style.display='block';
        }
      })
      
      function filterOnJobChange()
      {
        var cards=[...document.querySelectorAll('.career-card')]
        var jt=[...document.querySelectorAll('.jt')]
        var jd=[...document.querySelectorAll('.jd')]
        var filters={
          jt:[],
          jd:"",
        }
        jt.forEach((item)=>{
          if(item.checked) filters.jt.push(item.value)
        })
        jd.forEach((item)=>{
          if(item.checked) filters.jd =item.value
        })
        
        var count = cards.filter((card)=>{
          if((filters.jt.includes(card.dataset.type) || filters.jt.length==0) && card.dataset.domain.indexOf(filters.jd)!=-1) card.style.display='flex'
          else{
            card.style.display='none'
            return card
          }
        }).length
        if (count == 0) document.querySelector('.no-jobs-available').style.display = 'block';
        else document.querySelector('.no-jobs-available').style.display = 'none';
      }
    }
  }

  function checkFile(elem)
  {
    var file = elem.files[0];
      if(file.size/1024/1024 <5)
      {
        var fr = new FileReader();
        fr.fileName = file.name;
        elem.previousElementSibling.innerText = file.name
        fr.onload = function(e) {
            document.querySelector('input[name="data"]').value = e.target.result.replace(/^.*,/, '')
            document.querySelector('input[name="filename"]').value = e.target.fileName
            document.querySelector('input[name="mimetype"]').value = e.target.result.match(/^.*(?=;)/)[0]
        }
        fr.readAsDataURL(file);
    }
    else{
      alert("File Size should less than 5MB!")
      try {
        elem.previousElementSibling.innerText = 'Choose a File'
        elem.value = null;
        resetFileData()
      } catch(ex) { }
      if (elem.value) {
        elem.previousElementSibling.innerText = 'Choose a File'
        elem.parentNode.replaceChild(elem.cloneNode(true), elem);
        resetFileData()
      }
    }
  }
  function resetFileData()
  {
    document.querySelector('input[name="data"]').value = ''
    document.querySelector('input[name="filename"]').value =''
    document.querySelector('input[name="mimetype"]').value = ''
    document.querySelector('label.resume-upload').innerText = 'Choose a File'
  }
  if(document.forms.career!=null)
  {
    document.forms.career.addEventListener('submit',(e)=>{
      e.preventDefault();
      var formData = new FormData(document.forms.career);
      addData(formData)
      e.target.reset();
      resetFileData()
    })
  }

  if(document.forms.contact!=null)
  {
    document.forms.contact.addEventListener('submit',(e)=>{
      e.preventDefault();
      var formData = new FormData(document.forms.contact);
      addData(formData)
      e.target.reset();
    })
  }

  addData = (formData) =>{
    fetch(url, { method: "POST", mode: 'no-cors', body: formData, headers: { "Content-type": "application/json; charset=utf-8" },})
    .then((response) => {
      var formType=[...formData.entries()][0]
      if(formType.includes('subscribe')){
        alert("Subscription Added! Thank you.")
      }
      if(formType.includes('contact')){
        alert("Thank you for contacting us.")
      }
      if(formType.includes('career')){
        alert("Thank you for applying.")
      }
    })
    .catch((error) => console.error(error.message));
  }

  async function getData(requestQuery){
    var response=await fetch(url+new URLSearchParams({ request: requestQuery }),
    { method:'GET', mode: 'cors', credentials: 'omit',redirect: 'follow',});
    return response.json()
  }

open_link.addEventListener('click',()=>{
  close.style.display = 'block';
    navlinks.classList.add('active');
})

close_link.addEventListener('click',()=>{
  open.style.display = 'block';
    navlinks.classList.remove('active');
})