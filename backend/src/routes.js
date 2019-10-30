// iniciando a aplicação
// req => pega informações da rota tipo quais produtos estavam no carrinho do usuário. recebe informações que o usuário está enviando 
// req.query => pega os query params {para filtros}
// req.params => acessar route params{para edição e delet}
// req.body => acessar corpo da requisição { criação e edição }
// res => res devolve uma resposta para a requisição

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');



const routes = express.Router();
const upload = multer(uploadConfig);


// Importando controladores 
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


// Criando Rotas 
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
//essa rotafaz uma coisa legal ela é bem descritiva pega o id
routes.post('/spots/:id/bookings', BookingController.store);


module.exports = routes;