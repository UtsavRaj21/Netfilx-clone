let PlayList_songs=document.querySelectorAll(".movies");

for(let i of PlayList_songs) {
    i.addEventListener("click", function(e) {
        console.log(this.id);
        window.location.href = 'details.html';
    })
  }

  