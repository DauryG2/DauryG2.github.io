document.addEventListener("DOMContentLoaded", function() {
    let images = [
        document.getElementById('image1'),
        document.getElementById('image2'),
        document.getElementById('image3'),
        document.getElementById('image4'),
        document.getElementById('image5'),
        document.getElementById('image6'),
        document.getElementById('image7'),
        document.getElementById('image8'),
        document.getElementById('image9'),
        document.getElementById('image10'),
        document.getElementById('image11'),
        document.getElementById('image12'),
        document.getElementById('image13'),
        document.getElementById('image14'),
        document.getElementById('image15'),
        document.getElementById('image16'),
        document.getElementById('image17'),
        document.getElementById('image18'),
        document.getElementById('image19'),
        document.getElementById('image20'),
        document.getElementById('image21'),
        document.getElementById('image22'),
        document.getElementById('image23'),
        document.getElementById('image24'),
        document.getElementById('image25'),
        document.getElementById('image26'),
        document.getElementById('image27'),
        document.getElementById('image28'),
        document.getElementById('image29'),
        document.getElementById('image30'),
        document.getElementById('image31'),
        document.getElementById('image32'),        
    ];

    function loadImage(index) {
        if (index >= images.length) return;

        let img = images[index];
        let tempImg = new Image();
        tempImg.src = img.src;
        tempImg.onload = function() {
            img.src = tempImg.src;
            loadImage(index + 1);
        }
    }

    loadImage(0);
});