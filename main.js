import './style.css';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PageFlip } from 'page-flip';



document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';
});


const loadingEyeFile = 'public/assets/loading-eye.svg';
const artworkFile = 'public/assets/artwork_div_1.svg';



// Set the worker source for pdfjs-dist
GlobalWorkerOptions.workerSrc = '/Portofoliu-F.Nicole/pdfjs/pdf.worker.mjs';






// Toggle SVG/PDF 
function hideAllPdfContainers() {
  const pdfContainer = document.querySelector('.pdf-container');
  if (pdfContainer) {
    pdfContainer.classList.remove('active');
    pdfContainer.style.removeProperty('visibility');
    pdfContainer.style.removeProperty('opacity');
    pdfContainer.style.removeProperty('pointer-events');

    const flipbookContainer = document.getElementById('flipbook');
    if (flipbookContainer) {
      flipbookContainer.innerHTML = '';
    }
  }
}

function hideAllSvgContainers() {
  const interactiveContainer = document.querySelector('.interactive-container');
  if (interactiveContainer) {
    interactiveContainer.classList.remove('active');
    interactiveContainer.style.removeProperty('visibility');
    interactiveContainer.style.removeProperty('opacity');
    interactiveContainer.style.removeProperty('pointer-events');
    interactiveContainer.innerHTML = '';
  }
}


  // Fetch and insert the loading-eye.svg into the fill-loader
  fetch(loadingEyeFile)
    .then((res) => res.text())
    .then((svgText) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;

      // Append the SVG to the loading spinner
      const loadingSpinner = document.querySelector('#loading-spinner');
      loadingSpinner.innerHTML = ''; // Clear previous content
      loadingSpinner.appendChild(svgElement);

      // Start the loading animation
      startLoadingAnimation(svgElement);
    })
    .catch((err) => console.error('Error fetching or parsing SVG:', err));


// Function to start the loading animation
function startLoadingAnimation(svgElement) {
  // Select all elements with IDs starting with "loading"
  const loadingElements = svgElement.querySelectorAll('[id^="loading"]');
  let index = 0;

  function animateNext() {
    if (index < loadingElements.length) {
      const element = loadingElements[index];
      element.style.transition = 'opacity 0.5s ease'; // Smooth transition for opacity
      element.style.opacity = '1'; // Make the element visible
      index++;

      // Move to the next element after a delay
      setTimeout(animateNext, 500);
    }
  }

  // Start the animation
  animateNext();
}





// Function to reset the loading animation
function resetLoadingAnimation() {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (!loadingSpinner) return;
  const svg = loadingSpinner.querySelector('svg');
  if (!svg) return;
  const loadingElements = svg.querySelectorAll('[id^="loading"]');
  loadingElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s';
  });
}






// Function to fetch and insert artwork SVGs while ensuring independent styles
function fetchAndInsertSVG(url, containerSelector, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((svgText) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const container = document.querySelector(containerSelector);

      if (container) {
        container.innerHTML = ''; // Clear previous content
        const svgElement = svgDoc.documentElement;
        container.appendChild(svgElement);
        if (callback) callback(svgElement); // Pass the loaded SVG element to the callback
      }
    })
    .catch((err) => console.error(`Failed to fetch ${url}:`, err));
}

// Function to add hover effects to SVG ARTWORK_DIV 1 buttons
function addHoverEffects(svgElement) {
  const hoverTargets = [
    { buttonId: 'Pana_roz_button1', textId: 'text1' },
    { buttonId: 'Pana_roz_button2', textId: 'text2' },
    { buttonId: 'Pana_roz_button3', textId: 'text3' }, // CV button
    { buttonId: 'Pana_roz_button4', textId: 'text4' },
    { buttonId: 'Pana_roz_button5', textId: 'text5' },
  ];

  hoverTargets.forEach((target) => {
    const buttonElement = svgElement.querySelector(`#${target.buttonId}`);
    const textElement = svgElement.querySelector(`#${target.textId}`);

    if (buttonElement && textElement) {
      const originalButtonFill = getComputedStyle(buttonElement).fill;
      const originalTextFill = getComputedStyle(textElement).fill;

      const applyHoverStyles = () => {
        buttonElement.style.transition = 'fill 0.3s ease';
        buttonElement.style.fill = '#e3125f'; 
        textElement.style.transition = 'fill 0.3s ease';
        textElement.style.fill = '#ffca31'; 
        
        textElement.style.fontFamily = 'Segoe UI';
        textElement.style.fontWeight = 'bold';}

      const resetHoverStyles = () => {
        buttonElement.style.fill = originalButtonFill; // Reset button color
        textElement.style.fill = originalTextFill; // Reset text color
      };

      buttonElement.addEventListener('mouseenter', applyHoverStyles);
      buttonElement.addEventListener('mouseleave', resetHoverStyles);
      textElement.addEventListener('mouseenter', applyHoverStyles);
      textElement.addEventListener('mouseleave', resetHoverStyles);

      // Ensure clicks on text trigger the same action as the button
      textElement.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        buttonElement.dispatchEvent(new Event('click')); // Trigger the button's click event
      });
    } else {
      console.error(`Button or text element not found for target:`, target);
    }
  });
}

