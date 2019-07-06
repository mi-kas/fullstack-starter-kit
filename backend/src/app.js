import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

/**
 * Configures and connects mongoose to the mongoDB instance
 */
const configureDB = () => {
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose successfully connected to: ${config.db.uri}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from: ${config.db.uri}`);
  });

  mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
  });

  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // Use native findOneAndUpdate() rather than findAndModify()
    useFindAndModify: false,
  });
};

const app = express();

SwaggerExpress.create(config.swagger, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);
  // connect db
  configureDB();

  app.listen(config.server.port, config.server.host, () => {
    console.log(
      `API server listening on: http://${config.server.host}:${config.server.port}${config.swagger.basePath}`,
    );
  });
});

export default app;
