// /*
// # CREATED BY: BPWEBS.COM
// # URL: https://www.bpwebs.com
// */
function doGet() {
    var template = HtmlService.createTemplateFromFile('Index');
    return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
  }
  
  // //GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
  // function getData() {
  //   var spreadSheetId = "1Spiif8qYoviS5tpSJVn3ar6_7COuVcKJniXERfhllM8"; //CHANGE
  //   var y=1234567890;
  //   var dataRange = "users!A2:F"; //CHANGE
  //   var dataRange1=[];
  //   var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  //   var values = range.values;
  // // for (let x in values) {
  // //   if(values.F[x]===y){
  // //   dataRange1.push(dataRange[x]);
  // //   }
  // // }
  // //  var dataRange1=[values[0][0],values[0][1],values[0][2],values[0][3],values[0][4]];
  //   return values[0];
  // }
  
  // //INCLUDE JAVASCRIPT AND CSS FILES
  // //REF: https://developers.google.com/apps-script/guides/html/best-practices#separate_html_css_and_javascript
  
  // function include(filename) {
  //   return HtmlService.createHtmlOutputFromFile(filename) 
  //     .getContent();
  // }
  
  
  
  
  /* PROCESS FORM */
  function processForm(formObject){  
    var result = "";
    if(formObject.searchtext){//Execute if form passes search text
        result = search(formObject.searchtext);
    }
    return result;
  }
  
  //SEARCH FOR MATCHED CONTENTS 
  function search(searchtext){
    var spreadsheetId   = '1itHm2b_5KWXU8WMNc8Y33XaOpnjmSdEwsaG-m4HoQv4'; //** CHANGE !!!
    var dataRage        = 'ShubhFashion_In!A2:L';                                    //** CHANGE !!!
    var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
    
    var ar = [];
    data.forEach(function(f) {
      debugger;
      var x=document.getElementById("searchtext").value;
      if(x===10){
            if (~f.indexOf(searchtext)) {
        ar.push(f);
      }
      }
    });

    return ar;
  }
  
  
  // //Ref: https://datatables.net/forums/discussion/comment/145428/#Comment_145428
  // //Ref: https://datatables.net/examples/styling/bootstrap4