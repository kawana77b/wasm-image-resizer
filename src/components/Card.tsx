import {
  Card as UiCard,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

const animationVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const bgColorVariants = {
  default: "bg-gradient-to-r from-indigo-400 to-cyan-400",
};

export interface CardProps {
  children?: ReactNode;
  className?: string;
  fadeIn?: boolean;
  bgColor?: keyof typeof bgColorVariants;
}

const Card = ({
  children,
  className,
  fadeIn,
  bgColor = "default",
}: CardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col w-[95%] px-5 rounded-2xl",
        bgColorVariants[bgColor],
        className
      )}
    >
      <motion.div
        className="w-full"
        variants={animationVariants}
        initial={fadeIn ? "initial" : undefined}
        animate={fadeIn ? "animate" : undefined}
      >
        <UiCard
          className={cn(
            "w-full my-5",
            "bg-background/40 dark:bg-default-100/90"
          )}
          isBlurred
          shadow="lg"
        >
          {children}
        </UiCard>
      </motion.div>
    </article>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Divider = Divider;
Card.Footer = CardFooter;

export { Card };
