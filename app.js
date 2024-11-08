const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

// Configuração do Handlebars com o helper "eq"
app.engine(
    'handlebars',
    engine({
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: path.join(__dirname, 'views/partials'),
        helpers: {
            eq: (a, b) => a === b // Define o helper "eq" para comparação
        }
    })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rotas


app.get('/', function(req, res) {
    res.render('login');
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
});

app.get('/Create_Profissional', function(req, res) {
    res.render('Create_Profissional');
});

app.get('/Edit_Profissional', function(req, res) {
    res.render('Edit_Profissional');
});

app.get('/Lista_De_Profissional', function(req, res) {
    res.render('Lista_De_Profissional');
});

// Inicialização do servidor
app.listen(3000, function() {
    console.log('http://localhost:3000');
});
