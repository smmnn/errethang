window.addEventListener("scroll", function() {
    document.getElementById('heropar').style.left = '-250px'
    document.getElementById('heropar').style.top = '-50%'
      const distance = window.scrollY;
      document.querySelector(".heropar").style.transform = `translateY(${distance * 0.5}px)`;
      document.querySelector(
        ".heropar"
      ).style.transform = `translateY(${distance * 0.5}px)`;
      setTimeout(() => {
    });})