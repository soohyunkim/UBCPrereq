var request = require('request');
var cheerio = require('cheerio');
// var fs = require('fs');

var url = "https://courses.students.ubc.ca/cs/main?pname=subjarea&tname=subjareas&req=3&dept=CPSC&course=221";

request(url, (error, response, body) => {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('div.container > div.content.expand').each(function( index ) {
    var coreqCourse = $(this).find("p:contains('Co-reqs')").text().trim().replace(/\s\s+/g, ' ');
    var prereqCourse = $(this).find("p:contains('Pre-reqs')").text().trim().replace(/\s\s+/g, ' ');
    prereqCourse = (!prereqCourse) ? 'Pre-reqs: None' : prereqCourse;
    coreqCourse = (!coreqCourse) ? 'Co-reqs: None' : coreqCourse;
    console.log(prereqCourse, coreqCourse);
  });

});