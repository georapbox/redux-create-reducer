# CHANGELOG

## v1.4.0
- Add option to throw `Error` in development environment if an `undefined` action handler is encountered instead of the default behaviour which is to print a warning in console. Closes issue #6.


## v1.3.1
- Fixes issue #2 that would cause to throw TypeError if actions handlers object is created using `Object.create(null)`

## v1.3.0
- Update `devDependencies` and refactor Webpack and Babel configurations to comply with Babel 7


## v1.2.0
- Update warning with more information about the reducer when there is an `undefined` action type


## v1.1.0
- Add more tests
- Library is now exported both as UMD and CommonJS bundle


## v1.0.0
- Initial release
