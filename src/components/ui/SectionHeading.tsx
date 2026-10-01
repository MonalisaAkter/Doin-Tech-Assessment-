type SectionHeadingProps = {
  title: string;
  description: string;
  align?: 'center' | 'left';
  size?: 'm' | 's';
};

export function SectionHeading({ title, description, align = 'center', size = 'm' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2
        className={`font-poppins font-semibold tracking-[-0.01em] text-gray-950 ${
          size === 'm' ? 'text-heading-m' : 'text-heading-s'
        } ${align === 'center' ? 'max-w-[935px]' : 'max-w-[577px]'}`}
      >
        {title}
      </h2>
      <p className={`text-body-m text-gray-700 md:text-body-l ${align === 'center' ? 'max-w-[830px]' : 'max-w-[574px]'}`}>
        {description}
      </p>
    </div>
  );
}

export function SectionHeadingSplit({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
      <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-black md:text-heading-m lg:w-[577px] lg:shrink-0">
        {title}
      </h2>
      <p className="text-body-m text-black-700 md:text-body-l lg:w-[580px]">{description}</p>
    </div>
  );
}
