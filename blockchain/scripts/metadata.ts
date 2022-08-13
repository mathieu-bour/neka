import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const MAX_SUPPLY = 100;

const base = join(process.cwd(), 'out');

try {
  mkdirSync(base);
} catch (e) {}

for (let i = 1; i <= MAX_SUPPLY; i++) {
  writeFileSync(
    join(base, `${i}.json`),
    JSON.stringify(
      {
        name: `Neka #${i}`,
        description: `Neka NFT #${i}`,
        image: `https://storage.googleapis.com/neka.mathieu-bour.fr/${i}.json`,
      },
      null,
      2,
    ),
  );
}
