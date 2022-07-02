var typed = new Typed(".auto-type", {
  strings: [
    "Thanks <span style='color:#ffce48'>4B.</span>",
    "Thanks for the <span style='color:#ffce48'>love.</span>",
    "Thanks for the <span style='color:#ffce48'>support.</span>",
    "Thanks for <span style='color: #ffce48'> being there for me.</span>",
    "I'm off to my next journey. Wishing you all the best :) <span style='color: #ffce48'>- Brandon</span>",
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: false,
});


function reloadPage(){
    $(".arrow").click(function(){
        location.reload();
    })

}