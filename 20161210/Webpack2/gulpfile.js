const gulp = require("gulp");
const webpack = require("gulp-webpack");

gulp.task("default",function () {
	gulp.src("main.js")
	.pipe(webpack(require("./webpack.config.js")))
	.pipe(gulp.dest(__dirname));
});