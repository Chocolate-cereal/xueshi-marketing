import { Badge, Button, CaseStudyCard, Container, CtaBanner, FeatureCard, Heading, Section, ServiceCard } from '@/components/ui';

const services = [
  ['SEO Audits', 'Structured reviews of crawlability, on-page signals, information architecture and search visibility using observable evidence.'],
  ['Landing Page Audits', 'Focused analysis of page clarity, message hierarchy, conversion friction and experience quality across key breakpoints.'],
  ['Website Performance Audits', 'Technical assessments of Core Web Vitals, rendering behaviour and accessibility considerations that affect user experience.'],
];
const principles = [
  ['Evidence First', 'Recommendations start with documented findings, not assumptions.'],
  ['Transparent Methodology', 'Inputs, tools and limitations are made clear so conclusions can be reviewed.'],
  ['Strategic Thinking', 'Findings are prioritised by user impact, business context and implementation effort.'],
  ['Respect for Confidentiality', 'Portfolio work uses public data and placeholders where client-sensitive details would otherwise appear.'],
];
const caseStudies = [
  { title: 'SEO Visibility Audit Placeholder', summary: 'A future case study outlining a public-data review of search visibility, metadata quality and indexability patterns.', tags: ['SEMrush', 'Search Console', 'Technical SEO'] },
  { title: 'Landing Page Review Placeholder', summary: 'A future case study examining message clarity, page structure and conversion-path friction for a selected landing page.', tags: ['Clarity', 'GA4', 'UX Audit'] },
  { title: 'Performance Assessment Placeholder', summary: 'A future case study documenting Core Web Vitals observations and practical performance recommendations.', tags: ['Lighthouse', 'PageSpeed', 'CWV'] },
];
const tools = ['SEMrush', 'Google PageSpeed Insights', 'Lighthouse', 'Microsoft Clarity', 'Google Analytics 4', 'Google Search Console'];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <Container className="text-center">
          <Badge>Independent digital marketing portfolio</Badge>
          <Heading as="h1" size="display" className="mx-auto mt-6 max-w-5xl">Evidence-Based Digital Marketing Portfolio</Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">Independent SEO, landing page and website performance audits demonstrating structured analysis, transparent methodologies and practical recommendations using publicly available data.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button href="#case-studies">Explore Case Studies</Button><Button href="#contact" variant="secondary">Contact Me</Button></div>
        </Container>
      </section>

      <Section id="services" eyebrow="Featured Services"><Heading id="services-heading">Analytical audit services</Heading><div className="mt-10 grid gap-5 md:grid-cols-3">{services.map(([title, description]) => <ServiceCard key={title} title={title} description={description} />)}</div></Section>

      <Section id="approach" eyebrow="My Approach" className="bg-neutral-50 dark:bg-charcoal-900"><Heading id="approach-heading">A measured approach to digital marketing analysis</Heading><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}</div></Section>

      <Section id="case-studies" eyebrow="Featured Case Studies"><Heading id="case-studies-heading">Placeholder studies for future portfolio work</Heading><div className="mt-10 grid gap-5 lg:grid-cols-3">{caseStudies.map((study) => <CaseStudyCard key={study.title} {...study} />)}</div></Section>

      <Section id="tools" eyebrow="Tools & Methodologies" className="bg-neutral-50 dark:bg-charcoal-900"><Heading id="tools-heading">Industry-standard tools, applied with clear methodology</Heading><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <div key={tool} className="rounded-2xl border bg-white p-5 text-sm font-medium text-neutral-700 dark:bg-charcoal-950 dark:text-neutral-200">{tool}</div>)}</div></Section>

      <Section id="contact" compact><CtaBanner title="Let's Connect" description="Recruiters, hiring managers and agencies are welcome to get in touch to discuss analytical marketing work, portfolio context or potential opportunities." buttonLabel="Contact Me" buttonHref="mailto:hello@example.com" /></Section>
    </main>
  );
}
