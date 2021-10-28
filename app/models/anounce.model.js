module.exports = mongoose => {
    const schema = mongoose.Schema(
       {
          Id: String,
          Name: String,
          Date: String,
          Text: String,
          New: String,
          Link: String,
        },
      )

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Anounce = mongoose.model("Anounce", schema);
  
    return Anounce;
  };