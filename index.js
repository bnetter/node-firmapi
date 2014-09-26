var request = require('request');

var FirmAPI = function init(apiKey, sandbox) {
  this.sandbox = (typeof sandbox !== 'undefined')?(sandbox):(false);
  this.apiKey = apiKey;
  this.baseURL = 'https://firmapi.com/api/v1';
};

var encodeURL = function encodeURL(url, parameters) {
   var ret = [];
   for (var d in parameters)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(parameters[d]));
   return url + ret.join('&');
};

/**
 * Search for companies
 * @param {string|object} `options` Search by name (if string) or by anything else
 * @param {callback} `next` Callback with error, data, more
 */

FirmAPI.prototype.search = function search(options, next) {
  var url = this.baseURL + '/companies?';

  if (typeof options == 'string')
    options = {'search': options};
  options['sandbox'] = this.sandbox;
  options['api_key'] = this.apiKey;

  url = encodeURL(url, options);

  return request(url, function callback(error, response, body) {
    if (typeof response.statusCode !== 'undefined' && response.statusCode === 200) {
      var json = JSON.parse(body);

      if (typeof json.result !== 'undefined' &&
          typeof json.result.list !== 'undefined' &&
          typeof json.result.search !== 'undefined')
        next(null, json.result.list, json.result.search);
    } else {
      next(error);
    }
  });
};

/**
 * Get a specific company
 * @param {string|number} `siren` The company's siren
 */

FirmAPI.prototype.get = function get(siren, next) {
  var url = this.baseURL + '/company?';
  var options = {
    siren: siren,
    sandbox: this.sandbox,
    api_key: this.apiKey
  };

  url = encodeURL(url, options);

  return request(url, function callback(error, response, body) {
    if (typeof response.statusCode !== 'undefined' && response.statusCode === 200) {
      var json = JSON.parse(body);

      if (typeof json.result !== 'undefined')
        next(null, json.result);
    } else {
      next(error);
    }
  });
};

module.exports = FirmAPI;