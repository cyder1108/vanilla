const gulp    = require("gulp");
const sass    = require("gulp-sass");
const cssmin  = require("gulp-cssmin");
const rename  = require("gulp-rename");
const concat  = require("gulp-concat");
const uglify  = require("gulp-uglify");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");


gulp.task("sass.compile", function(){ return (
  gulp.src( "assets/sass/*")
    .pipe( sass() )
    .pipe( gulp.dest("assets/css") )
)});

gulp.task("css.minify", function(){ return (
  gulp.src("assets/css/style.css")
    .pipe( cssmin() )
    .pipe( rename("style.min.css") )
    .pipe( gulp.dest("assets/css") )
)});

gulp.task("es.compile", function(){ return (
  gulp.src("assets/es/*.js")
    .pipe( webpackStream(webpackConfig, webpack) )
    .pipe( gulp.dest("assets/js") )
)});

gulp.task("css", gulp.series("sass.compile", "css.minify"));

gulp.task("js", gulp.series("es.compile"));

gulp.task("all", gulp.parallel("css","js"));

gulp.task("watch", function(){
  files = [
    "assets/es/*",
    "assets/sass/*",
  ];
  gulp.watch( files, gulp.series("all") );
});
