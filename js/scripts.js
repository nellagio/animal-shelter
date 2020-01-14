// makes ure its ready to recive commands
$(document).ready(function(){
  //sets dark mode
  $('.dark-btn').click(function(){
    $("body").removeClass();
    $("body").addClass('dark-mode');
  });
  $(".light-btn").click(function(){
    $("body").removeClass();
  });

});