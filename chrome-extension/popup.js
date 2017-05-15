function getGameLog() {
    var codeToInject = `
        var log = document.querySelector('div.game-log-results').innerText.trim();
        var scoreTables = Array.prototype.map.call( document.querySelectorAll("score-content"), playerScoreGrid => {
            return {
                name: playerScoreGrid.querySelector("div.score-label").innerText,
                scoreTable: Array.prototype.map.call(playerScoreGrid.querySelectorAll("div.ui-grid-row"), row => Array.prototype.map.call(row.querySelectorAll("[role='gridcell']"), cell => cell.innerText.trim()) )
            };
        });
        [log, scoreTables];
    `;
    getActiveTab((tab) => {
        chrome.tabs.executeScript(tab.id, { code: codeToInject }, (result) => {
            result = result[0];
            if (!result || typeof result[0] !== "string") {
                renderStatus("Game data not found... has the game finished?")
            } else {
                var gameLogWithScores = result[0];
                // append scores metadata to log
                gameLogWithScores += "\n~metadata~\n";
                gameLogWithScores += "scoreTables: " + JSON.stringify(result[1]) + "\n";

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://www.windominion.com:8088/analyze", true);
                xhr.onload = function () {
                    var res = JSON.parse(this.responseText);
                    chrome.tabs.create({ url: "http://www.windominion.com/" + res.key });
                };
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.send(JSON.stringify({ input: gameLogWithScores }));
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