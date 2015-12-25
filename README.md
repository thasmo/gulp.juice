# Gulp Juice
> [Gulp][gulp] plugin to inline CSS in HTML files using Automattic's [Juice][juice].

## Usage
```js
var gulp = require('gulp'),
var juice = require('@thasmo/gulp-juice');

gulp.task('juice', function() {
  return gulp.src('*.html')
    .pipe(juice())
    .pipe(gulp.dest('.'))
});
```

### Options
See [Juice][juice]'s options.

## License
[MIT License][license]

[gulp]: http://gulpjs.com/
[juice]: https://github.com/Automattic/juice
[license]: http://opensource.org/licenses/MIT
