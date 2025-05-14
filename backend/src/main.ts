import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Load environment variables
dotenv.config();

// Function to create Swagger configuration
function createSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Story Craft API') // Set API title
    .setDescription('Documentation for Story Craft API') // Set API description
    .setVersion('1.0') // Set API version
    .build();
}

// Main function to bootstrap the application
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule); // Create NestJS app

    // Create and configure Swagger
    const swaggerConfig = createSwaggerConfig();
    const document = SwaggerModule.createDocument(app, swaggerConfig); // Generate Swagger documentation

    // Setup Swagger UI at /api-docs path
    SwaggerModule.setup('api-docs', app, document);

    // Start the app and listen on the specified port (defaults to 3001)
    const port = process.env.PORT ?? 3001;
    await app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error during application startup', error); // Log any error during app startup
    process.exit(1); // Exit the process with an error code
  }
}

bootstrap();
