var gulp           = require('gulp'),
    del            = require('del'),
    tap            = require('gulp-tap'),
    data           = require('gulp-data'),
    path           = require('path'),
    merge          = require('merge-stream'),
    sass           = require('gulp-sass'),
    gulpif         = require('gulp-if'),
    useref         = require('gulp-useref'),
    uglify         = require('gulp-uglify'),
    cssnano        = require('gulp-cssnano'),
    jshint         = require('gulp-jshint'),
    stylish        = require('jshint-stylish'),
    sasslint       = require('gulp-sass-lint'),
    minifycss      = require('gulp-minify-css'),
    htmlmin        = require('gulp-htmlmin'),
    imagemin       = require('gulp-imagemin'),
    runSequence    = require('run-sequence'),
    browserSync    = require('browser-sync'),
    autoprefixer   = require('gulp-autoprefixer'),
    nunjucksRender = require('gulp-nunjucks-render');

gulp.task('useref', function () {
    return gulp.src('dev/**/*.html')
        .pipe(useref({
            transformPath: function(path) {
                return path.replace('../node_modules', './node_modules');
            }
        }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('assetsmin', function () {
    return gulp.src('app/assets/**/*.{png,jpg,jpeg,gif,ico,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('minify', function() {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del.sync(['dev', 'dist']);
});

gulp.task('nunjucks', function() {
    // Gets .html files in pages
    return gulp.src('app/pages/**/*.html')
        .pipe(tap(function (file, t) {
            var filename = path.basename(file.path, '.html');
            var dataPath = path.join(__dirname, 'app', 'data', filename + '.json');
            return gulp.src(file.path)
                // Adding data to Nunjucks
                .pipe(data(function() {
                    return require(dataPath);
                }))
                // Renders template with nunjucks
                .pipe(nunjucksRender({
                    data: { filename: filename },
                    path: ['app/templates']
                }))
                // output files in dev folder
                .pipe(gulp.dest('dev'))
                // Reload the browser
                .pipe(browserSync.reload({
                    stream: true
                }));
        }))
        // Reload the browser
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('dev/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('autoprefixer', function () {
    gulp.src('dist/styles/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('copyscripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe(gulp.dest('dev/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copyassets', function () {
    return gulp.src('app/assets/**/*')
        .pipe(gulp.dest('dev/assets'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('copydata', function () {
    return gulp.src('app/data/**/*')
        .pipe(gulp.dest('dev/data'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('builddata', function () {
    return gulp.src('app/data/**/*')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('copyfonts', function() {
    var bootstrap = gulp.src('./node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest('dist/fonts'));

    var fontawesome = gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts'));

    var revicons = gulp.src('./libs/revolution/fonts/revicons/*')
        .pipe(gulp.dest('dist/fonts/revicons'));

    return merge(bootstrap, fontawesome, revicons);
});

gulp.task('copyvideos', function () {
  return gulp.src('app/assets/videos/**/*')
    .pipe(gulp.dest('dist/assets/videos'));
});

gulp.task('sasslint', function () {
    return gulp.src('app/scss/**/*.s+(a|c)ss')
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
});

gulp.task('jslint', function() {
  return gulp.src('app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('dev', [
    'clean',
    'nunjucks',
    'sass',
    'copyscripts',
    'copyassets',
    'copydata',
], function () {});

/**
 * build task
 */
gulp.task('build', ['dev'], function () {
    runSequence(
        'useref',
        'autoprefixer',
        'copyfonts',
        'copyvideos',
        'assetsmin',
        'builddata',
        'minify'
    );
});

/**
 * browser sync
 */
gulp.task('browserSync', function () {
    browserSync.init({
        startPath:'./dev',
        server: {
            baseDir: './'
        }
    });
});

/**
 * watch task
 */
gulp.task('watch', [
    'dev',
    'browserSync',
], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/assets/**/*', ['copyassets']);
    gulp.watch('app/scripts/**/*.js', ['copyscripts']);
    gulp.watch('app/data/**/*.json', ['nunjucks']);
    gulp.watch('app/{pages,templates}/**/*.{html,tmpl}', ['nunjucks']);
});
