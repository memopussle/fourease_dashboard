import http from "http";
import app from "./app";

const server = http.createServer(app);

const port = process.env.API_PORT || 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
