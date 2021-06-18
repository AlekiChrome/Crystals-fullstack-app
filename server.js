const app = require("./app"); 

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {  // * Listening for requests
    console.log(`[DEVELOPMENT] Listening on port: ${PORT}`);
});
