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

function requireLogin(req, res, next) {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/users/login");
    }
}

/**
 * 该责任节点必须放在checkUserInput之后使用
 * @param req
 * @param res
 * @param next
 */
function checkCurrentUser(req, res, next) {
    if (req.session.currentUser &&
        req.session.currentUser.user == req.body.user) {
        next();
    } else {
        res.json(Status.makeResult(Status.STATE_ACCESS_DENIED, Status.STATE_ACCESS_DENIED_MESSAGE));
    }
}

function checkUserIdInput(req, res, next) {
    if (req.body.id) {
        next();
    } else {
        res.json(Status.makeResult(Status.STATE_NO_USER_ID_INPUT, Status.STATE_NO_USER_ID_INPUT_MESSAGE));
    }
}

function checkAgeInput(req, res, next) {
    if (req.body.age) {
        next();
    } else {
        res.json(Status.makeResult(Status.STATE_NO_AGE_INPUT, Status.STATE_NO_AGE_INPUT_MESSAGE));
    }
}

module.exports = {
    checkUserInput,
    checkPasswordInput,
    requireLogin,
    checkUserIdInput,
    checkAgeInput,
    checkCurrentUser
};