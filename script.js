document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.mobile-menu li');

    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Toggle the 'active' class on the clicked menu item
        this.classList.toggle('active');
      });
    });
  });


  function toggleNavbar() {
    var navbar = document.getElementById("mobileNavbar");
    navbar.classList.toggle("active");
  }

