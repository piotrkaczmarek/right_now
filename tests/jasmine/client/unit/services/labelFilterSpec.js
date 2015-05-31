describe('labelFilter', function() {
  var filter;
  beforeEach(function() {
    module('rightNow');

    inject(function(_$filter_) {
      filter = _$filter_('labelFilter');
    });
  });

  var labels = {
    5: 'first',
    10: 'second',
    Infinity: 'last'
  };

  describe('when value is below first threshold', function() {
    it('should return first label', function() {
      expect(filter('1', labels)).toEqual('first');
    });
  });

  describe('when value is at first threshold', function() {
    it('should return first label', function() {
      expect(filter('5', labels)).toEqual('first');
    });
  });

  describe('when value is below second threshold', function() {
    it('should return second label', function() {
      expect(filter('7', labels)).toEqual('second');
    });
  });

  describe('when value is above last threshold', function() {
    it('should return last label', function() {
      expect(filter('500', labels)).toEqual('last');
    });
  });
});
