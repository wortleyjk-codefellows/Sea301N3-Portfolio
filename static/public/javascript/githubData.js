(function (module){
  var ghData = {}
  var display = function(data){
    data.forEach(function(elem){
      console.log(elem);
      var template = Handlebars.compile($("#gh-template").html());
      var html  = template(elem);
      $('#github-data').append(html);
    })
  }
  ghData.getData = function(){
  $.get('/getAuthToken',function(data){
    getGithubData(data.ghToken,display);
    });
  }
  module.ghData = ghData
})(window);
