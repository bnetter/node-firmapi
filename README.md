FirmAPI NodeJS Library
============

This is an unofficial FirmAPI library for NodeJS.

## Install

To install the most recent release from npm, run:

    npm install node-firmapi

## Usage

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.search('criteo', function(err, data, page) {
  // Check if err == null and return data
});
```

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.search({postal_code: 75009}, function(err, data, page) {
  // Check if err == null and return data
});
```

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.get(480470152, function(err, data) {
  // Check if err == null and return data
});
```