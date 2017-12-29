(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }
})();  



function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let mirchmasala = {lat: 52.649804, lng: -1.123713};
  let nandos = {lat: 52.633354, lng: -1.129596};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 12,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markermirchmasala = new google.maps.Marker({
    position: mirchmasala,
    map: map,
    title: 'Mirch Masala'
  });
  let markernandos = new google.maps.Marker({
    position: nandos,
    map: map,
    title: 'Nandos'
  });
}

/* pop up contact form */

document.getElementById("submit").addEventListener("click", function(){
    alert("Thank-you, your message has been sent!");
});




