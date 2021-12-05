$(function () {
  
  $('#submitButton').click(function(){

    if ($('#noSpaces').val()) {
      console.log("there is something in this text box");
      $('#noSpaces').removeClass("error")
    } else {
      console.log("there is NOTHING in this text box");
      $('#noSpaces').removeClass("success").addClass("error").focus();

    }

  })
}
