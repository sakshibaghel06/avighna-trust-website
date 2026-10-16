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
  title: "Panchamukhi Shikshana | Vedavani Pathashala",
  description:
    "An introduction to Panchamukhi Shikshana as a multidimensional educational approach rooted in Bharatiya learning traditions.",
};

export default function PanchamukhiShikshanaPage() {
  return (
    <ContentPage
      activePath="/panchamukhi-shikshana"
      eyebrow="Panchamukhi Shikshana"
      title={<>Five dimensions. <em>One whole education.</em></>}
      description="Panchamukhi Shikshana brings together Veda, Yoga, Vijnana, Krishi and Kala Kaushalya as five dimensions of learning."
    >
      <PageSection eyebrow="The framework" title={<>Learning in many directions.</>}>
        <p>
          Panchamukhi Shikshana means a five-faceted approach. The five pillars
          named in the project brief connect inherited knowledge with
          well-being, scientific inquiry, care for the natural world and
          creative skill.
        </p>
        <InfoGrid
          items={[
            {
              title: "Veda",
              description:
                "Engage with Vedic knowledge through careful listening, study, reflection and respect for oral transmission.",
            },
            {
              title: "Yoga",
              description:
                "Include the study and practice of yoga as a path of attention, discipline and integrated well-being.",
            },
            {
              title: "Vijnana (Science)",
              description:
                "Encourage observation, inquiry and scientific understanding alongside traditional knowledge.",
            },
            {
              title: "Krishi (Agriculture)",
              description:
                "Recognise agriculture, the natural world and practical stewardship as meaningful areas of learning.",
            },
            {
              title: "Kala Kaushalya (Traditional Arts and Skills)",
              description:
                "Value traditional arts and practical skills as forms of creativity, knowledge and cultural continuity.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Why it matters" title={<>Education with depth and direction.</>}>
        <TextColumns>
          <TextBlock title="Learning that forms character">
            <p>
              A good educational framework does not only cultivate information.
              It also shapes how a person listens, reflects, responds and acts.
            </p>
          </TextBlock>
          <TextBlock title="Tradition with relevance">
            <p>
              The value of Bharatiya educational thought lies in its ability to
              connect continuity with contemporary life: honouring roots while
              supporting thoughtful growth in the present.
            </p>
          </TextBlock>
        </TextColumns>
        <NotePanel title="Implementation details">
          <p>
            These descriptions explain the five named pillars, not a verified
            curriculum. Subject groupings, class structures, instructors and
            schedules should be confirmed directly by the institution.
          </p>
        </NotePanel>
      </PageSection>
    </ContentPage>
  );
}
