const pages = ["#about", "#projects", "#work", "#contact"]




window.onload = function() { 
  
  let selector = `div[href="${window.location.hash}"]`

  let prev = window.location.hash
  window.location.hash = ""
  window.location.hash = prev

  $(selector)[0].scrollIntoView({
    behavior: 'smooth',
    block:'start'
  });

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

}

window.onhashchange = function() { 

  let selector = `div[href="${window.location.hash}"]`

  $(selector)[0].scrollIntoView({
    behavior: 'smooth',
    block:'start'
  });
}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' && pages.indexOf(window.location.hash) != 0) {
        // up arrow
        window.location.hash = pages[(pages.indexOf(window.location.hash) - 1) % pages.length]

    }
    else if (e.keyCode == '40') {
        // down arrow
        window.location.hash = pages[(pages.indexOf(window.location.hash) + 1) % pages.length]

    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}