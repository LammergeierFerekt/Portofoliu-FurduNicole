///////////////////////////////////// HARDSKILLS SVG FILE HANDLING - FUNCTIONS /////////////////////////////////////////


function animateHardSkillsDefaultImages(svgElement) {
  // Table of default images and their original translate(x, y) values
  const defaultImages = [
    { imgId: 'img_d1', translate: [823.83, -174.006] },
    { imgId: 'img_d2', translate: [447.082, 37.327] },
    { imgId: 'img_d3', translate: [823.826, 479.158] },
    { imgId: 'img_d4', translate: [539.484, 850.684] },
    { imgId: 'img_d5', translate: [877.528, 790.752] },
  ];

  // Animate image downward slowly on hover
  function slideImageDown(img, baseTranslate, duration = 2000, delay = 0) {
    if (!img) return;
    if (!img.dataset.originalTransform) {
      img.dataset.originalTransform = img.getAttribute('transform') || '';
    }
    const originalTransform = img.dataset.originalTransform;
    const [x, y] = baseTranslate;



    
    // For img_d3, reverse the direction (up to down)
    let downTransform;
    if (img.id === 'img_d3') {
      downTransform = `translate(${x} ${y - 100})` + originalTransform.replace(/^translate\([^)]+\)/, '');
    } else {
      downTransform = `translate(${x} ${y + 90})` + originalTransform.replace(/^translate\([^)]+\)/, '');
    }




/////////////////////////HERE YOU CAN MAKE THE imgd_1, imgd_2 etc. SLOWER OR START WITH A DELAY/////////////////////////////

    // Use duration (in ms) for transform transition
    const durationSec = duration / 1000;
    img.style.transition = `transform ${durationSec}s cubic-bezier(.4,1.4,.4,1), opacity 0.3s`;
    img.style.opacity = '1';
    img.setAttribute('transform', originalTransform);
    img.style.transform = '';
    void img.offsetWidth;
    setTimeout(() => {
      img.style.transition = `transform ${durationSec}s cubic-bezier(.4,1.4,.4,1), opacity 0.3s`; ////HERE make imgds SLOWER/////
      img.setAttribute('transform', downTransform);
      img.style.transform = '';
    }, delay); ////HERE ADD...1000 delay); START WITH A DELAY/////
  }



  
  // On mouse leave: fade out while returning to initial state
  function resetImageTransform(img, baseTranslate) {
    if (!img) return;
    img.style.transition = 'opacity 0.5s, transform 0.7s cubic-bezier(.4,1.4,.4,1)';
    img.style.opacity = '0';
    if (img.dataset.originalTransform) {
      setTimeout(() => {
        img.setAttribute('transform', img.dataset.originalTransform);
        img.style.transform = '';
        // Fade back in after returning to original position
        setTimeout(() => {
          img.style.transition = 'opacity 0.5s';
          img.style.opacity = '1';
        }, 200);
      }, 250);
    }
  }

  // Attach hover effect to each image individually
  defaultImages.forEach(({ imgId, translate }) => {
    const img = svgElement.querySelector(`#${imgId}`);
    if (img) {
      if (!img.dataset.originalTransform) {
        img.dataset.originalTransform = img.getAttribute('transform') || '';
      }
      img.onmouseenter = null;
      img.onmouseleave = null;

      img.addEventListener('mouseenter', () => {
        slideImageDown(img, translate, 20000, 0);
      });
      img.addEventListener('mouseleave', () => {
        resetImageTransform(img, translate);
      });
    }
  });
}




function addHardSkillsDefaultImagesHoverTrigger(svgElement) {
  // Only trigger once per hover, but allow retrigger after mouse leaves
  let triggered = false;
  const hardSkillsGroups = [
    svgElement.querySelector('#bim'),
    svgElement.querySelector('#modelling'),
    svgElement.querySelector('#cgi'),
    svgElement.querySelector('#graphics'),
    svgElement.querySelector('#technical'),
  ].filter(Boolean);

  hardSkillsGroups.forEach(group => {
    group.addEventListener('mouseenter', () => {
      if (!triggered) {
        animateHardSkillsDefaultImages(svgElement);
        triggered = true;
      }
    });
    group.addEventListener('mouseleave', () => {
      triggered = false;
    });
  });
}



