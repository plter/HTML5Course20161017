/**
 * Created by plter on 2016/11/29.
 */

function PlayerController(audio, lrcContainer) {
    this._audio = audio;
    this._lrcContainer = lrcContainer;
}

PlayerController.prototype.playItem = function (item) {
    this._currentItem = item;
    var self = this;

    var reader = new FileReader();
    reader.onload = function () {
        self._audio.src = reader.result;
        self.tryToSyncLrc();
    };
    reader.readAsDataURL(item.getFile());
};

PlayerController.prototype.tryToSyncLrc = function () {

    this._lrcContainer.innerHTML = "";
    this._currentLrc = this._currentItem.getLrc();

    if (this._currentLrc) {
        this.startSyncLrcTimer();
    } else {
        this.stopSyncLrcTimer();
    }
};

PlayerController.prototype.startSyncLrcTimer = function () {
    var self = this;

    if (!this._syncLrcTimerRunning) {
        this._currentSyncLrcTimerId = setInterval(function () {
            var content = self._currentLrc[Math.round(self._audio.currentTime)];
            if (content) {
                self._lrcContainer.innerHTML = content;
            }
        }, 1000);
        this._syncLrcTimerRunning = true;
    }
};

PlayerController.prototype.stopSyncLrcTimer = function () {
    if (this._syncLrcTimerRunning) {
        clearInterval(this._currentSyncLrcTimerId);
        this._syncLrcTimerRunning = false;
    }
};

module.exports = PlayerController;