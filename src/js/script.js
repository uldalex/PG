// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

// const $ = require('jquery');
// $( document ).ready(function() {});


var practice = document.getElementById("practice");
var branch = document.getElementById("branch");
var children = [].slice.call(practice.children)
var childrenBranch = [].slice.call(branch.children)
                    setInterval(function() {
                        var clone = children.slice();
                        while (clone.length) {
                            practice.append(clone.splice(Math.floor(Math.random() * clone.length), 1)[0]);
                        }
                    }, 6000);
                    setInterval(function() {
                        var clone = childrenBranch.slice();
                        while (clone.length) {
                            branch.append(clone.splice(Math.floor(Math.random() * clone.length), 1)[0]);
                        }
                    }, 5500);
                   
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
