/**
 * Created by plter on 2016/11/29.
 */

(function () {

    File.prototype.getExtension = function () {
        var lastDotPosition = this.name.lastIndexOf(".");

        if (lastDotPosition != -1) {
            return this.name.substr(lastDotPosition + 1).toLowerCase();
        } else {
            return null;
        }
    };

    File.prototype.getNameWithoutExtension = function () {
        var lastDotPosition = this.name.lastIndexOf(".");

        if (lastDotPosition != -1) {
            return this.name.substring(0, lastDotPosition);
        } else {
            return this.name;
        }
    };


    File.prototype.getUriEncodedName = function () {
        return encodeURI(this.getNameWithoutExtension());
    }

})();