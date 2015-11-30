/* Tealium Tools Hello World Example 
*
* Github: https://github.com/tygavin/tealium-tools/ 
* NOTE: This file may run multiple times on the same page.  Preserves current state if Tealium Tool is closed/opened.
*
*/

var helloWorld = helloWorld || {
  
  initialized : false,

  // Initialize message object with data object for passing information
  message : { data : {} },

  // Incoming tool object from Tealium tools .html (Handlebars) UI
  main : function( tool ) {
 
    var message = helloWorld.message;

    switch ( tool.command ){
      case "start":
        console.log( "Hello World: Start" );
        message.ui_finish = false;
        message.ui_start = true;
        message.data.web_page_url = document.URL;
        break;
      case "next":
        console.log( "Hello World: Next" );
        message.ui_finish = true;
        message.ui_start = false;
        message.data.text_area = tool.text_area;
        break;
      default:
        console.log( "Hello World: Unknown command received from Tealium Tool" );
        break;
    }

    tealiumTools.send( message );

  }
}

window.helloWorld_main = helloWorld.main;

if ( !helloWorld.initialized ) { 
  helloWorld.initialized = true; 
  console.log( "Hello World: Initialized" );
  helloWorld.main( { command : "start" } );
}else{
  console.log( "Hello World: /hello_world.js reloaded" );
}


