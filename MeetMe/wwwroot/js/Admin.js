
//admin.js'i layout'a sürükle.

//data-preview-image-target="#img-id">
var previewImageInitialSrc = null;
var previewImageInitialVisible = null;

$("[data-preview-image-target]").on("input", function (event) {
    var input = this;
    var targetImage = $(this).data("preview-image-target");
    var img = $(targetImage)[0];

    if (previewImageInitialVisible == null) {
        previewImageInitialVisible = img.style.display != "none";
    }
    
    //edit'te değiştirmek istediğin meetinde resim varsa onu yedeklesin. Böylece resim değişikliği yapılmazsa eskisi gelsin. 
    if (!previewImageInitialSrc == null) {
        previewImageInitialSrc = img.src;
    }

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        //reader okumayı bitirdiğinde
        reader.onload = function (e) {
            //okunan resmi <img..> elementi üzerinde göster
            img.src = e.target.result;
            img.style.display = "inline";
        };
        reader.readAsDataURL(input.files[0]);
    }
    else {
        //yeni bir resim seçtikten sonra tekrar değiştirmek için browse'a basıp sonra iptal edersen ilk haline döner.
        if (previewImageInitialSrc) {
            img.src = previewImageInitialSrc;
        }
        else {
            if (previewImageInitialVisible) {
                img.src = previewImageInitialSrc;
                img.style.display = "inline";
            }
            else {
                img.style.display = "none";
            }
        }
    }
});