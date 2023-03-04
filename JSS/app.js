const dataLoad= ()=> {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=> response.json())
    .then(data=>  showData(data.data.tools.slice(0, 6)))
}

const showData=  (aiDatas) =>{
   const aiDataContainer = document.getElementById('ai-data-container');
   aiDataContainer.innerText= '';
   aiDatas.forEach(aiData => {
    console.log(aiData.id)
      const dataContainerDiv= document.createElement('div');
      dataContainerDiv.classList.add('col');
      dataContainerDiv.innerHTML=`
                <div class="card h-100 p-3">
                      <img src="${aiData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol class="list-group-numbered p-0">
                      <li class="list-group-item">${aiData.features[0]}</li>
                      <li class="list-group-item">${aiData.features[1]}</li>
                      <li class="list-group-item">${aiData.features[2]}</li>
                    </ol>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                      <div>
                        <h4 class="text-bolder">${aiData.name}</h4>
                        <p><span><i class="fa-solid fa-calendar-days"></i></span> ${aiData.published_in}</p>
                      </div> 
                        <button  onclick="showAiDetailModal('${aiData.id}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#seemoreDetailModal">See More</button>
                    </div>
                </div>`
      aiDataContainer.appendChild(dataContainerDiv)
   });
   showSpin(false)
}

dataLoad()
//load spinner
const showSpin= loadSpin => {
  const spinField= document.getElementById('spinner')
  if(loadSpin){
     spinField.classList.remove('d-none')
  }
  else{
      spinField.classList.add('d-none')
  }
}


//show all button

document.getElementById('show-all-btn').addEventListener('click', function(){
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=> response.json())
    .then(data=> showData(data.data.tools))
    const hideButton= document.getElementById("btn-show-all");
    hideButton.classList.add('d-none')
    showSpin(true)
})


//show detail in modal 
const showAiDetailModal= id =>{
  const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(response=> response.json())
  .then(data=> modalDetail(data.data))
}

//show data on modal

const modalDetail= modalDetail =>{
  const aiModalDescription= document.getElementById('modal-description')
  aiModalDescription.innerText= modalDetail.description

  const planDetailField= document.getElementById('plan-detail')
  planDetailField.innerText= modalDetail.pricing[0].plan

  const priceDetailField= document.getElementById('price-detail')
  priceDetailField.innerText= modalDetail.pricing[0].price

  const planDetailField1= document.getElementById('plan1-detail')
  planDetailField1.innerText= modalDetail.pricing[1].plan


  const priceDetailField1= document.getElementById('price1-detail')
  priceDetailField1.innerText= modalDetail.pricing[1].price
  

  const planDetailField2= document.getElementById('plan2-detail')
  planDetailField2.innerText= modalDetail.pricing[2].plan


  const priceDetailField2= document.getElementById('price2-detail')
  priceDetailField2.innerText= modalDetail.pricing[2].price


  // for feature
  const aiHubFeatureTitle= document.getElementById('ai-hub-feature1')
  aiHubFeatureTitle.innerText= modalDetail.features['1'].feature_name

  const aiHubFeatureTitle2= document.getElementById('ai-hub-feature2')
  aiHubFeatureTitle2.innerText= modalDetail.features['2'].feature_name

  const aiHubFeatureTitle3= document.getElementById('ai-hub-feature3')
  aiHubFeatureTitle3.innerText= modalDetail.features['3'].feature_name


  // for intregation
  const aiHubIntegrationsTitle1= document.getElementById('ai-hub-Integrations1')
  aiHubIntegrationsTitle1.innerText= modalDetail.integrations[0]

  const aiHubIntegrationsTitle2= document.getElementById('ai-hub-Integrations2')
  aiHubIntegrationsTitle2.innerText= modalDetail.integrations[1]
  const aiHubIntegrationsTitle3= document.getElementById('ai-hub-Integrations3')
  aiHubIntegrationsTitle3.innerText= modalDetail.integrations[2]


  // card-2 image and feature
  const imageCardbody= document.getElementById('image-card-body')
  const imagecardDiv= document.createElement('div');
  imagecardDiv.classList.add('card')
  imagecardDiv.innerHTML=`
  <div>
  <div class="card text-bg-dark">
      <img src="${modalDetail.image_link[0]}" class="card-img" alt="...">
      <div class="card-img-overlay">
          <button></button>
      </div>
  </div>
</div>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a longer card with supporting text below as
      a natural lead-in to additional content.</p>
</div>`
  imageCardbody.appendChild(imagecardDiv)
}