// Function to attach button events
function attachButtonEvents(svgElement) {
  const svgButtons = [
    { id: 'Pana_roz_button1', action: () => { showSVG('hard-skills.svg', svgElement); triggerFogEffect(svgElement); }},
    { id: 'Pana_roz_button2', action: () => { showPDF('professional.pdf', svgElement); triggerFogEffect(svgElement); }},
    { id: 'Pana_roz_button3', action: () => { showSVG('cv.svg', svgElement); triggerFogEffect(svgElement); }},
    { id: 'Pana_roz_button4', action: () => { showPDF('academic.pdf', svgElement); triggerFogEffect(svgElement); }},
    { id: 'Pana_roz_button5', action: () => { showSVG('soft-skills.svg', svgElement); triggerFogEffect(svgElement); }},
    { id: 'HOME-BUTTON', action: () => handleHomeButtonClick(svgElement) }
  ];

  svgButtons.forEach((button) => {
    const buttonElement = svgElement.querySelector(`#${button.id}`);
    if (buttonElement) {
      buttonElement.style.cursor = 'pointer';
      buttonElement.addEventListener('click', button.action);
    } else {
      console.error(`Button with ID ${button.id} not found in the SVG.`);
    }
  });
}

// Function to handle the "HOME-BUTTON" 
function handleHomeButtonClick(svgElement) {
  console.log("Home button clicked. Hiding containers, reversing fog, and performing soft reset...");

  hideAllSvgContainers(); // Hide SVG if a PDF is triggered
  hideAllPdfContainers(); // Hide PDF if an SVG is triggered

  // Step 2: Trigger the reverse fog effect
  reverseFogEffect(svgElement, () => {
    console.log("Reverse fog effect completed. Performing soft reset...");

    // Step 3: Perform the soft reset
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
      contentContainer.innerHTML = '';
    }

    // Hide loading overlay if present
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.style.visibility = 'hidden';
      loadingOverlay.style.opacity = '0';
    }

    // Step 4: Reload the page
    console.log("Soft reset completed. Reloading the page...");
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}


// Function to reset the page state
function resetPageState(svgElement) {
  // 1. Show the loading overlay (eye loader)
  showLoadingOverlay();

  // 2. Close the PDF viewer and hide the container immediately
  const pdfViewer = document.getElementById('pdf-viewer');
  if (pdfViewer) {
    pdfViewer.innerHTML = '';
  }

  const pdfContainer = document.querySelector('.pdf-container');
  if (pdfContainer) {
    pdfContainer.classList.remove('active');
    pdfContainer.style.visibility = 'hidden';
    pdfContainer.style.opacity = '0';
    pdfContainer.innerHTML = '';
  } else {
    const newPdfContainer = document.createElement('div');
    newPdfContainer.className = 'pdf-container';
    newPdfContainer.id = 'pdf-container';
    document.body.appendChild(newPdfContainer);
  }

  const flipbookContainer = document.getElementById('flipbook');
  if (flipbookContainer) {
    flipbookContainer.innerHTML = '';
  } else {
    const newFlipbookContainer = document.createElement('div');
    newFlipbookContainer.className = 'pdf-flipbook';
    newFlipbookContainer.id = 'flipbook';
    document.querySelector('.pdf-container').appendChild(newFlipbookContainer);
  }

  // 3. Trigger the reverse fog effect, then hide the loader when done
  reverseFogEffect(svgElement, () => {
    hideLoadingOverlay();
    attachButtonEvents(svgElement);
  });
}





