# Changelog


## 2.0.1 - 2016-06-28


### Fixed

- include missing "lib" folder in npm package (#3)


## v2.0.0 - 2015-09-08


### Added

- 2nd argument: "options" `Object`, see [README.md](README.md)


### Changed

- tests are now better match the W3C's specifications

- browsers that passed in v1 may now fail in v2 by default

- double-check your results and see the "ignore" option in the [README.md](README.md)


### Fixed

- DOM Level 4 (by default) requires `CustomEvent` constructor usage ([#2](#2))
