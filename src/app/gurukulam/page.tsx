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
  title: "Gurukulam | Vedavani Pathashala",
  description:
    "Explore the Gurukulam tradition, the Guru-Shishya Parampara and a holistic approach to learning.",
};

export default function GurukulamPage() {
  return (
    <ContentPage
      activePath="/gurukulam"
      eyebrow="Gurukulam"
      title={<>A way of learning. <em>A way of living.</em></>}
      description="The Gurukulam tradition brings study, discipline, reflection and the teacher-student relationship into a connected learning journey."
    >
      <PageSection eyebrow="The learning relationship" title={<>Guru and shishya, learning together.</>}>
        <p>
          In the Guru-Shishya Parampara, knowledge is shared through attentive
          teaching and engaged learning. Listening, recitation, questions and
          sustained practice help a learner develop understanding as well as
          humility.
        </p>
        <p>
          The tradition is not simply a method of instruction. It places
          learning within a relationship of guidance, responsibility and
          respect, and keeps knowledge connected to how it is practised and
          passed on.
        </p>
      </PageSection>

      <PageSection eyebrow="A considered approach" title={<>Learning in many dimensions.</>}>
        <InfoGrid
          items={[
            {
              title: "Śravaṇa",
              description:
                "Listening closely to teaching and oral recitation as a foundation for study.",
            },
            {
              title: "Abhyāsa",
              description:
                "Returning to learning through regular practice, care and attention.",
            },
            {
              title: "Manana",
              description:
                "Making room to reflect, ask thoughtful questions and deepen understanding.",
            },
            {
              title: "Ācāra",
              description:
                "Nurturing values, discipline and conduct alongside the pursuit of knowledge.",
            },
          ]}
        />
        <NotePanel title="About the daily routine">
          <p>
            No verified timetable, residential arrangement or daily schedule
            has been supplied. Specific Gurukulam arrangements should be
            confirmed with the institution.
          </p>
        </NotePanel>
      </PageSection>

      <PageSection eyebrow="Tradition in daily life" title={<>Practice with purpose.</>}>
        <TextColumns>
          <TextBlock title="Oral traditions">
            <p>
              Vedic learning honours careful listening, accurate recitation
              and continuity between teacher and student. The practice of
              preserving knowledge orally is central to this inheritance.
            </p>
          </TextBlock>
          <TextBlock title="Holistic education">
            <p>
              Yoga, traditional arts, Sanskrit and reflective study can
              contribute to a balanced education. The specific activities and
              their availability are to be confirmed.
            </p>
          </TextBlock>
        </TextColumns>
      </PageSection>
    </ContentPage>
  );
}
