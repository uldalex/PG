/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

document.addEventListener( 'DOMContentLoaded', function () {
    
    var splide =new Splide( '#victory', {
          type: 'loop',
          perPage: 3,
          autoplay: true,
          } ).mount();
  } );
  