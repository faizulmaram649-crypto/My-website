window.onload = function() {
  const loader = document.getElementById("loader");

  if(loader){
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  }
};
