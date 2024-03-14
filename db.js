  import  Mongoose  from "mongoose";

  const URL = "mongodb+srv://yksaini0193:Yogesh1090@cluster0.gaut69i.mongodb.net/"
  const connectDB = async () => {
   
     await Mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
   
        });
      console.log("conn.connection.host");


  };

  export default connectDB;