// Function to show the loading overlay
function showLoadingOverlay() {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.visibility = 'visible';
  loadingOverlay.style.opacity = '1';
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.opacity = '0';
  setTimeout(() => {
    loadingOverlay.style.visibility = 'hidden';
  }, 300); // Match the transition duration
}




// Function to trigger the fog effect
function triggerFogEffect(svgElement) {
  const fogLayers = svgElement.querySelectorAll('[id^="blockcolor"]');
  fogLayers.forEach((layer, index) => {
    const group = layer.querySelector('g');
    if (group) {
      const delay = index * 250;
      setTimeout(() => {
        group.style.transition = 'opacity 1s ease';
        group.style.opacity = '0.35';
      }, delay);
    }
  });
}

// Function to reverse the fog effect
function reverseFogEffect(svgElement, callback) {
  showLoadingOverlay();
  resetLoadingAnimation();

  // --- Start the loader animation every time ---
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner) {
    const svg = loadingSpinner.querySelector('svg');
    if (svg) {
      startLoadingAnimation(svg);
    }
  }

  const fogLayers = Array.from(svgElement.querySelectorAll('[id^="blockcolor"]')).reverse();
  let completedLayers = 0;

  fogLayers.forEach((layer, index) => {
    const group = layer.querySelector('g');
    if (group) {
      const delay = index * 250;
      setTimeout(() => {
        group.style.transition = 'opacity 1s ease';
        group.style.opacity = '0';

        // Check if all layers are completed
        completedLayers++;
        if (completedLayers === fogLayers.length) {
          // Hide the loading overlay after the fog effect is done
          hideLoadingOverlay();
          if (callback) callback();
        }
      }, delay);
    }
  });
}







// --- PDF Flipbook Integration - PORTOFOLIO files ---

async function showPDF(pdfFile) {

  const pdfContainer = document.querySelector('.pdf-container');
  const flipbookContainer = document.getElementById('flipbook');
  if (!pdfContainer || !flipbookContainer) {
    console.error('PDF container or flipbook not found.');
    return;
  }

  hideAllSvgContainers(); // Hide SVG if a PDF is triggered
  showLoadingOverlay();

  // Fetch and insert the loading-eye.svg if not already present
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner && !loadingSpinner.querySelector('svg')) {
    const svgText = await fetch(loadingEyeFile).then(res => res.text());
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    loadingSpinner.innerHTML = '';
    loadingSpinner.appendChild(svgDoc.documentElement);
  }

  // Always reset the loader animation
  resetLoadingAnimation();

  // Animate loader according to PDF loading progress
  const svg = loadingSpinner.querySelector('svg');
  const loadingElements = svg ? svg.querySelectorAll('[id^="loading"]') : [];
  const totalSteps = loadingElements.length;
  let currentStep = 0;

  // Helper to show next loader step
  function showNextLoaderStep() {
    if (loadingElements[currentStep]) {
      loadingElements[currentStep].style.opacity = '1';
    }
    currentStep++;
  }

  try {
    flipbookContainer.innerHTML = '';
    const pdfPath = `public/assets/pdfs/${pdfFile}`;
    const loadingTask = getDocument(pdfPath);
    const pdfDoc = await loadingTask.promise;

    // Calculate step duration based on number of pages
    const numPages = pdfDoc.numPages;
    const stepDuration = Math.max(100, 1000 / Math.max(numPages, totalSteps)); // at least 100ms per step

    // Animate loader as pages are rendered
    const pageImages = [];
    for (let i = 1; i <= numPages; i++) {
      showNextLoaderStep();
      const page = await pdfDoc.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      pageImages.push(canvas.toDataURL());
      await new Promise(res => setTimeout(res, stepDuration)); // keep loader in sync
    }

    // If there are more loader steps than pages, finish them
    while (currentStep < totalSteps) {
      showNextLoaderStep();
      await new Promise(res => setTimeout(res, stepDuration));
    }

    // Add a minimum 0.5s delay so the loader is visible even for fast loads
    await new Promise(res => setTimeout(res, 500));

    // Create HTML pages for PageFlip
    pageImages.forEach((src) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'page';
      const img = document.createElement('img');
      img.src = src;
      img.style.width = '100%';
      img.style.height = '100%';
      pageDiv.appendChild(img);
      flipbookContainer.appendChild(pageDiv);
    });

    setTimeout(() => {
      pdfContainer.classList.add('active');
      hideLoadingOverlay();
    }, 100);

    const pageFlip = new PageFlip(flipbookContainer, {
      size: 'stretch',
      width: 600,
      height: 800,
      maxShadowOpacity: 0.5,
      showCover: false,
      mobileScrollSupport: false
    });
    pageFlip.loadFromHTML(document.querySelectorAll('#flipbook .page'));
  } catch (error) {
    hideLoadingOverlay();
    console.error('Error loading or rendering PDF:', error);
  }
}






