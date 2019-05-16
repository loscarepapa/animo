const {src, dest, parallel, watch} = require('gulp')
const stylus = require('gulp-stylus')
var browserSync = require('browser-sync').create()

function css(){
    return src('main.styl')
    .pipe(stylus({
        compress:true
    }))
    .pipe(dest('css'))
    .pipe(browserSync.stream())
}
function assets(){
    return src('assets/*')
    .pipe(dest('public'))
}
function browser(){
    return browserSync.init({
        server:{
            baseDir: "./"
        }
    })

}

exports.css = css
exports.assets = assets
exports.browser = browser

exports.default = function () {
    watch('main.styl',css)
    watch('assets',assets)
    watch('main.js').on('change', browserSync.reload)
    browser();
}