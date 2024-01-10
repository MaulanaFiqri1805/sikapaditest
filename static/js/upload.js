// image-upload.js
document.addEventListener("DOMContentLoaded", function () {
    const dragDropArea = document.getElementById("drag-drop-area");
    const imageUpload = document.getElementById("image-upload");
    const uploadedImage = document.getElementById("uploaded-image");

    function displayImage(file) {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    }

    dragDropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dragDropArea.style.backgroundColor = "#ddd";
    });

    dragDropArea.addEventListener("dragleave", () => {
        dragDropArea.style.backgroundColor = "#f1f1f1";
    });

    dragDropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dragDropArea.style.backgroundColor = "#f1f1f1";
        const file = e.dataTransfer.files[0];
        displayImage(file);
    });

    dragDropArea.addEventListener("click", () => {
        imageUpload.click();
    });

    imageUpload.addEventListener("change", () => {
        const file = imageUpload.files[0];
        displayImage(file);
    });

    document.getElementById("image-upload").addEventListener("change", function () {
        var input = this;
        var img = document.getElementById("uploaded-image");

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                img.src = e.target.result;
                img.style.display = "block";
            };

            reader.readAsDataURL(input.files[0]);
        }
    });
});
