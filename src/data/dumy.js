import { faker } from '@faker-js/faker';

export default function data() {
  const dummyData = [];
  const category = ['T-shirt', 'sleeves', 'pant', 'short', 'outer'];
  const collection = ['', '', 'FW', 'SS', 'collection1'];

  for (let i = 0; i < 4000; i++) {
    const randomValue = category[Math.floor(Math.random() * category.length)];
    const randomcollection =
      collection[Math.floor(Math.random() * collection.length)];

    dummyData.push({
      product_id: i,
      name: `더미데이터${i}`,
      image: faker.image.url({ width: 100, height: 100 }),
      link: '',
      thumbnail: '',
      category: randomValue,
      collection: randomcollection,
    });
  }
  return dummyData;
}
