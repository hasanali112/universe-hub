const dataLoad = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((response) => response.json())
    .then((data) => showData(data.data.tools.slice(0, 6)));
};

const showData = (aiDatas) => {
  const aiDataContainer = document.getElementById("ai-data-container");
  aiDataContainer.innerText = "";
  aiDatas.forEach((aiData) => {
    console.log(aiData.id);
    const dataContainerDiv = document.createElement("div");
    dataContainerDiv.classList.add("col");
    dataContainerDiv.innerHTML = `
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
                </div>`;
    aiDataContainer.appendChild(dataContainerDiv);
  });
  showSpin(false);
};

dataLoad();
//load spinner
const showSpin = (loadSpin) => {
  const spinField = document.getElementById("spinner");
  if (loadSpin) {
    spinField.classList.remove("d-none");
  } else {
    spinField.classList.add("d-none");
  }
};

//show all button

document.getElementById("show-all-btn").addEventListener("click", function () {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((response) => response.json())
    .then((data) => showData(data.data.tools));
  const hideButton = document.getElementById("btn-show-all");
  hideButton.classList.add("d-none");
  showSpin(true);
});

//show detail in modal
const showAiDetailModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => modalDetail(data.data));
};

//show data on modal

const modalDetail = (modalDetail) => {
  const aiModalDescription = document.getElementById("modal-description");
  aiModalDescription.innerText = modalDetail.description ? modalDetail.description : 'No data found';

  const planDetailField = document.getElementById("plan-detail");
  planDetailField.innerText = modalDetail.pricing[0].plan ? modalDetail.pricing[0].plan : 'Cost/Basic';

  const priceDetailField = document.getElementById("price-detail");
  priceDetailField.innerText = modalDetail.pricing[0].price ? modalDetail.pricing[0].price : 'Free of Cost' ;

  const planDetailField1 = document.getElementById("plan1-detail");
  planDetailField1.innerText = modalDetail.pricing[1].plan ? modalDetail.pricing[1].plan : 'Cost/Pro' ;

  const priceDetailField1 = document.getElementById("price1-detail");
  priceDetailField1.innerText = modalDetail.pricing[1].price ?  modalDetail.pricing[1].price : 'Free of Cost';

  const planDetailField2 = document.getElementById("plan2-detail");
  planDetailField2.innerText = modalDetail.pricing[2].plan ? modalDetail.pricing[2].plan : 'Cost/Enterprise';

  const priceDetailField2 = document.getElementById("price2-detail");
  priceDetailField2.innerText = modalDetail.pricing[2].price ?  modalDetail.pricing[2].price: 'Free of Cost';

  // for feature
  const aiHubFeatureTitle = document.getElementById("ai-hub-feature1");
  aiHubFeatureTitle.innerText = modalDetail.features["1"].feature_name ? modalDetail.features["1"].feature_name : 'No data found';

  const aiHubFeatureTitle2 = document.getElementById("ai-hub-feature2");
  aiHubFeatureTitle2.innerText = modalDetail.features["2"].feature_name ? modalDetail.features["2"].feature_name : 'No data found';

  const aiHubFeatureTitle3 = document.getElementById("ai-hub-feature3");
  aiHubFeatureTitle3.innerText = modalDetail.features["3"].feature_name ? modalDetail.features["3"].feature_name : 'No data found';

  // for intregation
  const aiHubIntegrationsTitle1 = document.getElementById("ai-hub-Integrations1");
  aiHubIntegrationsTitle1.innerText = modalDetail.integrations[0] ? modalDetail.integrations[0] : 'No data found';

  const aiHubIntegrationsTitle2 = document.getElementById("ai-hub-Integrations2");
  aiHubIntegrationsTitle2.innerText = modalDetail.integrations[1] ? modalDetail.integrations[1] : 'No data found';

  const aiHubIntegrationsTitle3 = document.getElementById("ai-hub-Integrations3");
  aiHubIntegrationsTitle3.innerText = modalDetail.integrations[2] ?  modalDetail.integrations[2] : 'No data found' ;

  // card-2 image and feature
  const imageBody= document.getElementById('image-body')
  imageBody.innerHTML=`
  <img src="${modalDetail.image_link[0]}" class="card-img" alt="...">`

  const btnAccurecy= document.getElementById('btn-accuracy')
  btnAccurecy.innerText= modalDetail.accuracy.score ? modalDetail.accuracy.score * 100 : 'no'

  const imageText= document.getElementById('image-text')
  imageText.innerText= modalDetail.input_output_examples[0].input ? modalDetail.input_output_examples[0].input : 'no data found'

  const imageText2= document.getElementById('image-text2')
  imageText2.innerText= modalDetail.accuracy.description ? modalDetail.accuracy.description : 'no data found'
};
