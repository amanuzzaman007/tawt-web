"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type Props = {
  animationData: unknown;
  loop: boolean;
};

const CustomLottie = ({ animationData, loop }: Props) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) return null;
  return <Lottie animationData={animationData} loop={loop} />;
};

export default CustomLottie;
