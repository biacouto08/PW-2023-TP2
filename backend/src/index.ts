import env from "@/config"
import { app } from "@/app"

app.listen(env.PORT, () => console.log(`Servidor a correr na porta: ${env.PORT} 🔥`))
