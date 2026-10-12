import type { Metadata } from "next";
import {
  ContentPage,
  InfoGrid,
  NotePanel,
  PageSection,
  TextBlock,
  TextColumns,
} from "../_components/content-page";

export const metadata: Metadata = {
  title: "About | Vedavani Pathashala",
  description:
    "Learn about the purpose, vision and educational philosophy behind Vedavani Pathashala and Avighna Trust.",
};

export default function AboutPage() {
  return (
    <ContentPage
      activePath="/about"
      eyebrow="About"
      title={<>A living inheritance, <em>carried forward.</em></>}
      description="An introduction to Vedic learning, the Guru-Shishya Parampara and an education rooted in Indian knowledge traditions."
    >
      <PageSection eyebrow="Who we are" title={<>Learning that honours its roots.</>}>
        <p>
          Vedavani Pathashala and Avighna Trust are presented here as provisional
          names for an institution focused on Vedic education, Sanskrit,
          spiritual heritage and community welfare. Their precise legal and
          institutional relationship has not yet been confirmed.
        </p>
        <p>
          The purpose described in this website is to preserve and share Vedic
          knowledge through attentive study, oral traditions, values-based
          learning and meaningful engagement with the present.
        </p>
        <NotePanel title="A provisional identity">
          <p>
            Official naming, organisational structure and the relationship
            between these names require confirmation before publication as
            formal institutional statements.
          </p>
        </NotePanel>
      </PageSection>

      <PageSection eyebrow="Our vision & mission" title={<>An enduring purpose.</>}>
        <InfoGrid
          items={[
            {
              title: "Vision",
              description:
                "Preserve and share the wisdom of the Vedas and Bharatiya traditions, nurturing generations grounded in understanding, humility and purpose.",
            },
            {
              title: "Mission",
              description:
                "Create space for sincere learning through Vedic studies, Sanskrit, the Guru-Shishya Parampara and holistic education.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Educational philosophy" title={<>Knowledge, practice and character.</>}>
        <TextColumns>
          <TextBlock title="Learning through relationship">
            <p>
              The teacher-student tradition values listening, guidance, regular
              practice and the passing on of knowledge with care. It asks a
              learner not only to remember, but to reflect and grow.
            </p>
          </TextBlock>
          <TextBlock title="Tradition in dialogue with today">
            <p>
              Vedic and Sanskrit learning can sit alongside contemporary
              educational opportunities. The intention is to approach both
              with discernment, respect and an openness to lifelong learning.
            </p>
          </TextBlock>
        </TextColumns>
        <p>
          Vidyā dadāti vinayam: knowledge bestows humility. This principle
          offers a fitting guide for learning that values both understanding
          and the way one lives.
        </p>
      </PageSection>
    </ContentPage>
  );
}
