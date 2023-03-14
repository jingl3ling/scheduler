const app = require('./server');
const connection = require('./config/database');

const port = process.env.SERVER_PORT;
connection.once("open", ()=>{
    app.listen(port, ()=>{
        console.log(`server up on http://localhost:${port}`);
    })
})