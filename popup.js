let changeColor = document.getElementById('changeColor');
var bkg = chrome.extension.getBackgroundPage();

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = element => {

    let color = element.target.value;
    bkg.console.log(color)
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let tabId = tabs[0].id;
        chrome.tabs.executeScript(tabId, {code: 'alert("hjio");'})
    });
}