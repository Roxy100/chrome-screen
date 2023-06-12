(function () {
  const bookmarkOpen = document.getElementById('bookmark-open');
  const bookmarkClose = document.getElementById('bookmark-close');
  const bookmarkBar = document.getElementById('bookmark-bar');

  // 북마크 바 (웹사이트 종료 후에 존재유무)
  const isBookMarkBarOpen = localStorage.getItem('isBookMarkBarOpen');
  if (isBookMarkBarOpen === 'close') {
    //localStorage에 isBookMarkBarOpen이 close라면
    bookmarkBar.style.display = 'none';
    bookmarkOpen.style.display = 'none';
    bookmarkClose.style.display = 'flex';
  } else {
    //localStorage에 isBookMarkBarOpen이 open이라면
    bookmarkBar.style.display = 'block';
    bookmarkOpen.style.display = 'flex';
    bookmarkClose.style.display = 'none';
  }

  // 북마크 바 toggle
  const bookmarkBarToggle = () => {
    const isBookMarkBarOpen = localStorage.getItem('isBookmarkBarOpen');
    // 북마크바를 여는 상황
    if (isBookMarkBarOpen === 'close') {
      localStorage.setItem('isBookmarkBarOpen', 'open');
      bookmarkBar.style.display = 'block';
      bookmarkOpen.style.display = 'flex';
      bookmarkClose.style.display = 'none';
      return;
    }
    // 북마크바를 닫는 상황
    localStorage.setItem('isBookmarkBarOpen', 'close');
    bookmarkBar.style.display = 'none';
    bookmarkOpen.style.display = 'none';
    bookmarkClose.style.display = 'flex';
  };

  document
    .getElementById('bookmark-open-btn')
    .addEventListener('click', bookmarkBarToggle);
  document
    .getElementById('bookmark-close-btn')
    .addEventListener('click', bookmarkBarToggle);
})();
