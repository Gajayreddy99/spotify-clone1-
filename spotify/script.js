console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('oy oy song.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"oye oye" ,filepath: "song/oy oy song.mp3" ,coverpath:"covers/oy oy song.mp3"},
    {songName:"song2" ,filepath: "song/song2.mp3" ,coverpath:"covers/song2.mp3"},
    {songName:"song3" ,filepath: "song/song3.mp3" ,coverpath:"covers/song3.mp3"},
    {songName:"song4" ,filepath: "song/song4.mp3" ,coverpath:"covers/song4.mp3"},
    {songName:"song5" ,filepath: "song/song5.mp3" ,coverpath:"covers/song5.mp3"},
    {songName:"song6" ,filepath: "song/song6.mp3" ,coverpath:"covers/song6.mp3"},
    {songName:"song7" ,filepath: "song/song7.mp3" ,coverpath:"covers/song7.mp3"},
]
// let audioElement=new Audio('oy oy song.mp3')
songitem.forEach(element => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[1].filepath;
});



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
   // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
     myProcessbar.value = progress;
    
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressbar.value * audioElement.duration/100;
})
  
// Array.from(document.getElementsByClassName('songitemplay')).forEach(element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e);
//     })





 