function loadImages() {
  var slide=$("#slide")

  for (i=1; i<=54; i++){
    var ref=document.createElement("a");
    ref.setAttribute("href", "/ssl/images/DM-" + i + ".jpg")
    var img=document.createElement("img");
    img.src="/ssl/images/thumbs/DM-" + i + ".jpg"
    img.setAttribute("width", "64");
    img.setAttribute("height", "48")
    img.setAttribute("rel", "preload");
    ref.appendChild(img);
    slide.append(ref);
  }
  $('.fotorama').fotorama();
}
