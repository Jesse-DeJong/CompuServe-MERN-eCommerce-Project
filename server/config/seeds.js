const db = require('./connection');
const { User, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {name: '1650'},
    {name: '2060'},
    {name: '3060'}
  ]);

  console.log('Categories Seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'PCCG Ghost 1650 Gaming System',
      description:
        'Intel Core i3 10105F CPU, Gigabyte B560M DS3H AC Motherboard, Gigabyte GeForce GTX 1650 D6 OC 4GB graphics card, 16GB Team T-Force Delta RGB 3200MHz memory, 240GB Kingston A400 SSD, 2TB Seagate Barracuda hard drive, Kolink Observatory Lite Mesh ARGB Case, Windows 10. Backed by a 2 year return to base warranty with all shipping costs included. *Previous configuration shown in image, new images coming soon!',
      image: '1650.jpg',
      category: categories[0]._id,
      price: 1599,
      quantity: 500
      },
      {
      name: 'PCCG Phaser 2060 Gaming System',
      description:
        'AMD Ryzen 5 3600 CPU with Wraith Stealth cooler, ASUS Prime B550M-A Motherboard, ASUS GeForce RTX 2060 Dual EVO OC 6GB graphics card, 16GB Team T-Force Delta RGB 3200MHz memory, 512GB Team MP34 M.2 NVMe SSD, 2TB Seagate Barracuda hard drive, Aerocool Visor ARGB Tempered Glass Case, Windows 10. Backed by a 2 year return to base warranty with all shipping costs included (upgradeable to 3 years). *Previous configuration shown in image, new images coming soon!',
      image: '2060.jpg',
      category: categories[1]._id,
      price: 2299,
      quantity: 500
      },
      {
      name: 'PCCG Ghost 3060 Ti Gaming System',
      description:
        'AMD Ryzen 5 5600X CPU with Wraith Stealth, ASUS Prime B550M-K Motherboard, ASUS GeForce RTX 3060 Ti Dual Mini OC LHR GB graphics card, 16GB PNY XLR8 Gaming Epic-X RGB 3600MHz memory, 512GB Team MP34 M.2 NVMe SSD, 2TB Seagate Barracuda hard drive, Lian Li Lancool 215 Mesh A-RGB Case Black, Windows 10. Backed by a 2 year return to base warranty with all shipping costs included (upgradeable to 3 years).',
      image: '1650.jpg',
      category: categories[2]._id,
      price: 2899,
      quantity: 500
      }
  ])

  console.log('Products Seeded');

  await User.deleteMany();

  await User.create({
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('Users Seeded');

  process.exit();
});
