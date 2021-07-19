document.onkeydown = function(e) {
  switch(e.which) {
      case 37: // left arrow
        goToLink('_prevEpisode')
      break;

      case 39: // right arrow
        goToLink('_nextEpisode')
      break;

      default: return;
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
};

function goToLink(className) {
  try {
    document.getElementsByClassName(className)[0].click();
  } catch (error) {
    console.log('You are not at a chapter reader')
  } 
}