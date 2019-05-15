const {src, dest, parallel, watch} = require('gulp')
const stylus = require('gulp-stylus')

function css(){
    return src('main.styl')
    .pipe(stylus({
        compress:true
    }))
    .pipe(dest('css'))
}

exports.css = css

exports.default = function () {
    watch('main.styl',css)
}