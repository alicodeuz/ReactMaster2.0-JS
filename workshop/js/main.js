window.addEventListener('load', () => {
  displayAllAlbums();
})

function displayAllAlbums() {
  const albums = Object.values(localStorage);
  const albumsList = document.getElementById('albums-list');
  albumsList.innerHTML = '';
  const allFilteredAlbums = albums.filter(item => {
    const isObject = item.startsWith('{');
    if (isObject) {
      const currentAlbum = JSON.parse(item);
      console.log(currentAlbum)
      if (currentAlbum.id) {
        return true;
      }
    }
  });

  allFilteredAlbums.forEach(item => {
    const { id, url, description, album: title } = JSON.parse(item);

    albumsList.innerHTML += `
    <div class="col-sm-4 col-md-3">
      <div class="card bg-dark__light">
        <img src="${url}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h5 class="card-title text-light">${title}</h5>
            <p class="card-text fs-6">${description}</p>
        </div>
        <div type="div" onclick="deleteAlbum('${id}')">Remove</div>
      </div>
    </div>
    `
  })
}

function createAlbum(event) {
  event.preventDefault();
  const { url, album, description } = event.target;
  const newAlbum = {
    url: url.value,
    album: album.value,
    description: description.value,
    id: `album_${Date.now()}`
  };

  localStorage.setItem(newAlbum.id, JSON.stringify(newAlbum));
  showMessage('Album is removed', 'Removed');
  displayAllAlbums();

  document.querySelector('#myModal .btn-close').click();
  event.target.reset();
}

function showMessage(msg, title) {
  var toastLiveExample = document.getElementById('liveToast')
  const toastTitle = document.getElementById('msg-title');
  const toastBody = document.getElementById('msg');
  toastBody.innerText = msg;
  toastTitle.innerText = title;
  var toast = new bootstrap.Toast(toastLiveExample)
  toast.show();
}

function deleteAlbum(id) {
  localStorage.removeItem(id);
  showMessage('Album is removed', 'Removed');
  displayAllAlbums();
}