///<reference path="node_modules/@types/jquery/index.d.ts"/>
/**
 * Created by plter on 2016/12/7.
 */


function loadData(url) {
    return new Promise(function (resolve, reject) {
        $.get(url).done(resolve).fail(reject);
    });
}

async function run() {
    let result = await loadData("data.txt");
    console.log(result);

    result = await loadData("data1.txt");
    console.log(result);

    result = await loadData("data2.txt");
    console.log(result);
}

run();