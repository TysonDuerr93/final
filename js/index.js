//spacebar for cat

$('html').keypress( function(e){
  
  if (e.keyCode === 32) {
    $('.gif').show();
    // Stuff During Event
   console.log(e.keyCode);
    
  }
  
  // Stuff After Event
  
});