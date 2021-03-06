// teachers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'teachers';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    email: { type: String, unique: true, lowercase: true },

    name: { type: String },

    userName: { type: String },

    schoolId: { type: Schema.Types.ObjectId, ref: 'users' },

    role: { type: String },

    active: { type: Boolean },

    phone: { type: String },

    schoolAddress: { type: String, ref: 'users' },

    schoolName: { type: String, ref: 'users' },

    password: { type: String }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
