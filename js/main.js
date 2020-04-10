(() => {

      const burger = document.querySelector('.burgerMenu');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');
      const barImage = document.querySelector('.burgerMenu img');
      const parallax = document.querySelector('#barley');
      const imgSelection = document.querySelectorAll('[data-modal]');
      const closeButton = document.querySelectorAll('[data-close-button]');
      const overlay = document.querySelector('.overlay'),
            beerImage = document.querySelectorAll('.firstImageCon img'),
            popImage = document.querySelector('.popConOne .firstProductCon .secImage img');

      // Beer Title and Alchohol description for dynamic content and text selection

      const infoCon = [
          ["GETLE CLEAN WETWIPES",`ALC / VOL 5.2%`],
          ["SENSITIVE WETWIPES",`ALC / VOL 6.2%`],
          ["GERM REMOVAL WETWIPES",`ALC / VOL 6%`]
      ];

      const title = document.querySelector('.popConOne .firstProductCon div .wipeText');
      const alcDes = document.querySelector('.popConOne .firstProductCon div .alcText');


      function openMenu()
      {
          // Toggle Nav
          nav.classList.toggle('activateLink');
          barImage.classList.toggle('rotateBurger');
      }

      //  PRODUCT PAGE - Scroll Text Appear effect function

      function  scrollAppear()
      {
        var appearCon = document.querySelector(".appearCon");
        var contentPosition = appearCon.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;

        if(contentPosition < screenPosition)
        {
          appearCon.classList.add("appearText");
        }
      }

      function  scrollAppearA()
      {
        var appearCon = document.querySelector(".appearConA");
        var contentPosition = appearCon.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;

        if(contentPosition < screenPosition)
        {
          appearCon.classList.add("appearText");
        }
      }
      //  PRODUCT PAGE - Scroll Text Appear effect function

      // POP OVER FUNCTION

      function openBox(modal)
      {
        if(modal == null) return;
        modal.classList.add('activePop');
        overlay.classList.add('activePop');
      }

      // CLOSE BOX
      function closeBox(modal)
      {
        if(modal == null) return;
        modal.classList.remove('activePop');
        overlay.classList.remove('activePop');
      }

      // change image
      function changeImage()
      {
         popImage.src = `images/${"product_0" + this.dataset.image + "_02"}.png`;
         console.log(popImage.src);

         title.textContent = `${infoCon[this.dataset.content][0]}`;
         alcDes.textContent = `${infoCon[this.dataset.content][1]}`;
      }

      burger.addEventListener('click',openMenu);
      window.addEventListener('scroll', scrollAppear);
      window.addEventListener('scroll', scrollAppearA);
      window.addEventListener('scroll', function() {
          let offset = window.pageYOffset;
          parallax.style.backgroundPositionY = offset * -0.2 + "px";
      });

      // POP OVER EVENTLISTENER ON HOMEPAGE

      imgSelection.forEach(img => img.addEventListener('click', function(){
        const modal = document.querySelector(img.dataset.modal);
        openBox(modal);
      }));

      // CLOSE BOX EVENTLISTENER BY CLICK ON CROSS

      closeButton.forEach(button => button.addEventListener('click', function(){
        const modal = button.closest('.popConOne')
        closeBox(modal);
      }));


      beerImage.forEach(beer => beer.addEventListener('click', changeImage));

})();
