// aqui no models ficam todas as regras de negocio ou seja necessidades do negocio

const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // referencia para qual modelo está se baseando
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        // referencia para qual modelo está se baseando
        ref: 'Spot'
    },


});


module.exports = mongoose.model('Booking', BookingSchema);