// Function to trigger a random default image animation at random intervals (loop)
let hardSkillsImageHovered = false; // Place this at the top-level of your file if not already present

function loopRandomHardSkillsImageAnimation(svgElement) {
  const imgIds = ['img_d1', 'img_d2', 'img_d3', 'img_d4', 'img_d5'];
  function triggerRandom() {
    if (hardSkillsImageHovered) {
      // If user is hovering a main image, skip this loop iteration and try again soon
      setTimeout(triggerRandom, 1000);
      return;
    }

    const imgId = imgIds[Math.floor(Math.random() * 3000)];
    const img = svgElement.querySelector(`#${imgId}`);
    const defaultImages = [
      { imgId: 'img_d1', translate: [823.83, -174.006] },
      { imgId: 'img_d2', translate: [447.082, 37.327] },
      { imgId: 'img_d3', translate: [823.826, 479.158] },
      { imgId: 'img_d4', translate: [539.484, 850.684] },
      { imgId: 'img_d5', translate: [877.528, 790.752] },
    ];
    const found = defaultImages.find(d => d.imgId === imgId);

    if (img && found) {
      // Animate downward slowly, then fade out while returning to initial state
      if (!img.dataset.originalTransform) {
        img.dataset.originalTransform = img.getAttribute('transform') || '';
      }
      const originalTransform = img.dataset.originalTransform;
      const [x, y] = found.translate;
      let downTransform;
      if (img.id === 'img_d3') {
        downTransform = `translate(${x} ${y - 100})` + originalTransform.replace(/^translate\([^)]+\)/, '');
      } else {
        downTransform = `translate(${x} ${y + 90})` + originalTransform.replace(/^translate\([^)]+\)/, '');
      }

      // Move down slowly
      img.style.transition = 'transform 20s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
      img.style.opacity = '1';
      img.setAttribute('transform', originalTransform);
      img.style.transform = '';
      void img.offsetWidth;
      setTimeout(() => {
        img.style.transition = 'transform 10s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
        img.setAttribute('transform', downTransform);
        img.style.transform = '';

        // After a pause, fade out and return to original
        setTimeout(() => {
          img.style.transition = 'opacity 0.5s, transform 5s cubic-bezier(.4,1.4,.4,1)';
          img.style.opacity = '0';
          setTimeout(() => {
            img.setAttribute('transform', originalTransform);
            img.style.transform = '';
            setTimeout(() => {
              img.style.transition = 'opacity 0.5s';
              img.style.opacity = '1';
            }, 200);
          }, 250);
        }, 3000); // Pause at the bottom before fading out (adjust as needed)
      }, 0);
    }

    // Schedule next random animation
    const nextDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    setTimeout(triggerRandom, nextDelay);
  }
  triggerRandom();
}




