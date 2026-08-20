import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: Props) {
  const Heading = as;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-5 text-sm font-semibold tracking-widest before:w-14 after:h-px after:w-14 after:bg-current after:opacity-70 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {eyebrow}
        </p>
      )}

      <Heading className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px]">
        {title}
      </Heading>

      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
