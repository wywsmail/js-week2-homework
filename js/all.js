var obj = {
  data: {
    uuid: '3e2bba7c-e3f2-4bb1-bf9c-1c406f181d46',
    apiPath: 'https://course-ec-api.hexschool.io/',
    token: 'UkWKVIE1v6YLr24ij05oQOrFveJNuBWQLaSYld4nTcRSLMTFLic4RH0ltH8F',
    productList: []
  },
  getData() {
    var vm = this;
    var api = `${vm.data.apiPath}/api/${this.data.uuid}/ec/products`;
    axios.get(api)
      .then(function (res) {
        vm.data.productList = res.data.data;
        vm.renderPage();
      })
  },
  renderPage() {
    var vm = this;
    var classic = document.querySelector(".classic");
    var seasonal = document.querySelector(".seasonal");
    var products = vm.data.productList;
    var strClassic = '';
    var strSeasonal = '';
    products.forEach(function (item) {
      if (item.category === "經典") {
        strClassic += `
          <div class="col-3">
            <div class="product">
              <img src="${item.imageUrl[0]}" alt="${item.title}">
              <h3>${item.title}<button type="button" class="btn btn-outline-info">購買</button></h3>
              <p>${item.content}</p>
              
            </div>
          </div>`;
        classic.innerHTML = strClassic;
      } else if (item.category === "期間限定口味") {
        strSeasonal += `
            <div class="col-3">
              <div class="product">
                <img src="${item.imageUrl}" alt="${item.title}">
                <h3>${item.title}<button type="button" class="btn btn-outline-info">購買</button></h3>
                <p>${item.content}</p>
              </div>
            </div>`;
        seasonal.innerHTML = strSeasonal;
      }
    });
  }
}

obj.getData();