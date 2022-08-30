import express from "express";
import morgan from "morgan";
import router from "./router.js";

const server = express();
server.set("port", process.env.PORT || 3000);

server.use(morgan("tiny"));
server.use(express.static("static", {
  extensions: ['html', 'htm'],
}));
server.use(express.json());
server.use("/", router);

server.listen(server.get("port"), () => {
    console.log(`@ http://localhost:${server.get("port")}`);
});

export default server;
