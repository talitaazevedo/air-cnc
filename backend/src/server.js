
// Importação de bibliotecas 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
// Importante e necessário
const app = express();

const server = http.Server(app);
const io = socketio(server);

// caso a aplicação va para produção não é muito legal utilizar este tipo de variável no backend

// utilizando o mongoose para auxiliar na conexão com o mongodb

mongoose.connect( "mongodb+srv://air-cnc:aircnc1@aircnc-ztiqe.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    //utilizar isso aqui para parar de dar errinhos na conexão
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const connectedUsers = {};

io.on("connection", socket => {
  console.log("Usuário conectado", socket.id);
  console.log(socket.handshake.query);
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});


//Importante

app.use((req,res,next)=>{
  //responsavel por enviar e recebetr  mensagens do frontend e mobile em tempo real
  req.io= io;

  // fica disponivel para todas as routes

  req.connectedUsers = connectedUsers;
  // continua o fluxo normal e passar para as próximaas functions
  return next();

});
//=>>>>>>>> Routes =>


const routes = require('./routes');
//porta que a aplicação sera iniciada no servidor
server.listen(3333);
app.use(cors());
// essa function é bem legal ajudando a criar uma rota valida para as thumbnails
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);