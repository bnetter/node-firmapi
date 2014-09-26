FirmAPI NodeJS Library
============

This is an unofficial FirmAPI library for NodeJS.

## Install

To install the most recent release from npm, run:

    npm install node-firmapi

## Usage

##### Get an API key

You need an API key to make it work. Go [get your API key](https://firmapi.com/api/signup) from FirmAPI if you don't have one.

##### Sandbox mode

To try out the API, you should use the library in sandbox mode. You can do that by adding `true` as a second argument when initializing the library.

```js
var firmapi = new FirmAPI('your api key', true);
```

##### Search for companies

You can search for a company by providing its name.

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.search('criteo', function(err, data, page) {
  // Check if err == null and return data
});
```

Or you can search for all companies in a specific location.

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.search({postal_code: 75009}, function(err, data, page) {
  // Check if err == null and return data
});
```

More informations on this [in the documentation](https://firmapi.com/api/docs/call/search).

##### Get a company

You can get more informations about a company when you have its SIREN.

```js
var FirmAPI = require('node-firmapi');

var firmapi = new FirmAPI('your api key');

firmapi.get(480470152, function(err, data) {
  // Check if err == null and return data
});
```