function animateHardSkillsLayers(svgElement) {
  const layers = [
    { id: 'bim', direction: 'right', stopPx: 0 },
    { id: 'modelling', direction: 'left', stopPx: -75 },
    { id: 'cgi', direction: 'right', stopPx: 0 },
    { id: 'graphics', direction: 'left', stopPx: 0 },
    { id: 'technical', direction: 'right', stopPx: 0 },
  ];

  const svgRect = svgElement.getBoundingClientRect();
  const svgWidth = svgRect.width;

  // --- Collect initial positions and centers before any animation ---
  const groupRects = {};
  const groupCenters = {};
  layers.forEach(layer => {
    const group = svgElement.querySelector(`#${layer.id}`);
    if (group) {
      const rect = group.getBoundingClientRect();
      groupRects[layer.id] = rect;
      groupCenters[layer.id] = rect.left + rect.width / 2;
    }
  });

  // Calculate the average (or reference) center to use for all groups
  // Here, we use the average center of all groups as the reference
  const centers = Object.values(groupCenters);
  const referenceCenter = centers.length
    ? centers.reduce((a, b) => a + b, 0) / centers.length
    : window.innerWidth / 2;

  // Animate all layers in parallel, using the initial rects and the reference center
  layers.forEach(layer => {
    const group = svgElement.querySelector(`#${layer.id}`);
    if (group && groupRects[layer.id]) {
      animateLayerIn(group, layer.direction, layer.stopPx, svgWidth, groupRects[layer.id], referenceCenter);
    }
  });
}
// Animate a single layer group from left or right
function animateLayerIn(group, direction, stopPx, svgWidth, initialRect, referenceCenter) {
  return new Promise((resolve) => {
    // Show loading overlay/spinner before starting the delay
    if (typeof showLoadingOverlay === 'function') showLoadingOverlay();

    const viewportWidth = window.innerWidth;
    const groupRect = initialRect || group.getBoundingClientRect();
    const groupWidth = groupRect.width;

    // Use the saved reference center for all groups
    const groupCurrentLeft = groupRect.left;
    const groupCurrentCenter = groupCurrentLeft + groupWidth / 2;
    const centerDelta = (referenceCenter !== undefined ? referenceCenter : viewportWidth / 2) - groupCurrentCenter;

    // Target position (relative to viewport)
    let targetLeft;
    if (direction === 'right') {
      targetLeft = stopPx;
    } else {
      targetLeft = viewportWidth - groupWidth - stopPx;
    }
    const deltaX = targetLeft - groupCurrentLeft;

    group.style.transition = 'none';
    group.style.opacity = '0';
    group.style.transform = `translateX(${centerDelta}px)`;

    void group.offsetWidth;

    setTimeout(() => {
      let outDelta;
      if (direction === 'right') {
        outDelta = deltaX + viewportWidth / 2 + groupWidth / 2 + 200;
      } else {
        outDelta = deltaX - (viewportWidth / 2 + groupWidth / 2 + 200);
      }
      group.style.transition = 'none';
      group.style.opacity = '0';
      group.style.transform = `translateX(${outDelta}px)`;

      void group.offsetWidth;

      setTimeout(() => {
        group.style.transition = 'transform 0.8s cubic-bezier(.4,1.4,.4,1), opacity 0.8s';
        group.style.opacity = '1';
        group.style.transform = `translateX(${deltaX}px)`;

        // Hide loading overlay/spinner after animation
        if (typeof hideLoadingOverlay === 'function') hideLoadingOverlay();

        setTimeout(resolve, 850);
      }, 20);
    }, 100); // This is the delay before the whole hard-skills file starts showing
  });
}















// HARD-SKILLS SVG FUNCTIONS

