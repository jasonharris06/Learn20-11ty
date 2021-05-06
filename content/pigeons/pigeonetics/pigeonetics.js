$(document).ready(function(){
  var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Pigeonetics.json", {onProgress: Prog});
  var canvasEl = document.getElementById('#canvas');
  var needsLayout = true;

  function Prog(gameInstance, progress) {
    if(needsLayout) {
      // Unity monkeys with the style after it loads, should probably find a better way at some point //
      canvasEl.style.position = "absolute";
      canvasEl.style.top = "0px";
      gameInstance.container.style.paddingTop = "75%";
      needsLayout = false;
    }

    // ----- Progress Bar ----- //
    if (!gameInstance.progress) {
      gameInstance.progress = document.createElement('div');
      gameInstance.progress.className = 'progress ' + gameInstance.Module.splashScreenStyle;
      gameInstance.progress.empty = document.createElement('div');
      gameInstance.progress.empty.className = 'empty';
      gameInstance.progress.appendChild(gameInstance.progress.empty);
      gameInstance.progress.full = document.createElement('div');
      gameInstance.progress.full.className = 'full';
      gameInstance.progress.appendChild(gameInstance.progress.full);
      gameInstance.container.appendChild(gameInstance.progress);
    }
    gameInstance.progress.full.style.width = (100 * progress) + '%';
    gameInstance.progress.empty.style.width = (100 * (1 - progress)) + '%';
    if(progress == 1) {
      gameInstance.progress.style.display = "none";
    }
  }

  // function resize(e) {
  //   gameInstance.SendMessage("MainCamera", "Resize", devicePixelRatio);
  // };
  // window.addEventListener("resize", _.debounce(resize, 100));
});
