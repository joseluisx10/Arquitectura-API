const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/induOnline', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err));

mongoose.connection.on('error', function(err) {

    console.log('Error connecting to mongo: ' + err);
});


mongoose.connection.on('open', function(err) {

    console.log('connected mongo!');
})