$(document).ready(function(){
  var gameInstance = UnityLoader.instantiate("gameContainer", "Build/Build.json", {onProgress: Prog});
  var canvasEl = document.getElementById('#canvas');
  var needsLayout = true;

  function Prog(gameInstance, progress) {
    if(needsLayout) {
      // Unity monkeys with the style after it loads, should probably find a better way at some point //
      canvasEl.style.position = "absolute";
      canvasEl.style.top = "0px";
      gameInstance.container.style.paddingTop = "56.25%";
      needsLayout = false;
    }
    //----- TODO: Update a progress bar -----//
    if(progress == 1) {
      //----- completed -----//
    }
  }

  // function resize(e) {
  // };
  // window.addEventListener("resize", _.debounce(resize, 60));
});
