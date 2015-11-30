/* Tealium Tools Hello World Example 
*
* Github: https://github.com/tygavin/tealium-tools/ 
* NOTE: This file may run multiple times on the same page.  Preserves current state if Tealium Tool is closed/opened.
*
*/

var helloWorld = helloWorld || {
  message : {},

  // incoming "data" object from Tealium tools .html (Handlebars) UI
  main : function( data ) {
 
    var message = helloWorld.message;

    switch ( data.command ){
      case "next":
        message.ui_finish = true;
        message.ui_start = false;
        message.data.text_area = data.text_area;
        break;
      case "restart":
        message.ui_finish = false;
        message.ui_start = true;
        break;
      default:
        console.log( "Restart" );
        message.data = {};
        message.ui_start = true;
        message.data.web_page_url = document.URL;
        break;
    }

    tealiumTools.send( message );

  }
}

window.helloWorld = helloWorld.main;

tealiumTools.send( helloWorld.message );

