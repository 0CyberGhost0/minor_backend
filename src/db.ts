import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://prakashved0702:ved1234@ved.0lhfau3.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

export default mongoose.connection;

