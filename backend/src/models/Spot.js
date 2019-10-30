//mongoose auxilia a montar o schema mais facilmente
const mongoose = require('mongoose');
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // referencia para qual modelo está se baseando
        ref: 'User'
    }


},{
//permite o armazenamento virtual
    toJSON:{
        virtuals:true,
    },
});
// implementa o armazenamento virtual
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`;
})

// exportaçao de modulo
module.exports = mongoose.model('Spot', SpotSchema);