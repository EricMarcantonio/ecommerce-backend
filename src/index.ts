import express from "express";
import serverless from "serverless-http";

import { UserRouter } from "./routes/Users";

const port = 3000;

const app = express();

app.use("/users", UserRouter);

// app.listen(port, () => {
//   console.log(`Listening on port ${3000}`);
// });
const handler = serverless(app);
export { handler };
