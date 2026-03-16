const app = require("./app");
const connectDB = require("./config/db");

console.log("[boot] server.js start");
connectDB().catch((err) =>
  console.error("[boot] db connect error:", err?.message)
);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
server.on("error", (err) =>
  console.error("[boot] http server error:", err?.message)
);
