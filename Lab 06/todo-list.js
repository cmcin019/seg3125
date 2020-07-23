$(document).ready(function(){
  // alert();
  $('#form').on('submit', function(){
    // alert();
    console.log("=======================================================");

      // var item = $('form input');
      // var todo = {item: item.val()};


      $.ajax({
        type: 'POST',
        url: '/niceSurvey',
        data: $(this).serializeArray(),
        success: function(data){
          //do something with the data via front-end framework
          // location.reload();
        }
      });

      return false;

  });

  // $('li').on('click', function(){
  //     var item = $(this).text().replace(/ /g, "-");
  //     $.ajax({
  //       type: 'DELETE',
  //       url: '/todo/' + item,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         location.reload();
  //       }
  //     });
  // });

});
