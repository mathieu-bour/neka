import { SingleBar, Presets } from 'cli-progress';
import { createHash } from 'crypto';
import { createWriteStream, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import * as https from 'https';
import { join } from 'path';
import { sync as rimrafSync } from 'rimraf';

const root = process.cwd();
const output = join(root, 'output');
const maxSupply = 100;

const sizes = ['big', 'mid', 'smol'];

async function generate(index: number) {
  const seed = createHash('md5').update(index.toString()).digest();

  // Get the image from robohash
  await new Promise((resolve) => {
    const image = createWriteStream(join(output, `${index}.png`));

    https.get(`https://robohash.org/${seed}`, (dar) => {
      dar.pipe(image).on('close', resolve);
    });
  });

  // Generate the metadata JSON file
  await writeFile(
    join(output, `${index}.json`),
    JSON.stringify(
      {
        name: `Neka #${index}`,
        description: `Neka NFT #${index}`,
        image: `https://storage.googleapis.com/neka.mathieu-bour.fr/${index}.png`,
        attributes: [
          {
            trait_type: 'Size',
            value: sizes[index % sizes.length],
          },
          {
            trait_type: 'Generation',
            value: 1,
          },
          {
            display_type: 'date',
            trait_type: 'birthday',
            value: Math.floor(new Date().getTime() / 1000),
          },
        ],
      },
      null,
      2,
    ),
  );
}

async function main() {
  rimrafSync(output);
  mkdirSync(output);

  const progress = new SingleBar({}, Presets.shades_classic);
  progress.start(maxSupply, 0);

  for (let i = 1; i <= maxSupply; i++) {
    await generate(i);
    progress.increment();
  }

  progress.stop();
}

void main();
