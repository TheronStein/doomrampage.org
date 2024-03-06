import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig  } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
//import { routes } from "./remix/config";
// import { fs } from "fs";

// const key = fs.readFileSync(import.meta.env.VITE_SRV_KEY_PATH);
// const cert = fs.readFileSync(import.meta.env.VITE_SRV_SSL_CERT_PATH);
installGlobals();

export default defineConfig({
	server: {
		port: 3001,
		// https:
		//   key: fs.readFileSync(import.meta.env.VITE_SRV_KEY_PATH),
		//   cert: fs.readFileSync(import.meta.env.VITE_SRV_SSL_CERT_PATH)
		//
	},
	plugins:[    
		remix({
			ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
		}), 
		tsconfigPaths()
	],
});