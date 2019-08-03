window.onload = function() {
  var d = new Date();
  var year = d.getFullYear();
  var footer = document.getElementsByTagName('footer')[0];
  var copyrightText = "Amidou Kante &copy " + year;
  footer.innerHTML = copyrightText;
}