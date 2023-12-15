var app = require('express')();
const cors = require('cors')();
const http = require('http');
const https = require('https');
const fs = require('fs');
const supabase = require('@supabase/supabase-js');
const basicAuth = require('express-basic-auth');
require('dotenv').config();

// middleware called before each route
app.use(cors);

app.use(basicAuth({
    users: { 'maria': 'pass' },
    challenge: true,
    unauthorizedResponse: getUnauthorizedResponse
}))

function getUnauthorizedResponse(req) {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}

// Supabase integration code
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const pool = supabase.createClient( /* don't expose password or any sensitive info, done only for demo */
  supabaseUrl,
  supabaseKey
);

app.get('/',  async(req, res) => {
    try{
      const{ data : dogs, error } = await pool
            .from('dog')
            .select()
      if (error) throw error
      console.log(dogs)
      res.status(201).json(dogs)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "An error occured"})
    }
});

const httpServer = http.createServer(app);

const httpsServer = https.createServer({
    key: fs.readFileSync('/app/cert/server.key'),
    cert: fs.readFileSync('/app/cert/server.crt'),
  }, app);

httpServer.listen(8000, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
