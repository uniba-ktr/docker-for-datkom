function loadImages() {
  var slide=$("#slide")
  for (i=1; i<=54; i++){
    var img=document.createElement("img");
    img.src="images/DM-" + i + ".jpg"
    slide.append(img);
  }
  $('.fotorama').fotorama();
}
