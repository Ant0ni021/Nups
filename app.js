const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const moment = require('moment'); 

const app = express();

// Configuração do Handlebars
app.engine(
    'handlebars',
    engine({
        layoutsDir: path.join(__dirname, 'views/layouts'),
        partialsDir: path.join(__dirname, 'views/partials'),
        helpers: {
            eq: (a, b) => a === b,  // Helper para comparar valores
            formatDate: (date, format) => moment(date).format(format)  // Helper para formatação de datas
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

// Página Dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        esconderHeader: false  // Passando 'false' para mostrar o header
    });
});

// Página Create Profissional
app.get('/Create_Profissional', (req, res) => {
    res.render('Create_Profissional', {
        title: 'Cadastro de Profissional',
        esconderHeader: false  
    });
});

// Página Edit Profissional
app.get('/Edit_Profissional', (req, res) => {
    res.render('Edit_Profissional', {
        title: 'Editar Profissional',
        esconderHeader: false  
    });
});

// Lista de Profissionais
app.get('/Lista_De_Profissional', (req, res) => {
    res.render('Lista_De_Profissional', {
        title: 'Lista de Profissionais',
        esconderHeader: false  
    });
});

// Criar Produto
app.get('/Produtos_Create', (req, res) => {
    res.render('Produtos_Create', {
        title: 'Cadastro de Produto',
        esconderHeader: false  
    });
});

// Editar Produto
app.get('/Produtos_Edit', (req, res) => {
    res.render('Produtos_Edit', {
        title: 'Editar Produto',
        esconderHeader: false  
    });
});

// Listar Produtos
app.get('/Produto_Listar', (req, res) => {
    res.render('Produto_Listar', {
        title: 'Lista de Produtos',
        esconderHeader: false  
    });
});

// Criar Paciente
app.get('/Create_Paciente', (req, res) => {
    res.render('Create_Paciente', {
        title: 'Cadastro de Paciente',
        esconderHeader: false  
    });
});

// Editar Paciente
app.get('/Editar_Paciente', (req, res) => {
    res.render('Editar_Paciente', {
        title: 'Editar Paciente',
        esconderHeader: false  
    });
});

// Editar Paciente
app.get('/Editar_Paciente', (req, res) => {
  res.render('Editar_Paciente', {
      title: 'Editar Paciente',
      esconderHeader: false 
  });
});

// Listar Paciente
app.get('/Listar_Paciente', (req, res) => {
  res.render('Listar_Paciente', {
      title: 'Editar Paciente',
      esconderHeader: false 
  });
});

// Criar Ocorrencia
app.get('/Ocorrencia_Creat', (req, res) => {
    res.render('Ocorrencia_Creat', {
        title: 'Editar Paciente',
        esconderHeader: false 
    });
  });

  
// Editar Ocorrencia
app.get('/Ocorrencia_Edit', (req, res) => {
    res.render('Ocorrencia_Edit', {
        title: 'Editar Paciente',
        esconderHeader: false 
    });
  });
  
  // listar Ocorrencia
app.get('/Ocorrencia_Listar', (req, res) => {
    res.render('Ocorrencia_Listar', {
        title: 'Editar Paciente',
        esconderHeader: false 
    });
  });
  

// Servidor
app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
