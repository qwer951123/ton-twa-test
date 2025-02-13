import ngrok from "ngrok";
import process from "node:process";

async function startDevEnv() {
  const url = await ngrok.connect({ addr: 3000 });

  console.log("\x1b[32m%s\x1b[0m", `TWA server is running at ${url}`);

  process.on("SIGINT", () => {
    ngrok.disconnect();
    process.exit(0);
  });
}

startDevEnv();
