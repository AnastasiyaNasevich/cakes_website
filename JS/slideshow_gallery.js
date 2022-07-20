var slideIndex = 0;
        showSlides(slideIndex);
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot1");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activeNew", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " activeNew";
            setTimeout(showSlides, 2000); // Меняйте изображение каждые 2 секунды
        }