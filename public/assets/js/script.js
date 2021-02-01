M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
//    const collapsibleElem = document.querySelector('.collapsible');
//    const collapsibleInstance = M.Collapsible.init(collapsibleElem, options);