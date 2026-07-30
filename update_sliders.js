import fs from 'fs';

// Update App.tsx
let appContent = fs.readFileSync('src/app/App.tsx', 'utf-8');

if (!appContent.includes('const [windowWidth, setWindowWidth]')) {
  appContent = appContent.replace(
    'export default function App() {',
    `export default function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);`
  );
}

// Replace Aventuras slider config
appContent = appContent.replace(
  /slidesToShow=\{2\}[\s\S]*?responsive=\{\[[\s\S]*?\]\}/,
  `slidesToShow={windowWidth < 768 ? 1 : 2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              arrows={true}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}`
);

// Replace Souvenirs slider config
appContent = appContent.replace(
  /slidesToShow=\{3\}[\s\S]*?responsive=\{\[[\s\S]*?\]\}/,
  `slidesToShow={windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3}
              slidesToScroll={1}
              arrows={true}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}`
);

fs.writeFileSync('src/app/App.tsx', appContent);


// Update Reviews.tsx
let reviewsContent = fs.readFileSync('src/app/Reviews.tsx', 'utf-8');

if (!reviewsContent.includes('const [windowWidth, setWindowWidth]')) {
  reviewsContent = reviewsContent.replace(
    'const Reviews = () => {',
    `const Reviews = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);`
  );
}

// Replace Reviews slider config
reviewsContent = reviewsContent.replace(
  /slidesToShow: 3,[\s\S]*?responsive: \[[\s\S]*?\]/,
  `slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: windowWidth >= 768,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />`
);

fs.writeFileSync('src/app/Reviews.tsx', reviewsContent);

console.log('Slider hooks added and responsive config replaced');
