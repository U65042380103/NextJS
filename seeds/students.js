/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()


  await knex('students').insert([
    {id: 1, name: 'Kanyarat', age:20 },
    {id: 2, name: 'Thanawat', age:19 },
    {id: 3, name: 'Aekkarat', age:18 },
    {id: 4, name: 'Vivevy', age:22 },
    {id: 5, name: 'Shippy', age:23 },
    {id: 6, name: 'Phitchaya', age:17 },
    {id: 7, name: 'Amorne', age:18 },
    {id: 8, name: 'Amorne2', age:18 },
    {id: 9, name: 'Amorne3', age:18 },
    {id: 10, name: 'Amorne4', age:18 },
    {id: 11, name: 'Amorne5', age:18 },
    {id: 12, name: 'Amorne6', age:18 }

  ]);
};
