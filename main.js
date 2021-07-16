// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "Something Just Like This",
        artist: "Codeplay & The Chainsmokers",
        image: "https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png",
        path: "somethinglikethis.mp3",
    },
    {
        name: "ME!",
        artist: "Tailor Swift",
        image: "https://upload.wikimedia.org/wikipedia/en/0/01/Taylor_Swift_-_Me%21.png",
        path: "me.mp3",
    },
    {
        name: "Am I Wrong?",
        artist: "Nico & Vinz",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Nico-Vinz-Am-I-Wrong.png",
        path: "wrong.mp3",
    },
    {
        name: "We Don't Talk Anymore",
        artist: "Charlie Puth",
        image: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
        path: "notalkanymore.mp3",
    },
    {
        name: "On & On",
        artist: "Cartoon",
        image: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/1000x0/on-on-feat-daniel-levi-1586947008-oeI24in2Ga.jpg",
        path: "on&on.mp3",
    },
{
	name: "Electric",
	artist: "Katy Perry",
	image: "https://upload.wikimedia.org/wikipedia/en/d/df/Electric_%28Katy_Perry_song%29.png",
	path: "electric.mp3"
},
{
	name: "Roar",
	artist: "Katy Perry",
	image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Katy_Perry_-_Roar.png/220px-Katy_Perry_-_Roar.png",
	path: "roar.mp3"
},
{
	name: "Blank Space",
	artist: "Tailor Swift",
	image: "https://slm-assets.secondlife.com/assets/13117408/view_large/blank-space.jpg?1452140128",
	path: "blankspace.mp3",
},
{
	name: "Let Me Love You",
	artist: "DJ Snake",
	image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/DJSnakeLetMeLoveYou.jpg/220px-DJSnakeLetMeLoveYou.jpg",
	path: "letmeloveyou.mp3",
},
{
	name: "Sorry",
	artist: "Justin Bieber",
	image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_-_Sorry_%28Official_Single_Cover%29.png",
	path: "sorry.mp3",
},
{
	name: "Closer",
	artist: "Chainsmokers",
	image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
	path: "closer.mp3",
},
{
	name: "Baby",
	artist: "Justin Bieber",
	image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Babycoverart.jpg",
	path: "baby.mp3",
},
{
	name: "You Can Count Me",
	artist: "Bruno Mars",
	image: "https://c-fa.cdn.smule.com/rs-s79/arr/3a/0b/d2c1dc87-b241-4489-9f44-f64ea92b6a1c_1024.jpg",
	path: "countonme.mp3",
},
{
	name: "Shape Of You",
	artist: "Ed Sheeran",
	image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
	path: "shapeofu.mp3",
},
{
	name: "Girls Like You",
	artist: "Maroon 5",
	image: "https://i1.sndcdn.com/artworks-000386942226-i4u2y9-t500x500.jpg",
	path: "girlslikeu.mp3",
},
{
	name: "Love Me Like You Do",
	artist: "Ellie Goulding",
	image: "https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png",
	path: "lovemelikeudo.mp3",
},
{
	name: "Waka Waka (This Time For Africa)",
	artist: "Shakira",
	image: "https://i.ndtvimg.com/i/2016-01/shakira_640x480_81453894474.jpg",
	path: "wakawaka.mp3",
},
{
	name: "Shut Up And Drive",
	artist: "Rihanaa",
	image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Shut_Up_and_Drive_-_Single.PNG/220px-Shut_Up_and_Drive_-_Single.PNG",
	path: "shutupandrive.mp3",
},
{
	name: "Lean On",
	artist: "DJ Snake",
	image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Major_Lazer_and_DJ_Snake_-_Lean_On_%28feat._M%C3%98%29.png",
	path: "leanon.mp3",
},
{
	name: "Melt In My Touch",
	artist: "Vidya Vox",
	image: "https://i.ytimg.com/vi/w9KjZpuWmNw/maxresdefault.jpg",
	path: "meltmytouch.mp3",
},
{
	name: "Fly Away",
	artist: "The Fat Rat",
	image: "https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/AJbD265G3n/size_xxl.webp",
	path: "fly_away.mp3",
},
{
	name: "You Need To Calm Down",
	artist: "Tailor Swift",
	image: "https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/jfrjoalmc3djaor1hymw.png",
	path: "yntcd.mp3",
},
{
	name: "Don't Leave",
	artist: "Snakehip",
	image: "https://i.ytimg.com/vi/LpAhGNIeptI/maxresdefault.jpg",
	path: "dontleave.mp3",
},

];

function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    // Construct a color withe the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // Set the background to the new color
    document.body.style.background = bgColor;
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            // Load the first track in the tracklist
loadTrack(track_index);
