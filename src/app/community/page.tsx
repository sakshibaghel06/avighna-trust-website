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
  title: "Community | Vedavani Pathashala",
  description:
    "Learn about the community welfare and outreach purpose described for the institution.",
};

export default function CommunityPage() {
  return (
    <ContentPage
      activePath="/community"
      eyebrow="Community"
      title={<>Knowledge in the service <em>of community.</em></>}
      description="Community welfare is part of the stated institutional purpose: learning and service held together with care."
    >
      <PageSection eyebrow="Community welfare" title={<>A wider circle of care.</>}>
        <p>
          The supplied brief includes community welfare and outreach among the
          institution&apos;s areas of work. This reflects a view of education that
          reaches beyond individual study and recognises responsibility to the
          wider community.
        </p>
        <p>
          Specific initiatives, beneficiaries, locations and schedules have
          not been supplied. We will describe activities here only after their
          details are verified.
        </p>
      </PageSection>

      <PageSection eyebrow="How service connects" title={<>Learning with responsibility.</>}>
        <InfoGrid
          items={[
            {
              title: "Education & access",
              description:
                "Support for learning is one way the purpose of knowledge can be shared more widely.",
            },
            {
              title: "Community outreach",
              description:
                "Outreach is an identified area of work; the form and scope of activities require confirmation.",
            },
            {
              title: "Cultural continuity",
              description:
                "Preserving language, learning and heritage can strengthen connections across generations.",
            },
            {
              title: "Participation",
              description:
                "Ways to volunteer or contribute should be announced when the institution has confirmed opportunities.",
              note: "No current volunteer programme has been verified.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="A considered commitment" title={<>Service shaped by real needs.</>}>
        <TextColumns>
          <TextBlock title="Listen first">
            <p>
              Meaningful outreach begins by listening and understanding the
              needs of the people and communities involved.
            </p>
          </TextBlock>
          <TextBlock title="Share verified work">
            <p>
              Clear information about activities helps supporters understand
              what is being done without overstating impact or inventing
              achievements.
            </p>
          </TextBlock>
        </TextColumns>
        <NotePanel title="Current initiatives">
          <p>
            No named welfare project, outcome, partner organisation or
            beneficiary information has been provided. This page does not
            claim that a specific initiative is currently underway.
          </p>
        </NotePanel>
      </PageSection>
    </ContentPage>
  );
}
