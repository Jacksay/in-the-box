var assert = require('assert'),
    inTheBox = require('../build/InTheBox.js')
    ;

describe('Test color module', ()=>{
    it('Convert to RGBA', ()=>{
      assert.equal(inTheBox.Color.hexaToRgba('#ffffffff'), 'rgba(255,255,255,1)');
      assert.equal(inTheBox.Color.hexaToRgba('#ffffff'), 'rgba(255,255,255,1)');
      assert.equal(inTheBox.Color.hexaToRgba('#000000ff'), 'rgba(0,0,0,1)');
      assert.equal(inTheBox.Color.hexaToRgba('#000000'), 'rgba(0,0,0,1)');
      assert.equal(inTheBox.Color.hexaToRgba('#FF6600'), 'rgba(255,102,0,1)');
    })


    it('Generate random colors', ()=>{
      let generated = inTheBox.Color.generateColor(5);
      assert.equal(generated.length, 5);
      generated.forEach((c) => {
        let match = c.match(/#[a-fA-F0-9]{6}/);
        assert.ok(match);
      })
    })

    it('Generate random colors (RGBA opaque)', ()=>{
      let generated = inTheBox.Color.generateColor(10, 'FF', 'rgba');
      assert.equal(generated.length, 10);
      generated.forEach((c) => {
        let match = c.match(/rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},[0-1](\.[0-9]+)?\)/)
        assert.ok(match);
      })
    })

    it('Generate random colors (RGBA translucide)', ()=>{
      let generated = inTheBox.Color.generateColor(10, 'A5', 'rgba');
      assert.equal(generated.length, 10);
      generated.forEach((c) => {
        let match = c.match(/rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},0\.([0-9]*)?\)/)
        assert.ok(match);
      })
    })

    it('Generate random colors (RGBA invisible)', ()=>{
      let generated = inTheBox.Color.generateColor(10, '00', 'rgba');
      assert.equal(generated.length, 10);
      generated.forEach((c) => {
        let match = c.match(/rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},0\)/)
        assert.ok(match);
      })
    })
});
