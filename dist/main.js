"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express_1.urlencoded({ extended: true }));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.enableShutdownHooks();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('Core')
        .setDescription('API Documentation')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    app.use('/api/docs/swagger.json', (req, res) => {
        res.send(swaggerDocument);
    });
    swagger_1.SwaggerModule.setup('/api/docs', app, null, {
        swaggerUrl: `http://localhost:8888/api/docs/swagger.json`,
        explorer: true,
        swaggerOptions: {
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
        }
    });
    app.enableShutdownHooks();
    const port = 8888;
    let nodeAppInstance = 0;
    if (process.env.NODE_APP_INSTANCE) {
        nodeAppInstance = Number(process.env.NODE_APP_INSTANCE);
    }
    const server = await app.listen(port + nodeAppInstance);
    logger.log(`Application listening on port ${port + nodeAppInstance}`);
    logger.log(`Environment: ${process.env.NODE_ENV}`);
    server.setTimeout(180000);
}
bootstrap();
//# sourceMappingURL=main.js.map