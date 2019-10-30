

// arquivo de configuração do upload de imagem

const multer = require('multer');
const path = require('path');


module.exports = {
    storage: multer.diskStorage({
        //legal utilizando este comando ele não precisa ../
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
};