var gulp    	= 	require('gulp'), // Gulp
	babel		= 	require('gulp-babel'), // Babel
	uglify  	= 	require('gulp-uglify'), // Minify
	concat  	= 	require('gulp-concat'), // Concate
	plumber 	= 	require('gulp-plumber'), // Lint the code
	sass		=	require('gulp-sass')(require('sass')) // Sass
 
// Minify e concate scripts
gulp.task('js-compiler', e => {
	return gulp.src([
		'js/**/*.js', '!js/**/index.js'
	])
	.pipe(plumber())
	.pipe(babel({
		compact: false,
		comments: false,
		presets: [ '@babel/env' ],
	}))
	.pipe(concat('index.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'))
})

// Compile the sass file's
gulp.task('sass-compiler', e => {
	return gulp.src('sass/**/*.{scss, sass}')
		.pipe(
			sass.sync({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('dist/'))
})

// Watch the js files
gulp.task('js', e => {
	gulp.watch([
		'js/**/*.js'
	], gulp.parallel([
		'js-compiler'
	]))
})

// Watch the sass files
gulp.task('sass', e => {
	gulp.watch([
		'sass/**/*.scss'
	], gulp.parallel([
		'sass-compiler'
	]))
})
