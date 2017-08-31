var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=3&dept=CPSC&course=221", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('div.container > div.content.expand').each(function( index ) {
    var prereqFinder = $(this).find("p:contains('Pre-reqs')").text().trim();
    var course = prereqFinder.match(/\D\D\D\D\s\d\d\d/g);
    console.log("CourseName: " + course);
  });

});