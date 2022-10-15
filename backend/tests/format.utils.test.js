const expect = require('chai').expect;
const {generateObject, formattedData} = require('../src/utils/format.utils');


describe('TESTING format.utils.js', () => {
    describe('Convert csv to json', () => {
        it('Formatting  to json', () => {
            const info = 'file,text,number,hex\ntest3.csv,HrjlG\ntest3.csv,bBpnxcIEBTicfTdbNxsuhTb,63061464,16bab28a5186aef53ca300e4085fa6de\ntest3.csv,yKz,4,f9f91e549a8c3b448a974c32c35e7fe8\ntest3.csv,CLotXxujqykWkHBIrd,06625798,e590e5f0cd1ad488f224d785231df6f6';
            expect(formattedData(info)).should.be.a("object")
        });
        it('Array to object key/values', () => {
            const arr1 = ['file','text','number','hex','pp']
            const arr2 = ['test3.csv','bBpnxcIEBTicfTdbNxsuhTb','63061464','16bab28a5186aef53ca300e4085fa6de'];
            expect(generateObject(arr1, arr2)).should.be.a("object")
        });

    });

});
