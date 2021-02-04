M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    // const instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
//    const collapsibleElem = document.querySelector('.collapsible');
//    const collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

$(document).ready(function(){
  $('materialboxed').materialbox();
});

$(document).ready(function(){
  var api_key = "563492ad6f91700001000001bb5052fb7c7742528f8fb1620097f617"
  var image = ''

  $("#form").submit(function (event) {
    event.preventDefault()
    var search = $("#search").val()

    imageSearch()
  })

  function imageSearch() {
    $.ajax({
      method: 'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", api_key);
      },
      url:"https://api.pexels.com/v1/search?query=" + search + "&per_page=15&page=1",
      success: function (data) {
        console.log(data)
        data.photos.forEach(photo => {
            image = `
            <img src="${photo.src.original}" width="200" height="200"/>

            `
            $("#images").append(image)
        });

      },
      error: function (error) {
        console.log(error)
      }
    })
  }

})