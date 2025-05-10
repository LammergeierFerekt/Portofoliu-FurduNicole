///////////////////////////////////// HARDSKILLS SVG FILE HANDLING - FUNCTIONS /////////////////////////////////////////

//#region 1. Global Foundation - CONFIGURATION DATA - HARD-SKILLS

const defaultHardSkillsImages = [
  { imgId: 'img_d1', translate: [823.83, -174.006] },
  { imgId: 'img_d2', translate: [447.082, 37.327] },
  { imgId: 'img_d3', translate: [823.826, 479.158] },
  { imgId: 'img_d4', translate: [539.484, 850.684] },
  { imgId: 'img_d5', translate: [877.528, 790.752] }
];

const imgTranslateMap = {
  img_1: [786.313, -224.412], img_2: [811.678, -421.667], img_3: [360.332, 126.429],
  img_4: [559.997, 138.529], img_5: [400.818, -24.826], img_6: [874.968, 526.515],
  img_7: [977.402, 491.381], img_8: [554.372, 930.164], img_9: [509.27, 833.951],
  img_10: [932.468, 1165.009], img_11: [948.426, 1139.581], img_12: [1087.67, 1248.406],
  img_13: [958.882, 1085.074], img_14: [1001.021, 1202.205], img_15: [972.558, 1011.075]
};

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

// State object - HARD-SKILLS 
const state = {
  isHovering: false,
  activeTitleEl: null,
  activeImgEl: null,
  hoverTimeout: null,
  hardSkillsImageHovered: false  
};
//#endregion

//#region 2. Core Utilities - IMAGE ANIMATION UTILITIES - HARD-SKILLS

// Function to animate default images
function animateHardSkillsDefaultImages(svgElement, imgId, translate) {
  const img = svgElement.querySelector(`#${imgId}`);
  if (img) {
    resetImageTransform(img, translate);
    setTimeout(() => {
      slideImageDown(img, translate, 2000, 0);
    }, 100);
  }
}
// Reset function for elements
function resetElement(svgElement, titleId, showId, imgId, layer) {
  // Reset title element
  const titleEl = svgElement.querySelector(`#${titleId}`);
  if (titleEl) {
      titleEl.dataset.clicked = 'false';
      titleEl.style.fill = titleEl.dataset.origFill || '';
  }

  // Reset text element
  const textEl = svgElement.querySelector(`#${layer.group}_${showId.split('_')[1]}_text`);
  if (textEl) {
      textEl.style.opacity = '0';
  }

  // Reset image element
  const imgEl = svgElement.querySelector(`#${imgId}`);
  if (imgEl) {
      resetImageTransform(imgEl);
  }

  // Reset any other layer-specific elements
  if (layer.all) {
      layer.all.forEach(id => {
          const el = svgElement.querySelector(`#${id}`);
          if (el) {
              el.style.opacity = '0';
          }
      });
  }
}
// Move images downward - set duration and delay here
function slideImageDown(img, baseTranslate, duration = 2000, delay = 0) {
  if (!img) return;
  if (!img.dataset.originalTransform) {
      img.dataset.originalTransform = img.getAttribute('transform') || '';
  }
  const originalTransform = img.dataset.originalTransform;
  const [x, y] = baseTranslate;

  // Calculate transform based on image type
  let downTransform;
  if (img.id === 'img_d3') {
      downTransform = `translate(${x} ${y - 100})` + originalTransform.replace(/^translate\([^)]+\)/, '');
  } else {
      downTransform = `translate(${x} ${y + 90})` + originalTransform.replace(/^translate\([^)]+\)/, '');
  }

  // Apply animation
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
  }, delay);////HERE ADD...1000 delay); START WITH A DELAY/////
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
function attachImageHoverEffects(svgElement, defaultImages) {
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

function addHoverEffectToMainElements(svgElement) {
  if (!svgElement) return;
  
  // Get all hoverable elements
  const hoverableElements = svgElement.querySelectorAll('[id^="title"], [id$="_header"], [id$="_headerbox"]');
  
  hoverableElements.forEach(element => {
      // Save original fill color
      const originalFill = element.getAttribute('fill') || '';
      element.dataset.originalFill = originalFill;
      
      // Add hover listeners
      element.addEventListener('mouseenter', () => {
          if (element.dataset.clicked !== 'true') {
              element.style.cursor = 'pointer';
              element.style.fill = '#ffca31';
          }
      });
      
      element.addEventListener('mouseleave', () => {
          if (element.dataset.clicked !== 'true') {
              element.style.fill = element.dataset.originalFill;
          }
      });
  });
}

function attachDefaultImageHover(svgElement) {
  defaultHardSkillsImages.forEach(({ imgId, translate }) => {
    const img = svgElement.querySelector(`#${imgId}`);
    if (img) {
      if (!img.dataset.originalTransform) {
        img.dataset.originalTransform = img.getAttribute('transform') || '';
      }
      img.onmouseenter = null;
      img.onmouseleave = null;

      img.addEventListener('mouseenter', () => {
        // Cancel any running transition by forcing computed style
        img.style.transition = 'none';
        img.style.opacity = '1';
        img.setAttribute('transform', img.dataset.originalTransform);
        img.style.transform = '';
        void img.offsetWidth; // force reflow

        // Remove any queued timeouts (store on element)
        if (img._leaveTimeout) {
          clearTimeout(img._leaveTimeout);
          img._leaveTimeout = null;
        }
        if (img._fadeInTimeout) {
          clearTimeout(img._fadeInTimeout);
          img._fadeInTimeout = null;
        }

        // Animate down after a short delay
        setTimeout(() => {
          const [x, y] = translate;
          let downTransform;
          if (img.id === 'img_d3') {
            downTransform = `translate(${x} ${y - 100})` + img.dataset.originalTransform.replace(/^translate\([^)]+\)/, '');
          } else {
            downTransform = `translate(${x} ${y + 90})` + img.dataset.originalTransform.replace(/^translate\([^)]+\)/, '');
          }
          img.style.transition = 'transform 20s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
          img.setAttribute('transform', downTransform);
          img.style.transform = '';
        }, 50);
      });

      img.addEventListener('mouseleave', () => {
        // Cancel any running transition by forcing computed style
        img.style.transition = 'opacity 0.5s, transform 0.7s cubic-bezier(.4,1.4,.4,1)';
        img.style.opacity = '0';

        // Remove any queued timeouts (store on element)
        if (img._leaveTimeout) {
          clearTimeout(img._leaveTimeout);
        }
        if (img._fadeInTimeout) {
          clearTimeout(img._fadeInTimeout);
        }

        // After fade out, reset position and fade in
        img._leaveTimeout = setTimeout(() => {
          img.setAttribute('transform', img.dataset.originalTransform);
          img.style.transform = '';
          img._fadeInTimeout = setTimeout(() => {
            img.style.transition = 'opacity 0.5s';
            img.style.opacity = '1';
          }, 200);
        }, 250);
      });
    }
  });
}