function addHardSkillsLayerHoverEffects(svgElement) {
  let activeTitleEl = null;
  let activeImgEl = null;
  const imgIds = ['img_d1', 'img_d2', 'img_d3', 'img_d4', 'img_d5'];

  const imgTranslateMap = {
    img_1: [786.313, -224.412], img_2: [811.678, -421.667], img_3: [360.332, 126.429],
    img_4: [559.997, 138.529], img_5: [400.818, -24.826], img_6: [874.968, 526.515],
    img_7: [977.402, 491.381], img_8: [554.372, 930.164], img_9: [509.27, 833.951],
    img_10: [932.468, 1165.009], img_11: [948.426, 1139.581], img_12: [1087.67, 1248.406],
    img_13: [958.882, 1085.074], img_14: [1001.021, 1202.205], img_15: [972.558, 1011.075]
  };

  // ADD THIS BLOCK:
  const layers = [
    {
      group: 'bim',
      header: 'bim_header',
      headerBox: 'bim_headerbox',
      titles: [
        { title: 'title1_red', show: 'bim_1', img: 'img_1', all: ['bim_1', 'bim_2', 'bim_default'] },
        { title: 'title2_red', show: 'bim_2', img: 'img_2', all: ['bim_1', 'bim_2', 'bim_default'] }
      ]
    },
    {
      group: 'modelling',
      header: 'modelling_header',
      headerBox: 'modelling_headerbox',
      titles: [
        { title: 'title3_red', show: 'modelling_1', img: 'img_3', all: ['modelling_1', 'modelling_2', 'modelling_3', 'modelling_default'] },
        { title: 'title4_red', show: 'modelling_2', img: 'img_4', all: ['modelling_1', 'modelling_2', 'modelling_3', 'modelling_default'] },
        { title: 'title5_red', show: 'modelling_3', img: 'img_5', all: ['modelling_1', 'modelling_2', 'modelling_3', 'modelling_default'] }
      ]
    },
    {
      group: 'cgi',
      header: 'cgi_header',
      headerBox: 'cgi_headerbox',
      titles: [
        { title: 'title6_red', show: 'cgi_1', img: 'img_6', all: ['cgi_1', 'cgi_2', 'cgi_default'] },
        { title: 'title7_red', show: 'cgi_2', img: 'img_7', all: ['cgi_1', 'cgi_2', 'cgi_default'] }
      ]
    },
    {
      group: 'graphics',
      header: 'graphics_header',
      headerBox: 'graphics_headerbox',
      titles: [
        { title: 'title8_red', show: 'graphics_1', img: 'img_8', all: ['graphics_1', 'graphics_2', 'graphics_default'] },
        { title: 'title9_red', show: 'graphics_2', img: 'img_9', all: ['graphics_1', 'graphics_2', 'graphics_default'] }
      ]
    },
    {
      group: 'technical',
      header: 'technical_header',
      headerBox: 'technical_headerbox',
      titles: [
        { title: 'title10_red', show: 'technical_1', img: 'img_10', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] },
        { title: 'title11_red', show: 'technical_2', img: 'img_11', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] },
        { title: 'title12_red', show: 'technical_3', img: 'img_12', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] },
        { title: 'title13_red', show: 'technical_4', img: 'img_13', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] },
        { title: 'title14_red', show: 'technical_5', img: 'img_14', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] },
        { title: 'title15_red', show: 'technical_6', img: 'img_15', all: ['technical_1', 'technical_2', 'technical_3', 'technical_4', 'technical_5', 'technical_6', 'technical_default'] }
      ]
    }
  ];

  // Helper: Animate image - SET DURATION FOR DEFAULT IMAGES HARD-SKILLS HERE
  function slideImageDown(img, baseTranslate, duration = 2000, delay = 0) {
    if (!img) return;
    if (!img.dataset.originalTransform) {
      img.dataset.originalTransform = img.getAttribute('transform') || '';
    }
    const originalTransform = img.dataset.originalTransform;
    const [x, y] = baseTranslate;
    let downTransform;
    if (img.id === 'img_d3') {
      downTransform = `translate(${x} ${y - 100})` + originalTransform.replace(/^translate\([^)]+\)/, '');
    } else {
      downTransform = `translate(${x} ${y + 90})` + originalTransform.replace(/^translate\([^)]+\)/, '');
    }
    const durationSec = duration / 1000;
    img.style.transition = `transform ${durationSec}s cubic-bezier(.4,1.4,.4,1), opacity 0.3s`;
    img.style.opacity = '1';
    img.setAttribute('transform', originalTransform);
    img.style.transform = '';
    void img.offsetWidth;
    setTimeout(() => {
      img.style.transition = `transform ${durationSec}s cubic-bezier(.4,1.4,.4,1), opacity 0.3s`;
      img.setAttribute('transform', downTransform);
      img.style.transform = '';
    }, delay);
  }

  
  function resetImageTransform(img, baseTranslate) {
    if (!img) return;
    img.style.transition = 'opacity 0.5s, transform 0.7s cubic-bezier(.4,1.4,.4,1)';
    img.style.opacity = '0';
    if (img.dataset.originalTransform) {
      setTimeout(() => {
        img.setAttribute('transform', img.dataset.originalTransform);
        img.style.transform = '';
        setTimeout(() => {
          img.style.transition = 'opacity 0.5s';
          img.style.opacity = '1';
        }, 200);
      }, 250);
    }
  }



  // --- Main loop ---
  layers.forEach(layer => {
    const groupEl = svgElement.querySelector(`#${layer.group}`);
    const header = svgElement.querySelector(`#${layer.header}`);
    const headerBox = svgElement.querySelector(`#${layer.headerBox}`);

    const headerOrigTransform = header ? header.getAttribute('transform') || '' : '';
    const headerBoxOrigTransform = headerBox ? headerBox.getAttribute('transform') || '' : '';
    const headerOrigColor = header ? (header.getAttribute('fill') || header.style.fill || '') : '';
    const headerBoxOrigFilter = headerBox ? (headerBox.style.filter || '') : '';

    // Store original transforms for titles and subgroups
    const titleOrigTransforms = {};
    const subgroupElements = [];
    const subgroupOrigTransforms = [];
    layer.titles.forEach(({ show, title }) => {
      const el = svgElement.querySelector(`#${title}`);
      if (el) titleOrigTransforms[title] = el.getAttribute('transform') || '';
      const subGroupEl = svgElement.querySelector(`#${show}`);
      if (subGroupEl) {
        const pathGroup = svgElement.querySelector(`#${title.replace('_red', '_path')}`);
        if (pathGroup) {
          Array.from(pathGroup.querySelectorAll('path, polyline, polygon')).forEach(el => {
            subgroupElements.push(el);
            subgroupOrigTransforms.push(el.getAttribute('transform') || '');
          });
        }
      }
    });



    // --- Hover effects on the main group layer ---
    if (groupEl) {
      groupEl.addEventListener('mouseenter', () => {
        if (header) {
          header.setAttribute('transform', `translate(0,-18) ${headerOrigTransform}`.trim());
          header.style.transition = 'fill 0.3s';
          header.style.fill = '#f4dbdb';
        }
        if (headerBox) {
          headerBox.setAttribute('transform', `translate(0,-18) ${headerBoxOrigTransform}`.trim());
          headerBox.style.transition = 'filter 0.3s';
          headerBox.style.filter = 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))';
        }
        layer.titles.forEach(({ title }) => {
          const titleEl = svgElement.querySelector(`#${title}`);
          if (titleEl) {
            titleEl.setAttribute('transform', `translate(0,-18) ${titleOrigTransforms[title]}`.trim());
          }
        });
        subgroupElements.forEach((el, idx) => {
          el.setAttribute('transform', `translate(0,-18) ${subgroupOrigTransforms[idx]}`.trim());
        });
      });

      groupEl.addEventListener('mouseleave', () => {
        if (header) {
          header.setAttribute('transform', headerOrigTransform);
          header.style.fill = headerOrigColor;
        }
        if (headerBox) {
          headerBox.setAttribute('transform', headerBoxOrigTransform);
          headerBox.style.filter = headerBoxOrigFilter;
        }
        layer.titles.forEach(({ title }) => {
          const titleEl = svgElement.querySelector(`#${title}`);
          if (titleEl) {
            titleEl.setAttribute('transform', titleOrigTransforms[title]);
          }
        });
        subgroupElements.forEach((el, idx) => {
          el.setAttribute('transform', subgroupOrigTransforms[idx]);
        });
      });
    }


    // --- Per-title hover and click events ---
    layer.titles.forEach(({ title, show, img, all }) => {
      const titleEl = svgElement.querySelector(`#${title}`);
      if (!titleEl) return;

      // Save original fill for reset
      const origFill = titleEl.style.fill || titleEl.getAttribute('fill') || '';
      titleEl.dataset.origFill = origFill;



      // Get the corresponding text element
      const textId = `${layer.group}_${show.split('_')[1]}_text`;
      const textEl = svgElement.querySelector(`#${textId}`);
      // const textId = title.replace('title', 'x') + '_text';
      // const textEl = svgElement.querySelector(`#${textId}`);

      // Save original text styles for reset
      if (textEl) {
        textEl.dataset.origOpacity = textEl.style.opacity || '';
        textEl.dataset.origFill = textEl.style.fill || textEl.getAttribute('fill') || '';
      }


      // --- Hover: highlight, show image, yellow text, show correct group ---
      titleEl.addEventListener('mouseenter', () => {
        // Highlight text
        titleEl.style.cursor = 'pointer';
        titleEl.style.fill = '#ffca31';


        // Show only the corresponding group, hide others in 'all'
        if (all) {
          all.forEach(gid => {
            const g = svgElement.querySelector(`#${gid}`);
            if (g) g.style.display = (gid === show) ? '' : 'none';
          });
        }


        // Animate image   SET DURATION FOR NORMAL img_1, img2 etc. HERE
        const imgEl = svgElement.querySelector(`#${img}`);
        const translate = imgTranslateMap[img];
        if (imgEl && translate) {
          // Hide all other images
          Object.keys(imgTranslateMap).forEach(imgKey => {
            if (imgKey !== img) {
              const otherImg = svgElement.querySelector(`#${imgKey}`);
              if (otherImg) otherImg.style.opacity = '0';
            }
          });
          slideImageDown(imgEl, translate, 40000, 0); //SET DURATION FOR NORMAL img_1, img2 etc. HERE//
        }
      });

      // --- Mouse leave: reset highlight, show default group, reset image ---
      titleEl.addEventListener('mouseleave', () => {
        if (!titleEl.classList.contains('active-title')) {
          titleEl.style.fill = origFill;
        }
        if (all) {
          const defaultGroup = all.find(gid => gid.endsWith('_default'));
          all.forEach(gid => {
            const g = svgElement.querySelector(`#${gid}`);
            if (g) g.style.display = (gid === defaultGroup) ? '' : 'none';
          });
        }
        const imgEl = svgElement.querySelector(`#${img}`);
        const translate = imgTranslateMap[img];
        if (imgEl && translate) {
          resetImageTransform(imgEl, translate);
        }
      });




        // --- Click: show only the corresponding text, highlight title ---
        titleEl.addEventListener('click', (event) => {
          event.stopPropagation();

          // Hide all texts and reset all titles
          layers.forEach(l =>
            l.titles.forEach(({ title: t, show: s }) => {
              const el = svgElement.querySelector(`#${t}`);
              if (el) {
                el.style.fill = el.dataset.origFill || '';
                el.classList.remove('active-title');
              }
              // Hide all texts
              const group = l.group;
              const textId = `${group}_${s.split('_')[1]}_text`;
              const textEl = svgElement.querySelector(`#${textId}`);
              if (textEl) {
                textEl.style.opacity = textEl.dataset.origOpacity || '0';
                textEl.style.fill = textEl.dataset.origFill || '';
              }
            })
          );

            // Show only the clicked text
          if (textEl) {
            textEl.style.opacity = '1';
            textEl.style.fill = textEl.dataset.origFill || '';
          }
          // Highlight the clicked title
          titleEl.style.fill = '#ffca31';
          titleEl.classList.add('active-title');
        });
      });
    });
    
      // --- Global click handler to reset all ---
    document.addEventListener('click', (event) => {
      if (!event.target.closest('[id^="title"]')) {
        layers.forEach(layer =>
          layer.titles.forEach(({ title, show }) => {
            const el = svgElement.querySelector(`#${title}`);
            if (el) {
              el.style.fill = el.dataset.origFill || '';
              el.classList.remove('active-title');
            }
            const group = layer.group;
            const textId = `${group}_${show.split('_')[1]}_text`;
            const textEl = svgElement.querySelector(`#${textId}`);
            if (textEl) {
              textEl.style.opacity = textEl.dataset.origOpacity || '0';
              textEl.style.fill = textEl.dataset.origFill || '';
            }
          })
        );
      }
    });
  }



