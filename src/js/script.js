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
        heightRatio: 1,
        perPage: 3,
        autoplay: true,
        
       
        } ).mount();
    } );
document.addEventListener( 'DOMContentLoaded', function () {
        var splide =new Splide( '#news-content', {
            direction   : 'ttb',
            heightRatio: 0.5,
            perPage: 5,
            autoplay: true,
            
           
            } ).mount();
        } );
