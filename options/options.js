function click_btn() {
  console.log("options log..");
  alert("options log..");
}

function load_options() {
  document.getElementById("loaded").innerText = "DOM loaded";
}

document.addEventListener("DOMContentLoaded", load_options);
document.querySelector("#options_btn").addEventListener("click", click_btn);
