/**
 * Created by plter on 2016/12/5.
 */


const Status = {
    STATE_OK: 1,
    STATE_OK_MESSAGE: "OK",
    STATE_NO_USER_INPUT: 10001,
    STATE_NO_USER_INPUT_MESSAGE: "No user input",
    STATE_NO_PASSWORD_INPUT: 10002,
    STATE_NO_PASSWORD_INPUT_MESSAGE: "No password input",

    makeResult: function (code, messgae) {
        return {code: code, messgae: messgae};
    },

    makeOkResult: function () {
        return Status.makeResult(Status.STATE_OK, Status.STATE_OK_MESSAGE);
    }
};

module.exports = Status;