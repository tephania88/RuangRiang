function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bEHV9ouA0z":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.05;
}

