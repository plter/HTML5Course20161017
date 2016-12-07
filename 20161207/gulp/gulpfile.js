/**
 * Created by plter on 2016/12/7.
 */

const gulp = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const SRC_DIR = `${__dirname}/src`;

gulp.task("copyHtmlFiles", function () {
    gulp.src("./src/*.html").pipe(gulp.dest("build"));
});

gulp.task("copyJsFiles", function () {
    gulp.src([
        `${SRC_DIR}/Hello.js`,
        `${SRC_DIR}/main.js`
    ]).pipe(concat("main.js"))
        .pipe(minify())
        .pipe(gulp.dest("build"));
});

gulp.task("task1", function () {
    console.log("task1");
});

gulp.task("default", ["copyHtmlFiles", "copyJsFiles"]);

