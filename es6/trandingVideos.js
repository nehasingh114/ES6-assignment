let appendTranding = () => {
    let data = JSON.parse(localStorage.getItem("videos")) || [];
    let container = document.getElementById("play");
    container.innerHTML=null;
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.id}`;
    iframe.allow = "fullscreen";
    iframe.width = "100%"
    iframe.height = "600px"

    container.append(iframe);

}

appendTranding();