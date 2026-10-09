import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { englishSentence, interfaceWord, italianSentence } from './lib/texts';

export const collections = {
  textsIt: defineCollection({ loader: file('src/texts/it.json'), schema: italianSentence }),
  textsEn: defineCollection({ loader: file('src/texts/en.json'), schema: englishSentence }),
  uiIt: defineCollection({ loader: file('src/ui/it.json'), schema: interfaceWord }),
  uiEn: defineCollection({ loader: file('src/ui/en.json'), schema: interfaceWord }),
};
