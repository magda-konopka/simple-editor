function load() {
  document.getElementById("tekstSpace").value = "Kocham Pawła";
}

function save() {
  var text = document.getElementById("tekstSpace").value;
  console.log(text);
  document.getElementById("tekstSpace").value = "";
}
