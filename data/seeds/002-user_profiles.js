
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {
          id: 1,
          user_id:1,
          age: 28,
          certs: 'Alpine Mountaineer, XBOX 360, Uphill Gardening',
          profile_text: 'loves to xbox on mountaintops, will help you change your mind',
          years_of_exp: 28
        }
      ]);
    });
};
