import type React from "react";

type ScrollToElementFunction = (
  event: React.MouseEvent<HTMLElement>,
  targetId: string,
) => void;

export const scrollToElement: ScrollToElementFunction = (event, targetId) => {
  event.preventDefault();

  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const headerOffset = 100;
  const elementPosition = targetElement.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

