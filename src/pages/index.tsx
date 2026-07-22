import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function WorkspacePanel() {
  return (
    <div className={styles.workspacePanel}>
      <div className={styles.panelHeader}>
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.panelTitle}>
          EI External Integration workspace — D365FO
        </span>
      </div>
      <img
        className={styles.panelImage}
        src={useBaseUrl('/img/workspace-hero.png')}
        alt="External Integration workspace in D365FO: summary tiles for import and export errors and daily volumes, with a list of inbound message sessions"
        width={1492}
        height={721}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroGrid)}>
        <div>
          <span className={styles.eyebrow}>
            Microsoft Dynamics 365 SCM &amp; Finance
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            Build reliable and easy to support Dynamics 365 ERP integrations
          </Heading>
          <p className={styles.heroSubtitle}>
            An open-source X++ framework with one repeatable model for
            designing, processing, testing and operating every interface —
            inbound and outbound.
          </p>
          <div className={styles.buttonRow}>
            <Link className={styles.buttonPrimary} to="/docs/intro">
              Get started
            </Link>
            <Link
              className={styles.buttonSecondary}
              href="https://github.com/TrudAX/XppTools">
              View on GitHub
            </Link>
          </div>
          <p className={styles.trustLine}>
            <span>Production-proven</span>
            <span>100% X++, no external components</span>
            <span>Free &amp; open source</span>
          </p>
        </div>
        <WorkspacePanel />
      </div>
    </section>
  );
}

const steps = [
  {
    n: '01',
    title: 'Design',
    text: (
      <>
        <Link href="https://denistrunin.com/integration-checklist">
          Questionnaire
        </Link>{' '}
        for the first design meeting, mapping template, four base flows ready
        to run.
      </>
    ),
    link: '/docs/message-types',
    linkLabel: 'Message types',
  },
  {
    n: '02',
    title: 'Load',
    text: 'Sample connectors: Azure Service Bus, SFTP, Azure File Share, REST API, AI (LLM), manual upload.',
    link: '/docs/connectors',
    linkLabel: 'Connectors',
  },
  {
    n: '03',
    title: 'Process',
    text: 'Import CSV, Excel, XML, JSON, PDF into sales lines, journals, purchase lines, vendors.',
    link: '/docs/file-formats',
    linkLabel: 'File formats',
  },
  {
    n: '04',
    title: 'Test',
    text: 'Replay any document without a connector; performance-tested up to 1M journal lines.',
    link: '/docs/forms/operations',
    linkLabel: 'Operations',
  },
];

function HowItWorks() {
  return (
    <section className={styles.stagesSection}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>How it works</span>
          <Heading as="h2" className={styles.sectionTitle}>
            From task to tested interface in four steps
          </Heading>
        </div>
        <div className={styles.stageGrid}>
          {steps.map((s) => (
            <article key={s.n}>
              <span className={styles.stageNumber}>{s.n}</span>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.text}</p>
              <Link to={s.link} className={styles.textLink}>
                {s.linkLabel} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const comparisons = [
  {
    title: 'vs Data Management Framework',
    items: [
      'Custom transactions supported',
      'Document linked to original file',
      'Logic not tied to data entities',
      'Native X++, no dependencies',
    ],
  },
  {
    title: 'vs Business Events',
    items: [
      'Document created at export time',
      'One message per document, no duplicates',
      'Responses can be processed',
      'Full logs, including successes',
    ],
  },
  {
    title: 'vs Message Processor',
    items: [
      'Enhanced logging and tracing',
      'Manual message processing',
      'Testing in ttsbegin–ttsabort',
      'Processing and format flexibility',
    ],
  },
];

function WhyCompare() {
  return (
    <section className={styles.compareSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Advantages over the standard tools
        </Heading>
        <p className={styles.sectionSub}>
          Where the framework goes beyond what ships in the box.{' '}
          <Link to="/docs/why-external-integration" className={styles.textLink}>
            Read the full comparison →
          </Link>
        </p>
        <div className={styles.compareGrid}>
          {comparisons.map((c) => (
            <article key={c.title}>
              <Heading as="h3">{c.title}</Heading>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={clsx('container', styles.ctaPanel)}>
        <div>
          <Heading as="h2">
            Install the module and build your first integration
          </Heading>
          <p>Source, samples and documentation as your starting point.</p>
        </div>
        <div className={styles.buttonRow}>
          <Link className={styles.buttonPrimary} to="/docs/getting-started">
            Read installation
          </Link>
          <Link
            className={styles.buttonSecondary}
            href="https://github.com/TrudAX/XppTools">
            View source ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="External Integration Module for Dynamics 365 ERP"
      description="An open-source X++ framework for building reliable and easy to support integrations in Microsoft Dynamics 365 Supply Chain Management and Finance (D365FO).">
      <main className={styles.landing}>
        <Hero />
        <HowItWorks />
        <WhyCompare />
        <BottomCta />
      </main>
    </Layout>
  );
}
