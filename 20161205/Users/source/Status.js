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
        STATE_NO_SUCH_USER: 10003,
        STATE_NO_SUCH_USER_MESSAGE: "No such user",
        STATE_PASSWORD_ERROR: 10004,
        STATE_PASSWORD_ERROR_MESSAGE: "Password error",
        STATE_NO_USER_ID_INPUT: 10005,
        STATE_NO_USER_ID_INPUT_MESSAGE: "No user id input",
        STATE_NO_AGE_INPUT: 10006,
        STATE_NO_AGE_INPUT_MESSAGE: "No age input",
        STATE_ACCESS_DENIED: 20001,
        STATE_ACCESS_DENIED_MESSAGE: "Access denied",

        makeResult: function (code, messgae, result) {
            var obj = {code: code, messgae: messgae};
            if (result) {
                obj.result = result;
            }
            return obj;
        }
        ,

        makeOkResult: function (result) {
            return Status.makeResult(Status.STATE_OK, Status.STATE_OK_MESSAGE, result);
        }
    }
    ;

module.exports = Status;