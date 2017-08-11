$(document).ready(function(){

  $.ajax({
    type:"GET",
    url:"https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID':'cadz3awg3v7fa26rhtq95x61bjt4up'
    },
  //   xhrFields:{
  //     withCredentials: true
  //  },
   success:function(data){
     if(data.stream===null){
       $('#fccStatus').text("FreeCodeCamp is Offline...").addClass("btn btn-default");
       console.log("in if");
     }
     else{
       $('#fccStatus').append('<a href="https://www.twitch.tv/freecodecamp" target="_blank">FreeCodeCamp is Online...</a>').addClass("btn btn-default");
       console.log("in else");
     }
   }
 });

  var lim = 15;

  $.ajax({
    type:"GET",
    url:"https://api.twitch.tv/kraken/streams/?stream_type=all&limit="+lim,
    headers:{
      'Client-ID':'cadz3awg3v7fa26rhtq95x61bjt4up'
    },
  //   xhrFields:{
  //     withCredentials: true
  //  },
   success:function(data1){
     for (var i = 0; i < lim; i++) {

       var display_name=data1.streams[i].channel.display_name;
       var game_name=data1.streams[i].channel.game;
       var stream_type=data1.streams[i].stream_type;
       var channelLink=data1.streams[i].channel.url;

       $('#user').append("<hr>"+display_name);
       $('#status').append("<hr><a href="+channelLink+" target='_blank'>"+stream_type+"</a>");
       $('#info').append("<hr>"+game_name);
     }
   }
  });

});
