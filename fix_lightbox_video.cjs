const fs = require('fs');

let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// 1. Change video tag in Nosotros to object-contain and add onClick to open in lightbox
const oldVideoTag = `                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={\`Nosotros \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        onClick={() => {
                          const imgIndex = imagesOnly.indexOf(item.src);
                          setLightbox({ images: imagesOnly as string[], index: imgIndex })
                        }}
                      />
                    )}`;

const newVideoTag = `                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onClick={() => {
                          const allSrcs = array.map(i => i.src);
                          setLightbox({ images: allSrcs as string[], index: idx })
                        }}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={\`Nosotros \${idx + 1}\`}
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        onClick={() => {
                          const allSrcs = array.map(i => i.src);
                          setLightbox({ images: allSrcs as string[], index: idx })
                        }}
                      />
                    )}`;

if (content.includes(oldVideoTag)) {
  content = content.replace(oldVideoTag, newVideoTag);
} else {
  console.log("Could not find video tag block");
}

// 2. Modify Lightbox component to render video if .mp4
const oldLightboxRenderer = `            <img
              src={lightbox.images[lightbox.index]}
              alt="Fullscreen"
              className="relative z-10 max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl pointer-events-none"
            />`;

const newLightboxRenderer = `            {lightbox.images[lightbox.index].endsWith('.mp4') ? (
              <video
                src={lightbox.images[lightbox.index]}
                className="relative z-10 max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl"
                controls
                autoPlay
              />
            ) : (
              <img
                src={lightbox.images[lightbox.index]}
                alt="Fullscreen"
                className="relative z-10 max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl pointer-events-none"
              />
            )}`;

if (content.includes(oldLightboxRenderer)) {
  content = content.replace(oldLightboxRenderer, newLightboxRenderer);
} else {
  console.log("Could not find Lightbox renderer block");
}

fs.writeFileSync('src/app/App.tsx', content);
console.log("Lightbox and video containment updated!");
