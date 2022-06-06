
const api_key="AIzaSyCmqFRXXEvW_v2oSfh__nJBTpxEg-wX3gk";

let Search = async() => {
    try {
        let query = document.getElementById('query').value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
        let res = await fetch(url);
        let data = await res.json();
        append(data.items);
    } catch (error) {
        console.log("error:", error);
    }
}

let Tranding = async() => {
    try {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`;
        let res = await fetch(url);
        let data = await res.json();
        appendTranding(data.items);
    } catch (error) {
        console.log("error:", error);
    }
}
Tranding();

let append = (data) => {
    let container = document.getElementById("results");
    container.innerHTML = null;
    data.forEach(({ id: {videoId}, snippet: {title}}) => {

        let video = {
            title,
            videoId,
        };



        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";
        let h3 = document.createElement("h3");
        h3.innerText = title;
        div.append(iframe, h3);

        div.onclick = () => {
            playVideo(video);
        }


        container.append(div)
    });
}


let appendTranding= (data) => {
    let container = document.getElementById("results");
    container.innerHTML = null;
    data.forEach(({ id, snippet: {title}}) => {

        let videos = {
            id,
            title,
        };



        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${id}`;
        // if(id==null){
        //     iframe.src = `https://www.youtube.com/embed/${videoId}`;
        // }
        iframe.allow = "fullscreen";
        let h3 = document.createElement("h3");
        h3.innerText = title;
        div.append(iframe, h3);

        div.onclick = () => {
            playVideoTranding(videos);
        }


        container.append(div)
    });
}

let playVideo = (video) => {
    window.location.href = "video.html";
    localStorage.setItem("video", JSON.stringify(video));
}
let playVideoTranding = (videos) => {
    window.location.href = "trandingPlay.html";
    localStorage.setItem("videos", JSON.stringify(videos));
}


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/Go8nTmfrQd8" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe>
*/