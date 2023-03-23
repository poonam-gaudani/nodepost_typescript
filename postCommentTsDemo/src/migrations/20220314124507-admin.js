module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    const role = await db.collection("roles").findOne({ name: "admin" });
    const user = {
      password: "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa", // Passowrd is: 12345678
      role: role._id,
      isDeleted: false,
      firstName: "admin",
      lastName: "Sonar",
      email: "admin@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    };
    await db.collection("users").insertOne(user);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection("users").deleteOne({ email: "admin@gmail.com" });
  }
};
