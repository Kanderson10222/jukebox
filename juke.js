var audio = document.getElementById('myJukebox');

var player = {
  currentSong: 0,
  songs: ["music/song1.mp3", "music/song2.mp3", "music/song3.mp3"],

  play: function() {
    audio.play();

  },

  playsong: function(id) {

    this.currentSong = id;
    audio.src = this.songs[this.currentSong];
    this.play();
  },


  pause: function() {
    audio.pause();
  },

  stop: function() {
    audio.pause();
    audio.currentTime = 0;
  },
  next: function() {
    this.currentSong++;
    this.currentSong %= this.songs.length;
    audio.src = this.songs[this.currentSong];
    this.play();
  },
  //
  pre: function() {
    this.currentSong--;
    this.currentSong %= this.songs.length - 1;
    audio.src = this.songs[this.currentSong];
    this.play();
  }

};
window.addEventListener("load", player);