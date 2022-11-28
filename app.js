// executed after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("clickIt");
  btn.addEventListener("click", function () {
    alert("Click event executed..");
    console.log("Click event executed..");
  });
});
