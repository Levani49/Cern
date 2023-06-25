import { useState } from "react";

import Button from "@/components/button/Button.component";
import TransitionModal from "@/components/transition-modal/transition.modal";

import { ReactComponent as LinkIcon } from "@assets/svg/link.svg";
import { ReactComponent as QrCode } from "@assets/svg/qrCode.svg";

import NavIcon from "@components/navigation/navIcon/navIcon";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

const HOST = import.meta.env.VITE_HOST;
const EMBED_TEXT = `<iframe src="${HOST}/?embed=true"></iframe>`;

export default function Link(): JSX.Element {
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

  return (
    <>
      <NavIcon
        Icon={LinkIcon}
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
              <div className="relative w-full  rounded bg-transparentDark px-4 py-4">
                <p className="rounded">{HOST}</p>
                <Button
                  onClick={handleLinkCopy}
                  className="absolute right-0 top-0 bg-transparentDark  hover:bg-green"
                >
                  {linkCopied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h4 className="ml-1">Embed</h4>
              <div className="relative w-full  rounded bg-transparentDark px-4 py-4">
                <p className="max-w-[80%] rounded">{EMBED_TEXT}</p>
                <Button
                  onClick={handleEmbedCopy}
                  className="absolute right-0 top-0 z-10 bg-transparentDark hover:bg-green"
                >
                  {embedCopied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h4 className="ml-1">QR Code</h4>
              <div className="relative w-full  rounded bg-transparentDark px-4 py-4">
                <QrCode className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </TransitionModal>
    </>
  );
}
