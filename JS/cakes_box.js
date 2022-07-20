/*function look(elemId) {
    var elem = document.getElementById(elemId);
    elem.style.display === "none" ?
      elem.style.display = "block" : elem.style.display = "none";
  }*/

  $('a.box').click(function() {
    $(this).next().toggle('slow');
    return false;
  });