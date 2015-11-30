/* Tealium Tools Hello World Example 
*
* Github: https://github.com/tygavin/tealium-tools/ 
* NOTE: This file may run multiple times on the same page.  Preserves current state if Tealium Tool is closed/opened.
*
*/

var helloWorld = helloWorld || {
  
  // Initialize message object to starting state for Tealium Tool
  message : {
    ui_start     : true,
    data         : {
      web_page_url : document.URL
    }
  },

  // Incoming "data" object from Tealium tools .html (Handlebars) UI
  main : function( data ) {
 
    var message = helloWorld.message;

    switch ( data.command ){
      case "next":
        console.log( "Hello World: Next" );
        message.ui_finish = true;
        message.ui_start = false;
        message.data.text_area = data.text_area;
        break;
      case "restart":
        console.log( "Hello World: Restart" );
        message.ui_finish = false;
        message.ui_start = true;
        message.data.web_page_url = document.URL;
        break;
      default:
        console.log( "Hello World: Unknown command received from Tealium Tool" );
        break;
    }

    tealiumTools.send( message );

  }
}

window.helloWorld_main = helloWorld.main;

tealiumTools.send( helloWorld.message );

