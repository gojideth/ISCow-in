import { src, dest, watch } from 'gulp';
const sass= require('gulp-sass')(require('sass'));
import plumber from 'gulp-plumber';
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

const _css = css;
export { _css as css };
const _dev = dev;
export { _dev as dev };