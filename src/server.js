import app from "./index";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 vamos directo al espacio por el puerto:${PORT}`);
});

