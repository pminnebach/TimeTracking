import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
		}),
	],
	build: {
		// generate .vite/manifest.json in outDir
		manifest: true,
		minify: "terser",
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
});
