describe('crowdFilter', function() {
  var filter;
  beforeEach(function() {
    module('rightNow');

    inject(function(_$filter_) {
      filter = _$filter_('crowdFilter');
    });
  });

  describe('when crowd value is 10', function() {
    it('should return "empty"', function() {
      expect(filter('10')).toEqual('empty');
    });
  });

  describe('when crowd value is 0', function() {
    it('should return "empty"', function() {
      expect(filter('0')).toEqual('empty');
    });
  });
  describe('when crowd value below 10', function() {
    it('should return "empty"', function() {
      expect(filter('6')).toEqual('empty');
    });
  });

  describe('when crowd value below 30', function() {
    it('should return "almost empty"', function() {
      expect(filter('24')).toEqual('almost empty');
    });
  });

  describe('when crowd value below 60', function() {
    it('should return "moderate"', function() {
      expect(filter('53')).toEqual('moderate');
    });
  });

  describe('when crowd value is equal to 60', function() {
    it('should return "moderate"', function() {
      expect(filter('60')).toEqual('moderate');
    });
  });

  describe('when crowd value below 80', function() {
    it('should return "slightly crowded"', function() {
      expect(filter('79')).toEqual('slightly crowded');
    });
  });

  describe('when crowd value below 100', function() {
    it('should return "overcrowded"', function() {
      expect(filter('92')).toEqual('overcrowded');
    });
  });

  describe('when crowd value above 100', function() {
    it('should return "overcrowded"', function() {
      expect(filter('105')).toEqual('overcrowded');
    });
  });

  describe('when crowd value is equal to 100', function() {
    it('should return "overcrowded"', function() {
      expect(filter('100')).toEqual('overcrowded');
    });
  });
});
