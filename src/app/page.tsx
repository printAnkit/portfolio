import TemplateSwitch from "@/components/TemplateSwitch";
import BrutalTemplate from "@/templates/brutal/BrutalTemplate";
import EditorialTemplate from "@/templates/editorial/EditorialTemplate";
import MidnightTemplate from "@/templates/midnight/MidnightTemplate";
import RetroTemplate from "@/templates/retro/RetroTemplate";
import StudioTemplate from "@/templates/studio/StudioTemplate";

export default function Home() {
  return (
    <TemplateSwitch
      views={{
        midnight: <MidnightTemplate />,
        studio: <StudioTemplate />,
        editorial: <EditorialTemplate />,
        brutal: <BrutalTemplate />,
        retro: <RetroTemplate />,
      }}
    />
  );
}