//VERSION IN WHICH THE img_1, img_2 etc. STAY WHEN TITLE IS CLICKED

  //   // --- Per-title hover and click events ---
  //   let activeTitleEl = null;
  //   let activeImgEl = null; 
  //   layer.titles.forEach(({ title, show, img, all }) => {
  //     const titleEl = svgElement.querySelector(`#${title}`);
  //     if (!titleEl) return;

  //     // Save original fill for reset
  //     const origFill = titleEl.style.fill || titleEl.getAttribute('fill') || '';
  //     titleEl.dataset.origFill = origFill;



  //     // Get the corresponding text element
  //     const textId = `${layer.group}_${show.split('_')[1]}_text`;
  //     const textEl = svgElement.querySelector(`#${textId}`);
  //     // Save original text styles for reset
  //     if (textEl) {
  //       textEl.dataset.origOpacity = textEl.style.opacity || '';
  //       textEl.dataset.origFill = textEl.style.fill || textEl.getAttribute('fill') || '';
  //     }


  //     // --- Hover: highlight, show image, yellow text, show correct group ---
  //     titleEl.addEventListener('mouseenter', () => {
  //       // Highlight text
  //       titleEl.style.cursor = 'pointer';
  //       titleEl.style.fill = '#ffca31';


  //       // Show only the corresponding group, hide others in 'all'
  //       if (all) {
  //         all.forEach(gid => {
  //           const g = svgElement.querySelector(`#${gid}`);
  //           if (g) g.style.display = (gid === show) ? '' : 'none';
  //         });
  //       }


  //       // Animate image SET DURATION FOR NORMAL img_1, img2 etc. HERE
  //       const imgEl = svgElement.querySelector(`#${img}`);
  //       const translate = imgTranslateMap[img];
  //       if (imgEl && translate) {
  //         // Hide all other images
  //         Object.keys(imgTranslateMap).forEach(imgKey => {
  //           if (imgKey !== img) {
  //             const otherImg = svgElement.querySelector(`#${imgKey}`);
  //             if (otherImg) otherImg.style.opacity = '0';
  //           }
  //         });
  //         slideImageDown(imgEl, translate, 40000, 0); //SET DURATION FOR NORMAL img_1, img2 etc. HERE//
  //       }
  //     });

  //     // --- Mouse leave: reset highlight, show default group, reset image ---
  //     titleEl.addEventListener('mouseleave', () => {
  //       if (activeTitleEl !== titleEl) {
  //         titleEl.style.fill = origFill;
  //       }
  //       if (all) {
  //         const defaultGroup = all.find(gid => gid.endsWith('_default'));
  //         all.forEach(gid => {
  //           const g = svgElement.querySelector(`#${gid}`);
  //           if (g) g.style.display = (gid === defaultGroup) ? '' : 'none';
  //         });
  //       }
  //       const imgEl = svgElement.querySelector(`#${img}`);
  //       const translate = imgTranslateMap[img];
  //       if (imgEl && translate) {
  //         resetImageTransform(imgEl, translate);
  //       }
  //     });




  //       // --- Click: show only the corresponding text, highlight title ---
  //       titleEl.addEventListener('click', (event) => {
  //         event.stopPropagation();

  //         // Hide all texts and reset all titles
  //         layers.forEach(l =>
  //           l.titles.forEach(({ title: t, show: s, img: i }) => {
  //             const el = svgElement.querySelector(`#${t}`);
  //             if (el) {
  //               el.style.fill = el.dataset.origFill || '';
  //               el.classList.remove('active-title');
  //             }
  //             // Hide all texts
  //             const group = l.group;
  //             const textId = `${group}_${s.split('_')[1]}_text`;
  //             const textEl = svgElement.querySelector(`#${textId}`);
  //             if (textEl) {
  //               textEl.style.opacity = textEl.dataset.origOpacity || '0';
  //               textEl.style.fill = textEl.dataset.origFill || '';
  //             }

  //             // Hide all images
  //             const imgEl = svgElement.querySelector(`#${i}`);
  //             const translate = imgTranslateMap[i];
  //             if (imgEl && translate) {
  //               resetImageTransform(imgEl, translate);
  //             }

  //             // Hide all default images when a title is clicked
  //             imgIds.forEach(imgId => {
  //               const img = svgElement.querySelector(`#${imgId}`);
  //               if (img) img.style.opacity = '0';
  //               hardSkillsImageHovered = true;

  //             });


  //           })
  //         );
          
  //           // Show only the clicked text
  //         if (textEl) {
  //           textEl.style.opacity = '1';
  //           textEl.style.fill = textEl.dataset.origFill || '';
  //         }
  //         // Highlight the clicked title
  //         titleEl.style.fill = '#ffca31';
  //         titleEl.classList.add('active-title');

  //         // Show and keep the image
  //         const imgEl = svgElement.querySelector(`#${img}`);
  //         const translate = imgTranslateMap[img];
  //         if (imgEl && translate) {
  //           Object.keys(imgTranslateMap).forEach(imgKey => {
  //             if (imgKey !== img) {
  //               const otherImg = svgElement.querySelector(`#${imgKey}`);
  //               if (otherImg) otherImg.style.opacity = '0';
  //             }
  //           });
  //           slideImageDown(imgEl, translate, 40000, 0);
  //           activeImgEl = imgEl;
  //         }
  //         activeTitleEl = titleEl;
  //       });
  //     });
  //   });
    

  //     // --- Global click handler to reset all ---
  //   document.addEventListener('click', (event) => {
  //     if (!event.target.closest('[id^="title"]')) {
  //       layers.forEach(layer =>
  //         layer.titles.forEach(({ title, show, img }) => {
  //           const el = svgElement.querySelector(`#${title}`);
  //           if (el) {
  //             el.style.fill = el.dataset.origFill || '';
  //             el.classList.remove('active-title');
  //           }
  //           const group = layer.group;
  //           const textId = `${group}_${show.split('_')[1]}_text`;
  //           const textEl = svgElement.querySelector(`#${textId}`);
  //           if (textEl) {
  //             textEl.style.opacity = textEl.dataset.origOpacity || '0';
  //             textEl.style.fill = textEl.dataset.origFill || '';
  //           }
  //           // Hide all images
  //           const imgEl = svgElement.querySelector(`#${img}`);
  //           const translate = imgTranslateMap[img];
  //           if (imgEl && translate) {
  //             resetImageTransform(imgEl, translate);
  //           }
  //         })
  //       );
  //     }
  //   });
  // }

















