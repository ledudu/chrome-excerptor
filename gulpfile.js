var webpackConfig = require('./webpack.config.js');
var webpack = require('gulp-webpack');
var gulp = require('gulp');

gulp.task('webpack',function(){
	return gulp.src('./')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('.dist/'));
});

