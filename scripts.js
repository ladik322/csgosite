  var x;

  function con(){

  }
  window.onload = function check_map() {

  var map_mirage = document.getElementById('mir')
  map_mirage.onclick = change_map_mir

  var map_inferno = document.getElementById('inf')
  map_inferno.onclick = change_map_inf

  var map_overpass = document.getElementById('over')
  map_overpass.onclick = change_map_over

  var map_dust_2 = document.getElementById('dust')
  map_dust_2.onclick = change_map_dust

  var map_vertigo = document.getElementById('vert')
  map_vertigo.onclick = change_map_vert

  var map_nuke = document.getElementById('nuke')
  map_nuke.onclick = change_map_nuke

  var map_ancent = document.getElementById('anc')
  map_ancent.onclick = change_map_anc

  var get_info_contact = document.getElementById('contact_info')
  get_info_contact.onclick = contact
};

function contact(){
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '83.7%';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('option_nades').style.opacity = '0';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapAnc').style.opacity = '0';
}

function change_map_mir() {
  document.getElementById('map_znuk_mir').style.display = 'block';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapMirage').style.display = 'block';
  document.getElementById('mapMirage').style.position = 'absolute';
  document.getElementById('mapMirage').style.opacity = '100';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '255px';
  document.getElementById('option_nades').style.borderRadius = '5px';
  document.getElementById('map_znuk_smoke').style.display = 'block';
  document.getElementById('map_znuk_moly').style.display = 'block';
  document.getElementById('map_znuk_flesh').style.display = 'block';
  document.getElementById('map_znuk_nade').style.display = 'block';





}
function change_map_inf() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapInferno').style.display = 'block';
  document.getElementById('mapInferno').style.position = 'absolute';
  document.getElementById('mapInferno').style.opacity = '100';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
function change_map_over() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapOver').style.display = 'block';
  document.getElementById('mapOver').style.position = 'absolute';
  document.getElementById('mapOver').style.opacity = '100';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
function change_map_dust() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapDust').style.display = 'block';
  document.getElementById('mapDust').style.position = 'absolute';
  document.getElementById('mapDust').style.opacity = '100';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
function change_map_vert() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapVert').style.display = 'block';
  document.getElementById('mapVert').style.position = 'absolute';
  document.getElementById('mapVert').style.opacity = '100';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
function change_map_nuke() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapNuke').style.display = 'block';
  document.getElementById('mapNuke').style.position = 'absolute';
  document.getElementById('mapNuke').style.opacity = '100';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('mapAnc').style.opacity = '0';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
function change_map_anc() {
  document.getElementById('map_znuk_mir').style.display = 'none';
  document.getElementById('map_znuk_inf').style.display = 'none';
  document.getElementById('map_znuk_over').style.display = 'none';
  document.getElementById('map_znuk_dust').style.display = 'none';
  document.getElementById('map_znuk_vert').style.display = 'none';
  document.getElementById('map_znuk_nuke').style.display = 'none';
  document.getElementById('map_znuk_anc').style.display = 'block';
  document.getElementById('general_img_logo').style.display = 'none';
  document.getElementById('content2').style.height = '630px';
  document.getElementById('content2').style.marginTop = '85px';
  document.getElementById('content2').style.transition = '0.8s';
  document.getElementById('content').style.display = 'none';
  document.getElementById('mapAnc').style.display = 'block';
  document.getElementById('mapAnc').style.position = 'absolute';
  document.getElementById('mapAnc').style.opacity = '100';
  document.getElementById('mapAnc').style.transition = '1s';
  document.getElementById('mapInferno').style.opacity = '0';
  document.getElementById('mapInferno').style.transition = '1s';
  document.getElementById('mapOver').style.opacity = '0';
  document.getElementById('mapOver').style.transition = '1s';
  document.getElementById('mapDust').style.opacity = '0';
  document.getElementById('mapDust').style.transition = '1s';
  document.getElementById('mapVert').style.opacity = '0';
  document.getElementById('mapVert').style.transition = '1s';
  document.getElementById('mapNuke').style.opacity = '0';
  document.getElementById('mapNuke').style.transition = '1s';
  document.getElementById('mapMirage').style.opacity = '0';
  document.getElementById('mapMirage').style.transition = '1s';
  document.getElementById('option_nades').style.opacity = '100';
  document.getElementById('option_nades').style.transition = '1s';
  document.getElementById('option_nades').style.height = '250px';
  document.getElementById('option_nades').style.borderRadius = '5px';
}
