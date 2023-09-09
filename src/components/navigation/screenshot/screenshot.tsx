import { saveAs } from "file-saver";

import { ReactComponent as PhotoIcon } from "#/assets/svg/photo.svg";
import NavIcon from "#/components/navigation/navIcon/navIcon";

export default function Screenshot() {
  function handleScreenshot(): void {
    import("html2canvas").then((html2canvas) => {
      const element = document.body;

      const timestamp = new Date().toLocaleString();
      const filename = `tracer-screenshot-${timestamp}.png`;

      html2canvas
        .default(element, {
          onclone: (clonedDocument) => {
            const navTitle = clonedDocument.getElementById("nav-title");
            const tree = clonedDocument.getElementById("geometry-tree");
            if (tree?.style) {
              tree.style.display = "none";
            }
            if (navTitle) {
              navTitle.style.marginTop = "-17px";
            }
          },
        })
        .then((canvas) => {
          const dataURL = canvas.toDataURL("image/png");
          saveAs(dataURL, filename);
        });
    });
  }

  return <NavIcon Icon={PhotoIcon} onClick={handleScreenshot} title="Screenshot" />;
}
