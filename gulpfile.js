var gulp = require('gulp'),
	webpack = require('webpack');


// webpack2 打包
gulp.task('webpack', () => {
	let webpackConfig = require('./webpack.config.js');
	webpack(webpackConfig, (err, stats) => {
		return err ? console.log(err, stats.toString()) : null;
	});
});

gulp.task('default', ['webpack'], () => {
	copy('app/manifest.json');
	copy('app/css/content.css','./dist/css');
});


// watch
var watcher = gulp.watch('./app/**',['default'])
watcher.on('change',(event) => {
	console.log(event.path + ' was ' + event.type + ', running tasks...')
})

// utils
function copy(path, dist) {
	dist = dist || './dist';
	gulp.src(path)
		.pipe(gulp.dest(dist));
}