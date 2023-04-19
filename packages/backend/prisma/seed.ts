/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.cuisine.deleteMany();
  await prisma.user.deleteMany();
  await prisma.product.deleteMany();
  await prisma.restaurant.deleteMany();

  console.log('Seeding...');
  console.log('Creating cuisines...');
  const italian = await prisma.cuisine.create({
    data: {
      name: 'Italian',
    },
  });

  const maxican = await prisma.cuisine.create({
    data: {
      name: 'Mexican',
    },
  });

  const chinese = await prisma.cuisine.create({
    data: {
      name: 'Chinese',
    },
  });

  const japanese = await prisma.cuisine.create({
    data: {
      name: 'Japanese',
    },
  });

  const indian = await prisma.cuisine.create({
    data: {
      name: 'Indian',
    },
  });

  const thai = await prisma.cuisine.create({
    data: {
      name: 'Thai',
    },
  });

  const german = await prisma.cuisine.create({
    data: {
      name: 'German',
    },
  });

  console.log('Cuisines created');

  console.log('Creating users...');

  const rajaMalik = await prisma.user.create({
    data: {
      firstName: 'Raja',
      lastName: 'Malik',
      email: 'raja@smunch.com',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      addresses: {
        create: [
          {
            street: '123 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '56545',
            country: 'Germany',
          },
        ],
      },
    },
  });

  const marthaStewart = await prisma.user.create({
    data: {
      firstName: 'Martha',
      lastName: 'Stewart',
      email: 'martha@smunch.com',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      addresses: {
        create: [
          {
            street: '999 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '56545',
            country: 'Germany',
          },
        ],
      },
    },
  });

  console.log('Users created...');

  const cuisines = [italian, maxican, chinese, japanese, indian, thai, german];
  const cuisineProduct = {};
  for (const cuisine of cuisines) {
    cuisineProduct[cuisine.name] = [];
    for (let index = 0; index < 10; index++) {
      const productName = cuisine.name + index;
      const productDescription = cuisine.name + index + ' description';
      const productPrice = 100 + index;
      const prod = {
        name: productName,
        description: productDescription,
        cuisine: {
          connect: {
            id: cuisine.id,
          },
        },
        price: productPrice,
        photos: {
          create: [
            {
              url: 'https://source.unsplash.com/random/800x600',
            },
            {
              url: 'https://source.unsplash.com/random/800x600',
            },
          ],
        },
      };
      cuisineProduct[cuisine.name] = [...cuisineProduct[cuisine.name], prod];
    }
  }

  console.log('Creating restaurants...');

  const theMunch = await prisma.restaurant.create({
    data: {
      name: 'The Munch',
      addresses: {
        create: [
          {
            street: '111 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '11111',
            country: 'Germany',
          },
        ],
      },
      latitude: 37.7749295,
      longitude: -122.4194155,
      cuisine: {
        connect: {
          id: italian.id,
        },
      },
      photos: {
        create: [
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
        ],
      },
      products: {
        create: cuisineProduct[italian.name],
      },
    },
  });

  const cupido = await prisma.restaurant.create({
    data: {
      name: 'Cupido',
      addresses: {
        create: [
          {
            street: '222 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '22222',
            country: 'Germany',
          },
        ],
      },
      latitude: 37.7749295,
      longitude: -122.4194155,
      cuisine: {
        connect: {
          id: german.id,
        },
      },
      photos: {
        create: [
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
        ],
      },
      products: {
        create: cuisineProduct[german.name],
      },
    },
  });

  const mountainHubGourmet = await prisma.restaurant.create({
    data: {
      name: 'Mountain Hub Gourmet',
      addresses: {
        create: [
          {
            street: '333 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '33333',
            country: 'Germany',
          },
        ],
      },
      latitude: 37.7749295,
      longitude: -122.4194155,
      cuisine: {
        connect: {
          id: japanese.id,
        },
      },
      photos: {
        create: [
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
        ],
      },
      products: {
        create: cuisineProduct[japanese.name],
      },
    },
  });

  const haveli = await prisma.restaurant.create({
    data: {
      name: 'Haveli',
      addresses: {
        create: [
          {
            street: '999 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '44444',
            country: 'Germany',
          },
        ],
      },
      latitude: 37.7749295,
      longitude: -122.4194155,
      cuisine: {
        connect: {
          id: indian.id,
        },
      },
      photos: {
        create: [
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
        ],
      },
      products: {
        create: cuisineProduct[indian.name],
      },
    },
  });

  const mainlandChina = await prisma.restaurant.create({
    data: {
      name: 'Mainland China',
      addresses: {
        create: [
          {
            street: '9191 Main St',
            city: 'Munich',
            state: 'Baveria',
            zip: '55555',
            country: 'Germany',
          },
        ],
      },

      latitude: 37.7749295,
      longitude: -122.4194155,
      cuisine: {
        connect: {
          id: indian.id,
        },
      },
      photos: {
        create: [
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
          {
            url: 'https://source.unsplash.com/random/800x600',
          },
        ],
      },
      products: {
        create: cuisineProduct[indian.name],
      },
    },
  });

  console.log('Restaurants Seeded');
  console.log('Seeding done.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
