import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

import type { ReactChildren } from "../app/app.types";

interface Props {
  children: ReactChildren;
  title: string;
}

/**
 * AnimateHeight component that displays and hides children components when the button is clicked.
 *
 * @param {Props} props - The props of the component.
 * @param {React.ReactNode | React.ReactNode[]} props.children - The children components to be displayed.
 * @param {string} props.title - The title of the component.
 * @returns {JSX.Element} ReactElement
 */
export default function AnimateHeight({ children, title }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * opens Modal
   *
   * @returns { void } void
   */
  const openModal = (): void => setIsOpen(true);

  /**
   * closes Modal
   *
   * @returns { void } void
   */
  const closeModal = (): void => setIsOpen(false);

  return (
    <div className="flex flex-col rounded-lg">
      <button aria-expanded={isOpen} className="flex justify-between text-left items-center w-full space-x-4">
        <div className="text-md font-semibold ml-1">{title}</div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? (
              <MinusIcon onClick={closeModal} className="w-5 cursor-pointer" />
            ) : (
              <PlusIcon onClick={openModal} className="w-5 cursor-pointer" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
      <motion.div
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
        className="font-light"
      >
        {children}
      </motion.div>
    </div>
  );
}
