import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import lectoresRouter from "./routes/lectores";
import librosRouter from "./routes/libros";
import prestamosRouter from "./routes/prestamos";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(librosRouter);
app.use(lectoresRouter);
app.use(prestamosRouter);

export default app;