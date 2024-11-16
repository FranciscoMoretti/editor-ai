"use client";

import LLMIcon from "@/components/icons/svg/LLMIcon.svg";
import { LS_HAS_SEEN_MODEL_DROPDOWN_ALERT } from "@/constants";
import { Alert, AlertDescription, AlertTitle } from "@v1/ui/alert";
import { TooltipIconButton } from "@v1/ui/assistant-ui/tooltip-icon-button";
import { TighterText } from "@v1/ui/header";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import NextImage from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";

export const AlertNewModelSelectorFeature = ({
  chatStarted,
  showAlert,
  setShowAlert,
}: {
  chatStarted: boolean;
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenAlert = localStorage.getItem(LS_HAS_SEEN_MODEL_DROPDOWN_ALERT);
    if (!hasSeenAlert) {
      setShowAlert(true);
    }
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
    // Wait for animation to complete before setting localStorage
    setTimeout(() => {
      localStorage.setItem(LS_HAS_SEEN_MODEL_DROPDOWN_ALERT, "true");
    }, 300);
  };

  if (!showAlert || chatStarted) {
    return <AnimatePresence />; // Keep AnimatePresence mounted to enable fading out
  }

  return (
    <AnimatePresence mode="wait">
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative p-[0px] rounded-lg bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-pink-500/50 animate-gradient-xy shadow-[0_0_25px_rgba(236,72,153,0.3)] before:absolute before:inset-0 before:rounded-lg before:p-[12px] before:bg-gradient-to-r before:from-pink-500/20 before:via-purple-500/20 before:to-pink-500/20 before:blur-xl before:-z-10 before:animate-gradient-xy-enhanced">
            <Alert className="max-w-xl bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
              <AlertTitle className="flex justify-between items-center">
                <div className="flex items-center justify-start gap-1">
                  <NextImage
                    alt="Model icon"
                    src={LLMIcon}
                    width={16}
                    height={16}
                  />
                  <TighterText>Customize your LLM model!</TighterText>
                </div>
                <TooltipIconButton
                  tooltip="Close alert"
                  variant="ghost"
                  delayDuration={400}
                  onClick={handleCloseAlert}
                  size="sm"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </TooltipIconButton>
              </AlertTitle>
              <AlertDescription className="inline-flex items-center gap-1 flex-wrap mt-2">
                <p>
                  Open Canvas now supports customizing your LLM model! Click the
                  dropdown above to pick a model from{" "}
                  <a
                    href="https://fireworks.ai/"
                    target="_blank"
                    className="inline-flex items-baseline gap-[2px]"
                    rel="noreferrer"
                  >
                    <ExternalLink size={12} />
                    Fireworks AI
                  </a>
                  ,{" "}
                  <a
                    href="https://anthropic.com/"
                    target="_blank"
                    className="inline-flex items-baseline gap-[2px]"
                    rel="noreferrer"
                  >
                    <ExternalLink size={12} />
                    Anthropic
                  </a>
                  , or{" "}
                  <a
                    href="https://openai.com/"
                    target="_blank"
                    className="inline-flex items-baseline gap-[2px]"
                    rel="noreferrer"
                  >
                    <ExternalLink size={12} />
                    OpenAI
                  </a>
                  .
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
