var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = {
    html: {
        main: 'src/index.jade',
        output: 'build',
        watch: 'src/**/*.jade'
    },
    styles: {
        main: 'src/styles/main.styl',
        output: 'build/css',
        watch: 'src/styles/**/*.styl'
    }
}

gulp.task('build:html', function() {
    return gulp.src(config.html.main)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(config.html.output))
        .pipe(reload({stream:true}));
});

gulp.task('build:css', function() {
    var browsers = [
        'ie >= 10',
        'ie_mob >=10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

  return gulp.src(config.styles.main)
    .pipe(stylus({
        'include css': true,
        use: autoprefixer({browsers: browsers})
    }))
    .pipe(gulp.dest(config.styles.output))
    .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: "build"
    },
    notify: false,
    logPrefix: 'pruebas',
    port: 3000
  });
});

gulp.task('watch', function() {
    gulp.watch(config.html.watch, ['build:html']);
    gulp.watch(config.styles.watch, ['build:css']);
});

gulp.task('default', ['browser-sync', 'watch']);