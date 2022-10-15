const app = require("./server");
const {port} = require("./config");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
