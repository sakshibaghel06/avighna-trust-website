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
  title: "Programmes | Vedavani Pathashala",
  description:
    "Discover the learning areas described for Vedavani Pathashala, from Vedic studies and Sanskrit to holistic education.",
};

export default function ProgrammesPage() {
  return (
    <ContentPage
      activePath="/programmes"
      eyebrow="Programmes"
      title={<>Study with depth. <em>Grow with purpose.</em></>}
      description="A learning vision that brings together Vedic knowledge, Sanskrit, Bharatiya traditions, values and holistic education."
    >
      <PageSection eyebrow="Areas of learning" title={<>A broad path of study.</>}>
        <InfoGrid
          items={[
            {
              title: "Vedic studies",
              description:
                "Study of the Vedas, their meaning and oral traditions, including careful listening, recitation and continuity of learning.",
              note: "Specific śākhā, syllabus and teaching arrangements to be confirmed.",
            },
            {
              title: "Sanskrit learning",
              description:
                "Language and literature as a way into the texts, ideas and expressive heritage of the Sanskrit tradition.",
              note: "Course levels and admission details have not been supplied.",
            },
            {
              title: "Panchamukhi Shikshana",
              description:
                "A multidimensional educational approach identified in the brief, supporting development across knowledge, values and practice.",
              note: "The institution's specific framework requires confirmation.",
            },
            {
              title: "Holistic education",
              description:
                "An approach that makes space for yoga, traditional arts, reflection and contemporary educational opportunities.",
              note: "Programme availability and delivery are to be confirmed.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Texts & knowledge traditions" title={<>A conversation across generations.</>}>
        <p>
          The learning context includes the Vedas and Upanishads, the Bhagavad
          Gita, and the epics Ramayana and Mahabharata, alongside Sanskrit and
          broader Bharatiya knowledge systems.
        </p>
        <TextColumns>
          <TextBlock title="Learning with context">
            <p>
              These works are approached as part of a living intellectual and
              spiritual heritage—read, heard, discussed and understood within
              their traditions.
            </p>
          </TextBlock>
          <TextBlock title="Learning throughout life">
            <p>
              Traditional study and modern educational opportunities need not
              be separate paths. A thoughtful education can draw on both.
            </p>
          </TextBlock>
        </TextColumns>
        <NotePanel title="Programme information">
          <p>
            This page describes areas named in the supplied brief; it does not
            confirm that a particular course is currently running. Schedules,
            eligibility, fees and enrolment information require confirmation.
          </p>
        </NotePanel>
      </PageSection>
    </ContentPage>
  );
}
