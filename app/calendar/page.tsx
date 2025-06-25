import { FooterLinksOuter } from "../(components)/Footers/FooterLinksOuter";
import { HeaderOuter } from "../(components)/Headers/HeaderOuter";
import { TrainingCalendar } from "../(components)/Training/Calendar/TrainingCalendarOuter";

export default function TrainingCalendarPage() {
    return (
      <main>
        <HeaderOuter/>
        <TrainingCalendar/>
        <FooterLinksOuter/>
      </main>
    );
  } 