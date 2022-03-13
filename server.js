const express = require('express');
const bodyParser = require('body-parser');
const UserRoute = require('./src/routes/users.route')
const app = express();
const PORT = 6578;
app.use(bodyParser.json());
app.use('/users', UserRoute)
app.get('/',(req, res) => {
    res.send('welocome to the Homepage')
})

app.listen(PORT ,()=>console.log(`server running on port: http://localhost:${PORT}`))