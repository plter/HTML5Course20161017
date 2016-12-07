///<reference path="node_modules/@types/jquery/index.d.ts"/>
/**
 * Created by plter on 2016/12/7.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator.throw(value));
                } catch (e) {
                    reject(e);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : new P(function (resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
function loadData(url) {
    return new Promise(function (resolve, reject) {
        $.get(url).done(resolve).fail(reject);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function*() {
        let result = yield loadData("data.txt");
        console.log(result);
        result = yield loadData("data1.txt");
        console.log(result);
        result = yield loadData("data2.txt");
        console.log(result);
    });
}
run();
//# sourceMappingURL=async.js.map