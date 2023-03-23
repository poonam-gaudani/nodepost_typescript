module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    const roles = [
      {
        name: "admin",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
      },
      {
        name: "user",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
      },
    ];
    await db.collection("roles").insertMany(roles);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db
        .collection("roles")
        .deleteMany([{ name: "admin" }, { name: "user" }]);
  }
};
