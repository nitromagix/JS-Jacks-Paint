function configureListeners() {
   let images = document.querySelectorAll(`img`)

   for (var i = 0; i < images.length; i++) {
      let currentImage = images[i];
      currentImage.addEventListener('mouseover', function (e) {
         getProductInfo(e.target).updateColorNameAndPrice();
         addOpacity(e)
      });
      currentImage.addEventListener('mouseout', function (e) {
         getProductInfo(e.target).removeColorNameAndPrice();
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

   let elementId = element.id
   let price;
   let colorName;

   switch (elementId) {
      case 'pn1':
         price = '$14.99';
         colorName = 'Lime Green';
         break;
      case 'pn2':
         price = '$11.14';
         colorName = 'Medium Brown';
         break;
      case 'pn3':
         price = '$22.99';
         colorName = 'Royal Blue';
         break;
      case 'pn4':
         price = '$13.42';
         colorName = 'Solid Red';
         break;
      case 'pn5':
         price = '$21.98';
         colorName = 'Solid White';
         break;
      case 'pn6':
         price = '$4.99';
         colorName = 'Solid Black';
         break;
      case 'pn7':
         price = '$8.22';
         colorName = 'Solid Cyan';
         break;
      case 'pn8':
         price = '$11.99';
         colorName = 'Solid Purple';
         break;
      case 'pn9':
         price = '$14.99';
         colorName = 'Solid Yellow';
         break;
      default:
   }

   let colorNameElement = document.querySelector('#color-name');
   let colorPriceElement = document.querySelector('#color-price');

   return {
      
      updateColorNameAndPrice: function update() {
         colorNameElement.textContent = colorName
         colorPriceElement.textContent = price;
      },

      removeColorNameAndPrice: function remove() {
         
         colorNameElement.textContent = '';
         colorPriceElement.textContent = '';
      }
   }

}