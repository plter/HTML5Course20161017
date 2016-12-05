/**
 * Created by plter on 2016/12/5.
 */

const Status = require("../source/Status");

function checkUserInput(req, res, next) {
    if (req.body.user) {
        next();
    } else {
        res.json(Status.makeResult(Status.STATE_NO_USER_INPUT, Status.STATE_NO_USER_INPUT_MESSAGE));
    }
}

function checkPasswordInput(req, res, next) {
    if (req.body.pass) {
        next();
    } else {
        res.json(Status.makeResult(Status.STATE_NO_PASSWORD_INPUT, Status.STATE_NO_PASSWORD_INPUT_MESSAGE));
    }
}

module.exports = {
    checkUserInput,
    checkPasswordInput
};