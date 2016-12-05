/**
 * Created by plter on 2016/12/5.
 */

module.exports = {
    STATE_NO_USER_INPUT: 10001,
    STATE_NO_USER_INPUT_MESSAGE: "No user input",
    STATE_NO_PASSWORD_INPUT: 10002,
    STATE_NO_PASSWORD_INPUT_MESSAGE: "No password input",

    makeResult: function (code, messgae) {
        return {code: code, messgae: messgae};
    }
};