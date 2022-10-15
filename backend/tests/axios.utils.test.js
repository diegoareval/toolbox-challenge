const expect = require('chai').expect;
const filesInstance = require("../src/utils/axios.utils")


describe('TESTING axios.utils.js', () => {
    describe('Connection external API', () => {
        it('Call list files', async() => {
            const result = await filesInstance.callFiles("/files");
            expect(result).should.be.a("object")
        });
        it('Call file', async() => {
            const result = await filesInstance.callFiles('file/test2.csv');
            expect(result).should.be.a("object")
        });
    });


});
