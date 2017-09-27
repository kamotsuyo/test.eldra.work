/*
window handleEvent
*/
(function () {
  'use strict';


  
  function init(){
    console.log("loaded");
  };
  
  if(document.body){
    init();
  }
  document.addEventListener('loaded',init,false);

}());

/*
Exception: TypeError: document.body.addEventlistener is not a function
@Scratchpad/2:13:3
@Scratchpad/2:4:2
*/
/*
Exception: ReferenceError: documnt is not defined
@Scratchpad/2:18:3
@Scratchpad/2:4:2
*/
/*
Exception: ReferenceError: handleEvent is not defined
@Scratchpad/2:18:12
@Scratchpad/2:4:2
*/