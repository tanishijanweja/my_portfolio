export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-8 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="oklch(82.3% 0.12 346.018)" />
          <stop offset="100%" stopColor="oklch(65.6% 0.241 354.308)" />
        </linearGradient>
      </svg>
    </>
  );
};
