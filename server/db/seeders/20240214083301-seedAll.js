'use strict';
const { hashSync } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Сергей Сергеевич Хульс',
          email: 'huls@yandex.ru',
          hashpass: hashSync('123', 7),
          role: 'Соискатель',
          number: '89996223835',
        },
        {
          name: 'Виктор Сергеевич Разембаум',
          email: 'Razembaum@yandex.ru',
          hashpass: hashSync('123', 7),
          role: 'Соискатель',
          number: '89996218835',
        },
        {
          name: 'Мария Викторовна Корж',
          email: 'Korj@yandex.ru',
          hashpass: hashSync('123', 7),
          role: 'Соискатель',
          number: '89345218835',
        },
        {
          name: 'Алексей Павлович Попов',
          email: 'Popov@yandex.ru',
          hashpass: hashSync('123', 7),
          role: 'Работодатель',
          number: '89996218835',
        },
        {
          name: 'Евгений Владимирович Петров',
          email: 'Petrov@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218836',
        },
        {
          name: 'Мария Александровна Сидорова',
          email: 'Sidorova@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218837',
        },
        {
          name: 'Андрей Владимирович Иванов',
          email: 'Ivanov@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218838',
        },
        {
          name: 'Ольга Александровна Кузнецова',
          email: 'Kuznetsova@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Работодатель',
          number: '89996218839',
        },
        {
          name: 'Алексей Викторович Смирнов',
          email: 'Smirnov@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218840',
        },
        {
          name: 'Татьяна Андреевна Васильева',
          email: 'Vasilieva@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Работодатель',
          number: '89996218841',
        },
        {
          name: 'Анна Викторовна Лебедева',
          email: 'Lebedeva@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218842',
        },
        {
          name: 'Александр Сергеевич Кузнецов',
          email: 'Kuznetsov@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Соискатель',
          number: '89996218843',
        },
        {
          name: 'Михаил Владимирович Смирнов',
          email: 'Smirnov@example.com',
          hashpass: "hashSync('123', 7)",
          role: 'Работодатель',
          number: '89996218844',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Vacansies',
      [
        {
          name: 'Frontend developer',
          price: '40000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'Medos',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Сменный график',
          education: 'Среднее',
          expireance: '3-6 лет',
        },
        {
          name: 'Frontend developer',
          price: '96000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'MTS',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Удаленная работа',
          education: 'Высшее',
          expireance: '1-3 лет',
        },
        {
          name: 'Frontend developer',
          price: '73000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'Elbrus',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          education: 'Высшее',
          expireance: '1-3 лет',
          format: 'Удаленная работа',
        },
        {
          name: 'Backend developer',
          price: '119000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'Megafon',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Гибкий график',
          education: 'Нет',
          expireance: 'нет',
        },
        {
          name: 'Fullstack developer',
          price: '136000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'SIMENS',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Вахтовый метод',
          education: 'Высшее',
          expireance: '3-6 лет',
        },
        {
          name: 'Уборщик',
          price: '40000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'ИП Антонов',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Полная занятость',
          education: 'Среднее',
          expireance: '1-3 лет',
        },
        {
          name: 'Проститутка developer',
          price: '440000',
          image: 'https://img.hhcdn.ru/employer-logo/3279173.png',
          company: 'Курский вокзал',
          info: `Компания Medods входит в топ-3 компаний, разрабатывающих собственную CRM/EPR систему для медицинских клиник в России и странах СНГ. Наша дружная команда создает действительно полезный и востребованный продукт, которым пользуются уже более 500 медицинских клиник от Владивостока до Калининграда.
          Разработка ведется с использованием современных средств, таких как: Node.js, RoR, Golang, Kafka, JavaScript, Vue.js, PotgreSQL, Docker и других. Стек используемых технологий, позволяет стать/оставаться востребованным разработчиком на рынке труда.`,
          userId: 4,
          format: 'Полная занятость',
          education: 'Высшее',
          expireance: 'нет',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
// name: DataTypes.STRING,
//       price: DataTypes.STRING,
//       image: DataTypes.TEXT,
//       company: DataTypes.STRING,
//       info: DataTypes.TEXT,
//       userId: DataTypes.INTEGER,
