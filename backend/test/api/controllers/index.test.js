import mongoose from 'mongoose';

// Clear database before each test case
before(done => {
  for (var collection in mongoose.connection.collections) {
    mongoose.connection.collections[collection].remove(function() {});
  }
  done();
});
