const express = require('express');

const { PORT } = require('./config/serverconfig');
require('dotenv').config();

const SetupAndStartServer = async () => {
    // Create the express object

    const app = express();
    app.listen(3000, ()=> {
        console.log(`server started at ${PORT}`);
        
    })
}

SetupAndStartServer();