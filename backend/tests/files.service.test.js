const {expect, should} = require('chai');
const filesInstance = require("../src/utils/axios.utils")
const fileService = require("../src/services/files.service");


describe('TESTING files.service.js', () => {
    describe('Connection external API files', () => {
        it('Call list files services: /files', async() => {
            const listFiles = await fileService.getFileInformation("/files");
            expect(listFiles).should.be.a("object")
        });

        it('Call list files services: file/name', async() => {
            const listFiles = await fileService.getFileInformation("/file/test1.csv");
            expect(listFiles).should.be.a("object")
        });

        it('it should failed if hit wrong resource', async() => {
            const listFiles = await fileService.getFileInformation("/filedjdjd");
            expect(listFiles).to.be.equal(null);
        });
    });



});
