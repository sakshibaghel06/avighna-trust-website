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
  title: "Research & Publications | Vedavani Pathashala",
  description:
    "An overview of research and publication areas connected with Vedic and Bharatiya knowledge traditions.",
};

export default function ResearchPage() {
  return (
    <ContentPage
      activePath="/research"
      eyebrow="Research & publications"
      title={<>Study deeply. <em>Share with care.</em></>}
      description="Research and publications can help preserve knowledge, support continued learning and invite thoughtful engagement with India's intellectual heritage."
    >
      <PageSection eyebrow="Areas of work" title={<>A careful record of learning.</>}>
        <p>
          Research and educational publications are identified as areas of work
          for the institution. Their purpose is to encourage study of Vedic and
          Bharatiya knowledge systems and make learning accessible to wider
          audiences.
        </p>
        <InfoGrid
          items={[
            {
              title: "Research",
              description:
                "Study and inquiry relating to Vedic learning and Bharatiya knowledge traditions.",
            },
            {
              title: "Publications",
              description:
                "Educational writing and learning resources that share knowledge with care.",
            },
            {
              title: "Digital archives",
              description:
                "A possible digital home for texts, recordings or learning resources, subject to the institution's plans and permissions.",
              note: "No archive catalogue or digital collection has been supplied.",
            },
            {
              title: "Conferences & seminars",
              description:
                "Potential forums for discussion and exchange around learning and research.",
              note: "No conference or seminar dates have been confirmed.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Responsible preservation" title={<>Knowledge held in trust.</>}>
        <TextColumns>
          <TextBlock title="Respect the source">
            <p>
              Preserving oral and written traditions calls for careful
              attribution, accurate representation and respect for the
              communities and lineages that sustain them.
            </p>
          </TextBlock>
          <TextBlock title="Share with purpose">
            <p>
              Publications and digital resources can connect learners with
              reliable material while creating space for further study,
              interpretation and dialogue.
            </p>
          </TextBlock>
        </TextColumns>
        <NotePanel title="Projects and resources">
          <p>
            No specific research project, publication, digital archive
            collection, conference or seminar has been verified for listing.
            These activities and any future resources should be confirmed by
            the institution.
          </p>
        </NotePanel>
      </PageSection>
    </ContentPage>
  );
}
