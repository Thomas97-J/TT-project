import { faker } from '@faker-js/faker';

export default function data() {
  const dummyData = [];

  for (let i = 0; i < 400; i++) {
    dummyData.push({
      product_id: i,
      name: `더미데이터${i}`,
      image: faker.image.url({ width: 100, height: 100 }),
      link: '',
      thumbnail: '',
    });
  }
  return dummyData;
}
