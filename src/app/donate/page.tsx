import type { Metadata } from "next";
import {
  ContentPage,
  InfoGrid,
  NotePanel,
  PageSection,
} from "../_components/content-page";

export const metadata: Metadata = {
  title: "Support the Mission | Vedavani Pathashala",
  description:
    "Learn about the documented purposes that support may contribute to. Verified donation channels are not yet available.",
};

export default function DonatePage() {
  return (
    <ContentPage
      activePath="/donate"
      eyebrow="Dharmakaryam"
      title={<>Help keep the lamp <em>of learning lit.</em></>}
      description="Support for education, knowledge preservation, spiritual activity and community welfare can help carry this purpose forward."
    >
      <PageSection eyebrow="Purposes described" title={<>Support aligned with the work.</>}>
        <p>
          The brief identifies Vedic and Sanskrit education, research,
          publications, temple services, spiritual activities and community
          welfare as areas of institutional work. These are the purposes
          described here; current funding priorities have not been supplied.
        </p>
        <InfoGrid
          items={[
            {
              title: "Vedic & Sanskrit learning",
              description:
                "Support the preservation and teaching of Vedic knowledge, oral traditions and Sanskrit.",
            },
            {
              title: "Education & resources",
              description:
                "Contribute towards educational opportunities and learning resources, as identified by the institution.",
            },
            {
              title: "Research & publications",
              description:
                "Help sustain inquiry and the careful sharing of knowledge through publications.",
            },
            {
              title: "Spiritual & community work",
              description:
                "Support temple services, spiritual activities and community welfare as needs are confirmed.",
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="Before contributing" title={<>Verified information comes first.</>}>
        <p>
          No bank account, UPI ID, payment link or donation-processing
          arrangement has been provided. This site does not currently accept
          contributions or collect payment information.
        </p>
        <NotePanel title="No tax-benefit claim">
          <p>
            Registration, tax-exemption status and any 80G eligibility have
            not been verified. No tax deduction or receipt should be assumed
            from this page.
          </p>
        </NotePanel>
        <p>
          Please wait for official, independently verifiable donation
          instructions and confirmation of current priorities before making
          any contribution.
        </p>
      </PageSection>
    </ContentPage>
  );
}
