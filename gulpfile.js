const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
// const errorHandler = require('gulp-error-handle');
const browserSync = require('browser-sync').create();
// const reload = browserSync.reload;

// handler error for pug
// function logError (error) {
//   console.error.bind(error);
//   this.emit('end');
// }

  // Compile Sass to Css
  const compilingSass = ()=> {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
  }
  exports.compilingSass = compilingSass;


  // Compile pug to html
  const compilingPug = () =>{
    return gulp.src('./src/pug/**/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.stream())
    }
exports.compilingPug = compilingPug;


const watch = () =>{
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  });
  gulp.watch('./src/sass/**/*.scss', compilingSass);
  gulp.watch('./src/pug/**/*.pug', compilingPug);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload)
}
exports.watch = watch;


  
