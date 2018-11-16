const faker = require('faker');
const moment = require('moment');
const fs = require('fs');
const { performance } = require('perf_hooks');

const otherLanguages = ['Spanish', 'Korean', 'Mandarin', 'Portuguese', 'Russian', 'French'];

const languagesAvailable = () => {
  const languages = ['English'];
  const numberOfLanguages = faker.random.number({ min: 1, max: 3 });

  if (numberOfLanguages === 1) {
    return languages;
  }
  while (languages.length < numberOfLanguages) {
    const languageChoice = faker.random.number({ min: 0, max: 5 });
    if (!languages.includes(otherLanguages[languageChoice])) {
      languages.push(otherLanguages[languageChoice]);
    }
  }
  return languages;
};

const wstream = fs.createWriteStream('./textfiles/seedFile2.tsv');
const csvGenerator = (index) => {
  for (let i = index; i <= 10000000; i++) {
    const price = faker.finance.amount();
    const languagesUsed = languagesAvailable();
    const title = faker.lorem.sentence();
    const description = faker.lorem.sentence();
    const tag = faker.random.word();
    const avgRating = faker.finance.amount(1, 5, 1);
    const totalRatings = faker.random.number(100);
    const enrollment = faker.random.number(100);
    const createdBy = faker.name.findName();
    const lastUpdated = moment(faker.date.past()).format('L');
    const language = languagesUsed;
    const ccOptions = languagesUsed;
    const imgURL = faker.image.avatar();
    const listPrice = `$${price}`;
    const discountPrice = `$${price > 0.01 ? (price - 0.01).toFixed(2) : price}`;
    const videoHrs = faker.finance.amount(1, 20, 1);
    const totalArticles = faker.random.number(20);
    const totalDownloads = faker.random.number(1000);
    const activeCoupon = 'DISCIPLEOFSHANE';

    if (!wstream.write(
      `${i}\t${title}\t${description}\t${tag}\t${avgRating}\t${totalRatings}\t${enrollment}\t${createdBy}\t${lastUpdated}\t"${language}"\t"${ccOptions}"\t${imgURL}\t${listPrice}\t${discountPrice}\t${videoHrs}\t${totalArticles}\t${totalDownloads}\t${activeCoupon}\n`,
    )) {
      wstream.once('drain', () => csvGenerator(i + 1));
      return;
    }
  }
  wstream.on('error', (err) => {
    console.log(err.message);
  });
  wstream.end();
};

console.log('Starting file write...');
const t0 = performance.now();
csvGenerator(1);
const t1 = performance.now();

console.log(`Time to create: ${(t1 - t0)} milliseconds`);
