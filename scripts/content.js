/*
 * @secretjs is file containing secret data
 * @Define `const googleAPi` on secret.js
 */

// content.js

// Globals
let currentBlogId = location.pathname.replace("/blog/themes/edit/", "");
let fetchURL = `https://content-blogger.googleapis.com/v3/blogs/${currentBlogId}?key=${googleApi}`;

// Blogger Custom Editor shortcuts ...
document.addEventListener("keydown", (event) => {
  if (
    !document.getElementById("snippets") &&
    location.pathname.includes("/blog/themes/edit/")
  ) {
    snippetCall();
  }

  let ctrl = event.ctrlKey,
    code = event.which || event.keyCode,
    currentBlogId = location.pathname.replace("/blog/themes/edit/", ""),
    fetchURL = `https://content-blogger.googleapis.com/v3/blogs/${currentBlogId}?key=${googleApi}`;

  // Ctrl+ shortcuts
  if (ctrl) {
    switch (code) {
      case 83:
        event.preventDefault();
        document.querySelector('div[role="button"][aria-label="Save"]').click();
        break;
      case 73:
        event.preventDefault();
        document
          .querySelector('div[role="button"][aria-label~="Preview"]')
          .click();
        break;
      case 32:
        event.preventDefault();
        if (localStorage.getItem(currentBlogId)) {
          window.open(localStorage.getItem(currentBlogId));
        } else {
          fetch(fetchURL)
            .then((response) => response.json())
            .then((data) => {
              localStorage.setItem(currentBlogId, data.url);
              window.open(data.url);
            });
        }
        break;
      default:
        break;
    }
    return false;
  }
});

// Save blog url on local storage
if (
  location.pathname.includes("/blog/themes/edit/") &&
  !localStorage.getItem(currentBlogId)
) {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem(currentBlogId, data.url);
    });
}
