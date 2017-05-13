function getGameLog() {
    var codeToInject = "document.querySelector('div.game-log-results').innerText.trim();";
    getActiveTab((tab) => {
        chrome.tabs.executeScript(tab.id, { code: codeToInject }, (result) => {
            console.log(result)
            if (typeof result[0] !== "string") {
                renderStatus("Game data not found... has the game finished?")
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://www.windominion.com:8088/analyze", true);
                xhr.onload = function () {
                    var res = JSON.parse(this.responseText);
                    chrome.tabs.create({ url: "http://www.windominion.com/" + res.key });
                };
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.send(JSON.stringify({ input: result[0] }));
            }
        })
    });

}

function getActiveTab(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    callback(tab);
  });
}

function renderStatus(str) {
    document.getElementById("status").innerText = str;
}

document.addEventListener('DOMContentLoaded', function() {
   setTimeout(getGameLog, 2000);
});