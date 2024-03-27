/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()

  await knex('products').insert([
    {products_id: 1001, products_name: 'Computer', products_price:35000.50 },
    {products_id: 1002, products_name: 'Smart-Phone', products_price:12500.00 },
    {products_id: 1003, products_name: 'TV', products_price:8900.00 },
    {products_id: 1004, products_name: 'Microwave', products_price:7999.50 },
    {products_id: 1005, products_name: 'Labtop', products_price:27000 },
    {products_id:1006, products_name: 'Speaker', products_price:25500 },
    {products_id: 1007, products_name: 'Nokia_3310', products_price:31000 },
    {products_id: 1008, products_name: 'LGTV_FullHD', products_price:15500 },
    {products_id: 1009, products_name: 'Dell_Optiplex', products_price:7999 },
    {products_id: 1010, products_name: 'Ears_Pods', products_price:14000 },
    {products_id: 1011, products_name: 'Apple_Pencil', products_price:5000 },
    {products_id: 1012, products_name: 'Remote', products_price:500 }
  ]);
};
