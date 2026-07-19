/**
 * Swizzled (wrapped) to add a minimal X++ layer on top of Prism's C# grammar:
 * a few X++-only keywords and an `xpp` language alias.
 */
import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';
import type {Optional} from 'utility-types';

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism as {additionalLanguages: string[]};

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      // eslint-disable-next-line global-require
      require('prismjs/components/prism-markup-templating.js');
    }
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });

  // X++ on top of C#: extra keywords that C# doesn't have.
  const csharp = PrismObject.languages.csharp;
  if (csharp) {
    PrismObject.languages.insertBefore('csharp', 'keyword', {
      'xpp-keyword': {
        pattern: /\b(?:ttsbegin|firstonly|crosscompany|container)\b/,
        alias: 'keyword',
      },
    });
    PrismObject.languages.xpp = PrismObject.languages.csharp;
  }

  delete (globalThis as Optional<typeof globalThis, 'Prism'>).Prism;
}
