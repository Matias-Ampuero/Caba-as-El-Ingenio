import fs from 'fs';

let content = fs.readFileSync('src/app/App.tsx', 'utf-8');

const souvenirArrows = `
  const SouvenirNextArrow = (props: any) => (
    <div
      className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-12 w-12 items-center justify-center bg-[#1C1F1A]/90 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
    </div>
  );

  const SouvenirPrevArrow = (props: any) => (
    <div
      className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer flex h-12 w-12 items-center justify-center bg-[#1C1F1A]/90 border border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1F1A] transition-colors"
      onClick={props.onClick}
    >
      <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
    </div>
  );
`;

const prevArrowRegex = /(const PrevArrow =[\s\S]*?<\/div>\n  );)/;
if (!content.includes('SouvenirNextArrow')) {
  content = content.replace(prevArrowRegex, `$1\n${souvenirArrows}`);
}

const souvenirSliderRegex = /(className="souvenirs-slider"\n\s*>)/;
const nextArrowReplaceRegex = /nextArrow=\{<NextArrow \/>\}/g;
const prevArrowReplaceRegex = /prevArrow=\{<PrevArrow \/>\}/g;

const souvenirsSectionRegex = /(<section[\s\S]*?id="souvenirs"[\s\S]*?<\/section>)/;
let souvenirsSection = content.match(souvenirsSectionRegex)[1];

souvenirsSection = souvenirsSection.replace(nextArrowReplaceRegex, 'nextArrow={<SouvenirNextArrow />}');
souvenirsSection = souvenirsSection.replace(prevArrowReplaceRegex, 'prevArrow={<SouvenirPrevArrow />}');
// we also remove px-10 md:px-16 lg:px-20 from the container wrapping the slider to let arrows touch the edge if possible, or just let the negative margins do the work.
// actually, keeping px-10 gives space for the arrows on mobile if they are left-0 and right-0. Wait, left-0 means left edge of the container. If container has px-10, left-0 is INSIDE the padding? No, absolute positioning relative to a padded container goes to the padding edge. So left-0 is exactly at the left edge. We might want -left-2 to push it out more.
souvenirsSection = souvenirsSection.replace('px-10 md:px-16 lg:px-20', 'px-4 sm:px-10 md:px-16 lg:px-20');

content = content.replace(souvenirsSectionRegex, souvenirsSection);

fs.writeFileSync('src/app/App.tsx', content);
console.log('Souvenir arrows inserted.');