//#endregion

//#region 3. Feature Components - LAYER ANIMATION - HARD-SKILLS



// Hover effect on the main SVG elements
async function handleHardSkillsSVG(interactiveContainer) {
  try {
      // Get the SVG element from the container
      const svgElement = interactiveContainer.querySelector('svg');
      if (!svgElement) {
          throw new Error('SVG element not found in container');
      }

      // Initialize components in sequence
      await Promise.all([
          animateHardSkillsLayers(svgElement),
          loopRandomHardSkillsImageAnimation(svgElement),
          addHardSkillsLayerHoverEffects(svgElement)
      ]);

  } catch (err) {
      console.error('Error in handleHardSkillsSVG:', err);
      if (typeof hideLoadingOverlay === 'function') {
          hideLoadingOverlay();
      }
  }
}

// Update clipmask hover effects to handle individual image animations
function setupClipMaskHoverEffects(svgElement) {
  defaultHardSkillsImages.forEach(({ imgId, translate }) => {
    // ...
  });
}

// Function to animate layers in the SVG
  function animateHardSkillsLayers(svgElement) {
    if (!svgElement) return;

    // Layer configurations
    const layers = [
        { id: 'bim', direction: 'right', stopPx: 0 },
        { id: 'modelling', direction: 'left', stopPx: -75 },
        { id: 'cgi', direction: 'right', stopPx: 0 },
        { id: 'graphics', direction: 'left', stopPx: 0 },
        { id: 'technical', direction: 'right', stopPx: 0 },
    ];
      const defaultImages = defaultHardSkillsImages;

    setupClipMaskHoverEffects(svgElement);

    // Get SVG dimensions once
    const svgRect = svgElement.getBoundingClientRect();
    const svgWidth = svgRect.width;

    // Calculate positions and centers
    const groupData = layers.reduce((acc, layer) => {
        const group = svgElement.querySelector(`#${layer.id}`);
        if (group) {
            const rect = group.getBoundingClientRect();
            acc.rects[layer.id] = rect;
            acc.centers[layer.id] = rect.left + rect.width / 2;
        }
        return acc;
    }, { rects: {}, centers: {} });

    // Calculate reference center
    const referenceCenter = Object.values(groupData.centers).length > 0
        ? Object.values(groupData.centers).reduce((a, b) => a + b, 0) / Object.values(groupData.centers).length
        : window.innerWidth / 2;

    // Animate layers
    Promise.all(layers.map(layer => {
        const group = svgElement.querySelector(`#${layer.id}`);
        if (group && groupData.rects[layer.id]) {
            return animateLayerIn(
                group, 
                layer.direction, 
                layer.stopPx, 
                svgWidth, 
                groupData.rects[layer.id], 
                referenceCenter
            );
        }
        return Promise.resolve();
    })).catch(err => {
        console.error('Error in layer animations:', err);
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

// Animation for default images with mouse trigger
function addHardSkillsDefaultImagesHoverTrigger(svgElement) {
  // Track hover state globally
  let isHovering = false;
  let hoverTimeout = null;

  // Get all interactive layer groups
  const layerGroups = [
      'bim',
      'modelling',
      'cgi',
      'graphics',
      'technical'
  ].map(id => svgElement.querySelector(`#${id}`)).filter(Boolean);

  // Add hover listeners to each group
  layerGroups.forEach(group => {
      group.addEventListener('mouseenter', () => {
          if (!isHovering) {
              isHovering = true;
              // Clear any pending timeout
              if (hoverTimeout) clearTimeout(hoverTimeout);
              
              // Start default images animation
              const defaultImages = defaultHardSkillsImages;

              defaultImages.forEach(({ imgId, translate }) => {
                  const img = svgElement.querySelector(`#${imgId}`);
                  if (img) {
                      slideImageDown(img, translate, 2000, 0);
                  }
              });
          }
      });

      group.addEventListener('mouseleave', () => {
          // Set a timeout to reset hover state
          hoverTimeout = setTimeout(() => {
              isHovering = false;
          }, 300); // Small delay to prevent rapid toggling
      });
  });
}

// Random animation loop for default images
function loopRandomHardSkillsImageAnimation(svgElement) {
  let isAnimating = false;
  const animationDuration = 30000; // ms, must match slideImageDown duration

  function triggerRandom() {
    if (state.hardSkillsImageHovered) {
      setTimeout(triggerRandom, 5000);
      return;
    }
    if (isAnimating) {
      // Wait and check again later
      setTimeout(triggerRandom, 1000);
      return;
    }
    const randomIndex = Math.floor(Math.random() * defaultHardSkillsImages.length);
    const { imgId, translate } = defaultHardSkillsImages[randomIndex];
    const img = svgElement.querySelector(`#${imgId}`);
    if (img) {
      isAnimating = true;
      slideImageDown(img, translate, animationDuration, 0);

      setTimeout(() => {
        isAnimating = false;
        // Add a random pause before next animation
        const nextDelay = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(triggerRandom, nextDelay);
      }, animationDuration);
    } else {
      setTimeout(triggerRandom, 2000);
    }
  }
  triggerRandom();
}

//LAYER HOVER EFFECTS
function addHardSkillsLayerHoverEffects(svgElement) {
  // State management
  let activeTitleEl = null;
  let activeImgEl = null;

  // Setup layer event handlers
  layers.forEach(layer => {
      setupLayerHoverEffects(svgElement, layer);
      setupTitleEvents(svgElement, layer);
  });

  // Global click handler
  setupGlobalClickHandler(svgElement, layers);
}

function setupLayerHoverEffects(svgElement, layer) {
    const groupEl = svgElement.querySelector(`#${layer.group}`);
    if (!groupEl) {
        console.warn(`Group element not found for layer: ${layer.group}`);
        return;
    }
    
    // Rest of the code...
}

function setupTitleEvents(svgElement, layer) {
  // Track active text element for this layer
  let activeTextEl = null;
  let activeTitleEl = null;

  layer.titles.forEach(({ title, show, img, all }) => {
    const titleEl = svgElement.querySelector(`#${title}`);
    if (!titleEl) {
      console.warn(`Title element not found: ${title}`);
      return;
    }

    // Clear any existing listeners
    titleEl.replaceWith(titleEl.cloneNode(true));
    const newTitleEl = svgElement.querySelector(`#${title}`);
    
    // Save original state
    newTitleEl.dataset.origFill = newTitleEl.getAttribute('fill') || '#ffffff';
    newTitleEl.dataset.origWeight = window.getComputedStyle(newTitleEl).fontWeight || 'normal';
    newTitleEl.dataset.clicked = 'false';

    // Hover handlers
    newTitleEl.addEventListener('mouseenter', () => {
      if (newTitleEl.dataset.clicked !== 'true') {
        newTitleEl.style.cursor = 'pointer';
        newTitleEl.style.fill = '#ffca31';
        newTitleEl.style.fontWeight = 'bold';
      }
    });

    newTitleEl.addEventListener('mouseleave', () => {
      if (newTitleEl.dataset.clicked !== 'true') {
        newTitleEl.style.fill = newTitleEl.dataset.origFill;
        newTitleEl.style.fontWeight = newTitleEl.dataset.origWeight;
      }
    });

    // Click handler with text element management
    newTitleEl.addEventListener('click', (event) => {
      event.stopPropagation();

      const textEl = svgElement.querySelector(`#${layer.group}_${show.split('_')[1]}_text`);
      if (!textEl) return;

      // If clicking the same title again, hide its text
      if (newTitleEl === activeTitleEl) {
        textEl.style.opacity = '0';
        newTitleEl.dataset.clicked = 'false';
        newTitleEl.style.fill = newTitleEl.dataset.origFill;
        activeTitleEl = null;
        activeTextEl = null;
        return;
      }

      // Hide previously active text
      if (activeTextEl) {
        activeTextEl.style.opacity = '0';
      }
      if (activeTitleEl) {
        activeTitleEl.dataset.clicked = 'false';
        activeTitleEl.style.fill = activeTitleEl.dataset.origFill;
      }

      // Show new text
      textEl.style.opacity = '1';
      newTitleEl.dataset.clicked = 'true';
      newTitleEl.style.fill = '#ffca31';

      // Update active elements
      activeTextEl = textEl;
      activeTitleEl = newTitleEl;
    });
  });
}

// Update setupGlobalClickHandler to handle text elements properly
function setupGlobalClickHandler(svgElement, layers) {
  document.addEventListener('click', (event) => {
    // Ignore clicks on titles
    if (event.target.closest('[id^="title"]')) return;

    // Hide all text elements and reset all titles
    layers.forEach(layer => {
      layer.titles.forEach(({ title, show }) => {
        const titleEl = svgElement.querySelector(`#${title}`);
        const textEl = svgElement.querySelector(`#${layer.group}_${show.split('_')[1]}_text`);
        
        if (titleEl) {
          titleEl.dataset.clicked = 'false';
          titleEl.style.fill = titleEl.dataset.origFill;
        }
        
        if (textEl) {
          textEl.style.opacity = '0';
        }
      });
    });

    // Reset state
    state.activeTitleEl = null;
    
    // Trigger default animation
    animateHardSkillsDefaultImages(svgElement);
  });
}

//#endregion

//#region 4. Main Initialization - HARD-SKILLS

async function HARDSKILLSfunction() {
  try {
    // Reset state first
    state.isHovering = false;
    state.activeTitleEl = null;
    state.activeImgEl = null;
    state.hardSkillsImageHovered = false;
    if (state.hoverTimeout) clearTimeout(state.hoverTimeout);

    hideAllPdfContainers();
    hideAllSvgContainers(); // Add this to clear other SVGs
    showLoadingOverlay();

    const interactiveContainer = document.querySelector('.interactive-container');
    if (!interactiveContainer) {
      hideLoadingOverlay();
      return;
    }

    // Clear existing content
    interactiveContainer.innerHTML = '';

    // 1. Parse SVG content first
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(hardSkillsSVG, 'image/svg+xml');
    if (svgDoc.querySelector('parsererror')) {
      hideLoadingOverlay();
      return;
    }

    const svgHardSkillsContent = svgDoc.documentElement;

    // 2. Add SVG to DOM first before doing any queries
    interactiveContainer.appendChild(svgHardSkillsContent);

    // 3. Wait for SVG to be fully loaded
    await new Promise(resolve => setTimeout(resolve, 100));

    // 4. Hide all text elements initially
    const textElements = svgHardSkillsContent.querySelectorAll('[id$="_text"]');
    textElements.forEach(textEl => {
      textEl.style.opacity = '0';
    });

    attachDefaultImageHover(svgHardSkillsContent);
    
    // 5. Show container
    requestAnimationFrame(() => {
      interactiveContainer.classList.add('active');
      interactiveContainer.style.visibility = 'visible';
      interactiveContainer.style.opacity = '1';
    });

    // 6. Initialize features in sequence, with error handling
    try {
      await animateHardSkillsLayers(svgHardSkillsContent);
      await addHardSkillsLayerHoverEffects(svgHardSkillsContent);
      
      // Start background animations last
      requestAnimationFrame(() => {
        loopRandomHardSkillsImageAnimation(svgHardSkillsContent);
      });
    } catch (initError) {
      console.error('Error initializing hard-skills features:', initError);
    }

    // 7. Hide overlays
    hideLoadingOverlay();
    hideCheckpointAnimation();

  } catch (err) {
    console.error('Error in HARDSKILLSfunction:', err);
    hideLoadingOverlay();
  }
}

//#endregion



