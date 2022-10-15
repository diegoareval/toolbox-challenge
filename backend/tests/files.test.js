let chai = require("chai");
let chaiHttp = require("chai-http");
const server = require("../src/server");

// assertion style
chai.should();

chai.use(chaiHttp);

describe("files api", ()=> {
 describe("GET /files/list", ()=> {
   it("should return list of files", (done)=> {
       chai.request(server).get("/files/list").end((err, response)=> {
           response.should.have.status(200);
           response.body.should.be.a("object");
           done();
       })
   });

     it("should 404 when endpoint does not exist", (done)=> {
         chai.request(server).get("/files/lists").end((err, response)=> {
             response.should.have.status(404);
             done();
         })
     });

 });

 describe("GET /files/data", ()=> {
     it("should return data of files", (done)=> {
         chai.request(server).get("/files/data").end((err, response)=> {
             response.should.have.status(200);
             response.body.should.be.a("array");
             done();
         });
     })

     it("should 404 when endpoint does not exist", (done)=> {
         chai.request(server).get("/files/item").end((err, response)=> {
             response.should.have.status(404);
             done();
         })
     });
 })
})
