import app from "./app";
import "./env";
import { Options } from "graphql-yoga";

const PORT: number | string = process.env.PORT || 4500;

const PLAYGROUND: string = "/playground";
const ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: ENDPOINT
};
const handleAppStart = () =>
  console.log(`Server running on http://localhost:${PORT}/playground 🤗`);

app.start(appOptions, handleAppStart);