var SVGSpriter = require('svg-sprite');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

// Create spriter instance (see below for `config` examples)
var spriter = new SVGSpriter({
  dest: './build/',        // Main output directory
  mode: {
    css: {
      render: {
        css: true // Render a Sass stylesheet
    },    
    example: true,
  },
    view: {
      render: {
        css: true // Render a Sass stylesheet
      },    
      example: true,
  },
    defs:  {
      render: {
        css: true // Render a Sass stylesheet
      },    
      example: true,
  },
    symbol: {
      render: {
        css: true // Render a Sass stylesheet
      },    
      example: true,

    }, // Create a «symbol» sprite
    stack:{
      render: {
        css: true // Render a Sass stylesheet
      },    
      example: true,

    }
  }
});

// Add SVG source files — the manual way ...
spriter.add(path.resolve(__dirname, 'imgs/credit.svg'), null, fs.readFileSync(path.resolve(__dirname, 'imgs/credit.svg'), {encoding: 'utf-8'}));
spriter.add(path.resolve(__dirname, 'imgs/tag.svg'), null, fs.readFileSync(path.resolve(__dirname, 'imgs/tag.svg'), {encoding: 'utf-8'}));
/* ... */

// Compile the sprite
spriter.compile(function(error, result) {
    /* Write `result` files to disk (or do whatever with them ...) */
    console.log(result)
    for (var mode in result) {
        for (var resource in result[mode]) {
          console.log(path.dirname(result[mode][resource].path), result[mode][resource].contents);
            mkdirp.sync(path.dirname(result[mode][resource].path));
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
});