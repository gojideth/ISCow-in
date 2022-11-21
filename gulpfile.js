const{src,dest,watch} = require('gulp');
const sass= require('gulp-sass')(require('sass'));
const plumber= require('gulp-plumber');
function css(done){
    src('src/views/scss/**/*.scss')//ubica
        .pipe(plumber())
        .pipe(sass())//compila
        .pipe(dest('src/views/css'))//guarda
    done();
}

function dev(done){
    watch('src/views/scss/**/*.scss',css);
    done();
}

exports.css=css;
exports.dev= dev;