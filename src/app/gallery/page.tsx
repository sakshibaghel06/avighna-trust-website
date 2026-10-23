import type { Metadata } from "next";
import {
  ContentPage,
  NotePanel,
  PageSection,
} from "../_components/content-page";
import { GalleryExplorer, SpeechVideos } from "../_components/gallery-explorer";

export const metadata: Metadata = {
  title: "Gallery | Vedavani Pathashala",
  description:
    "Photographs and speech videos supplied for Avighna Foundation and Vedavani Pathashala.",
};

export default function GalleryPage() {
  return (
    <ContentPage
      activePath="/gallery"
      eyebrow="Gallery"
      title={<>Moments of learning <em>and service.</em></>}
      description="Photographs and recorded speeches supplied for Avighna Foundation, presented without invented dates or event details."
    >
      <PageSection eyebrow="A visual record" title={<>A glimpse of the community.</>}>
        <p>
          The photographs show community-support moments, educational support
          and the Foundation identity. They do not document Gurukulam classes
          or confirm a dated event.
        </p>
        <GalleryExplorer />
        <NotePanel title="Photography and permissions">
          <p>
            Images are shown as supplied and are not accompanied by dates or
            claims about programmes, beneficiaries or outcomes.
          </p>
        </NotePanel>
      </PageSection>
      <PageSection eyebrow="Recorded speeches" title={<>Words worth listening to.</>}>
        <p>
          Local speech recordings are available below. Playback is started by
          the viewer; no video plays automatically.
        </p>
        <SpeechVideos />
      </PageSection>
    </ContentPage>
  );
}
