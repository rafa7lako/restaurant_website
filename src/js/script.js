'use stricct';

/**
 * PRELOAD
 * 
 * loading will end after the document is loaded
 */

const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', function(){
    preloader.classList.add('loaded');
    document.body.classList.add('loaded')
})