function loadImages() {
  var slide=$("#slide")

  for (i=1; i<=5; i++){
    var img=document.createElement("img");
    img.src="/ssl/images/DM-" + i + ".jpg"
    img.setAttribute("rel", "preload");
    slide.append(img);
  }
  $('.fotorama').fotorama();
}
