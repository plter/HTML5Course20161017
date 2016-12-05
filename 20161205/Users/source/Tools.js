/**
 * Created by plter on 2016/12/5.
 */

const md5 = require("md5-js");

class Tools {

    static translatePassword(pass, user) {
        return md5(md5(pass) + md5(user));
    }
}

module.exports = Tools;