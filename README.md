# Seeking Alpha Test

## Installation

### Setup

> Run the following commands in cli:

```shell
$ composer install
$ npm install
```

### Config

- In src/config.js Add your URL e.g http://example.com  or http://localhost/folder

> Compile from src/ to dist/.

```shell
$ npm run build
```

- copy files/folders from dist/  to doc root

- index.php line 18 and 19 set path for session handler to reddis. change as required or comment if reddis is configored in php.ini


## Usage

- navigate to index.html
