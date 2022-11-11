const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const shuffle = document.querySelector("#shuffle");
const replay = document.querySelector("#replay");
const ul = document.querySelector("ul");

const player = new MusicPlayer(MusicList);



window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(MusicList);
    isPlayingNow();
})

const displayMusic = (music) => {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
    isPlayingNow();
}




play.addEventListener("click", (e) => {
    // if(e.target.className=="fa-solid fa-pause"){
    //     e.target.className="fa-solid fa-play";
    //     audio.pause();
    // }else{
    //     e.target.className="fa-solid fa-pause";
    // }

    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();

})

const pauseMusic = () => {
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play"
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause"
    audio.play();
}

next.addEventListener("click", () => { nextMusic(); })

prev.addEventListener("click", () => { prevMusic(); })

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const calculateTime = (seconds) => {
    const minute = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    const updatedSecond = second < 10 ? `0${second}` : `${second}`
    return `${minute}:${updatedSecond}`;
}

audio.addEventListener("loadedmetadata", () => { //Audio ye müzik bağlandığında
    duration.textContent = calculateTime(audio.duration);
    //ProgressBar set Max and Min value
    progressBar.max = Math.floor(audio.duration);
});


//ProgressBar current time update
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime); //Progress's bar current time value;
    currentTime.textContent = calculateTime(progressBar.value);
});

audio.addEventListener("ended", () => {
    audio.loop = true;
})


//Progress Bar Advance The Time
progressBar.addEventListener("input", () => {
    currentTime.textContent = progressBar.value;
    audio.currentTime = progressBar.value;
})

let replayState = "off";
let continueState = "off";

replay.addEventListener("click", () => {
    if (replayState == "off") {
        replayState = "on";
        audio.loop = true;
        replay.style.color = "green";
    } else {
        replayState = "off";
        audio.loop = false;
        replay.style.color = "chocolate";
    }
})




volumeBar.addEventListener("input", (e) => {
    const value = e.target.value; //Currrent volumeBar value
    audio.volume = value / 100; //Audio nun volume biligis 0 ile 1 arası olduğu için volume bardan aldığımız value değerini 100 e bölmeliyiz.
    if (value == 0) {
        volume.className = "fa-solid fa-volume-off";
    } else {
        volume.className = "fa-solid fa-volume-high";
    }
})

let volumeState = "unmute";
volume.addEventListener("click", () => {
    if (volumeState === "unmute") {
        setMute();
    } else {
        setUnMute();
    }

})

const setMute = () => {
    audio.muted = true;
    volumeState = "muted";
    volume.className = "fa-solid fa-volume-off";
    volumeBar.value = 0;
}

const setUnMute = () => {
    audio.muted = false;
    volumeState = "unmute";
    volume.className = "fa-solid fa-volume-high";
    volumeBar.value = 100;
}

const displayMusicList = (list) => {
    for (let i = 0; i < list.length; i++) {
        let liTag = `
        <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
            <span>${list[i].getName()}</span>
            <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
            <audio class="music-${i}" src="mp3/${list[i].file}"></audio> <!--Mevcut şarkının o anki süre bilgisisini almak için audio tag ına mp3 uzantısını verdik-->
        </li>
        `;

        ul.insertAdjacentHTML("beforeend",liTag);
        
        let liAudioDurationTag = ul.querySelector(`#music-${i}`);
        let liAudioDuration = ul.querySelector(`.music-${i}`);

        liAudioDuration.addEventListener("loadeddata",() => { //When audio connect with this file data.
            // console.log(liAudioDuration.duration); //O an ki audio ye ait aktarılan file ın duration bilgisi saniye cinsinden.
            liAudioDurationTag.innerText = calculateTime(liAudioDuration.duration); //Dakika cinsinden mevcut süre bilgisi ekrana verdik
        });

       
    }
}

const selectedMusic = (li) => {
    const index = li.getAttribute("li-index");
    player.index = index;
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}   

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll("li")){
        if(li.classList.contains("playing")){
            li.classList.remove("playing");
        }

        if(li.getAttribute("li-index") == player.index){ //Şu an ki çalan şarkının index i ile etiketin index i aynı mı ?
            li.classList.add("playing");
        }
    }
}
