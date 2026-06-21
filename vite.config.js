import {defineConfig} from 'vite';
import path from 'path';
import springBoot from '@wim.deblauwe/vite-plugin-spring-boot';

export default defineConfig({
    plugins: [
        // Enable the plugin which will watch the Thymeleaf templates, copy them to the build output and trigger a
        // reload of the page
        springBoot({
            buildSystem: 'gradle'
        })
    ],
    // Tell Vite where the root of the project is located. For a Spring Boot application we point it to the folder where
    // the templates and other assets (i.e. CSS files) are located.
    root: path.join(__dirname, './src/main/resources'),
    server: {
        proxy: {
            // Proxy any request that does not handle assets to the Spring Boot endpoint
            '^/(?!static|assets|@|.*\\.(js|css|png|svg|jpg|jpeg|gif|ico|woff|woff2)$)': {
                target: 'http://localhost:8080',  // Spring Boot backend
                changeOrigin: true,
                secure: false
            }
        },
    }
});