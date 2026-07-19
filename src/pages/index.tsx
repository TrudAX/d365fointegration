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
        <strong>
          <span className={styles.miniMark}>EI</span> External Integration
          workspace
        </strong>
        <span className={styles.statusDot}>Operational</span>
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
            <i /> Solution for Microsoft Dynamics 365 SCM and Finance
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            Build reliable and easy to support Dynamics 365 ERP integrations
          </Heading>
          <p className={styles.heroSubtitle}>
            An open-source X++ framework for predictable inbound and outbound
            integrations — one repeatable model for designing, processing,
            testing, and operating every interface.
          </p>
          <div className={styles.buttonRow}>
            <Link className={styles.buttonPrimary} to="/docs/intro">
              Get started <span aria-hidden="true">→</span>
            </Link>
            <Link
              className={styles.buttonSecondary}
              href="https://github.com/TrudAX/XppTools">
              View on GitHub <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className={styles.trustLine}>
            <span>Production-proven scenarios</span>
            <span>100% X++, no external components</span>
            <span>Free and open source</span>
          </p>
        </div>
        <WorkspacePanel />
      </div>
    </section>
  );
}

const proofItems = [
  {
    tag: 'Production-proven',
    title: 'Real-life scenarios, not demo code',
    text: 'Every template and sample comes from integrations that already run in live D365FO environments.',
  },
  {
    tag: 'Support first',
    title: 'See every message journey',
    text: 'Source payloads, processing status, errors and traces stay together — built for the people who keep integrations running after go-live.',
  },
  {
    tag: 'Testable by design',
    title: 'Develop without the external system',
    text: 'Import files manually, replay message payloads, and run processing without a live connector.',
  },
];

function ProofSection() {
  return (
    <section className={styles.proofSection}>
      <div className="container">
        <div className={styles.splitHeading}>
          <div>
            <span className={styles.kicker}>Why teams use it</span>
            <Heading as="h2" className={styles.sectionTitle}>
              One framework. Every integration lifecycle.
            </Heading>
          </div>
          <p>
            Reusable patterns backed by official documentation and real-world
            tutorials.
          </p>
        </div>
        <div className={styles.proofGrid}>
          {proofItems.map((p) => (
            <article key={p.tag}>
              <span>{p.tag}</span>
              <Heading as="h3">{p.title}</Heading>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: '01',
    title: 'Design',
    text: 'Ready-to-use templates for integration planning:',
    items: ['Inbound', 'Outbound Event-based', 'Outbound Periodic', 'Service-based'],
    link: '/docs/document-types',
    linkLabel: 'Integration templates',
  },
  {
    n: '02',
    title: 'Load data',
    text: 'Sample connectors for:',
    items: ['Azure Service Bus', 'SFTP', 'Azure File Share', 'REST API', 'AI (LLM)', 'Manual upload'],
    link: '/docs/connectors',
    linkLabel: 'Connectors',
  },
  {
    n: '03',
    title: 'Process data',
    text: 'Import documents from CSV, Excel, XML, JSON, PDF. Samples for:',
    items: ['Sales lines', 'Ledger journals', 'Purchase lines', 'Vendors'],
    link: '/docs/document-types',
    linkLabel: 'Document types',
  },
  {
    n: '04',
    title: 'Test',
    text: 'Validate before go-live:',
    items: [
      'Performance testing up to 1M journal lines',
      'Run any document manually without a connector',
    ],
    link: '/docs/forms/operations',
    linkLabel: 'Operations & testing',
  },
];

function HowItWorks() {
  return (
    <section className={styles.stagesSection}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>How it works</span>
          <Heading as="h2" className={styles.sectionTitle}>
            One repeatable model for every interface
          </Heading>
          <p>
            The framework helps from the moment you get the task "integrate
            D365FO with a third-party system": a{' '}
            <Link href="https://denistrunin.com/integration-checklist">
              questionnaire
            </Link>{' '}
            to structure the first design meeting, a template to describe the
            message mapping, four base flows ready to run, and sample
            connectors for every common channel.
          </p>
        </div>
        <div className={styles.stageGrid}>
          {steps.map((s) => (
            <article key={s.n}>
              <span className={styles.stageNumber}>{s.n}</span>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.text}</p>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
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
      'Support for custom transactions',
      'Document linked to the original file',
      'Business logic not tied to data entities',
      'Native X++ — no external dependencies',
      'A standard approach to error types',
    ],
  },
  {
    title: 'vs Business Events',
    items: [
      'Document created at the time of export',
      'Messages unique per document, no duplicates',
      'The response can be processed',
      'Full logs — including successful exports',
    ],
  },
  {
    title: 'vs Message Processor',
    items: [
      'Enhanced logging and tracing',
      'Manual message processing',
      'Testing in a ttsbegin-ttsabort block',
      'Processing and format flexibility',
    ],
  },
];

function WhyCompare() {
  return (
    <section className={styles.compareSection}>
      <div className="container">
        <div className={styles.splitHeading}>
          <div>
            <span className={styles.kicker}>Why External Integration</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Advantages over the standard tools
            </Heading>
          </div>
          <Link
            to="/docs/why-external-integration/summary"
            className={styles.textLink}>
            Read the full comparison →
          </Link>
        </div>
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

const useCases = [
  {
    tags: ['Inbound', 'REST API'],
    title: 'Import web sales orders',
    text: 'Incrementally load sales documents from a REST endpoint with mapping, replay, and full traceability back to the original request.',
    href: 'https://denistrunin.com/integration-inboundwebsales',
  },
  {
    tags: ['Outbound', 'REST API'],
    title: 'Event-based web exports',
    text: 'Create one durable export document per business event, send it to a web service, and keep complete operational evidence.',
    href: 'https://denistrunin.com/integration-outboundweb',
  },
  {
    tags: ['Outbound', 'SFTP'],
    title: 'Periodic SFTP export',
    text: 'Generate files from SQL queries, data entities, or X++ procedures and deliver them to SFTP with export logs.',
    href: 'https://denistrunin.com/integration-outboundsftp',
  },
];

function UseCasePreview() {
  return (
    <section className={styles.useCaseSection}>
      <div className="container">
        <div className={styles.splitHeading}>
          <div>
            <span className={styles.kicker}>Use cases</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Start from a working integration pattern
            </Heading>
          </div>
          <Link to="/docs/resources" className={styles.textLink}>
            Browse all use cases →
          </Link>
        </div>
        <div className={styles.useCaseGrid}>
          {useCases.map((u) => (
            <Link key={u.title} href={u.href} className={styles.useCard}>
              <span className={styles.tagRow}>
                {u.tags.map((t) => (
                  <i key={t}>{t}</i>
                ))}
              </span>
              <Heading as="h3">{u.title}</Heading>
              <p>{u.text}</p>
              <strong>Read the tutorial →</strong>
            </Link>
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
          <span className={styles.ctaKicker}>Ready to try it?</span>
          <Heading as="h2">
            Install the module and build your first integration.
          </Heading>
          <p>
            Use the source, samples, and documentation as the starting point
            for your next D365FO integration.
          </p>
        </div>
        <div className={styles.buttonRow}>
          <Link className={styles.ctaButtonPrimary} to="/docs/getting-started">
            Read installation
          </Link>
          <Link
            className={styles.ctaButtonSecondary}
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
        <ProofSection />
        <HowItWorks />
        <WhyCompare />
        <UseCasePreview />
        <BottomCta />
      </main>
    </Layout>
  );
}
