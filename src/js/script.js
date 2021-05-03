// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

// const $ = require('jquery');
// $( document ).ready(function() {});


//var practice = document.getElementById("practice");
//var branch = document.getElementById("branch");
//var children = [].slice.call(practice.children)
//var childrenBranch = [].slice.call(branch.children)
                  //  setInterval(function() {
                 //       var clone = children.slice();
                //        while (clone.length) {
               //             practice.append(clone.splice(Math.floor(Math.random() * clone.length), 1)[0]);
               //         }
              //      }, 6000);
              //      setInterval(function() {
             //           var clone = childrenBranch.slice();
             //           while (clone.length) {
             //               branch.append(clone.splice(Math.floor(Math.random() * clone.length), 1)[0]);
             //           }
            //        }, 5500);
                   
            (function() {

                function scrollHorizontally(e) {
              
                  var scrollPos = this.scrollLeft;  // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)
              
                  // Горизонтальная прокрутка
                  e = window.event || e;
                  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                  this.scrollLeft -= (delta*100); // Multiplied by 10
              
                  var widthElem = this.scrollWidth; // Ширина всего элемента
                  var widthBrowser = document.documentElement.clientWidth;  // Ширина окна минус размер вертикального скролла
              
              
                  // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх
                  if ((delta == 1 ) && (this.scrollLeft == 0)) return;
                  // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край
                  if ((widthBrowser >= widthElem) || (scrollPos == this.scrollLeft)) return;
              
                  e.preventDefault(); // запрещает прокрутку по вертикали
              
                }
              
                var elems = document.querySelectorAll('.practice__list--one');
                for (var a = 0; a < elems.length; a++) {
                  elems[a].addEventListener("mousewheel", scrollHorizontally, false);     // IE9, Chrome, Safari, Opera
                  elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
                }
              
              })();

            
document.addEventListener( 'DOMContentLoaded', function () {
    var splide =new Splide( '#news-block', {
        direction   : 'ttb',
        type: 'loop',
        heightRatio: 1,
        perPage: 3,
        perMove: 1,
        autoplay: true,
        breakpoints: {
            1200: {
                heightRatio: 1.3,
            },
            1024: {
                heightRatio: 0.85,
            },
            768: {
                heightRatio: 0.5,
            },
            600: {
                heightRatio: 1.6,
            },
          }  
       
        } ).mount();
    } );


document.addEventListener( 'DOMContentLoaded', function () {
        var splide =new Splide( '#news-content', {
            direction   : 'ttb',
            type: 'loop',
            perMove: 1,
            heightRatio: 0.58,
            perPage: 5,
            autoplay: true,
            breakpoints: {
            1200: {
                    heightRatio: 0.72,
                    },
            1024: {
                heightRatio: 0.85,
                },
            768: {
                heightRatio: 0.6,
            },
            600: {
                heightRatio: 2,
            },
          }
           
            } ).mount();
        } );