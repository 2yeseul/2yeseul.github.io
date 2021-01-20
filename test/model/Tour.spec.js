/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Tour', function() {
      beforeEach(function() {
        instance = new ApiDocumentation.Tour();
      });

      it('should create an instance of Tour', function() {
        // TODO: update the code to test Tour
        expect(instance).to.be.a(ApiDocumentation.Tour);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property nickname (base name: "nickname")', function() {
        // TODO: update the code to test the property nickname
        expect(instance).to.have.property('nickname');
        // expect(instance.nickname).to.be(expectedValueLiteral);
      });

      it('should have the property tourContent (base name: "tourContent")', function() {
        // TODO: update the code to test the property tourContent
        expect(instance).to.have.property('tourContent');
        // expect(instance.tourContent).to.be(expectedValueLiteral);
      });

      it('should have the property tourEndDate (base name: "tourEndDate")', function() {
        // TODO: update the code to test the property tourEndDate
        expect(instance).to.have.property('tourEndDate');
        // expect(instance.tourEndDate).to.be(expectedValueLiteral);
      });

      it('should have the property tourLocation (base name: "tourLocation")', function() {
        // TODO: update the code to test the property tourLocation
        expect(instance).to.have.property('tourLocation');
        // expect(instance.tourLocation).to.be(expectedValueLiteral);
      });

      it('should have the property tourNeed (base name: "tourNeed")', function() {
        // TODO: update the code to test the property tourNeed
        expect(instance).to.have.property('tourNeed');
        // expect(instance.tourNeed).to.be(expectedValueLiteral);
      });

      it('should have the property tourStartDate (base name: "tourStartDate")', function() {
        // TODO: update the code to test the property tourStartDate
        expect(instance).to.have.property('tourStartDate');
        // expect(instance.tourStartDate).to.be(expectedValueLiteral);
      });

      it('should have the property tourTeam (base name: "tourTeam")', function() {
        // TODO: update the code to test the property tourTeam
        expect(instance).to.have.property('tourTeam');
        // expect(instance.tourTeam).to.be(expectedValueLiteral);
      });

      it('should have the property tourTitle (base name: "tourTitle")', function() {
        // TODO: update the code to test the property tourTitle
        expect(instance).to.have.property('tourTitle');
        // expect(instance.tourTitle).to.be(expectedValueLiteral);
      });

    });
  });

}));
