import type { Metadata } from "next";
import {
  ContentPage,
  InfoGrid,
  NotePanel,
  PageSection,
} from "../_components/content-page";

export const metadata: Metadata = {
  title: "Contact | Vedavani Pathashala",
  description:
    "Contact and visit information for Vedavani Pathashala will be published when verified details are supplied.",
};

export default function ContactPage() {
  return (
    <ContentPage
      activePath="/contact"
      eyebrow="Contact"
      title={<>Begin with a <em>conversation.</em></>}
      description="We welcome enquiries about learning and the institution. Verified contact and visiting information is not yet available."
    >
      <PageSection eyebrow="Enquiries & visits" title={<>Details to be confirmed.</>}>
        <p>
          Official phone, email and postal contact details have not been
          provided. We have not added an enquiry form because there is no
          verified submission service connected to this website.
        </p>
        <InfoGrid
          items={[
            {
              title: "Email & phone",
              description:
                "Official email address and telephone number have not been supplied.",
            },
            {
              title: "Location & directions",
              description:
                "No verified institutional or visiting address has been supplied.",
            },
            {
              title: "Visiting hours",
              description:
                "Visiting hours and visitor arrangements have not been confirmed.",
            },
            {
              title: "Enquiry options",
              description:
                "An official enquiry route will be added once contact details and handling arrangements are confirmed.",
            },
          ]}
        />
        <NotePanel title="Before planning a visit">
          <p>
            Please wait for confirmed location, directions and visiting
            arrangements. No physical address or travel directions should be
            inferred from this page.
          </p>
        </NotePanel>
      </PageSection>
    </ContentPage>
  );
}
