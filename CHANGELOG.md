# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


## [Unreleased] - YYYY-MM-DD
#### Added
- Setting the `NODE_ENV` to production for WebPack when building in production mode.
  This speeds up React when deployed in production.

#### Changed
- Looking for build config within the `.uiharness.yml` file if parameter not passed into the `build` function.  Before this, the YAML file was being inspected only from the shell command which prevented the YAML file from being considered if the caller was doing it from code via the API.

#### Deprecated
#### Removed
#### Fixed
#### Security




## [3.4.0] - 2016-02-12
#### Added
- Reading `graphqlSchema` and `proxy` from the `.uiharness.yml` configuration file.
- Exposing `/<package-name>/images` as a static web-server path for image assets.
- Build command for generating bundled JS, along with file-size details.

#### Changed
- Relay configuration supports taking a path to a `.json` file from the `graphqlSchema` argument.

#### Deprecated
#### Removed
- The file Size calculation command. Covered with the `build` command.



## [3.3.0] - 2016-01-27
#### Added
- Calculating built JS size statistics (run `$ node size`);



## [3.2.0] - 2016-01-27
#### Added
- Configuration settings specified in a `.uiharness.yml` file within the in the root of the project.



## [3.1.0] - 2016-01-26
#### Added
- Relay/GraphQL support.
- Passing `proxy` option through to server start method.  This allows things like the GraphQL proxy to be configured.
- Force min-version of Node at startup. (`>=5.5.0` as of version `3.0.3`).

#### Changed
- Referencing [Babel](https://babeljs.io/) dependencies via `js-babel` and `js-babel-dev` modules.
- Linting updated to use [AirBnB style guide](https://github.com/airbnb/javascript).

#### Deprecated

#### Removed
- Removed the `bundle` and `bundle:init` scripts.  The UIHarness client is now bundled as a chunk within the main Webpack build.

#### Fixed
#### Security


## [3.0.0] - 2016-01-21
#### Added
- Bundling the UIHarness code itself as a static file so only the test specs/components are build (faster).
- `node bundle` command.

#### Changed
- Moved from WebPack middleware to use the `WebpackDevServer`.
  - This was done because reload issues were occurring with the middleware (it is less well supported) and is no longer necessary with an firmer understanding of the `proxy` feature of the `WebpackDevServer` which allows for a server-app to be used.




## [2.0.0] - 2016-01-04
#### Changed
- Updated to using Babel 6.



## [1.1.9] - 2015-12-04
#### Fixed
- Fixed breaking changes caused by updates to `react-schema` module.
