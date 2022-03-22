var toggle = true;

function sendToggle() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "toggle"}, function(response) {});
    });
}

window.addEventListener("load", function () {
    var toggleButton = document.getElementById("toggle");
    toggleButton.addEventListener('click',function () {
        if(toggle){
            document.getElementsByTagName("img")[0].src="images/bombon.png";
        } else {
            document.getElementsByTagName("img")[0].src="images/bomboff.png";
        }
        toggle = !toggle;
        try {
            sendToggle();
        }
        catch {}
    });
});