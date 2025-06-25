import { FooterLinksOuter } from "../(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "../(components)/Headers/HeaderOuter";
import { TrainingCatalogContent } from "../(components)/Training/Catalog/TrainingCatalogContent";

export default function TrainingCatalogPage() {
    return (
      <main>
        <HeaderOuter/>
        <TrainingCatalogContent/>
        <FooterLinksOuter/>
      </main>
    );
  } 