// --- SVG Interactive container - CV files ---

async function showSVG(svgFile) {

  const interactiveContainer = document.querySelector('.interactive-container');
  if (!interactiveContainer) {
    console.error('SVG container not found.');
    return;
  }

  hideAllPdfContainers(); // Hide PDF if an SVG is triggered
  showLoadingOverlay();

  // Loader: ensure loading-eye.svg is present
  const loadingSpinner = document.getElementById('loading-spinner');
  if (loadingSpinner && !loadingSpinner.querySelector('svg')) {
    const svgText = await fetch(loadingEyeFile).then(res => res.text());
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    loadingSpinner.innerHTML = '';
    loadingSpinner.appendChild(svgDoc.documentElement);
  }
  resetLoadingAnimation();

  const loaderSVG = loadingSpinner.querySelector('svg');
  const loadingElements = loaderSVG ? loaderSVG.querySelectorAll('[id^="loading"]') : [];
  const totalSteps = loadingElements.length;
  let currentStep = 0;

  // Fetch and parse the SVG file
  const svgText = await fetch(`public/assets/pdfs/${svgFile}`).then(res => res.text());
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
  const svgContent = svgDoc.documentElement;

  // Count the number of main elements to simulate "progress"
  const svgParts = svgContent.querySelectorAll('g, path');
  const numParts = Math.max(svgParts.length, 1);

  // Calculate step duration based on SVG complexity
  const stepDuration = Math.max(100, 1000 / Math.max(numParts, totalSteps)); // at least 100ms per step

  // Animate loader as SVG elements are "loaded"
  for (let i = 0; i < numParts; i++) {
    if (currentStep < totalSteps) {
      loadingElements[currentStep].style.opacity = '1';
      currentStep++;
    }
    await new Promise(res => setTimeout(res, stepDuration));
  }

  // If there are more loader steps than SVG parts, finish them
  while (currentStep < totalSteps) {
    loadingElements[currentStep].style.opacity = '1';
    currentStep++;
    await new Promise(res => setTimeout(res, stepDuration));
  }

  // Add a minimum 0.5s delay so the loader is visible even for fast loads
  await new Promise(res => setTimeout(res, 500));

  // Show the SVG in the interactive container
  interactiveContainer.innerHTML = '';
  interactiveContainer.appendChild(svgContent);
  interactiveContainer.classList.add('active');
  interactiveContainer.style.visibility = 'visible';
  interactiveContainer.style.opacity = '1';
  hideLoadingOverlay();
}










// Function to add hover effects to main elements
function addHoverEffectToMainElements() {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const allTargets = document.querySelectorAll(
      '[id*="Pana_roz_degrade"], [id*="Pana_roz_opac"], [id*="Pana_gri_opac"], #HARD-SKILLS, #PROFESSIONAL, #CV, #ACADEMIC, #SOFT-SKILLS, #HOME-BUTTON'
    );

    allTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const mouseInsideElement = (
        mouseX >= rect.left && mouseX <= rect.right &&
        mouseY >= rect.top && mouseY <= rect.bottom
      );

      el.style.transition = 'transform 0.3s ease';

      // Apply different translation for HOME-BUTTON
      if (el.id === 'HOME-BUTTON') {
        el.style.transform = mouseInsideElement ? 'translateY(5px)' : 'translateY(0px)';
      } else {
        el.style.transform = mouseInsideElement ? 'translateY(30px)' : 'translateY(0px) scale(1)';
      }
    });
  });
}



// Main logic
window.onload = function () {
  fetchAndInsertSVG(artworkFile, '.svg1', (svgElement) => {
    addHoverEffects(svgElement);
    attachButtonEvents(svgElement);
    addHoverEffectToMainElements();
  });
};

