init = function() {
  navigation();
};

navigation = function() {
  var nav = document.getElementById('navigation');
  var trigger = nav.querySelectorAll('span')[0];

  trigger.addEventListener("click", expandMenu);

  function expandMenu(event) {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
    else {
      nav.classList.add('active');
    }
    
  }
}
