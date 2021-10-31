const db = require('./connection');
const { User, Category, Product, Article } = require('../models');

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
      image: '3060.jpg',
      category: categories[2]._id,
      price: 2899,
      quantity: 500
      }
  ])

  console.log('Products Seeded');

  await Article.deleteMany();

  await Article.insertMany([
    {
      author: 'Bigfoot',
      heading: 'Ray Tracing',
      synopsis: 'What is it and do I need it?',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vel justo id posuere. Integer vitae eleifend odio. Nunc sagittis, risus sed iaculis cursus, lorem erat ultricies velit, sit amet bibendum nibh turpis eu erat. Ut quis magna id ligula interdum pretium. Duis fringilla eleifend lectus et ullamcorper. Nam at diam elit. Nunc scelerisque neque ut elementum tincidunt. Morbi nec sem porttitor, eleifend metus nec, placerat urna. Quisque magna nibh, sollicitudin at hendrerit eget, iaculis vel odio. Pellentesque efficitur non nibh sed iaculis. Cras in nunc sed nulla vestibulum fringilla finibus quis libero. Sed eget orci a nunc varius condimentum. Morbi pretium lacinia neque sit amet tempor. Duis sodales mattis justo sit amet fermentum. Vestibulum tristique, purus eu consectetur rhoncus, nibh lacus feugiat leo, ac blandit arcu justo a metus.`
    },
    {
      author: 'Pythagorus',
      heading: 'HDR - High Dynamic Range',
      synopsis: 'Is it worth? probably not, also its expensive and usually poorly executed',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla volutpat gravida. Nulla nec odio congue velit auctor blandit sit amet quis erat. Sed id hendrerit est. Donec ultrices, nisl sed rhoncus congue, justo ligula maximus odio, rutrum posuere ipsum ipsum mollis nisl. Duis mollis pulvinar ex, vitae suscipit purus efficitur non. Maecenas sit amet mi purus. Aenean ullamcorper sed diam quis vehicula. Ut in varius lorem. Nulla tempor ante purus, ut dictum metus luctus aliquam. Sed sit amet viverra leo, et rhoncus leo. In augue mauris, posuere nec dolor at, convallis accumsan est. Donec eu urna mi. Donec faucibus sem at euismod porta. Integer tempus quam tortor, vitae porttitor mauris faucibus non.`
    },
    {
      author: 'Foobar',
      heading: 'Variable Refresh Rate',
      synopsis: 'Step out of the dark ages friend, VRR is here to save the day',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, nulla eget lobortis tempor, diam metus placerat diam, in suscipit tortor quam in metus. Nulla sed risus accumsan lectus sodales elementum. Maecenas malesuada risus enim, sed auctor mauris congue sed. Cras in neque lectus. Duis dictum feugiat felis in efficitur. Vivamus sed ipsum at enim cursus volutpat in cursus nunc. Morbi nec posuere risus. Maecenas sodales, metus in accumsan efficitur, est purus maximus ipsum, a ullamcorper dolor urna eget dolor. Mauris vitae enim ut sem molestie dignissim. Phasellus mattis urna quis risus aliquet, sed finibus sem placerat. Proin posuere ante enim, eget facilisis leo semper non. Donec dictum lacus at dolor elementum molestie.`
    },
    {
      author: 'Stirling Archer',
      heading: 'Resolution',
      synopsis: 'So many options to choose from, does it even matter?',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada magna at sem vehicula, non ultricies ante ullamcorper. Quisque commodo sapien velit, in sagittis lectus lacinia at. Nunc id auctor sapien. Nulla facilisi. Vestibulum id scelerisque nulla. Vestibulum dictum odio ut feugiat bibendum. Vivamus vitae lectus leo. Phasellus volutpat risus dui. Suspendisse volutpat dui vitae velit rhoncus, iaculis vehicula nisl fermentum. Nullam non ipsum lacus. Proin accumsan fermentum arcu a volutpat. Morbi ac convallis enim. Proin nec erat in erat aliquet pharetra. Mauris eget mauris ut ligula auctor hendrerit.`
    },
    {
      author: 'Dora, The',
      heading: 'FPS / Framerate',
      synopsis: 'How many FPS should I aim for?',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet varius ligula. Morbi tincidunt lectus quis auctor consectetur. Suspendisse potenti. Aliquam erat volutpat. Vivamus placerat congue ullamcorper. Pellentesque vitae nunc non ante lacinia laoreet eu nec ante. Nunc sodales hendrerit odio, id semper quam sollicitudin ut. Integer elit nulla, egestas id nisi sollicitudin, placerat volutpat sem. Nam elementum ullamcorper lacinia. Morbi sollicitudin risus vitae ligula ultrices, sed posuere turpis ultricies. In accumsan est in finibus pulvinar.`
    },
    {
      author: 'Jesse De Jong',
      heading: 'Form Factor',
      synopsis: 'How much variety is there in aestetics and what compromises do you make in the pursuit of the lowest volume',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor sem eu dolor venenatis ultrices. Duis laoreet eget nisi a finibus. In consectetur justo a urna porttitor, sit amet pulvinar ex scelerisque. Vestibulum vitae ex ut diam facilisis efficitur eget sed lectus. Phasellus vitae risus eget tellus blandit auctor eget vitae tortor. Suspendisse pretium arcu a tellus varius varius luctus eget arcu. Vestibulum metus nunc, suscipit non semper eget, venenatis non ipsum. Donec aliquet erat vitae justo tempus lobortis. Phasellus cursus ultrices urna, mattis convallis velit gravida sed. Pellentesque luctus metus in augue varius, ornare porta tortor pellentesque.`
    },
    {
      author: '@therealDonaldTrump',
      heading: 'Liquid vs Air Cooling',
      synopsis: 'When does watercooling become worthwhile over traditional air cooling?',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam at elit id luctus. Sed porttitor, magna eget porttitor efficitur, eros dui consectetur tortor, ac volutpat nisi mi mattis eros. Praesent fringilla nisl at euismod viverra. Nullam in metus eget lacus tincidunt sollicitudin. Nullam leo magna, feugiat sollicitudin velit fermentum, scelerisque pharetra est. Suspendisse vitae laoreet mi. Donec pharetra purus a congue vulputate. In sed mollis nisi. Nunc tristique placerat nulla eu condimentum. Nam nec vestibulum mauris. Praesent enim lacus, ornare id bibendum vel, sagittis eu justo. Donec in nibh vitae nisl posuere pulvinar eget sodales velit. Nulla scelerisque sed metus quis iaculis.`
    }
  ])

  console.log('Articles Seeded');

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
