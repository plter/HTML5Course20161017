/**
 * Created by plter on 2016/12/14.
 */

function loadData(url) {
    return new Promise(function (resolve, reject) {
        window.$.get(url).done(resolve).fail(reject);
    });
}

async function run() {
    let result = await loadData("data1.txt");
    console.log(result);

    console.log(await loadData("data2.txt"));
    console.log(await loadData("data3.txt"));
}

run();