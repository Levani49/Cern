import { saveAs } from "file-saver";

import { useState } from "react";

import Icons from "#/utils/icons";
import Button from "#/components/Button.component";
import NavIcon from "#/components/navigation/NavIcon";
import TransitionModal from "#/components/Transition.modal";
import useEscapeKeydown from "#/hooks/useEscapeKeydown.hook";

const HOST = import.meta.env.VITE_HOST;
const EMBED_TEXT = `<iframe src="${HOST}/?embed=true" style="width: 560px; height: 560px"></iframe>`;

export default function Link() {
  const [embedCopied, setEmbedCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [open, setOpen] = useState(false);

  useEscapeKeydown(() => setOpen(false));

  const handleEmbedCopy = (): void => {
    setEmbedCopied(true);
    navigator.clipboard.writeText(EMBED_TEXT);
  };

  const handleLinkCopy = (): void => {
    setLinkCopied(true);
    navigator.clipboard.writeText(HOST);
  };

  const handleDownload = (): void => {
    const svgElement = document.getElementById("qrCode"); // Get the SVG element from the ref

    if (svgElement) {
      const svgXml = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgXml], { type: "image/svg+xml;charset=utf-8" });
      const fileName = "tracer-core-QRcode.svg";
      saveAs(svgBlob, fileName);
    }
  };

  return (
    <>
      <NavIcon
        Icon={Icons.LinkIcon}
        onClick={(): void => setOpen(true)}
        title="Create shareable link"
      />
      <TransitionModal
        className="pb-4"
        title="Shareable links"
        onClose={(): void => setOpen(false)}
        open={open}
      >
        <div className="mt-5 flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h4 className="ml-1">Share Link</h4>
              <div className="relative w-full  rounded bg-dark2 px-4 py-4">
                <p className="rounded">{HOST}</p>
                <Button
                  onClick={handleLinkCopy}
                  className="hover:bg-green absolute right-0 top-0  bg-highlight1 hover:bg-dark3"
                >
                  {linkCopied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h4 className="ml-1">Embed</h4>
              <div className="relative w-full  rounded bg-dark2 px-4 py-4">
                <p className="max-w-[80%] rounded">{EMBED_TEXT}</p>
                <Button
                  onClick={handleEmbedCopy}
                  className="hover:bg-green absolute right-0 top-0 z-10 bg-highlight1 hover:bg-dark3"
                >
                  {embedCopied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h4 className="ml-1">QR Code</h4>
              <div className="relative w-full  rounded bg-dark2 px-4 py-4">
                <Button
                  onClick={handleDownload}
                  className="hover:bg-green absolute right-0 top-0 z-10 bg-highlight1 hover:bg-dark3"
                >
                  Download
                </Button>
                <Icons.QrCode id="qrCode" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </TransitionModal>
    </>
  );
}
