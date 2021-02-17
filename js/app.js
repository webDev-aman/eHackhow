$(document).ready(function () {
  $(".menu__toggler").click(function () {
    $(this).toggleClass("active");
    $(".site__menu").toggleClass("active");
  });
});
