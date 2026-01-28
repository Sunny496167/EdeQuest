import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security headers middleware
  app.use(helmet());

  // CORS configuration
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global validation pipe with security best practices
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that don't have decorators
      forbidNonWhitelisted: true, // Throw error if non-whitelisted properties exist
      transform: true, // Automatically transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger API documentation
  const config = new DocumentBuilder()
    .setTitle('EdeQuest API')
    .setDescription(`
# EdeQuest Educational Platform API

A comprehensive RESTful API for the EdeQuest educational platform with enterprise-grade authentication, authorization, and security features.

## Features

- 🔐 **JWT-based Authentication** - Secure access and refresh token flow
- 🔄 **Token Rotation** - Automatic refresh token rotation for enhanced security  
- 👥 **Session Management** - View and manage active sessions across devices
- 🔒 **Password Security** - Advanced validation, history tracking, and reuse prevention
- 📊 **Audit Logging** - Comprehensive tracking of security events
- 🛡️ **Role-Based Access Control** - Fine-grained permissions
- 🌐 **OAuth Integration** - Google authentication support
- ⚡ **Rate Limiting** - API protection against abuse

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. To access protected endpoints:

1. **Login** or **Register** to receive access and refresh tokens
2. Include the access token in the **Authorization** header: \`Bearer <token>\`
3. Access tokens expire after 15 minutes
4. Use the refresh token to obtain new access tokens
5. Refresh tokens expire after 7 days

## Base URL

\`\`\`
http://localhost:3000
\`\`\`

## API Documentation

Interactive documentation available at: \`/api-docs\`
    `)
    .setVersion('1.0.0')
    .setContact(
      'EdeQuest Support',
      'https://edequest.com/support',
      'support@edequest.com'
    )
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .setExternalDoc('Additional Documentation', 'https://docs.edequest.com')
    // API Tags with descriptions
    .addTag('Authentication', 'User authentication, registration, and password management')
    .addTag('Sessions', 'Session management and device tracking')
    .addTag('Users', 'User profile and account management')
    .addTag('Audit', 'Security audit logs and monitoring')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT access token',
        name: 'Authorization',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 API Documentation: http://localhost:${port}/api-docs`);
}

bootstrap();
