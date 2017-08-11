$(document).ready(function(){
  var api="https://api.twitch.tv/kraken/streams/dota2ti?client_id=cadz3awg3v7fa26rhtq95x61bjt4up";
  console.log(api);
  $.getJSON(api,function(data){
    if(data.stream===null){
      $('#fccStatus').text("FreeCodeCamp is Offline...").addClass("btn btn-default");
      console.log("in if");
    }
    else{
      $('#fccStatus').append('<a href="https://www.twitch.tv/freecodecamp" target="_blank">FreeCodeCamp is Online...</a>').addClass("btn btn-default");
      console.log("in else");
    }
  });
});
