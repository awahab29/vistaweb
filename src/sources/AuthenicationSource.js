/**
 * Created by V_D on 1/19/2016.
 */

var LocationActions = require('../actions/LocationActions');
var $ = require('jquery');
var parseXml = require('xml2js').parseString;
import xmlToJson from './../utils/xmlToJson';

var AuthenticationSource = {

  login(payload) {

    return new Promise(function (resolve, reject) {

      $.post( "http://localhost:3000/api/login", payload)
          .done(function( data ) {
            resolve( data);
          });

    });

  }

};

module.exports = AuthenticationSource;

