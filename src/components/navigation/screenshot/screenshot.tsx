import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

import { ReactComponent as PhotoIcon } from "@assets/svg/photo.svg";

import NavIcon from "@components/navigation/navIcon/navIcon";

export default function Screenshot(): JSX.Element {
  function handleScreenshot(): void {
    const element = document.body;

    const timestamp = new Date().toLocaleString();
    const filename = `tracer-screenshot-${timestamp}.png`;

    html2canvas(element, {
      onclone: (clonedDocument) => {
        Array.from(clonedDocument.querySelectorAll("h1")).forEach((heading) => {
          heading.style.marginTop = "-17px";
        });
        Array.from(clonedDocument.querySelectorAll("span")).forEach((span) => {
          span.style.marginTop = "-17px";
        });
      }
    }).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      saveAs(dataURL, filename);
    });
  }

  return <NavIcon Icon={PhotoIcon} onClick={handleScreenshot} title="Screenshot" />;
}
