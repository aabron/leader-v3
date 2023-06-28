import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import {register} from "./controllers/auth.js";

//Config
const _fileName = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(_dirName, 'public/assets')));

// file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

//file routes
app.post("auth/register", upload.single("picture"), register);

//routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

//mongoose setup
const port = process.env.PORT || 6001;
mongoose.connect("mongodb+srv://aperel3107:Leaderadminpassword@leader0.gmr5kus.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
})
.catch((error) => console.log(`${error} did not connect`));