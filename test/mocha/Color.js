var assert = require("assert"),
    Color = require("../../src/Color/Color.js");

describe("Color", function(){
  describe("constructor", function(){
    describe("hex parsing", function(){
      for (let hex of ["#cc0000", "#00ff00", "#000088"])
        it(hex, function(){
          assert.strictEqual(hex, new Color(hex).hex);
      });
    });
  });
});