/**
 * Created by plter on 2016/11/29.
 */

function Lrc(lrcString) {
    var p = /\[(\d{2}):(\d{2})\.\d{2}\](.*)/g;

    var result;

    while (result = p.exec(lrcString)) {
        this[parseInt(result[1]) * 60 + parseInt(result[2])] = result[3];
    }
}

module.exports = Lrc;