// HARD-SKILLS SVG FILE HANDLING - FUNCTIONS
async function HARDSKILLSfunction() {
  try {
    const interactiveContainer = document.querySelector('.interactive-container');
    if (!interactiveContainer) return;

    // Parse SVG directly, no image path fix needed
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(hardSkillsSVG, 'image/svg+xml');
    if (svgDoc.querySelector('parsererror')) {
      console.error('SVG parsing error in HARDSKILLSfunction');
      return;
    }
    const svgElement = svgDoc.documentElement;

    // Workaround for filter loading issues:
    svgElement.querySelectorAll('image').forEach(img => {
      const clone = img.cloneNode(true);
      img.parentNode.replaceChild(clone, img);
    });

    // Insert SVG into container
    interactiveContainer.innerHTML = '';
    interactiveContainer.appendChild(svgElement);
    interactiveContainer.classList.add('active');
    interactiveContainer.style.visibility = 'visible';
    interactiveContainer.style.opacity = '1';


    // --- ADD THIS LINE ---
    animateHardSkillsLayers(svgElement);
    addHardSkillsDefaultImagesHoverTrigger(svgElement);
    loopRandomHardSkillsImageAnimation(svgElement);
    addHardSkillsLayerHoverEffects(svgElement);
  } catch (err) {
    console.error('Error inserting hard-skills SVG:', err);
  }
}


