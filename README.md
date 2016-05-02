# Gulp Juice
> [Gulp][gulp] plugin to inline CSS in HTML files using Automattic's [Juice][juice].

## Usage
```js
var gulp = require('gulp');
var juice = require('@thasmo/gulp-juice');

gulp.task('juice', function() {
  return gulp.src('*.html')
    .pipe(juice({
      includeResources: true
    }))
    .pipe(gulp.dest('.'))
});
```

### Options

**includeResources** `boolean: false`<br>
*Enables fetching of resources. Internally Juice's `juiceResources` function is used.*

> See [Juice][juice]'s documentation for more options.

## License
[MIT License][license]

[gulp]: http://gulpjs.com/
[juice]: https://github.com/Automattic/juice
[license]: https://thasmo.mit-license.org/
