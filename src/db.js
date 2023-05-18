import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //필수는 아니지만 업데이트된 내용을 적용하기 위해 사용
    useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError  = (error) => console.log("❌ DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);