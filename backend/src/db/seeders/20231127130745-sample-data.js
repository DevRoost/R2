const db = require('../models');
const Users = db.users;

const Categories = db.categories;

const Dashboards = db.dashboards;

const PersistentData = db.persistent_data;

const Portals = db.portals;

const Services = db.services;

const CategoriesData = [
  {
    name: 'Lynn Margulis',
  },

  {
    name: 'Anton van Leeuwenhoek',
  },

  {
    name: 'B. F. Skinner',
  },

  {
    name: 'Joseph J. Thomson',
  },

  {
    name: 'Claude Bernard',
  },
];

const DashboardsData = [
  {
    title: 'Murray Gell-Mann',

    // type code here for "relation_many" field
  },

  {
    title: 'Max Planck',

    // type code here for "relation_many" field
  },

  {
    title: 'Frederick Gowland Hopkins',

    // type code here for "relation_many" field
  },

  {
    title: 'Carl Linnaeus',

    // type code here for "relation_many" field
  },

  {
    title: 'Max Delbruck',

    // type code here for "relation_many" field
  },
];

const PersistentDataData = [
  {
    data: 'User preferences and settings',

    // type code here for "relation_one" field
  },

  {
    data: 'Draft notes and comments',

    // type code here for "relation_one" field
  },

  {
    data: 'Saved search queries',

    // type code here for "relation_one" field
  },

  {
    data: 'Recent activity logs',

    // type code here for "relation_one" field
  },

  {
    data: 'Bookmarked articles',

    // type code here for "relation_one" field
  },
];

const PortalsData = [
  {
    name: 'Admin Portal',

    url: 'https://admin.appwizzy.com',
  },

  {
    name: 'User Portal',

    url: 'https://user.appwizzy.com',
  },

  {
    name: 'Support Portal',

    url: 'https://support.appwizzy.com',
  },

  {
    name: 'Analytics Portal',

    url: 'https://analytics.appwizzy.com',
  },

  {
    name: 'Marketing Portal',

    url: 'https://marketing.appwizzy.com',
  },
];

const ServicesData = [
  {
    name: 'Richard Feynman',

    description: 'Richard Feynman',

    // type code here for "relation_one" field
  },

  {
    name: 'Murray Gell-Mann',

    description: 'Alfred Kinsey',

    // type code here for "relation_one" field
  },

  {
    name: 'Jean Baptiste Lamarck',

    description: 'Murray Gell-Mann',

    // type code here for "relation_one" field
  },

  {
    name: 'Comte de Buffon',

    description: 'Max von Laue',

    // type code here for "relation_one" field
  },

  {
    name: 'Edward Teller',

    description: 'Ernst Haeckel',

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associatePersistentDatumWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PersistentDatum0 = await PersistentData.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (PersistentDatum0?.setUser) {
    await PersistentDatum0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PersistentDatum1 = await PersistentData.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (PersistentDatum1?.setUser) {
    await PersistentDatum1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PersistentDatum2 = await PersistentData.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (PersistentDatum2?.setUser) {
    await PersistentDatum2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PersistentDatum3 = await PersistentData.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (PersistentDatum3?.setUser) {
    await PersistentDatum3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const PersistentDatum4 = await PersistentData.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (PersistentDatum4?.setUser) {
    await PersistentDatum4.setUser(relatedUser4);
  }
}

async function associateServiceWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Service0 = await Services.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Service0?.setCategory) {
    await Service0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Service1 = await Services.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Service1?.setCategory) {
    await Service1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Service2 = await Services.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Service2?.setCategory) {
    await Service2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Service3 = await Services.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Service3?.setCategory) {
    await Service3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Service4 = await Services.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Service4?.setCategory) {
    await Service4.setCategory(relatedCategory4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Categories.bulkCreate(CategoriesData);

    await Dashboards.bulkCreate(DashboardsData);

    await PersistentData.bulkCreate(PersistentDataData);

    await Portals.bulkCreate(PortalsData);

    await Services.bulkCreate(ServicesData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associatePersistentDatumWithUser(),

      await associateServiceWithCategory(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('dashboards', null, {});

    await queryInterface.bulkDelete('persistent_data', null, {});

    await queryInterface.bulkDelete('portals', null, {});

    await queryInterface.bulkDelete('services', null, {});
  },
};
