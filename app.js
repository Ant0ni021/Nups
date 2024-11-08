// app.js
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

// Configuração do Handlebars
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

// Página de login, passando 'esconderHeader: true'
app.get('/', (req, res) => {
    res.render('Login', {
      title: 'Login',
      esconderHeader: true  // Passando a variável para ocultar o header
    });
});

// Outras rotas, onde o header não será ocultado
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
      title: 'Dashboard',
      esconderHeader: false  // Passando 'false' para mostrar o header
    });
});

app.get('/Create_Profissional', (req, res) => {
    res.render('Create_Profissional', {
      title: 'Cadastro de Profissional',
      esconderHeader: false  // Passando 'false' para mostrar o header
    });
});

app.get('/Edit_Profissional', (req, res) => {
    res.render('Edit_Profissional', {
      title: 'Editar Profissional',
      esconderHeader: false  // Passando 'false' para mostrar o header
    });
});

app.get('/Lista_De_Profissional', (req, res) => {
    res.render('Lista_De_Profissional', {
      title: 'Lista de Profissionais',
      esconderHeader: false  // Passando 'false' para mostrar o header
    });
});

// Inicialização do servidor
app.listen(3000, function() {
    console.log('http://localhost:3000');
});
