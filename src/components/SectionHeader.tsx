export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest text-pink-400 text-center bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-bold text-2xl md:text-4xl text-center mt-6 text-black dark:text-white">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-black/60 dark:text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
