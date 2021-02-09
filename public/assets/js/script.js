//   MATERIALIZE
//Materialize Auto Initialize
M.AutoInit();
//picture pop
$(document).ready(function(){
  $('materialboxed').materialbox();
  M.AutoInit();


//  SIDENAV
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, options);
  });
  // UNCOMMENT FOR DROPDOWN MENUS ON SIDENAV
//    const collapsibleElem = document.querySelector('.collapsible');
//    const collapsibleInstance = M.Collapsible.init(collapsibleElem, options);


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

