// Cache at least one element using getElementById
const songForm = document.getElementById("song-form");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const songCount = document.getElementById("song-count");

// Cache at least one element using querySelector
const songList = document.querySelector(".song-list");

// Use at least two BOM properties or methods
let songs = JSON.parse(localStorage.getItem("songs"));

// Register at least two different event listeners
songForm.addEventListener("submit", addSong);

renderSongs();

function addSong(event) {
event.preventDefault();

const title = songTitle.value.trim();
  const artist = artistName.value.trim();
  
// Include at least one form and/or input with DOM event-based validation
  if (title.length < 2 || artist.length < 2) {
    alert("Minimum 2 characters.");
    return;
  }

  songs.push({
    title,
    artist,
    favorite: false,
  });

  saveSongs();
  renderSongs();
  songForm.reset();

// Use BOM method
  alert("Song added!");
}

function renderSongs() {
  songList.innerHTML = "";

// Use the DocumentFragment interface
  const fragment = document.createDocumentFragment();

// Iterate over a collection of elements to accomplish some task
  songs.forEach(function (song, index) {

// Create at least one element using createElement
    const li = document.createElement("li");
    const songInfo = document.createElement("p");
    const favoriteButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    li.classList.add("song-item");

// Modify style and/or CSS classes using classList
    if (song.favorite) {
      li.classList.add("favorite");
    }

// Modify the HTML or text content using textContent
    songInfo.textContent = `${song.title} — ${song.artist}`;
    favoriteButton.textContent = song.favorite ? "Unfavorite" : "Favorite";
    deleteButton.textContent = "Delete";

// Modify at least one attribute of an element
    favoriteButton.setAttribute("data-song", index);
    deleteButton.setAttribute("data-song", index);

// Register at least two different event listeners
    favoriteButton.addEventListener("click", toggleFavorite);
    deleteButton.addEventListener("click", deleteSong);

// Use appendChild to add new elements to the DOM
    li.appendChild(songInfo);
    li.appendChild(favoriteButton);
    li.appendChild(deleteButton);
    fragment.appendChild(li);
  });

  songList.appendChild(fragment);

// Modify text content in response to user interaction
  songCount.textContent = `Total Songs: ${songs.length}`;
}

function toggleFavorite(event) {
  const index = event.target.getAttribute("data-song");

  songs[index].favorite = !songs[index].favorite;

  saveSongs();
  renderSongs();
}

// Use parent-child-sibling relationship to navigate between elements
function deleteSong(event) {
  event.target.parentNode;

  songs.splice(event.target.getAttribute("data-song"));

  saveSongs();
  renderSongs();
}

// Use BOM property or method
function saveSongs() {
  localStorage.setItem("songs", JSON.stringify(songs));
}
