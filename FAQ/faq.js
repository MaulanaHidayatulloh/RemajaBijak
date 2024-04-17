document.addEventListener("DOMContentLoaded", function () {
  // #1
  const Pubertasbawah1 = document.querySelector(".bawah-pubertas-1");
  const Pubertaskanan1 = document.querySelector(".kanan-pubertas-1");
  const Pubertasketerangan1 = document.querySelector(".keterangan-pubertas-1");
  const Mainbox1 = document.querySelector("#main-box-1");
  const Box1 = document.querySelector("#box-1");

  // ketika klik panah kanan
  Box1.onclick = (e) => {
    Pubertasbawah1.classList.toggle("active");
    Pubertaskanan1.classList.toggle("active");
    Pubertasketerangan1.classList.toggle("active");
    Mainbox1.classList.toggle("active");
    e.preventDefault();
  };

  // #2
  const Pubertasbawah2 = document.querySelector(".bawah-pubertas-2");
  const Pubertaskanan2 = document.querySelector(".kanan-pubertas-2");
  const Pubertasketerangan2 = document.querySelector(".keterangan-pubertas-2");
  const Mainbox2 = document.querySelector("#main-box-2");
  const Box2 = document.querySelector("#box-2");

  // ketika klik panah kanan
  Box2.onclick = (e) => {
    Pubertasbawah2.classList.toggle("active");
    Pubertaskanan2.classList.toggle("active");
    Pubertasketerangan2.classList.toggle("active");
    Mainbox2.classList.toggle("active");
    e.preventDefault();
  };

  // #3
  const Pubertasbawah3 = document.querySelector(".bawah-pubertas-3");
  const Pubertaskanan3 = document.querySelector(".kanan-pubertas-3");
  const Pubertasketerangan3 = document.querySelector(".keterangan-pubertas-3");
  const Mainbox3 = document.querySelector("#main-box-3");
  const Box3 = document.querySelector("#box-3");

  // ketika klik panah kanan
  Box3.onclick = (e) => {
    Pubertasbawah3.classList.toggle("active");
    Pubertaskanan3.classList.toggle("active");
    Pubertasketerangan3.classList.toggle("active");
    Mainbox3.classList.toggle("active");
    e.preventDefault();
  };
});
