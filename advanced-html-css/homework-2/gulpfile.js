const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require("gulp-file-include");
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const clean_css = require("gulp-clean-css");
const del = require('delete');
const imagemin = require("gulp-imagemin");

function buildHTML() {
    return gulp.src('src/*.html')
        .pipe(fileinclude())
        .pipe(concat('index.html'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
}

function copyCSS() {
    return gulp.src("src/css/*.css")
        .pipe(clean_css()) 
        .pipe(
            rename({
                extname: ".min.css"
                })
            )
        .pipe(gulp.dest("dist/css"))
}

function buildCSS() { 
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('css/style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(clean_css())
        .pipe(autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))      
        .pipe(
            rename({
              extname: ".min.css"
            })
        )
        .pipe(gulp.dest('dist'))
}

function buildJS() {
    return gulp.src('src/js/*.js')
        .pipe(concat('js/script.js'))
        .pipe(fileinclude())
        .pipe(gulp.dest('dist'))
        .pipe(terser())
        .pipe(
            rename({
              extname: ".min.js"
            })
          )
        .pipe(gulp.dest('dist'))
}

function buildImages() {
    return gulp.src('src/img/**')
        .pipe(
            imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(gulp.dest('dist/img'))
}

function clean() {
    return del('dist/**', { force: true });
}

function build() {
    return gulp.series([
        clean,
        gulp.parallel([
            buildImages,
            buildCSS,
            copyCSS,
            buildHTML,
            buildJS
        ])
    ])
}

function start() {
    gulp.watch('src/**/*', build())
}

exports.buildHTML = buildHTML;
exports.buildCSS = buildCSS;
exports.copyCSS = copyCSS;
exports.buildJS = buildJS;
exports.clean = clean;
exports.start = start;
exports.default = build();