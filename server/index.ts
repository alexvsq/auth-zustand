import app from "./app.ts";
import authRoutes from "./routes/auth.routes.ts";

app.use(authRoutes);
app.listen(3000);

console.log("port in 3000");
