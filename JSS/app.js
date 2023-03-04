const dataLoad= ()=> {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=> response.json())
    .then(data=> showData(data.data.tools))
}

const showData=  aiDatas =>{
   const aiDataContainer = document.getElementById('ai-data-container');
   aiDatas.forEach(aiData => {
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
                    <div class="card-footer">
                      <h4 class="text-bolder">${aiData.name}</h4>
                      <p><span><i class="fa-solid fa-calendar-days"></i></span> ${aiData.published_in}</p>
                    </div>
                </div>`
      aiDataContainer.appendChild(dataContainerDiv)
   });
}
dataLoad()