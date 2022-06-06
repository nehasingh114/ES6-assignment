let append = () => {
    let data = JSON.parse(localStorage.getItem("video")) || [];
    let container = document.getElementById("play");
    container.innerHTML = null;
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
    iframe.allow = "fullscreen";
    iframe.width = "100%"
    iframe.height = "600px"

    container.append(iframe);

}


    append();
