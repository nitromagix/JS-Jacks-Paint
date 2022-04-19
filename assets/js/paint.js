function configureListeners() {
   let images = document.querySelectorAll(`img`)

   for (var i = 0; i < images.length; i++) {
      let currentImage = images[i];
      currentImage.addEventListener('mouseover', function (e) {
         getProductInfo(e.target).setColorNameAndPriceUIElements();
         addOpacity(e)
      });
      currentImage.addEventListener('mouseout', function (e) {
         getProductInfo(e.target).clearColorNameAndPriceUIElements();
         removeOpacity(e)
      });
   }
}

function addOpacity(event) {
   event.target.classList.add('dim');
}

function removeOpacity(event) {
   event.target.classList.remove('dim');
   event.preventDefault();
}

function getProductInfo(element) {

   let price = element.getAttribute("price");
   let colorName = element.getAttribute('name');

   let colorNameElement = document.querySelector('#color-name');
   let colorPriceElement = document.querySelector('#color-price');

   return {
      
      setColorNameAndPriceUIElements: () => {
         colorNameElement.textContent = colorName
         colorPriceElement.textContent = price;
      },

      clearColorNameAndPriceUIElements: () => {
         colorNameElement.textContent = '';
         colorPriceElement.textContent = '';
      }
   }

}