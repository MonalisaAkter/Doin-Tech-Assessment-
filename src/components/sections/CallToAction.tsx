import { Button } from '../ui/Button';

type CallToActionProps = {
  onNavigate: (page: string) => void;
};

export function CallToAction({ onNavigate }: CallToActionProps) {
  return (
    <section className="relative overflow-hidden bg-blue-800 bg-grid lg:h-[488px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute -left-[118px] -top-[162px] h-[385px] w-[385px] rounded-full border-[3px] border-lime-400/30" />
        <div className="absolute left-[178px] top-[5px] h-[175px] w-[175px] rounded-full border-[3px] border-white/20" />
        <div className="absolute -left-[48px] top-[225px] h-[188px] w-[188px] rounded-full border-[3px] border-white/15" />
        <div className="absolute left-[20px] top-[299px] h-[342px] w-[342px] rounded-full border-[3px] border-lime-400/20" />
        <div className="absolute left-[1080px] top-0 h-[188px] w-[188px] rounded-full border-[3px] border-lime-400/30" />
        <div className="absolute left-[1226px] top-[6px] h-[370px] w-[370px] rounded-full border-[3px] border-white/20" />
        <div className="absolute left-[1110px] top-[289px] h-[330px] w-[330px] rounded-full border-[3px] border-lime-400/20" />
      </div>
      <div aria-hidden="true" className="pointer-events-none lg:hidden">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border-[3px] border-lime-400/30" />
        <div className="absolute -right-14 -bottom-16 h-40 w-40 rounded-full border-[3px] border-lime-400/30" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[996px] flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:px-6 lg:gap-10 lg:py-0">
        <h2 className="max-w-[710px] font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-gray-50 md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[996px] font-satoshi text-body-m text-gray-50 md:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button variant="lime" size="lg" onClick={() => onNavigate('/signup')}>
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
