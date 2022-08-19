const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 9000;
app.set("title", "vk site");
app.get("title");

const os = require("os");
const { title } = require('process');

const version = os.version();
const hostname = os.hostname();
const release = os.release();
const architecture = os.arch();
const platform = os.platform();
const type = os.type();
const totalmem = os.totalmem();
const totalmemexact = totalmem / 1024 / 1024 / 1024;
const totalmemexact2 = totalmemexact.toFixed(1);
const freemem = os.freemem();
const freememexact = freemem / 1024 / 1024 / 1024;
const freememexact2 = freememexact.toFixed(1);


const templatePath = path.join(__dirname, "../templates");



app.set('view engine', 'hbs');
app.set('views',templatePath)





app.get('/', (req, res) => {
    res.render("osInfoApp", {
      OsVersion: version,
      hostname: hostname,
      release: release,
      architecture: architecture,
      platform: platform,
      type: type,
      totalmemexact: totalmemexact2,
      freememexact: freememexact2,
    });
});

app.get('/about', (req,res) => {
  res.render("osInfoAbout");

});


app.get('*', (req,res) => {
  
res.send("oops page not found")
})
app.listen(port, () => {
    console.log(`listening port ${port}`)
})