init = function() {
  navigation();
};

navigation = function() {
  var nav = document.getElementById('navigation');
  var trigger = nav.querySelectorAll('span')[0];

  trigger.addEventListener("click", toggleMenu);

  function toggleMenu(event) {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      trigger.innerHTML = "Menu +";
    }
    else {
      nav.classList.add('active');
      trigger.innerHTML = "Menu -";
    }
  }
}
