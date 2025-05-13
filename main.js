import './style.css';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PageFlip } from 'page-flip';



//#region 1.SVG content as strings
const loadingEyeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 285.96">
  <g id="ochi">
    <g id="ochi6">
      <path d="M245,286c-79,0-304.17-70-230.35-138.22C72.65,94.17,166,0,245,0S417.35,94.17,475.35,147.74C549.17,215.93,324,286,245,286Z" style="fill: #3a3a3a"/>
    </g>
    <circle id="ochi5" cx="245" cy="142.98" r="135" style="fill: #ab2726"/>
    <circle id="ochi4" cx="244.99" cy="142.98" r="90" style="fill: #ffca31"/>
    <path id="ochi3" d="M288.69,200.21a72,72,0,0,1-92.41-4.2" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 25.511811023622px;opacity: 0.45"/>
    <circle id="ochi2" cx="244.99" cy="142.98" r="22.5" style="fill: #231f20"/>
    <circle id="ochi1" cx="270.83" cy="124.07" r="22.5" style="fill: #fff;opacity: 0.7000000000000001"/>
  </g>
  <g id="loading">
    <path id="loading12" d="M307.73,34.32,302.2,43.9a4.47,4.47,0,0,1-6,1.71,109.29,109.29,0,0,0-43.9-12.38,4.47,4.47,0,0,1-4.19-4.58l.3-11.06a4.49,4.49,0,0,1,4.74-4.36A129.27,129.27,0,0,1,306,28.14,4.47,4.47,0,0,1,307.73,34.32Z" style="fill: #fff"/>
    <path id="loading11" d="M353.64,80.25l-9.57,5.53a4.46,4.46,0,0,1-6-1.49,110.47,110.47,0,0,0-31.82-32.7,4.47,4.47,0,0,1-1.33-6.06l5.79-9.43A4.47,4.47,0,0,1,317,34.71,130.66,130.66,0,0,1,355.21,74,4.47,4.47,0,0,1,353.64,80.25Z" style="fill: #fff"/>
    <path id="loading10" d="M370.44,143H359.38a4.48,4.48,0,0,1-4.47-4.31,109.08,109.08,0,0,0-11.18-44.22,4.48,4.48,0,0,1,1.88-5.93l9.73-5.26a4.47,4.47,0,0,1,6.13,1.92,129.43,129.43,0,0,1,13.45,53.18A4.48,4.48,0,0,1,370.44,143Z" style="fill: #fff"/>
    <path id="loading9" d="M374.74,151.16A129,129,0,0,1,359.83,204a4.47,4.47,0,0,1-6.18,1.75l-9.58-5.53a4.48,4.48,0,0,1-1.71-6,109.1,109.1,0,0,0,12.39-43.9,4.47,4.47,0,0,1,4.58-4.19l11.06.3A4.47,4.47,0,0,1,374.74,151.16Z" style="fill: #fff"/>
    <path id="loading8" d="M353.28,215A130.75,130.75,0,0,1,314,253.2a4.46,4.46,0,0,1-6.23-1.57l-5.53-9.58a4.47,4.47,0,0,1,1.49-6,110.35,110.35,0,0,0,32.7-31.82,4.47,4.47,0,0,1,6.06-1.34l9.43,5.8A4.48,4.48,0,0,1,353.28,215Z" style="fill: #fff"/>
    <path id="loading7" d="M302.8,259.45a129.27,129.27,0,0,1-53.18,13.45,4.47,4.47,0,0,1-4.62-4.48V257.36a4.46,4.46,0,0,1,4.31-4.46,109.24,109.24,0,0,0,44.22-11.18,4.47,4.47,0,0,1,5.92,1.88l5.27,9.72A4.47,4.47,0,0,1,302.8,259.45Z" style="fill: #fff"/>
    <path id="loading6" d="M241.86,257.31l-.31,11.06a4.48,4.48,0,0,1-4.73,4.36A129.23,129.23,0,0,1,184,257.82a4.46,4.46,0,0,1-1.75-6.18l5.53-9.58a4.46,4.46,0,0,1,6-1.71,109.2,109.2,0,0,0,43.9,12.38A4.48,4.48,0,0,1,241.86,257.31Z" style="fill: #fff"/>
    <path id="loading5" d="M185.1,240.44l-5.79,9.42a4.47,4.47,0,0,1-6.28,1.4A130.72,130.72,0,0,1,134.78,212a4.48,4.48,0,0,1,1.57-6.24l9.58-5.53a4.47,4.47,0,0,1,6,1.49,110.5,110.5,0,0,0,31.82,32.71A4.47,4.47,0,0,1,185.1,240.44Z" style="fill: #fff"/>
    <path id="loading4" d="M144.39,197.45l-9.74,5.26a4.47,4.47,0,0,1-6.13-1.92,129.31,129.31,0,0,1-13.44-53.19,4.47,4.47,0,0,1,4.48-4.62h11.06a4.47,4.47,0,0,1,4.46,4.31,109.49,109.49,0,0,0,11.18,44.23A4.48,4.48,0,0,1,144.39,197.45Z" style="fill: #fff"/>
    <path id="loading3" d="M147.63,91.75a109.25,109.25,0,0,0-12.38,43.9,4.48,4.48,0,0,1-4.58,4.19l-11.07-.3a4.49,4.49,0,0,1-4.35-4.74A129.27,129.27,0,0,1,130.16,82a4.47,4.47,0,0,1,6.18-1.75l9.58,5.53A4.47,4.47,0,0,1,147.63,91.75Z" style="fill: #fff"/>
    <path id="loading2" d="M186.31,49.93A110.54,110.54,0,0,0,153.6,81.76a4.47,4.47,0,0,1-6.06,1.34l-9.43-5.8A4.47,4.47,0,0,1,136.72,71,130.76,130.76,0,0,1,176,32.76a4.48,4.48,0,0,1,6.24,1.57l5.53,9.58A4.48,4.48,0,0,1,186.31,49.93Z" style="fill: #fff"/>
    <path id="loading1" d="M245,17.54V28.6a4.47,4.47,0,0,1-4.31,4.46,109.33,109.33,0,0,0-44.23,11.18,4.48,4.48,0,0,1-5.92-1.87l-5.27-9.73a4.47,4.47,0,0,1,1.92-6.13,129.32,129.32,0,0,1,53.19-13.45A4.47,4.47,0,0,1,245,17.54Z" style="fill: #fff"/>
  </g>
</svg>
`;

const artworkSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1050 2000">
  <defs>
    <filter id="filter">
      <feOffset dy="2" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#756060"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient" x1="517.61" y1="1850.56" x2="517.61" y2="1767.54" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.77" stop-color="#efcdcd"/>
      <stop offset="1" stop-color="#eabebe"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="435.03" y1="1797.15" x2="640.33" y2="1797.15" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="0.2"/>
      <stop offset="0.01" stop-color="#fff" stop-opacity="0.22"/>
      <stop offset="0.05" stop-color="#fff" stop-opacity="0.39"/>
      <stop offset="0.1" stop-color="#fff" stop-opacity="0.53"/>
      <stop offset="0.16" stop-color="#fff" stop-opacity="0.66"/>
      <stop offset="0.22" stop-color="#fff" stop-opacity="0.77"/>
      <stop offset="0.29" stop-color="#fff" stop-opacity="0.85"/>
      <stop offset="0.37" stop-color="#fff" stop-opacity="0.92"/>
      <stop offset="0.47" stop-color="#fff" stop-opacity="0.97"/>
      <stop offset="0.61" stop-color="#fff" stop-opacity="0.99"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="556.88" y1="1834.4" x2="562.82" y2="1834.4" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-4" x1="553.08" y1="1834.94" x2="556.4" y2="1834.94" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-5" x1="543.78" y1="1836.79" x2="551.77" y2="1836.79" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-6" x1="491.34" y1="1838.85" x2="509.16" y2="1838.85" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-7" x1="482.67" y1="1838.14" x2="505.35" y2="1838.14" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-8" x1="454.45" y1="1831.65" x2="489.37" y2="1831.65" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-9" x1="514.84" y1="1822.04" x2="521.88" y2="1822.04" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-10" x1="509.28" y1="1820.83" x2="518.26" y2="1821.83" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-11" x1="484.11" y1="1815.69" x2="494.57" y2="1815.69" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-12" x1="564.51" y1="1818.73" x2="573.39" y2="1818.73" xlink:href="#linear-gradient-2"/>
    <filter id="filter-2">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-2"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-13" x1="630.23" y1="1555.9" x2="630.23" y2="948.38" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#606060"/>
      <stop offset="0.29" stop-color="#484848"/>
      <stop offset="0.89" stop-color="#0c0c0c"/>
      <stop offset="1"/>
    </linearGradient>
    <linearGradient id="linear-gradient-14" x1="628.23" y1="1234.61" x2="632.23" y2="1234.61" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.24" stop-color="#fff" stop-opacity="0.5"/>
      <stop offset="0.42" stop-color="#fff" stop-opacity="0.86"/>
      <stop offset="0.5" stop-color="#fff"/>
      <stop offset="1" stop-color="#f6e4e4" stop-opacity="0"/>
    </linearGradient>
    <filter id="filter-3" x="598" y="928.16" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-3"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-4">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-4"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-4"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-15" x1="560.23" y1="1668.19" x2="560.23" y2="1060.67" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-16" x1="558.23" y1="1346.9" x2="562.23" y2="1346.9" xlink:href="#linear-gradient-14"/>
    <filter id="filter-5" x="528" y="1040.45" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-5"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-5"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-6">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-6"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-6"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-17" x1="490.23" y1="1668.19" x2="490.23" y2="1060.67" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-18" x1="488.23" y1="1346.9" x2="492.23" y2="1346.9" xlink:href="#linear-gradient-14"/>
    <filter id="filter-7" x="458" y="1040.45" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-7"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-7"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-8">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-8"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-8"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-19" x1="420.23" y1="1555.36" x2="420.23" y2="947.84" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-20" x1="418.23" y1="1234.07" x2="422.23" y2="1234.07" xlink:href="#linear-gradient-14"/>
    <filter id="filter-9" x="388" y="927.62" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-9"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-9"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-10">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-10"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-10"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-21" x1="734.32" y1="1366.03" x2="734.32" y2="759.29" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-22" x1="732.33" y1="1045.15" x2="736.32" y2="1045.15" xlink:href="#linear-gradient-14"/>
    <filter id="filter-11" x="702" y="738.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-11"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-11"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-12">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-12"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-12"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-23" x1="664.32" y1="1450.68" x2="664.32" y2="843.93" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-24" x1="662.33" y1="1129.8" x2="666.32" y2="1129.8" xlink:href="#linear-gradient-14"/>
    <filter id="filter-13" x="632" y="823.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-13"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-13"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-14">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-14"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-14"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-25" x1="594.32" y1="1509.22" x2="594.32" y2="902.48" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-26" x1="592.33" y1="1188.34" x2="596.32" y2="1188.34" xlink:href="#linear-gradient-14"/>
    <filter id="filter-15" x="562" y="881.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-15"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-15"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-16">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-16"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-16"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-27" x1="524.32" y1="1554.23" x2="524.32" y2="947.49" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-28" x1="522.33" y1="1233.35" x2="526.32" y2="1233.35" xlink:href="#linear-gradient-14"/>
    <filter id="filter-17" x="492" y="926.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-17"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-17"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-18">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-18"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-18"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-29" x1="454.32" y1="1509.22" x2="454.32" y2="902.48" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-30" x1="452.33" y1="1188.34" x2="456.32" y2="1188.34" xlink:href="#linear-gradient-14"/>
    <filter id="filter-19" x="422" y="881.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-19"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-19"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-20">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-20"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-20"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-31" x1="384.32" y1="1450.85" x2="384.32" y2="844.11" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-32" x1="382.33" y1="1129.97" x2="386.32" y2="1129.97" xlink:href="#linear-gradient-14"/>
    <filter id="filter-21" x="352" y="823.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-21"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-21"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-22">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-22"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-22"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-33" x1="314.32" y1="1366.19" x2="314.32" y2="759.45" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-34" x1="312.33" y1="1045.32" x2="316.32" y2="1045.32" xlink:href="#linear-gradient-14"/>
    <filter id="filter-23" x="282" y="738.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-23"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-23"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-24">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-24"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-24"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-35" x1="840.23" y1="1005" x2="840.23" y2="397.48" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-36" x1="838.23" y1="683.71" x2="842.23" y2="683.71" xlink:href="#linear-gradient-14"/>
    <filter id="filter-25" x="808" y="377.26" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-25"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-25"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-26">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-26"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-26"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-37" x1="700.23" y1="1295.44" x2="700.23" y2="687.92" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-38" x1="698.23" y1="974.15" x2="702.23" y2="974.15" xlink:href="#linear-gradient-14"/>
    <filter id="filter-27" x="668" y="667.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-27"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-27"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-28">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-28"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-28"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-39" x1="525.23" y1="1295.44" x2="525.23" y2="687.92" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-40" x1="523.23" y1="974.15" x2="527.23" y2="974.15" xlink:href="#linear-gradient-14"/>
    <filter id="filter-29" x="493" y="667.69" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-29"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-29"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-30">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-30"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-30"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-41" x1="350.23" y1="1295.44" x2="350.23" y2="687.92" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-42" x1="348.23" y1="974.15" x2="352.23" y2="974.15" xlink:href="#linear-gradient-14"/>
    <filter id="filter-31" x="318" y="667.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-31"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-31"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-32">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-32"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-32"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-43" x1="210.23" y1="1004.9" x2="210.23" y2="397.38" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-44" x1="208.23" y1="683.61" x2="212.23" y2="683.61" xlink:href="#linear-gradient-14"/>
    <filter id="filter-33" x="178" y="377.16" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-33"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-33"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-34">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-34"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-34"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-45" x1="804.32" y1="1139.01" x2="804.32" y2="532.27" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-46" x1="802.33" y1="818.13" x2="806.32" y2="818.13" xlink:href="#linear-gradient-14"/>
    <filter id="filter-35" x="772" y="511.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-35"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-35"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-36">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-36"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-36"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-47" x1="734.32" y1="1023.61" x2="734.32" y2="416.87" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-48" x1="732.33" y1="702.73" x2="736.32" y2="702.73" xlink:href="#linear-gradient-14"/>
    <filter id="filter-37" x="702" y="396.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-37"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-37"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-38">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-38"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-38"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-49" x1="664.32" y1="1139.61" x2="664.32" y2="532.87" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-50" x1="662.33" y1="818.73" x2="666.32" y2="818.73" xlink:href="#linear-gradient-14"/>
    <filter id="filter-39" x="632" y="512.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-39"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-39"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-40">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-40"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-40"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-51" x1="594.32" y1="1086.18" x2="594.32" y2="479.44" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-52" x1="592.33" y1="765.3" x2="596.32" y2="765.3" xlink:href="#linear-gradient-14"/>
    <filter id="filter-41" x="562" y="458.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-41"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-41"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-42">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-42"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-42"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-53" x1="524.32" y1="1023.18" x2="524.32" y2="416.44" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-54" x1="522.33" y1="702.3" x2="526.32" y2="702.3" xlink:href="#linear-gradient-14"/>
    <filter id="filter-43" x="492" y="395.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-43"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-43"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-44">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-44"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-44"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-55" x1="454.32" y1="1139.18" x2="454.32" y2="532.44" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-56" x1="452.33" y1="818.3" x2="456.32" y2="818.3" xlink:href="#linear-gradient-14"/>
    <filter id="filter-45" x="422" y="511.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-45"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-45"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-46">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-46"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-46"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-57" x1="384.32" y1="1023.81" x2="384.32" y2="417.07" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-58" x1="382.33" y1="702.93" x2="386.32" y2="702.93" xlink:href="#linear-gradient-14"/>
    <filter id="filter-47" x="352" y="396.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-47"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-47"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-48">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-48"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-48"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-59" x1="314.32" y1="1139.15" x2="314.32" y2="532.41" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-60" x1="312.33" y1="818.28" x2="316.32" y2="818.28" xlink:href="#linear-gradient-14"/>
    <filter id="filter-49" x="282" y="511.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-49"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-49"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="filter-50">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur-50"/>
      <feFlood/>
      <feComposite operator="in" in2="blur-50"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-61" x1="244.32" y1="1139.01" x2="244.32" y2="532.27" xlink:href="#linear-gradient-13"/>
    <linearGradient id="linear-gradient-62" x1="242.33" y1="818.13" x2="246.32" y2="818.13" xlink:href="#linear-gradient-14"/>
    <filter id="filter-51" x="212" y="511.52" width="65" height="633" filterUnits="userSpaceOnUse">
      <feOffset dy="10" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur-51"/>
      <feFlood flood-color="#fff"/>
      <feComposite operator="in" in2="blur-51"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-63" x1="700.5" y1="1140.97" x2="700.5" y2="630.9" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f1d5d5"/>
      <stop offset="1" stop-color="#d8a7a7"/>
    </linearGradient>
    <filter id="filter-52" x="660" y="620.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-52"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-52"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-64" x1="630.5" y1="1259.99" x2="630.5" y2="749.92" xlink:href="#linear-gradient-63"/>
    <filter id="filter-53" x="590" y="738.99" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-53"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-53"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-65" x1="560.5" y1="1362.35" x2="560.5" y2="852.27" xlink:href="#linear-gradient-63"/>
    <filter id="filter-54" x="520" y="841.35" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-54"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-54"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-66" x1="490.5" y1="1362.35" x2="490.5" y2="852.27" xlink:href="#linear-gradient-63"/>
    <filter id="filter-55" x="450" y="841.35" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-55"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-55"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-67" x1="420.5" y1="1259.99" x2="420.5" y2="749.91" xlink:href="#linear-gradient-63"/>
    <filter id="filter-56" x="380" y="738.99" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-56"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-56"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-68" x1="350.5" y1="1140.97" x2="350.5" y2="630.9" xlink:href="#linear-gradient-63"/>
    <filter id="filter-57" x="310" y="620.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-57"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-57"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-69" x1="770.5" y1="1086.31" x2="770.5" y2="576.24" xlink:href="#linear-gradient-63"/>
    <filter id="filter-58" x="730" y="565.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-58"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-58"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-70" y1="978.05" y2="467.97" xlink:href="#linear-gradient-63"/>
    <filter id="filter-59" x="660" y="457.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-59"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-59"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-71" x1="630.5" y1="1086.32" x2="630.5" y2="576.25" xlink:href="#linear-gradient-63"/>
    <filter id="filter-60" x="590" y="565.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-60"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-60"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-72" x1="560.5" y1="977.52" x2="560.5" y2="467.45" xlink:href="#linear-gradient-63"/>
    <filter id="filter-61" x="520" y="456.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-61"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-61"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-73" x1="490.5" y1="1086.32" x2="490.5" y2="576.25" xlink:href="#linear-gradient-63"/>
    <filter id="filter-62" x="450" y="565.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-62"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-62"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-74" x1="420.5" y1="977.52" x2="420.5" y2="467.45" xlink:href="#linear-gradient-63"/>
    <filter id="filter-63" x="380" y="456.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-63"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-63"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-75" x1="350.5" y1="917.68" x2="350.5" y2="407.61" xlink:href="#linear-gradient-63"/>
    <filter id="filter-64" x="310" y="397.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-64"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-64"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-76" x1="280.5" y1="1086.82" x2="280.5" y2="576.75" xlink:href="#linear-gradient-63"/>
    <filter id="filter-65" x="240" y="566.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-65"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-65"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-77" x1="805.27" y1="972.07" x2="805.27" y2="462.65" xlink:href="#linear-gradient-63"/>
    <filter id="filter-66" x="765" y="452.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-66"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-66"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-78" x1="735.27" y1="856.67" x2="735.27" y2="347.25" xlink:href="#linear-gradient-63"/>
    <filter id="filter-67" x="695" y="336.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-67"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-67"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-79" x1="665.27" y1="972.67" x2="665.27" y2="463.25" xlink:href="#linear-gradient-63"/>
    <filter id="filter-68" x="625" y="452.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-68"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-68"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-80" x1="595.27" y1="919.24" x2="595.27" y2="409.82" xlink:href="#linear-gradient-63"/>
    <filter id="filter-69" x="555" y="399.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-69"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-69"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-81" x1="525.27" y1="856.24" x2="525.27" y2="346.82" xlink:href="#linear-gradient-63"/>
    <filter id="filter-70" x="485" y="336.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-70"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-70"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-82" x1="455.27" y1="972.24" x2="455.27" y2="462.82" xlink:href="#linear-gradient-63"/>
    <filter id="filter-71" x="415" y="452.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-71"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-71"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-83" x1="385.27" y1="856.87" x2="385.27" y2="347.45" xlink:href="#linear-gradient-63"/>
    <filter id="filter-72" x="345" y="336.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-72"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-72"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-84" x1="315.27" y1="972.21" x2="315.27" y2="462.79" xlink:href="#linear-gradient-63"/>
    <filter id="filter-73" x="275" y="452.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-73"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-73"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-85" x1="245.27" y1="972.07" x2="245.27" y2="462.65" xlink:href="#linear-gradient-63"/>
    <filter id="filter-74" x="205" y="452.52" width="81" height="540" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-74"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-74"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-86" x1="840.5" y1="863.48" x2="840.5" y2="353.41" xlink:href="#linear-gradient-63"/>
    <filter id="filter-75" x="800" y="342.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-75"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-75"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-87" x1="770.5" y1="913.48" x2="770.5" y2="403.41" xlink:href="#linear-gradient-63"/>
    <filter id="filter-76" x="730" y="392.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-76"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-76"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-88" y1="808.49" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-77" x="660" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-77"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-77"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-89" x1="630.5" y1="808.49" x2="630.5" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-78" x="590" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-78"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-78"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-90" x1="560.5" y1="808.49" x2="560.5" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-79" x="520" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-79"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-79"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-91" x1="490.5" y1="808.49" x2="490.5" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-80" x="450" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-80"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-80"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-92" x1="420.5" y1="808.49" x2="420.5" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-81" x="380" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-81"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-81"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-93" x1="350.5" y1="808.49" x2="350.5" y2="298.42" xlink:href="#linear-gradient-63"/>
    <filter id="filter-82" x="310" y="287.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-82"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-82"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-94" x1="280.5" y1="913.48" x2="280.5" y2="403.41" xlink:href="#linear-gradient-63"/>
    <filter id="filter-83" x="240" y="392.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-83"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-83"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-95" x1="210.5" y1="863.48" x2="210.5" y2="353.41" xlink:href="#linear-gradient-63"/>
    <filter id="filter-84" x="170" y="342.52" width="81" height="541" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-84"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-84"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-96" x1="875.05" y1="807.12" x2="875.05" y2="162.07" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.02" stop-color="#fdf9f9"/>
      <stop offset="0.1" stop-color="#f6e3e3"/>
      <stop offset="0.21" stop-color="#f1d2d2"/>
      <stop offset="0.33" stop-color="#edc7c7"/>
      <stop offset="0.51" stop-color="#ebc0c0"/>
      <stop offset="1" stop-color="#eabebe"/>
    </linearGradient>
    <filter id="filter-85" x="835" y="151.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-85"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-85"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-97" x1="805.05" y1="807.12" x2="805.05" y2="162.07" xlink:href="#linear-gradient-96"/>
    <filter id="filter-86" x="765" y="151.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-86"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-86"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-98" x1="735.05" y1="857.63" x2="735.05" y2="212.59" xlink:href="#linear-gradient-96"/>
    <filter id="filter-87" x="695" y="202.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-87"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-87"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-99" x1="665.05" y1="753.71" x2="665.05" y2="108.66" xlink:href="#linear-gradient-96"/>
    <filter id="filter-88" x="625" y="98.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-88"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-88"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-100" x1="595.05" y1="858.21" x2="595.05" y2="213.16" xlink:href="#linear-gradient-96"/>
    <filter id="filter-89" x="555" y="202.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-89"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-89"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-101" x1="525.05" y1="754.28" x2="525.05" y2="109.24" xlink:href="#linear-gradient-96"/>
    <filter id="filter-90" x="485" y="98.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-90"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-90"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-102" x1="455.05" y1="858.21" x2="455.05" y2="213.16" xlink:href="#linear-gradient-96"/>
    <filter id="filter-91" x="415" y="202.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-91"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-91"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-103" x1="385.05" y1="806.71" x2="385.05" y2="161.66" xlink:href="#linear-gradient-96"/>
    <filter id="filter-92" x="345" y="151.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-92"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-92"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-104" x1="315.05" y1="858.18" x2="315.05" y2="213.13" xlink:href="#linear-gradient-96"/>
    <filter id="filter-93" x="275" y="202.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-93"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-93"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-105" x1="245.05" y1="807.12" x2="245.05" y2="162.07" xlink:href="#linear-gradient-96"/>
    <filter id="filter-94" x="205" y="151.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-94"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-94"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-106" x1="175.05" y1="807.12" x2="175.05" y2="162.07" xlink:href="#linear-gradient-96"/>
    <filter id="filter-95" x="135" y="151.52" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-95"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-95"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-107" x1="840.27" y1="714.27" x2="840.27" y2="68.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-96" x="799.85" y="58.29" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-96"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-96"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-108" x1="770.27" y1="764.27" x2="770.27" y2="118.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-97" x="729.85" y="108.29" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-97"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-97"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-109" x1="700.27" y1="659.28" x2="700.27" y2="13.4" xlink:href="#linear-gradient-96"/>
    <filter id="filter-98" x="659.85" y="3.31" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-98"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-98"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-110" x1="630.27" y1="659.28" x2="630.27" y2="13.4" xlink:href="#linear-gradient-96"/>
    <filter id="filter-99" x="589.85" y="3.31" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-99"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-99"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-111" x1="560.27" y1="714.27" x2="560.27" y2="68.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-100" x="519.85" y="58.29" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-100"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-100"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-112" x1="490.27" y1="714.27" x2="490.27" y2="68.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-101" x="450" y="57.52" width="81" height="677" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-101"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-101"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-113" x1="420.27" y1="659.28" x2="420.27" y2="13.4" xlink:href="#linear-gradient-96"/>
    <filter id="filter-102" x="379.85" y="3.31" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-102"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-102"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-114" x1="350.27" y1="659.28" x2="350.27" y2="13.4" xlink:href="#linear-gradient-96"/>
    <filter id="filter-103" x="309.85" y="3.31" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-103"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-103"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-115" x1="280.27" y1="764.27" x2="280.27" y2="118.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-104" x="239.85" y="108.29" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-104"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-104"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-116" x1="210.27" y1="714.27" x2="210.27" y2="68.39" xlink:href="#linear-gradient-96"/>
    <filter id="filter-105" x="169.85" y="58.29" width="81" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-105"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-105"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-117" x1="805.05" y1="617.26" x2="805.05" y2="-27.78" xlink:href="#linear-gradient-96"/>
    <filter id="filter-106" x="765" y="-38.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-106"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-106"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-118" x1="735.05" y1="558.78" x2="735.05" y2="-86.27" xlink:href="#linear-gradient-96"/>
    <filter id="filter-107" x="695" y="-96.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-107"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-107"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-119" x1="595.05" y1="616.8" x2="595.05" y2="-28.25" xlink:href="#linear-gradient-96"/>
    <filter id="filter-108" x="555" y="-38.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-108"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-108"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-120" x1="525.05" y1="616.8" x2="525.05" y2="-28.25" xlink:href="#linear-gradient-96"/>
    <filter id="filter-109" x="485" y="-38.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-109"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-109"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-121" x1="455.05" y1="616.8" x2="455.05" y2="-28.25" xlink:href="#linear-gradient-96"/>
    <filter id="filter-110" x="415" y="-38.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-110"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-110"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-122" x1="315.05" y1="558.78" x2="315.05" y2="-86.27" xlink:href="#linear-gradient-96"/>
    <filter id="filter-111" x="275" y="-96.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-111"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-111"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-123" x1="245.05" y1="616.63" x2="245.05" y2="-28.42" xlink:href="#linear-gradient-96"/>
    <filter id="filter-112" x="205" y="-38.48" width="80" height="676" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-112"/>
      <feFlood flood-color="#896666"/>
      <feComposite operator="in" in2="blur-112"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Pana_roz_button5">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="7" result="blur-113"/>
      <feFlood flood-color="#422828"/>
      <feComposite operator="in" in2="blur-113"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Pana_roz_button4">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="7" result="blur-114"/>
      <feFlood flood-color="#422828"/>
      <feComposite operator="in" in2="blur-114"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Pana_roz_button3">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="7" result="blur-115"/>
      <feFlood flood-color="#422828"/>
      <feComposite operator="in" in2="blur-115"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Pana_roz_button2">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="7" result="blur-116"/>
      <feFlood flood-color="#422828"/>
      <feComposite operator="in" in2="blur-116"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Pana_roz_button1">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="7" result="blur-117"/>
      <feFlood flood-color="#422828"/>
      <feComposite operator="in" in2="blur-117"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="HOME-BUTTON">
    <g style="filter: url(#filter)">
      <g id="Pana_roz_button-home">
        <path d="M463.41,1844.46c1.2,0,2.83.87,4,1.2,1.4.39,2.8.75,4.21,1.09,2.75.67,5.53,1.23,8.33,1.71,2.17.37,4.34.74,6.52,1s4.37.26,6.47.66c3.59.69,7.13-1.8,10-3.68l7.84-5.07a10.37,10.37,0,0,0,2.87-2.39c-1.52,3.53-4.34,6.32-7.09,9a22.24,22.24,0,0,0-2.18,2.16c1.93.6,4.54.32,6.56.25,2.19-.08,4.37-.27,6.56-.43,4.5-.33,9-.84,13.47-1.5a190.34,190.34,0,0,0,34.24-8.37c13.13-4.53,26.66-10.57,37.65-19.17,7.28-5.69,15.81-13.22,15-23.34.29,3.79-34.52,12.55-38.49,13.48a166.94,166.94,0,0,1-33.59,4.35,164,164,0,0,1-53.35-7.23c-1.8-.57-3.6-1.17-5.38-1.8-1.4-.49-3.13-1.5-4.6-1.56.26,4.83,3,9.56,4.22,14.21q-3.54-6.64-6.5-13.56a4.61,4.61,0,0,0-2-2.67c-1.16-.51-2.44-.89-3.62-1.43q-4-1.8-7.88-3.84a153.44,153.44,0,0,1-15.06-9l-.43-.3c-4.52-3.09-29.6-25.94-33.35-19.66-1.05,1.77-.7,4-.27,6,3.21,15.24,3.41,29.18,11.9,43.09A61.43,61.43,0,0,0,463.41,1844.46Z" style="fill: url(#linear-gradient)"/>
      </g>
      <g id="linie11">
        <path d="M640.11,1765.84l-8,12.53c-2.68,4.17-5.32,8.39-8.22,12.48a76.8,76.8,0,0,1-9.78,11.49,74.27,74.27,0,0,1-12,9.14,121.38,121.38,0,0,1-27.41,12q-7.14,2.26-14.47,3.8c-2.43.55-4.89,1-7.35,1.4s-4.93.75-7.41,1a137.45,137.45,0,0,1-59-5.86,122,122,0,0,1-50-31.4,121.65,121.65,0,0,0,50.21,30.73,136.42,136.42,0,0,0,58.62,5.12c2.45-.27,4.88-.7,7.32-1.08s4.86-.9,7.26-1.47a146.94,146.94,0,0,0,14.27-3.93,119.75,119.75,0,0,0,26.82-12.15,71.5,71.5,0,0,0,11.53-9,73.3,73.3,0,0,0,9.35-11.25c2.79-4,5.37-8.26,8-12.47l7.88-12.63a1.42,1.42,0,0,1,2.41,1.5Z" style="fill: url(#linear-gradient-2)"/>
      </g>
      <g id="linie10">
        <path d="M562.78,1826.72a10.57,10.57,0,0,1-.72,4.25c-.45,1.32-1,2.58-1.54,3.87l-3.14,7.7,2.67-7.86c.43-1.32.93-2.61,1.29-3.94a9.45,9.45,0,0,0,.44-3.91.51.51,0,0,1,.42-.57.5.5,0,0,1,.57.42Z" style="fill: url(#linear-gradient-3)"/>
      </g>
      <g id="linie9">
        <path d="M556.4,1827.39a22.89,22.89,0,0,1-.44,4l-.76,3.88-.77,3.87-.85,3.86.6-3.9.52-3.91.52-3.91a22.83,22.83,0,0,0,.18-3.86.5.5,0,0,1,1-.06Z" style="fill: url(#linear-gradient-4)"/>
      </g>
      <g id="linie8">
        <path d="M551.75,1828.3a35.92,35.92,0,0,1-1.73,4.51l-1.91,4.37-3.83,8.73,3.37-8.92,1.68-4.46a36,36,0,0,0,1.46-4.48.5.5,0,1,1,1,.23Z" style="fill: url(#linear-gradient-5)"/>
      </g>
      <g id="linie7">
        <path d="M509.11,1829a58.25,58.25,0,0,1-7.86,10.92c-3,3.35-6.19,6.45-9.41,9.55,3.1-3.21,6.2-6.44,9-9.87a57.16,57.16,0,0,0,7.35-11.06.51.51,0,0,1,.67-.23.52.52,0,0,1,.23.67Z" style="fill: url(#linear-gradient-6)"/>
      </g>
      <g id="linie6">
        <path d="M505.27,1828.53a67.94,67.94,0,0,1-4.58,6c-1.61,1.94-3.28,3.83-5.06,5.61a44.15,44.15,0,0,1-5.78,4.88,28.63,28.63,0,0,1-6.68,3.46,28.59,28.59,0,0,0,6.54-3.67,44.07,44.07,0,0,0,5.56-5c1.71-1.82,3.3-3.75,4.83-5.73a68.89,68.89,0,0,0,4.33-6.1.48.48,0,0,1,.68-.17.49.49,0,0,1,.17.68Z" style="fill: url(#linear-gradient-7)"/>
      </g>
      <g id="linie5">
        <path d="M489.21,1824.75A56.78,56.78,0,0,1,455,1839.41,56.27,56.27,0,0,0,488.52,1824a.51.51,0,0,1,.71,0,.5.5,0,0,1,0,.71Z" style="fill: url(#linear-gradient-8)"/>
      </g>
      <g id="linie4">
        <path d="M520.59,1829.59a5.74,5.74,0,0,0,0-3.94,37.3,37.3,0,0,0-1.65-4l-3.59-7.9,4,7.68a35.87,35.87,0,0,1,1.91,3.94,6.6,6.6,0,0,1,.25,4.54h0a.51.51,0,0,1-.64.31.5.5,0,0,1-.3-.64Z" style="fill: url(#linear-gradient-9)"/>
      </g>
      <g id="linie3">
        <path d="M516.45,1829.27a67.48,67.48,0,0,0-5.79-16.27,68,68,0,0,1,6.76,16,.51.51,0,0,1-.35.62.49.49,0,0,1-.61-.35Z" style="fill: url(#linear-gradient-10)"/>
      </g>
      <g id="linie2">
        <path d="M493.61,1825.72l-2-5.22q-1-2.6-2.11-5.16c-.72-1.72-1.47-3.41-2.27-5.09a48.28,48.28,0,0,0-2.62-4.92,48.19,48.19,0,0,1,2.84,4.81c.88,1.64,1.71,3.31,2.51,5s1.58,3.38,2.34,5.08l2.23,5.11v0a.5.5,0,1,1-.92.4Z" style="fill: url(#linear-gradient-11)"/>
      </g>
      <g id="linie1">
        <path d="M572.4,1823.24a5.28,5.28,0,0,0-1.13-2.61,19.74,19.74,0,0,0-2.09-2.22,27,27,0,0,1-2.13-2.28l-2-2.36,2.21,2.19a25,25,0,0,0,2.29,2.08,22.07,22.07,0,0,1,2.34,2.12,6.19,6.19,0,0,1,1.54,2.93.5.5,0,0,1-.4.58.48.48,0,0,1-.58-.39A.06.06,0,0,1,572.4,1823.24Z" style="fill: url(#linear-gradient-12)"/>
      </g>
      <g id="text6">
        <text transform="translate(460.36 1788.74) rotate(32.86)" style="font-size: 22.677169799804688px;fill: #fff;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">H</text>
        <text transform="translate(477.05 1799.11) rotate(21.65)" style="font-size: 22.677169799804688px;fill: #fff;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">O</text>
        <text transform="translate(497.3 1806.74) rotate(9.94)" style="font-size: 22.677169799804688px;fill: #fff;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">M</text>
        <text transform="translate(519.88 1810.04) rotate(0.66)" style="font-size: 22.677169799804688px;fill: #fff;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">E</text>
      </g>
    </g>
  </g>
  <g id="PENAJ">
    <g id="blockcolor11">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row11">
      <g id="Pana_gri_opac4_11">
        <g style="filter: url(#filter-2)">
          <path d="M655.23,1503.2c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V948.38h35.36v324.53Z" style="fill: url(#linear-gradient-13)"/>
          <g>
            <path d="M632.23,1518.2c0,.69-.89,2.64-2,2.64s-2-1.95-2-2.64l.59-11.51V948.38h2.83v558.31Z" style="fill: url(#linear-gradient-14);filter: url(#filter-3)"/>
            <path d="M626.67,1521c0-2,1.59-6,3.56-6s3.57,4.08,3.57,6a3.57,3.57,0,0,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac3_11">
        <g style="filter: url(#filter-4)">
          <path d="M585.23,1615.49c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V1060.67h35.36V1385.2Z" style="fill: url(#linear-gradient-15)"/>
          <g>
            <path d="M562.23,1630.49c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V1060.67h2.83V1619Z" style="fill: url(#linear-gradient-16);filter: url(#filter-5)"/>
            <path d="M556.67,1633.33c0-2,1.59-6,3.56-6s3.57,4.08,3.57,6a3.57,3.57,0,0,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac2_11">
        <g style="filter: url(#filter-6)">
          <path d="M515.23,1615.49c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V1060.67h35.36V1385.2Z" style="fill: url(#linear-gradient-17)"/>
          <g>
            <path d="M492.23,1630.49c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V1060.67h2.83V1619Z" style="fill: url(#linear-gradient-18);filter: url(#filter-7)"/>
            <path d="M486.67,1633.33c0-2,1.59-6,3.56-6s3.57,4.08,3.57,6a3.57,3.57,0,0,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac1_11">
        <g style="filter: url(#filter-8)">
          <path d="M445.23,1502.66c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V947.84h35.36v324.53Z" style="fill: url(#linear-gradient-19)"/>
          <g>
            <path d="M422.23,1517.66c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V947.84h2.83v558.31Z" style="fill: url(#linear-gradient-20);filter: url(#filter-9)"/>
            <path d="M416.67,1520.5c0-2,1.59-6,3.56-6s3.57,4.08,3.57,6a3.57,3.57,0,0,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
    </g>
    <g id="blockcolor10">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row10">
      <g id="Pana_gri_opac7_10">
        <g style="filter: url(#filter-10)">
          <path d="M759.29,1313.4c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V759.29H752V1083.4Z" style="fill: url(#linear-gradient-21)"/>
          <g>
            <path d="M736.32,1328.38c0,.68-.89,2.63-2,2.63s-2-2-2-2.63l.58-11.5V759.29h2.83v557.59Z" style="fill: url(#linear-gradient-22);filter: url(#filter-11)"/>
            <path d="M730.76,1331.21c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac6_10">
        <g style="filter: url(#filter-12)">
          <path d="M689.29,1398c0,13.8-11.18,52.64-25,52.64s-25-38.84-25-52.64l7.31-230V843.93H682v324.12Z" style="fill: url(#linear-gradient-23)"/>
          <g>
            <path d="M666.32,1413c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.49V843.93h2.83v557.6Z" style="fill: url(#linear-gradient-24);filter: url(#filter-13)"/>
            <path d="M660.76,1415.85c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac5_10">
        <g style="filter: url(#filter-14)">
          <path d="M619.29,1456.59c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V902.48H612v324.11Z" style="fill: url(#linear-gradient-25)"/>
          <g>
            <path d="M596.32,1471.57c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.5V902.48h2.83v557.59Z" style="fill: url(#linear-gradient-26);filter: url(#filter-15)"/>
            <path d="M590.76,1474.4c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac4_10">
        <g style="filter: url(#filter-16)">
          <path d="M549.29,1501.6c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V947.49H542V1271.6Z" style="fill: url(#linear-gradient-27)"/>
          <g>
            <path d="M526.32,1516.58c0,.69-.89,2.63-2,2.63s-2-1.94-2-2.63l.58-11.5V947.49h2.83v557.59Z" style="fill: url(#linear-gradient-28);filter: url(#filter-17)"/>
            <path d="M520.76,1519.41c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac3_10">
        <g style="filter: url(#filter-18)">
          <path d="M479.29,1456.59c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V902.48H472v324.11Z" style="fill: url(#linear-gradient-29)"/>
          <g>
            <path d="M456.32,1471.57c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.5V902.48h2.83v557.59Z" style="fill: url(#linear-gradient-30);filter: url(#filter-19)"/>
            <path d="M450.76,1474.4c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac2_10">
        <g style="filter: url(#filter-20)">
          <path d="M409.29,1398.22c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V844.11H402v324.11Z" style="fill: url(#linear-gradient-31)"/>
          <g>
            <path d="M386.32,1413.2c0,.69-.89,2.63-2,2.63s-2-1.94-2-2.63l.58-11.5V844.11h2.83V1401.7Z" style="fill: url(#linear-gradient-32);filter: url(#filter-21)"/>
            <path d="M380.76,1416c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac1_10">
        <g style="filter: url(#filter-22)">
          <path d="M339.29,1313.56c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V759.45H332v324.12Z" style="fill: url(#linear-gradient-33)"/>
          <g>
            <path d="M316.32,1328.54c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.49V759.45h2.83v557.6Z" style="fill: url(#linear-gradient-34);filter: url(#filter-23)"/>
            <path d="M310.76,1331.37c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
    </g>
    <g id="blockcolor9">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row9">
      <g id="Pana_gri_opac5_9">
        <g style="filter: url(#filter-24)">
          <path d="M865.23,952.3c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7L822.55,722V397.48h35.36V722Z" style="fill: url(#linear-gradient-35)"/>
          <g>
            <path d="M842.23,967.3c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V397.48h2.83V955.79Z" style="fill: url(#linear-gradient-36);filter: url(#filter-25)"/>
            <path d="M836.67,970.13c0-2,1.59-6,3.56-6s3.57,4.07,3.57,6a3.57,3.57,0,1,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac4_9">
        <g style="filter: url(#filter-26)">
          <path d="M725.23,1242.74c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V687.92h35.36v324.53Z" style="fill: url(#linear-gradient-37)"/>
          <g>
            <path d="M702.23,1257.74c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V687.92h2.83v558.31Z" style="fill: url(#linear-gradient-38);filter: url(#filter-27)"/>
            <path d="M696.67,1260.57c0-2,1.59-6,3.56-6s3.57,4.07,3.57,6a3.57,3.57,0,1,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac3_9">
        <g style="filter: url(#filter-28)">
          <path d="M550.23,1242.74c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V687.92h35.36v324.53Z" style="fill: url(#linear-gradient-39)"/>
          <g>
            <path d="M527.23,1257.74c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V687.92h2.83v558.31Z" style="fill: url(#linear-gradient-40);filter: url(#filter-29)"/>
            <path d="M521.67,1260.57c0-2,1.59-6,3.56-6s3.57,4.07,3.57,6a3.57,3.57,0,1,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac2_9">
        <g style="filter: url(#filter-30)">
          <path d="M375.23,1242.74c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V687.92h35.36v324.53Z" style="fill: url(#linear-gradient-41)"/>
          <g>
            <path d="M352.23,1257.74c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V687.92h2.83v558.31Z" style="fill: url(#linear-gradient-42);filter: url(#filter-31)"/>
            <path d="M346.67,1260.57c0-2,1.59-6,3.56-6s3.57,4.07,3.57,6a3.57,3.57,0,1,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac1_9">
        <g style="filter: url(#filter-32)">
          <path d="M235.23,952.2c0,13.81-11.19,52.7-25,52.7s-25-38.89-25-52.7l7.32-230.29V397.38h35.36V721.91Z" style="fill: url(#linear-gradient-43)"/>
          <g>
            <path d="M212.23,967.2c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.59-11.51V397.38h2.83V955.69Z" style="fill: url(#linear-gradient-44);filter: url(#filter-33)"/>
            <path d="M206.67,970c0-2,1.59-6,3.56-6s3.57,4.08,3.57,6a3.57,3.57,0,0,1-7.13,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
    </g>
    <g id="blockcolor8">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row8">
      <g id="Pana_gri_opac9_8">
        <g style="filter: url(#filter-34)">
          <path d="M829.29,1086.38c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V532.27H822V856.39Z" style="fill: url(#linear-gradient-45)"/>
          <g>
            <path d="M806.32,1101.36c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.49V532.27h2.83v557.6Z" style="fill: url(#linear-gradient-46);filter: url(#filter-35)"/>
            <path d="M800.76,1104.19c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac8_8">
        <g style="filter: url(#filter-36)">
          <path d="M759.29,971c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V416.87H752V741Z" style="fill: url(#linear-gradient-47)"/>
          <g>
            <path d="M736.32,986c0,.69-.89,2.63-2,2.63s-2-1.94-2-2.63l.58-11.5V416.87h2.83V974.46Z" style="fill: url(#linear-gradient-48);filter: url(#filter-37)"/>
            <path d="M730.76,988.79c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac7_8">
        <g style="filter: url(#filter-38)">
          <path d="M689.29,1087c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V532.87H682V857Z" style="fill: url(#linear-gradient-49)"/>
          <g>
            <path d="M666.32,1102c0,.69-.89,2.63-2,2.63s-2-1.94-2-2.63l.58-11.5V532.87h2.83v557.59Z" style="fill: url(#linear-gradient-50);filter: url(#filter-39)"/>
            <path d="M660.76,1104.79c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac6_8">
        <g style="filter: url(#filter-40)">
          <path d="M619.29,1033.55c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V479.44H612V803.55Z" style="fill: url(#linear-gradient-51)"/>
          <g>
            <path d="M596.32,1048.53c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.5V479.44h2.83V1037Z" style="fill: url(#linear-gradient-52);filter: url(#filter-41)"/>
            <path d="M590.76,1051.36c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac5_8">
        <g style="filter: url(#filter-42)">
          <path d="M549.29,970.55c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V416.44H542V740.55Z" style="fill: url(#linear-gradient-53)"/>
          <g>
            <path d="M526.32,985.53c0,.69-.89,2.64-2,2.64s-2-1.95-2-2.64l.58-11.5V416.44h2.83V974Z" style="fill: url(#linear-gradient-54);filter: url(#filter-43)"/>
            <path d="M520.76,988.36c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac4_8">
        <g style="filter: url(#filter-44)">
          <path d="M479.29,1086.55c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V532.44H472V856.55Z" style="fill: url(#linear-gradient-55)"/>
          <g>
            <path d="M456.32,1101.53c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.5V532.44h2.83V1090Z" style="fill: url(#linear-gradient-56);filter: url(#filter-45)"/>
            <path d="M450.76,1104.36c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac3_8">
        <g style="filter: url(#filter-46)">
          <path d="M409.29,971.18c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V417.07H402V741.18Z" style="fill: url(#linear-gradient-57)"/>
          <g>
            <path d="M386.32,986.16c0,.69-.89,2.63-2,2.63s-2-1.94-2-2.63l.58-11.5V417.07h2.83V974.66Z" style="fill: url(#linear-gradient-58);filter: url(#filter-47)"/>
            <path d="M380.76,989c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac2_8">
        <g style="filter: url(#filter-48)">
          <path d="M339.29,1086.52c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V532.41H332V856.53Z" style="fill: url(#linear-gradient-59)"/>
          <g>
            <path d="M316.32,1101.5c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.49V532.41h2.83V1090Z" style="fill: url(#linear-gradient-60);filter: url(#filter-49)"/>
            <path d="M310.76,1104.33c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,1,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
      <g id="Pana_gri_opac1_8">
        <g style="filter: url(#filter-50)">
          <path d="M269.29,1086.38c0,13.79-11.18,52.63-25,52.63s-25-38.84-25-52.63l7.31-230V532.27H262V856.39Z" style="fill: url(#linear-gradient-61)"/>
          <g>
            <path d="M246.32,1101.36c0,.69-.89,2.64-2,2.64s-2-2-2-2.64l.58-11.49V532.27h2.83v557.6Z" style="fill: url(#linear-gradient-62);filter: url(#filter-51)"/>
            <path d="M240.76,1104.19c0-2,1.6-6,3.56-6s3.56,4.07,3.56,6a3.56,3.56,0,0,1-7.12,0Z" style="fill: #eabebe"/>
          </g>
        </g>
      </g>
    </g>
    <g id="blockcolor7">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row7">
      <g id="Pana_roz_opac6_7">
        <path d="M725.5,1088.32c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.09V630.9h35.36V858.23Z" style="fill: url(#linear-gradient-63);filter: url(#filter-52)"/>
      </g>
      <g id="Pana_roz_opac5_7">
        <path d="M655.5,1207.34c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.1V749.92h35.36V977.24Z" style="fill: url(#linear-gradient-64);filter: url(#filter-53)"/>
      </g>
      <g id="Pana_roz_opac4_7">
        <path d="M585.5,1309.69c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V852.27h35.36V1079.6Z" style="fill: url(#linear-gradient-65);filter: url(#filter-54)"/>
      </g>
      <g id="Pana_roz_opac3_7">
        <path d="M515.5,1309.69c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V852.27h35.36V1079.6Z" style="fill: url(#linear-gradient-66);filter: url(#filter-55)"/>
      </g>
      <g id="Pana_roz_opac2_7">
        <path d="M445.5,1207.33c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V749.91h35.36V977.24Z" style="fill: url(#linear-gradient-67);filter: url(#filter-56)"/>
      </g>
      <g id="Pana_roz_opac1_7">
        <path d="M375.5,1088.32c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.09V630.9h35.36V858.23Z" style="fill: url(#linear-gradient-68);filter: url(#filter-57)"/>
      </g>
    </g>
    <g id="blockcolor6">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row6">
      <g id="Pana_roz_opac8_6">
        <path d="M795.5,1033.66c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V576.24h35.36V803.56Z" style="fill: url(#linear-gradient-69);filter: url(#filter-58)"/>
      </g>
      <g id="Pana_roz_opac7_6">
        <path d="M725.5,925.39c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V468h35.36V695.3Z" style="fill: url(#linear-gradient-70);filter: url(#filter-59)"/>
      </g>
      <g id="Pana_roz_opac6_6">
        <path d="M655.5,1033.67c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.09V576.25h35.36V803.58Z" style="fill: url(#linear-gradient-71);filter: url(#filter-60)"/>
      </g>
      <g id="Pana_roz_opac5_6">
        <path d="M585.5,924.87c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V467.45h35.36V694.77Z" style="fill: url(#linear-gradient-72);filter: url(#filter-61)"/>
      </g>
      <g id="Pana_roz_opac4_6">
        <path d="M515.5,1033.67c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.09V576.25h35.36V803.58Z" style="fill: url(#linear-gradient-73);filter: url(#filter-62)"/>
      </g>
      <g id="Pana_roz_opac3_6">
        <path d="M445.5,924.87c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V467.45h35.36V694.77Z" style="fill: url(#linear-gradient-74);filter: url(#filter-63)"/>
      </g>
      <g id="Pana_roz_opac2_6">
        <path d="M375.5,865c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V407.61h35.36V634.93Z" style="fill: url(#linear-gradient-75);filter: url(#filter-64)"/>
      </g>
      <g id="Pana_roz_opac1_6">
        <path d="M305.5,1034.17c0,13.8-11.19,52.65-25,52.65s-25-38.85-25-52.65l7.32-230.09V576.75h35.36V804.08Z" style="fill: url(#linear-gradient-76);filter: url(#filter-65)"/>
      </g>
    </g>
    <g id="blockcolor5">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row5">
      <g id="Pana_roz_opac9_5">
        <path d="M830.24,919.48c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-77);filter: url(#filter-66)"/>
      </g>
      <g id="Pana_roz_opac8_5">
        <path d="M760.24,804.08c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-78);filter: url(#filter-67)"/>
      </g>
      <g id="Pana_roz_opac7_5">
        <path d="M690.24,920.08c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-79);filter: url(#filter-68)"/>
      </g>
      <g id="Pana_roz_opac6_5">
        <path d="M620.24,866.65c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-80);filter: url(#filter-69)"/>
      </g>
      <g id="Pana_roz_opac5_5">
        <path d="M550.24,803.65c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-81);filter: url(#filter-70)"/>
      </g>
      <g id="Pana_roz_opac4_5">
        <path d="M480.24,919.65c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-82);filter: url(#filter-71)"/>
      </g>
      <g id="Pana_roz_opac3_5">
        <path d="M410.24,804.28c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-83);filter: url(#filter-72)"/>
      </g>
      <g id="Pana_roz_opac2_5">
        <path d="M340.24,919.62c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-84);filter: url(#filter-73)"/>
      </g>
      <g id="Pana_roz_opac1_5">
        <path d="M270.24,919.48c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8v-227h35.31v227Z" style="fill: url(#linear-gradient-85);filter: url(#filter-74)"/>
      </g>
    </g>
    <g id="blockcolor4">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row4">
      <g id="Pana_roz_opac10_4">
        <path d="M865.5,810.82c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V353.41h35.36V580.73Z" style="fill: url(#linear-gradient-86);filter: url(#filter-75)"/>
      </g>
      <g id="Pana_roz_opac9_4">
        <path d="M795.5,860.82c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V403.41h35.36V630.73Z" style="fill: url(#linear-gradient-87);filter: url(#filter-76)"/>
      </g>
      <g id="Pana_roz_opac8_4">
        <path d="M725.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-88);filter: url(#filter-77)"/>
      </g>
      <g id="Pana_roz_opac7_4">
        <path d="M655.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-89);filter: url(#filter-78)"/>
      </g>
      <g id="Pana_roz_opac6_4">
        <path d="M585.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-90);filter: url(#filter-79)"/>
      </g>
      <g id="Pana_roz_opac5_4">
        <path d="M515.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-91);filter: url(#filter-80)"/>
      </g>
      <g id="Pana_roz_opac4_4">
        <path d="M445.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-92);filter: url(#filter-81)"/>
      </g>
      <g id="Pana_roz_opac3_4">
        <path d="M375.5,755.84c0,13.79-11.19,52.65-25,52.65s-25-38.86-25-52.65l7.32-230.1V298.42h35.36V525.74Z" style="fill: url(#linear-gradient-93);filter: url(#filter-82)"/>
      </g>
      <g id="Pana_roz_opac2_4">
        <path d="M305.5,860.82c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V403.41h35.36V630.73Z" style="fill: url(#linear-gradient-94);filter: url(#filter-83)"/>
      </g>
      <g id="Pana_roz_opac1_4">
        <path d="M235.5,810.82c0,13.8-11.19,52.66-25,52.66s-25-38.86-25-52.66l7.32-230.09V353.41h35.36V580.73Z" style="fill: url(#linear-gradient-95);filter: url(#filter-84)"/>
      </g>
    </g>
    <g id="blockcolor3">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row3">
      <g id="Pana_roz_degrade11_3">
        <path d="M900,754.6c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-96);filter: url(#filter-85)"/>
      </g>
      <g id="Pana_roz_degrade10_3">
        <path d="M830,754.6c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-97);filter: url(#filter-86)"/>
      </g>
      <g id="Pana_roz_degrade9_3">
        <path d="M760,805.11c0,13.77-11.16,52.52-24.93,52.52s-24.94-38.75-24.94-52.52l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-98);filter: url(#filter-87)"/>
      </g>
      <g id="Pana_roz_degrade8_3">
        <path d="M690,701.19c0,13.77-11.16,52.52-24.93,52.52S640.11,715,640.11,701.19l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-99);filter: url(#filter-88)"/>
      </g>
      <g id="Pana_roz_degrade7_3">
        <path d="M620,805.69c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-100);filter: url(#filter-89)"/>
      </g>
      <g id="Pana_roz_degrade6_3">
        <path d="M550,701.76c0,13.77-11.16,52.52-24.93,52.52s-24.94-38.75-24.94-52.52l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-101);filter: url(#filter-90)"/>
      </g>
      <g id="Pana_roz_degrade5_3">
        <path d="M480,805.69c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-102);filter: url(#filter-91)"/>
      </g>
      <g id="Pana_roz_degrade4_3">
        <path d="M410,754.19c0,13.77-11.16,52.52-24.93,52.52S360.11,768,360.11,754.19l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-103);filter: url(#filter-92)"/>
      </g>
      <g id="Pana_roz_degrade3_3">
        <path d="M340,805.66c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-104);filter: url(#filter-93)"/>
      </g>
      <g id="Pana_roz_degrade2_3">
        <path d="M270,754.6c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-105);filter: url(#filter-94)"/>
      </g>
      <g id="Pana_roz_degrade1_3">
        <path d="M200,754.6c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-106);filter: url(#filter-95)"/>
      </g>
    </g>
    <g id="blockcolor2">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row2">
      <g id="Pana_roz_degrade10_2">
        <path d="M865.24,661.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V68.39h35.31V431.88Z" style="fill: url(#linear-gradient-107);filter: url(#filter-96)"/>
      </g>
      <g id="Pana_roz_degrade9_2">
        <path d="M795.24,711.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V118.39h35.31V481.88Z" style="fill: url(#linear-gradient-108);filter: url(#filter-97)"/>
      </g>
      <g id="Pana_roz_degrade8_2">
        <path d="M725.24,606.69c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V13.4h35.31V376.89Z" style="fill: url(#linear-gradient-109);filter: url(#filter-98)"/>
      </g>
      <g id="Pana_roz_degrade7_2">
        <path d="M655.24,606.69c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V13.4h35.31V376.89Z" style="fill: url(#linear-gradient-110);filter: url(#filter-99)"/>
      </g>
      <g id="Pana_roz_degrade6_2">
        <path d="M585.24,661.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V68.39h35.31V431.88Z" style="fill: url(#linear-gradient-111);filter: url(#filter-100)"/>
      </g>
      <g id="Pana_roz_degrade5_2">
        <path d="M515.24,661.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V68.39h35.31V431.88Z" style="fill: url(#linear-gradient-112);filter: url(#filter-101)"/>
      </g>
      <g id="Pana_roz_degrade4_2">
        <path d="M445.24,606.69c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V13.4h35.31V376.89Z" style="fill: url(#linear-gradient-113);filter: url(#filter-102)"/>
      </g>
      <g id="Pana_roz_degrade3_2">
        <path d="M375.24,606.69c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V13.4h35.31V376.89Z" style="fill: url(#linear-gradient-114);filter: url(#filter-103)"/>
      </g>
      <g id="Pana_roz_degrade2_2">
        <path d="M305.24,711.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V118.39h35.31V481.88Z" style="fill: url(#linear-gradient-115);filter: url(#filter-104)"/>
      </g>
      <g id="Pana_roz_degrade1_2">
        <path d="M235.24,661.68c0,13.78-11.17,52.59-25,52.59s-25-38.81-25-52.59l7.31-229.8V68.39h35.31V431.88Z" style="fill: url(#linear-gradient-116);filter: url(#filter-105)"/>
      </g>
    </g>
    <g id="blockcolor1">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
    <g id="row1">
      <g id="Pana_roz_degrade7_1">
        <path d="M830,564.74c0,13.77-11.16,52.52-24.93,52.52s-24.94-38.75-24.94-52.52l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-117);filter: url(#filter-106)"/>
      </g>
      <g id="Pana_roz_degrade6_1">
        <path d="M760,506.26c0,13.77-11.16,52.52-24.93,52.52S710.11,520,710.11,506.26l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-118);filter: url(#filter-107)"/>
      </g>
      <g id="Pana_roz_degrade5_1">
        <path d="M620,564.28c0,13.76-11.16,52.52-24.93,52.52S570.11,578,570.11,564.28l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-119);filter: url(#filter-108)"/>
      </g>
      <g id="Pana_roz_degrade4_1">
        <path d="M550,564.28c0,13.76-11.16,52.52-24.93,52.52S500.11,578,500.11,564.28l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-120);filter: url(#filter-109)"/>
      </g>
      <g id="Pana_roz_degrade3_1">
        <path d="M480,564.28c0,13.76-11.16,52.52-24.93,52.52S430.11,578,430.11,564.28l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-121);filter: url(#filter-110)"/>
      </g>
      <g id="Pana_roz_degrade2_1">
        <path d="M340,506.26c0,13.77-11.16,52.52-24.93,52.52S290.11,520,290.11,506.26l7.3-229.5v-363h35.27v363Z" style="fill: url(#linear-gradient-122);filter: url(#filter-111)"/>
      </g>
      <g id="Pana_roz_degrade1_1">
        <path d="M270,564.11c0,13.76-11.16,52.52-24.93,52.52s-24.94-38.76-24.94-52.52l7.3-229.51v-363h35.27v363Z" style="fill: url(#linear-gradient-123);filter: url(#filter-112)"/>
      </g>
    </g>
    <g id="blockcolor0">
      <g style="opacity: 0">
        <rect x="125" width="800" height="1755" style="fill: #93a0c6"/>
      </g>
    </g>
  </g>
  <g id="SOFT-SKILLS">
    <g>
      <g id="Pana_roz_button5-2" data-name="Pana_roz_button5" style="filter: url(#Pana_roz_button5)">
        <path d="M694.63,454.67c0,13.81-13.43,52.7-30,52.7s-30-38.89-30-52.7l8.79-230.29V0h42.43V224.38Z" style="fill: #fff"/>
      </g>
      <text id="text5" transform="translate(673.37 452.93) rotate(-90)" style="font-size: 22.677169799804688px;fill: #c45353;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">S<tspan x="14.29" y="0">O</tspan><tspan x="34.61" y="0">F</tspan><tspan x="48.19" y="0">T</tspan><tspan x="62.8" y="0"> </tspan><tspan x="72.08" y="0">S</tspan><tspan x="86.37" y="0">K</tspan><tspan x="101.37" y="0">I</tspan><tspan x="109.59" y="0">L</tspan><tspan x="123" y="0">L</tspan><tspan x="135.98" y="0">S</tspan></text>
    </g>
  </g>
  <g id="ACADEMIC">
    <g>
      <g id="Pana_roz_button4-2" data-name="Pana_roz_button4" style="filter: url(#Pana_roz_button4)">
        <path d="M624.63,454.67c0,13.81-13.43,52.7-30,52.7s-30-38.89-30-52.7l8.79-230.29V0h42.43V224.38Z" style="fill: #fff"/>
      </g>
      <text id="text4" transform="translate(604.31 452.76) rotate(-90)" style="font-size: 22.677169799804688px;fill: #c45353;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">A<tspan x="19.58" y="0">C</tspan><tspan x="39.33" y="0">A</tspan><tspan x="59.29" y="0">D</tspan><tspan x="80.23" y="0">E</tspan><tspan x="97.25" y="0">M</tspan><tspan x="121.81" y="0">I</tspan><tspan x="132.64" y="0">C</tspan></text>
    </g>
  </g>
  <g id="CV">
    <g>
      <g id="Pana_roz_button3-2" data-name="Pana_roz_button3" style="filter: url(#Pana_roz_button3)">
        <path d="M554.63,454.67c0,13.81-13.43,52.7-30,52.7s-30-38.89-30-52.7l8.79-230.29V0h42.43V224.38Z" style="fill: #fff"/>
      </g>
      <text id="text3" transform="translate(510.91 403.72)" style="font-size: 22.677169799804688px;fill: #c45353;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">CV</text>
    </g>
  </g>
  <g id="PROFESSIONAL">
    <g>
      <g id="Pana_roz_button2-2" data-name="Pana_roz_button2" style="filter: url(#Pana_roz_button2)">
        <path d="M484.63,454.67c0,13.81-13.43,52.7-30,52.7s-30-38.89-30-52.7l8.79-230.29V0h42.43V224.38Z" style="fill: #fff"/>
      </g>
      <text id="text2" transform="translate(463.39 454.42) rotate(-90)" style="font-size: 22.677169799804688px;fill: #c45353;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">P<tspan x="12.33" y="0">R</tspan><tspan x="24.71" y="0">O</tspan><tspan x="41.98" y="0">F</tspan><tspan x="52.51" y="0">E</tspan><tspan x="63.86" y="0">S</tspan><tspan x="75.13" y="0">S</tspan><tspan x="86.4" y="0">I</tspan><tspan x="91.59" y="0">O</tspan><tspan x="108.84" y="0">N</tspan><tspan x="124.93" y="0">A</tspan><tspan x="139.2" y="0">L</tspan></text>
    </g>
  </g>
  <g id="HARD-SKILLS">
    <g>
      <g id="Pana_roz_button1-2" data-name="Pana_roz_button1" style="filter: url(#Pana_roz_button1)">
        <path d="M414.63,454.67c0,13.81-13.43,52.7-30,52.7s-30-38.89-30-52.7l8.79-230.29V0h42.43V224.38Z" style="fill: #fff"/>
      </g>
      <text id="text1" transform="translate(394.07 452.82) rotate(-90)" style="font-size: 22.677169799804688px;fill: #c45353;font-family: YuGothicUI-Light, Yu Gothic UI;font-weight: 300">H<tspan x="17.61" y="0">A</tspan><tspan x="34.14" y="0">R</tspan><tspan x="49" y="0">D</tspan><tspan x="66.55" y="0"> </tspan><tspan x="75.05" y="0">S</tspan><tspan x="88.59" y="0">K</tspan><tspan x="102.8" y="0">I</tspan><tspan x="110.24" y="0">L</tspan><tspan x="122.9" y="0">L</tspan><tspan x="135.11" y="0">S</tspan></text>
    </g>
  </g>
</svg>
`;

const hardSkillsSVG = `<svg id="hard-skills_content" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2400 1600">
  <defs>
    <linearGradient id="linear-gradient" x1="574.452" y1="347.215" x2="1805.812" y2="347.215" gradientUnits="userSpaceOnUse">
      <stop offset="0.245" stop-color="#fff"/>
      <stop offset="0.248" stop-color="#fff"/>
      <stop offset="0.544" stop-color="#fff"/>
      <stop offset="0.786" stop-color="#93a0c5" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="clip-path">
      <rect id="clipmask_15" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
    </clipPath>
    <clipPath id="clip-path-8">
      <rect id="clipmask_9" x="585.671" y="1006.813" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
    </clipPath>
    <clipPath id="clip-path-11">
      <rect id="clipmask_7" x="585.671" y="689.667" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
    </clipPath>
    <clipPath id="clip-path-14">
      <rect id="clipmask_5" x="585.671" y="372.191" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
    </clipPath>
    <mask id="mask" x="400.818" y="-95.668" width="1404.994" height="885.765" maskUnits="userSpaceOnUse">
      <rect x="574.452" y="-95.668" width="1231.36" height="885.765" style="fill: url(#linear-gradient)"/>
    </mask>
    <clipPath id="clip-path-18">
      <rect id="clipmask_2" x="585.671" y="55.08" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
    </clipPath>
  </defs>
  <g id="technical">
    <g id="technical_6">
      <rect id="clipmask_15-2" data-name="clipmask_15" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_15" width="7021" height="4966" transform="translate(972.558 959.948) scale(0.122)" xlink:href="hard-skills/img_15.png"/>
      </g>
    </g>
    <g id="technical_5">
      <rect id="clipmask_14-2" data-name="clipmask_14" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_14" width="7021" height="4966" transform="translate(1001.021 1202.205) scale(0.117)" xlink:href="hard-skills/img_14.png"/>
      </g>
    </g>
    <g id="technical_4">
      <rect id="clipmask_13-2" data-name="clipmask_13" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_13" width="4961" height="3508" transform="translate(958.882 1005.932) scale(0.206)" xlink:href="hard-skills/img_13.png"/>
      </g>
    </g>
    <g id="technical_3">
      <rect id="clipmask_12-2" data-name="clipmask_12" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_12" width="2326" height="1363" transform="translate(1087.67 1248.406) scale(0.314)" xlink:href="hard-skills/img_12.png"/>
      </g>
    </g>
    <g id="technical_2">
      <rect id="clipmask_11-2" data-name="clipmask_11" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_11" width="3508" height="2480" transform="translate(948.426 1139.581) scale(0.274)" xlink:href="hard-skills/img_11.png"/>
      </g>
    </g>
    <g id="technical_1">
      <rect id="clipmask_10-2" data-name="clipmask_10" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_10" width="3028" height="1754" transform="translate(932.468 1165.009) scale(0.294)" xlink:href="hard-skills/img_10.png"/>
      </g>
    </g>
    <g id="technical_default">
      <rect id="clipmask_d5-2" data-name="clipmask_d5" x="585.671" y="1324.615" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path)">
        <image id="img_d5" width="2480" height="3508" transform="translate(877.528 252.119) scale(0.389)" xlink:href="hard-skills/img_d5.png"/>
      </g>
    </g>
    <g id="technical_6_text">
      <g>
        <path d="M1871.222,1356.134h-7.717V1363h7.138v2.09h-7.138v8.789h-2.314v-19.848h10.031Z" style="fill: #fff"/>
        <path d="M1883.5,1373.879h-2.259v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.164,2.164,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1907.793,1373.879h-2.259v-8.139a6.161,6.161,0,0,0-.724-3.4,2.737,2.737,0,0,0-2.433-1.052,3.006,3.006,0,0,0-2.459,1.328,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.415q0-4.182-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.173h2.26v2.242h.056a4.788,4.788,0,0,1,4.381-2.574,4.078,4.078,0,0,1,4,2.933,5.03,5.03,0,0,1,4.684-2.933q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M1913.223,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,1913.223,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1921.16,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M1926.893,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,1926.893,1356.107Zm1.1,17.772h-2.26v-14.173H1928Z" style="fill: #fff"/>
        <path d="M1942.67,1373.879h-2.259v-2.214h-.055a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.709,8.709,0,0,1,4.795-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.164,2.164,0,0,0,.738,1.695,2.836,2.836,0,0,0,1.963.658,3.619,3.619,0,0,0,2.777-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1954.287,1362a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.173h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M1982.717,1359.706l-4.23,14.173h-2.343l-2.907-10.146a6.525,6.525,0,0,1-.221-1.314h-.055a6.241,6.241,0,0,1-.29,1.287l-3.155,10.173h-2.26l-4.271-14.173h2.37l2.921,10.657a6.462,6.462,0,0,1,.193,1.273h.11a5.992,5.992,0,0,1,.248-1.3l3.252-10.63h2.067l2.921,10.685a7.642,7.642,0,0,1,.207,1.274h.11a5.949,5.949,0,0,1,.235-1.274l2.866-10.685Z" style="fill: #fff"/>
        <path d="M1986.493,1356.107a1.436,1.436,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.48,1.451,1.451,0,0,1,1.053.422,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,1986.493,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1998.715,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.555v1.937h-3.555v7.987a3.33,3.33,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2013.446,1373.879h-2.26v-8.166q0-4.431-3.279-4.429a3.573,3.573,0,0,0-2.785,1.28,4.79,4.79,0,0,0-1.129,3.287v8.028h-2.26V1352.9h2.26v9.162h.055a5.127,5.127,0,0,1,4.63-2.684q4.768,0,4.768,5.771Z" style="fill: #fff"/>
        <path d="M2028.523,1366.377v7.5h-2.315v-19.848h5.429a7.15,7.15,0,0,1,4.913,1.55,5.551,5.551,0,0,1,1.742,4.374,6.028,6.028,0,0,1-1.935,4.623,7.381,7.381,0,0,1-5.23,1.8Zm0-10.243v8.139h2.426a5.411,5.411,0,0,0,3.658-1.1,3.9,3.9,0,0,0,1.261-3.108q0-3.93-4.63-3.931Z" style="fill: #fff"/>
        <path d="M2056.468,1365.851q0,8.359-7.51,8.36-7.193,0-7.192-8.041v-12.139h2.314v11.986q0,6.1,5.126,6.1,4.947,0,4.948-5.9v-12.193h2.314Z" style="fill: #fff"/>
        <path d="M2074.3,1354.585l-11.575,17.19h11.3v2.1h-14.758v-.651l11.479-17.094h-10.556v-2.1h14.11Z" style="fill: #fff"/>
        <path d="M2097.438,1373.879h-2.26v-2.409h-.056a5.678,5.678,0,0,1-9.1.838,7.83,7.83,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.808,5.808,0,0,1,4.7-2.117,4.517,4.517,0,0,1,4.23,2.3h.056V1352.9h2.26Zm-2.26-6.409v-2.089a4.064,4.064,0,0,0-1.13-2.907,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.018,6.018,0,0,0,1.136,3.869,3.71,3.71,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.114,5.114,0,0,0,2095.178,1367.47Z" style="fill: #fff"/>
        <path d="M2107.911,1374.211a6.532,6.532,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.684,7.684,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.672,6.672,0,0,1,2107.911,1374.211Zm.165-12.927a4.293,4.293,0,0,0-3.446,1.487,6.138,6.138,0,0,0-1.267,4.105,5.794,5.794,0,0,0,1.281,3.971,4.346,4.346,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.1,4.1,0,0,0,2108.076,1361.284Z" style="fill: #fff"/>
        <path d="M2128.165,1373.228a7.318,7.318,0,0,1-3.858.983,6.377,6.377,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.973,6.973,0,0,1,5.332-2.124,7.406,7.406,0,0,1,3.281.691v2.325a5.74,5.74,0,0,0-3.363-1.106,4.533,4.533,0,0,0-3.548,1.556,5.929,5.929,0,0,0-1.385,4.09,5.637,5.637,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2142.993,1373.879h-2.26v-2.243h-.056a4.636,4.636,0,0,1-4.354,2.575q-5.044,0-5.043-6.035v-8.47h2.246v8.11q0,4.485,3.417,4.485a3.451,3.451,0,0,0,2.721-1.225,4.7,4.7,0,0,0,1.069-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2167.589,1373.879h-2.26v-8.139a6.162,6.162,0,0,0-.723-3.4,2.738,2.738,0,0,0-2.433-1.052,3.006,3.006,0,0,0-2.459,1.328,5.094,5.094,0,0,0-1.012,3.184v8.083h-2.261v-8.415q0-4.182-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.173h2.26v2.242h.056a4.787,4.787,0,0,1,4.381-2.574,4.075,4.075,0,0,1,4,2.933,5.032,5.032,0,0,1,4.685-2.933q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2183.2,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2198.331,1373.879h-2.259V1365.8q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2209.135,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388H2200.9v-1.937h2.425v-3.46l2.259-.735v4.195h3.556v1.937h-3.556v7.987a3.329,3.329,0,0,0,.483,2.035,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2222.253,1373.879h-2.259v-2.214h-.055a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.164,2.164,0,0,0,.738,1.695,2.836,2.836,0,0,0,1.963.658,3.619,3.619,0,0,0,2.777-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2233.057,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.259-.735v4.195h3.556v1.937H2229.5v7.987a3.322,3.322,0,0,0,.483,2.035,1.921,1.921,0,0,0,1.6.608,2.363,2.363,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2237.233,1356.107a1.433,1.433,0,0,1-1.034-.415,1.406,1.406,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.455,1.455,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.442,1.442,0,0,1,2237.233,1356.107Zm1.1,17.772h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2248.808,1374.211a6.528,6.528,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,2248.808,1374.211Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2248.973,1361.284Z" style="fill: #fff"/>
        <path d="M2271.158,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2277.483,1370.723l-2.205,6.81h-1.613l1.613-6.81Z" style="fill: #fff"/>
        <path d="M2290.893,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,2290.893,1356.107Zm1.1,17.772h-2.26v-14.173H2292Z" style="fill: #fff"/>
        <path d="M2308.283,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2322.159,1373.228a7.322,7.322,0,0,1-3.859.983,6.377,6.377,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.65,5.65,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2327.835,1373.879h-2.259V1352.9h2.259Z" style="fill: #fff"/>
        <path d="M2343.821,1373.879h-2.26v-2.243h-.056a4.635,4.635,0,0,1-4.354,2.575q-5.044,0-5.043-6.035v-8.47h2.246v8.11q0,4.485,3.417,4.485a3.454,3.454,0,0,0,2.722-1.225,4.706,4.706,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2360.425,1373.879h-2.26v-2.409h-.055a5.679,5.679,0,0,1-9.1.838,7.835,7.835,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.808,5.808,0,0,1,4.7-2.117,4.518,4.518,0,0,1,4.231,2.3h.055V1352.9h2.26Zm-2.26-6.409v-2.089a4.068,4.068,0,0,0-1.129-2.907,3.782,3.782,0,0,0-2.867-1.19,3.9,3.9,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.019,6.019,0,0,0,1.137,3.869,3.707,3.707,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2358.165,1367.47Z" style="fill: #fff"/>
        <path d="M2372.22,1366.876H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1862.045,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.444,1.444,0,0,1,1862.045,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1879.435,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1895.737,1406.759q0,7.807-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.578,7.578,0,0,1-1.6-5.074,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.076,5.076,0,0,0,1893.477,1401.486Z" style="fill: #fff"/>
        <path d="M1941.86,1407.244a7.319,7.319,0,0,1-3.859.982,6.379,6.379,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1951.175,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.632,7.632,0,0,1-1.91,5.432A6.666,6.666,0,0,1,1951.175,1408.226Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.307,6.307,0,0,0-1.178-4.1A4.1,4.1,0,0,0,1951.34,1395.3Z" style="fill: #fff"/>
        <path d="M1973.525,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1987.4,1407.244a7.319,7.319,0,0,1-3.859.982,6.379,6.379,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2002.159,1401.376H1992.2a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2007.891,1405.846h-.056v8.568h-2.259v-20.693h2.259v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.529,5.1,8.812,8.812,0,0,1-1.723,5.7,5.726,5.726,0,0,1-4.712,2.137A4.715,4.715,0,0,1,2007.891,1405.846Zm-.056-5.716v1.979a4.221,4.221,0,0,0,1.137,2.982,4.043,4.043,0,0,0,6.105-.352,7.266,7.266,0,0,0,1.165-4.388,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,3.993,3.993,0,0,0-3.169,1.377A5.074,5.074,0,0,0,2007.835,1400.13Z" style="fill: #fff"/>
        <path d="M2028.712,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2075.7,1407.894h-2.259v-2.408h-.056a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.59-5.184,8.519,8.519,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.774h2.259Zm-2.259-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.851,3.851,0,0,0,3.065-1.371A5.119,5.119,0,0,0,2073.445,1401.486Z" style="fill: #fff"/>
        <path d="M2091.62,1401.376h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2106.129,1393.721l-5.622,14.173h-2.219l-5.345-14.173h2.479l3.583,10.3a9.216,9.216,0,0,1,.5,1.98h.055a9.412,9.412,0,0,1,.441-1.925l3.749-10.353Z" style="fill: #fff"/>
        <path d="M2119.9,1401.376h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.361,4.361,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.381-1.578v2.131a8.155,8.155,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.933,7.933,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.977,5.977,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2125.572,1407.894h-2.26v-20.982h2.26Z" style="fill: #fff"/>
        <path d="M2136.045,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.632,7.632,0,0,1-1.91,5.432A6.666,6.666,0,0,1,2136.045,1408.226Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.307,6.307,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2136.21,1395.3Z" style="fill: #fff"/>
        <path d="M2149,1405.846h-.055v8.568h-2.26v-20.693h2.26v2.492H2149a5.34,5.34,0,0,1,4.878-2.824,5.154,5.154,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.529,5.1,8.817,8.817,0,0,1-1.722,5.7,5.728,5.728,0,0,1-4.712,2.137A4.718,4.718,0,0,1,2149,1405.846Zm-.055-5.716v1.979a4.221,4.221,0,0,0,1.137,2.982,4.042,4.042,0,0,0,6.1-.352,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2148.942,1400.13Z" style="fill: #fff"/>
        <path d="M2183.309,1407.894h-2.26v-8.138a6.164,6.164,0,0,0-.723-3.4,2.741,2.741,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.26v-8.415q0-4.181-3.21-4.18a2.971,2.971,0,0,0-2.454,1.252,5.2,5.2,0,0,0-.964,3.26v8.083h-2.26v-14.173h2.26v2.243h.055a4.789,4.789,0,0,1,4.382-2.575,4.078,4.078,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.658,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2198.921,1401.376h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.583-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2214.051,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2224.855,1407.757a4.359,4.359,0,0,1-2.109.442q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938H2221.3v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2229.94,1404.739l-2.2,6.81h-1.613l1.613-6.81Z" style="fill: #fff"/>
        <path d="M2272.467,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.92,1.92,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2286.826,1401.376h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2299.861,1407.244a7.319,7.319,0,0,1-3.859.982,6.379,6.379,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2314.991,1407.894h-2.26v-8.166q0-4.429-3.279-4.429a3.571,3.571,0,0,0-2.785,1.281,4.784,4.784,0,0,0-1.13,3.287v8.027h-2.259v-20.982h2.259v9.162h.056a5.128,5.128,0,0,1,4.63-2.685q4.769,0,4.768,5.772Z" style="fill: #fff"/>
        <path d="M2330.961,1407.894H2328.7v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.281,4.753,4.753,0,0,0-1.11,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2336.377,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.444,1.444,0,0,1,2336.377,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2351.672,1407.244a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.167,7.167,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.627,6.973,6.973,0,0,1,5.332-2.124,7.407,7.407,0,0,1,3.281.692v2.325a5.741,5.741,0,0,0-3.363-1.107,4.538,4.538,0,0,0-3.549,1.557,5.93,5.93,0,0,0-1.384,4.09,5.641,5.641,0,0,0,1.3,3.931,4.479,4.479,0,0,0,3.494,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2365.19,1407.894h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.613a6.933,6.933,0,0,0-4.6,1.744v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2371.707,1407.894h-2.259v-20.982h2.259Z" style="fill: #fff"/>
        <path d="M1872.931,1441.911h-2.26V1439.5h-.055a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.055v-8.776h2.26Zm-2.26-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.025,6.025,0,0,0,1.136,3.868,3.71,3.71,0,0,0,3.053,1.419,3.855,3.855,0,0,0,3.066-1.37A5.124,5.124,0,0,0,1870.671,1435.5Z" style="fill: #fff"/>
        <path d="M1884.864,1430.035a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.938,4.938,0,0,1,1.474-2.332,3.349,3.349,0,0,1,2.218-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1897.417,1441.911h-2.259V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.165,2.165,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1919.452,1427.737l-4.231,14.174h-2.343l-2.907-10.146a6.667,6.667,0,0,1-.221-1.315h-.054a6.279,6.279,0,0,1-.29,1.287l-3.156,10.174h-2.259l-4.272-14.174h2.37l2.921,10.658a6.515,6.515,0,0,1,.194,1.274h.109a6,6,0,0,1,.248-1.3l3.252-10.63h2.067l2.921,10.686a7.628,7.628,0,0,1,.207,1.273h.111a5.882,5.882,0,0,1,.234-1.273l2.866-10.686Z" style="fill: #fff"/>
        <path d="M1923.227,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,1923.227,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1940.617,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.764,4.764,0,0,0-1.11,3.233v8.083H1928.9v-14.174h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1956.918,1440.776q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.271a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.767,5.767,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.056v-1.966h2.259Zm-2.259-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.736,3.736,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.279,1.529,6.848,6.848,0,0,0-1.186,4.285,5.876,5.876,0,0,0,1.137,3.785,3.665,3.665,0,0,0,3.01,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,1954.659,1435.5Z" style="fill: #fff"/>
        <path d="M1960.638,1441.4v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.261-.505a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.4,3.4,0,0,1,.455-1.765,4.064,4.064,0,0,1,1.212-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.492,4.492,0,0,0,.937.526q.551.236,1.253.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.805,1.1,3.555,3.555,0,0,1,.283,1.481,3.512,3.512,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,1960.638,1441.4Z" style="fill: #fff"/>
        <path d="M1975.535,1438.755l-2.206,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M2001.435,1441.911h-2.26V1439.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2017.406,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2033.376,1441.911h-2.259v-8.083q0-4.514-3.28-4.513a3.551,3.551,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.11,3.233v8.083h-2.26v-14.174h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2043.533,1442.243a6.532,6.532,0,0,1-5-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.761,7.761,0,0,1,1.771,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2043.533,1442.243Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.137,6.137,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2043.7,1429.315Z" style="fill: #fff"/>
        <path d="M2060.715,1441.772a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.733v4.193h3.555v1.938h-3.555v7.987a3.325,3.325,0,0,0,.482,2.034,1.92,1.92,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M2073.833,1441.911h-2.259V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.165,2.165,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2084.637,1441.772a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388H2076.4v-1.938h2.425v-3.46l2.259-.733v4.193h3.556v1.938h-3.556v7.987a3.324,3.324,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2088.813,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2088.813,1424.138Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2100.388,1442.243a6.528,6.528,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,2100.388,1442.243Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.352,4.352,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2100.553,1429.315Z" style="fill: #fff"/>
        <path d="M2122.738,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2126.141,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.261-.505a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.552.236,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.805,1.1,3.555,3.555,0,0,1,.282,1.481,3.512,3.512,0,0,1-.46,1.827,3.968,3.968,0,0,1-1.234,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2126.141,1441.4Z" style="fill: #fff"/>
        <path d="M2141.037,1438.755l-2.2,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M2166.939,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2182.91,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.764,4.764,0,0,0-1.11,3.233v8.083H2171.2v-14.174h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2199.211,1441.911h-2.259V1439.5h-.056a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.59-5.184,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.776h2.259Zm-2.259-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.783,3.783,0,0,0-2.867-1.191,3.9,3.9,0,0,0-3.251,1.523,6.682,6.682,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.707,3.707,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,2196.952,1435.5Z" style="fill: #fff"/>
        <path d="M2225.635,1441.911h-2.26V1439.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2237.251,1430.035a2.747,2.747,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26v-14.174h2.26v2.921h.055a4.947,4.947,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.218-.838,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2251.045,1435.391h-9.963a5.327,5.327,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.209,3.209,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2264.563,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2290.188,1441.26a7.319,7.319,0,0,1-3.859.983,6.373,6.373,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.728,5.728,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2303.705,1441.911h-2.259V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.494,5.494,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2310.223,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2324.416,1441.26a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.166,7.166,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.326a5.728,5.728,0,0,0-3.363-1.108,4.535,4.535,0,0,0-3.548,1.558,5.925,5.925,0,0,0-1.385,4.09,5.636,5.636,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2339.244,1441.911h-2.26v-2.242h-.056a4.639,4.639,0,0,1-4.354,2.574q-5.045,0-5.043-6.035v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.451,3.451,0,0,0,2.721-1.225,4.7,4.7,0,0,0,1.069-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2346.064,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2360.74,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2372.218,1434.907H2364.7v-1.785h7.523Z" style="fill: #fff"/>
        <path d="M1867.433,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1871.609,1458.154a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,1871.609,1458.154Zm1.1,17.772h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M1883.184,1476.258a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.759,7.759,0,0,1,1.77,5.411,7.628,7.628,0,0,1-1.909,5.432A6.667,6.667,0,0,1,1883.184,1476.258Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,1883.349,1463.331Z" style="fill: #fff"/>
        <path d="M1905.534,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1908.937,1475.414v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.587-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.209,3.209,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.407,3.407,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.68,5.68,0,0,1,1.73-.782,7.643,7.643,0,0,1,2-.262,8.073,8.073,0,0,1,3.279.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526c.368.156.785.327,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.55,3.55,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.965,3.965,0,0,1-1.233,1.287,5.628,5.628,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,1908.937,1475.414Z" style="fill: #fff"/>
        <path d="M1922.552,1476.231a1.459,1.459,0,0,1-1.082-.457,1.506,1.506,0,0,1-.448-1.094,1.53,1.53,0,0,1,.448-1.1,1.449,1.449,0,0,1,1.082-.463,1.485,1.485,0,0,1,1.1.463,1.52,1.52,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.551Z" style="fill: #fff"/>
        <path d="M1961.219,1475.926h-2.562l-2.1-5.564h-8.378l-1.971,5.564h-2.577l7.579-19.848h2.4Zm-5.415-7.654-3.1-8.457a7.908,7.908,0,0,1-.3-1.329h-.056a7.5,7.5,0,0,1-.316,1.329l-3.074,8.457Z" style="fill: #fff"/>
        <path d="M1966.139,1473.878h-.056v2.048h-2.259v-20.983h2.259v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.251,1.9,7.882,7.882,0,0,1,1.536,5.1,8.809,8.809,0,0,1-1.723,5.7,5.72,5.72,0,0,1-4.711,2.138A4.636,4.636,0,0,1,1966.139,1473.878Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.045,4.045,0,0,0,6.105-.354,7.262,7.262,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.708,3.6,3.6,0,0,0-2.949-1.343,3.993,3.993,0,0,0-3.169,1.377A5.074,5.074,0,0,0,1966.083,1468.162Z" style="fill: #fff"/>
        <path d="M1982.674,1475.926h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M1998.59,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.214,5.214,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2026.289,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2035.205,1476.258a6.529,6.529,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.688,7.688,0,0,1,1.943-5.579,6.97,6.97,0,0,1,5.25-2.006,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2035.205,1476.258Zm.166-12.927a4.291,4.291,0,0,0-3.446,1.488,6.128,6.128,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.453,4.125,4.125,0,0,0,3.369-1.425,6.209,6.209,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.108,4.108,0,0,0,2035.371,1463.331Z" style="fill: #fff"/>
        <path d="M2073.679,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.709,8.709,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2089.65,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2104.008,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2110.526,1475.926h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2126.331,1461.753l-6.49,16.443q-1.735,4.4-4.878,4.4a5.147,5.147,0,0,1-1.474-.179v-2.035a4.173,4.173,0,0,0,1.337.249,2.774,2.774,0,0,0,2.563-2.048l1.13-2.686-5.512-14.145h2.508l3.816,10.907q.069.208.29,1.079h.083q.067-.332.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M2138.595,1462.4l-8.35,11.584h8.267v1.938h-11.588v-.706l8.35-11.529h-7.565v-1.938h10.886Z" style="fill: #fff"/>
        <path d="M2152.857,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.354,4.354,0,0,0,3.334,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2183.849,1462.4l-8.351,11.584h8.268v1.938h-11.588v-.706l8.35-11.529h-7.565v-1.938h10.886Z" style="fill: #fff"/>
        <path d="M2192.668,1476.258a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.692,7.692,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.312,6.312,0,0,1,4.927,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2192.668,1476.258Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.128,6.128,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.345,4.345,0,0,0,3.431,1.453,4.126,4.126,0,0,0,3.37-1.425,6.209,6.209,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.108,4.108,0,0,0,2192.833,1463.331Z" style="fill: #fff"/>
        <path d="M2215.018,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2220.434,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,2220.434,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2237.824,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2254.125,1474.792q0,7.806-7.441,7.805a9.952,9.952,0,0,1-4.574-1v-2.27a9.37,9.37,0,0,0,4.547,1.329q5.208,0,5.209-5.565v-1.549h-.056a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.769,5.769,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.056v-1.965h2.259Zm-2.259-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.914,3.914,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.662,3.662,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,2251.866,1469.518Z" style="fill: #fff"/>
        <path d="M2283.794,1464.05a2.756,2.756,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.372,6.358,6.358,0,0,0-.971,3.736v7.225h-2.26v-14.173h2.26v2.921h.055a4.951,4.951,0,0,1,1.475-2.333,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2297.588,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.208,3.208,0,0,0-2.583-1.093,3.643,3.643,0,0,0-2.714,1.148,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2313.049,1482.445h-2.26v-8.955h-.055a5.052,5.052,0,0,1-4.822,2.768,5.3,5.3,0,0,1-4.266-1.9,7.784,7.784,0,0,1-1.605-5.183,8.506,8.506,0,0,1,1.764-5.64,5.86,5.86,0,0,1,4.74-2.111,4.446,4.446,0,0,1,4.189,2.3h.055v-1.965h2.26Zm-2.26-12.9v-2.063a4.134,4.134,0,0,0-1.136-2.948,3.8,3.8,0,0,0-2.888-1.2,3.874,3.874,0,0,0-3.224,1.515,6.784,6.784,0,0,0-1.185,4.271,5.882,5.882,0,0,0,1.143,3.841,3.649,3.649,0,0,0,2.95,1.39,3.967,3.967,0,0,0,3.162-1.363A5.075,5.075,0,0,0,2310.789,1469.546Z" style="fill: #fff"/>
        <path d="M2329.034,1475.926h-2.26v-2.242h-.056a4.637,4.637,0,0,1-4.354,2.574q-5.044,0-5.043-6.035v-8.47h2.246v8.111q0,4.484,3.417,4.484a3.45,3.45,0,0,0,2.721-1.224,4.7,4.7,0,0,0,1.069-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2334.752,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2334.752,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2347.787,1464.05a2.754,2.754,0,0,0-1.708-.457,2.879,2.879,0,0,0-2.418,1.372,6.351,6.351,0,0,0-.972,3.736v7.225h-2.26v-14.173h2.26v2.921h.056a4.942,4.942,0,0,1,1.474-2.333,3.353,3.353,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2361.581,1469.407h-9.962a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2372.219,1468.923H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1880.923,1509.942h-2.26V1501.8a6.166,6.166,0,0,0-.723-3.405,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242h.056a4.791,4.791,0,0,1,4.381-2.574,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.659,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M1896.536,1503.423h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1911.665,1509.942h-2.259v-8.083q0-4.514-3.28-4.513a3.549,3.549,0,0,0-2.8,1.281,4.754,4.754,0,0,0-1.11,3.232v8.083h-2.259v-14.174h2.259v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M1922.469,1509.8a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153v-8.387h-2.425v-1.939h2.425v-3.46l2.259-.733v4.193h3.556v1.939h-3.556v7.986a3.324,3.324,0,0,0,.483,2.034,1.92,1.92,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1924.632,1509.429v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547q-.585-.242-1.26-.505a16.089,16.089,0,0,1-1.647-.754,4.974,4.974,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.066,4.066,0,0,1,1.213-1.287,5.651,5.651,0,0,1,1.729-.782,7.644,7.644,0,0,1,2-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.493,4.493,0,0,0,.937.527q.551.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.8,1.1,3.55,3.55,0,0,1,.283,1.48,3.51,3.51,0,0,1-.461,1.827,3.958,3.958,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.968,7.968,0,0,1,1924.632,1509.429Z" style="fill: #fff"/>
        <path d="M1955.292,1509.942h-2.259v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.614-2.908-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.72,8.72,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.169,2.169,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.964.657,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1971.263,1509.942H1969v-8.083q0-4.514-3.279-4.513a3.552,3.552,0,0,0-2.8,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.31,4.31,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M1987.565,1509.942h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.831,7.831,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.12,5.12,0,0,0,1985.305,1503.534Z" style="fill: #fff"/>
        <path d="M2002.185,1507.893h-.056v8.568h-2.259v-20.693h2.259v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.907,7.907,0,0,1,1.529,5.1,8.806,8.806,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.712,2.139A4.716,4.716,0,0,1,2002.185,1507.893Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.739,5.739,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.95-1.343,3.993,3.993,0,0,0-3.168,1.377A5.076,5.076,0,0,0,2002.129,1502.177Z" style="fill: #fff"/>
        <path d="M2023.819,1498.066a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.356,3.356,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M2037.613,1503.423h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2040.175,1509.429v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547q-.585-.242-1.26-.505a16.089,16.089,0,0,1-1.647-.754,4.974,4.974,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.066,4.066,0,0,1,1.213-1.287,5.651,5.651,0,0,1,1.729-.782,7.644,7.644,0,0,1,2.005-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.493,4.493,0,0,0,.937.527q.55.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.8,1.1,3.55,3.55,0,0,1,.283,1.48,3.51,3.51,0,0,1-.461,1.827,3.958,3.958,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.968,7.968,0,0,1,2040.175,1509.429Z" style="fill: #fff"/>
        <path d="M2064.345,1503.423h-9.963a5.32,5.32,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.868-5.392,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.094,3.643,3.643,0,0,0-2.714,1.149,5.214,5.214,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2079.475,1509.942h-2.26v-8.083q0-4.514-3.279-4.513a3.552,3.552,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.056a5.088,5.088,0,0,1,4.629-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2090.279,1509.8a4.349,4.349,0,0,1-2.109.444q-3.707,0-3.707-4.153v-8.387h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.556v1.939h-3.556v7.986a3.325,3.325,0,0,0,.482,2.034,1.923,1.923,0,0,0,1.6.61,2.378,2.378,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2110.645,1509.292a7.327,7.327,0,0,1-3.858.982,6.374,6.374,0,0,1-4.872-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.693v2.325a5.728,5.728,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.639,5.639,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2119.96,1510.274a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.267,7.689,7.689,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.771,5.411,7.635,7.635,0,0,1-1.909,5.433A6.674,6.674,0,0,1,2119.96,1510.274Zm.165-12.928a4.288,4.288,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.345,4.345,0,0,0,3.431,1.453,4.126,4.126,0,0,0,3.37-1.426,6.208,6.208,0,0,0,1.177-4.056,6.314,6.314,0,0,0-1.177-4.1A4.109,4.109,0,0,0,2120.125,1497.346Z" style="fill: #fff"/>
        <path d="M2150.633,1509.942h-2.26V1501.8a6.166,6.166,0,0,0-.723-3.405,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242h.055a4.792,4.792,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.657,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2157.22,1507.893h-.056v8.568h-2.259v-20.693h2.259v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.907,7.907,0,0,1,1.529,5.1,8.806,8.806,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.711,2.139A4.717,4.717,0,0,1,2157.22,1507.893Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.739,5.739,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,3.993,3.993,0,0,0-3.169,1.377A5.076,5.076,0,0,0,2157.164,1502.177Z" style="fill: #fff"/>
        <path d="M2173.755,1509.942H2171.5v-20.983h2.259Z" style="fill: #fff"/>
        <path d="M2179.489,1492.17a1.432,1.432,0,0,1-1.035-.415,1.406,1.406,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,2179.489,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2195.266,1509.942h-2.26v-2.215h-.054a4.73,4.73,0,0,1-4.341,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.614-2.907-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.723,8.723,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2211.237,1509.942h-2.26v-8.083q0-4.514-3.279-4.513a3.551,3.551,0,0,0-2.8,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2222.04,1509.8a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153v-8.387H2213.8v-1.939h2.425v-3.46l2.26-.733v4.193h3.555v1.939h-3.555v7.986a3.325,3.325,0,0,0,.482,2.034,1.921,1.921,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2235.1,1507.893h-.056v8.568h-2.26v-20.693h2.26v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.907,7.907,0,0,1,1.529,5.1,8.806,8.806,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.712,2.139A4.716,4.716,0,0,1,2235.1,1507.893Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.257,7.257,0,0,0,1.165-4.388,5.738,5.738,0,0,0-1.088-3.709,3.6,3.6,0,0,0-2.95-1.343,4,4,0,0,0-3.169,1.377A5.08,5.08,0,0,0,2235.048,1502.177Z" style="fill: #fff"/>
        <path d="M2256.738,1498.066a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.354,3.354,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M2265.089,1510.274a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.771,5.411,7.631,7.631,0,0,1-1.91,5.433A6.67,6.67,0,0,1,2265.089,1510.274Zm.165-12.928a4.288,4.288,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.345,4.345,0,0,0,3.431,1.453,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.308,6.308,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2265.254,1497.346Z" style="fill: #fff"/>
        <path d="M2278.041,1507.893h-.055v8.568h-2.26v-20.693h2.26v2.492h.055a5.342,5.342,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.529,5.1,8.811,8.811,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.719,4.719,0,0,1,2278.041,1507.893Zm-.055-5.716v1.979a4.229,4.229,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.733,5.733,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.075,5.075,0,0,0,2277.986,1502.177Z" style="fill: #fff"/>
        <path d="M2298.215,1510.274a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.771,5.411,7.631,7.631,0,0,1-1.91,5.433A6.67,6.67,0,0,1,2298.215,1510.274Zm.165-12.928a4.288,4.288,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.345,4.345,0,0,0,3.431,1.453,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.308,6.308,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2298.38,1497.346Z" style="fill: #fff"/>
        <path d="M2308,1509.429v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.744,1.744,0,0,0-.254-.962,2.542,2.542,0,0,0-.69-.7,5.32,5.32,0,0,0-1.019-.547q-.587-.242-1.261-.505a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.171,4.171,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.95,1.95,0,0,0,.2.927,2.033,2.033,0,0,0,.586.664,4.519,4.519,0,0,0,.937.527q.55.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.81,5.81,0,0,1,1.268.858,3.364,3.364,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2308,1509.429Z" style="fill: #fff"/>
        <path d="M2330.927,1509.942h-2.26v-2.215h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.614-2.907-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.718,8.718,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2337.445,1509.942h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2341.165,1509.429v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.744,1.744,0,0,0-.254-.962,2.542,2.542,0,0,0-.69-.7,5.32,5.32,0,0,0-1.019-.547q-.586-.242-1.261-.505a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.171,4.171,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.95,1.95,0,0,0,.2.927,2.033,2.033,0,0,0,.586.664,4.519,4.519,0,0,0,.937.527q.55.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.81,5.81,0,0,1,1.268.858,3.364,3.364,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2341.165,1509.429Z" style="fill: #fff"/>
        <path d="M2354.781,1510.247a1.461,1.461,0,0,1-1.082-.457,1.507,1.507,0,0,1-.449-1.094,1.533,1.533,0,0,1,.449-1.1,1.452,1.452,0,0,1,1.082-.463,1.488,1.488,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.551Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="technical_5_text">
      <g>
        <path d="M1871.663,1373.879h-10.472v-19.848h10.031v2.1h-7.717v6.6h7.138v2.09h-7.138v6.948h8.158Z" style="fill: #fff"/>
        <path d="M1886.875,1373.879h-2.259V1365.8q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M1897.679,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.259-.735v4.195h3.556v1.937h-3.556v7.987a3.329,3.329,0,0,0,.483,2.035,1.921,1.921,0,0,0,1.6.608,2.363,2.363,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1908.055,1362a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.972,3.737v7.225H1900.7v-14.173h2.259v2.92h.056a4.945,4.945,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.217-.837,3.683,3.683,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M1921.739,1359.706l-6.491,16.443q-1.736,4.4-4.877,4.4a5.151,5.151,0,0,1-1.475-.18v-2.034a4.178,4.178,0,0,0,1.337.249,2.774,2.774,0,0,0,2.563-2.048l1.13-2.686-5.512-14.145h2.508l3.817,10.906q.069.208.289,1.08h.083q.069-.333.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M1931.384,1366.876h-7.523v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1937.708,1373.879h-2.259V1352.9h2.259Z" style="fill: #fff"/>
        <path d="M1953.624,1367.36h-9.962a5.315,5.315,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1968.134,1359.706l-5.622,14.173h-2.219l-5.345-14.173h2.479l3.583,10.3a9.209,9.209,0,0,1,.5,1.979h.055a9.427,9.427,0,0,1,.441-1.925l3.748-10.352Z" style="fill: #fff"/>
        <path d="M1981.9,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1987.577,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M2011.929,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.16,8.16,0,0,1-4.919,1.357,5.955,5.955,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.762,7.762,0,0,1,1.868-5.39,5.972,5.972,0,0,1,4.636-2.083,5.291,5.291,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.217,5.217,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2025.654,1359.706l-4.741,7.17,4.658,7h-2.632l-2.77-4.595c-.174-.286-.382-.647-.62-1.08h-.054q-.07.125-.649,1.08l-2.824,4.595h-2.605l4.809-6.949-4.6-7.224h2.632l2.728,4.843q.3.542.593,1.108h.055l3.528-5.951Z" style="fill: #fff"/>
        <path d="M2030.615,1371.831h-.056v8.567h-2.26v-20.692h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.153,5.153,0,0,1,4.257,1.9,7.905,7.905,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2030.615,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.73,5.73,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,2030.559,1366.114Z" style="fill: #fff"/>
        <path d="M2056.231,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.356,4.356,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.381-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2067.006,1362a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2070.618,1356.107a1.436,1.436,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.48,1.451,1.451,0,0,1,1.053.422,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,2070.618,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2087.635,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.16,8.16,0,0,1-4.919,1.357,5.956,5.956,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.868-5.39,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2102.765,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.629-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2116.641,1373.228a7.318,7.318,0,0,1-3.858.983,6.377,6.377,0,0,1-4.871-1.972,7.165,7.165,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.537,4.537,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2131.4,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.355,4.355,0,0,0,3.334,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2144.41,1356.107a1.436,1.436,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.48,1.451,1.451,0,0,1,1.053.422,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,2144.41,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2161.8,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2184.112,1373.228a7.319,7.319,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2193.427,1374.211a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,2193.427,1374.211Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.282,3.971,4.346,4.346,0,0,0,3.431,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2193.592,1361.284Z" style="fill: #fff"/>
        <path d="M2215.777,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.055a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2229.653,1373.228a7.319,7.319,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2244.411,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2250.143,1371.831h-.056v8.567h-2.259v-20.692h2.259v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.156,5.156,0,0,1,4.258,1.9,7.911,7.911,0,0,1,1.529,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2250.143,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.261,7.261,0,0,0,1.165-4.387,5.736,5.736,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.95-1.342,3.993,3.993,0,0,0-3.168,1.377A5.071,5.071,0,0,0,2250.087,1366.114Z" style="fill: #fff"/>
        <path d="M2270.964,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.555v1.937h-3.555v7.987a3.33,3.33,0,0,0,.482,2.035,1.923,1.923,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2285.392,1373.879h-2.26v-2.243h-.055a4.638,4.638,0,0,1-4.355,2.575q-5.043,0-5.043-6.035v-8.47h2.246v8.11q0,4.485,3.417,4.485a3.453,3.453,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2300.053,1373.879h-2.26v-2.214h-.054a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.709,8.709,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.62,3.62,0,0,0,2.777-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2306.571,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M2312.3,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,2312.3,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2327.82,1360.356l-8.351,11.585h8.268v1.938h-11.588v-.706l8.349-11.53h-7.564v-1.937h10.886Z" style="fill: #fff"/>
        <path d="M2331.9,1356.107a1.433,1.433,0,0,1-1.034-.415,1.406,1.406,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.455,1.455,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.442,1.442,0,0,1,2331.9,1356.107Zm1.1,17.772h-2.259v-14.173H2333Z" style="fill: #fff"/>
        <path d="M2349.288,1373.879h-2.259V1365.8q0-4.512-3.28-4.512a3.552,3.552,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2365.59,1372.744q0,7.806-7.441,7.806a9.939,9.939,0,0,1-4.574-1v-2.269a9.354,9.354,0,0,0,4.546,1.328q5.209,0,5.209-5.563V1371.5h-.055a5.695,5.695,0,0,1-9.088.824,7.576,7.576,0,0,1-1.605-5.073,8.854,8.854,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.594,4.594,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.089a4.064,4.064,0,0,0-1.136-2.893,3.736,3.736,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.841,6.841,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.137,3.786,3.664,3.664,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,2363.33,1367.47Z" style="fill: #fff"/>
        <path d="M2372.232,1370.723l-2.2,6.81h-1.613l1.613-6.81Z" style="fill: #fff"/>
        <path d="M1872.931,1407.894h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,1870.671,1401.486Z" style="fill: #fff"/>
        <path d="M1884.864,1396.019a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.354,6.354,0,0,0-.972,3.738v7.224h-2.26v-14.173h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.358,3.358,0,0,1,2.218-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1897.417,1407.894h-2.259v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.842,2.842,0,0,0,1.964.658,3.616,3.616,0,0,0,2.776-1.184,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1908.648,1388.905a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.307v1.938h-3.307v12.235h-2.246v-12.235h-2.411v-1.938h2.411v-2.3a4.788,4.788,0,0,1,1.281-3.523,4.319,4.319,0,0,1,3.2-1.294,4.41,4.41,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M1917.054,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938H1913.5v7.986a3.327,3.327,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1921.23,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,1921.23,1390.123Zm1.1,17.771h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M1938.62,1407.894h-2.26v-8.083q0-4.512-3.28-4.512a3.55,3.55,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.11,3.231v8.083h-2.259v-14.173h2.259v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1954.921,1406.759q0,7.807-7.441,7.807a9.939,9.939,0,0,1-4.574-1v-2.27a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.579,7.579,0,0,1-1.605-5.074,8.858,8.858,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.056v-1.965h2.259Zm-2.259-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.28,1.53,6.839,6.839,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.072,5.072,0,0,0,1952.662,1401.486Z" style="fill: #fff"/>
        <path d="M1961.563,1404.739l-2.205,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M1995.046,1407.894h-2.259v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.717,8.717,0,0,1,4.795-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.658,3.616,3.616,0,0,0,2.777-1.184,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2011.017,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2027.319,1407.894h-2.26v-2.408H2025a5.68,5.68,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.119,5.119,0,0,0,2025.059,1401.486Z" style="fill: #fff"/>
        <path d="M2061.325,1407.894h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.613a6.931,6.931,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2077.3,1407.894h-2.259v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.281,4.753,4.753,0,0,0-1.11,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2093.266,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2103.422,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.632,7.632,0,0,1-1.91,5.432A6.666,6.666,0,0,1,2103.422,1408.226Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.307,6.307,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2103.587,1395.3Z" style="fill: #fff"/>
        <path d="M2120.605,1407.757a4.359,4.359,0,0,1-2.109.442q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2133.723,1407.894h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.625,4.625,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.716,8.716,0,0,1,4.794-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.658,3.618,3.618,0,0,0,2.777-1.184,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2144.527,1407.757a4.361,4.361,0,0,1-2.109.442q-3.706,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2148.7,1390.123a1.436,1.436,0,0,1-1.035-.415,1.41,1.41,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.442,1.442,0,0,1,2148.7,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2166.092,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2182.394,1406.759q0,7.807-7.441,7.807a9.943,9.943,0,0,1-4.575-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.551h-.055a5.7,5.7,0,0,1-9.088.825,7.573,7.573,0,0,1-1.605-5.074,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.273v-2.09A4.061,4.061,0,0,0,2179,1396.5a3.735,3.735,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.136,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.071,5.071,0,0,0,2180.134,1401.486Z" style="fill: #fff"/>
        <path d="M2221.9,1407.894h-2.563l-2.094-5.563h-8.378l-1.971,5.563h-2.577l7.579-19.847h2.4Zm-5.415-7.654-3.1-8.456a8.141,8.141,0,0,1-.3-1.329h-.055a7.425,7.425,0,0,1-.317,1.329l-3.073,8.456Z" style="fill: #fff"/>
        <path d="M2225.289,1408.2a1.46,1.46,0,0,1-1.082-.457,1.508,1.508,0,0,1-.448-1.093,1.531,1.531,0,0,1,.448-1.1,1.448,1.448,0,0,1,1.082-.464,1.482,1.482,0,0,1,1.1.464,1.513,1.513,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.55Z" style="fill: #fff"/>
        <path d="M2238.889,1408.226a8.652,8.652,0,0,1-6.73-2.781,10.343,10.343,0,0,1-2.53-7.239,10.969,10.969,0,0,1,2.577-7.641,8.982,8.982,0,0,1,7.014-2.85,8.46,8.46,0,0,1,6.594,2.767,10.388,10.388,0,0,1,2.5,7.239,11,11,0,0,1-2.564,7.682A8.81,8.81,0,0,1,2238.889,1408.226Zm.166-18.408a6.361,6.361,0,0,0-5.058,2.256,10.073,10.073,0,0,0-.047,11.827,6.165,6.165,0,0,0,4.939,2.235,6.479,6.479,0,0,0,5.127-2.13,8.742,8.742,0,0,0,1.874-5.966,9.128,9.128,0,0,0-1.819-6.076A6.224,6.224,0,0,0,2239.055,1389.818Z" style="fill: #fff"/>
        <path d="M2252.683,1408.2a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.093,1.527,1.527,0,0,1,.448-1.1,1.447,1.447,0,0,1,1.082-.464,1.482,1.482,0,0,1,1.1.464,1.517,1.517,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.55Z" style="fill: #fff"/>
        <path d="M2276.493,1407.382v-2.436a6.666,6.666,0,0,0,4.065,1.371q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.587-.242-1.261-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.2,3.2,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.058,8.058,0,0,1,3.28.637v2.3a6.372,6.372,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.872,1.872,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.018,2.018,0,0,0,.585.664,4.386,4.386,0,0,0,.937.527q.551.236,1.254.512a17.457,17.457,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.857,3.375,3.375,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,2276.493,1407.382Z" style="fill: #fff"/>
        <path d="M2300.732,1407.894h-2.26v-2.242h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.043,0-5.043-6.034v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.451,3.451,0,0,0,2.722-1.226,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2307.608,1405.846h-.056v2.048h-2.26v-20.982h2.26v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.251,1.9,7.879,7.879,0,0,1,1.536,5.1,8.812,8.812,0,0,1-1.723,5.7,5.727,5.727,0,0,1-4.712,2.137A4.635,4.635,0,0,1,2307.608,1405.846Zm-.056-5.716v1.979a4.221,4.221,0,0,0,1.137,2.982,4.042,4.042,0,0,0,6.1-.352,7.259,7.259,0,0,0,1.165-4.388,5.739,5.739,0,0,0-1.088-3.71,3.6,3.6,0,0,0-2.95-1.342,4,4,0,0,0-3.169,1.377A5.078,5.078,0,0,0,2307.552,1400.13Z" style="fill: #fff"/>
        <path d="M2341.919,1407.894h-2.259v-8.138a6.163,6.163,0,0,0-.724-3.4,2.739,2.739,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.183v8.083h-2.261v-8.415q0-4.181-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.173h2.26v2.243h.056a4.789,4.789,0,0,1,4.381-2.575,4.08,4.08,0,0,1,4,2.934,5.031,5.031,0,0,1,4.684-2.934q4.659,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2347.349,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2347.349,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2352.171,1407.382v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.045,4.045,0,0,1,1.213-1.287,5.651,5.651,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.053,8.053,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.167,4.167,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.386,4.386,0,0,0,.937.527q.55.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.832,5.832,0,0,1,1.268.857,3.389,3.389,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,2352.171,1407.382Z" style="fill: #fff"/>
        <path d="M2372.221,1400.891H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1860.033,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.559,2.559,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.546q-.587-.243-1.261-.505a15.967,15.967,0,0,1-1.646-.754,4.956,4.956,0,0,1-1.186-.859,3.184,3.184,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.654,1.654,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.236,1.254.512a17.464,17.464,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.964,7.964,0,0,1,1860.033,1441.4Z" style="fill: #fff"/>
        <path d="M1874.02,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,1874.02,1424.138Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M1885.6,1442.243a6.528,6.528,0,0,1-5-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,1885.6,1442.243Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.348,4.348,0,0,0,3.431,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,1885.76,1429.315Z" style="fill: #fff"/>
        <path d="M1907.945,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1911.348,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.261-.505a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.552.236,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.805,1.1,3.555,3.555,0,0,1,.282,1.481,3.512,3.512,0,0,1-.46,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,1911.348,1441.4Z" style="fill: #fff"/>
        <path d="M1924.963,1442.215a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.093,1.532,1.532,0,0,1,.448-1.1,1.453,1.453,0,0,1,1.082-.463,1.489,1.489,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.55Z" style="fill: #fff"/>
        <path d="M1958.871,1441.08a11.547,11.547,0,0,1-5.457,1.163,8.779,8.779,0,0,1-6.752-2.727,10.09,10.09,0,0,1-2.536-7.156,10.573,10.573,0,0,1,2.853-7.695,9.659,9.659,0,0,1,7.234-2.935,11.563,11.563,0,0,1,4.658.817v2.477a9.416,9.416,0,0,0-4.685-1.189,7.172,7.172,0,0,0-5.519,2.283,8.625,8.625,0,0,0-2.115,6.1,8.208,8.208,0,0,0,1.978,5.78,6.713,6.713,0,0,0,5.187,2.152,9.7,9.7,0,0,0,5.154-1.329Z" style="fill: #fff"/>
        <path d="M1972.692,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1979.265,1439.862h-.056v8.567h-2.259v-20.692h2.259v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.258,1.9,7.912,7.912,0,0,1,1.529,5.1,8.808,8.808,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.711,2.139A4.717,4.717,0,0,1,1979.265,1439.862Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.737,5.737,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,3.993,3.993,0,0,0-3.169,1.377A5.074,5.074,0,0,0,1979.209,1434.146Z" style="fill: #fff"/>
        <path d="M2003.641,1441.911h-2.26V1439.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2010.214,1439.862h-.055v2.049h-2.26v-20.984h2.26v9.3h.055a5.34,5.34,0,0,1,4.878-2.824,5.163,5.163,0,0,1,4.251,1.9,7.879,7.879,0,0,1,1.536,5.1,8.813,8.813,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.637,4.637,0,0,1,2010.214,1439.862Zm-.055-5.716v1.979a4.224,4.224,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2010.159,1434.146Z" style="fill: #fff"/>
        <path d="M2026.749,1441.911h-2.259v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M2042.665,1435.391H2032.7a5.322,5.322,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2066.8,1442.243a6.528,6.528,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,2066.8,1442.243Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.352,4.352,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2066.969,1429.315Z" style="fill: #fff"/>
        <path d="M2084.413,1422.921a3,3,0,0,0-1.5-.374q-2.371,0-2.371,3v2.187h3.308v1.938h-3.308v12.236H2078.3v-12.236h-2.411v-1.938h2.411v-2.3a4.785,4.785,0,0,1,1.282-3.522,4.31,4.31,0,0,1,3.2-1.295,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M2111.2,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2122.814,1430.035a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.932,4.932,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2136.608,1435.391h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2150.125,1441.911h-2.259V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.165,2.165,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2178.825,1441.26a7.322,7.322,0,0,1-3.859.983,6.37,6.37,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.728,5.728,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.644,5.644,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2192.342,1441.911h-2.26V1439.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2198.86,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2213.053,1441.26a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.725,5.725,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.384,4.09,5.64,5.64,0,0,0,1.3,3.93,4.477,4.477,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2227.88,1441.911h-2.259v-2.242h-.056a4.64,4.64,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.453,3.453,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.069-3.2v-8.167h2.259Z" style="fill: #fff"/>
        <path d="M2234.7,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2249.376,1441.911h-2.259V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.165,2.165,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2260.18,1441.772a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.733v4.193h3.556v1.938h-3.556v7.987a3.324,3.324,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2264.356,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2264.356,1424.138Zm1.1,17.773H2263.2v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2275.931,1442.243a6.528,6.528,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,2275.931,1442.243Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2276.1,1429.315Z" style="fill: #fff"/>
        <path d="M2298.281,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2301.684,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546c-.391-.162-.81-.33-1.261-.505a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.552.236,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.8,1.1,3.555,3.555,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2301.684,1441.4Z" style="fill: #fff"/>
        <path d="M2339.436,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2355.407,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2371.708,1441.911h-2.259V1439.5h-.056a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.59-5.184,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.776h2.259Zm-2.259-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.708,3.708,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,2369.449,1435.5Z" style="fill: #fff"/>
        <path d="M1863.2,1473.878h-.056v8.567h-2.26v-20.692h2.26v2.492h.056a5.337,5.337,0,0,1,4.877-2.824,5.156,5.156,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.715,4.715,0,0,1,1863.2,1473.878Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.262,7.262,0,0,0,1.165-4.388,5.728,5.728,0,0,0-1.089-3.708,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,1863.147,1468.162Z" style="fill: #fff"/>
        <path d="M1884.836,1464.05a2.756,2.756,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.372,6.358,6.358,0,0,0-.971,3.736v7.225h-2.26v-14.173h2.26v2.921h.055a4.951,4.951,0,0,1,1.475-2.333,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1898.63,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1901.193,1475.414v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.345,5.345,0,0,0-1.019-.547q-.586-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.68,5.68,0,0,1,1.73-.782,7.641,7.641,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.551.234,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.965,3.965,0,0,1-1.233,1.287,5.638,5.638,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,1901.193,1475.414Z" style="fill: #fff"/>
        <path d="M1925.363,1469.407H1915.4a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1940.493,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1951.3,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1955.472,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,1955.472,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1972.862,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1989.163,1474.792q0,7.806-7.441,7.805a9.955,9.955,0,0,1-4.574-1v-2.27a9.37,9.37,0,0,0,4.547,1.329q5.208,0,5.209-5.565v-1.549h-.056a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.77,5.77,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.259Zm-2.259-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.914,3.914,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.069,5.069,0,0,0,1986.9,1469.518Z" style="fill: #fff"/>
        <path d="M2003.784,1473.878h-.056v8.567h-2.26v-20.692h2.26v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.155,5.155,0,0,1,4.257,1.9,7.9,7.9,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.722,5.722,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2003.784,1473.878Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.255,7.255,0,0,0,1.165-4.388,5.728,5.728,0,0,0-1.089-3.708,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2003.728,1468.162Z" style="fill: #fff"/>
        <path d="M2025.417,1464.05a2.754,2.754,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.372,6.358,6.358,0,0,0-.971,3.736v7.225h-2.26v-14.173h2.26v2.921h.055a4.951,4.951,0,0,1,1.475-2.333,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2033.769,1476.258a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.764,7.764,0,0,1,1.77,5.411,7.628,7.628,0,0,1-1.909,5.432A6.667,6.667,0,0,1,2033.769,1476.258Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2033.934,1463.331Z" style="fill: #fff"/>
        <path d="M2046.665,1475.331a8.913,8.913,0,0,1-1.4,5.378,4.684,4.684,0,0,1-4,1.888,4.235,4.235,0,0,1-1.874-.442v-2.118a3.732,3.732,0,0,0,1.93.623q3.085,0,3.086-4.955v-13.952h2.259Zm-1.1-17.177a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,2045.564,1458.154Z" style="fill: #fff"/>
        <path d="M2062.581,1469.407h-9.962a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2075.617,1475.276a7.331,7.331,0,0,1-3.859.982,6.373,6.373,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.927,5.927,0,0,0-1.385,4.09,5.644,5.644,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.439,5.649,5.649,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M2085.579,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2103.3,1456.936a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308v12.235h-2.246v-12.235h-2.411v-1.938h2.411v-2.3a4.791,4.791,0,0,1,1.281-3.523,4.318,4.318,0,0,1,3.2-1.3,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M2116.5,1469.407h-9.963a5.323,5.323,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2130.019,1475.926h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2133.422,1475.414v-2.436a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.241-1.26-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.059,4.059,0,0,1,1.213-1.288,5.674,5.674,0,0,1,1.729-.782,7.649,7.649,0,0,1,2-.262,8.07,8.07,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.206,4.206,0,0,0-1.144.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.835,5.835,0,0,1,1.268.858,3.372,3.372,0,0,1,.805,1.1,3.55,3.55,0,0,1,.283,1.48,3.513,3.513,0,0,1-.461,1.828,3.978,3.978,0,0,1-1.234,1.287,5.618,5.618,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.98,7.98,0,0,1,2133.422,1475.414Z" style="fill: #fff"/>
        <path d="M2147.41,1458.154a1.432,1.432,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,2147.41,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2155.4,1473.878h-.056v2.048h-2.26v-20.983h2.26v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.163,5.163,0,0,1,4.251,1.9,7.882,7.882,0,0,1,1.536,5.1,8.809,8.809,0,0,1-1.723,5.7,5.722,5.722,0,0,1-4.712,2.138A4.635,4.635,0,0,1,2155.4,1473.878Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.255,7.255,0,0,0,1.165-4.388,5.728,5.728,0,0,0-1.089-3.708,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2155.346,1468.162Z" style="fill: #fff"/>
        <path d="M2170.835,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2170.835,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2178.772,1475.926h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2184.505,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2184.505,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2196.728,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.708-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2210.976,1461.753l-6.49,16.443q-1.735,4.4-4.878,4.4a5.159,5.159,0,0,1-1.475-.179v-2.035a4.183,4.183,0,0,0,1.337.249,2.775,2.775,0,0,0,2.564-2.048l1.129-2.686-5.511-14.145h2.508l3.816,10.907q.069.208.289,1.079h.083q.069-.332.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M2212.492,1476.231a1.457,1.457,0,0,1-1.082-.457,1.507,1.507,0,0,1-.449-1.094,1.531,1.531,0,0,1,.449-1.1,1.448,1.448,0,0,1,1.082-.463,1.484,1.484,0,0,1,1.1.463,1.516,1.516,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.551Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="technical_4_text">
      <text transform="translate(1858.6 1356.169)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Experienced<tspan x="151.034" y="0" style="letter-spacing: 0.23420388602229897em"> </tspan><tspan x="165.438" y="0">in</tspan><tspan x="188.345" y="0" style="letter-spacing: 0.23423849061538737em"> </tspan><tspan x="202.75" y="0">creating</tspan><tspan x="304.15" y="0" style="letter-spacing: 0.23420388602229897em"> </tspan><tspan x="318.554" y="0">accurate</tspan><tspan x="423.912" y="0" style="letter-spacing: 0.23420388602229897em"> </tspan><tspan x="438.316" y="0">as-built</tspan><tspan x="532.146" y="0" style="letter-spacing: 0.23420388602229897em"> </tspan><tspan x="546.55" y="0">plans </tspan><tspan x="0" y="34.016">from</tspan><tspan x="59.753" y="34.016" style="letter-spacing: 0.012250025953294006em"> </tspan><tspan x="67.865" y="34.016">existing</tspan><tspan x="163.799" y="34.016" style="letter-spacing: 0.012215421360205606em"> </tspan><tspan x="171.91" y="34.016">drawings</tspan><tspan x="284.992" y="34.016" style="letter-spacing: 0.012250025953294006em"> </tspan><tspan x="293.104" y="34.016">or</tspan><tspan x="319.568" y="34.016" style="letter-spacing: 0.012250025953294006em"> </tspan><tspan x="327.68" y="34.016">on-site</tspan><tspan x="414.99" y="34.016" style="letter-spacing: 0.012215421360205606em"> </tspan><tspan x="423.101" y="34.016">measurements. </tspan><tspan x="0" y="68.032" style="letter-spacing: -0.015122207179631303em">P</tspan><tspan x="15.447" y="68.032">roficient</tspan><tspan x="117.581" y="68.032" style="letter-spacing: -0.05242595852892774em"> </tspan><tspan x="123.86" y="68.032">in</tspan><tspan x="146.767" y="68.032" style="letter-spacing: -0.05239135393583934em"> </tspan><tspan x="153.047" y="68.032">3D</tspan><tspan x="188.203" y="68.032" style="letter-spacing: -0.05242595852892774em"> </tspan><tspan x="194.482" y="68.032">scanning</tspan><tspan x="305.709" y="68.032" style="letter-spacing: -0.05242595852892774em"> </tspan><tspan x="311.988" y="68.032">(Meshroom),</tspan><tspan x="471.077" y="68.032" style="letter-spacing: -0.05239135393583934em"> </tspan><tspan x="477.357" y="68.032">BIM-based </tspan><tspan x="0" y="102.047">error-checking,</tspan><tspan x="189.221" y="102.047" style="letter-spacing: 0.5824645108639682em"> </tspan><tspan x="213.497" y="102.047">and</tspan><tspan x="260.653" y="102.047" style="letter-spacing: 0.5824299062708798em"> </tspan><tspan x="284.928" y="102.047">renovation</tspan><tspan x="419.381" y="102.047" style="letter-spacing: 0.5824645108639682em"> </tspan><tspan x="443.656" y="102.047">filters</tspan><tspan x="512.073" y="102.047" style="letter-spacing: 0.5824645108639682em"> </tspan><tspan x="536.349" y="102.047">(exis</tspan><tspan x="601.237" y="102.047">-</tspan><tspan x="0" y="136.063">ing/new/demolished).</tspan><tspan x="273.597" y="136.063" style="letter-spacing: 0.45615774609130394em"> </tspan><tspan x="294.292" y="136.063" style="letter-spacing: -0.015122207179631303em">P</tspan><tspan x="309.739" y="136.063">repares</tspan><tspan x="402.213" y="136.063" style="letter-spacing: 0.45619235068439234em"> </tspan><tspan x="422.909" y="136.063">comprehensive </tspan><tspan x="0" y="170.079">drawings and written documentation.</tspan></text>
    </g>
    <g id="technical_3_text">
      <g>
        <path d="M1874.639,1373.049a11.544,11.544,0,0,1-5.456,1.162,8.778,8.778,0,0,1-6.752-2.727,10.087,10.087,0,0,1-2.536-7.155,10.579,10.579,0,0,1,2.852-7.7,9.661,9.661,0,0,1,7.235-2.933,11.538,11.538,0,0,1,4.657.816v2.478a9.4,9.4,0,0,0-4.685-1.191,7.171,7.171,0,0,0-5.518,2.285,8.624,8.624,0,0,0-2.115,6.1,8.206,8.206,0,0,0,1.977,5.778,6.709,6.709,0,0,0,5.188,2.153,9.7,9.7,0,0,0,5.153-1.328Z" style="fill: #fff"/>
        <path d="M1888.46,1373.879H1886.2v-2.214h-.055a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.164,2.164,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1895.034,1371.831h-.056v8.567h-2.26v-20.692h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.153,5.153,0,0,1,4.257,1.9,7.905,7.905,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,1895.034,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.73,5.73,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,1894.978,1366.114Z" style="fill: #fff"/>
        <path d="M1919.41,1373.879h-2.26v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.795-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.538,5.538,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1925.983,1371.831h-.056v2.048h-2.26V1352.9h2.26v9.3h.056a5.337,5.337,0,0,1,4.878-2.823,5.16,5.16,0,0,1,4.251,1.9,7.884,7.884,0,0,1,1.536,5.1,8.809,8.809,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.635,4.635,0,0,1,1925.983,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.736,5.736,0,0,0-1.088-3.71,3.6,3.6,0,0,0-2.95-1.342,4,4,0,0,0-3.169,1.377A5.076,5.076,0,0,0,1925.927,1366.114Z" style="fill: #fff"/>
        <path d="M1942.518,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M1958.434,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.381-1.578v2.131a8.154,8.154,0,0,1-4.918,1.357,5.955,5.955,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.976,5.976,0,0,1,4.637-2.083,5.291,5.291,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1977.115,1374.211a6.528,6.528,0,0,1-5-1.986,7.371,7.371,0,0,1-1.868-5.266,7.684,7.684,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.672,6.672,0,0,1,1977.115,1374.211Zm.165-12.927a4.3,4.3,0,0,0-3.446,1.487,6.138,6.138,0,0,0-1.267,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,1977.28,1361.284Z" style="fill: #fff"/>
        <path d="M1994.724,1354.889a2.987,2.987,0,0,0-1.5-.374q-2.37,0-2.37,3v2.188h3.308v1.937h-3.308v12.236h-2.246v-12.236H1986.2v-1.937h2.411v-2.3a4.8,4.8,0,0,1,1.281-3.523,4.32,4.32,0,0,1,3.2-1.294,4.41,4.41,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2012.5,1373.741a4.353,4.353,0,0,1-2.109.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.556v1.937h-3.556v7.987a3.33,3.33,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.608,2.367,2.367,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2022.871,1362a2.747,2.747,0,0,0-1.708-.457,2.881,2.881,0,0,0-2.418,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.173h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2031.223,1374.211a6.528,6.528,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,2031.223,1374.211Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2031.388,1361.284Z" style="fill: #fff"/>
        <path d="M2053.27,1373.879h-2.26v-2.243h-.056a4.635,4.635,0,0,1-4.354,2.575q-5.043,0-5.043-6.035v-8.47h2.246v8.11q0,4.485,3.417,4.485a3.453,3.453,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2060.146,1371.831h-.056v2.048h-2.26V1352.9h2.26v9.3h.056a5.337,5.337,0,0,1,4.878-2.823,5.16,5.16,0,0,1,4.251,1.9,7.884,7.884,0,0,1,1.536,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.635,4.635,0,0,1,2060.146,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.736,5.736,0,0,0-1.088-3.71,3.6,3.6,0,0,0-2.95-1.342,4,4,0,0,0-3.169,1.377A5.076,5.076,0,0,0,2060.09,1366.114Z" style="fill: #fff"/>
        <path d="M2076.681,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M2092.6,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.16,8.16,0,0,1-4.919,1.357,5.955,5.955,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.762,7.762,0,0,1,1.868-5.39,5.972,5.972,0,0,1,4.636-2.083,5.291,5.291,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2095.16,1373.367v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.586-.241-1.261-.5a16.3,16.3,0,0,1-1.647-.755,4.967,4.967,0,0,1-1.185-.858,3.19,3.19,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.036,4.036,0,0,1,1.213-1.287,5.639,5.639,0,0,1,1.729-.783,7.7,7.7,0,0,1,2.005-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.379,6.379,0,0,0-3.582-1.023,4.215,4.215,0,0,0-1.145.144,2.8,2.8,0,0,0-.875.41,1.86,1.86,0,0,0-.564.628,1.664,1.664,0,0,0-.2.811,1.938,1.938,0,0,0,.2.927,2.028,2.028,0,0,0,.585.664,4.428,4.428,0,0,0,.937.526q.551.236,1.254.512a17.457,17.457,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.569,3.569,0,0,1,.282,1.482,3.5,3.5,0,0,1-.461,1.827,4,4,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.988,7.988,0,0,1,2095.16,1373.367Z" style="fill: #fff"/>
        <path d="M2119.7,1373.879h-2.26v-8.166q0-4.431-3.28-4.429a3.573,3.573,0,0,0-2.784,1.28,4.786,4.786,0,0,0-1.13,3.287v8.028h-2.259V1352.9h2.259v9.162h.056a5.127,5.127,0,0,1,4.63-2.684q4.768,0,4.768,5.771Z" style="fill: #fff"/>
        <path d="M2129.858,1374.211a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.638,7.638,0,0,1-1.909,5.433A6.671,6.671,0,0,1,2129.858,1374.211Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2130.023,1361.284Z" style="fill: #fff"/>
        <path d="M2146.393,1374.211a6.528,6.528,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,2146.393,1374.211Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2146.558,1361.284Z" style="fill: #fff"/>
        <path d="M2163.576,1373.741a4.353,4.353,0,0,1-2.109.442q-3.706,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.556v1.937h-3.556v7.987a3.33,3.33,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.608,2.365,2.365,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2167.751,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.482,1.482,0,0,1,0,2.1A1.44,1.44,0,0,1,2167.751,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2185.141,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.629-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2201.443,1372.744q0,7.806-7.442,7.806a9.942,9.942,0,0,1-4.574-1v-2.269a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563V1371.5h-.056a5.695,5.695,0,0,1-9.088.824,7.575,7.575,0,0,1-1.6-5.073,8.854,8.854,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.593,4.593,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.089a4.065,4.065,0,0,0-1.137-2.893,3.736,3.736,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.841,6.841,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.069,5.069,0,0,0,2199.183,1367.47Z" style="fill: #fff"/>
        <path d="M2221.282,1374.211a6.528,6.528,0,0,1-5-1.986,7.371,7.371,0,0,1-1.868-5.266,7.684,7.684,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.672,6.672,0,0,1,2221.282,1374.211Zm.165-12.927a4.3,4.3,0,0,0-3.446,1.487,6.138,6.138,0,0,0-1.267,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2221.447,1361.284Z" style="fill: #fff"/>
        <path d="M2243.631,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2255.11,1366.876h-7.524v-1.786h7.524Z" style="fill: #fff"/>
        <path d="M2258.32,1373.367v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.173,16.173,0,0,1-1.646-.755,4.953,4.953,0,0,1-1.186-.858,3.19,3.19,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.036,4.036,0,0,1,1.213-1.287,5.634,5.634,0,0,1,1.73-.783,7.683,7.683,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.377,6.377,0,0,0-3.582-1.023,4.215,4.215,0,0,0-1.145.144,2.8,2.8,0,0,0-.875.41,1.87,1.87,0,0,0-.564.628,1.664,1.664,0,0,0-.2.811,1.938,1.938,0,0,0,.2.927,2.031,2.031,0,0,0,.586.664,4.395,4.395,0,0,0,.936.526q.55.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.569,3.569,0,0,1,.282,1.482,3.5,3.5,0,0,1-.461,1.827,3.985,3.985,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.744,8.744,0,0,1-2.108.249A7.988,7.988,0,0,1,2258.32,1373.367Z" style="fill: #fff"/>
        <path d="M2272.307,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,2272.307,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2284.53,1373.741a4.353,4.353,0,0,1-2.109.442q-3.706,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.556v1.937h-3.556v7.987a3.33,3.33,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.608,2.365,2.365,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2298.888,1367.36h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.16,8.16,0,0,1-4.919,1.357,5.955,5.955,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.762,7.762,0,0,1,1.868-5.39,5.972,5.972,0,0,1,4.636-2.083,5.291,5.291,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.217,5.217,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2318.216,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.195h3.555v1.937h-3.555v7.987a3.33,3.33,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2332.575,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2345.61,1373.228a7.319,7.319,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2360.74,1373.879h-2.26v-8.166q0-4.431-3.279-4.429a3.573,3.573,0,0,0-2.785,1.28,4.785,4.785,0,0,0-1.129,3.287v8.028h-2.26V1352.9h2.26v9.162h.055a5.127,5.127,0,0,1,4.63-2.684q4.768,0,4.768,5.771Z" style="fill: #fff"/>
        <path d="M2372.218,1366.876H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1872.6,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1878.016,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,1878.016,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1893.311,1407.244a7.318,7.318,0,0,1-3.858.982,6.38,6.38,0,0,1-4.872-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.538,4.538,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1906.829,1407.894h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.613a6.931,6.931,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1913.346,1407.894h-2.26v-20.982h2.26Z" style="fill: #fff"/>
        <path d="M1935.431,1407.244a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.167,7.167,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.738,5.738,0,0,0-3.362-1.107,4.538,4.538,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1950.561,1407.894h-2.26v-8.166q0-4.429-3.279-4.429a3.569,3.569,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.027h-2.26v-20.982h2.26v9.162h.055a5.128,5.128,0,0,1,4.63-2.685q4.769,0,4.768,5.772Z" style="fill: #fff"/>
        <path d="M1964.919,1407.894h-2.259v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.795-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.658,3.616,3.616,0,0,0,2.777-1.184,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1971.437,1407.894h-2.26v-20.982h2.26Z" style="fill: #fff"/>
        <path d="M1978.272,1407.894h-2.26v-20.982h2.26Z" style="fill: #fff"/>
        <path d="M1994.188,1401.376h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.381-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.933,7.933,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.977,5.977,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2009.318,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2025.62,1406.759q0,7.807-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.578,7.578,0,0,1-1.6-5.074,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.072,5.072,0,0,0,2023.36,1401.486Z" style="fill: #fff"/>
        <path d="M2041.535,1401.376h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2044.1,1407.382v-2.436a6.668,6.668,0,0,0,4.065,1.371q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.261-.5a16.274,16.274,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.086,3.833,3.833,0,0,1-.242-1.426,3.41,3.41,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.377,4.377,0,0,0,.936.527q.552.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.832,5.832,0,0,1,1.268.857,3.372,3.372,0,0,1,.8,1.1,3.551,3.551,0,0,1,.283,1.481,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,2044.1,1407.382Z" style="fill: #fff"/>
        <path d="M2074.919,1407.894h-2.259v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.658,3.616,3.616,0,0,0,2.777-1.184,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2090.89,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2107.192,1407.894h-2.26v-2.408h-.056a5.68,5.68,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.518,4.518,0,0,1,4.23,2.3h.056v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.713,3.713,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.119,5.119,0,0,0,2104.932,1401.486Z" style="fill: #fff"/>
        <path d="M2129.758,1407.894h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.717,8.717,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.658,3.618,3.618,0,0,0,2.777-1.184,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2146.06,1407.894h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.114,5.114,0,0,0,2143.8,1401.486Z" style="fill: #fff"/>
        <path d="M2160.735,1407.894h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.341,2.546,4.624,4.624,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.613a6.933,6.933,0,0,0-4.6,1.744v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2167.308,1405.846h-.056v8.568h-2.259v-20.693h2.259v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.529,5.1,8.812,8.812,0,0,1-1.723,5.7,5.726,5.726,0,0,1-4.712,2.137A4.715,4.715,0,0,1,2167.308,1405.846Zm-.056-5.716v1.979a4.221,4.221,0,0,0,1.137,2.982,4.043,4.043,0,0,0,6.105-.352,7.266,7.266,0,0,0,1.165-4.388,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,3.993,3.993,0,0,0-3.169,1.377A5.074,5.074,0,0,0,2167.252,1400.13Z" style="fill: #fff"/>
        <path d="M2188.129,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2192.3,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2192.3,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2209.7,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2226,1406.759q0,7.807-7.441,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.578,7.578,0,0,1-1.6-5.074,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965H2226Zm-2.259-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.072,5.072,0,0,0,2223.737,1401.486Z" style="fill: #fff"/>
        <path d="M2250.507,1407.894h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.063,4.063,0,0,0-1.129-2.906,3.783,3.783,0,0,0-2.867-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.019,6.019,0,0,0,1.137,3.869,3.71,3.71,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2248.247,1401.486Z" style="fill: #fff"/>
        <path d="M2266.422,1401.376h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.212,3.212,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.713,1.149,5.215,5.215,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2268.985,1407.382v-2.436a6.666,6.666,0,0,0,4.065,1.371q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.235,5.235,0,0,0-1.019-.547q-.587-.242-1.261-.5a16.173,16.173,0,0,1-1.646-.755,4.981,4.981,0,0,1-1.186-.858,3.2,3.2,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.642,7.642,0,0,1,2-.263,8.058,8.058,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.377,4.377,0,0,0,.936.527q.55.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.857,3.36,3.36,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.661,5.661,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,2268.985,1407.382Z" style="fill: #fff"/>
        <path d="M2282.972,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2282.972,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2300.693,1406.759q0,7.807-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.578,7.578,0,0,1-1.6-5.074,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.071,5.071,0,0,0,2298.433,1401.486Z" style="fill: #fff"/>
        <path d="M2316.98,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2320.383,1407.382v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.3,16.3,0,0,1-1.647-.755,4.974,4.974,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.045,4.045,0,0,1,1.213-1.287,5.651,5.651,0,0,1,1.729-.782,7.644,7.644,0,0,1,2.005-.263,8.053,8.053,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.162,4.162,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.409,1.875,1.875,0,0,0-.565.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.361,4.361,0,0,0,.937.527q.55.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.832,5.832,0,0,1,1.268.857,3.372,3.372,0,0,1,.8,1.1,3.551,3.551,0,0,1,.283,1.481,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.98,7.98,0,0,1,2320.383,1407.382Z" style="fill: #fff"/>
        <path d="M2348.077,1388.905a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.371,3v2.187h3.308v1.938H2344.2v12.235h-2.246v-12.235h-2.411v-1.938h2.411v-2.3a4.789,4.789,0,0,1,1.282-3.523,4.319,4.319,0,0,1,3.2-1.294,4.417,4.417,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2355.835,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.689,7.689,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.318,6.318,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.636,7.636,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2355.835,1408.226ZM2356,1395.3a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.426,6.206,6.206,0,0,0,1.177-4.055,6.313,6.313,0,0,0-1.177-4.1A4.106,4.106,0,0,0,2356,1395.3Z" style="fill: #fff"/>
        <path d="M2373.83,1396.019a2.754,2.754,0,0,0-1.708-.457,2.881,2.881,0,0,0-2.418,1.37,6.354,6.354,0,0,0-.972,3.738v7.224h-2.26v-14.173h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.357,3.357,0,0,1,2.218-.837,3.674,3.674,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1863.2,1439.862h-.056v8.567h-2.26v-20.692h2.26v2.492h.056a5.337,5.337,0,0,1,4.877-2.824,5.159,5.159,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.53,5.1,8.813,8.813,0,0,1-1.723,5.695,5.724,5.724,0,0,1-4.712,2.139A4.716,4.716,0,0,1,1863.2,1439.862Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.264,7.264,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,1863.147,1434.146Z" style="fill: #fff"/>
        <path d="M1884.836,1430.035a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26v-14.174h2.26v2.921h.055a4.947,4.947,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.218-.838,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1898.63,1435.391h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.628,4.628,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.713,1.149,5.215,5.215,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1911.665,1441.26a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.166,7.166,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.326a5.728,5.728,0,0,0-3.363-1.108,4.535,4.535,0,0,0-3.548,1.558,5.925,5.925,0,0,0-1.385,4.09,5.636,5.636,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1916.241,1424.138a1.428,1.428,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.051,1.45,1.45,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,1916.241,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1921.063,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.385,5.385,0,0,0-1.02-.546q-.587-.243-1.261-.505a15.967,15.967,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.2,3.2,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526c.368.157.785.328,1.254.512a17.355,17.355,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.346,3.346,0,0,1,.806,1.1,3.555,3.555,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,1921.063,1441.4Z" style="fill: #fff"/>
        <path d="M1945.233,1435.391h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1969.789,1435.391h-9.962a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1983.514,1427.737l-4.74,7.17,4.657,7H1980.8l-2.769-4.6q-.263-.429-.62-1.079h-.055q-.071.124-.649,1.079l-2.824,4.6h-2.6l4.808-6.948-4.6-7.226h2.632l2.727,4.845c.2.359.4.729.593,1.107h.056l3.527-5.952Z" style="fill: #fff"/>
        <path d="M1997.5,1435.391h-9.963a5.327,5.327,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.209,3.209,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2010.536,1441.26a7.322,7.322,0,0,1-3.859.983,6.37,6.37,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.728,5.728,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.644,5.644,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2025.363,1441.911h-2.26v-2.242h-.056a4.638,4.638,0,0,1-4.354,2.574q-5.045,0-5.043-6.035v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.454,3.454,0,0,0,2.722-1.225,4.706,4.706,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2036.469,1441.772a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.733v4.193h3.556v1.938h-3.556v7.987a3.324,3.324,0,0,0,.483,2.034,1.92,1.92,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M2040.645,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2040.645,1424.138Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2052.22,1442.243a6.528,6.528,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,2052.22,1442.243Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.348,4.348,0,0,0,3.431,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2052.385,1429.315Z" style="fill: #fff"/>
        <path d="M2074.57,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2100.67,1441.911h-2.259V1439.5h-.056a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.776h2.259Zm-2.259-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.783,3.783,0,0,0-2.867-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.019,6.019,0,0,0,1.137,3.868,3.707,3.707,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,2098.411,1435.5Z" style="fill: #fff"/>
        <path d="M2112.6,1430.035a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259v-14.174h2.259v2.921h.056a4.932,4.932,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2125.157,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2147.191,1427.737l-4.231,14.174h-2.342l-2.908-10.146a6.6,6.6,0,0,1-.22-1.315h-.055a6.213,6.213,0,0,1-.29,1.287l-3.155,10.174h-2.26l-4.272-14.174h2.371l2.92,10.658a6.44,6.44,0,0,1,.194,1.274h.109a6,6,0,0,1,.248-1.3l3.252-10.63h2.068l2.92,10.686a7.526,7.526,0,0,1,.207,1.273h.111a5.882,5.882,0,0,1,.234-1.273l2.866-10.686Z" style="fill: #fff"/>
        <path d="M2150.966,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,2150.966,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2168.356,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2184.658,1440.776q0,7.806-7.442,7.806a9.955,9.955,0,0,1-4.574-1v-2.271a9.359,9.359,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.769,5.769,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.26Zm-2.26-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.736,3.736,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.848,6.848,0,0,0-1.186,4.285,5.876,5.876,0,0,0,1.137,3.785,3.667,3.667,0,0,0,3.011,1.419,3.923,3.923,0,0,0,3.093-1.357A5.067,5.067,0,0,0,2182.4,1435.5Z" style="fill: #fff"/>
        <path d="M2188.377,1441.4v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.541,2.541,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.26-.505a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.056,4.056,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.166,4.166,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.664,1.664,0,0,0-.2.809,1.954,1.954,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.55.236,1.254.512a17.332,17.332,0,0,1,1.681.74,5.8,5.8,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.512,3.512,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2188.377,1441.4Z" style="fill: #fff"/>
        <path d="M2201.993,1442.215a1.457,1.457,0,0,1-1.082-.457,1.5,1.5,0,0,1-.449-1.093,1.533,1.533,0,0,1,.449-1.1,1.452,1.452,0,0,1,1.082-.463,1.488,1.488,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
        <path d="M2216.5,1441.108v-2.741a5.338,5.338,0,0,0,1.123.748,9.073,9.073,0,0,0,1.378.56,10.833,10.833,0,0,0,1.454.353,8.09,8.09,0,0,0,1.351.125,5.271,5.271,0,0,0,3.189-.8,2.994,2.994,0,0,0,.7-3.688,3.965,3.965,0,0,0-.972-1.087,9.623,9.623,0,0,0-1.468-.942q-.846-.45-1.825-.948-1.035-.527-1.93-1.065a8.355,8.355,0,0,1-1.556-1.191,4.915,4.915,0,0,1-1.04-1.473,5.052,5.052,0,0,1,.212-4.291,5.115,5.115,0,0,1,1.558-1.655,7.049,7.049,0,0,1,2.2-.968,10.041,10.041,0,0,1,2.515-.319,9.6,9.6,0,0,1,4.259.706v2.616a7.7,7.7,0,0,0-4.492-1.217,7.307,7.307,0,0,0-1.517.159,4.24,4.24,0,0,0-1.35.518,3.015,3.015,0,0,0-.965.928,2.47,2.47,0,0,0-.372,1.384,2.843,2.843,0,0,0,.283,1.314,3.218,3.218,0,0,0,.834,1.011,8.248,8.248,0,0,0,1.343.886q.792.429,1.826.941,1.062.526,2.011,1.108a9.134,9.134,0,0,1,1.668,1.287,5.712,5.712,0,0,1,1.137,1.563,4.421,4.421,0,0,1,.42,1.966,5.008,5.008,0,0,1-.571,2.484,4.721,4.721,0,0,1-1.544,1.655,6.709,6.709,0,0,1-2.24.92,12.208,12.208,0,0,1-2.672.284,11.035,11.035,0,0,1-1.158-.076q-.69-.076-1.406-.222a11.6,11.6,0,0,1-1.356-.359A4.275,4.275,0,0,1,2216.5,1441.108Z" style="fill: #fff"/>
        <path d="M2243.829,1441.911h-3.168l-6.229-6.81h-.056v6.81h-2.259v-20.984h2.259v13.3h.056l5.925-6.492h2.963l-6.545,6.838Z" style="fill: #fff"/>
        <path d="M2247.3,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2247.3,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2255.239,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2262.074,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2277.99,1435.391h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2293.451,1441.911h-2.26V1439.5h-.056a5.679,5.679,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.184,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.23,2.3h.056v-8.776h2.26Zm-2.26-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.125,5.125,0,0,0,2291.191,1435.5Z" style="fill: #fff"/>
        <path d="M2308.982,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.46,1.46,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.444,1.444,0,0,1,2308.982,1424.138Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2326.371,1441.911h-2.259v-8.083q0-4.514-3.28-4.513a3.552,3.552,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.11,3.233v8.083h-2.259v-14.174h2.259v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2347.787,1430.035a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.938,4.938,0,0,1,1.474-2.332,3.349,3.349,0,0,1,2.218-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2361.58,1435.391h-9.962a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2372.218,1434.907H2364.7v-1.785h7.523Z" style="fill: #fff"/>
        <path d="M1860.033,1475.414v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.02,2.02,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.234,1.254.512a17.464,17.464,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.975,3.975,0,0,1-1.233,1.287,5.634,5.634,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,1860.033,1475.414Z" style="fill: #fff"/>
        <path d="M1884.2,1469.407h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1897.72,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1909.336,1464.05a2.756,2.756,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.372,6.358,6.358,0,0,0-.971,3.736v7.225h-2.26v-14.173h2.26v2.921h.055a4.951,4.951,0,0,1,1.475-2.333,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1921.408,1475.276a7.331,7.331,0,0,1-3.859.982,6.373,6.373,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.927,5.927,0,0,0-1.385,4.09,5.644,5.644,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.439,5.649,5.649,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M1936.537,1475.926h-2.259v-8.166q0-4.429-3.28-4.429a3.57,3.57,0,0,0-2.784,1.28,4.786,4.786,0,0,0-1.13,3.287v8.028h-2.259v-20.983h2.259v9.163h.056a5.128,5.128,0,0,1,4.63-2.685q4.769,0,4.767,5.771Z" style="fill: #fff"/>
        <path d="M1941.954,1458.154a1.43,1.43,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,1941.954,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1959.343,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.226,4.338Z" style="fill: #fff"/>
        <path d="M1975.645,1474.792q0,7.806-7.441,7.805a9.956,9.956,0,0,1-4.575-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.056a5.694,5.694,0,0,1-9.087.823,7.57,7.57,0,0,1-1.605-5.072,8.852,8.852,0,0,1,1.729-5.745,5.768,5.768,0,0,1,4.733-2.131,4.594,4.594,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.185,4.284,5.874,5.874,0,0,0,1.136,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,1973.385,1469.518Z" style="fill: #fff"/>
        <path d="M2002.716,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.167,2.167,0,0,0,.738,1.695,2.836,2.836,0,0,0,1.963.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2009.234,1475.926h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2020.355,1475.788a4.347,4.347,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938H2016.8v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2034.713,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.208,3.208,0,0,0-2.583-1.093,3.643,3.643,0,0,0-2.714,1.148,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2045.489,1464.05a2.758,2.758,0,0,0-1.708-.457,2.879,2.879,0,0,0-2.419,1.372,6.351,6.351,0,0,0-.972,3.736v7.225h-2.26v-14.173h2.26v2.921h.056a4.942,4.942,0,0,1,1.474-2.333,3.353,3.353,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2059.655,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2074.013,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.709,8.709,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2084.817,1475.788a4.349,4.349,0,0,1-2.109.443q-3.706,0-3.707-4.152v-8.388h-2.424v-1.938H2079v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2088.993,1458.154a1.432,1.432,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,2088.993,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2105.762,1461.753l-5.622,14.173h-2.219l-5.345-14.173h2.479l3.583,10.3a9.231,9.231,0,0,1,.5,1.98h.055a9.417,9.417,0,0,1,.441-1.924l3.748-10.353Z" style="fill: #fff"/>
        <path d="M2119.528,1469.407h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2137.658,1473.878h-.056v2.048h-2.26v-20.983h2.26v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.163,5.163,0,0,1,4.251,1.9,7.882,7.882,0,0,1,1.536,5.1,8.814,8.814,0,0,1-1.723,5.7,5.722,5.722,0,0,1-4.712,2.138A4.635,4.635,0,0,1,2137.658,1473.878Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.255,7.255,0,0,0,1.165-4.388,5.728,5.728,0,0,0-1.089-3.708,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2137.6,1468.162Z" style="fill: #fff"/>
        <path d="M2163.343,1475.926h-2.26v-2.242h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.47h2.246v8.111q0,4.484,3.417,4.484a3.452,3.452,0,0,0,2.722-1.224,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2169.062,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,2169.062,1458.154Zm1.1,17.772H2167.9v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2177,1475.926h-2.259v-20.983H2177Z" style="fill: #fff"/>
        <path d="M2193.618,1475.926h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.123,5.123,0,0,0,2191.358,1469.518Z" style="fill: #fff"/>
        <path d="M2199.35,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,2199.35,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2216.74,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2233.041,1474.792q0,7.806-7.441,7.805a9.952,9.952,0,0,1-4.574-1v-2.27a9.37,9.37,0,0,0,4.547,1.329q5.208,0,5.209-5.565v-1.549h-.056a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.77,5.77,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.259Zm-2.259-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.914,3.914,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.663,3.663,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.069,5.069,0,0,0,2230.782,1469.518Z" style="fill: #fff"/>
        <path d="M2249.158,1475.414v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2.005-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.02,2.02,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.551.234,1.254.512a17.464,17.464,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.975,3.975,0,0,1-1.233,1.287,5.634,5.634,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,2249.158,1475.414Z" style="fill: #fff"/>
        <path d="M2273.217,1461.753l-6.49,16.443q-1.735,4.4-4.878,4.4a5.159,5.159,0,0,1-1.475-.179v-2.035a4.183,4.183,0,0,0,1.337.249,2.775,2.775,0,0,0,2.564-2.048l1.13-2.686-5.512-14.145h2.508l3.816,10.907q.069.208.289,1.079h.083q.069-.332.276-1.052l4.009-10.934Z" style="fill: #fff"/>
        <path d="M2274.787,1475.414v-2.436a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.735,1.735,0,0,0-.254-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2.005-.262,8.067,8.067,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.211,4.211,0,0,0-1.144.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.954,1.954,0,0,0,.2.928,2.043,2.043,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.55.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.81,5.81,0,0,1,1.268.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.985,3.985,0,0,1-1.233,1.287,5.634,5.634,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,2274.787,1475.414Z" style="fill: #fff"/>
        <path d="M2294.162,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2308.521,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.381-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.933,7.933,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.974,5.974,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2331.974,1475.926h-2.26v-8.138a6.17,6.17,0,0,0-.723-3.406,2.74,2.74,0,0,0-2.433-1.051,3.007,3.007,0,0,0-2.459,1.329,5.094,5.094,0,0,0-1.013,3.183v8.083h-2.26v-8.416q0-4.179-3.21-4.179a2.972,2.972,0,0,0-2.454,1.253,5.2,5.2,0,0,0-.964,3.259v8.083h-2.26v-14.173h2.26V1464h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2335.391,1475.414v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.241-1.261-.5a16.065,16.065,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.191,3.191,0,0,1-.715-1.087,3.83,3.83,0,0,1-.242-1.426,3.407,3.407,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.68,5.68,0,0,1,1.73-.782,7.643,7.643,0,0,1,2.005-.262,8.073,8.073,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.842,2.842,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.552.234,1.254.512a17.355,17.355,0,0,1,1.682.74,5.835,5.835,0,0,1,1.268.858,3.372,3.372,0,0,1,.805,1.1,3.55,3.55,0,0,1,.282,1.48,3.513,3.513,0,0,1-.46,1.828,3.978,3.978,0,0,1-1.234,1.287,5.628,5.628,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,2335.391,1475.414Z" style="fill: #fff"/>
        <path d="M2361.776,1458.154a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,2361.776,1458.154Zm1.1,17.772h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2374.425,1456.936a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308v12.235h-2.246v-12.235H2365.9v-1.938h2.411v-2.3a4.791,4.791,0,0,1,1.281-3.523,4.318,4.318,0,0,1,3.2-1.3,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M1862.045,1492.17a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,1862.045,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1879.435,1509.942h-2.26v-8.083q0-4.514-3.279-4.513a3.551,3.551,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1884.851,1492.17a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,1884.851,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1897.074,1509.8a4.352,4.352,0,0,1-2.109.444q-3.707,0-3.707-4.153v-8.387h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.556v1.939h-3.556v7.986a3.325,3.325,0,0,0,.482,2.034,1.923,1.923,0,0,0,1.6.61,2.378,2.378,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1901.249,1492.17a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,1901.249,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1917.027,1509.942h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.614-2.907-3.613a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.723,8.723,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1923.544,1509.942h-2.259v-20.983h2.259Z" style="fill: #fff"/>
        <path d="M1938.165,1507.893h-.055v8.568h-2.26v-20.693h2.26v2.492h.055a5.342,5.342,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.529,5.1,8.811,8.811,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.719,4.719,0,0,1,1938.165,1507.893Zm-.055-5.716v1.979a4.229,4.229,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.733,5.733,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.075,5.075,0,0,0,1938.11,1502.177Z" style="fill: #fff"/>
        <path d="M1959.8,1498.066a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26v-14.174h2.26v2.921h.055a4.952,4.952,0,0,1,1.475-2.332,3.353,3.353,0,0,1,2.218-.838,3.649,3.649,0,0,1,1.35.195Z" style="fill: #fff"/>
        <path d="M1968.151,1510.274a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.868-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.318,6.318,0,0,1,4.927,1.952,7.766,7.766,0,0,1,1.77,5.411,7.635,7.635,0,0,1-1.909,5.433A6.673,6.673,0,0,1,1968.151,1510.274Zm.165-12.928a4.287,4.287,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,1968.316,1497.346Z" style="fill: #fff"/>
        <path d="M1981.1,1507.893h-.056v8.568h-2.26v-20.693h2.26v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.907,7.907,0,0,1,1.529,5.1,8.806,8.806,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.712,2.139A4.716,4.716,0,0,1,1981.1,1507.893Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.257,7.257,0,0,0,1.166-4.388,5.739,5.739,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.95-1.343,4,4,0,0,0-3.169,1.377A5.08,5.08,0,0,0,1981.047,1502.177Z" style="fill: #fff"/>
        <path d="M2001.277,1510.274a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.868-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.318,6.318,0,0,1,4.927,1.952,7.766,7.766,0,0,1,1.77,5.411,7.635,7.635,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2001.277,1510.274Zm.165-12.928a4.29,4.29,0,0,0-3.446,1.489,6.133,6.133,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2001.442,1497.346Z" style="fill: #fff"/>
        <path d="M2011.059,1509.429v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547c-.391-.161-.81-.329-1.261-.505a16.065,16.065,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.087,3.833,3.833,0,0,1-.242-1.426,3.413,3.413,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.819,2.819,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.51,4.51,0,0,0,.936.527q.552.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.805,1.1,3.55,3.55,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.945,3.945,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2011.059,1509.429Z" style="fill: #fff"/>
        <path d="M2033.989,1509.942h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.614-2.907-3.613a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.72,8.72,0,0,1,4.795-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.841,2.841,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2040.506,1509.942h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2044.227,1509.429v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547c-.391-.161-.81-.329-1.261-.505a16.065,16.065,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.218,3.218,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.413,3.413,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.819,2.819,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.51,4.51,0,0,0,.936.527q.552.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.8,1.1,3.55,3.55,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.945,3.945,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2044.227,1509.429Z" style="fill: #fff"/>
        <path d="M2074.887,1509.942h-2.26v-2.215h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.614-2.907-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.717,8.717,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2086.5,1498.066a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26v-14.174h2.26v2.921h.055a4.952,4.952,0,0,1,1.475-2.332,3.353,3.353,0,0,1,2.218-.838,3.649,3.649,0,0,1,1.35.195Z" style="fill: #fff"/>
        <path d="M2100.3,1503.423h-9.963a5.32,5.32,0,0,0,1.268,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.631,4.631,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.713,1.149,5.215,5.215,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2122.855,1509.942h-2.26V1507.7h-.056a4.636,4.636,0,0,1-4.354,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.483,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2139.128,1509.942h-2.259v-8.083q0-4.514-3.28-4.513a3.549,3.549,0,0,0-2.8,1.281,4.754,4.754,0,0,0-1.11,3.232v8.083h-2.26v-14.174h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2150.359,1490.952a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.186h3.307v1.939h-3.307v12.235h-2.246v-12.235h-2.412v-1.939h2.412v-2.3a4.784,4.784,0,0,1,1.281-3.522,4.316,4.316,0,0,1,3.2-1.3,4.413,4.413,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2163.56,1503.423H2153.6a5.32,5.32,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.381-1.578v2.132a8.162,8.162,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.977,5.977,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.094A3.642,3.642,0,0,0,2155,1498.5a5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2177.078,1509.942h-2.26v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.614-2.907-3.613a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.72,8.72,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.37.782,2.257,2.257,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.841,2.841,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2180.481,1509.429v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.329,5.329,0,0,0-1.02-.547q-.587-.242-1.261-.505a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.218,3.218,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.413,3.413,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.51,4.51,0,0,0,.936.527q.551.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.858,3.35,3.35,0,0,1,.806,1.1,3.55,3.55,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.945,3.945,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2180.481,1509.429Z" style="fill: #fff"/>
        <path d="M2194.468,1492.17a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2194.468,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2202.46,1507.893h-.055v2.049h-2.26v-20.983h2.26v9.3h.055a5.342,5.342,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.251,1.9,7.875,7.875,0,0,1,1.536,5.1,8.811,8.811,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.638,4.638,0,0,1,2202.46,1507.893Zm-.055-5.716v1.979a4.229,4.229,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.733,5.733,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.075,5.075,0,0,0,2202.405,1502.177Z" style="fill: #fff"/>
        <path d="M2219,1509.942h-2.26v-20.983H2219Z" style="fill: #fff"/>
        <path d="M2234.912,1503.423h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2239.115,1510.247a1.461,1.461,0,0,1-1.082-.457,1.507,1.507,0,0,1-.449-1.094,1.533,1.533,0,0,1,.449-1.1,1.452,1.452,0,0,1,1.082-.463,1.488,1.488,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.551Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="technical_2_text">
      <g>
        <path d="M1876.486,1356.169h-2.563l-2.094-5.564h-8.378l-1.971,5.564H1858.9l7.579-19.848h2.4Zm-5.415-7.655-3.1-8.456a8.115,8.115,0,0,1-.3-1.329h-.055a7.491,7.491,0,0,1-.317,1.329l-3.073,8.456Z" style="fill: #fff"/>
        <path d="M1890.287,1356.169h-2.259v-2.409h-.056a5.678,5.678,0,0,1-9.1.838,7.83,7.83,0,0,1-1.591-5.183,8.52,8.52,0,0,1,1.763-5.634,5.81,5.81,0,0,1,4.7-2.117,4.518,4.518,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.409v-2.089a4.064,4.064,0,0,0-1.13-2.907,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.186,4.207,6.024,6.024,0,0,0,1.137,3.87,3.711,3.711,0,0,0,3.053,1.418,3.851,3.851,0,0,0,3.065-1.371A5.119,5.119,0,0,0,1888.028,1349.76Z" style="fill: #fff"/>
        <path d="M1905.356,1349.65h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.356,4.356,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.381-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.931,7.931,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1910.242,1354.121h-.056v8.567h-2.26V1342h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.155,5.155,0,0,1,4.257,1.9,7.905,7.905,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,1910.242,1354.121Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.732,5.732,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,1910.186,1348.4Z" style="fill: #fff"/>
        <path d="M1930.216,1356.031a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425V1342h2.425v-3.46l2.26-.735v4.2h3.555v1.937h-3.555v7.987a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1960.332,1356.169h-2.259v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743v-2.325a8.711,8.711,0,0,1,4.795-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.167,2.167,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1970.289,1356.031a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425V1342h2.425v-3.46l2.26-.735v4.2h3.555v1.937h-3.555v7.987a3.328,3.328,0,0,0,.482,2.035,1.923,1.923,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2002.349,1356.169h-2.26v-2.409h-.055a5.679,5.679,0,0,1-9.1.838,7.83,7.83,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.808,5.808,0,0,1,4.7-2.117,4.518,4.518,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.409v-2.089a4.064,4.064,0,0,0-1.13-2.907,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.029,6.029,0,0,0,1.136,3.87,3.712,3.712,0,0,0,3.053,1.418,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2000.089,1349.76Z" style="fill: #fff"/>
        <path d="M2017.417,1349.65h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2031.08,1342l-5.622,14.173h-2.218L2017.894,1342h2.479l3.583,10.3a9.278,9.278,0,0,1,.5,1.979h.054a9.36,9.36,0,0,1,.442-1.925L2028.7,1342Z" style="fill: #fff"/>
        <path d="M2044,1349.65h-9.962a5.315,5.315,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2048.829,1356.169h-2.259v-20.983h2.259Z" style="fill: #fff"/>
        <path d="M2058.456,1356.5a6.526,6.526,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.684,7.684,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2058.456,1356.5Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.267,4.105,5.794,5.794,0,0,0,1.281,3.971,4.346,4.346,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.425,6.211,6.211,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.106,4.106,0,0,0,2058.621,1343.574Z" style="fill: #fff"/>
        <path d="M2070.562,1354.121h-.056v8.567h-2.26V1342h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.159,5.159,0,0,1,4.258,1.9,7.911,7.911,0,0,1,1.529,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2070.562,1354.121Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.738,5.738,0,0,0-1.088-3.71,3.6,3.6,0,0,0-2.95-1.342,4,4,0,0,0-3.169,1.377A5.076,5.076,0,0,0,2070.506,1348.4Z" style="fill: #fff"/>
        <path d="M2085.149,1338.4a1.433,1.433,0,0,1-1.034-.415,1.406,1.406,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.459,1.459,0,0,1,1.054.422,1.418,1.418,0,0,1,.433,1.058,1.4,1.4,0,0,1-.433,1.038A1.442,1.442,0,0,1,2085.149,1338.4Zm1.1,17.772h-2.259V1342h2.259Z" style="fill: #fff"/>
        <path d="M2101.692,1356.169h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V1342h2.26v2.352h.055a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2117.147,1355.034q0,7.806-7.442,7.806a9.942,9.942,0,0,1-4.574-1v-2.269a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563v-1.551h-.056a5.694,5.694,0,0,1-9.087.824,7.571,7.571,0,0,1-1.605-5.073,8.851,8.851,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.593,4.593,0,0,1,4.23,2.3h.056V1342h2.26Zm-2.26-5.274v-2.089a4.065,4.065,0,0,0-1.137-2.893,3.734,3.734,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.841,6.841,0,0,0-1.185,4.283,5.882,5.882,0,0,0,1.136,3.787,3.669,3.669,0,0,0,3.011,1.418,3.927,3.927,0,0,0,3.094-1.356A5.068,5.068,0,0,0,2114.887,1349.76Z" style="fill: #fff"/>
        <path d="M2145.692,1337.179a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.37,3V1342h3.307v1.937h-3.307v12.236h-2.246v-12.236h-2.412V1342h2.412v-2.3a4.792,4.792,0,0,1,1.281-3.523,4.318,4.318,0,0,1,3.2-1.293,4.413,4.413,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2158.046,1349.65h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.208,3.208,0,0,0-2.583-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2170.717,1356.169h-2.26v-2.214h-.054a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.929,6.929,0,0,0-4.6,1.743v-2.325a8.709,8.709,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.62,3.62,0,0,0,2.777-1.183,4.241,4.241,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2173.274,1355.657v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.235,5.235,0,0,0-1.019-.547q-.587-.242-1.261-.505a16.4,16.4,0,0,1-1.646-.754,5,5,0,0,1-1.186-.859,3.2,3.2,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.036,4.036,0,0,1,1.213-1.287,5.634,5.634,0,0,1,1.73-.783,7.685,7.685,0,0,1,2.005-.262,8.073,8.073,0,0,1,3.279.636v2.3a6.377,6.377,0,0,0-3.582-1.023,4.215,4.215,0,0,0-1.145.144,2.8,2.8,0,0,0-.875.41,1.864,1.864,0,0,0-.564.629,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.419,4.419,0,0,0,.936.526q.551.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.346,3.346,0,0,1,.806,1.1,3.553,3.553,0,0,1,.282,1.482,3.5,3.5,0,0,1-.461,1.827,3.974,3.974,0,0,1-1.233,1.287,5.651,5.651,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.988,7.988,0,0,1,2173.274,1355.657Z" style="fill: #fff"/>
        <path d="M2186.414,1338.4a1.433,1.433,0,0,1-1.034-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.46-1.48,1.456,1.456,0,0,1,1.054.422,1.418,1.418,0,0,1,.434,1.058,1.4,1.4,0,0,1-.434,1.038A1.439,1.439,0,0,1,2186.414,1338.4Zm1.1,17.772h-2.26V1342h2.26Z" style="fill: #fff"/>
        <path d="M2193.56,1354.121h-.056v2.048h-2.259v-20.983h2.259v9.3h.056a5.337,5.337,0,0,1,4.878-2.823,5.163,5.163,0,0,1,4.251,1.9,7.884,7.884,0,0,1,1.536,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.635,4.635,0,0,1,2193.56,1354.121Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.261,7.261,0,0,0,1.165-4.387,5.738,5.738,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.95-1.342,3.993,3.993,0,0,0-3.168,1.377A5.071,5.071,0,0,0,2193.5,1348.4Z" style="fill: #fff"/>
        <path d="M2209.248,1356.169h-2.259v-20.983h2.259Z" style="fill: #fff"/>
        <path d="M2224.318,1349.65h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2251.279,1356.031a4.35,4.35,0,0,1-2.109.442q-3.707,0-3.707-4.152v-8.388h-2.425V1342h2.425v-3.46l2.26-.735v4.2h3.556v1.937h-3.556v7.987a3.328,3.328,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.608,2.365,2.365,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2264.79,1349.65h-9.962a5.315,5.315,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2276.979,1355.518a7.309,7.309,0,0,1-3.858.983,6.38,6.38,0,0,1-4.872-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.089,5.64,5.64,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2291.262,1356.169H2289V1348q0-4.431-3.279-4.429a3.573,3.573,0,0,0-2.784,1.28,4.786,4.786,0,0,0-1.13,3.287v8.028h-2.26v-20.983h2.26v9.162h.056a5.127,5.127,0,0,1,4.63-2.684q4.767,0,4.767,5.771Z" style="fill: #fff"/>
        <path d="M2306.386,1356.169h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V1342h2.26v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2310.955,1338.4a1.433,1.433,0,0,1-1.034-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.46-1.48,1.456,1.456,0,0,1,1.054.422,1.418,1.418,0,0,1,.434,1.058,1.4,1.4,0,0,1-.434,1.038A1.439,1.439,0,0,1,2310.955,1338.4Zm1.1,17.772h-2.26V1342h2.26Z" style="fill: #fff"/>
        <path d="M2325.4,1355.518a7.31,7.31,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.533,4.533,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.089,5.64,5.64,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.65,5.65,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2338.075,1356.169h-2.26v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743v-2.325a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.538,5.538,0,0,0-2.371.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2343.746,1356.169h-2.259v-20.983h2.259Z" style="fill: #fff"/>
        <path d="M2364.464,1355.657v-2.437a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.26-.505a16.531,16.531,0,0,1-1.647-.754,5,5,0,0,1-1.185-.859,3.175,3.175,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.025,4.025,0,0,1,1.213-1.287,5.629,5.629,0,0,1,1.729-.783,7.691,7.691,0,0,1,2-.262,8.07,8.07,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.023,4.207,4.207,0,0,0-1.144.144,2.8,2.8,0,0,0-.875.41,1.867,1.867,0,0,0-.565.629,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.4,4.4,0,0,0,.937.526q.55.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.8,5.8,0,0,1,1.268.858,3.357,3.357,0,0,1,.8,1.1,3.553,3.553,0,0,1,.283,1.482,3.512,3.512,0,0,1-.461,1.827,3.988,3.988,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.992,7.992,0,0,1,2364.464,1355.657Z" style="fill: #fff"/>
        <path d="M2382.345,1356.5a6.524,6.524,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,2382.345,1356.5Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.282,3.971,4.346,4.346,0,0,0,3.431,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2382.51,1343.574Z" style="fill: #fff"/>
        <path d="M2394.4,1356.169h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2409.534,1356.169h-2.26v-2.243h-.056a4.636,4.636,0,0,1-4.354,2.575q-5.044,0-5.043-6.035V1342h2.246v8.11q0,4.485,3.417,4.485a3.451,3.451,0,0,0,2.721-1.225,4.7,4.7,0,0,0,1.069-3.2V1342h2.26Z" style="fill: #fff"/>
        <path d="M1863.2,1388.136h-.056v2.048h-2.26V1369.2h2.26v9.3h.056a5.337,5.337,0,0,1,4.877-2.824,5.159,5.159,0,0,1,4.251,1.9,7.874,7.874,0,0,1,1.537,5.1,8.817,8.817,0,0,1-1.723,5.7,5.728,5.728,0,0,1-4.712,2.137A4.635,4.635,0,0,1,1863.2,1388.136Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.341,4,4,0,0,0-3.169,1.376A5.073,5.073,0,0,0,1863.147,1382.42Z" style="fill: #fff"/>
        <path d="M1886.732,1390.184h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.932,6.932,0,0,0-4.6,1.743v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1889.288,1389.673v-2.437a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.254-.962,2.529,2.529,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.586-.242-1.261-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.05,8.05,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.023,4.173,4.173,0,0,0-1.144.144,2.8,2.8,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.672,1.672,0,0,0-.2.811,1.946,1.946,0,0,0,.2.926,2.046,2.046,0,0,0,.586.665,4.428,4.428,0,0,0,.937.526q.551.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.808,5.808,0,0,1,1.268.857,3.375,3.375,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.988,3.988,0,0,1-1.233,1.288,5.678,5.678,0,0,1-1.778.76,8.75,8.75,0,0,1-2.108.249A7.994,7.994,0,0,1,1889.288,1389.673Z" style="fill: #fff"/>
        <path d="M1912.612,1383.666h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.092,3.641,3.641,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1927.226,1390.184h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055V1369.2h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.892,3.892,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.114,5.114,0,0,0,1924.966,1383.776Z" style="fill: #fff"/>
        <path d="M1945.148,1390.516a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.318,6.318,0,0,1,4.927,1.952,7.765,7.765,0,0,1,1.77,5.412,7.636,7.636,0,0,1-1.909,5.432A6.667,6.667,0,0,1,1945.148,1390.516Zm.165-12.926a4.291,4.291,0,0,0-3.445,1.487,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.12,4.12,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.313,6.313,0,0,0-1.178-4.1A4.1,4.1,0,0,0,1945.313,1377.59Z" style="fill: #fff"/>
        <path d="M1966.651,1390.184h-2.26V1382.1q0-4.512-3.279-4.511a3.55,3.55,0,0,0-2.805,1.28,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1998.394,1390.184h-2.26v-8.138a6.164,6.164,0,0,0-.723-3.4,2.74,2.74,0,0,0-2.433-1.051,3.006,3.006,0,0,0-2.459,1.328,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.26v-8.415q0-4.181-3.21-4.179a2.972,2.972,0,0,0-2.454,1.251,5.2,5.2,0,0,0-.964,3.26v8.083h-2.26v-14.173h2.26v2.243h.055a4.789,4.789,0,0,1,4.382-2.575,4.078,4.078,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.657,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2011.919,1390.184h-2.259v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743v-2.326a8.72,8.72,0,0,1,4.795-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.658,3.619,3.619,0,0,0,2.777-1.183,4.246,4.246,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2022.689,1378.309a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.356,6.356,0,0,0-.972,3.738v7.224h-2.26v-14.173h2.26v2.92h.056a4.942,4.942,0,0,1,1.475-2.332,3.356,3.356,0,0,1,2.217-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2036.008,1390.184h-3.169l-6.228-6.809h-.056v6.809h-2.26V1369.2h2.26v13.3h.056l5.925-6.492h2.962l-6.544,6.837Z" style="fill: #fff"/>
        <path d="M2048.817,1383.666h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.06,3.211,3.211,0,0,0-2.584-1.092,3.641,3.641,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2057.934,1390.047a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.363,2.363,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2067.326,1383.181H2059.8V1381.4h7.524Z" style="fill: #fff"/>
        <path d="M2080.644,1390.184h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.934,6.934,0,0,0-4.6,1.743v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2095.148,1376.011l-5.622,14.173h-2.219l-5.346-14.173h2.48l3.583,10.3a9.337,9.337,0,0,1,.5,1.98h.055a9.347,9.347,0,0,1,.441-1.925l3.748-10.353Z" style="fill: #fff"/>
        <path d="M2106.827,1390.184h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2111.4,1372.413a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.434,1.434,0,0,1,.427-1.059,1.419,1.419,0,0,1,1.034-.421,1.456,1.456,0,0,1,1.054.421,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2111.4,1372.413Zm1.1,17.771h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2118.486,1390.184h-2.26V1369.2h2.26Z" style="fill: #fff"/>
        <path d="M2132.315,1390.184h-2.26v-2.214H2130a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.932,6.932,0,0,0-4.6,1.743v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2138.041,1388.136h-.055v2.048h-2.26V1369.2h2.26v9.3h.055a5.34,5.34,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.251,1.9,7.873,7.873,0,0,1,1.536,5.1,8.817,8.817,0,0,1-1.722,5.7,5.728,5.728,0,0,1-4.712,2.137A4.637,4.637,0,0,1,2138.041,1388.136Zm-.055-5.716v1.979a4.229,4.229,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.341,4,4,0,0,0-3.169,1.376A5.073,5.073,0,0,0,2137.986,1382.42Z" style="fill: #fff"/>
        <path d="M2153.73,1390.184h-2.26V1369.2h2.26Z" style="fill: #fff"/>
        <path d="M2168.8,1383.666h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.361,4.361,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.159,8.159,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2181.981,1388.136h-.056v2.048h-2.26V1369.2h2.26v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.251,1.9,7.879,7.879,0,0,1,1.536,5.1,8.812,8.812,0,0,1-1.723,5.7,5.727,5.727,0,0,1-4.712,2.137A4.635,4.635,0,0,1,2181.981,1388.136Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.259,7.259,0,0,0,1.165-4.388,5.739,5.739,0,0,0-1.088-3.71,3.6,3.6,0,0,0-2.95-1.341,4,4,0,0,0-3.169,1.376A5.078,5.078,0,0,0,2181.925,1382.42Z" style="fill: #fff"/>
        <path d="M2206.82,1390.184h-2.26v-2.242h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.045,0-5.043-6.034v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.454,3.454,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.205v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2211.692,1372.413a1.432,1.432,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.053,1.448,1.448,0,0,1,1.461-1.48,1.458,1.458,0,0,1,1.054.421,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.446,1.446,0,0,1,2211.692,1372.413Zm1.1,17.771h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2218.782,1390.184h-2.26V1369.2h2.26Z" style="fill: #fff"/>
        <path d="M2234.554,1390.184h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055V1369.2h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.78,3.78,0,0,0-2.866-1.19,3.892,3.892,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2232.294,1383.776Z" style="fill: #fff"/>
        <path d="M2239.44,1372.413a1.433,1.433,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.053,1.448,1.448,0,0,1,1.461-1.48,1.458,1.458,0,0,1,1.054.421,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.446,1.446,0,0,1,2239.44,1372.413Zm1.1,17.771h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2255.983,1390.184h-2.26V1382.1q0-4.512-3.279-4.511a3.55,3.55,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2271.439,1389.049q0,7.807-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.269a9.371,9.371,0,0,0,4.547,1.328q5.21,0,5.209-5.564V1387.8h-.056a5.695,5.695,0,0,1-9.087.825,7.573,7.573,0,0,1-1.605-5.074,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.839,6.839,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.136,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.071,5.071,0,0,0,2269.179,1383.776Z" style="fill: #fff"/>
        <path d="M2282.607,1389.673v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.515,2.515,0,0,0-.69-.7,5.235,5.235,0,0,0-1.019-.547q-.586-.242-1.261-.5a16.173,16.173,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.214,3.214,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.41,3.41,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.369,6.369,0,0,0-3.582-1.023,4.176,4.176,0,0,0-1.145.144,2.8,2.8,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.034,2.034,0,0,0,.586.665,4.419,4.419,0,0,0,.936.526q.551.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.857,3.36,3.36,0,0,1,.806,1.1,3.552,3.552,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.233,1.288,5.673,5.673,0,0,1-1.777.76,8.752,8.752,0,0,1-2.109.249A7.987,7.987,0,0,1,2282.607,1389.673Z" style="fill: #fff"/>
        <path d="M2305.821,1376.011l-6.491,16.444q-1.736,4.4-4.877,4.4a5.113,5.113,0,0,1-1.475-.181v-2.034a4.178,4.178,0,0,0,1.337.249,2.771,2.771,0,0,0,2.563-2.048l1.13-2.685-5.512-14.146H2295l3.817,10.907c.046.138.142.5.289,1.08h.083q.069-.333.275-1.052l4.01-10.935Z" style="fill: #fff"/>
        <path d="M2306.544,1389.673v-2.437a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.511,2.511,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.045,4.045,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.053,8.053,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.023,4.168,4.168,0,0,0-1.144.144,2.8,2.8,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.672,1.672,0,0,0-.2.811,1.946,1.946,0,0,0,.2.926,2.034,2.034,0,0,0,.586.665,4.428,4.428,0,0,0,.937.526q.55.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.832,5.832,0,0,1,1.268.857,3.375,3.375,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.51,3.51,0,0,1-.461,1.827,3.981,3.981,0,0,1-1.234,1.288,5.662,5.662,0,0,1-1.777.76,8.75,8.75,0,0,1-2.108.249A7.994,7.994,0,0,1,2306.544,1389.673Z" style="fill: #fff"/>
        <path d="M2325.073,1390.047a4.364,4.364,0,0,1-2.109.442q-3.707,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.365,2.365,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2338.584,1383.666h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.641,4.641,0,0,0-.944-3.06,3.214,3.214,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2361.191,1390.184h-2.26v-8.138a6.154,6.154,0,0,0-.724-3.4,2.738,2.738,0,0,0-2.432-1.051,3.006,3.006,0,0,0-2.459,1.328,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.261v-8.415q0-4.181-3.21-4.179a2.972,2.972,0,0,0-2.453,1.251,5.2,5.2,0,0,0-.965,3.26v8.083h-2.259v-14.173h2.259v2.243h.056a4.789,4.789,0,0,1,4.382-2.575,4.08,4.08,0,0,1,4,2.934,5.032,5.032,0,0,1,4.685-2.934q4.657,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2363.761,1389.673v-2.437a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.086,3.854,3.854,0,0,1-.242-1.426,3.4,3.4,0,0,1,.455-1.765,4.053,4.053,0,0,1,1.212-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.023,4.163,4.163,0,0,0-1.144.144,2.8,2.8,0,0,0-.875.409,1.875,1.875,0,0,0-.565.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.034,2.034,0,0,0,.586.665,4.4,4.4,0,0,0,.937.526q.55.236,1.253.512a17.348,17.348,0,0,1,1.682.741,5.832,5.832,0,0,1,1.268.857,3.372,3.372,0,0,1,.8,1.1,3.551,3.551,0,0,1,.283,1.481,3.51,3.51,0,0,1-.461,1.827,3.981,3.981,0,0,1-1.234,1.288,5.662,5.662,0,0,1-1.777.76,8.752,8.752,0,0,1-2.109.249A7.99,7.99,0,0,1,2363.761,1389.673Z" style="fill: #fff"/>
        <path d="M2376.53,1390.489a1.457,1.457,0,0,1-1.082-.457,1.505,1.505,0,0,1-.449-1.093,1.527,1.527,0,0,1,.449-1.1,1.445,1.445,0,0,1,1.082-.464,1.48,1.48,0,0,1,1.1.464,1.513,1.513,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
        <path d="M2400.087,1390.184h-10.472v-19.847h10.031v2.1h-7.717v6.6h7.138v2.089h-7.138v6.949h8.158Z" style="fill: #fff"/>
        <path d="M1872.228,1417.681h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.36,4.36,0,0,0,3.335,1.287,6.919,6.919,0,0,0,4.381-1.578v2.131a8.155,8.155,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.974,5.974,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1886.511,1424.2h-2.26v-8.083q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.354h.056a5.086,5.086,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M1899.54,1423.55a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.166,7.166,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.326a5.728,5.728,0,0,0-3.363-1.108,4.535,4.535,0,0,0-3.548,1.558,5.925,5.925,0,0,0-1.385,4.09,5.636,5.636,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1913.452,1417.681h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1928.066,1424.2h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.776h2.26Zm-2.26-6.408V1415.7a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.125,5.125,0,0,0,1925.806,1417.793Z" style="fill: #fff"/>
        <path d="M1939.4,1406.428a1.424,1.424,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,1939.4,1406.428Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M1955.944,1424.2h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.354h.055a5.088,5.088,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1975.422,1423.55a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.326a5.728,5.728,0,0,0-3.363-1.108,4.539,4.539,0,0,0-3.549,1.558,5.93,5.93,0,0,0-1.384,4.09,5.64,5.64,0,0,0,1.3,3.93,4.479,4.479,0,0,0,3.494,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1983.891,1424.533a6.528,6.528,0,0,1-5-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.77,5.411,7.631,7.631,0,0,1-1.909,5.433A6.67,6.67,0,0,1,1983.891,1424.533Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,1984.056,1411.605Z" style="fill: #fff"/>
        <path d="M1999.579,1424.533a6.531,6.531,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.761,7.761,0,0,1,1.771,5.411,7.635,7.635,0,0,1-1.909,5.433A6.674,6.674,0,0,1,1999.579,1424.533Zm.166-12.928a4.291,4.291,0,0,0-3.446,1.488,6.132,6.132,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.349,4.349,0,0,0,3.432,1.453,4.124,4.124,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.314,6.314,0,0,0-1.177-4.1A4.107,4.107,0,0,0,1999.745,1411.605Z" style="fill: #fff"/>
        <path d="M2016.728,1412.325a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259v-14.174h2.259v2.921h.056a4.932,4.932,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2030.378,1424.2h-2.259v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.59-5.184,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.776h2.259Zm-2.259-6.408V1415.7a4.065,4.065,0,0,0-1.13-2.906,3.783,3.783,0,0,0-2.867-1.191,3.9,3.9,0,0,0-3.251,1.523,6.682,6.682,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.707,3.707,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,2028.119,1417.793Z" style="fill: #fff"/>
        <path d="M2035.264,1406.428a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2035.264,1406.428Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2051.807,1424.2h-2.26v-8.083q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.354h.056a5.086,5.086,0,0,1,4.629-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2065.319,1424.2h-2.26v-2.215H2063a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2075.276,1424.062a4.349,4.349,0,0,1-2.109.444q-3.706,0-3.707-4.153v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.733v4.193h3.556v1.938h-3.556v7.987a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2078.605,1406.428a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2078.605,1406.428Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2095.148,1424.2h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.354h.055a5.088,5.088,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2110.6,1423.066q0,7.806-7.441,7.806a9.956,9.956,0,0,1-4.575-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.55h-.056a5.693,5.693,0,0,1-9.087.823,7.57,7.57,0,0,1-1.605-5.072,8.851,8.851,0,0,1,1.729-5.744,5.766,5.766,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.26Zm-2.26-5.273V1415.7a4.066,4.066,0,0,0-1.137-2.893,3.738,3.738,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.847,6.847,0,0,0-1.185,4.285,5.876,5.876,0,0,0,1.136,3.785,3.667,3.667,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.066,5.066,0,0,0,2108.343,1417.793Z" style="fill: #fff"/>
        <path d="M2138.556,1410.027l-4.23,14.174h-2.343l-2.907-10.146a6.524,6.524,0,0,1-.221-1.315h-.055a6.213,6.213,0,0,1-.29,1.287l-3.155,10.174h-2.26l-4.271-14.174h2.37l2.921,10.658a6.525,6.525,0,0,1,.193,1.274h.109a6.12,6.12,0,0,1,.248-1.3l3.252-10.63h2.068l2.921,10.686a7.733,7.733,0,0,1,.207,1.273h.11a6.006,6.006,0,0,1,.234-1.273l2.867-10.686Z" style="fill: #fff"/>
        <path d="M2141.485,1406.428a1.424,1.424,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,2141.485,1406.428Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2152.861,1424.062a4.349,4.349,0,0,1-2.109.444q-3.706,0-3.707-4.153v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.733v4.193h3.556v1.938H2149.3v7.987a3.325,3.325,0,0,0,.482,2.034,1.922,1.922,0,0,0,1.6.609,2.377,2.377,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2166.745,1424.2h-2.26v-8.166q0-4.429-3.28-4.43a3.573,3.573,0,0,0-2.784,1.28,4.788,4.788,0,0,0-1.13,3.288v8.028h-2.259v-20.984h2.259v9.164h.056a5.127,5.127,0,0,1,4.63-2.686q4.769,0,4.768,5.771Z" style="fill: #fff"/>
        <path d="M2175.75,1423.688v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.541,2.541,0,0,0-.689-.7,5.375,5.375,0,0,0-1.019-.546q-.586-.243-1.261-.505a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.166,4.166,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.664,1.664,0,0,0-.2.809,1.954,1.954,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.236,1.254.512a17.579,17.579,0,0,1,1.681.74,5.8,5.8,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2175.75,1423.688Z" style="fill: #fff"/>
        <path d="M2190.048,1422.152h-.055v8.567h-2.26v-20.692h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.16,5.16,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.529,5.1,8.813,8.813,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.718,4.718,0,0,1,2190.048,1422.152Zm-.055-5.716v1.979a4.224,4.224,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2189.993,1416.436Z" style="fill: #fff"/>
        <path d="M2214.818,1417.681h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2227.006,1423.55a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.326a5.728,5.728,0,0,0-3.363-1.108,4.539,4.539,0,0,0-3.549,1.558,5.93,5.93,0,0,0-1.384,4.09,5.64,5.64,0,0,0,1.3,3.93,4.479,4.479,0,0,0,3.494,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2230.735,1406.428a1.424,1.424,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,2230.735,1406.428Zm1.1,17.773h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2245.665,1424.2h-2.259v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2251.336,1424.2h-2.259v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M2256.223,1406.428a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2256.223,1406.428Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2260.2,1423.688v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.559,2.559,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.546q-.587-.243-1.261-.505a15.967,15.967,0,0,1-1.646-.754,4.956,4.956,0,0,1-1.186-.859,3.184,3.184,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.654,1.654,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.236,1.254.512a17.6,17.6,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.964,7.964,0,0,1,2260.2,1423.688Z" style="fill: #fff"/>
        <path d="M2278.727,1424.062a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.733v4.193h3.556v1.938h-3.556v7.987a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2280.043,1423.688v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.541,2.541,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.26-.505a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.056,4.056,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.166,4.166,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.664,1.664,0,0,0-.2.809,1.954,1.954,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.236,1.254.512a17.579,17.579,0,0,1,1.681.74,5.8,5.8,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.512,3.512,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2280.043,1423.688Z" style="fill: #fff"/>
        <path d="M2300.943,1404.352l-9.481,23.143h-2.108l9.453-23.143Z" style="fill: #fff"/>
        <path d="M2322.212,1424.2h-2.259v-8.139a6.165,6.165,0,0,0-.724-3.4,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242h.056a4.79,4.79,0,0,1,4.381-2.574,4.079,4.079,0,0,1,4,2.935,5.032,5.032,0,0,1,4.684-2.935q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2335.738,1424.2h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2350.862,1424.2h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.354h.055a5.088,5.088,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2365.683,1424.2h-2.26v-2.242h-.055a4.64,4.64,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2376.37,1405.211a3,3,0,0,0-1.5-.374q-2.372,0-2.371,3v2.187h3.308v1.938H2372.5V1424.2h-2.246v-12.236h-2.411v-1.938h2.411v-2.3a4.785,4.785,0,0,1,1.282-3.522,4.312,4.312,0,0,1,3.2-1.3,4.417,4.417,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2387.484,1424.2h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2400.513,1423.55a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.725,5.725,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.384,4.09,5.64,5.64,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1870.988,1458.216h-2.26V1456h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.122,3.894,3.894,0,0,1-1.192-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.795-1.329q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.512,5.512,0,0,0-2.371.782,2.261,2.261,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1886.112,1458.216h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1901.567,1458.216h-2.26v-2.408h-.056a5.677,5.677,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.518,4.518,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.708,3.708,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,1899.307,1451.808Z" style="fill: #fff"/>
        <path d="M1914.775,1456.168h-.056v8.567h-2.26v-20.692h2.26v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.91,7.91,0,0,1,1.529,5.1,8.808,8.808,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.139A4.716,4.716,0,0,1,1914.775,1456.168Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.254,7.254,0,0,0,1.165-4.387,5.735,5.735,0,0,0-1.088-3.709,3.6,3.6,0,0,0-2.95-1.343,4,4,0,0,0-3.169,1.377A5.078,5.078,0,0,0,1914.719,1450.452Z" style="fill: #fff"/>
        <path d="M1935.562,1446.34a2.758,2.758,0,0,0-1.708-.457,2.879,2.879,0,0,0-2.419,1.372,6.351,6.351,0,0,0-.972,3.736v7.225H1928.2v-14.173h2.259v2.921h.056a4.927,4.927,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1943.067,1458.549a6.529,6.529,0,0,1-5-1.987,7.374,7.374,0,0,1-1.868-5.266,7.688,7.688,0,0,1,1.943-5.579,6.973,6.973,0,0,1,5.25-2.006,6.315,6.315,0,0,1,4.927,1.952,7.764,7.764,0,0,1,1.77,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,1943.067,1458.549Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,1943.232,1445.621Z" style="fill: #fff"/>
        <path d="M1964.9,1458.216h-2.26v-2.408h-.056a5.677,5.677,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.518,4.518,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.708,3.708,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,1962.641,1451.808Z" style="fill: #fff"/>
        <path d="M1980.038,1458.216h-2.259v-2.242h-.056a4.638,4.638,0,0,1-4.354,2.575q-5.044,0-5.043-6.036v-8.47h2.246v8.111q0,4.484,3.417,4.484a3.451,3.451,0,0,0,2.721-1.224,4.7,4.7,0,0,0,1.069-3.2v-8.167h2.259Z" style="fill: #fff"/>
        <path d="M1993.371,1457.566a7.331,7.331,0,0,1-3.859.983,6.374,6.374,0,0,1-4.871-1.973,7.169,7.169,0,0,1-1.853-5.114,7.874,7.874,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.927,5.927,0,0,0-1.385,4.09,5.639,5.639,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.439,5.649,5.649,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M1997.1,1440.444a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,1997.1,1440.444Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2013.642,1458.216h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2029.1,1457.082q0,7.806-7.441,7.8a9.959,9.959,0,0,1-4.575-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.21,0,5.209-5.565v-1.549h-.055a5.694,5.694,0,0,1-9.088.823,7.57,7.57,0,0,1-1.605-5.072,8.852,8.852,0,0,1,1.729-5.745,5.768,5.768,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.091a4.067,4.067,0,0,0-1.136-2.892,3.737,3.737,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.844,6.844,0,0,0-1.185,4.284,5.88,5.88,0,0,0,1.136,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,2026.837,1451.808Z" style="fill: #fff"/>
        <path d="M2052.034,1458.216h-2.26v-2.408h-.056a5.677,5.677,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.123,5.123,0,0,0,2049.774,1451.808Z" style="fill: #fff"/>
        <path d="M2067.1,1451.7h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.381-1.578v2.132a8.162,8.162,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.933,7.933,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.974,5.974,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2076.218,1458.078a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.92,1.92,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2088.49,1458.216h-2.26V1456h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.122,3.894,3.894,0,0,1-1.192-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.512,5.512,0,0,0-2.371.782,2.261,2.261,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2093.059,1440.444a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,2093.059,1440.444Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2100.149,1458.216h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2115.218,1451.7h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.357,5.956,5.956,0,0,1-4.7-1.931,7.933,7.933,0,0,1-1.708-5.433,7.77,7.77,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.53,7.53,0,0,1,1.515,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.713,1.148,5.214,5.214,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2129.833,1458.216h-2.259v-2.408h-.056a5.678,5.678,0,0,1-9.1.837,7.833,7.833,0,0,1-1.59-5.183,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.123,5.123,0,0,0,2127.574,1451.808Z" style="fill: #fff"/>
        <path d="M2135.628,1455.06l-2.205,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M2156.1,1458.216h-2.26V1456h-.054a4.73,4.73,0,0,1-4.341,2.547,4.632,4.632,0,0,1-3.3-1.122,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.709,8.709,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2171.221,1458.216h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.226,4.338Z" style="fill: #fff"/>
        <path d="M2186.345,1458.216h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.226,4.338Z" style="fill: #fff"/>
        <path d="M2195.655,1458.549a6.529,6.529,0,0,1-5-1.987,7.37,7.37,0,0,1-1.868-5.266,7.688,7.688,0,0,1,1.943-5.579,6.973,6.973,0,0,1,5.25-2.006,6.315,6.315,0,0,1,4.927,1.952,7.764,7.764,0,0,1,1.77,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2195.655,1458.549Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2195.82,1445.621Z" style="fill: #fff"/>
        <path d="M2211.992,1458.078a4.352,4.352,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2224.263,1458.216H2222V1456h-.054a4.73,4.73,0,0,1-4.341,2.547,4.632,4.632,0,0,1-3.3-1.122,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.709,8.709,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2234.22,1458.078a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.92,1.92,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2247.732,1451.7h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.354,4.354,0,0,0,3.334,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2262.346,1458.216h-2.26v-2.408h-.055a5.678,5.678,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.183,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.78,3.78,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.185,4.208,6.021,6.021,0,0,0,1.136,3.868,3.708,3.708,0,0,0,3.053,1.419,3.855,3.855,0,0,0,3.066-1.37A5.122,5.122,0,0,0,2260.086,1451.808Z" style="fill: #fff"/>
        <path d="M2285.283,1458.216h-2.26v-2.408h-.056a5.677,5.677,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,2283.023,1451.808Z" style="fill: #fff"/>
        <path d="M2296.369,1446.34a2.758,2.758,0,0,0-1.708-.457,2.879,2.879,0,0,0-2.419,1.372,6.351,6.351,0,0,0-.972,3.736v7.225h-2.26v-14.173h2.26v2.921h.056a4.933,4.933,0,0,1,1.474-2.332,3.349,3.349,0,0,1,2.218-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2308.076,1458.216h-2.26V1456h-.055a4.729,4.729,0,0,1-4.341,2.547,4.628,4.628,0,0,1-3.3-1.122,3.894,3.894,0,0,1-1.192-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.512,5.512,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2329.263,1444.043l-4.23,14.173h-2.343l-2.907-10.145a6.536,6.536,0,0,1-.221-1.315h-.055a6.227,6.227,0,0,1-.29,1.287l-3.155,10.173h-2.26l-4.271-14.173h2.37l2.921,10.658a6.526,6.526,0,0,1,.193,1.273h.109a6.111,6.111,0,0,1,.248-1.3l3.252-10.63h2.068l2.921,10.685a7.766,7.766,0,0,1,.207,1.274h.11a6,6,0,0,1,.234-1.274l2.867-10.685Z" style="fill: #fff"/>
        <path d="M2332.192,1440.444a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.456,1.456,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.445,1.445,0,0,1,2332.192,1440.444Zm1.1,17.772h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2348.735,1458.216h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2364.19,1457.082q0,7.806-7.442,7.8a9.955,9.955,0,0,1-4.574-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.056a5.693,5.693,0,0,1-9.087.823,7.57,7.57,0,0,1-1.605-5.072,8.852,8.852,0,0,1,1.729-5.745,5.768,5.768,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,2361.93,1451.808Z" style="fill: #fff"/>
        <path d="M2367.063,1457.7v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.386,5.386,0,0,0-1.02-.547q-.586-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.209,3.209,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.407,3.407,0,0,1,.454-1.764,4.057,4.057,0,0,1,1.213-1.287,5.658,5.658,0,0,1,1.73-.783,7.685,7.685,0,0,1,2.005-.262,8.09,8.09,0,0,1,3.279.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.659,1.659,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526c.368.156.785.327,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.552,3.552,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.628,5.628,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.25A7.976,7.976,0,0,1,2367.063,1457.7Z" style="fill: #fff"/>
        <path d="M2379.831,1458.521a1.46,1.46,0,0,1-1.082-.457,1.51,1.51,0,0,1-.448-1.094,1.534,1.534,0,0,1,.448-1.1,1.451,1.451,0,0,1,1.082-.463,1.485,1.485,0,0,1,1.1.463,1.516,1.516,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.551Z" style="fill: #fff"/>
        <path d="M2390.862,1457.414v-2.741a5.287,5.287,0,0,0,1.123.748,9.092,9.092,0,0,0,1.378.56,10.912,10.912,0,0,0,1.454.353,8.069,8.069,0,0,0,1.35.125,5.274,5.274,0,0,0,3.19-.8,2.993,2.993,0,0,0,.7-3.689,3.963,3.963,0,0,0-.972-1.087,9.659,9.659,0,0,0-1.467-.941q-.847-.45-1.826-.948-1.033-.527-1.929-1.066a8.327,8.327,0,0,1-1.557-1.19,4.956,4.956,0,0,1-1.04-1.474,5.048,5.048,0,0,1,.213-4.291,5.1,5.1,0,0,1,1.557-1.654,7.046,7.046,0,0,1,2.2-.969,10.032,10.032,0,0,1,2.514-.318,9.594,9.594,0,0,1,4.259.706v2.616a7.7,7.7,0,0,0-4.492-1.218,7.376,7.376,0,0,0-1.517.159,4.25,4.25,0,0,0-1.349.519,2.984,2.984,0,0,0-.965.928,2.47,2.47,0,0,0-.372,1.384,2.859,2.859,0,0,0,.282,1.314,3.245,3.245,0,0,0,.834,1.011,8.281,8.281,0,0,0,1.344.885c.527.287,1.137.6,1.825.942q1.062.525,2.012,1.107a9.258,9.258,0,0,1,1.668,1.287,5.749,5.749,0,0,1,1.136,1.564,4.4,4.4,0,0,1,.42,1.966,5,5,0,0,1-.571,2.484,4.7,4.7,0,0,1-1.544,1.654,6.674,6.674,0,0,1-2.239.92,12.156,12.156,0,0,1-2.673.285,10.787,10.787,0,0,1-1.157-.077c-.46-.05-.929-.125-1.406-.221a11.425,11.425,0,0,1-1.357-.36A4.23,4.23,0,0,1,2390.862,1457.414Z" style="fill: #fff"/>
        <path d="M1872.3,1492.232h-2.26v-2.242h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.484,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M1887.724,1492.232h-2.26v-8.083q0-4.513-3.279-4.513a3.552,3.552,0,0,0-2.8,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.056a5.088,5.088,0,0,1,4.629-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1903.179,1492.232h-2.26v-2.408h-.055a5.68,5.68,0,0,1-9.1.837,7.836,7.836,0,0,1-1.591-5.184,8.512,8.512,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.78,3.78,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.021,6.021,0,0,0,1.136,3.868,3.71,3.71,0,0,0,3.053,1.419,3.855,3.855,0,0,0,3.066-1.37A5.124,5.124,0,0,0,1900.919,1485.824Z" style="fill: #fff"/>
        <path d="M1918.247,1485.713h-9.962a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1928.176,1480.356a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.174h2.26v2.921h.055a4.945,4.945,0,0,1,1.475-2.332,3.353,3.353,0,0,1,2.218-.838,3.653,3.653,0,0,1,1.35.195Z" style="fill: #fff"/>
        <path d="M1928.928,1491.719v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.087,3.854,3.854,0,0,1-.242-1.426,3.4,3.4,0,0,1,.455-1.765,4.074,4.074,0,0,1,1.212-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.493,4.493,0,0,0,.937.527q.551.234,1.253.511a17.6,17.6,0,0,1,1.682.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.805,1.1,3.55,3.55,0,0,1,.283,1.48,3.51,3.51,0,0,1-.461,1.827,3.958,3.958,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.967,7.967,0,0,1,1928.928,1491.719Z" style="fill: #fff"/>
        <path d="M1947.456,1492.093a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153V1480h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.555V1480H1943.9v7.986a3.325,3.325,0,0,0,.482,2.034,1.918,1.918,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1959.728,1492.232h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.614-2.907-3.613a6.926,6.926,0,0,0-4.6,1.745v-2.326a8.723,8.723,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1974.853,1492.232h-2.26v-8.083q0-4.513-3.279-4.513a3.551,3.551,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1990.308,1492.232h-2.26v-2.408h-.055a5.68,5.68,0,0,1-9.1.837,7.831,7.831,0,0,1-1.591-5.184,8.512,8.512,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.021,6.021,0,0,0,1.136,3.868,3.71,3.71,0,0,0,3.053,1.419,3.855,3.855,0,0,0,3.066-1.37A5.124,5.124,0,0,0,1988.048,1485.824Z" style="fill: #fff"/>
        <path d="M1995.194,1474.46a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,1995.194,1474.46Zm1.1,17.772h-2.259v-14.174h2.259Z" style="fill: #fff"/>
        <path d="M2011.737,1492.232h-2.26v-8.083q0-4.513-3.279-4.513a3.551,3.551,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2027.192,1491.1q0,7.806-7.442,7.806a9.955,9.955,0,0,1-4.574-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.573,7.573,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.769,5.769,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.26Zm-2.26-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.738,3.738,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.842,6.842,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.667,3.667,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.07,5.07,0,0,0,2024.932,1485.824Z" style="fill: #fff"/>
        <path d="M2045.144,1492.564a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952,7.767,7.767,0,0,1,1.77,5.412,7.63,7.63,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2045.144,1492.564Zm.165-12.928a4.287,4.287,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2045.309,1479.636Z" style="fill: #fff"/>
        <path d="M2061.907,1473.242a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.186h3.307V1480h-3.307v12.235h-2.247V1480h-2.411v-1.939h2.411v-2.3a4.785,4.785,0,0,1,1.282-3.522,4.316,4.316,0,0,1,3.2-1.3,4.417,4.417,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2082.959,1492.232H2080.7v-8.166q0-4.429-3.28-4.43a3.57,3.57,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.028h-2.26v-20.983h2.26v9.163h.056a5.129,5.129,0,0,1,4.63-2.686q4.769,0,4.767,5.772Z" style="fill: #fff"/>
        <path d="M2092.27,1492.564a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952,7.767,7.767,0,0,1,1.77,5.412,7.63,7.63,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2092.27,1492.564Zm.165-12.928a4.287,4.287,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1A5.8,5.8,0,0,0,2089,1489.2a4.347,4.347,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2092.435,1479.636Z" style="fill: #fff"/>
        <path d="M2104.32,1492.232h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M2109.206,1474.46a1.429,1.429,0,0,1-1.034-.415,1.406,1.406,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.46-1.482,1.456,1.456,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.442,1.442,0,0,1,2109.206,1474.46Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2113.182,1491.719v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.242-1.261-.5a16.065,16.065,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.087,3.833,3.833,0,0,1-.242-1.426,3.413,3.413,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.819,2.819,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.51,4.51,0,0,0,.936.527q.552.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.8,1.1,3.55,3.55,0,0,1,.282,1.48,3.509,3.509,0,0,1-.46,1.827,3.958,3.958,0,0,1-1.234,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2113.182,1491.719Z" style="fill: #fff"/>
        <path d="M2131.71,1492.093a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153V1480h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.555V1480h-3.555v7.986a3.325,3.325,0,0,0,.482,2.034,1.918,1.918,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2135.039,1474.46a1.429,1.429,0,0,1-1.034-.415,1.406,1.406,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.46-1.482,1.456,1.456,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.442,1.442,0,0,1,2135.039,1474.46Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2149.488,1491.582a7.328,7.328,0,0,1-3.859.982,6.373,6.373,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.693v2.325a5.735,5.735,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.644,5.644,0,0,0,1.3,3.931,4.478,4.478,0,0,0,3.493,1.439,5.649,5.649,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M2162.7,1490.183h-.056v8.568h-2.26v-20.693h2.26v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.156,5.156,0,0,1,4.257,1.9,7.9,7.9,0,0,1,1.53,5.1,8.811,8.811,0,0,1-1.723,5.695,5.723,5.723,0,0,1-4.712,2.139A4.716,4.716,0,0,1,2162.7,1490.183Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.257,7.257,0,0,0,1.165-4.388,5.733,5.733,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.075,5.075,0,0,0,2162.644,1484.467Z" style="fill: #fff"/>
        <path d="M2183.487,1480.356a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.174h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.354,3.354,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M2190.992,1492.564a6.532,6.532,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.952,7.762,7.762,0,0,1,1.771,5.412,7.634,7.634,0,0,1-1.909,5.432A6.673,6.673,0,0,1,2190.992,1492.564Zm.165-12.928a4.289,4.289,0,0,0-3.446,1.489,6.133,6.133,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.346,4.346,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2191.157,1479.636Z" style="fill: #fff"/>
        <path d="M2203.041,1491.636a8.909,8.909,0,0,1-1.4,5.378,4.683,4.683,0,0,1-4,1.889,4.235,4.235,0,0,1-1.874-.442v-2.119a3.732,3.732,0,0,0,1.93.623q3.086,0,3.086-4.955v-13.952h2.259Zm-1.1-17.176a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.46,1.46,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.445,1.445,0,0,1,2201.94,1474.46Z" style="fill: #fff"/>
        <path d="M2218.111,1485.713h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.631,4.631,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2230.3,1491.582a7.327,7.327,0,0,1-3.858.982,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.4,7.4,0,0,1,3.281.693v2.325a5.735,5.735,0,0,0-3.363-1.108,4.539,4.539,0,0,0-3.549,1.558,5.93,5.93,0,0,0-1.384,4.09,5.643,5.643,0,0,0,1.3,3.931,4.482,4.482,0,0,0,3.494,1.439,5.646,5.646,0,0,0,3.471-1.231Z" style="fill: #fff"/>
        <path d="M2239.416,1492.093a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153V1480h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.555V1480h-3.555v7.986a3.325,3.325,0,0,0,.482,2.034,1.918,1.918,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2261.957,1492.232H2259.7v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.836,7.836,0,0,1-1.59-5.184,8.517,8.517,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.125,5.125,0,0,0,2259.7,1485.824Z" style="fill: #fff"/>
        <path d="M2271.583,1492.564a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.267,7.689,7.689,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.762,7.762,0,0,1,1.771,5.412,7.634,7.634,0,0,1-1.909,5.432A6.674,6.674,0,0,1,2271.583,1492.564Zm.165-12.928a4.288,4.288,0,0,0-3.445,1.489,6.127,6.127,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.345,4.345,0,0,0,3.431,1.453,4.126,4.126,0,0,0,3.37-1.426,6.206,6.206,0,0,0,1.177-4.055,6.315,6.315,0,0,0-1.177-4.1A4.109,4.109,0,0,0,2271.748,1479.636Z" style="fill: #fff"/>
        <path d="M2290.992,1491.582a7.331,7.331,0,0,1-3.859.982,6.37,6.37,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.693v2.325a5.735,5.735,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.644,5.644,0,0,0,1.3,3.931,4.478,4.478,0,0,0,3.493,1.439,5.649,5.649,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M2304.972,1492.232h-2.26v-2.242h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.484,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2328.722,1492.232h-2.26v-8.139a6.166,6.166,0,0,0-.723-3.4,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.26v-8.416q0-4.179-3.21-4.18a2.968,2.968,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242H2311a4.792,4.792,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.657,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2343.488,1485.713h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2357.771,1492.232h-2.26v-8.083q0-4.513-3.279-4.513a3.551,3.551,0,0,0-2.8,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26v-14.174h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2367.728,1492.093a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.708-4.153V1480h-2.424v-1.939h2.424v-3.46l2.26-.733v4.193h3.556V1480h-3.556v7.986a3.317,3.317,0,0,0,.483,2.034,1.916,1.916,0,0,0,1.6.61,2.376,2.376,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2380,1492.232h-2.259v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.614-2.908-3.613a6.921,6.921,0,0,0-4.6,1.745v-2.326a8.72,8.72,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.169,2.169,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.964.657,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2389.956,1492.093a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153V1480h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.555V1480H2386.4v7.986a3.325,3.325,0,0,0,.482,2.034,1.918,1.918,0,0,0,1.6.61,2.375,2.375,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2393.287,1474.46a1.43,1.43,0,0,1-1.035-.415,1.406,1.406,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,2393.287,1474.46Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2404.015,1492.564a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952,7.762,7.762,0,0,1,1.77,5.412,7.63,7.63,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2404.015,1492.564Zm.165-12.928a4.287,4.287,0,0,0-3.445,1.489,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2404.18,1479.636Z" style="fill: #fff"/>
        <path d="M1870.505,1525.6a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.539,4.539,0,0,0-3.549,1.558,5.929,5.929,0,0,0-1.384,4.089,5.641,5.641,0,0,0,1.3,3.931,4.479,4.479,0,0,0,3.494,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1875.335,1526.248h-2.259v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M1880.222,1508.475a1.425,1.425,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,1880.222,1508.475Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1896.393,1519.728h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.357,4.357,0,0,0,3.335,1.288,6.915,6.915,0,0,0,4.381-1.579v2.132a8.154,8.154,0,0,1-4.918,1.357,5.955,5.955,0,0,1-4.7-1.931,7.933,7.933,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.292,5.292,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1910.676,1526.248h-2.26v-8.083q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M1920.633,1526.109a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.733v4.193h3.555v1.938h-3.555V1522a3.325,3.325,0,0,0,.482,2.034,1.92,1.92,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M1939.306,1525.6a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.731,5.731,0,0,0-3.362-1.107,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.089,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1944.137,1526.248h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M1957.966,1526.248h-2.26v-2.215h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.167,2.167,0,0,0,.738,1.695,2.836,2.836,0,0,0,1.963.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M1968.736,1514.372a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26V1515h.056a4.938,4.938,0,0,1,1.474-2.332,3.351,3.351,0,0,1,2.218-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1971.5,1508.475a1.425,1.425,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,1971.5,1508.475Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M1982.876,1526.109a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.733v4.193h3.555v1.938h-3.555V1522a3.325,3.325,0,0,0,.482,2.034,1.921,1.921,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M1996.278,1512.074l-6.491,16.443q-1.736,4.4-4.877,4.4a5.151,5.151,0,0,1-1.475-.18v-2.034a4.178,4.178,0,0,0,1.337.249,2.774,2.774,0,0,0,2.563-2.049l1.13-2.686-5.511-14.145h2.507l3.817,10.907q.069.208.289,1.079h.083q.069-.33.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M1996.947,1526.552a1.457,1.457,0,0,1-1.082-.457,1.505,1.505,0,0,1-.449-1.093,1.533,1.533,0,0,1,.449-1.1,1.448,1.448,0,0,1,1.082-.463,1.483,1.483,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="technical_1_text">
      <g>
        <path d="M1863.505,1366.377v7.5h-2.314v-19.848h5.429a7.15,7.15,0,0,1,4.913,1.55,5.551,5.551,0,0,1,1.742,4.374,6.029,6.029,0,0,1-1.936,4.623,7.38,7.38,0,0,1-5.229,1.8Zm0-10.243v8.139h2.426a5.409,5.409,0,0,0,3.658-1.1,3.9,3.9,0,0,0,1.261-3.108q0-3.93-4.63-3.931Z" style="fill: #fff"/>
        <path d="M1883.624,1362a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M1891.976,1374.211a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,1891.976,1374.211Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.348,4.348,0,0,0,3.432,1.454,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,1892.141,1361.284Z" style="fill: #fff"/>
        <path d="M1911.9,1354.751a10.259,10.259,0,0,0-1.42-.18q-.826-.055-1.64-.056a3.112,3.112,0,0,0-1.633.374,2.475,2.475,0,0,0-.943,1.038,4.809,4.809,0,0,0-.441,1.584,16.922,16.922,0,0,0-.111,2.015v.18h7.5v14.173h-2.259v-12.236h-5.237v12.236h-2.246v-12.236h-2.411v-1.937h2.411v-.8q0-.747.076-1.5a7.243,7.243,0,0,1,.3-1.453,5.738,5.738,0,0,1,.607-1.316,3.853,3.853,0,0,1,1-1.065,4.852,4.852,0,0,1,1.5-.713,7.33,7.33,0,0,1,2.081-.263q.771,0,1.563.041c.529.029.967.066,1.317.112Z" style="fill: #fff"/>
        <path d="M1927.4,1373.228a7.319,7.319,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1931.977,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,1931.977,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1949,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1964.124,1373.879h-2.259V1365.8q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M1974.928,1373.741a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.259-.735v4.195h3.556v1.937h-3.556v7.987a3.329,3.329,0,0,0,.483,2.035,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1986.566,1356.107a1.433,1.433,0,0,1-1.034-.415,1.406,1.406,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.455,1.455,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.442,1.442,0,0,1,1986.566,1356.107Zm1.1,17.772h-2.259v-14.173h2.259Z" style="fill: #fff"/>
        <path d="M2003.955,1373.879H2001.7V1365.8q0-4.512-3.28-4.512a3.552,3.552,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2017.991,1371.831h-.056v8.567h-2.26v-20.692h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.153,5.153,0,0,1,4.257,1.9,7.905,7.905,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2017.991,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.73,5.73,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,2017.935,1366.114Z" style="fill: #fff"/>
        <path d="M2039.624,1362a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2053.418,1367.36h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2059.151,1371.831h-.056v8.567h-2.26v-20.692h2.26v2.491h.056a5.337,5.337,0,0,1,4.878-2.823,5.156,5.156,0,0,1,4.258,1.9,7.911,7.911,0,0,1,1.529,5.1,8.809,8.809,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,2059.151,1371.831Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.73,5.73,0,0,0-1.089-3.71,3.594,3.594,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.076,5.076,0,0,0,2059.095,1366.114Z" style="fill: #fff"/>
        <path d="M2083.527,1373.879h-2.26v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.624,4.624,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.932,6.932,0,0,0-4.6,1.743V1360.7a8.714,8.714,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.258,2.258,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2095.143,1362a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.972,3.737v7.225h-2.259v-14.173h2.259v2.92h.056a4.937,4.937,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.217-.837,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M2098.754,1356.107a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.482,1.482,0,0,1,0,2.1A1.44,1.44,0,0,1,2098.754,1356.107Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2116.144,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.055a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2132.446,1372.744q0,7.806-7.442,7.806a9.942,9.942,0,0,1-4.574-1v-2.269a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563V1371.5h-.056a5.695,5.695,0,0,1-9.088.824,7.575,7.575,0,0,1-1.6-5.073,8.854,8.854,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.593,4.593,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.089a4.065,4.065,0,0,0-1.137-2.893,3.736,3.736,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.841,6.841,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.074,5.074,0,0,0,2130.186,1367.47Z" style="fill: #fff"/>
        <path d="M2154.582,1373.879h-2.259v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.167,2.167,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2161.1,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M2167.935,1373.879h-2.26V1352.9h2.26Z" style="fill: #fff"/>
        <path d="M2191.686,1373.879h-2.26V1365.8q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.055a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2207.285,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2220.32,1373.228a7.319,7.319,0,0,1-3.859.983,6.38,6.38,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.556,5.929,5.929,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2235.078,1367.36h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2237.64,1373.367v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.241-1.261-.5a16.274,16.274,0,0,1-1.646-.755,4.974,4.974,0,0,1-1.186-.858,3.187,3.187,0,0,1-.715-1.086,3.833,3.833,0,0,1-.242-1.426,3.4,3.4,0,0,1,.454-1.764,4.036,4.036,0,0,1,1.213-1.287,5.634,5.634,0,0,1,1.73-.783,7.685,7.685,0,0,1,2.005-.262,8.073,8.073,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.023,4.215,4.215,0,0,0-1.145.144,2.822,2.822,0,0,0-.875.41,1.87,1.87,0,0,0-.564.628,1.663,1.663,0,0,0-.2.811,1.938,1.938,0,0,0,.2.927,2.031,2.031,0,0,0,.586.664,4.419,4.419,0,0,0,.936.526q.552.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.8,5.8,0,0,1,1.268.858,3.357,3.357,0,0,1,.8,1.1,3.553,3.553,0,0,1,.282,1.482,3.512,3.512,0,0,1-.46,1.827,3.988,3.988,0,0,1-1.234,1.287,5.651,5.651,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.988,7.988,0,0,1,2237.64,1373.367Z" style="fill: #fff"/>
        <path d="M2249.615,1373.367v-2.437a6.666,6.666,0,0,0,4.065,1.371q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.173,16.173,0,0,1-1.646-.755,4.953,4.953,0,0,1-1.186-.858,3.19,3.19,0,0,1-.716-1.086,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.036,4.036,0,0,1,1.213-1.287,5.639,5.639,0,0,1,1.729-.783,7.7,7.7,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.377,6.377,0,0,0-3.582-1.023,4.215,4.215,0,0,0-1.145.144,2.8,2.8,0,0,0-.875.41,1.86,1.86,0,0,0-.564.628,1.664,1.664,0,0,0-.2.811,1.938,1.938,0,0,0,.2.927,2.02,2.02,0,0,0,.586.664,4.395,4.395,0,0,0,.936.526q.551.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.569,3.569,0,0,1,.282,1.482,3.5,3.5,0,0,1-.461,1.827,3.985,3.985,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.744,8.744,0,0,1-2.108.249A7.988,7.988,0,0,1,2249.615,1373.367Z" style="fill: #fff"/>
        <path d="M2272.544,1373.879h-2.259v-2.214h-.055a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.929,6.929,0,0,0-4.6,1.743V1360.7a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.164,2.164,0,0,0,.738,1.695,2.836,2.836,0,0,0,1.963.658,3.619,3.619,0,0,0,2.777-1.183,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2284.161,1362a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.173h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M2297.844,1359.706l-6.49,16.443q-1.735,4.4-4.878,4.4a5.156,5.156,0,0,1-1.475-.18v-2.034a4.183,4.183,0,0,0,1.337.249,2.775,2.775,0,0,0,2.564-2.048l1.13-2.686-5.512-14.145h2.508l3.816,10.906q.069.208.289,1.08h.083q.069-.333.276-1.052l4.009-10.934Z" style="fill: #fff"/>
        <path d="M2308.035,1373.879v-19.848h5.456q10.445,0,10.445,9.675a9.776,9.776,0,0,1-2.9,7.384,10.735,10.735,0,0,1-7.765,2.789Zm2.314-17.745v15.641h2.949a8.342,8.342,0,0,0,6.049-2.09,7.855,7.855,0,0,0,2.164-5.924q0-7.628-8.075-7.627Z" style="fill: #fff"/>
        <path d="M2339.23,1356.134h-5.7v17.745h-2.316v-17.745h-5.69v-2.1h13.71Z" style="fill: #fff"/>
        <path d="M2356.633,1373.879h-2.562l-2.095-5.564H2343.6l-1.971,5.564h-2.577l7.579-19.848h2.4Zm-5.415-7.655-3.1-8.456a7.908,7.908,0,0,1-.3-1.329h-.056a7.5,7.5,0,0,1-.316,1.329l-3.073,8.456Z" style="fill: #fff"/>
        <path d="M2372.563,1373.049a11.544,11.544,0,0,1-5.456,1.162,8.776,8.776,0,0,1-6.752-2.727,10.083,10.083,0,0,1-2.536-7.155,10.579,10.579,0,0,1,2.852-7.7,9.661,9.661,0,0,1,7.235-2.933,11.541,11.541,0,0,1,4.657.816v2.478a9.4,9.4,0,0,0-4.685-1.191,7.171,7.171,0,0,0-5.518,2.285,8.624,8.624,0,0,0-2.115,6.1,8.206,8.206,0,0,0,1.977,5.778,6.708,6.708,0,0,0,5.188,2.153,9.7,9.7,0,0,0,5.153-1.328Z" style="fill: #fff"/>
        <path d="M1872.931,1407.894h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,1870.671,1401.486Z" style="fill: #fff"/>
        <path d="M1884.864,1396.019a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.354,6.354,0,0,0-.972,3.738v7.224h-2.26v-14.173h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.358,3.358,0,0,1,2.218-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1897.417,1407.894h-2.259v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.613a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.165,2.165,0,0,0,.738,1.7,2.842,2.842,0,0,0,1.964.658,3.616,3.616,0,0,0,2.776-1.184,4.242,4.242,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1919.452,1393.721l-4.231,14.173h-2.343l-2.907-10.145a6.667,6.667,0,0,1-.221-1.315h-.054a6.293,6.293,0,0,1-.29,1.287l-3.156,10.173h-2.259l-4.272-14.173h2.37l2.921,10.658a6.528,6.528,0,0,1,.194,1.273h.109a6,6,0,0,1,.248-1.3l3.252-10.63h2.067l2.921,10.686a7.646,7.646,0,0,1,.207,1.273h.111a5.871,5.871,0,0,1,.234-1.273l2.866-10.686Z" style="fill: #fff"/>
        <path d="M1923.227,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,1923.227,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1940.617,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.11,3.231v8.083H1928.9v-14.173h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1956.918,1406.759q0,7.807-7.441,7.807a9.939,9.939,0,0,1-4.574-1v-2.27a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.551h-.056a5.7,5.7,0,0,1-9.088.825,7.578,7.578,0,0,1-1.6-5.074,8.858,8.858,0,0,1,1.728-5.744,5.766,5.766,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.056v-1.965h2.259Zm-2.259-5.273v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.737,3.737,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.668,3.668,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.072,5.072,0,0,0,1954.659,1401.486Z" style="fill: #fff"/>
        <path d="M1960.638,1407.382v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.242-1.261-.5a16.274,16.274,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.086,3.833,3.833,0,0,1-.242-1.426,3.4,3.4,0,0,1,.455-1.765,4.053,4.053,0,0,1,1.212-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.162,4.162,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.409,1.875,1.875,0,0,0-.565.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.361,4.361,0,0,0,.937.527q.551.236,1.253.512a17.348,17.348,0,0,1,1.682.741,5.832,5.832,0,0,1,1.268.857,3.372,3.372,0,0,1,.805,1.1,3.551,3.551,0,0,1,.283,1.481,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,1960.638,1407.382Z" style="fill: #fff"/>
        <path d="M1998.78,1393.721l-4.231,14.173h-2.343l-2.907-10.145a6.6,6.6,0,0,1-.22-1.315h-.055a6.227,6.227,0,0,1-.29,1.287l-3.155,10.173h-2.26l-4.272-14.173h2.37l2.921,10.658a6.453,6.453,0,0,1,.194,1.273h.109a6,6,0,0,1,.248-1.3l3.252-10.63h2.067l2.921,10.686a7.646,7.646,0,0,1,.207,1.273h.111a5.871,5.871,0,0,1,.234-1.273l2.866-10.686Z" style="fill: #fff"/>
        <path d="M2002.555,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2002.555,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2014.778,1407.757a4.361,4.361,0,0,1-2.109.442q-3.707,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2029.508,1407.894h-2.26v-8.166q0-4.429-3.279-4.429a3.57,3.57,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.027h-2.26v-20.982h2.26v9.162h.056a5.128,5.128,0,0,1,4.63-2.685q4.767,0,4.767,5.772Z" style="fill: #fff"/>
        <path d="M2050.921,1407.244a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.167,7.167,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.627,6.973,6.973,0,0,1,5.332-2.124,7.407,7.407,0,0,1,3.281.692v2.325a5.741,5.741,0,0,0-3.363-1.107,4.538,4.538,0,0,0-3.549,1.557,5.93,5.93,0,0,0-1.384,4.09,5.641,5.641,0,0,0,1.3,3.931,4.479,4.479,0,0,0,3.494,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2056.6,1407.894h-2.26v-20.982h2.26Z" style="fill: #fff"/>
        <path d="M2071.274,1407.894h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.613a6.933,6.933,0,0,0-4.6,1.744v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2082.89,1396.019a2.756,2.756,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.361,6.361,0,0,0-.972,3.738v7.224h-2.259v-14.173h2.259v2.92h.056a4.95,4.95,0,0,1,1.475-2.332,3.356,3.356,0,0,1,2.217-.837,3.68,3.68,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2086.5,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.444,1.444,0,0,1,2086.5,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2098.724,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2112.972,1393.721l-6.49,16.444q-1.736,4.4-4.878,4.4a5.117,5.117,0,0,1-1.475-.181v-2.034a4.183,4.183,0,0,0,1.337.249,2.773,2.773,0,0,0,2.564-2.048l1.13-2.685-5.512-14.146h2.508l3.816,10.907c.046.138.143.5.289,1.08h.083q.069-.333.276-1.052l4.009-10.935Z" style="fill: #fff"/>
        <path d="M2133.034,1407.894h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.613a6.931,6.931,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2149,1407.894h-2.259v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.281,4.753,4.753,0,0,0-1.11,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2165.306,1407.894h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.713,3.713,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2163.046,1401.486Z" style="fill: #fff"/>
        <path d="M2183.315,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.321,6.321,0,0,1,4.927,1.951,7.769,7.769,0,0,1,1.77,5.413,7.636,7.636,0,0,1-1.909,5.432A6.667,6.667,0,0,1,2183.315,1408.226Zm.165-12.927a4.292,4.292,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.207,6.207,0,0,0,1.178-4.055,6.313,6.313,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2183.48,1395.3Z" style="fill: #fff"/>
        <path d="M2201.31,1396.019a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.361,6.361,0,0,0-.972,3.738v7.224h-2.259v-14.173h2.259v2.92h.056a4.942,4.942,0,0,1,1.475-2.332,3.356,3.356,0,0,1,2.217-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2215.807,1406.759q0,7.807-7.441,7.807a9.946,9.946,0,0,1-4.575-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.551h-.055a5.7,5.7,0,0,1-9.088.825,7.573,7.573,0,0,1-1.605-5.074,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.273v-2.09a4.064,4.064,0,0,0-1.136-2.892,3.738,3.738,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.28,1.53,6.839,6.839,0,0,0-1.185,4.283,5.885,5.885,0,0,0,1.136,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.071,5.071,0,0,0,2213.547,1401.486Z" style="fill: #fff"/>
        <path d="M2230.482,1407.894h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.613a6.933,6.933,0,0,0-4.6,1.744v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2246.453,1407.894h-2.26v-8.083q0-4.512-3.28-4.512a3.55,3.55,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.11,3.231v8.083h-2.259v-14.173H2237v2.353h.056a5.088,5.088,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2251.869,1390.123a1.436,1.436,0,0,1-1.035-.415,1.41,1.41,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.442,1.442,0,0,1,2251.869,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2267.384,1394.372l-8.35,11.585h8.267v1.937h-11.588v-.706l8.35-11.529H2256.5v-1.938h10.886Z" style="fill: #fff"/>
        <path d="M2280.406,1407.894h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.341,2.546,4.624,4.624,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.613a6.931,6.931,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.614,3.614,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2291.209,1407.757a4.357,4.357,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2295.385,1390.123a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,2295.385,1390.123Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2306.96,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.689,7.689,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.318,6.318,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.636,7.636,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2306.96,1408.226Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.426,6.206,6.206,0,0,0,1.177-4.055,6.313,6.313,0,0,0-1.177-4.1A4.106,4.106,0,0,0,2307.125,1395.3Z" style="fill: #fff"/>
        <path d="M2329.31,1407.894h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2348.078,1388.905a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.371,3v2.187h3.308v1.938h-3.308v12.235h-2.246v-12.235h-2.411v-1.938h2.411v-2.3a4.789,4.789,0,0,1,1.282-3.523,4.319,4.319,0,0,1,3.2-1.294,4.417,4.417,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2355.836,1408.226a6.527,6.527,0,0,1-4.995-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.765,7.765,0,0,1,1.771,5.413,7.632,7.632,0,0,1-1.91,5.432A6.666,6.666,0,0,1,2355.836,1408.226ZM2356,1395.3a4.293,4.293,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.426,6.206,6.206,0,0,0,1.177-4.055,6.313,6.313,0,0,0-1.177-4.1A4.106,4.106,0,0,0,2356,1395.3Z" style="fill: #fff"/>
        <path d="M2373.831,1396.019a2.754,2.754,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.361,6.361,0,0,0-.971,3.738v7.224h-2.26v-14.173h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.357,3.357,0,0,1,2.218-.837,3.674,3.674,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1860.033,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.559,2.559,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.546q-.587-.243-1.261-.505a15.967,15.967,0,0,1-1.646-.754,4.956,4.956,0,0,1-1.186-.859,3.184,3.184,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.654,1.654,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.236,1.254.512a17.464,17.464,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.964,7.964,0,0,1,1860.033,1441.4Z" style="fill: #fff"/>
        <path d="M1884.2,1435.391h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1897.72,1441.911h-2.26V1439.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1922.014,1441.911h-2.26v-8.139a6.166,6.166,0,0,0-.723-3.4,2.741,2.741,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.26V1433.5q0-4.179-3.21-4.18a2.968,2.968,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242h.055a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.935,5.032,5.032,0,0,1,4.685-2.935q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M1928.545,1441.911h-2.259v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M1944.461,1435.391H1934.5a5.327,5.327,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.209,3.209,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1947.024,1441.4v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.545,2.545,0,0,0-.69-.7,5.344,5.344,0,0,0-1.019-.546q-.587-.243-1.261-.505a15.967,15.967,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.2,3.2,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.55.236,1.254.512a17.355,17.355,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.346,3.346,0,0,1,.806,1.1,3.555,3.555,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,1947.024,1441.4Z" style="fill: #fff"/>
        <path d="M1959,1441.4v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.741,1.741,0,0,0-.254-.962,2.559,2.559,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.546q-.587-.243-1.261-.505a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.171,4.171,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.664,1.664,0,0,0-.2.809,1.954,1.954,0,0,0,.2.928,2.033,2.033,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.236,1.254.512a17.332,17.332,0,0,1,1.681.74,5.778,5.778,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,1959,1441.4Z" style="fill: #fff"/>
        <path d="M1991.848,1441.26a7.318,7.318,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.725,5.725,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2001.163,1442.243a6.529,6.529,0,0,1-5-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.761,7.761,0,0,1,1.771,5.411,7.637,7.637,0,0,1-1.909,5.433A6.674,6.674,0,0,1,2001.163,1442.243Zm.166-12.928a4.291,4.291,0,0,0-3.446,1.488,6.132,6.132,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.349,4.349,0,0,0,3.432,1.453,4.126,4.126,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.314,6.314,0,0,0-1.177-4.1A4.108,4.108,0,0,0,2001.329,1429.315Z" style="fill: #fff"/>
        <path d="M2014.06,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2020.9,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2035.571,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2042.144,1439.862h-.056v2.049h-2.259v-20.984h2.259v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.166,5.166,0,0,1,4.251,1.9,7.885,7.885,0,0,1,1.536,5.1,8.808,8.808,0,0,1-1.723,5.695,5.721,5.721,0,0,1-4.712,2.139A4.636,4.636,0,0,1,2042.144,1439.862Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.257,7.257,0,0,0,1.166-4.388,5.737,5.737,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.95-1.343,4,4,0,0,0-3.169,1.377A5.078,5.078,0,0,0,2042.088,1434.146Z" style="fill: #fff"/>
        <path d="M2062.318,1442.243a6.528,6.528,0,0,1-5-1.986,7.378,7.378,0,0,1-1.868-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.766,7.766,0,0,1,1.77,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2062.318,1442.243Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.137,6.137,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2062.483,1429.315Z" style="fill: #fff"/>
        <path d="M2080.313,1430.035a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.932,4.932,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2092.867,1441.911h-2.26V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2103.67,1441.772a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.733v4.193h3.555v1.938h-3.555v7.987a3.325,3.325,0,0,0,.482,2.034,1.921,1.921,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M2107.846,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2107.846,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2119.421,1442.243a6.528,6.528,0,0,1-4.995-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.761,7.761,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.91,5.433A6.67,6.67,0,0,1,2119.421,1442.243Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.348,4.348,0,0,0,3.431,1.453,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.308,6.308,0,0,0-1.178-4.1A4.106,4.106,0,0,0,2119.586,1429.315Z" style="fill: #fff"/>
        <path d="M2141.771,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2146.815,1442.215a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.093,1.532,1.532,0,0,1,.448-1.1,1.453,1.453,0,0,1,1.082-.463,1.487,1.487,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
        <path d="M2161.929,1441.108v-2.741a5.338,5.338,0,0,0,1.123.748,9.073,9.073,0,0,0,1.378.56,10.8,10.8,0,0,0,1.454.353,8.09,8.09,0,0,0,1.351.125,5.271,5.271,0,0,0,3.189-.8,2.991,2.991,0,0,0,.7-3.688,3.944,3.944,0,0,0-.971-1.087,9.672,9.672,0,0,0-1.468-.942q-.847-.45-1.825-.948-1.035-.527-1.93-1.065a8.363,8.363,0,0,1-1.557-1.191,4.951,4.951,0,0,1-1.04-1.473,5.048,5.048,0,0,1,.213-4.291,5.115,5.115,0,0,1,1.558-1.655,7.039,7.039,0,0,1,2.2-.968,10.035,10.035,0,0,1,2.515-.319,9.6,9.6,0,0,1,4.259.706v2.616a7.7,7.7,0,0,0-4.493-1.217,7.3,7.3,0,0,0-1.516.159,4.24,4.24,0,0,0-1.35.518,3,3,0,0,0-.965.928,2.47,2.47,0,0,0-.372,1.384,2.856,2.856,0,0,0,.282,1.314,3.245,3.245,0,0,0,.834,1.011,8.3,8.3,0,0,0,1.344.886q.792.429,1.825.941,1.062.526,2.012,1.108a9.134,9.134,0,0,1,1.668,1.287,5.712,5.712,0,0,1,1.137,1.563,4.421,4.421,0,0,1,.42,1.966,5,5,0,0,1-.572,2.484,4.7,4.7,0,0,1-1.544,1.655,6.7,6.7,0,0,1-2.239.92,12.217,12.217,0,0,1-2.673.284,11.035,11.035,0,0,1-1.157-.076q-.69-.076-1.406-.222a11.621,11.621,0,0,1-1.357-.359A4.284,4.284,0,0,1,2161.929,1441.108Z" style="fill: #fff"/>
        <path d="M2189.254,1441.911h-3.169l-6.228-6.81h-.056v6.81h-2.26v-20.984h2.26v13.3h.056l5.925-6.492h2.963l-6.545,6.838Z" style="fill: #fff"/>
        <path d="M2192.727,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2192.727,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2200.663,1441.911H2198.4v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M2207.5,1441.911h-2.259v-20.984h2.259Z" style="fill: #fff"/>
        <path d="M2223.414,1435.391h-9.962a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2238.875,1441.911h-2.259V1439.5h-.056a5.68,5.68,0,0,1-9.1.837,7.838,7.838,0,0,1-1.59-5.184,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.776h2.259Zm-2.259-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.708,3.708,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,2236.616,1435.5Z" style="fill: #fff"/>
        <path d="M2255.01,1424.138a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2255.01,1424.138Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2272.4,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353H2263a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2297.161,1441.911h-2.26V1439.7h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.37.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2313.131,1441.911h-2.26v-8.083q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26v-14.174h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2327.49,1441.911h-2.26V1439.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2334.007,1441.911h-2.26v-20.984h2.26Z" style="fill: #fff"/>
        <path d="M2349.813,1427.737l-6.49,16.443q-1.737,4.4-4.878,4.4a5.156,5.156,0,0,1-1.475-.18v-2.034a4.178,4.178,0,0,0,1.337.249,2.776,2.776,0,0,0,2.564-2.049l1.129-2.686-5.511-14.145H2339l3.817,10.907q.069.208.289,1.079h.083q.069-.33.275-1.051l4.01-10.935Z" style="fill: #fff"/>
        <path d="M2362.077,1428.388l-8.351,11.584h8.268v1.939h-11.588v-.706l8.349-11.53h-7.564v-1.938h10.886Z" style="fill: #fff"/>
        <path d="M2372.218,1434.907H2364.7v-1.785h7.523Z" style="fill: #fff"/>
        <path d="M1862.045,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,1862.045,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M1879.435,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1895.737,1474.792q0,7.806-7.442,7.805a9.955,9.955,0,0,1-4.574-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.056a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.771,5.771,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.073,5.073,0,0,0,1893.477,1469.518Z" style="fill: #fff"/>
        <path d="M1920.594,1475.926h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.84,2.84,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1936.565,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1952.867,1475.926h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,1950.607,1469.518Z" style="fill: #fff"/>
        <path d="M1979.666,1475.926h-2.259v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.833,7.833,0,0,1-1.59-5.183,8.515,8.515,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.123,5.123,0,0,0,1977.407,1469.518Z" style="fill: #fff"/>
        <path d="M1991.6,1464.05a2.758,2.758,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.372,6.358,6.358,0,0,0-.972,3.736v7.225h-2.259v-14.173h2.259v2.921h.056a4.943,4.943,0,0,1,1.475-2.333,3.351,3.351,0,0,1,2.217-.837,3.658,3.658,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2004.153,1475.926h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.341,2.546,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.975,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.257,2.257,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2015.383,1456.936a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308v12.235h-2.246v-12.235h-2.411v-1.938h2.411v-2.3a4.791,4.791,0,0,1,1.281-3.523,4.318,4.318,0,0,1,3.2-1.3,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M2023.789,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2027.965,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2027.965,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2045.355,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2061.657,1474.792q0,7.806-7.442,7.805a9.955,9.955,0,0,1-4.574-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.056a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.771,5.771,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.093-1.356A5.069,5.069,0,0,0,2059.4,1469.518Z" style="fill: #fff"/>
        <path d="M2088.457,1475.926H2086.2v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.833,7.833,0,0,1-1.59-5.183,8.515,8.515,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.123,5.123,0,0,0,2086.2,1469.518Z" style="fill: #fff"/>
        <path d="M2098.93,1476.258a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.759,7.759,0,0,1,1.77,5.411,7.628,7.628,0,0,1-1.909,5.432A6.667,6.667,0,0,1,2098.93,1476.258Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2099.095,1463.331Z" style="fill: #fff"/>
        <path d="M2119.185,1475.276a7.327,7.327,0,0,1-3.858.982,6.377,6.377,0,0,1-4.872-1.972,7.169,7.169,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.538,4.538,0,0,0-3.549,1.557,5.927,5.927,0,0,0-1.385,4.09,5.644,5.644,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.439,5.647,5.647,0,0,0,3.472-1.231Z" style="fill: #fff"/>
        <path d="M2134.012,1475.926h-2.26v-2.242h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.47h2.246v8.111q0,4.484,3.417,4.484a3.452,3.452,0,0,0,2.722-1.224,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2158.609,1475.926h-2.26v-8.138a6.16,6.16,0,0,0-.724-3.406,2.738,2.738,0,0,0-2.432-1.051,3.007,3.007,0,0,0-2.459,1.329,5.094,5.094,0,0,0-1.013,3.183v8.083h-2.261v-8.416q0-4.179-3.21-4.179a2.971,2.971,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.259v8.083h-2.259v-14.173h2.259V1464h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.032,5.032,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2174.221,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.93,7.933,7.933,0,0,1-1.708-5.433,7.765,7.765,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.294,5.294,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.22,5.22,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2189.351,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.705,6.705,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2200.155,1475.788a4.352,4.352,0,0,1-2.109.443q-3.706,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938H2196.6v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2213.273,1475.926h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.34,2.546,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.974,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.5,5.5,0,0,0-2.37.782,2.257,2.257,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2224.077,1475.788a4.352,4.352,0,0,1-2.109.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.373,2.373,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2228.252,1458.154a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2228.252,1458.154Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M2239.828,1476.258a6.532,6.532,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.688,7.688,0,0,1,1.943-5.579,6.973,6.973,0,0,1,5.25-2.006,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2239.828,1476.258Zm.165-12.927a4.291,4.291,0,0,0-3.446,1.488,6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.209,6.209,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.105,4.105,0,0,0,2239.993,1463.331Z" style="fill: #fff"/>
        <path d="M2262.177,1475.926h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.226,4.338Z" style="fill: #fff"/>
        <path d="M2283.162,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2292.079,1476.258a6.532,6.532,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.688,7.688,0,0,1,1.943-5.579,6.97,6.97,0,0,1,5.25-2.006,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2292.079,1476.258Zm.165-12.927a4.291,4.291,0,0,0-3.446,1.488,6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.453,4.124,4.124,0,0,0,3.369-1.425,6.209,6.209,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.106,4.106,0,0,0,2292.244,1463.331Z" style="fill: #fff"/>
        <path d="M2332.934,1475.926h-2.26v-8.138a6.17,6.17,0,0,0-.723-3.406,2.74,2.74,0,0,0-2.433-1.051,3.007,3.007,0,0,0-2.459,1.329,5.094,5.094,0,0,0-1.013,3.183v8.083h-2.26v-8.416q0-4.179-3.21-4.179a2.972,2.972,0,0,0-2.454,1.253,5.2,5.2,0,0,0-.964,3.259v8.083h-2.26v-14.173h2.26V1464h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2348.546,1469.407h-9.963a5.323,5.323,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.208,3.208,0,0,0-2.583-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2363.3,1469.407h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.93A7.933,7.933,0,0,1,2351,1468.9a7.765,7.765,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.294,5.294,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.22,5.22,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2373.267,1475.788a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1868.246,1498.066a2.752,2.752,0,0,0-1.709-.457,2.88,2.88,0,0,0-2.418,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.354,3.354,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M1882.039,1503.423h-9.962a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1897.5,1508.807q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.271a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.573,7.573,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.767,5.767,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.056v-1.966h2.259Zm-2.259-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.53,6.842,6.842,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.665,3.665,0,0,0,3.01,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,1895.241,1503.534Z" style="fill: #fff"/>
        <path d="M1913.485,1509.942h-2.26V1507.7h-.056a4.636,4.636,0,0,1-4.354,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.483,3.417,4.484a3.451,3.451,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M1920.305,1509.942h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M1934.981,1509.942h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.614-2.907-3.613a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.723,8.723,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1945.785,1509.8a4.352,4.352,0,0,1-2.109.444q-3.708,0-3.707-4.153v-8.387h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.556v1.939h-3.556v7.986a3.325,3.325,0,0,0,.482,2.034,1.923,1.923,0,0,0,1.6.61,2.378,2.378,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1954.7,1510.274a6.532,6.532,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.952,7.761,7.761,0,0,1,1.771,5.411,7.635,7.635,0,0,1-1.909,5.433A6.673,6.673,0,0,1,1954.7,1510.274Zm.165-12.928a4.289,4.289,0,0,0-3.446,1.489,6.133,6.133,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.346,4.346,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.314,6.314,0,0,0-1.177-4.1A4.106,4.106,0,0,0,1954.866,1497.346Z" style="fill: #fff"/>
        <path d="M1972.7,1498.066a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26v-14.174h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.354,3.354,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M1986.379,1495.768l-6.49,16.444q-1.736,4.4-4.878,4.4a5.144,5.144,0,0,1-1.474-.18V1514.4a4.172,4.172,0,0,0,1.336.249,2.774,2.774,0,0,0,2.564-2.049l1.13-2.685-5.512-14.146h2.508l3.816,10.907q.069.209.289,1.08h.083q.069-.332.276-1.052l4.01-10.935Z" style="fill: #fff"/>
        <path d="M2003.893,1498.066a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259v-14.174h2.259v2.921h.056a4.937,4.937,0,0,1,1.475-2.332,3.352,3.352,0,0,1,2.217-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M2017.687,1503.423h-9.963a5.32,5.32,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.381-1.578v2.132a8.162,8.162,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.977,5.977,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.631,4.631,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2033.148,1516.461h-2.26v-8.955h-.056a5.051,5.051,0,0,1-4.822,2.768,5.3,5.3,0,0,1-4.265-1.9,7.781,7.781,0,0,1-1.6-5.184,8.505,8.505,0,0,1,1.764-5.639,5.857,5.857,0,0,1,4.74-2.112,4.445,4.445,0,0,1,4.188,2.3h.056v-1.966h2.26Zm-2.26-12.9V1501.5a4.137,4.137,0,0,0-1.137-2.949,3.8,3.8,0,0,0-2.887-1.2,3.871,3.871,0,0,0-3.224,1.516,6.783,6.783,0,0,0-1.186,4.27,5.875,5.875,0,0,0,1.144,3.841,3.645,3.645,0,0,0,2.949,1.391,3.966,3.966,0,0,0,3.162-1.363A5.074,5.074,0,0,0,2030.888,1503.561Z" style="fill: #fff"/>
        <path d="M2049.132,1509.942h-2.26V1507.7h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.483,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2054.851,1492.17a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2054.851,1492.17Zm1.1,17.772h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M2067.886,1498.066a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259v-14.174h2.259v2.921h.056a4.945,4.945,0,0,1,1.475-2.332,3.353,3.353,0,0,1,2.218-.838,3.653,3.653,0,0,1,1.35.195Z" style="fill: #fff"/>
        <path d="M2081.68,1503.423h-9.963a5.32,5.32,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.868-5.392,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.094,3.643,3.643,0,0,0-2.714,1.149,5.214,5.214,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2105.133,1509.942h-2.26V1501.8a6.166,6.166,0,0,0-.723-3.405,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26v-14.174h2.26v2.242h.055a4.792,4.792,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.657,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2120.746,1503.423h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2135.875,1509.942h-2.259v-8.083q0-4.514-3.28-4.513a3.549,3.549,0,0,0-2.8,1.281,4.754,4.754,0,0,0-1.11,3.232v8.083h-2.26v-14.174h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2146.679,1509.8a4.345,4.345,0,0,1-2.108.444q-3.708,0-3.707-4.153v-8.387h-2.425v-1.939h2.425v-3.46l2.259-.733v4.193h3.556v1.939h-3.556v7.986a3.324,3.324,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.61,2.376,2.376,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2148.842,1509.429v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547q-.585-.242-1.26-.505a16.089,16.089,0,0,1-1.647-.754,4.974,4.974,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.074,4.074,0,0,1,1.212-1.287,5.667,5.667,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.8,2.8,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.493,4.493,0,0,0,.937.527q.551.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.835,5.835,0,0,1,1.268.858,3.361,3.361,0,0,1,.805,1.1,3.55,3.55,0,0,1,.283,1.48,3.51,3.51,0,0,1-.461,1.827,3.958,3.958,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.968,7.968,0,0,1,2148.842,1509.429Z" style="fill: #fff"/>
        <path d="M2162.457,1510.247a1.464,1.464,0,0,1-1.082-.457,1.51,1.51,0,0,1-.448-1.094,1.536,1.536,0,0,1,.448-1.1,1.455,1.455,0,0,1,1.082-.463,1.489,1.489,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.551Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="title15_path">
      <g>
        <polyline points="822.23 1470.231 822.23 1521.103 851.625 1521.103" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M851.359,1526.432a5.329,5.329,0,1,0-5.329-5.329A5.329,5.329,0,0,0,851.359,1526.432Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title15_red" transform="translate(872.154 1532.827)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.17996127350845728em">P<tspan x="14.377" y="0" style="letter-spacing: 0.029991384510776112em">.UZ.</tspan></text>
    <g id="title14_path">
      <g>
        <polyline points="822.23 1420.519 822.23 1471.391 851.625 1471.391" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M851.359,1476.72a5.329,5.329,0,1,0-5.329-5.329A5.33,5.33,0,0,0,851.359,1476.72Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title14_red" transform="translate(872.154 1483.114)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">A.O.</text>
    <g id="title13_path">
      <g>
        <polyline points="822.23 1369.647 822.23 1420.519 851.625 1420.519" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M851.359,1425.847a5.329,5.329,0,1,0-5.329-5.328A5.329,5.329,0,0,0,851.359,1425.847Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title13_red" transform="translate(872.154 1432.242)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">RELEVEU</text>
    <g id="title12_path">
      <g>
        <polyline points="616.418 1470.231 616.418 1521.103 645.813 1521.103" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,1526.432a5.329,5.329,0,1,0-5.328-5.329A5.329,5.329,0,0,0,645.546,1526.432Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title12_red" transform="translate(666.342 1532.827)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">D.E.</text>
    <g id="title11_path">
      <g>
        <polyline points="616.418 1420.519 616.418 1471.391 645.813 1471.391" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,1476.72a5.329,5.329,0,1,0-5.328-5.329A5.33,5.33,0,0,0,645.546,1476.72Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title11_red" transform="translate(666.342 1483.114)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.17996127350845728em">P<tspan x="14.377" y="0" style="letter-spacing: 0.029991384510776112em">.</tspan><tspan x="23.712" y="0" style="letter-spacing: -0.07986032736786428em">T</tspan><tspan x="40.509" y="0" style="letter-spacing: 0.030004350954576705em">.</tspan></text>
    <g id="title10_path">
      <g>
        <polyline points="616.418 1369.647 616.418 1420.519 645.813 1420.519" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,1425.847a5.329,5.329,0,1,0-5.328-5.328A5.329,5.329,0,0,0,645.546,1425.847Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title10_red" transform="translate(666.342 1432.242)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">D.<tspan x="36.992" y="0" style="letter-spacing: -0.07986032736786428em">T</tspan><tspan x="53.789" y="0">.A.C.</tspan></text>
    <g id="_g_" data-name="&lt;g&gt;">
      <rect id="technical_headerbox" x="573.584" y="1301.378" width="303.945" height="84.536" rx="13.785" style="fill: #63769e"/>
      <text id="technical_header" transform="translate(612.743 1362.77)" style="font-size: 52.6827392578125px;fill: #fff;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: -0.08498796800974862em">T<tspan x="24.591" y="0" style="letter-spacing: 0.020006478612438358em">echnical</tspan></text>
    </g>
  </g>
  <g id="graphics">
    <g id="graphics_2">
      <rect id="clipmask_9-2" data-name="clipmask_9" x="585.671" y="1006.813" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-8)">
        <image id="img_9" width="3508" height="2480" transform="translate(509.27 730.838) scale(0.288 0.285)" xlink:href="hard-skills/img_9.png"/>
      </g>
    </g>
    <g id="graphics_1">
      <rect id="clipmask_8-2" data-name="clipmask_8" x="585.671" y="1006.813" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-8)">
        <image id="img_8" width="3649" height="811" transform="translate(554.372 930.164) scale(0.373)" xlink:href="hard-skills/img_8.png"/>
      </g>
    </g>
    <g id="graphics_default">
      <rect id="clipmask_d4-2" data-name="clipmask_d4" x="585.671" y="1006.813" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-8)">
        <image id="img_d4" width="2480" height="1753" transform="translate(539.484 850.684) scale(0.325 0.3)" xlink:href="hard-skills/img_d4.png"/>
      </g>
    </g>
    <g id="graphics_2_text">
      <g>
        <path d="M39.072,1055.9H28.6v-19.847H38.63v2.1H30.913v6.6h7.138v2.089H30.913v6.949h8.159Z" style="fill: #fff"/>
        <path d="M52.878,1041.723l-4.74,7.17,4.657,7H50.163l-2.769-4.6q-.262-.429-.62-1.08h-.055c-.047.083-.263.444-.648,1.08l-2.825,4.6h-2.6l4.809-6.948-4.6-7.225h2.632l2.727,4.844c.2.36.4.73.593,1.107h.056l3.527-5.951Z" style="fill: #fff"/>
        <path d="M57.839,1053.848h-.055v8.568h-2.26v-20.693h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.155,5.155,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.529,5.1,8.812,8.812,0,0,1-1.722,5.7,5.726,5.726,0,0,1-4.712,2.138A4.717,4.717,0,0,1,57.839,1053.848Zm-.055-5.716v1.979a4.22,4.22,0,0,0,1.136,2.982,4.043,4.043,0,0,0,6.105-.352,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,57.784,1048.132Z" style="fill: #fff"/>
        <path d="M83.455,1049.378H73.493a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M94.231,1044.021a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.354,6.354,0,0,0-.972,3.738v7.224h-2.26v-14.173h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.36,3.36,0,0,1,2.218-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M97.842,1038.125a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,97.842,1038.125Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M114.86,1049.378H104.9a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M129.99,1055.9h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M143.866,1055.246a7.319,7.319,0,0,1-3.859.982,6.377,6.377,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.65,5.65,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M158.623,1049.378h-9.962a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M174.084,1055.9h-2.259v-2.408h-.056a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.59-5.184,8.518,8.518,0,0,1,1.763-5.634,5.808,5.808,0,0,1,4.7-2.117,4.52,4.52,0,0,1,4.231,2.3h.056v-8.774h2.259Zm-2.259-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.711,3.711,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.371A5.119,5.119,0,0,0,171.825,1049.488Z" style="fill: #fff"/>
        <path d="M191.018,1038.125a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.42,1.42,0,0,1,.433,1.059,1.4,1.4,0,0,1-.433,1.038A1.444,1.444,0,0,1,191.018,1038.125Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M208.408,1055.9h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.11,3.231v8.083H196.7v-14.173h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M226.183,1053.848h-.056v8.568h-2.259v-20.693h2.259v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.529,5.1,8.807,8.807,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.712,2.138A4.715,4.715,0,0,1,226.183,1053.848Zm-.056-5.716v1.979a4.221,4.221,0,0,0,1.137,2.982,4.043,4.043,0,0,0,6.1-.352,7.266,7.266,0,0,0,1.165-4.388,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,3.993,3.993,0,0,0-3.169,1.377A5.074,5.074,0,0,0,226.127,1048.132Z" style="fill: #fff"/>
        <path d="M246.357,1056.228a6.527,6.527,0,0,1-5-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.321,6.321,0,0,1,4.927,1.951,7.769,7.769,0,0,1,1.77,5.413,7.636,7.636,0,0,1-1.909,5.432A6.667,6.667,0,0,1,246.357,1056.228Zm.165-12.927a4.292,4.292,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.055,6.313,6.313,0,0,0-1.178-4.1A4.1,4.1,0,0,0,246.522,1043.3Z" style="fill: #fff"/>
        <path d="M256.139,1055.384v-2.436a6.668,6.668,0,0,0,4.065,1.371q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.245,5.245,0,0,0-1.02-.547q-.585-.241-1.261-.5a16.274,16.274,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.086,3.837,3.837,0,0,1-.242-1.426,3.41,3.41,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.377,4.377,0,0,0,.936.527q.552.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.832,5.832,0,0,1,1.268.857,3.361,3.361,0,0,1,.805,1.1,3.551,3.551,0,0,1,.283,1.481,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,256.139,1055.384Z" style="fill: #fff"/>
        <path d="M275.514,1055.758a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938H269.7v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M292.048,1053.848h-.055v8.568h-2.26v-20.693h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.155,5.155,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.529,5.1,8.812,8.812,0,0,1-1.722,5.7,5.726,5.726,0,0,1-4.712,2.138A4.717,4.717,0,0,1,292.048,1053.848Zm-.055-5.716v1.979a4.22,4.22,0,0,0,1.136,2.982,4.043,4.043,0,0,0,6.1-.352,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,291.993,1048.132Z" style="fill: #fff"/>
        <path d="M313.682,1044.021a2.751,2.751,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.361,6.361,0,0,0-.972,3.738v7.224h-2.259v-14.173h2.259v2.92h.056a4.95,4.95,0,0,1,1.475-2.332,3.356,3.356,0,0,1,2.217-.837,3.68,3.68,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M322.034,1056.228a6.531,6.531,0,0,1-5-1.985,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.926,1.951,7.765,7.765,0,0,1,1.771,5.413,7.636,7.636,0,0,1-1.909,5.432A6.669,6.669,0,0,1,322.034,1056.228Zm.165-12.927a4.294,4.294,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.055,6.313,6.313,0,0,0-1.178-4.1A4.1,4.1,0,0,0,322.2,1043.3Z" style="fill: #fff"/>
        <path d="M342.288,1055.246a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.172,7.172,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.627,6.975,6.975,0,0,1,5.333-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.741,5.741,0,0,0-3.363-1.107,4.534,4.534,0,0,0-3.548,1.557,5.925,5.925,0,0,0-1.385,4.09,5.637,5.637,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M357.046,1049.378h-9.963a5.32,5.32,0,0,0,1.268,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.583-1.093,3.64,3.64,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M359.609,1055.384v-2.436a6.666,6.666,0,0,0,4.065,1.371q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.235,5.235,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.173,16.173,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.716-1.086,3.858,3.858,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.642,7.642,0,0,1,2-.263,8.058,8.058,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.661,1.661,0,0,0-.2.811,1.934,1.934,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.377,4.377,0,0,0,.936.527q.551.236,1.254.512a17.348,17.348,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.857,3.35,3.35,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.661,5.661,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,359.609,1055.384Z" style="fill: #fff"/>
        <path d="M371.583,1055.384v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.993a1.741,1.741,0,0,0-.254-.962,2.529,2.529,0,0,0-.69-.7,5.265,5.265,0,0,0-1.019-.547q-.586-.241-1.261-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.858,3.858,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.057,4.057,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.05,8.05,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.167,4.167,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.672,1.672,0,0,0-.2.811,1.946,1.946,0,0,0,.2.926,2.021,2.021,0,0,0,.586.664,4.386,4.386,0,0,0,.937.527q.551.236,1.254.512a17.324,17.324,0,0,1,1.681.741,5.832,5.832,0,0,1,1.268.857,3.364,3.364,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,371.583,1055.384Z" style="fill: #fff"/>
        <path d="M385.571,1038.125a1.432,1.432,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.442,1.442,0,0,1,385.571,1038.125Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M402.96,1055.9H400.7v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.281,4.753,4.753,0,0,0-1.11,3.231v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M419.262,1054.761q0,7.806-7.441,7.807a9.946,9.946,0,0,1-4.575-1v-2.27a9.362,9.362,0,0,0,4.547,1.329q5.21,0,5.209-5.564v-1.551h-.055a5.7,5.7,0,0,1-9.088.825,7.573,7.573,0,0,1-1.6-5.074,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3H417v-1.965h2.26Zm-2.26-5.273v-2.09a4.064,4.064,0,0,0-1.136-2.892,3.738,3.738,0,0,0-2.832-1.205,3.917,3.917,0,0,0-3.28,1.53,6.839,6.839,0,0,0-1.185,4.283,5.885,5.885,0,0,0,1.136,3.786,3.67,3.67,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.071,5.071,0,0,0,417,1049.488Z" style="fill: #fff"/>
        <path d="M445.139,1055.9h-2.26v-2.214h-.054a4.729,4.729,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.624l4.23-.594q0-3.612-2.907-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.326a8.716,8.716,0,0,1,4.794-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M456.755,1044.021a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.361,6.361,0,0,0-.971,3.738v7.224H449.4v-14.173h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.357,3.357,0,0,1,2.218-.837,3.674,3.674,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M468.827,1055.246a7.322,7.322,0,0,1-3.859.982,6.376,6.376,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.65,5.65,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M483.956,1055.9H481.7v-8.166q0-4.429-3.28-4.429a3.57,3.57,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.027h-2.259v-20.982H474.5v9.162h.056a5.128,5.128,0,0,1,4.63-2.685q4.768,0,4.767,5.772Z" style="fill: #fff"/>
        <path d="M489.372,1038.125a1.433,1.433,0,0,1-1.034-.415,1.41,1.41,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.46-1.481,1.456,1.456,0,0,1,1.054.422,1.421,1.421,0,0,1,.434,1.059,1.405,1.405,0,0,1-.434,1.038A1.443,1.443,0,0,1,489.372,1038.125Zm1.1,17.771h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M501.6,1055.758a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194H501.6v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.92,1.92,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M515.954,1049.378h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M528.989,1055.246a7.319,7.319,0,0,1-3.859.982,6.379,6.379,0,0,1-4.871-1.971,7.171,7.171,0,0,1-1.852-5.115,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.74,5.74,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.642,5.642,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.65,5.65,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M539.626,1048.893H532.1v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M34.841,1089.774a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388H26.6v-1.937h2.425v-3.46l2.26-.734v4.194h3.555v1.937H31.286v7.987a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.608,2.368,2.368,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M49.269,1089.912h-2.26v-2.242h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.034v-8.471H39.8v8.11q0,4.486,3.417,4.486a3.454,3.454,0,0,0,2.722-1.226,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M61.188,1078.037a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.173h2.26v2.92h.056a4.937,4.937,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.217-.837,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M73.742,1089.912h-2.26V1087.7h-.055a4.73,4.73,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.595q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743v-2.325a8.711,8.711,0,0,1,4.795-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.26,2.26,0,0,0-.8,1.986,2.165,2.165,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.659,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M80.259,1089.912H78v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M103.947,1089.912h-2.26V1087.5h-.056a5.679,5.679,0,0,1-9.1.837,7.83,7.83,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.806,5.806,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.907,3.785,3.785,0,0,0-2.866-1.19,3.893,3.893,0,0,0-3.252,1.523,6.683,6.683,0,0,0-1.186,4.207,6.022,6.022,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.123,5.123,0,0,0,101.687,1083.5Z" style="fill: #fff"/>
        <path d="M119.862,1083.393H109.9a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.13a8.151,8.151,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M122.424,1089.4v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.994a1.73,1.73,0,0,0-.255-.961,2.528,2.528,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547c-.39-.161-.81-.33-1.26-.5a16.3,16.3,0,0,1-1.647-.755,4.949,4.949,0,0,1-1.185-.859,3.166,3.166,0,0,1-.716-1.086,3.849,3.849,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.035,4.035,0,0,1,1.213-1.287,5.6,5.6,0,0,1,1.729-.782,7.644,7.644,0,0,1,2-.263,8.053,8.053,0,0,1,3.279.637v2.3a6.375,6.375,0,0,0-3.582-1.023,4.162,4.162,0,0,0-1.144.145,2.777,2.777,0,0,0-.875.409,1.875,1.875,0,0,0-.565.629,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.4,4.4,0,0,0,.937.526q.551.237,1.254.512a17.324,17.324,0,0,1,1.681.741,5.8,5.8,0,0,1,1.268.858,3.357,3.357,0,0,1,.8,1.1,3.556,3.556,0,0,1,.283,1.482,3.512,3.512,0,0,1-.461,1.827,3.978,3.978,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.98,7.98,0,0,1,122.424,1089.4Z" style="fill: #fff"/>
        <path d="M136.412,1072.14a1.43,1.43,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.052,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,136.412,1072.14Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M154.132,1088.777q0,7.806-7.441,7.807a9.939,9.939,0,0,1-4.574-1v-2.27a9.354,9.354,0,0,0,4.546,1.328q5.209,0,5.209-5.563v-1.551h-.055a5.695,5.695,0,0,1-9.088.824,7.576,7.576,0,0,1-1.605-5.073,8.858,8.858,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.273v-2.09a4.064,4.064,0,0,0-1.136-2.893,3.736,3.736,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.844,6.844,0,0,0-1.185,4.284,5.881,5.881,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.01,1.419,3.928,3.928,0,0,0,3.094-1.357A5.067,5.067,0,0,0,151.872,1083.5Z" style="fill: #fff"/>
        <path d="M170.419,1089.912H168.16v-8.083q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.26v-14.173h2.26v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M199.521,1075.739l-4.231,14.173h-2.342l-2.908-10.146a6.587,6.587,0,0,1-.22-1.314h-.055a6.227,6.227,0,0,1-.29,1.287l-3.155,10.173h-2.26l-4.272-14.173h2.371l2.92,10.657a6.452,6.452,0,0,1,.194,1.274h.109a6.111,6.111,0,0,1,.248-1.3l3.252-10.63h2.068l2.921,10.685a7.747,7.747,0,0,1,.207,1.274h.11a5.951,5.951,0,0,1,.234-1.274l2.866-10.685Z" style="fill: #fff"/>
        <path d="M208.037,1090.244a6.528,6.528,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.764,7.764,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.672,6.672,0,0,1,208.037,1090.244Zm.165-12.927a4.293,4.293,0,0,0-3.446,1.487,6.14,6.14,0,0,0-1.267,4.105,5.8,5.8,0,0,0,1.281,3.972,4.35,4.35,0,0,0,3.432,1.454,4.124,4.124,0,0,0,3.369-1.426,6.209,6.209,0,0,0,1.177-4.056,6.31,6.31,0,0,0-1.177-4.1A4.1,4.1,0,0,0,208.2,1077.317Z" style="fill: #fff"/>
        <path d="M226.032,1078.037a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26v-14.173h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M240.2,1089.912h-3.169l-6.229-6.81h-.055v6.81h-2.26v-20.983h2.26v13.3h.055l5.925-6.491h2.963l-6.545,6.837Z" style="fill: #fff"/>
        <path d="M253.109,1089.912h-2.26V1070.7c-.211-.037-.508-.071-.889-.1s-.778-.048-1.192-.048a3.277,3.277,0,0,0-1.688.374,2.406,2.406,0,0,0-.951,1.038,4.73,4.73,0,0,0-.42,1.584,19.5,19.5,0,0,0-.1,2.014v.18h3.321v1.937h-3.321v12.236h-2.246v-12.236h-2.412v-1.937h2.384v-.291q0-.872.083-1.716a8.432,8.432,0,0,1,.31-1.605,5.629,5.629,0,0,1,.627-1.4,4.165,4.165,0,0,1,1.019-1.107,4.678,4.678,0,0,1,1.5-.734,7.322,7.322,0,0,1,2.068-.262q.867,0,1.887.076t2.274.256Z" style="fill: #fff"/>
        <path d="M263.581,1090.244a6.526,6.526,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.764,7.764,0,0,1,1.771,5.412,7.638,7.638,0,0,1-1.909,5.433A6.673,6.673,0,0,1,263.581,1090.244Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.135,6.135,0,0,0-1.267,4.105,5.8,5.8,0,0,0,1.281,3.972,4.349,4.349,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.426,6.209,6.209,0,0,0,1.177-4.056,6.31,6.31,0,0,0-1.177-4.1A4.106,4.106,0,0,0,263.746,1077.317Z" style="fill: #fff"/>
        <path d="M292,1075.739l-4.231,14.173h-2.343l-2.907-10.146a6.584,6.584,0,0,1-.221-1.314h-.054a6.293,6.293,0,0,1-.29,1.287l-3.156,10.173h-2.259l-4.272-14.173h2.37l2.921,10.657a6.462,6.462,0,0,1,.193,1.274h.11a5.989,5.989,0,0,1,.248-1.3l3.252-10.63h2.067l2.921,10.685a7.642,7.642,0,0,1,.207,1.274h.111a5.889,5.889,0,0,1,.234-1.274l2.866-10.685Z" style="fill: #fff"/>
        <path d="M293.757,1089.4v-2.436a6.669,6.669,0,0,0,4.066,1.371q2.976,0,2.976-1.994a1.73,1.73,0,0,0-.255-.961,2.528,2.528,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547c-.39-.161-.81-.33-1.26-.5a16.3,16.3,0,0,1-1.647-.755,4.949,4.949,0,0,1-1.185-.859,3.166,3.166,0,0,1-.716-1.086,3.849,3.849,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.035,4.035,0,0,1,1.213-1.287,5.6,5.6,0,0,1,1.729-.782,7.644,7.644,0,0,1,2-.263,8.053,8.053,0,0,1,3.279.637v2.3a6.375,6.375,0,0,0-3.582-1.023,4.162,4.162,0,0,0-1.144.145,2.777,2.777,0,0,0-.875.409,1.875,1.875,0,0,0-.565.629,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.4,4.4,0,0,0,.937.526q.551.237,1.254.512a17.324,17.324,0,0,1,1.681.741,5.8,5.8,0,0,1,1.268.858,3.357,3.357,0,0,1,.805,1.1,3.556,3.556,0,0,1,.283,1.482,3.512,3.512,0,0,1-.461,1.827,3.978,3.978,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.98,7.98,0,0,1,293.757,1089.4Z" style="fill: #fff"/>
        <path d="M320.627,1070.923a2.987,2.987,0,0,0-1.5-.374q-2.37,0-2.37,3v2.188h3.308v1.937h-3.308v12.236h-2.246v-12.236H312.1v-1.937h2.411v-2.3a4.792,4.792,0,0,1,1.281-3.522,4.317,4.317,0,0,1,3.2-1.294,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M328.386,1090.244a6.524,6.524,0,0,1-5-1.986,7.375,7.375,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.764,7.764,0,0,1,1.77,5.412,7.634,7.634,0,0,1-1.909,5.433A6.669,6.669,0,0,1,328.386,1090.244Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.135,6.135,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.282,3.972,4.349,4.349,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.31,6.31,0,0,0-1.178-4.1A4.1,4.1,0,0,0,328.551,1077.317Z" style="fill: #fff"/>
        <path d="M346.381,1078.037a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M363.261,1078.037a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.972,3.737v7.225H355.9v-14.173h2.259v2.92h.056a4.945,4.945,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.68,3.68,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M377.055,1083.393h-9.963a5.32,5.32,0,0,0,1.268,3.654,4.361,4.361,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.13a8.153,8.153,0,0,1-4.919,1.357,5.955,5.955,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.765,7.765,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.646,3.646,0,0,0-2.714,1.148,5.217,5.217,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M392.185,1089.912h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.352h.055a5.088,5.088,0,0,1,4.63-2.684,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M408.487,1089.912h-2.26V1087.5h-.056a5.679,5.679,0,0,1-9.1.837,7.83,7.83,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.806,5.806,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.907,3.785,3.785,0,0,0-2.866-1.19,3.893,3.893,0,0,0-3.252,1.523,6.683,6.683,0,0,0-1.186,4.207,6.022,6.022,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.123,5.123,0,0,0,406.227,1083.5Z" style="fill: #fff"/>
        <path d="M424.4,1083.393h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.13a8.151,8.151,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M435.177,1078.037a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.945,4.945,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.68,3.68,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M436.776,1089.4v-2.436a6.666,6.666,0,0,0,4.065,1.371q2.978,0,2.977-1.994a1.73,1.73,0,0,0-.255-.961,2.532,2.532,0,0,0-.69-.7,5.29,5.29,0,0,0-1.019-.547c-.391-.161-.811-.33-1.261-.5a16.173,16.173,0,0,1-1.646-.755,4.976,4.976,0,0,1-1.186-.859,3.18,3.18,0,0,1-.716-1.086,3.849,3.849,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.046,4.046,0,0,1,1.213-1.287,5.609,5.609,0,0,1,1.73-.782,7.642,7.642,0,0,1,2-.263,8.058,8.058,0,0,1,3.28.637v2.3a6.377,6.377,0,0,0-3.582-1.023,4.174,4.174,0,0,0-1.145.145,2.777,2.777,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.419,4.419,0,0,0,.936.526q.551.237,1.254.512a17.348,17.348,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.346,3.346,0,0,1,.806,1.1,3.572,3.572,0,0,1,.282,1.482,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.661,5.661,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,436.776,1089.4Z" style="fill: #fff"/>
        <path d="M450.391,1090.216a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.092,1.53,1.53,0,0,1,.448-1.1,1.45,1.45,0,0,1,1.082-.464,1.486,1.486,0,0,1,1.1.464,1.521,1.521,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.549Z" style="fill: #fff"/>
        <path d="M462.17,1089.109v-2.74a5.375,5.375,0,0,0,1.123.747,9.073,9.073,0,0,0,1.378.56,10.837,10.837,0,0,0,1.454.354,8.082,8.082,0,0,0,1.351.124,5.264,5.264,0,0,0,3.189-.8,2.994,2.994,0,0,0,.7-3.688,3.961,3.961,0,0,0-.972-1.086,9.547,9.547,0,0,0-1.468-.942q-.846-.45-1.825-.948-1.035-.526-1.93-1.065a8.4,8.4,0,0,1-1.556-1.191,4.92,4.92,0,0,1-1.04-1.474,5.052,5.052,0,0,1,.212-4.291,5.111,5.111,0,0,1,1.558-1.654,7.051,7.051,0,0,1,2.2-.969,10.04,10.04,0,0,1,2.515-.318,9.6,9.6,0,0,1,4.259.706v2.615a7.7,7.7,0,0,0-4.492-1.217,7.307,7.307,0,0,0-1.517.159,4.288,4.288,0,0,0-1.35.518,3.012,3.012,0,0,0-.964.928,2.464,2.464,0,0,0-.373,1.384,2.85,2.85,0,0,0,.283,1.315,3.218,3.218,0,0,0,.834,1.011,8.314,8.314,0,0,0,1.343.886q.792.429,1.826.94,1.062.528,2.011,1.108a9.134,9.134,0,0,1,1.668,1.287,5.7,5.7,0,0,1,1.137,1.564,4.418,4.418,0,0,1,.42,1.966,5.013,5.013,0,0,1-.571,2.484,4.718,4.718,0,0,1-1.544,1.654,6.731,6.731,0,0,1-2.24.921,12.27,12.27,0,0,1-2.672.283,11.035,11.035,0,0,1-1.158-.076q-.69-.076-1.406-.221a11.6,11.6,0,0,1-1.356-.36A4.2,4.2,0,0,1,462.17,1089.109Z" style="fill: #fff"/>
        <path d="M489.5,1089.912h-3.169l-6.229-6.81h-.056v6.81h-2.259v-20.983h2.259v13.3h.056l5.925-6.491h2.963l-6.545,6.837Z" style="fill: #fff"/>
        <path d="M492.968,1072.14a1.429,1.429,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,492.968,1072.14Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M500.905,1089.912h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M507.74,1089.912h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M523.656,1083.393h-9.963a5.324,5.324,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.13a8.151,8.151,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M539.117,1089.912h-2.26V1087.5H536.8a5.679,5.679,0,0,1-9.1.837,7.83,7.83,0,0,1-1.591-5.183,8.52,8.52,0,0,1,1.763-5.634,5.81,5.81,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.907,3.785,3.785,0,0,0-2.866-1.19,3.893,3.893,0,0,0-3.252,1.523,6.683,6.683,0,0,0-1.186,4.207,6.022,6.022,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.123,5.123,0,0,0,536.857,1083.5Z" style="fill: #fff"/>
        <path d="M29.454,1106.156a1.43,1.43,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,29.454,1106.156Zm1.1,17.772H28.3v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M46.843,1123.928h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.28,4.76,4.76,0,0,0-1.109,3.232v8.083H35.13v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.311,4.311,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M82.49,1117.409H72.527a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.639,3.639,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M97.62,1123.928H95.36v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.28,4.761,4.761,0,0,0-1.11,3.232v8.083H85.907v-14.173h2.259v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M112.97,1109.755l-5.622,14.173h-2.219l-5.345-14.173h2.479l3.583,10.3a9.231,9.231,0,0,1,.5,1.98h.055a9.417,9.417,0,0,1,.441-1.924l3.748-10.353Z" style="fill: #fff"/>
        <path d="M116.553,1106.156a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,116.553,1106.156Zm1.1,17.772H115.4v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M129.588,1112.052a2.756,2.756,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.364,6.364,0,0,0-.971,3.737v7.225h-2.26v-14.173h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M137.94,1124.26a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.687,7.687,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.006,6.315,6.315,0,0,1,4.927,1.952,7.762,7.762,0,0,1,1.77,5.411,7.633,7.633,0,0,1-1.909,5.432A6.668,6.668,0,0,1,137.94,1124.26Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.12,4.12,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,138.1,1111.333Z" style="fill: #fff"/>
        <path d="M160.289,1123.928H158.03v-8.083q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.28,4.756,4.756,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M184.583,1123.928h-2.259v-8.138a6.169,6.169,0,0,0-.724-3.406,2.739,2.739,0,0,0-2.433-1.051,3.009,3.009,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.183v8.083h-2.261v-8.416q0-4.179-3.21-4.179a2.97,2.97,0,0,0-2.453,1.253,5.193,5.193,0,0,0-.965,3.259v8.083h-2.26v-14.173h2.26V1112h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.031,5.031,0,0,1,4.684-2.934q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M200.2,1117.409h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.636,4.636,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.639,3.639,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M215.326,1123.928h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.761,4.761,0,0,0-1.11,3.232v8.083h-2.259v-14.173h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M226.129,1123.79a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M239.247,1123.928h-2.259v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.507,5.507,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.17,2.17,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M245.765,1123.928h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M272.648,1123.928h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M278.381,1106.156a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,278.381,1106.156Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M296.1,1122.794q0,7.806-7.441,7.8a9.956,9.956,0,0,1-4.575-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.055a5.7,5.7,0,0,1-9.088.823,7.57,7.57,0,0,1-1.605-5.072,8.852,8.852,0,0,1,1.729-5.745,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.185,4.284,5.874,5.874,0,0,0,1.136,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,293.842,1117.52Z" style="fill: #fff"/>
        <path d="M312.389,1123.928h-2.26v-8.166q0-4.429-3.279-4.429a3.568,3.568,0,0,0-2.784,1.28,4.784,4.784,0,0,0-1.13,3.287v8.028h-2.26v-20.983h2.26v9.163h.056a5.127,5.127,0,0,1,4.629-2.685q4.769,0,4.768,5.771Z" style="fill: #fff"/>
        <path d="M323.193,1123.79a4.349,4.349,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M327.369,1106.156a1.432,1.432,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,327.369,1106.156Zm1.1,17.772h-2.26v-14.173h2.26Z" style="fill: #fff"/>
        <path d="M344.758,1123.928H342.5v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.28,4.76,4.76,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.311,4.311,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M361.06,1122.794q0,7.806-7.441,7.8a9.956,9.956,0,0,1-4.575-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.21,0,5.209-5.565v-1.549h-.055a5.7,5.7,0,0,1-9.088.823,7.57,7.57,0,0,1-1.6-5.072,8.852,8.852,0,0,1,1.729-5.745,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.185,4.284,5.88,5.88,0,0,0,1.136,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,358.8,1117.52Z" style="fill: #fff"/>
        <path d="M395.782,1123.928h-2.26v-2.214h-.055a4.727,4.727,0,0,1-4.341,2.546,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.512,5.512,0,0,0-2.371.782,2.259,2.259,0,0,0-.8,1.987,2.169,2.169,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M412.083,1123.928h-2.259v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.833,7.833,0,0,1-1.59-5.183,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.123,5.123,0,0,0,409.824,1117.52Z" style="fill: #fff"/>
        <path d="M418.917,1123.333a8.913,8.913,0,0,1-1.4,5.378,4.684,4.684,0,0,1-4,1.888,4.235,4.235,0,0,1-1.874-.442v-2.118a3.732,3.732,0,0,0,1.93.623q3.086,0,3.086-4.955v-13.952h2.259Zm-1.1-17.177a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.456,1.456,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.445,1.445,0,0,1,417.816,1106.156Z" style="fill: #fff"/>
        <path d="M434.9,1123.928h-2.26v-2.242h-.056a4.636,4.636,0,0,1-4.354,2.574q-5.043,0-5.043-6.035v-8.47h2.246v8.111q0,4.484,3.417,4.484a3.453,3.453,0,0,0,2.722-1.224,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M438.609,1123.416v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.345,5.345,0,0,0-1.019-.547q-.587-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.68,5.68,0,0,1,1.73-.782,7.641,7.641,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.37,6.37,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.551.234,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.36,3.36,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.965,3.965,0,0,1-1.233,1.287,5.661,5.661,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,438.609,1123.416Z" style="fill: #fff"/>
        <path d="M457.984,1123.79a4.349,4.349,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M481.037,1123.928h-2.259v-8.138a6.16,6.16,0,0,0-.724-3.406,2.739,2.739,0,0,0-2.433-1.051,3.009,3.009,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.183v8.083h-2.261v-8.416q0-4.179-3.21-4.179a2.971,2.971,0,0,0-2.453,1.253,5.193,5.193,0,0,0-.965,3.259v8.083H461v-14.173h2.26V1112h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.032,5.032,0,0,1,4.684-2.934q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M496.65,1117.409h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.631,4.631,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.641,3.641,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M511.78,1123.928h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.76,4.76,0,0,0-1.109,3.232v8.083h-2.26v-14.173h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.708,6.708,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M522.583,1123.79a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M524.746,1123.416v-2.436a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.735,1.735,0,0,0-.254-.962,2.542,2.542,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2-.262,8.067,8.067,0,0,1,3.279.636v2.3a6.367,6.367,0,0,0-3.582-1.024,4.211,4.211,0,0,0-1.144.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.954,1.954,0,0,0,.2.928,2.043,2.043,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.55.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.81,5.81,0,0,1,1.268.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.985,3.985,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,524.746,1123.416Z" style="fill: #fff"/>
        <path d="M539.643,1120.772l-2.205,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M30.555,1157.944H28.3v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M45.231,1157.944h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.614-2.907-3.613a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.723,8.723,0,0,1,4.8-1.329q4.975,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M61.2,1157.944h-2.26v-8.083q0-4.514-3.28-4.513a3.55,3.55,0,0,0-2.8,1.281,4.759,4.759,0,0,0-1.11,3.232v8.083H49.489V1143.77h2.259v2.354H51.8a5.089,5.089,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M77.5,1157.944H75.244v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.836,7.836,0,0,1-1.59-5.184,8.51,8.51,0,0,1,1.763-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.056v-8.775H77.5Zm-2.259-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.783,3.783,0,0,0-2.867-1.191A3.9,3.9,0,0,0,68,1146.871a6.682,6.682,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868A3.707,3.707,0,0,0,71,1156.366a3.854,3.854,0,0,0,3.066-1.37A5.125,5.125,0,0,0,75.244,1151.536Z" style="fill: #fff"/>
        <path d="M81.223,1157.431V1155a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547q-.585-.242-1.261-.5a16.065,16.065,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.087,3.833,3.833,0,0,1-.242-1.426,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.656,1.656,0,0,0-.2.809,1.94,1.94,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.51,4.51,0,0,0,.936.527q.552.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.8,5.8,0,0,1,1.268.858,3.361,3.361,0,0,1,.8,1.1,3.55,3.55,0,0,1,.282,1.48,3.509,3.509,0,0,1-.46,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,81.223,1157.431Z" style="fill: #fff"/>
        <path d="M103.67,1157.294a7.327,7.327,0,0,1-3.858.982,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.693v2.325a5.728,5.728,0,0,0-3.363-1.108,4.539,4.539,0,0,0-3.549,1.558A5.93,5.93,0,0,0,95.4,1151a5.64,5.64,0,0,0,1.3,3.93,4.479,4.479,0,0,0,3.494,1.44,5.641,5.641,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M117.188,1157.944h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.614-2.907-3.613a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.723,8.723,0,0,1,4.795-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.255,2.255,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M123.761,1155.9h-.056v8.568h-2.259V1143.77h2.259v2.492h.056a5.339,5.339,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.258,1.9,7.912,7.912,0,0,1,1.529,5.1,8.811,8.811,0,0,1-1.722,5.695,5.724,5.724,0,0,1-4.712,2.139A4.717,4.717,0,0,1,123.761,1155.9Zm-.056-5.716v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.264,7.264,0,0,0,1.165-4.388,5.739,5.739,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.076,5.076,0,0,0,123.705,1150.179Z" style="fill: #fff"/>
        <path d="M149.377,1151.424h-9.963a5.326,5.326,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.923a4.636,4.636,0,0,0-.944-3.059,3.212,3.212,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M184.383,1157.944h-2.26v-2.408h-.055a5.68,5.68,0,0,1-9.1.837,7.836,7.836,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.521,4.521,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.408v-2.091a4.069,4.069,0,0,0-1.129-2.906,3.783,3.783,0,0,0-2.867-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.016,6.016,0,0,0,1.137,3.868,3.707,3.707,0,0,0,3.052,1.419,3.854,3.854,0,0,0,3.066-1.37A5.124,5.124,0,0,0,182.123,1151.536Z" style="fill: #fff"/>
        <path d="M200.3,1151.424h-9.963a5.321,5.321,0,0,0,1.268,3.655,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.923a4.631,4.631,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.713,1.149,5.208,5.208,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M202.861,1157.431V1155a6.671,6.671,0,0,0,4.065,1.37q2.978,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.32,5.32,0,0,0-1.019-.547q-.586-.242-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.2,3.2,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.656,5.656,0,0,1,1.73-.782,7.642,7.642,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.656,1.656,0,0,0-.2.809,1.94,1.94,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.484,4.484,0,0,0,.936.527q.551.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.364,3.364,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.639,5.639,0,0,1-1.777.762,8.758,8.758,0,0,1-2.109.249A7.964,7.964,0,0,1,202.861,1157.431Z" style="fill: #fff"/>
        <path d="M216.848,1140.172a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,216.848,1140.172Zm1.1,17.772h-2.26V1143.77h2.26Z" style="fill: #fff"/>
        <path d="M234.569,1156.809q0,7.806-7.442,7.806a9.955,9.955,0,0,1-4.574-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.21,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.573,7.573,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.769,5.769,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.26Zm-2.26-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.842,6.842,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.667,3.667,0,0,0,3.011,1.419,3.926,3.926,0,0,0,3.094-1.357A5.066,5.066,0,0,0,232.309,1151.536Z" style="fill: #fff"/>
        <path d="M250.856,1157.944H248.6v-8.083q0-4.514-3.279-4.513a3.551,3.551,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26V1143.77h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M257.181,1154.788l-2.2,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M290.878,1157.944h-2.259v-2.215h-.055a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.614-2.908-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.72,8.72,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.169,2.169,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.657,3.62,3.62,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M306.849,1157.944h-2.26v-8.083q0-4.514-3.279-4.513a3.552,3.552,0,0,0-2.805,1.281,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26V1143.77h2.26v2.354h.056a5.088,5.088,0,0,1,4.629-2.686,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M323.151,1157.944h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.831,7.831,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.125,5.125,0,0,0,320.891,1151.536Z" style="fill: #fff"/>
        <path d="M356.888,1157.294a7.327,7.327,0,0,1-3.858.982,6.37,6.37,0,0,1-4.871-1.973,7.162,7.162,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.693v2.325a5.725,5.725,0,0,0-3.362-1.108,4.539,4.539,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.384,4.09,5.64,5.64,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M366.2,1158.276a6.532,6.532,0,0,1-5-1.986,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.952,7.761,7.761,0,0,1,1.771,5.411,7.635,7.635,0,0,1-1.909,5.433A6.673,6.673,0,0,1,366.2,1158.276Zm.165-12.928a4.289,4.289,0,0,0-3.446,1.489,6.133,6.133,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.346,4.346,0,0,0,3.432,1.453,4.124,4.124,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.314,6.314,0,0,0-1.177-4.1A4.107,4.107,0,0,0,366.369,1145.348Z" style="fill: #fff"/>
        <path d="M388.553,1157.944h-2.26v-8.166q0-4.429-3.279-4.43a3.57,3.57,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.028h-2.26v-20.983h2.26v9.163h.056a5.129,5.129,0,0,1,4.63-2.686q4.767,0,4.767,5.772Z" style="fill: #fff"/>
        <path d="M404.152,1151.424h-9.963a5.325,5.325,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.923a4.631,4.631,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M406.714,1157.431V1155a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.538,2.538,0,0,0-.689-.7,5.3,5.3,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.056,4.056,0,0,1,1.213-1.287,5.651,5.651,0,0,1,1.729-.782,7.649,7.649,0,0,1,2-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.166,4.166,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.656,1.656,0,0,0-.2.809,1.94,1.94,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.493,4.493,0,0,0,.937.527q.551.234,1.254.511a17.572,17.572,0,0,1,1.681.741,5.8,5.8,0,0,1,1.268.858,3.361,3.361,0,0,1,.805,1.1,3.55,3.55,0,0,1,.283,1.48,3.51,3.51,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.968,7.968,0,0,1,406.714,1157.431Z" style="fill: #fff"/>
        <path d="M420.7,1140.172a1.432,1.432,0,0,1-1.035-.415,1.406,1.406,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,420.7,1140.172Zm1.1,17.772h-2.26V1143.77h2.26Z" style="fill: #fff"/>
        <path d="M437.471,1143.77l-5.622,14.174H429.63l-5.345-14.174h2.479l3.583,10.3a9.231,9.231,0,0,1,.5,1.98h.055a9.417,9.417,0,0,1,.441-1.924l3.748-10.354Z" style="fill: #fff"/>
        <path d="M451.237,1151.424h-9.963a5.325,5.325,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.923a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M485.291,1143.77l-5.622,14.174h-2.218l-5.346-14.174h2.479l3.583,10.3a9.231,9.231,0,0,1,.5,1.98h.055a9.35,9.35,0,0,1,.442-1.924l3.748-10.354Z" style="fill: #fff"/>
        <path d="M488.874,1140.172a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,488.874,1140.172Zm1.1,17.772h-2.26V1143.77h2.26Z" style="fill: #fff"/>
        <path d="M493.7,1157.431V1155a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.32,5.32,0,0,0-1.019-.547q-.586-.242-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.2,3.2,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.661,5.661,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.656,1.656,0,0,0-.2.809,1.939,1.939,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.484,4.484,0,0,0,.936.527q.55.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.768,5.768,0,0,1,1.267.858,3.364,3.364,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.744,8.744,0,0,1-2.108.249A7.964,7.964,0,0,1,493.7,1157.431Z" style="fill: #fff"/>
        <path d="M517.936,1157.944h-2.26V1155.7h-.055a4.639,4.639,0,0,1-4.355,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.484,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M532.6,1157.944h-2.26v-2.215h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.614-2.907-3.613a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.717,8.717,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M539.115,1157.944h-2.26v-20.983h2.26Z" style="fill: #fff"/>
        <path d="M380.5,1191.309a7.318,7.318,0,0,1-3.858.983,6.374,6.374,0,0,1-4.871-1.973,7.168,7.168,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.973,6.973,0,0,1,5.333-2.125,7.388,7.388,0,0,1,3.28.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.532,4.532,0,0,0-3.548,1.558,5.925,5.925,0,0,0-1.385,4.089,5.637,5.637,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M389.812,1192.292a6.525,6.525,0,0,1-5-1.987,7.374,7.374,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.764,7.764,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,389.812,1192.292Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.317,6.317,0,0,0-1.178-4.1A4.105,4.105,0,0,0,389.977,1179.364Z" style="fill: #fff"/>
        <path d="M420.485,1191.96h-2.26v-8.139a6.156,6.156,0,0,0-.724-3.4,2.739,2.739,0,0,0-2.432-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.261v-8.416q0-4.181-3.21-4.18a2.971,2.971,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.259v-14.174h2.259v2.242h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.032,5.032,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M427.072,1189.911h-.056v8.567h-2.26v-20.692h2.26v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.158,5.158,0,0,1,4.257,1.9,7.906,7.906,0,0,1,1.53,5.1,8.813,8.813,0,0,1-1.723,5.695,5.723,5.723,0,0,1-4.712,2.139A4.716,4.716,0,0,1,427.072,1189.911Zm-.056-5.716v1.979a4.227,4.227,0,0,0,1.137,2.983,4.042,4.042,0,0,0,6.1-.354,7.252,7.252,0,0,0,1.165-4.387,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,427.016,1184.2Z" style="fill: #fff"/>
        <path d="M447.246,1192.292a6.529,6.529,0,0,1-5-1.987,7.374,7.374,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,447.246,1192.292Zm.165-12.928a4.291,4.291,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.454,4.124,4.124,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.317,6.317,0,0,0-1.177-4.1A4.106,4.106,0,0,0,447.411,1179.364Z" style="fill: #fff"/>
        <path d="M457.028,1191.447v-2.436a6.672,6.672,0,0,0,4.065,1.371q2.977,0,2.977-1.994a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.242-1.261-.505a16.191,16.191,0,0,1-1.646-.753,4.956,4.956,0,0,1-1.186-.859,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.057,4.057,0,0,1,1.213-1.287,5.658,5.658,0,0,1,1.73-.783,7.683,7.683,0,0,1,2-.262,8.091,8.091,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.876,1.876,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.236,1.254.512a17.355,17.355,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.744,8.744,0,0,1-2.108.249A7.976,7.976,0,0,1,457.028,1191.447Z" style="fill: #fff"/>
        <path d="M471.015,1174.187a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.458,1.458,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.44,1.44,0,0,1,471.015,1174.187Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M483.238,1191.821a4.352,4.352,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388H475v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.987a3.325,3.325,0,0,0,.482,2.034,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M487.413,1174.187a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.46-1.481,1.456,1.456,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,487.413,1174.187Zm1.1,17.773h-2.26v-14.174h2.26Z" style="fill: #fff"/>
        <path d="M498.989,1192.292a6.525,6.525,0,0,1-4.995-1.987,7.37,7.37,0,0,1-1.868-5.266,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.764,7.764,0,0,1,1.77,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,498.989,1192.292Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.317,6.317,0,0,0-1.178-4.1A4.105,4.105,0,0,0,499.154,1179.364Z" style="fill: #fff"/>
        <path d="M521.338,1191.96h-2.259v-8.083q0-4.514-3.28-4.513a3.551,3.551,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.11,3.233v8.083h-2.26v-14.174h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M524.742,1191.447v-2.436a6.672,6.672,0,0,0,4.065,1.371q2.976,0,2.977-1.994a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.242-1.261-.505a16.316,16.316,0,0,1-1.647-.753,4.969,4.969,0,0,1-1.185-.859,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.057,4.057,0,0,1,1.213-1.287,5.663,5.663,0,0,1,1.729-.783,7.7,7.7,0,0,1,2-.262,8.091,8.091,0,0,1,3.28.636v2.3a6.38,6.38,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.866,1.866,0,0,0-.564.63,1.654,1.654,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.236,1.254.512a17.464,17.464,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,524.742,1191.447Z" style="fill: #fff"/>
        <path d="M538.357,1192.264a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.093,1.532,1.532,0,0,1,.448-1.1,1.449,1.449,0,0,1,1.082-.463,1.483,1.483,0,0,1,1.1.463,1.519,1.519,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="graphics_1_text">
      <text transform="translate(26.008 1055.896)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">10+<tspan x="49.953" y="0" style="letter-spacing: 0.09609695500648999em"> </tspan><tspan x="60.442" y="0">years</tspan><tspan x="125.288" y="0" style="letter-spacing: 0.0960623504134016em"> </tspan><tspan x="135.776" y="0">of</tspan><tspan x="161.257" y="0" style="letter-spacing: 0.09609695500648999em"> </tspan><tspan x="171.746" y="0">expertise</tspan><tspan x="284.247" y="0" style="letter-spacing: 0.0960623504134016em"> </tspan><tspan x="294.735" y="0">in</tspan><tspan x="317.643" y="0" style="letter-spacing: 0.09609695500648999em"> </tspan><tspan x="328.132" y="0">digital</tspan><tspan x="406.141" y="0" style="letter-spacing: 0.0960623504134016em"> </tspan><tspan x="416.629" y="0">artwork, </tspan><tspan x="0" y="34.016">texture,</tspan><tspan x="93.913" y="34.016" style="letter-spacing: -0.0031490179710445044em"> </tspan><tspan x="101.589" y="34.016">and</tspan><tspan x="148.745" y="34.016" style="letter-spacing: -0.003183622564132906em"> </tspan><tspan x="156.42" y="34.016">symbol</tspan><tspan x="246.719" y="34.016" style="letter-spacing: -0.0031490179710445044em"> </tspan><tspan x="254.395" y="34.016">creation.</tspan><tspan x="361.858" y="34.016" style="letter-spacing: -0.003183622564132906em"> </tspan><tspan x="369.532" y="34.016" style="letter-spacing: -0.015122207179631303em">P</tspan><tspan x="384.98" y="34.016">roficient</tspan><tspan x="487.113" y="34.016" style="letter-spacing: -0.0031490179710445044em"> </tspan><tspan x="494.789" y="34.016">in </tspan><tspan x="0" y="68.032" style="letter-spacing: -0.009758495250929124em">S</tspan><tspan x="14.782" y="68.032" style="letter-spacing: -0.015156811772719705em">V</tspan><tspan x="31.958" y="68.032">G</tspan><tspan x="51.405" y="68.032" style="letter-spacing: 0.10800093502889997em"> </tspan><tspan x="62.231" y="68.032">import/export</tspan><tspan x="237.863" y="68.032" style="letter-spacing: 0.10796633043581158em"> </tspan><tspan x="248.688" y="68.032">and</tspan><tspan x="295.845" y="68.032" style="letter-spacing: 0.10800093502889997em"> </tspan><tspan x="306.671" y="68.032">manipulation</tspan><tspan x="471.534" y="68.032" style="letter-spacing: 0.10796633043581158em"> </tspan><tspan x="482.359" y="68.032">for </tspan><tspan x="0" y="102.047">web</tspan><tspan x="51.973" y="102.047" style="letter-spacing: 0.05045349672288888em"> </tspan><tspan x="61.168" y="102.047">development.</tspan><tspan x="232.258" y="102.047" style="letter-spacing: 0.05045349672288888em"> </tspan><tspan x="241.453" y="102.047">Strong</tspan><tspan x="325.316" y="102.047" style="letter-spacing: 0.05045349672288888em"> </tspan><tspan x="334.512" y="102.047">design</tspan><tspan x="417.655" y="102.047" style="letter-spacing: 0.05045349672288888em"> </tspan><tspan x="426.85" y="102.047">skills</tspan><tspan x="485.593" y="102.047" style="letter-spacing: 0.05041889212980047em"> </tspan><tspan x="494.787" y="102.047">in </tspan><tspan x="2.363" y="136.063">composition, color palettes, and collages.</tspan></text>
    </g>
    <g id="title9_path">
      <g>
        <polyline points="1783.582 1123.315 1783.582 1174.187 1754.187 1174.187" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M1754.454,1168.858a5.329,5.329,0,1,0,5.328,5.329A5.329,5.329,0,0,0,1754.454,1168.858Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title9_red" transform="translate(1543.835 1187.394)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Photoshop</text>
    <g id="title8_path">
      <g>
        <polyline points="1783.582 1072.442 1783.582 1123.315 1754.187 1123.315" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M1754.454,1117.986a5.329,5.329,0,1,0,5.328,5.329A5.329,5.329,0,0,0,1754.454,1117.986Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title8_red" transform="translate(1563.88 1135.038)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Illustrator</text>
    <g id="_g_2" data-name="&lt;g&gt;">
      <rect id="graphics_headerbox" x="1522.472" y="988.062" width="303.945" height="84.867" rx="13.785" style="fill: #63769e"/>
      <text id="graphics_header" transform="translate(1568.132 1047.966)" style="font-size: 52.6827392578125px;fill: #fff;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.01999716894347026em">Graphics</text>
    </g>
  </g>
  <g id="cgi">
    <g id="cgi_2">
      <rect id="clipmask_7-2" data-name="clipmask_7" x="585.671" y="689.667" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-11)">
        <image id="img_7" width="3508" height="2480" transform="translate(977.402 391.728) scale(0.242)" xlink:href="hard-skills/img_7.png"/>
      </g>
    </g>
    <g id="cgi_1">
      <rect id="clipmask_1-3" data-name="clipmask_1" x="585.671" y="689.667" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-11)">
        <image id="img_6" width="2480" height="3508" transform="translate(874.968 404.844) scale(0.391)" xlink:href="hard-skills/img_6.png"/>
      </g>
    </g>
    <g id="cgi_default">
      <rect id="clipmask_d3-2" data-name="clipmask_d3" x="585.671" y="689.667" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-11)">
        <image id="img_d3" width="3290" height="2160" transform="translate(823.826 479.158) scale(0.301)" xlink:href="hard-skills/img_d3.png"/>
      </g>
    </g>
    <g id="cgi_2_text">
      <g>
        <path d="M1860.267,757.109v-2.741a5.312,5.312,0,0,0,1.123.748,9.073,9.073,0,0,0,1.378.56,10.8,10.8,0,0,0,1.454.353,8.081,8.081,0,0,0,1.351.125,5.273,5.273,0,0,0,3.189-.8,2.991,2.991,0,0,0,.7-3.688,3.944,3.944,0,0,0-.971-1.087,9.723,9.723,0,0,0-1.468-.942q-.848-.45-1.825-.948-1.035-.526-1.93-1.065a8.363,8.363,0,0,1-1.557-1.191,4.951,4.951,0,0,1-1.04-1.473,5.048,5.048,0,0,1,.213-4.291,5.115,5.115,0,0,1,1.558-1.655,7.064,7.064,0,0,1,2.2-.969,10.08,10.08,0,0,1,2.515-.318,9.592,9.592,0,0,1,4.258.706v2.616a7.7,7.7,0,0,0-4.492-1.217,7.291,7.291,0,0,0-1.516.159,4.24,4.24,0,0,0-1.35.518,3,3,0,0,0-.965.928,2.47,2.47,0,0,0-.372,1.384,2.856,2.856,0,0,0,.282,1.314,3.245,3.245,0,0,0,.834,1.011,8.3,8.3,0,0,0,1.344.886c.527.286,1.137.6,1.825.941q1.062.527,2.012,1.108a9.168,9.168,0,0,1,1.668,1.287,5.754,5.754,0,0,1,1.137,1.563,4.418,4.418,0,0,1,.42,1.966,5,5,0,0,1-.572,2.484,4.712,4.712,0,0,1-1.544,1.655,6.7,6.7,0,0,1-2.239.92,12.217,12.217,0,0,1-2.673.284,11.035,11.035,0,0,1-1.157-.076q-.69-.077-1.406-.222a11.621,11.621,0,0,1-1.357-.359A4.284,4.284,0,0,1,1860.267,757.109Z" style="fill: #fff"/>
        <path d="M1882.425,757.773a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.733v4.193h3.555v1.938h-3.555v7.987a3.325,3.325,0,0,0,.482,2.034,1.92,1.92,0,0,0,1.6.609,2.374,2.374,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M1892.8,746.036a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26V743.738h2.26v2.921h.055a4.94,4.94,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.218-.838,3.656,3.656,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1901.153,758.244a6.525,6.525,0,0,1-5-1.987,7.37,7.37,0,0,1-1.868-5.266,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.766,7.766,0,0,1,1.77,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,1901.153,758.244Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.137,6.137,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.312,6.312,0,0,0-1.178-4.1A4.106,4.106,0,0,0,1901.318,745.316Z" style="fill: #fff"/>
        <path d="M1923.5,757.912h-2.259v-8.083q0-4.513-3.28-4.513a3.551,3.551,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.11,3.233v8.083h-2.26V743.738h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M1939.8,756.777q0,7.806-7.441,7.806a9.959,9.959,0,0,1-4.575-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.55h-.055a5.694,5.694,0,0,1-9.088.823,7.57,7.57,0,0,1-1.605-5.072,8.851,8.851,0,0,1,1.729-5.744,5.766,5.766,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.055v-1.966h2.26Zm-2.26-5.273v-2.091a4.07,4.07,0,0,0-1.136-2.893,3.737,3.737,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.847,6.847,0,0,0-1.185,4.285,5.882,5.882,0,0,0,1.136,3.785,3.667,3.667,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.066,5.066,0,0,0,1937.544,751.5Z" style="fill: #fff"/>
        <path d="M1967.287,757.261a7.316,7.316,0,0,1-3.858.983,6.37,6.37,0,0,1-4.871-1.973,7.166,7.166,0,0,1-1.853-5.114,7.874,7.874,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.728,5.728,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.636,5.636,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.639,5.639,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1971.863,740.139a1.424,1.424,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,1971.863,740.139Zm1.1,17.773h-2.26V743.738h2.26Z" style="fill: #fff"/>
        <path d="M1989.252,757.912h-2.259v-8.083q0-4.513-3.28-4.513a3.551,3.551,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.11,3.233v8.083h-2.26V743.738h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2004.851,751.392h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.36,4.36,0,0,0,3.335,1.287,6.919,6.919,0,0,0,4.381-1.578v2.131a8.154,8.154,0,0,1-4.918,1.357,5.955,5.955,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2028.3,757.912h-2.26v-8.139a6.166,6.166,0,0,0-.723-3.4,2.741,2.741,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.26V749.5q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V743.738h2.26v2.242h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2042.676,757.912h-2.26V755.7h-.054a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.71,8.71,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.7,2.841,2.841,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2053.48,757.773a4.347,4.347,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.733v4.193h3.556v1.938h-3.556v7.987a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2057.656,740.139a1.428,1.428,0,0,1-1.035-.415,1.4,1.4,0,0,1-.426-1.051,1.45,1.45,0,0,1,1.461-1.482,1.456,1.456,0,0,1,1.053.423,1.483,1.483,0,0,1,0,2.1A1.44,1.44,0,0,1,2057.656,740.139Zm1.1,17.773h-2.26V743.738h2.26Z" style="fill: #fff"/>
        <path d="M2072.951,757.261a7.322,7.322,0,0,1-3.859.983,6.37,6.37,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692v2.326a5.728,5.728,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.644,5.644,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2097.017,746.036a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259V743.738h2.259v2.921h.056a4.94,4.94,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2110.811,751.392h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.36,4.36,0,0,0,3.335,1.287,6.919,6.919,0,0,0,4.381-1.578v2.131a8.155,8.155,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.974,5.974,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2125.941,757.912h-2.26v-8.083q0-4.513-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V743.738h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2142.243,757.912h-2.26V755.5h-.056a5.678,5.678,0,0,1-9.1.836,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.23,2.3h.056v-8.776h2.26Zm-2.26-6.408v-2.091a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.126,5.126,0,0,0,2139.983,751.5Z" style="fill: #fff"/>
        <path d="M2158.158,751.392H2148.2a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2168.933,746.036a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.972,3.736v7.226h-2.259V743.738h2.259v2.921h.056a4.94,4.94,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.217-.838,3.658,3.658,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2172.544,740.139a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,2172.544,740.139Zm1.1,17.773h-2.26V743.738h2.26Z" style="fill: #fff"/>
        <path d="M2189.934,757.912h-2.26v-8.083q0-4.513-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V743.738h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2206.236,756.777q0,7.806-7.442,7.806a9.955,9.955,0,0,1-4.574-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564v-1.55h-.056a5.694,5.694,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.769,5.769,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.26Zm-2.26-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.736,3.736,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.848,6.848,0,0,0-1.186,4.285,5.876,5.876,0,0,0,1.137,3.785,3.667,3.667,0,0,0,3.011,1.419,3.926,3.926,0,0,0,3.094-1.357A5.066,5.066,0,0,0,2203.976,751.5Z" style="fill: #fff"/>
        <path d="M2223.246,757.4v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.994a1.732,1.732,0,0,0-.254-.961,2.546,2.546,0,0,0-.69-.7,5.433,5.433,0,0,0-1.019-.547q-.586-.241-1.261-.5a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.375,6.375,0,0,0-3.582-1.024,4.171,4.171,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.664,1.664,0,0,0-.2.809,1.954,1.954,0,0,0,.2.928,2.033,2.033,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.235,1.254.512a17.332,17.332,0,0,1,1.681.74,5.778,5.778,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.975,3.975,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2223.246,757.4Z" style="fill: #fff"/>
        <path d="M2247.788,757.912h-3.168l-6.229-6.81h-.056v6.81h-2.259V736.928h2.259v13.3h.056l5.925-6.492h2.963l-6.545,6.838Z" style="fill: #fff"/>
        <path d="M2251.261,740.139a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2251.261,740.139Zm1.1,17.773h-2.26V743.738h2.26Z" style="fill: #fff"/>
        <path d="M2259.2,757.912h-2.26V736.928h2.26Z" style="fill: #fff"/>
        <path d="M2266.033,757.912h-2.26V736.928h2.26Z" style="fill: #fff"/>
        <path d="M2269.753,757.4v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.994a1.732,1.732,0,0,0-.255-.961,2.527,2.527,0,0,0-.689-.7,5.412,5.412,0,0,0-1.02-.547q-.585-.241-1.26-.5a16.089,16.089,0,0,1-1.647-.754,4.969,4.969,0,0,1-1.185-.859,3.17,3.17,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.056,4.056,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.07,8.07,0,0,1,3.279.637v2.3a6.375,6.375,0,0,0-3.582-1.024,4.166,4.166,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.235,1.254.512a17.332,17.332,0,0,1,1.681.74,5.8,5.8,0,0,1,1.268.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.512,3.512,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.971,7.971,0,0,1,2269.753,757.4Z" style="fill: #fff"/>
        <path d="M2313.65,743.738l-4.231,14.174h-2.342l-2.908-10.146a6.6,6.6,0,0,1-.22-1.315h-.055a6.213,6.213,0,0,1-.29,1.287l-3.155,10.174h-2.26l-4.272-14.174h2.37l2.921,10.658a6.44,6.44,0,0,1,.194,1.274h.109a6,6,0,0,1,.248-1.3l3.252-10.63h2.068l2.92,10.686a7.526,7.526,0,0,1,.207,1.273h.111a5.882,5.882,0,0,1,.234-1.273l2.866-10.686Z" style="fill: #fff"/>
        <path d="M2317.425,740.139a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2317.425,740.139Zm1.1,17.773h-2.26V743.738h2.26Z" style="fill: #fff"/>
        <path d="M2329.648,757.773a4.347,4.347,0,0,1-2.109.443q-3.706,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.733v4.193h3.556v1.938h-3.556v7.987a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.375,2.375,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M2344.378,757.912h-2.259v-8.166q0-4.429-3.28-4.43a3.573,3.573,0,0,0-2.784,1.28,4.787,4.787,0,0,0-1.13,3.287v8.029h-2.26V736.928h2.26v9.163h.056a5.128,5.128,0,0,1,4.63-2.685q4.767,0,4.767,5.771Z" style="fill: #fff"/>
        <path d="M2372.028,757.912h-2.26V755.7h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471A5.489,5.489,0,0,0,2364,752a2.255,2.255,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.7,2.839,2.839,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1860.033,791.415v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.242-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.02,2.02,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.55.234,1.254.512a17.464,17.464,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.975,3.975,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,1860.033,791.415Z" style="fill: #fff"/>
        <path d="M1878.76,792.259a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.97,6.97,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.758,7.758,0,0,1,1.77,5.411,7.628,7.628,0,0,1-1.909,5.432A6.667,6.667,0,0,1,1878.76,792.259Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,1878.925,779.332Z" style="fill: #fff"/>
        <path d="M1891.657,791.927h-2.26V770.944h2.26Z" style="fill: #fff"/>
        <path d="M1897.39,774.155a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,1897.39,774.155Zm1.1,17.772h-2.26V777.754h2.26Z" style="fill: #fff"/>
        <path d="M1915.111,791.927h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.706,3.706,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,1912.851,785.519Z" style="fill: #fff"/>
        <path d="M1938.14,790.793q0,7.806-7.441,7.8a9.959,9.959,0,0,1-4.575-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549h-.055a5.7,5.7,0,0,1-9.088.823,7.57,7.57,0,0,1-1.605-5.072,8.852,8.852,0,0,1,1.729-5.745,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.091a4.067,4.067,0,0,0-1.136-2.892,3.737,3.737,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.28,1.529,6.844,6.844,0,0,0-1.185,4.284,5.88,5.88,0,0,0,1.136,3.785,3.664,3.664,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,1935.88,785.519Z" style="fill: #fff"/>
        <path d="M1950.073,780.051a2.758,2.758,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.357,6.357,0,0,0-.972,3.737v7.225h-2.26V777.754h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1962.626,791.927h-2.259v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.5,5.5,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.167,2.167,0,0,0,.738,1.7,2.837,2.837,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1966.03,791.415v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.586-.242-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.194,3.194,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2.005-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.378,6.378,0,0,0-3.582-1.024,4.213,4.213,0,0,0-1.145.145,2.82,2.82,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.02,2.02,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.551.234,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.975,3.975,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.744,8.744,0,0,1-2.108.249A7.976,7.976,0,0,1,1966.03,791.415Z" style="fill: #fff"/>
        <path d="M1981.174,789.879h-.055v8.567h-2.26V777.754h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.909,7.909,0,0,1,1.529,5.1,8.814,8.814,0,0,1-1.722,5.7,5.723,5.723,0,0,1-4.712,2.138A4.719,4.719,0,0,1,1981.174,789.879Zm-.055-5.716v1.978a4.229,4.229,0,0,0,1.136,2.984,4.045,4.045,0,0,0,6.1-.354,7.264,7.264,0,0,0,1.165-4.388,5.733,5.733,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,1981.119,784.163Z" style="fill: #fff"/>
        <path d="M2007.758,792.259a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.97,6.97,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.758,7.758,0,0,1,1.771,5.411,7.629,7.629,0,0,1-1.91,5.432A6.667,6.667,0,0,1,2007.758,792.259Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.2,6.2,0,0,0,1.178-4.056,6.309,6.309,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2007.923,779.332Z" style="fill: #fff"/>
        <path d="M2025.368,772.937a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.307v1.938H2021.5v12.235h-2.247V779.692h-2.411v-1.938h2.411v-2.3a4.787,4.787,0,0,1,1.282-3.523,4.316,4.316,0,0,1,3.2-1.295,4.417,4.417,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2043.257,791.277a7.327,7.327,0,0,1-3.858.982,6.373,6.373,0,0,1-4.871-1.972,7.165,7.165,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.538,4.538,0,0,0-3.549,1.557,5.931,5.931,0,0,0-1.384,4.09,5.643,5.643,0,0,0,1.3,3.931,4.478,4.478,0,0,0,3.494,1.439,5.646,5.646,0,0,0,3.471-1.231Z" style="fill: #fff"/>
        <path d="M2052.573,792.259a6.528,6.528,0,0,1-4.995-1.986,7.37,7.37,0,0,1-1.868-5.266,7.688,7.688,0,0,1,1.943-5.579,6.97,6.97,0,0,1,5.25-2.006,6.311,6.311,0,0,1,4.926,1.952,7.758,7.758,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2052.573,792.259Zm.165-12.927a4.292,4.292,0,0,0-3.446,1.488,6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2052.738,779.332Z" style="fill: #fff"/>
        <path d="M2070.568,780.051a2.758,2.758,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.357,6.357,0,0,0-.972,3.737v7.225h-2.26V777.754h2.26v2.92h.056a4.943,4.943,0,0,1,1.474-2.332,3.355,3.355,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2084.362,785.408H2074.4a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578V790.9a8.164,8.164,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2109.182,772.079l-7.316,19.848h-2.55l-7.165-19.848h2.577l5.47,15.737a9.53,9.53,0,0,1,.4,1.758h.055a8.519,8.519,0,0,1,.455-1.785l5.58-15.71Z" style="fill: #fff"/>
        <path d="M2117.243,784.924h-7.524v-1.786h7.524Z" style="fill: #fff"/>
        <path d="M2135.776,791.927h-2.756l-3.307-5.564a11.979,11.979,0,0,0-.882-1.321,5.069,5.069,0,0,0-.875-.894,3.054,3.054,0,0,0-.964-.5,3.993,3.993,0,0,0-1.165-.159h-1.9v8.443h-2.314V772.079h5.9a8.408,8.408,0,0,1,2.391.325,5.355,5.355,0,0,1,1.9.99,4.587,4.587,0,0,1,1.261,1.654,5.493,5.493,0,0,1,.455,2.319,5.617,5.617,0,0,1-.31,1.9,4.986,4.986,0,0,1-.882,1.544,5.331,5.331,0,0,1-1.378,1.155,6.972,6.972,0,0,1-1.812.741v.055a4.246,4.246,0,0,1,.862.5,4.759,4.759,0,0,1,.695.672,8.852,8.852,0,0,1,.655.879q.324.49.723,1.142Zm-11.851-17.744v7.2h3.142a4.724,4.724,0,0,0,1.605-.264,3.7,3.7,0,0,0,1.275-.754,3.418,3.418,0,0,0,.84-1.2,4.034,4.034,0,0,0,.3-1.6,3.119,3.119,0,0,0-1.027-2.484,4.391,4.391,0,0,0-2.969-.893Z" style="fill: #fff"/>
        <path d="M2148.287,791.927h-2.259v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.512,5.512,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.17,2.17,0,0,0,.738,1.7,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2163.776,777.754l-6.49,16.443q-1.737,4.4-4.878,4.4a5.159,5.159,0,0,1-1.475-.179v-2.035a4.178,4.178,0,0,0,1.337.249,2.773,2.773,0,0,0,2.563-2.048l1.13-2.686-5.511-14.145h2.507l3.817,10.907q.069.207.289,1.079h.083q.069-.332.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M2171.756,791.415v-2.436a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.242-1.26-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.059,4.059,0,0,1,1.213-1.288,5.674,5.674,0,0,1,1.729-.782,7.649,7.649,0,0,1,2.005-.262,8.07,8.07,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.206,4.206,0,0,0-1.144.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.657,1.657,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.031,2.031,0,0,0,.586.664,4.492,4.492,0,0,0,.937.526q.55.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.835,5.835,0,0,1,1.268.858,3.372,3.372,0,0,1,.8,1.1,3.55,3.55,0,0,1,.283,1.48,3.513,3.513,0,0,1-.461,1.828,3.978,3.978,0,0,1-1.234,1.287,5.641,5.641,0,0,1-1.777.761,8.75,8.75,0,0,1-2.108.249A7.98,7.98,0,0,1,2171.756,791.415Z" style="fill: #fff"/>
        <path d="M2195.926,785.408h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578V790.9a8.166,8.166,0,0,1-4.919,1.356,5.955,5.955,0,0,1-4.7-1.93,7.933,7.933,0,0,1-1.708-5.433,7.77,7.77,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.529,7.529,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.214,5.214,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2205.889,791.789a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2215.453,791.789a4.352,4.352,0,0,1-2.109.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938H2211.9v7.986a3.328,3.328,0,0,0,.482,2.035,1.922,1.922,0,0,0,1.6.609,2.373,2.373,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2219.628,774.155a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,2219.628,774.155Zm1.1,17.772h-2.26V777.754h2.26Z" style="fill: #fff"/>
        <path d="M2237.018,791.927h-2.26v-8.083q0-4.512-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.76,4.76,0,0,0-1.109,3.232v8.083h-2.26V777.754h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.7,6.7,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M2253.32,790.793q0,7.806-7.442,7.8a9.955,9.955,0,0,1-4.574-1v-2.27a9.373,9.373,0,0,0,4.547,1.329q5.209,0,5.209-5.565v-1.549H2251a5.7,5.7,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.857,8.857,0,0,1,1.728-5.745,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.915,3.915,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.011,1.419,3.929,3.929,0,0,0,3.094-1.356A5.073,5.073,0,0,0,2251.06,785.519Z" style="fill: #fff"/>
        <path d="M2257.039,791.415v-2.436a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.744,1.744,0,0,0-.254-.962,2.556,2.556,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.586-.242-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.07,4.07,0,0,1,1.213-1.288,5.685,5.685,0,0,1,1.729-.782,7.654,7.654,0,0,1,2.005-.262,8.067,8.067,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.211,4.211,0,0,0-1.144.145,2.82,2.82,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.954,1.954,0,0,0,.2.928,2.043,2.043,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.81,5.81,0,0,1,1.268.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.828,3.985,3.985,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,2257.039,791.415Z" style="fill: #fff"/>
        <path d="M2283.252,772.937a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308v12.235h-2.246V779.692h-2.411v-1.938h2.411v-2.3a4.791,4.791,0,0,1,1.281-3.523,4.318,4.318,0,0,1,3.2-1.295,4.407,4.407,0,0,1,1.639.249Z" style="fill: #fff"/>
        <path d="M2291.011,792.259a6.528,6.528,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.97,6.97,0,0,1,5.25-2.006,6.313,6.313,0,0,1,4.927,1.952,7.758,7.758,0,0,1,1.77,5.411,7.628,7.628,0,0,1-1.909,5.432A6.667,6.667,0,0,1,2291.011,792.259Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2291.176,779.332Z" style="fill: #fff"/>
        <path d="M2309.006,780.051a2.756,2.756,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.364,6.364,0,0,0-.971,3.737v7.225h-2.26V777.754h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2319.029,774.155a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.452,1.452,0,0,1,1.053.423,1.482,1.482,0,0,1,0,2.1A1.441,1.441,0,0,1,2319.029,774.155Zm1.1,17.772h-2.259V777.754h2.259Z" style="fill: #fff"/>
        <path d="M2336.418,791.927h-2.259v-8.083q0-4.512-3.28-4.512a3.548,3.548,0,0,0-2.8,1.28,4.756,4.756,0,0,0-1.11,3.232v8.083h-2.26V777.754h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.709,6.709,0,0,1,1.226,4.338Z" style="fill: #fff"/>
        <path d="M2347.222,791.789a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2361.58,785.408h-9.962a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578V790.9a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.524,7.524,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2372.218,784.924H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1868.246,814.068a2.752,2.752,0,0,0-1.709-.457,2.881,2.881,0,0,0-2.418,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26V811.77h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M1871.857,808.172a1.433,1.433,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.459,1.459,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.446,1.446,0,0,1,1871.857,808.172Zm1.1,17.771H1870.7V811.77h2.259Z" style="fill: #fff"/>
        <path d="M1883.432,826.275a6.527,6.527,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.764,7.764,0,0,1,1.77,5.412,7.632,7.632,0,0,1-1.909,5.433A6.669,6.669,0,0,1,1883.432,826.275Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.312,6.312,0,0,0-1.178-4.1A4.1,4.1,0,0,0,1883.6,813.348Z" style="fill: #fff"/>
        <path d="M1901.427,814.068a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V811.77h2.26v2.92h.055a4.95,4.95,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1928.248,825.943h-2.259v-2.408h-.056a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.59-5.184,8.52,8.52,0,0,1,1.763-5.634,5.808,5.808,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.774h2.259Zm-2.259-6.408v-2.09a4.062,4.062,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.683,6.683,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419A3.851,3.851,0,0,0,1924.81,823,5.121,5.121,0,0,0,1925.989,819.535Z" style="fill: #fff"/>
        <path d="M1944.163,819.424H1934.2a5.323,5.323,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.924,7.924,0,0,1-1.708-5.432,7.771,7.771,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.515,5Zm-2.314-1.923a4.641,4.641,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1946.726,825.431V823a6.666,6.666,0,0,0,4.065,1.371q2.978,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.525,2.525,0,0,0-.689-.7,5.192,5.192,0,0,0-1.02-.547c-.391-.161-.81-.33-1.261-.5a16.274,16.274,0,0,1-1.646-.755,5,5,0,0,1-1.186-.858,3.2,3.2,0,0,1-.715-1.086,3.837,3.837,0,0,1-.242-1.426,3.41,3.41,0,0,1,.454-1.765,4.046,4.046,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.057,8.057,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.659,1.659,0,0,0-.2.81,1.935,1.935,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.42,4.42,0,0,0,.936.527q.552.236,1.254.511a17.588,17.588,0,0,1,1.682.742,5.8,5.8,0,0,1,1.268.857,3.361,3.361,0,0,1,.805,1.1,3.552,3.552,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.955,3.955,0,0,1-1.233,1.287,5.651,5.651,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,1946.726,825.431Z" style="fill: #fff"/>
        <path d="M1960.713,808.172a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.444,1.444,0,0,1,1960.713,808.172Zm1.1,17.771h-2.26V811.77h2.26Z" style="fill: #fff"/>
        <path d="M1978.434,824.808q0,7.806-7.441,7.807a9.943,9.943,0,0,1-4.575-1v-2.27a9.36,9.36,0,0,0,4.547,1.328q5.21,0,5.209-5.563v-1.551h-.055a5.695,5.695,0,0,1-9.088.824,7.569,7.569,0,0,1-1.605-5.073,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055V811.77h2.26Zm-2.26-5.273v-2.09a4.065,4.065,0,0,0-1.137-2.893,3.738,3.738,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.185,4.283,5.885,5.885,0,0,0,1.136,3.786,3.67,3.67,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,1976.174,819.535Z" style="fill: #fff"/>
        <path d="M1994.721,825.943h-2.26V817.86q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V811.77h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2001.046,822.788l-2.205,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M2018.58,808.172a1.433,1.433,0,0,1-1.034-.415,1.41,1.41,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.46-1.481,1.456,1.456,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,2018.58,808.172Zm1.1,17.771h-2.26V811.77h2.26Z" style="fill: #fff"/>
        <path d="M2035.97,825.943h-2.26V817.86q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V811.77h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2049.846,825.293a7.318,7.318,0,0,1-3.858.982,6.373,6.373,0,0,1-4.871-1.972,7.163,7.163,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.731,5.731,0,0,0-3.362-1.107,4.538,4.538,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.384,4.09,5.639,5.639,0,0,0,1.3,3.93,4.476,4.476,0,0,0,3.493,1.441,5.643,5.643,0,0,0,3.472-1.233Z" style="fill: #fff"/>
        <path d="M2055.523,825.943h-2.26V804.961h2.26Z" style="fill: #fff"/>
        <path d="M2071.508,825.943h-2.26V823.7h-.055a4.637,4.637,0,0,1-4.355,2.574q-5.043,0-5.043-6.034V811.77h2.246v8.111q0,4.485,3.417,4.485a3.451,3.451,0,0,0,2.722-1.226,4.7,4.7,0,0,0,1.068-3.2V811.77h2.26Z" style="fill: #fff"/>
        <path d="M2088.113,825.943h-2.26v-2.408h-.056a5.68,5.68,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.515,8.515,0,0,1,1.764-5.634,5.806,5.806,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.774h2.26Zm-2.26-6.408v-2.09a4.062,4.062,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.893,3.893,0,0,0-3.252,1.523,6.683,6.683,0,0,0-1.186,4.207,6.019,6.019,0,0,0,1.137,3.869,3.712,3.712,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.121,5.121,0,0,0,2085.853,819.535Z" style="fill: #fff"/>
        <path d="M2093.845,808.172a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.444,1.444,0,0,1,2093.845,808.172Zm1.1,17.771h-2.26V811.77h2.26Z" style="fill: #fff"/>
        <path d="M2111.235,825.943h-2.26V817.86q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V811.77h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2127.537,824.808q0,7.806-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.357,9.357,0,0,0,4.547,1.328q5.208,0,5.209-5.563v-1.551h-.056a5.695,5.695,0,0,1-9.088.824,7.574,7.574,0,0,1-1.6-5.073,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056V811.77h2.26Zm-2.26-5.273v-2.09a4.065,4.065,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.924,3.924,0,0,0,3.093-1.357A5.067,5.067,0,0,0,2125.277,819.535Z" style="fill: #fff"/>
        <path d="M2146.7,825.943h-2.26V804.961h2.26Z" style="fill: #fff"/>
        <path d="M2152.428,808.172a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.444,1.444,0,0,1,2152.428,808.172Zm1.1,17.771h-2.26V811.77h2.26Z" style="fill: #fff"/>
        <path d="M2170.149,824.808q0,7.806-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563v-1.551h-.056a5.694,5.694,0,0,1-9.087.824,7.569,7.569,0,0,1-1.605-5.073,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.23,2.3h.056V811.77h2.26Zm-2.26-5.273v-2.09a4.065,4.065,0,0,0-1.137-2.893,3.738,3.738,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,2167.889,819.535Z" style="fill: #fff"/>
        <path d="M2186.436,825.943h-2.26v-8.166q0-4.43-3.279-4.429a3.569,3.569,0,0,0-2.784,1.281,4.784,4.784,0,0,0-1.13,3.287v8.027h-2.26V804.961h2.26v9.162h.055a5.128,5.128,0,0,1,4.63-2.685q4.769,0,4.768,5.772Z" style="fill: #fff"/>
        <path d="M2197.24,825.805a4.352,4.352,0,0,1-2.109.443q-3.706,0-3.707-4.153v-8.387H2189V811.77h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2201.415,808.172a1.433,1.433,0,0,1-1.034-.415,1.411,1.411,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.456,1.456,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,2201.415,808.172Zm1.1,17.771h-2.26V811.77h2.26Z" style="fill: #fff"/>
        <path d="M2218.8,825.943h-2.26V817.86q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V811.77h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.31,4.31,0,0,1,3.542,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2235.107,824.808q0,7.806-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563v-1.551h-.056a5.694,5.694,0,0,1-9.087.824,7.569,7.569,0,0,1-1.605-5.073,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.23,2.3h.056V811.77h2.26Zm-2.26-5.273v-2.09a4.065,4.065,0,0,0-1.137-2.893,3.738,3.738,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,2232.847,819.535Z" style="fill: #fff"/>
        <path d="M2241.748,822.788l-2.2,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M2264.669,825.805a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387h-2.425V811.77h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.924,1.924,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2279.028,819.424h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.924,7.924,0,0,1-1.708-5.432,7.771,7.771,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.923a4.636,4.636,0,0,0-.944-3.06,3.213,3.213,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2292.752,811.77l-4.74,7.17,4.657,7h-2.632l-2.769-4.6q-.263-.429-.62-1.08h-.055c-.047.083-.263.444-.648,1.08l-2.824,4.6h-2.605l4.809-6.948-4.6-7.225h2.632l2.727,4.844q.3.54.593,1.107h.056l3.527-5.951Z" style="fill: #fff"/>
        <path d="M2301.944,825.805a4.349,4.349,0,0,1-2.109.443q-3.707,0-3.707-4.153v-8.387H2293.7V811.77h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2316.371,825.943h-2.259V823.7h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.045,0-5.043-6.034V811.77h2.246v8.111q0,4.485,3.417,4.485a3.45,3.45,0,0,0,2.721-1.226,4.7,4.7,0,0,0,1.069-3.2V811.77h2.259Z" style="fill: #fff"/>
        <path d="M2328.29,814.068a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V811.77h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.674,3.674,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2331.9,808.172a1.432,1.432,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.442,1.442,0,0,1,2331.9,808.172Zm1.1,17.771h-2.259V811.77H2333Z" style="fill: #fff"/>
        <path d="M2349.291,825.943h-2.259V817.86q0-4.512-3.28-4.512a3.549,3.549,0,0,0-2.8,1.281,4.753,4.753,0,0,0-1.11,3.231v8.083h-2.259V811.77h2.259v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2365.593,824.808q0,7.806-7.441,7.807a9.939,9.939,0,0,1-4.574-1v-2.27a9.354,9.354,0,0,0,4.546,1.328q5.21,0,5.209-5.563v-1.551h-.055a5.695,5.695,0,0,1-9.088.824,7.574,7.574,0,0,1-1.605-5.073,8.858,8.858,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055V811.77h2.26Zm-2.26-5.273v-2.09a4.068,4.068,0,0,0-1.136-2.893,3.739,3.739,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.28,1.53,6.839,6.839,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.01,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,2363.333,819.535Z" style="fill: #fff"/>
        <path d="M2372.235,822.788l-2.2,6.809h-1.613l1.613-6.809Z" style="fill: #fff"/>
        <path d="M1870.988,859.959h-2.26v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.546,4.624,4.624,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.932,6.932,0,0,0-4.6,1.743v-2.325a8.714,8.714,0,0,1,4.795-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.538,5.538,0,0,0-2.371.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.659,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1886.958,859.959H1884.7v-8.083q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259V845.786h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M1903.26,859.959H1901V857.55h-.055a5.679,5.679,0,0,1-9.1.838,7.835,7.835,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.808,5.808,0,0,1,4.7-2.117,4.518,4.518,0,0,1,4.231,2.3H1901v-8.775h2.26ZM1901,853.55v-2.089a4.068,4.068,0,0,0-1.129-2.907,3.782,3.782,0,0,0-2.867-1.19,3.9,3.9,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.137,3.87,3.71,3.71,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.372A5.119,5.119,0,0,0,1901,853.55Z" style="fill: #fff"/>
        <path d="M1925.183,859.308a7.309,7.309,0,0,1-3.858.983,6.377,6.377,0,0,1-4.871-1.972,7.165,7.165,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.691v2.325a5.739,5.739,0,0,0-3.362-1.106,4.535,4.535,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.089,5.64,5.64,0,0,0,1.3,3.931,4.476,4.476,0,0,0,3.493,1.441,5.649,5.649,0,0,0,3.472-1.233Z" style="fill: #fff"/>
        <path d="M1938.7,859.959h-2.26v-2.214h-.055a4.73,4.73,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743v-2.325a8.711,8.711,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.538,5.538,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.838,2.838,0,0,0,1.964.659,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1963,859.959h-2.26V851.82a6.153,6.153,0,0,0-.724-3.4,2.739,2.739,0,0,0-2.432-1.052,3,3,0,0,0-2.459,1.328,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.261v-8.415q0-4.181-3.21-4.18a2.97,2.97,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V845.786h2.26v2.242h.056a4.789,4.789,0,0,1,4.382-2.574,4.078,4.078,0,0,1,4,2.933,5.031,5.031,0,0,1,4.684-2.933q4.659,0,4.659,5.771Z" style="fill: #fff"/>
        <path d="M1978.607,853.44h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.355,4.355,0,0,0,3.334,1.289,6.915,6.915,0,0,0,4.382-1.579v2.131a8.151,8.151,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.637-2.083,5.293,5.293,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1989.382,848.084a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V845.786h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2001.936,859.959h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.934,6.934,0,0,0-4.6,1.743v-2.325a8.714,8.714,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.839,2.839,0,0,0,1.964.659,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2023.542,859.308a7.309,7.309,0,0,1-3.858.983,6.377,6.377,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.973,6.973,0,0,1,5.332-2.124,7.406,7.406,0,0,1,3.281.691v2.325a5.74,5.74,0,0,0-3.363-1.106,4.531,4.531,0,0,0-3.548,1.557,5.925,5.925,0,0,0-1.385,4.089,5.635,5.635,0,0,0,1.3,3.931,4.476,4.476,0,0,0,3.493,1.441,5.649,5.649,0,0,0,3.471-1.233Z" style="fill: #fff"/>
        <path d="M2032.858,860.291a6.524,6.524,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.867-5.266,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.638,7.638,0,0,1-1.909,5.433A6.671,6.671,0,0,1,2032.858,860.291Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.349,4.349,0,0,0,3.432,1.455,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2033.023,847.364Z" style="fill: #fff"/>
        <path d="M2055.207,859.959h-2.259v-8.083q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083H2043.5V845.786h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2068.753,840.831a10.239,10.239,0,0,0-1.42-.18q-.825-.055-1.639-.056a3.107,3.107,0,0,0-1.633.374,2.469,2.469,0,0,0-.943,1.038,4.809,4.809,0,0,0-.442,1.584,17.146,17.146,0,0,0-.11,2.015v.18h7.5v14.173h-2.26V847.723h-5.236v12.236h-2.246V847.723h-2.411v-1.937h2.411v-.8a14.885,14.885,0,0,1,.076-1.5,7.174,7.174,0,0,1,.3-1.453,5.667,5.667,0,0,1,.606-1.315,3.843,3.843,0,0,1,1-1.066,4.852,4.852,0,0,1,1.495-.713,7.337,7.337,0,0,1,2.081-.262q.771,0,1.564.041t1.316.111Z" style="fill: #fff"/>
        <path d="M2086.68,858.824q0,7.806-7.441,7.807a9.934,9.934,0,0,1-4.575-1v-2.269a9.36,9.36,0,0,0,4.547,1.328q5.21,0,5.209-5.563v-1.551h-.055a5.695,5.695,0,0,1-9.088.824,7.571,7.571,0,0,1-1.605-5.073,8.853,8.853,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.594,4.594,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.274v-2.089a4.068,4.068,0,0,0-1.136-2.893,3.737,3.737,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.841,6.841,0,0,0-1.185,4.283,5.888,5.888,0,0,0,1.136,3.787,3.67,3.67,0,0,0,3.011,1.419,3.928,3.928,0,0,0,3.094-1.357A5.068,5.068,0,0,0,2084.42,853.55Z" style="fill: #fff"/>
        <path d="M2102.664,859.959h-2.259v-2.243h-.056a4.637,4.637,0,0,1-4.354,2.575q-5.044,0-5.043-6.034v-8.471h2.246v8.11q0,4.485,3.417,4.486a3.453,3.453,0,0,0,2.721-1.226,4.7,4.7,0,0,0,1.069-3.2v-8.166h2.259Z" style="fill: #fff"/>
        <path d="M2114.583,848.084a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V845.786h2.26v2.92h.055a4.952,4.952,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.677,3.677,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2127.137,859.959h-2.26v-2.214h-.054a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.929,6.929,0,0,0-4.6,1.743v-2.325a8.708,8.708,0,0,1,4.794-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.469a5.529,5.529,0,0,0-2.37.783,2.26,2.26,0,0,0-.8,1.986,2.166,2.166,0,0,0,.737,1.695,2.841,2.841,0,0,0,1.964.659,3.621,3.621,0,0,0,2.777-1.184,4.241,4.241,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2137.941,859.821a4.35,4.35,0,0,1-2.109.442q-3.706,0-3.707-4.152v-8.388H2129.7v-1.937h2.424v-3.46l2.26-.735v4.195h3.556v1.937h-3.556v7.987a3.32,3.32,0,0,0,.483,2.035,1.921,1.921,0,0,0,1.6.608,2.363,2.363,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2142.117,842.187a1.432,1.432,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.48,1.455,1.455,0,0,1,1.053.422,1.418,1.418,0,0,1,.434,1.058,1.4,1.4,0,0,1-.434,1.038A1.438,1.438,0,0,1,2142.117,842.187Zm1.1,17.772h-2.26V845.786h2.26Z" style="fill: #fff"/>
        <path d="M2153.692,860.291a6.524,6.524,0,0,1-4.995-1.986,7.376,7.376,0,0,1-1.868-5.266,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.638,7.638,0,0,1-1.909,5.433A6.672,6.672,0,0,1,2153.692,860.291Zm.165-12.927a4.291,4.291,0,0,0-3.445,1.487,6.133,6.133,0,0,0-1.268,4.105,5.8,5.8,0,0,0,1.281,3.971,4.349,4.349,0,0,0,3.432,1.455,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2153.857,847.364Z" style="fill: #fff"/>
        <path d="M2176.041,859.959h-2.259v-8.083q0-4.512-3.28-4.512a3.551,3.551,0,0,0-2.8,1.28,4.758,4.758,0,0,0-1.11,3.232v8.083h-2.259V845.786h2.259v2.352h.056a5.086,5.086,0,0,1,4.63-2.684,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2181.085,860.263a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.092,1.53,1.53,0,0,1,.448-1.1,1.447,1.447,0,0,1,1.082-.464,1.482,1.482,0,0,1,1.1.464,1.517,1.517,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.549Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="cgi_1_text">
      <g>
        <path d="M1871.663,721.22h-10.472V701.373h10.031v2.1h-7.717v6.6h7.138v2.09h-7.138v6.948h8.158Z" style="fill: #fff"/>
        <path d="M1885.47,707.048l-4.74,7.169,4.657,7h-2.632l-2.769-4.594c-.175-.286-.382-.647-.62-1.08h-.055q-.071.124-.649,1.08l-2.824,4.594h-2.6l4.808-6.948-4.6-7.224h2.632l2.727,4.843c.2.361.4.73.593,1.108h.056l3.527-5.951Z" style="fill: #fff"/>
        <path d="M1890.431,719.173h-.056v8.567h-2.259V707.048h2.259v2.491h.056a5.338,5.338,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.908,7.908,0,0,1,1.529,5.1,8.812,8.812,0,0,1-1.723,5.7,5.722,5.722,0,0,1-4.711,2.137A4.717,4.717,0,0,1,1890.431,719.173Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.105-.353,7.266,7.266,0,0,0,1.165-4.388,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.341,3.993,3.993,0,0,0-3.169,1.377A5.071,5.071,0,0,0,1890.375,713.456Z" style="fill: #fff"/>
        <path d="M1916.047,714.7h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.636-2.084,5.3,5.3,0,0,1,4.286,1.8,7.532,7.532,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.713,1.148,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1926.823,709.345a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.358,6.358,0,0,0-.972,3.738v7.224h-2.26V707.048h2.26v2.919h.056a4.948,4.948,0,0,1,1.474-2.332,3.357,3.357,0,0,1,2.218-.836,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M1930.434,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.444,1.444,0,0,1,1930.434,703.449Zm1.1,17.771h-2.26V707.048h2.26Z" style="fill: #fff"/>
        <path d="M1947.452,714.7h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.974,5.974,0,0,1,4.637-2.084,5.3,5.3,0,0,1,4.285,1.8,7.527,7.527,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1962.581,721.22h-2.259v-8.083q0-4.51-3.28-4.511a3.548,3.548,0,0,0-2.8,1.28,4.755,4.755,0,0,0-1.11,3.231v8.083h-2.259V707.048h2.259V709.4h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M1976.457,720.57a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.172,7.172,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.626,6.974,6.974,0,0,1,5.332-2.125,7.407,7.407,0,0,1,3.281.692v2.325a5.74,5.74,0,0,0-3.363-1.106,4.533,4.533,0,0,0-3.548,1.556,5.927,5.927,0,0,0-1.385,4.09,5.637,5.637,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M1991.215,714.7h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.159,8.159,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.973,5.973,0,0,1,4.636-2.084,5.3,5.3,0,0,1,4.286,1.8,7.532,7.532,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2006.676,721.22h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.836,7.836,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.808,5.808,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.067,4.067,0,0,0-1.129-2.906,3.782,3.782,0,0,0-2.867-1.19,3.892,3.892,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.019,6.019,0,0,0,1.137,3.869,3.707,3.707,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2004.416,714.812Z" style="fill: #fff"/>
        <path d="M2018.953,703.449a1.436,1.436,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.053,1.448,1.448,0,0,1,1.461-1.48,1.451,1.451,0,0,1,1.053.422,1.482,1.482,0,0,1,0,2.1A1.442,1.442,0,0,1,2018.953,703.449Zm1.1,17.771h-2.26V707.048h2.26Z" style="fill: #fff"/>
        <path d="M2036.342,721.22h-2.26v-8.083q0-4.51-3.279-4.511a3.551,3.551,0,0,0-2.805,1.28,4.76,4.76,0,0,0-1.109,3.231v8.083h-2.26V707.048h2.26V709.4h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2056.762,720.57a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.167,7.167,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.626,6.972,6.972,0,0,1,5.332-2.125,7.4,7.4,0,0,1,3.28.692v2.325a5.737,5.737,0,0,0-3.362-1.106,4.537,4.537,0,0,0-3.549,1.556,5.927,5.927,0,0,0-1.384,4.09,5.641,5.641,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M2061.337,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.482,1.482,0,0,1,0,2.1A1.444,1.444,0,0,1,2061.337,703.449Zm1.1,17.771h-2.26V707.048h2.26Z" style="fill: #fff"/>
        <path d="M2078.727,721.22h-2.26v-8.083q0-4.51-3.279-4.511a3.55,3.55,0,0,0-2.805,1.28,4.76,4.76,0,0,0-1.109,3.231v8.083h-2.26V707.048h2.26V709.4h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.713,6.713,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2094.326,714.7h-9.963a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.974,5.974,0,0,1,4.637-2.084,5.3,5.3,0,0,1,4.285,1.8,7.527,7.527,0,0,1,1.516,5Zm-2.315-1.924a4.641,4.641,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2117.779,721.22h-2.26v-8.138a6.156,6.156,0,0,0-.724-3.4,2.738,2.738,0,0,0-2.432-1.051,3.006,3.006,0,0,0-2.459,1.328,5.094,5.094,0,0,0-1.013,3.183v8.083h-2.261v-8.415q0-4.18-3.21-4.179a2.97,2.97,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.259v8.083h-2.259V707.048H2100v2.242h.056a4.789,4.789,0,0,1,4.382-2.575,4.08,4.08,0,0,1,4,2.934,5.032,5.032,0,0,1,4.685-2.934q4.658,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2132.151,721.22h-2.26v-2.213h-.055a4.728,4.728,0,0,1-4.34,2.545,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.975q0-3.973,4.658-4.623l4.23-.595q0-3.612-2.907-3.612a6.932,6.932,0,0,0-4.6,1.743v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.288Zm-2.26-7.169-3.4.47a5.529,5.529,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.987,2.166,2.166,0,0,0,.737,1.7,2.839,2.839,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2142.954,721.083a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.2h3.555v1.937H2139.4v7.986a3.331,3.331,0,0,0,.482,2.036,1.925,1.925,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2147.13,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.482,1.482,0,0,1,0,2.1A1.444,1.444,0,0,1,2147.13,703.449Zm1.1,17.771h-2.26V707.048h2.26Z" style="fill: #fff"/>
        <path d="M2162.425,720.57a7.318,7.318,0,0,1-3.858.982,6.376,6.376,0,0,1-4.871-1.971,7.167,7.167,0,0,1-1.853-5.115,7.88,7.88,0,0,1,2-5.626,6.974,6.974,0,0,1,5.332-2.125,7.41,7.41,0,0,1,3.281.692v2.325a5.74,5.74,0,0,0-3.363-1.106,4.537,4.537,0,0,0-3.549,1.556,5.931,5.931,0,0,0-1.384,4.09,5.641,5.641,0,0,0,1.3,3.931,4.479,4.479,0,0,0,3.494,1.44,5.648,5.648,0,0,0,3.471-1.232Z" style="fill: #fff"/>
        <path d="M2179.745,709.345a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.358,6.358,0,0,0-.972,3.738v7.224h-2.26V707.048h2.26v2.919h.056a4.948,4.948,0,0,1,1.474-2.332,3.357,3.357,0,0,1,2.218-.836,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M2193.538,714.7h-9.962a5.32,5.32,0,0,0,1.267,3.653,4.359,4.359,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.867-5.39,5.974,5.974,0,0,1,4.637-2.084,5.3,5.3,0,0,1,4.285,1.8,7.526,7.526,0,0,1,1.515,5Zm-2.314-1.924a4.641,4.641,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2208.668,721.22h-2.259v-8.083q0-4.51-3.28-4.511a3.548,3.548,0,0,0-2.8,1.28,4.755,4.755,0,0,0-1.11,3.231v8.083h-2.26V707.048h2.26V709.4h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2224.97,721.22h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.836,7.836,0,0,1-1.591-5.184,8.514,8.514,0,0,1,1.764-5.633,5.808,5.808,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.774h2.26Zm-2.26-6.408v-2.09a4.064,4.064,0,0,0-1.13-2.906,3.78,3.78,0,0,0-2.866-1.19,3.892,3.892,0,0,0-3.252,1.522,6.685,6.685,0,0,0-1.185,4.207,6.024,6.024,0,0,0,1.136,3.869,3.71,3.71,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.066-1.371A5.119,5.119,0,0,0,2222.71,714.812Z" style="fill: #fff"/>
        <path d="M2240.885,714.7h-9.963a5.315,5.315,0,0,0,1.268,3.653,4.357,4.357,0,0,0,3.335,1.288,6.914,6.914,0,0,0,4.382-1.578V720.2a8.159,8.159,0,0,1-4.919,1.356,5.955,5.955,0,0,1-4.7-1.93,7.931,7.931,0,0,1-1.708-5.433,7.767,7.767,0,0,1,1.868-5.39,5.973,5.973,0,0,1,4.636-2.084,5.3,5.3,0,0,1,4.286,1.8,7.532,7.532,0,0,1,1.515,5Zm-2.314-1.924a4.641,4.641,0,0,0-.945-3.06,3.211,3.211,0,0,0-2.584-1.092,3.639,3.639,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2251.661,709.345a2.758,2.758,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.358,6.358,0,0,0-.972,3.738v7.224h-2.26V707.048h2.26v2.919h.056a4.948,4.948,0,0,1,1.474-2.332,3.357,3.357,0,0,1,2.218-.836,3.686,3.686,0,0,1,1.351.193Z" style="fill: #fff"/>
        <path d="M2255.272,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.444,1.444,0,0,1,2255.272,703.449Zm1.1,17.771h-2.259V707.048h2.259Z" style="fill: #fff"/>
        <path d="M2272.662,721.22h-2.26v-8.083q0-4.51-3.28-4.511a3.549,3.549,0,0,0-2.8,1.28,4.76,4.76,0,0,0-1.11,3.231v8.083h-2.259V707.048h2.259V709.4h.056a5.087,5.087,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.719,6.719,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2288.963,720.086q0,7.806-7.441,7.806a9.939,9.939,0,0,1-4.574-1v-2.269a9.368,9.368,0,0,0,4.547,1.328q5.208,0,5.209-5.564v-1.55h-.056a5.7,5.7,0,0,1-9.088.824,7.577,7.577,0,0,1-1.605-5.074,8.858,8.858,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.056v-1.964h2.259Zm-2.259-5.274v-2.09a4.061,4.061,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.28,1.529,6.839,6.839,0,0,0-1.185,4.283,5.879,5.879,0,0,0,1.137,3.786,3.664,3.664,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.072,5.072,0,0,0,2286.7,714.812Z" style="fill: #fff"/>
        <path d="M2295.605,718.065l-2.2,6.81h-1.613l1.613-6.81Z" style="fill: #fff"/>
        <path d="M2317.61,721.22h-2.26v-2.242h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.043,0-5.043-6.034v-8.47h2.246v8.11q0,4.485,3.417,4.485a3.454,3.454,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M2328.716,721.083a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.937h2.425v-3.46l2.26-.735v4.2h3.555v1.937h-3.555v7.986a3.331,3.331,0,0,0,.482,2.036,1.922,1.922,0,0,0,1.6.608,2.362,2.362,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2332.892,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.444,1.444,0,0,1,2332.892,703.449Zm1.1,17.771h-2.26V707.048h2.26Z" style="fill: #fff"/>
        <path d="M2340.829,721.22h-2.26V700.238h2.26Z" style="fill: #fff"/>
        <path d="M2346.562,703.449a1.433,1.433,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.053,1.45,1.45,0,0,1,1.461-1.48,1.453,1.453,0,0,1,1.054.422,1.485,1.485,0,0,1,0,2.1A1.444,1.444,0,0,1,2346.562,703.449Zm1.1,17.771H2345.4V707.048h2.259Z" style="fill: #fff"/>
        <path d="M2362.078,707.7l-8.351,11.585H2362v1.937h-11.588v-.706l8.349-11.529h-7.564v-1.937h10.886Z" style="fill: #fff"/>
        <path d="M2372.219,714.217H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1862.045,737.465a1.43,1.43,0,0,1-1.034-.416,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.444,1.444,0,0,1,1862.045,737.465Zm1.1,17.771h-2.26V741.063h2.26Z" style="fill: #fff"/>
        <path d="M1879.435,755.236h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V741.063h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M1895.737,754.1q0,7.806-7.442,7.807a9.942,9.942,0,0,1-4.574-1v-2.27a9.36,9.36,0,0,0,4.547,1.328q5.209,0,5.209-5.563v-1.551h-.056a5.695,5.695,0,0,1-9.088.824,7.574,7.574,0,0,1-1.6-5.073,8.858,8.858,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.273v-2.09a4.065,4.065,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.279,1.53,6.839,6.839,0,0,0-1.186,4.283,5.879,5.879,0,0,0,1.137,3.786,3.67,3.67,0,0,0,3.011,1.419,3.926,3.926,0,0,0,3.094-1.357A5.072,5.072,0,0,0,1893.477,748.828Z" style="fill: #fff"/>
        <path d="M1920.348,755.236h-2.26v-2.214h-.054a4.731,4.731,0,0,1-4.341,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.594q0-3.614-2.907-3.613a6.929,6.929,0,0,0-4.6,1.743v-2.325a8.716,8.716,0,0,1,4.794-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.658,3.621,3.621,0,0,0,2.777-1.184,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1926.866,755.236h-2.26V734.254h2.26Z" style="fill: #fff"/>
        <path d="M1933.7,755.236h-2.26V734.254h2.26Z" style="fill: #fff"/>
        <path d="M1958.769,755.236h-10.252V735.388h2.314v17.744h7.938Z" style="fill: #fff"/>
        <path d="M1972.907,755.236h-2.26v-2.242h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.044,0-5.043-6.034v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.452,3.452,0,0,0,2.722-1.226,4.7,4.7,0,0,0,1.068-3.2v-8.166h2.26Z" style="fill: #fff"/>
        <path d="M1997.5,755.236h-2.259V747.1a6.161,6.161,0,0,0-.724-3.4,2.741,2.741,0,0,0-2.433-1.052,3.009,3.009,0,0,0-2.459,1.328,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.415q0-4.181-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V741.063h2.26v2.242h.056a4.79,4.79,0,0,1,4.381-2.574,4.08,4.08,0,0,1,4,2.934,5.031,5.031,0,0,1,4.684-2.934q4.659,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2002.933,737.465a1.43,1.43,0,0,1-1.034-.416,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.444,1.444,0,0,1,2002.933,737.465Zm1.1,17.771h-2.26V741.063h2.26Z" style="fill: #fff"/>
        <path d="M2014.508,755.568a6.527,6.527,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.319,6.319,0,0,1,4.927,1.951,7.764,7.764,0,0,1,1.771,5.412,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,2014.508,755.568Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.306,6.306,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2014.673,742.641Z" style="fill: #fff"/>
        <path d="M2036.858,755.236h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V741.063h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2058.025,736.247a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.307V743h-3.307v12.235h-2.246V743H2049.5v-1.938h2.411v-2.3a4.788,4.788,0,0,1,1.281-3.522,4.319,4.319,0,0,1,3.2-1.294,4.41,4.41,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M2071.3,755.236h-2.259v-2.242h-.056a4.637,4.637,0,0,1-4.355,2.574q-5.043,0-5.043-6.034v-8.471h2.247v8.111q0,4.485,3.417,4.485a3.45,3.45,0,0,0,2.721-1.226,4.7,4.7,0,0,0,1.069-3.2v-8.166h2.259Z" style="fill: #fff"/>
        <path d="M2087.569,755.236h-2.26v-8.083q0-4.512-3.279-4.512a3.551,3.551,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V741.063h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M2101.445,754.586a7.319,7.319,0,0,1-3.859.982,6.376,6.376,0,0,1-4.871-1.972,7.167,7.167,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.4,7.4,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.639,5.639,0,0,0,1.3,3.93,4.476,4.476,0,0,0,3.493,1.441,5.643,5.643,0,0,0,3.472-1.233Z" style="fill: #fff"/>
        <path d="M2111.408,755.1a4.352,4.352,0,0,1-2.109.443q-3.707,0-3.707-4.153V743h-2.425v-1.938h2.425V737.6l2.26-.734v4.194h3.556V743h-3.556v7.986a3.328,3.328,0,0,0,.482,2.035,1.925,1.925,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2115.583,737.465a1.43,1.43,0,0,1-1.034-.416,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.444,1.444,0,0,1,2115.583,737.465Zm1.1,17.771h-2.26V741.063h2.26Z" style="fill: #fff"/>
        <path d="M2127.159,755.568a6.531,6.531,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.926,1.951,7.764,7.764,0,0,1,1.771,5.412,7.637,7.637,0,0,1-1.909,5.433A6.672,6.672,0,0,1,2127.159,755.568Zm.165-12.927a4.291,4.291,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.312,6.312,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2127.324,742.641Z" style="fill: #fff"/>
        <path d="M2149.508,755.236h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.8,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V741.063h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2152.912,754.724v-2.436a6.664,6.664,0,0,0,4.065,1.371q2.976,0,2.977-1.993a1.731,1.731,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.211,5.211,0,0,0-1.019-.547q-.586-.241-1.261-.5a16.3,16.3,0,0,1-1.647-.755,5,5,0,0,1-1.185-.858,3.185,3.185,0,0,1-.716-1.086,3.858,3.858,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.046,4.046,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.058,8.058,0,0,1,3.28.637v2.3a6.373,6.373,0,0,0-3.583-1.024,4.172,4.172,0,0,0-1.144.145,2.777,2.777,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.67,1.67,0,0,0-.2.81,1.947,1.947,0,0,0,.2.927,2.033,2.033,0,0,0,.586.664,4.429,4.429,0,0,0,.937.527q.551.236,1.254.511a17.564,17.564,0,0,1,1.681.742,5.773,5.773,0,0,1,1.268.857,3.364,3.364,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.985,3.985,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,2152.912,754.724Z" style="fill: #fff"/>
        <path d="M2187.019,748.717h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.361,4.361,0,0,0,3.335,1.288,6.919,6.919,0,0,0,4.381-1.578v2.131a8.155,8.155,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.931,7.929,7.929,0,0,1-1.708-5.432,7.771,7.771,0,0,1,1.867-5.391,5.974,5.974,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.923a4.636,4.636,0,0,0-.944-3.06,3.212,3.212,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.149,5.218,5.218,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2207.206,736.108a10.4,10.4,0,0,0-1.419-.18q-.826-.056-1.64-.055a3.1,3.1,0,0,0-1.633.374,2.472,2.472,0,0,0-.944,1.038,4.851,4.851,0,0,0-.441,1.584,17.116,17.116,0,0,0-.11,2.014v.18h7.5v14.173h-2.26V743h-5.236v12.235h-2.26V743h-5.222v12.235h-2.247V743h-2.411v-1.938h2.411v-2.3a4.788,4.788,0,0,1,1.282-3.522,4.319,4.319,0,0,1,3.2-1.294,4.417,4.417,0,0,1,1.64.249v2.049a2.992,2.992,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h5.222v-.8q0-.747.076-1.5a7.188,7.188,0,0,1,.3-1.453,5.689,5.689,0,0,1,.607-1.315,3.81,3.81,0,0,1,1.006-1.066,4.949,4.949,0,0,1,1.5-.712,7.323,7.323,0,0,1,2.08-.263q.771,0,1.564.041t1.316.111Z" style="fill: #fff"/>
        <path d="M2222.707,754.586a7.318,7.318,0,0,1-3.858.982,6.373,6.373,0,0,1-4.871-1.972,7.168,7.168,0,0,1-1.853-5.114,7.88,7.88,0,0,1,2-5.627,6.973,6.973,0,0,1,5.332-2.124,7.407,7.407,0,0,1,3.281.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.534,4.534,0,0,0-3.548,1.557,5.925,5.925,0,0,0-1.385,4.09,5.634,5.634,0,0,0,1.3,3.93,4.476,4.476,0,0,0,3.493,1.441,5.643,5.643,0,0,0,3.471-1.233Z" style="fill: #fff"/>
        <path d="M2227.283,737.465a1.433,1.433,0,0,1-1.035-.416,1.406,1.406,0,0,1-.426-1.052,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.442,1.442,0,0,1,2227.283,737.465Zm1.1,17.771h-2.26V741.063h2.26Z" style="fill: #fff"/>
        <path d="M2244.3,748.717h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.361,4.361,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.131a8.159,8.159,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.931,7.924,7.924,0,0,1-1.708-5.432,7.771,7.771,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.923a4.636,4.636,0,0,0-.945-3.06,3.212,3.212,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.713,1.149,5.206,5.206,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2259.43,755.236h-2.26v-8.083q0-4.512-3.279-4.512a3.552,3.552,0,0,0-2.805,1.281,4.758,4.758,0,0,0-1.109,3.231v8.083h-2.26V741.063h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.31,4.31,0,0,1,3.542,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M2270.234,755.1a4.349,4.349,0,0,1-2.109.443q-3.707,0-3.707-4.153V743h-2.424v-1.938h2.424V737.6l2.26-.734v4.194h3.556V743h-3.556v7.986a3.32,3.32,0,0,0,.483,2.035,1.922,1.922,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2275.511,755.236h-2.26V734.254h2.26Z" style="fill: #fff"/>
        <path d="M2291.317,741.063l-6.49,16.444q-1.737,4.4-4.878,4.4a5.153,5.153,0,0,1-1.475-.181v-2.034a4.178,4.178,0,0,0,1.337.249,2.773,2.773,0,0,0,2.563-2.048l1.13-2.685-5.511-14.146h2.507l3.817,10.906q.069.208.289,1.08h.083q.069-.332.275-1.051l4.01-10.935Z" style="fill: #fff"/>
        <path d="M2292.832,755.541a1.464,1.464,0,0,1-1.082-.457,1.508,1.508,0,0,1-.448-1.093,1.535,1.535,0,0,1,.448-1.1,1.452,1.452,0,0,1,1.082-.464,1.486,1.486,0,0,1,1.1.464,1.517,1.517,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.55Z" style="fill: #fff"/>
        <path d="M2310.719,747.734v7.5h-2.314V735.388h5.428a7.148,7.148,0,0,1,4.913,1.55,5.548,5.548,0,0,1,1.743,4.374,6.029,6.029,0,0,1-1.936,4.623,7.38,7.38,0,0,1-5.229,1.8Zm0-10.242v8.139h2.426a5.409,5.409,0,0,0,3.658-1.1,3.9,3.9,0,0,0,1.261-3.107q0-3.931-4.63-3.931Z" style="fill: #fff"/>
        <path d="M2330.838,743.361a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V741.063h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.7,3.7,0,0,1,1.35.193Z" style="fill: #fff"/>
        <path d="M2339.19,755.568a6.527,6.527,0,0,1-4.995-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.321,6.321,0,0,1,4.927,1.951,7.768,7.768,0,0,1,1.77,5.412,7.637,7.637,0,0,1-1.909,5.433A6.671,6.671,0,0,1,2339.19,755.568Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.312,6.312,0,0,0-1.178-4.1A4.1,4.1,0,0,0,2339.355,742.641Z" style="fill: #fff"/>
        <path d="M2359.115,736.108a10.436,10.436,0,0,0-1.42-.18q-.827-.056-1.64-.055a3.107,3.107,0,0,0-1.633.374,2.47,2.47,0,0,0-.943,1.038,4.826,4.826,0,0,0-.442,1.584,17.116,17.116,0,0,0-.11,2.014v.18h7.5v14.173h-2.26V743h-5.236v12.235h-2.246V743h-2.411v-1.938h2.411v-.8a14.885,14.885,0,0,1,.076-1.5,7.257,7.257,0,0,1,.3-1.453,5.731,5.731,0,0,1,.607-1.315,3.827,3.827,0,0,1,1-1.066,4.851,4.851,0,0,1,1.495-.712,7.33,7.33,0,0,1,2.081-.263c.513,0,1.035.014,1.563.041s.967.065,1.317.111Z" style="fill: #fff"/>
        <path d="M2372.218,748.233H2364.7v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M1870.505,788.6a7.318,7.318,0,0,1-3.858.983,6.374,6.374,0,0,1-4.871-1.973,7.163,7.163,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.535,4.535,0,0,0-3.549,1.558,5.929,5.929,0,0,0-1.384,4.089,5.643,5.643,0,0,0,1.3,3.931,4.478,4.478,0,0,0,3.494,1.439,5.646,5.646,0,0,0,3.471-1.231Z" style="fill: #fff"/>
        <path d="M1875.08,771.48a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.46-1.481,1.456,1.456,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,1875.08,771.48Zm1.1,17.773h-2.26V775.079h2.26Z" style="fill: #fff"/>
        <path d="M1892.1,782.733h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.916,6.916,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.357,5.955,5.955,0,0,1-4.7-1.931,7.933,7.933,0,0,1-1.708-5.433,7.765,7.765,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.292,5.292,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.646,3.646,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1907.228,789.253h-2.26V781.17q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V775.079h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1918.032,789.114a4.352,4.352,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556V785a3.325,3.325,0,0,0,.482,2.034,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M1945.211,771.48a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.458,1.458,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.44,1.44,0,0,1,1945.211,771.48Zm1.1,17.773h-2.26V775.079h2.26Z" style="fill: #fff"/>
        <path d="M1962.6,789.253h-2.26V781.17q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V775.079h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.308,4.308,0,0,1,3.541,1.5,6.707,6.707,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2009.9,789.253h-2.26v-8.139a6.156,6.156,0,0,0-.724-3.405,2.736,2.736,0,0,0-2.432-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.261v-8.416q0-4.181-3.21-4.18a2.971,2.971,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.259V775.079h2.259v2.242h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.032,5.032,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2025.511,782.733h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.356,4.356,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.357,5.956,5.956,0,0,1-4.7-1.931,7.933,7.933,0,0,1-1.708-5.433,7.77,7.77,0,0,1,1.868-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.646,3.646,0,0,0-2.714,1.148,5.22,5.22,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2048.964,789.253h-2.26v-8.139a6.166,6.166,0,0,0-.723-3.405,2.738,2.738,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.094,5.094,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.181-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V775.079h2.26v2.242h.056a4.789,4.789,0,0,1,4.381-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2059.134,789.585a6.525,6.525,0,0,1-4.995-1.987,7.374,7.374,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.91,5.433A6.67,6.67,0,0,1,2059.134,789.585Zm.165-12.928a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.2,6.2,0,0,0,1.178-4.056,6.311,6.311,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2059.3,776.657Z" style="fill: #fff"/>
        <path d="M2077.129,777.377a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26V775.079h2.26V778h.055a4.947,4.947,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.218-.838,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M2090.813,775.079l-6.49,16.443q-1.737,4.4-4.878,4.4a5.156,5.156,0,0,1-1.475-.18V793.71a4.178,4.178,0,0,0,1.337.249,2.776,2.776,0,0,0,2.564-2.049l1.129-2.686-5.511-14.145H2080l3.817,10.907q.069.209.289,1.079h.083q.069-.332.275-1.052l4.01-10.934Z" style="fill: #fff"/>
        <path d="M2122.14,789.585a6.525,6.525,0,0,1-4.995-1.987,7.374,7.374,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.759,7.759,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.67,6.67,0,0,1,2122.14,789.585Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.208,6.208,0,0,0,1.178-4.056,6.317,6.317,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2122.3,776.657Z" style="fill: #fff"/>
        <path d="M2135.092,787.2h-.055v8.567h-2.26V775.079h2.26v2.492h.055a5.339,5.339,0,0,1,4.878-2.824,5.161,5.161,0,0,1,4.258,1.9,7.912,7.912,0,0,1,1.529,5.1,8.813,8.813,0,0,1-1.722,5.7,5.724,5.724,0,0,1-4.712,2.139A4.718,4.718,0,0,1,2135.092,787.2Zm-.055-5.716v1.978a4.229,4.229,0,0,0,1.136,2.984,4.045,4.045,0,0,0,6.105-.354,7.259,7.259,0,0,0,1.165-4.387,5.737,5.737,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2135.037,781.488Z" style="fill: #fff"/>
        <path d="M2155.913,789.114a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555V785a3.325,3.325,0,0,0,.482,2.034,1.922,1.922,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M2160.089,771.48a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.458,1.458,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.44,1.44,0,0,1,2160.089,771.48Zm1.1,17.773h-2.26V775.079h2.26Z" style="fill: #fff"/>
        <path d="M2185.8,789.253h-2.26v-8.139a6.166,6.166,0,0,0-.723-3.405,2.738,2.738,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.26v-8.416q0-4.181-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V775.079h2.26v2.242h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.657,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2191.232,771.48a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.46,1.46,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.441,1.441,0,0,1,2191.232,771.48Zm1.1,17.773h-2.259V775.079h2.259Z" style="fill: #fff"/>
        <path d="M2206.747,775.73l-8.35,11.584h8.267v1.939h-11.587v-.706l8.349-11.53h-7.564v-1.938h10.885Z" style="fill: #fff"/>
        <path d="M2219.769,789.253h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.34,2.547,4.63,4.63,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.47a5.5,5.5,0,0,0-2.37.783,2.258,2.258,0,0,0-.8,1.986,2.169,2.169,0,0,0,.737,1.7,2.838,2.838,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2230.573,789.114a4.352,4.352,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.556v1.938h-3.556V785a3.325,3.325,0,0,0,.482,2.034,1.922,1.922,0,0,0,1.6.609,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2234.748,771.48a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.456,1.456,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.438,1.438,0,0,1,2234.748,771.48Zm1.1,17.773h-2.26V775.079h2.26Z" style="fill: #fff"/>
        <path d="M2246.324,789.585a6.525,6.525,0,0,1-4.995-1.987,7.37,7.37,0,0,1-1.868-5.266,7.684,7.684,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,2246.324,789.585Zm.165-12.928a4.292,4.292,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.208,6.208,0,0,0,1.178-4.056,6.317,6.317,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2246.489,776.657Z" style="fill: #fff"/>
        <path d="M2268.673,789.253h-2.26V781.17q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.8,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V775.079h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2275,786.1l-2.2,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M2311.341,770.124a10.394,10.394,0,0,0-1.42-.18q-.825-.055-1.639-.056a3.116,3.116,0,0,0-1.633.374,2.484,2.484,0,0,0-.944,1.038,4.847,4.847,0,0,0-.441,1.585,17.129,17.129,0,0,0-.11,2.014v.18h7.5v14.174h-2.26V777.017h-5.236v12.236h-2.246V777.017H2300.5v-1.938h2.412v-.8a14.865,14.865,0,0,1,.076-1.5,7.2,7.2,0,0,1,.3-1.454,5.641,5.641,0,0,1,.606-1.314,3.843,3.843,0,0,1,1-1.066,4.829,4.829,0,0,1,1.495-.713,7.3,7.3,0,0,1,2.081-.263c.514,0,1.035.013,1.564.042s.967.064,1.316.11Z" style="fill: #fff"/>
        <path d="M2319.484,789.253h-2.26V768.269h2.26Z" style="fill: #fff"/>
        <path d="M2330.605,789.114a4.347,4.347,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.734v4.194h3.556v1.938h-3.556V785a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2344.963,782.733H2335a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.628,4.628,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.583-1.094,3.643,3.643,0,0,0-2.714,1.148,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2355.739,777.377a2.751,2.751,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.351,6.351,0,0,0-.972,3.736v7.226h-2.26V775.079h2.26V778h.056a4.938,4.938,0,0,1,1.474-2.332,3.349,3.349,0,0,1,2.218-.838,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M2357.337,788.74V786.3a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.736,1.736,0,0,0-.255-.962,2.552,2.552,0,0,0-.689-.7,5.355,5.355,0,0,0-1.02-.547q-.585-.241-1.26-.5a16.316,16.316,0,0,1-1.647-.753,5,5,0,0,1-1.185-.859,3.179,3.179,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.045,4.045,0,0,1,1.213-1.287,5.652,5.652,0,0,1,1.729-.783,7.7,7.7,0,0,1,2-.262,8.087,8.087,0,0,1,3.279.636v2.3a6.375,6.375,0,0,0-3.582-1.024,4.206,4.206,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.409,1.886,1.886,0,0,0-.565.629,1.659,1.659,0,0,0-.2.81,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.518,4.518,0,0,0,.937.526q.551.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.8,5.8,0,0,1,1.268.859,3.375,3.375,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.512,3.512,0,0,1-.461,1.827,3.978,3.978,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,2357.337,788.74Z" style="fill: #fff"/>
        <path d="M2372.234,786.1l-2.2,6.81h-1.613l1.613-6.81Z" style="fill: #fff"/>
        <path d="M1876.045,823.268h-2.315v-9.053h-10.225v9.053h-2.314V803.42h2.314v8.706h10.225V803.42h2.315Z" style="fill: #fff"/>
        <path d="M1881.226,823.268V803.42h5.456q10.446,0,10.445,9.674a9.77,9.77,0,0,1-2.9,7.385,10.731,10.731,0,0,1-7.765,2.789Zm2.314-17.744v15.64h2.95a8.345,8.345,0,0,0,6.048-2.09,7.85,7.85,0,0,0,2.165-5.924q0-7.626-8.076-7.626Z" style="fill: #fff"/>
        <path d="M1915.178,823.268h-2.756l-3.306-5.564a12.392,12.392,0,0,0-.882-1.322,5.061,5.061,0,0,0-.875-.893,3.018,3.018,0,0,0-.965-.5,3.988,3.988,0,0,0-1.165-.159h-1.9v8.443h-2.315V803.42h5.9a8.4,8.4,0,0,1,2.39.325,5.36,5.36,0,0,1,1.9.99,4.57,4.57,0,0,1,1.26,1.653,5.5,5.5,0,0,1,.455,2.32,5.617,5.617,0,0,1-.309,1.9,4.968,4.968,0,0,1-.883,1.544,5.331,5.331,0,0,1-1.378,1.155,6.943,6.943,0,0,1-1.811.74v.056a4.21,4.21,0,0,1,.861.5,4.708,4.708,0,0,1,.7.672,8.7,8.7,0,0,1,.655.879q.324.491.723,1.141Zm-11.85-17.744v7.2h3.141a4.759,4.759,0,0,0,1.606-.263,3.69,3.69,0,0,0,1.274-.754,3.42,3.42,0,0,0,.841-1.2,4.052,4.052,0,0,0,.3-1.6,3.115,3.115,0,0,0-1.028-2.484,4.389,4.389,0,0,0-2.969-.893Z" style="fill: #fff"/>
        <path d="M1920.207,823.268h-2.314V803.42h2.314Z" style="fill: #fff"/>
        <path d="M1954.928,823.268h-2.26V815.13a6.168,6.168,0,0,0-.723-3.406,2.74,2.74,0,0,0-2.433-1.051,3.007,3.007,0,0,0-2.459,1.329,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.26v-8.416q0-4.179-3.21-4.179a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V809.094h2.26v2.243h.055a4.791,4.791,0,0,1,4.382-2.575,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.658,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M1969.3,823.268h-2.26v-2.215h-.054a4.728,4.728,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.326a8.718,8.718,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.17,2.17,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.243,4.243,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1972.7,822.756V820.32a6.669,6.669,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.586-.242-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.685,5.685,0,0,1,1.729-.782,7.655,7.655,0,0,1,2.005-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.172,4.172,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.95,1.95,0,0,0,.2.927,2.033,2.033,0,0,0,.586.664,4.474,4.474,0,0,0,.937.527q.551.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.81,5.81,0,0,1,1.268.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.978,3.978,0,0,1-1.233,1.288,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,1972.7,822.756Z" style="fill: #fff"/>
        <path d="M1997.246,823.268h-3.169l-6.229-6.809h-.056v6.809h-2.259V802.285h2.259v13.3h.056l5.925-6.493h2.963l-6.545,6.838Z" style="fill: #fff"/>
        <path d="M1998.705,822.756V820.32a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.744,1.744,0,0,0-.254-.962,2.542,2.542,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.242-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.189,3.189,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.685,5.685,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.067,8.067,0,0,1,3.279.637v2.3a6.367,6.367,0,0,0-3.582-1.024,4.172,4.172,0,0,0-1.144.145,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.565.63,1.668,1.668,0,0,0-.2.81,1.95,1.95,0,0,0,.2.927,2.033,2.033,0,0,0,.586.664,4.474,4.474,0,0,0,.937.527q.551.234,1.254.512a17.332,17.332,0,0,1,1.681.74,5.81,5.81,0,0,1,1.268.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.978,3.978,0,0,1-1.233,1.288,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.983,7.983,0,0,1,1998.705,822.756Z" style="fill: #fff"/>
        <path d="M2013.6,820.112l-2.205,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M2033.991,823.13a4.364,4.364,0,0,1-2.109.443q-3.707,0-3.707-4.152v-8.388h-2.425v-1.939h2.425v-3.46l2.26-.733v4.193h3.556v1.939h-3.556v7.986a3.325,3.325,0,0,0,.482,2.034,1.92,1.92,0,0,0,1.6.61,2.371,2.371,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2048.349,816.749h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.916,6.916,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.954,5.954,0,0,1-4.7-1.93,7.935,7.935,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.868-5.392,5.975,5.975,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.314-1.924a4.636,4.636,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2062.074,809.094l-4.741,7.17,4.658,7h-2.632l-2.77-4.6c-.175-.287-.382-.646-.62-1.08h-.055q-.069.125-.648,1.08l-2.824,4.6h-2.605l4.809-6.948-4.6-7.226h2.632l2.728,4.845q.3.54.592,1.108h.056l3.527-5.953Z" style="fill: #fff"/>
        <path d="M2071.265,823.13a4.357,4.357,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.939h2.425v-3.46l2.259-.733v4.193h3.556v1.939h-3.556v7.986a3.324,3.324,0,0,0,.483,2.034,1.916,1.916,0,0,0,1.6.61,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2085.693,823.268h-2.26v-2.242h-.056a4.636,4.636,0,0,1-4.354,2.574q-5.043,0-5.043-6.035v-8.471h2.246v8.112q0,4.484,3.417,4.484a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M2097.612,811.392a2.758,2.758,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26V809.094h2.26v2.921h.056a4.943,4.943,0,0,1,1.474-2.332,3.354,3.354,0,0,1,2.218-.838,3.659,3.659,0,0,1,1.351.195Z" style="fill: #fff"/>
        <path d="M2101.223,805.5a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2101.223,805.5Zm1.1,17.772h-2.26V809.094h2.26Z" style="fill: #fff"/>
        <path d="M2118.613,823.268h-2.26v-8.083q0-4.513-3.279-4.512a3.55,3.55,0,0,0-2.805,1.28,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26V809.094h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.708,6.708,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2134.914,822.133q0,7.807-7.441,7.806a9.955,9.955,0,0,1-4.574-1v-2.27a9.37,9.37,0,0,0,4.547,1.329q5.208,0,5.209-5.565v-1.55h-.056a5.695,5.695,0,0,1-9.088.824,7.577,7.577,0,0,1-1.6-5.073,8.856,8.856,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056v-1.966h2.259Zm-2.259-5.273v-2.091a4.062,4.062,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.914,3.914,0,0,0-3.279,1.529,6.842,6.842,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.667,3.667,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.071,5.071,0,0,0,2132.655,816.86Z" style="fill: #fff"/>
        <path d="M2141.556,820.112l-2.2,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M2165.5,823.268h-2.259v-2.215h-.055a4.727,4.727,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.168,2.168,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.183,4.243,4.243,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2181.471,823.268h-2.26v-8.083q0-4.513-3.279-4.512a3.551,3.551,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26V809.094h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.31,4.31,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2186.887,805.5a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2186.887,805.5Zm1.1,17.772h-2.26V809.094h2.26Z" style="fill: #fff"/>
        <path d="M2212.6,823.268h-2.26V815.13a6.168,6.168,0,0,0-.723-3.406,2.74,2.74,0,0,0-2.433-1.051,3.007,3.007,0,0,0-2.459,1.329,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.26v-8.416q0-4.179-3.21-4.179a2.971,2.971,0,0,0-2.454,1.252,5.2,5.2,0,0,0-.964,3.26v8.083h-2.26V809.094h2.26v2.243h.055a4.791,4.791,0,0,1,4.382-2.575,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.658,0,4.658,5.772Z" style="fill: #fff"/>
        <path d="M2226.972,823.268h-2.26v-2.215h-.054a4.728,4.728,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.23-.6q0-3.612-2.907-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.326a8.717,8.717,0,0,1,4.794-1.329q4.976,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.259,2.259,0,0,0-.8,1.987,2.17,2.17,0,0,0,.737,1.7,2.845,2.845,0,0,0,1.964.657,3.62,3.62,0,0,0,2.777-1.183,4.243,4.243,0,0,0,1.095-3Z" style="fill: #fff"/>
        <path d="M2237.776,823.13a4.361,4.361,0,0,1-2.109.443q-3.706,0-3.707-4.152v-8.388h-2.424v-1.939h2.424v-3.46l2.26-.733v4.193h3.556v1.939h-3.556v7.986a3.317,3.317,0,0,0,.483,2.034,1.916,1.916,0,0,0,1.6.61,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M2241.952,805.5a1.432,1.432,0,0,1-1.035-.415,1.406,1.406,0,0,1-.426-1.052,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,2241.952,805.5Zm1.1,17.772h-2.26V809.094h2.26Z" style="fill: #fff"/>
        <path d="M2253.527,823.6a6.528,6.528,0,0,1-4.995-1.986,7.375,7.375,0,0,1-1.868-5.267,7.685,7.685,0,0,1,1.943-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.953,7.762,7.762,0,0,1,1.77,5.411,7.634,7.634,0,0,1-1.909,5.432A6.67,6.67,0,0,1,2253.527,823.6Zm.165-12.927a4.292,4.292,0,0,0-3.446,1.488,6.133,6.133,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.12,4.12,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2253.692,810.673Z" style="fill: #fff"/>
        <path d="M2275.876,823.268h-2.259v-8.083q0-4.513-3.28-4.512a3.548,3.548,0,0,0-2.8,1.28,4.754,4.754,0,0,0-1.11,3.232v8.083h-2.26V809.094h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2279.28,822.756V820.32a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.547q-.587-.242-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.981,4.981,0,0,1-1.186-.858,3.2,3.2,0,0,1-.716-1.087,3.851,3.851,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.765,4.077,4.077,0,0,1,1.213-1.287,5.685,5.685,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.8,2.8,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.657,1.657,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.01,2.01,0,0,0,.586.664,4.439,4.439,0,0,0,.936.527q.551.234,1.254.512a17.355,17.355,0,0,1,1.682.74,5.8,5.8,0,0,1,1.267.858,3.375,3.375,0,0,1,.806,1.1,3.566,3.566,0,0,1,.282,1.48,3.5,3.5,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.233,1.288,5.657,5.657,0,0,1-1.778.761,8.744,8.744,0,0,1-2.108.249A7.976,7.976,0,0,1,2279.28,822.756Z" style="fill: #fff"/>
        <path d="M2294.176,820.112l-2.2,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M2319.112,809.094l-5.622,14.174h-2.219l-5.346-14.174h2.48l3.583,10.3a9.351,9.351,0,0,1,.5,1.98h.054a9.416,9.416,0,0,1,.442-1.924l3.748-10.354Z" style="fill: #fff"/>
        <path d="M2322.7,805.5a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,2322.7,805.5Zm1.1,17.772h-2.259V809.094h2.259Z" style="fill: #fff"/>
        <path d="M2340.415,823.268h-2.259V820.86h-.056a5.68,5.68,0,0,1-9.1.837,7.836,7.836,0,0,1-1.59-5.184,8.514,8.514,0,0,1,1.763-5.632,5.8,5.8,0,0,1,4.7-2.119,4.52,4.52,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.091a4.067,4.067,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.123,5.123,0,0,0,2338.156,816.86Z" style="fill: #fff"/>
        <path d="M2356.33,816.749h-9.962a5.323,5.323,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.93,7.93,0,0,1-1.708-5.433,7.773,7.773,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.639,3.639,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2365.646,823.6a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.953,7.762,7.762,0,0,1,1.77,5.411,7.63,7.63,0,0,1-1.909,5.432A6.667,6.667,0,0,1,2365.646,823.6Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.128,6.128,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.347,4.347,0,0,0,3.432,1.453,4.12,4.12,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,2365.811,810.673Z" style="fill: #fff"/>
        <path d="M1863.2,855.235h-.056V863.8h-2.26V843.11h2.26V845.6h.056a5.337,5.337,0,0,1,4.877-2.824,5.159,5.159,0,0,1,4.258,1.9,7.906,7.906,0,0,1,1.53,5.1,8.813,8.813,0,0,1-1.723,5.695,5.724,5.724,0,0,1-4.712,2.139A4.716,4.716,0,0,1,1863.2,855.235Zm-.056-5.716V851.5a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.264,7.264,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,1863.147,849.519Z" style="fill: #fff"/>
        <path d="M1884.836,845.408a2.749,2.749,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.371,6.358,6.358,0,0,0-.971,3.736v7.226h-2.26V843.11h2.26v2.921h.055a4.947,4.947,0,0,1,1.475-2.332,3.347,3.347,0,0,1,2.218-.838,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M1893.188,857.616a6.528,6.528,0,0,1-5-1.986,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.952,7.766,7.766,0,0,1,1.77,5.411,7.631,7.631,0,0,1-1.909,5.433A6.67,6.67,0,0,1,1893.188,857.616Zm.165-12.928a4.289,4.289,0,0,0-3.445,1.488,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.973,4.35,4.35,0,0,0,3.432,1.453,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.314,6.314,0,0,0-1.178-4.1A4.106,4.106,0,0,0,1893.353,844.688Z" style="fill: #fff"/>
        <path d="M1913.443,856.633a7.319,7.319,0,0,1-3.859.983,6.373,6.373,0,0,1-4.871-1.973,7.165,7.165,0,0,1-1.852-5.114,7.878,7.878,0,0,1,2-5.626,6.969,6.969,0,0,1,5.332-2.125,7.388,7.388,0,0,1,3.28.692V845.8a5.728,5.728,0,0,0-3.362-1.108,4.537,4.537,0,0,0-3.549,1.558,5.925,5.925,0,0,0-1.385,4.09,5.641,5.641,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M1928.2,850.764h-9.963a5.327,5.327,0,0,0,1.267,3.655,4.362,4.362,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1930.763,856.771v-2.435a6.674,6.674,0,0,0,4.066,1.37q2.976,0,2.976-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.261-.5a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.4,3.4,0,0,1,.455-1.765,4.064,4.064,0,0,1,1.212-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.16,4.16,0,0,0-1.144.146,2.776,2.776,0,0,0-.875.408,1.888,1.888,0,0,0-.565.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.492,4.492,0,0,0,.937.526q.551.236,1.253.512a17.6,17.6,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.805,1.1,3.555,3.555,0,0,1,.283,1.481,3.512,3.512,0,0,1-.461,1.827,3.968,3.968,0,0,1-1.234,1.287,5.619,5.619,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,1930.763,856.771Z" style="fill: #fff"/>
        <path d="M1942.738,856.771v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.559,2.559,0,0,0-.69-.7,5.375,5.375,0,0,0-1.019-.546q-.587-.243-1.261-.5a15.967,15.967,0,0,1-1.646-.754,4.956,4.956,0,0,1-1.186-.859,3.184,3.184,0,0,1-.716-1.087,3.845,3.845,0,0,1-.241-1.425,3.4,3.4,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.638,5.638,0,0,1,1.729-.782,7.655,7.655,0,0,1,2-.263,8.075,8.075,0,0,1,3.28.637v2.3a6.37,6.37,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.776,2.776,0,0,0-.875.408,1.884,1.884,0,0,0-.564.63,1.654,1.654,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.01,2.01,0,0,0,.586.664,4.483,4.483,0,0,0,.936.526q.551.236,1.254.512a17.6,17.6,0,0,1,1.682.74,5.77,5.77,0,0,1,1.267.859,3.36,3.36,0,0,1,.806,1.1,3.571,3.571,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.965,3.965,0,0,1-1.233,1.287,5.635,5.635,0,0,1-1.778.762,8.744,8.744,0,0,1-2.108.249A7.964,7.964,0,0,1,1942.738,856.771Z" style="fill: #fff"/>
        <path d="M1956.725,839.511a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,1956.725,839.511Zm1.1,17.773h-2.26V843.11h2.26Z" style="fill: #fff"/>
        <path d="M1974.115,857.284h-2.26V849.2q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V843.11h2.26v2.354h.055a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M1990.416,856.149q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.271a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564V854.9h-.056a5.694,5.694,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.768,5.768,0,0,1,4.734-2.132,4.6,4.6,0,0,1,4.23,2.3h.056V843.11h2.259Zm-2.259-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.279,1.529,6.848,6.848,0,0,0-1.186,4.285,5.876,5.876,0,0,0,1.137,3.785,3.666,3.666,0,0,0,3.011,1.419,3.924,3.924,0,0,0,3.093-1.357A5.067,5.067,0,0,0,1988.157,850.876Z" style="fill: #fff"/>
        <path d="M1997.058,854.128l-2.2,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M2032.373,857.284h-2.259v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.172,2.172,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.964.657,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2048.344,857.284h-2.26V849.2q0-4.514-3.279-4.513a3.554,3.554,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.109,3.233v8.083h-2.26V843.11h2.26v2.354h.056a5.088,5.088,0,0,1,4.63-2.686,4.309,4.309,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M2064.646,857.284h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056V836.3h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.019,6.019,0,0,0,1.136,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.12,5.12,0,0,0,2062.386,850.876Z" style="fill: #fff"/>
        <path d="M2091.542,839.511a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,2091.542,839.511Zm1.1,17.773h-2.26V843.11h2.26Z" style="fill: #fff"/>
        <path d="M2117.255,857.284H2115v-8.139a6.165,6.165,0,0,0-.724-3.4,2.741,2.741,0,0,0-2.433-1.052,3.01,3.01,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261v-8.416q0-4.179-3.21-4.18a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V843.11h2.26v2.242h.056a4.789,4.789,0,0,1,4.381-2.574,4.077,4.077,0,0,1,4,2.935,5.034,5.034,0,0,1,4.685-2.935q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M2131.627,857.284h-2.259v-2.215h-.055a4.73,4.73,0,0,1-4.341,2.547,4.631,4.631,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.795-1.329q4.974,0,4.974,5.287Zm-2.259-7.17-3.4.471a5.489,5.489,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.169,2.169,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.964.657,3.619,3.619,0,0,0,2.776-1.184,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2147.929,856.149q0,7.806-7.441,7.806a9.959,9.959,0,0,1-4.575-1v-2.271a9.362,9.362,0,0,0,4.547,1.329q5.209,0,5.209-5.564V854.9h-.055a5.694,5.694,0,0,1-9.088.823,7.57,7.57,0,0,1-1.605-5.072,8.851,8.851,0,0,1,1.729-5.744,5.766,5.766,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.055V843.11h2.26Zm-2.26-5.273v-2.091a4.07,4.07,0,0,0-1.136-2.893,3.741,3.741,0,0,0-2.832-1.2,3.919,3.919,0,0,0-3.28,1.529,6.847,6.847,0,0,0-1.185,4.285,5.882,5.882,0,0,0,1.136,3.785,3.667,3.667,0,0,0,3.011,1.419,3.925,3.925,0,0,0,3.094-1.357A5.066,5.066,0,0,0,2145.669,850.876Z" style="fill: #fff"/>
        <path d="M2163.844,850.764h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.36,4.36,0,0,0,3.335,1.287,6.92,6.92,0,0,0,4.382-1.578v2.131a8.16,8.16,0,0,1-4.919,1.357,5.956,5.956,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.774,7.774,0,0,1,1.868-5.392,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.634,4.634,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.643,3.643,0,0,0-2.714,1.149,5.214,5.214,0,0,0-1.377,3Z" style="fill: #fff"/>
        <path d="M2174.482,850.28h-7.524V848.5h7.524Z" style="fill: #fff"/>
        <path d="M2180.862,855.235h-.056v2.049h-2.26V836.3h2.26v9.3h.056a5.338,5.338,0,0,1,4.878-2.824,5.166,5.166,0,0,1,4.251,1.9,7.885,7.885,0,0,1,1.536,5.1,8.808,8.808,0,0,1-1.723,5.695,5.723,5.723,0,0,1-4.712,2.139A4.636,4.636,0,0,1,2180.862,855.235Zm-.056-5.716V851.5a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.257,7.257,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2180.806,849.519Z" style="fill: #fff"/>
        <path d="M2205.238,857.284h-2.26v-2.215h-.055a4.728,4.728,0,0,1-4.341,2.547,4.629,4.629,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.928,6.928,0,0,0-4.6,1.744v-2.325a8.714,8.714,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.171,2.171,0,0,0,.737,1.7,2.841,2.841,0,0,0,1.964.657,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M2208.641,856.771v-2.435a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.733,1.733,0,0,0-.255-.962,2.555,2.555,0,0,0-.689-.7,5.354,5.354,0,0,0-1.02-.546q-.585-.243-1.261-.5a16.065,16.065,0,0,1-1.646-.754,4.976,4.976,0,0,1-1.186-.859,3.182,3.182,0,0,1-.715-1.087,3.824,3.824,0,0,1-.242-1.425,3.413,3.413,0,0,1,.454-1.765,4.067,4.067,0,0,1,1.213-1.287,5.633,5.633,0,0,1,1.73-.782,7.644,7.644,0,0,1,2.005-.263,8.073,8.073,0,0,1,3.279.637v2.3a6.368,6.368,0,0,0-3.582-1.025,4.173,4.173,0,0,0-1.145.146,2.8,2.8,0,0,0-.875.408,1.9,1.9,0,0,0-.564.63,1.653,1.653,0,0,0-.2.809,1.942,1.942,0,0,0,.2.928,2.021,2.021,0,0,0,.586.664,4.509,4.509,0,0,0,.936.526q.552.236,1.254.512a17.6,17.6,0,0,1,1.682.74,5.8,5.8,0,0,1,1.268.859,3.357,3.357,0,0,1,.805,1.1,3.555,3.555,0,0,1,.282,1.481,3.512,3.512,0,0,1-.46,1.827,3.968,3.968,0,0,1-1.234,1.287,5.629,5.629,0,0,1-1.777.762,8.752,8.752,0,0,1-2.109.249A7.964,7.964,0,0,1,2208.641,856.771Z" style="fill: #fff"/>
        <path d="M2232.811,850.764h-9.963a5.323,5.323,0,0,0,1.268,3.655,4.36,4.36,0,0,0,3.335,1.287,6.919,6.919,0,0,0,4.381-1.578v2.131a8.155,8.155,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.773,7.773,0,0,1,1.867-5.392,5.974,5.974,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.52,7.52,0,0,1,1.516,5Zm-2.315-1.924a4.628,4.628,0,0,0-.944-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M2248.272,857.284h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056V836.3h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.185,4.208,6.019,6.019,0,0,0,1.136,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.12,5.12,0,0,0,2246.012,850.876Z" style="fill: #fff"/>
        <path d="M2276.327,855.235h-.056v2.049h-2.26V836.3h2.26v9.3h.056a5.337,5.337,0,0,1,4.877-2.824,5.163,5.163,0,0,1,4.251,1.9,7.88,7.88,0,0,1,1.537,5.1,8.813,8.813,0,0,1-1.723,5.695,5.723,5.723,0,0,1-4.712,2.139A4.636,4.636,0,0,1,2276.327,855.235Zm-.056-5.716V851.5a4.225,4.225,0,0,0,1.137,2.983,4.043,4.043,0,0,0,6.1-.353,7.264,7.264,0,0,0,1.165-4.388,5.731,5.731,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,2276.271,849.519Z" style="fill: #fff"/>
        <path d="M2302.012,857.284h-2.26v-2.242h-.055a4.64,4.64,0,0,1-4.355,2.574q-5.043,0-5.043-6.035V843.11h2.246v8.111q0,4.485,3.417,4.485a3.45,3.45,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2V843.11h2.26Z" style="fill: #fff"/>
        <path d="M2307.731,839.511a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2307.731,839.511Zm1.1,17.773h-2.259V843.11h2.259Z" style="fill: #fff"/>
        <path d="M2315.667,857.284h-2.259V836.3h2.259Z" style="fill: #fff"/>
        <path d="M2332.287,857.284h-2.26v-2.408h-.056a5.679,5.679,0,0,1-9.1.837,7.833,7.833,0,0,1-1.591-5.184,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.23,2.3h.056V836.3h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.688,6.688,0,0,0-1.186,4.208,6.019,6.019,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.853,3.853,0,0,0,3.065-1.37A5.125,5.125,0,0,0,2330.027,850.876Z" style="fill: #fff"/>
        <path d="M2338.019,839.511a1.425,1.425,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.051,1.452,1.452,0,0,1,1.461-1.482,1.458,1.458,0,0,1,1.054.423,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,2338.019,839.511Zm1.1,17.773h-2.26V843.11h2.26Z" style="fill: #fff"/>
        <path d="M2355.409,857.284h-2.26V849.2q0-4.514-3.279-4.513a3.553,3.553,0,0,0-2.8,1.28,4.764,4.764,0,0,0-1.11,3.233v8.083H2343.7V843.11h2.259v2.354h.056a5.09,5.09,0,0,1,4.63-2.686,4.308,4.308,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M2371.71,856.149q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.271a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564V854.9h-.056a5.694,5.694,0,0,1-9.088.823,7.574,7.574,0,0,1-1.6-5.072,8.856,8.856,0,0,1,1.728-5.744,5.767,5.767,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.056V843.11h2.259Zm-2.259-5.273v-2.091a4.066,4.066,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.279,1.529,6.848,6.848,0,0,0-1.186,4.285,5.876,5.876,0,0,0,1.137,3.785,3.665,3.665,0,0,0,3.01,1.419,3.925,3.925,0,0,0,3.094-1.357A5.067,5.067,0,0,0,2369.451,850.876Z" style="fill: #fff"/>
        <path d="M1863.2,889.251h-.056v8.567h-2.26V877.126h2.26v2.492h.056a5.337,5.337,0,0,1,4.877-2.824,5.156,5.156,0,0,1,4.258,1.9,7.9,7.9,0,0,1,1.53,5.1,8.813,8.813,0,0,1-1.723,5.7,5.724,5.724,0,0,1-4.712,2.139A4.716,4.716,0,0,1,1863.2,889.251Zm-.056-5.716v1.978a4.229,4.229,0,0,0,1.137,2.984,4.044,4.044,0,0,0,6.1-.354,7.261,7.261,0,0,0,1.165-4.387,5.729,5.729,0,0,0-1.089-3.709,3.6,3.6,0,0,0-2.949-1.343,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,1863.147,883.535Z" style="fill: #fff"/>
        <path d="M1879.738,891.3h-2.26V870.316h2.26Z" style="fill: #fff"/>
        <path d="M1894.413,891.3h-2.259v-2.214h-.055a4.729,4.729,0,0,1-4.341,2.547,4.632,4.632,0,0,1-3.3-1.122,3.893,3.893,0,0,1-1.191-2.975q0-3.973,4.657-4.623l4.231-.6q0-3.612-2.908-3.612a6.925,6.925,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.974,5.287Zm-2.259-7.169-3.4.47a5.507,5.507,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.17,2.17,0,0,0,.738,1.695,2.837,2.837,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M1908.289,890.649a7.328,7.328,0,0,1-3.858.983,6.374,6.374,0,0,1-4.871-1.973,7.169,7.169,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.972,6.972,0,0,1,5.332-2.125,7.393,7.393,0,0,1,3.281.692v2.325a5.734,5.734,0,0,0-3.363-1.107,4.534,4.534,0,0,0-3.548,1.557,5.927,5.927,0,0,0-1.385,4.09,5.639,5.639,0,0,0,1.3,3.931,4.475,4.475,0,0,0,3.493,1.439,5.646,5.646,0,0,0,3.471-1.231Z" style="fill: #fff"/>
        <path d="M1923.047,884.78h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.53,7.53,0,0,1,1.515,5Zm-2.314-1.924a4.628,4.628,0,0,0-.945-3.058,3.206,3.206,0,0,0-2.584-1.094,3.642,3.642,0,0,0-2.713,1.148,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1946.5,891.3h-2.259v-8.138a6.163,6.163,0,0,0-.724-3.4,2.737,2.737,0,0,0-2.433-1.052,3.009,3.009,0,0,0-2.459,1.329,5.1,5.1,0,0,0-1.012,3.183V891.3h-2.261v-8.416q0-4.179-3.21-4.179a2.97,2.97,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.259V891.3h-2.26V877.126h2.26v2.242h.056a4.79,4.79,0,0,1,4.382-2.574,4.077,4.077,0,0,1,4,2.934,5.031,5.031,0,0,1,4.684-2.934q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M1962.113,884.78h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.358,4.358,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.357,5.954,5.954,0,0,1-4.7-1.931,7.928,7.928,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.058,3.208,3.208,0,0,0-2.584-1.094,3.643,3.643,0,0,0-2.714,1.148,5.227,5.227,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M1977.243,891.3h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.763,4.763,0,0,0-1.11,3.232V891.3h-2.259V877.126h2.259v2.353h.056a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.711,6.711,0,0,1,1.227,4.338Z" style="fill: #fff"/>
        <path d="M1988.046,891.161a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M1991.85,891.6a1.459,1.459,0,0,1-1.082-.457,1.506,1.506,0,0,1-.448-1.094,1.53,1.53,0,0,1,.448-1.1,1.449,1.449,0,0,1,1.082-.463,1.485,1.485,0,0,1,1.1.463,1.52,1.52,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.557,1.551Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="title7_path">
      <g>
        <polyline points="616.418 806.49 616.418 857.362 645.813 857.362" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,862.691a5.329,5.329,0,1,0-5.328-5.329A5.33,5.33,0,0,0,645.546,862.691Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title7_red" transform="translate(666.342 871.032)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.030056216729779088em">V<tspan x="22.356" y="0" style="letter-spacing: 0.029991384510776112em">-ray</tspan></text>
    <g id="title6_path">
      <g>
        <polyline points="616.418 755.618 616.418 806.49 645.813 806.49" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,811.819a5.329,5.329,0,1,0-5.328-5.329A5.33,5.33,0,0,0,645.546,811.819Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title6_red" transform="translate(666.342 818.675)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Lumion</text>
    <g id="_g_3" data-name="&lt;g&gt;">
      <rect id="cgi_headerbox" x="573.584" y="671.082" width="162.555" height="84.536" rx="13.785" style="fill: #63769e"/>
      <text id="cgi_header" transform="translate(611.594 730.82)" style="font-size: 52.6827392578125px;fill: #fff;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.01999716894347026em">CGI</text>
    </g>
  </g>
  <g id="modelling">
    <g id="modelling_3">
      <rect id="clipmask_5-2" data-name="clipmask_5" x="585.671" y="372.191" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-14)">
        <g style="mask: url(#mask)">
          <image id="img_5" width="3508" height="2480" transform="translate(400.818 -94.024) scale(0.356)" xlink:href="hard-skills/img_5.png"/>
        </g>
      </g>
    </g>
    <g id="modelling_2">
      <rect id="clipmask_4-2" data-name="clipmask_4" x="585.671" y="372.191" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-14)">
        <image id="img_4" width="3508" height="2480" transform="translate(559.997 86.172) scale(0.306)" xlink:href="hard-skills/img_4.png"/>
      </g>
    </g>
    <g id="modelling_1">
      <rect id="clipmask_3-2" data-name="clipmask_3" x="585.671" y="372.191" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-14)">
        <image id="img_3" width="3508" height="2480" transform="translate(360.332 126.429) scale(0.488)" xlink:href="hard-skills/img_3.png"/>
      </g>
    </g>
    <g id="modelling_default">
      <rect id="clipmask_d2-2" data-name="clipmask_d2" x="585.671" y="372.191" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-14)">
        <image id="img_d2" width="3508" height="2480" transform="translate(447.082 4.742) scale(0.303)" xlink:href="hard-skills/img_d2.png"/>
      </g>
    </g>
    <g id="modelling_3_text">
      <g>
        <path d="M27.675,437.292v-2.741a5.338,5.338,0,0,0,1.123.748,9.177,9.177,0,0,0,1.378.56,10.987,10.987,0,0,0,1.454.353,8.09,8.09,0,0,0,1.351.125,5.271,5.271,0,0,0,3.189-.8,2.993,2.993,0,0,0,.7-3.689,3.941,3.941,0,0,0-.971-1.086,9.6,9.6,0,0,0-1.468-.942q-.846-.449-1.825-.948-1.035-.525-1.93-1.065a8.363,8.363,0,0,1-1.557-1.191,4.943,4.943,0,0,1-1.04-1.474,5.057,5.057,0,0,1,.213-4.291,5.111,5.111,0,0,1,1.558-1.654,7.049,7.049,0,0,1,2.2-.968,9.989,9.989,0,0,1,2.515-.319,9.614,9.614,0,0,1,4.259.706v2.616a7.7,7.7,0,0,0-4.493-1.218,7.374,7.374,0,0,0-1.516.159,4.265,4.265,0,0,0-1.35.519,2.994,2.994,0,0,0-.965.928,2.469,2.469,0,0,0-.372,1.383,2.847,2.847,0,0,0,.283,1.315,3.207,3.207,0,0,0,.834,1.011,8.314,8.314,0,0,0,1.343.886q.792.429,1.825.941,1.062.526,2.012,1.107a9.223,9.223,0,0,1,1.668,1.287,5.732,5.732,0,0,1,1.137,1.564,4.421,4.421,0,0,1,.42,1.966,5.02,5.02,0,0,1-.571,2.485,4.715,4.715,0,0,1-1.544,1.653,6.71,6.71,0,0,1-2.24.921,12.211,12.211,0,0,1-2.673.283,10.768,10.768,0,0,1-1.157-.076q-.69-.077-1.406-.221a11.357,11.357,0,0,1-1.356-.36A4.239,4.239,0,0,1,27.675,437.292Z" style="fill: #fff"/>
        <path d="M55,438.094H51.831L45.6,431.285h-.056v6.809h-2.26V417.111h2.26v13.3H45.6l5.925-6.492h2.963l-6.545,6.837Z" style="fill: #fff"/>
        <path d="M58.473,420.322a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,58.473,420.322Zm1.1,17.772h-2.26V423.921h2.26Z" style="fill: #fff"/>
        <path d="M66.41,438.094H64.15V417.111h2.26Z" style="fill: #fff"/>
        <path d="M73.245,438.094h-2.26V417.111h2.26Z" style="fill: #fff"/>
        <path d="M89.161,431.575H79.2a5.323,5.323,0,0,0,1.267,3.654,4.359,4.359,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.516,5Zm-2.315-1.923a4.639,4.639,0,0,0-.944-3.06,3.21,3.21,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M104.621,438.094h-2.259v-2.408h-.056a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.59-5.184,8.515,8.515,0,0,1,1.763-5.633,5.808,5.808,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.259Zm-2.259-6.408V429.6a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.186,4.207,6.021,6.021,0,0,0,1.137,3.869,3.709,3.709,0,0,0,3.053,1.419,3.851,3.851,0,0,0,3.065-1.371A5.121,5.121,0,0,0,102.362,431.686Z" style="fill: #fff"/>
        <path d="M120.833,420.322a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.443,1.443,0,0,1,120.833,420.322Zm1.1,17.772h-2.26V423.921h2.26Z" style="fill: #fff"/>
        <path d="M138.223,438.094h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V423.921h2.26v2.353h.056a5.087,5.087,0,0,1,4.629-2.685,4.31,4.31,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M159.934,419.105a2.987,2.987,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308v12.235h-2.246V425.859h-2.411v-1.938h2.411v-2.3A4.793,4.793,0,0,1,155.1,418.1a4.317,4.317,0,0,1,3.2-1.294,4.41,4.41,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M173.2,438.094h-2.259v-2.242h-.056a4.635,4.635,0,0,1-4.354,2.574q-5.044,0-5.043-6.034v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.452,3.452,0,0,0,2.721-1.225,4.7,4.7,0,0,0,1.069-3.2v-8.167H173.2Z" style="fill: #fff"/>
        <path d="M180.025,438.094h-2.26V417.111h2.26Z" style="fill: #fff"/>
        <path d="M186.86,438.094H184.6V417.111h2.26Z" style="fill: #fff"/>
        <path d="M221.951,438.094h-2.26v-8.138a6.154,6.154,0,0,0-.724-3.405,2.739,2.739,0,0,0-2.432-1.052,3.006,3.006,0,0,0-2.459,1.329,5.094,5.094,0,0,0-1.013,3.183v8.083H210.8v-8.415q0-4.18-3.21-4.18a2.971,2.971,0,0,0-2.453,1.253,5.2,5.2,0,0,0-.965,3.259v8.083h-2.26V423.921h2.26v2.242h.056a4.79,4.79,0,0,1,4.382-2.574,4.08,4.08,0,0,1,4,2.934,5.032,5.032,0,0,1,4.684-2.934q4.659,0,4.659,5.772Z" style="fill: #fff"/>
        <path d="M232.121,438.426a6.531,6.531,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267A7.685,7.685,0,0,1,227.2,425.6a6.967,6.967,0,0,1,5.25-2.007,6.311,6.311,0,0,1,4.926,1.952,7.76,7.76,0,0,1,1.771,5.411,7.637,7.637,0,0,1-1.909,5.433A6.672,6.672,0,0,1,232.121,438.426Zm.165-12.927a4.291,4.291,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.454,4.124,4.124,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.177-4.056,6.312,6.312,0,0,0-1.177-4.1A4.1,4.1,0,0,0,232.286,425.5Z" style="fill: #fff"/>
        <path d="M254.8,438.094h-2.26v-2.408h-.055a5.681,5.681,0,0,1-9.1.838,7.838,7.838,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.806,5.806,0,0,1,4.7-2.118,4.52,4.52,0,0,1,4.231,2.3h.055v-8.775h2.26Zm-2.26-6.408V429.6a4.067,4.067,0,0,0-1.129-2.906,3.783,3.783,0,0,0-2.867-1.191,3.9,3.9,0,0,0-3.252,1.523,6.685,6.685,0,0,0-1.185,4.207,6.021,6.021,0,0,0,1.137,3.869,3.707,3.707,0,0,0,3.052,1.419,3.852,3.852,0,0,0,3.066-1.371A5.12,5.12,0,0,0,252.541,431.686Z" style="fill: #fff"/>
        <path d="M270.716,431.575h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.357,4.357,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.131a8.159,8.159,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.53,7.53,0,0,1,1.515,5Zm-2.314-1.923a4.634,4.634,0,0,0-.945-3.06,3.209,3.209,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.713,1.149,5.208,5.208,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M276.393,438.094h-2.26V417.111h2.26Z" style="fill: #fff"/>
        <path d="M297.346,438.426a6.527,6.527,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.759,7.759,0,0,1,1.77,5.411,7.632,7.632,0,0,1-1.909,5.433A6.669,6.669,0,0,1,297.346,438.426Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.281,3.972,4.349,4.349,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.208,6.208,0,0,0,1.178-4.056,6.312,6.312,0,0,0-1.178-4.1A4.1,4.1,0,0,0,297.511,425.5Z" style="fill: #fff"/>
        <path d="M310.3,436.046h-.055v8.567h-2.26V423.921h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.157,5.157,0,0,1,4.258,1.9,7.905,7.905,0,0,1,1.529,5.1,8.814,8.814,0,0,1-1.722,5.7,5.723,5.723,0,0,1-4.712,2.138A4.717,4.717,0,0,1,310.3,436.046Zm-.055-5.716v1.979a4.224,4.224,0,0,0,1.136,2.983,4.044,4.044,0,0,0,6.1-.353,7.266,7.266,0,0,0,1.165-4.388,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.073,5.073,0,0,0,310.243,430.33Z" style="fill: #fff"/>
        <path d="M335.914,431.575h-9.962a5.323,5.323,0,0,0,1.267,3.654,4.359,4.359,0,0,0,3.335,1.288,6.92,6.92,0,0,0,4.382-1.578v2.131a8.157,8.157,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93,7.926,7.926,0,0,1-1.708-5.433,7.771,7.771,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.923a4.639,4.639,0,0,0-.944-3.06,3.21,3.21,0,0,0-2.584-1.093,3.64,3.64,0,0,0-2.714,1.149,5.221,5.221,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M346.69,426.219a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.357,6.357,0,0,0-.972,3.737v7.225h-2.26V423.921h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.355,3.355,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M359.244,438.094h-2.26V435.88h-.055a4.728,4.728,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.975q0-3.974,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.37.782,2.261,2.261,0,0,0-.8,1.987,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.235,4.235,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M370.047,437.956a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.326,3.326,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M374.223,420.322a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,374.223,420.322Zm1.1,17.772h-2.26V423.921h2.26Z" style="fill: #fff"/>
        <path d="M385.8,438.426a6.527,6.527,0,0,1-5-1.985,7.378,7.378,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.313,6.313,0,0,1,4.927,1.952,7.76,7.76,0,0,1,1.771,5.411,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,385.8,438.426Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.306,6.306,0,0,0-1.178-4.1A4.1,4.1,0,0,0,385.963,425.5Z" style="fill: #fff"/>
        <path d="M408.148,438.094h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V423.921h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M414.473,434.939l-2.205,6.809h-1.612l1.612-6.809Z" style="fill: #fff"/>
        <path d="M430.162,420.322a1.429,1.429,0,0,1-1.034-.415,1.4,1.4,0,0,1-.426-1.052,1.45,1.45,0,0,1,1.46-1.481,1.452,1.452,0,0,1,1.054.423,1.482,1.482,0,0,1,0,2.1A1.442,1.442,0,0,1,430.162,420.322Zm1.1,17.772H429V423.921h2.26Z" style="fill: #fff"/>
        <path d="M447.552,438.094h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.8,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V423.921h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.311,4.311,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.226,4.34Z" style="fill: #fff"/>
        <path d="M461.428,437.444a7.318,7.318,0,0,1-3.858.982,6.373,6.373,0,0,1-4.871-1.972,7.163,7.163,0,0,1-1.853-5.114,7.878,7.878,0,0,1,2-5.626,6.97,6.97,0,0,1,5.332-2.125,7.4,7.4,0,0,1,3.28.692v2.325a5.731,5.731,0,0,0-3.362-1.107,4.538,4.538,0,0,0-3.549,1.557,5.927,5.927,0,0,0-1.384,4.09,5.643,5.643,0,0,0,1.3,3.931,4.477,4.477,0,0,0,3.493,1.44,5.648,5.648,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M467.105,438.094h-2.26V417.111h2.26Z" style="fill: #fff"/>
        <path d="M483.09,438.094h-2.26v-2.242h-.055a4.637,4.637,0,0,1-4.355,2.574q-5.043,0-5.043-6.034v-8.471h2.246v8.111q0,4.485,3.417,4.485a3.453,3.453,0,0,0,2.722-1.225,4.7,4.7,0,0,0,1.068-3.2v-8.167h2.26Z" style="fill: #fff"/>
        <path d="M499.7,438.094h-2.26v-2.408h-.056a5.68,5.68,0,0,1-9.1.838,7.833,7.833,0,0,1-1.591-5.184,8.51,8.51,0,0,1,1.764-5.633,5.8,5.8,0,0,1,4.7-2.118,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775h2.26Zm-2.26-6.408V429.6a4.064,4.064,0,0,0-1.13-2.906,3.782,3.782,0,0,0-2.866-1.191,3.9,3.9,0,0,0-3.252,1.523A6.685,6.685,0,0,0,489,431.229a6.021,6.021,0,0,0,1.137,3.869,3.709,3.709,0,0,0,3.053,1.419,3.85,3.85,0,0,0,3.065-1.371A5.121,5.121,0,0,0,497.435,431.686Z" style="fill: #fff"/>
        <path d="M505.427,420.322a1.429,1.429,0,0,1-1.034-.415,1.405,1.405,0,0,1-.427-1.052,1.452,1.452,0,0,1,1.461-1.481,1.454,1.454,0,0,1,1.054.423,1.485,1.485,0,0,1,0,2.1A1.443,1.443,0,0,1,505.427,420.322Zm1.1,17.772h-2.26V423.921h2.26Z" style="fill: #fff"/>
        <path d="M522.817,438.094h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083H511.1V423.921h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.31,4.31,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M539.119,436.96q0,7.806-7.442,7.806a9.942,9.942,0,0,1-4.574-1V441.5a9.359,9.359,0,0,0,4.547,1.329q5.208,0,5.209-5.564v-1.55H536.8a5.7,5.7,0,0,1-9.088.823,7.573,7.573,0,0,1-1.6-5.072,8.859,8.859,0,0,1,1.728-5.745,5.768,5.768,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.26Zm-2.26-5.274V429.6a4.065,4.065,0,0,0-1.137-2.893,3.739,3.739,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.879,5.879,0,0,0,1.137,3.786,3.667,3.667,0,0,0,3.011,1.419,3.924,3.924,0,0,0,3.093-1.357A5.067,5.067,0,0,0,536.859,431.686Z" style="fill: #fff"/>
        <path d="M38.4,472.11h-2.26V469.9h-.055a4.728,4.728,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.595q0-3.612-2.907-3.612a6.934,6.934,0,0,0-4.6,1.743v-2.325a8.722,8.722,0,0,1,4.795-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.258,2.258,0,0,0-.8,1.986,2.17,2.17,0,0,0,.737,1.7,2.843,2.843,0,0,0,1.964.657,3.617,3.617,0,0,0,2.776-1.183,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M54.7,472.11h-2.26V469.7h-.056a5.679,5.679,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.806,5.806,0,0,1,4.7-2.117,4.519,4.519,0,0,1,4.23,2.3h.056v-8.775H54.7Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522A6.688,6.688,0,0,0,44,465.245a6.016,6.016,0,0,0,1.137,3.868,3.709,3.709,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,52.438,465.7Z" style="fill: #fff"/>
        <path d="M71.316,472.11h-2.26V469.7H69a5.679,5.679,0,0,1-9.1.837,7.828,7.828,0,0,1-1.591-5.183,8.515,8.515,0,0,1,1.764-5.634,5.806,5.806,0,0,1,4.7-2.117A4.518,4.518,0,0,1,69,459.9h.056v-8.775h2.26Zm-2.26-6.408v-2.091a4.065,4.065,0,0,0-1.13-2.906,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.688,6.688,0,0,0-1.186,4.208,6.016,6.016,0,0,0,1.137,3.868,3.71,3.71,0,0,0,3.053,1.419,3.852,3.852,0,0,0,3.065-1.37A5.123,5.123,0,0,0,69.056,465.7Z" style="fill: #fff"/>
        <path d="M83.111,465.107H75.587v-1.786h7.524Z" style="fill: #fff"/>
        <path d="M93.074,472.442a6.528,6.528,0,0,1-5-1.986,7.37,7.37,0,0,1-1.868-5.266,7.688,7.688,0,0,1,1.943-5.579,6.973,6.973,0,0,1,5.25-2.006,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.637,7.637,0,0,1-1.909,5.433A6.672,6.672,0,0,1,93.074,472.442Zm.165-12.927A4.292,4.292,0,0,0,89.793,461a6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,93.239,459.515Z" style="fill: #fff"/>
        <path d="M115.423,472.11h-2.26v-8.083q0-4.512-3.279-4.512a3.554,3.554,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V457.937h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.716,6.716,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M118.827,471.6v-2.436a6.669,6.669,0,0,0,4.065,1.37q2.976,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.542,2.542,0,0,0-.69-.7,5.32,5.32,0,0,0-1.019-.547q-.587-.241-1.261-.5a16.089,16.089,0,0,1-1.647-.754,5,5,0,0,1-1.185-.858,3.2,3.2,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.4,3.4,0,0,1,.454-1.764,4.046,4.046,0,0,1,1.213-1.287,5.639,5.639,0,0,1,1.729-.783,7.7,7.7,0,0,1,2-.262,8.075,8.075,0,0,1,3.28.636v2.3a6.372,6.372,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.777,2.777,0,0,0-.875.409,1.872,1.872,0,0,0-.564.629,1.66,1.66,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.018,2.018,0,0,0,.585.664,4.474,4.474,0,0,0,.937.527q.55.234,1.254.511a17.708,17.708,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.858,3.364,3.364,0,0,1,.806,1.1,3.568,3.568,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,4,4,0,0,1-1.233,1.287,5.657,5.657,0,0,1-1.778.761,8.75,8.75,0,0,1-2.108.249A7.976,7.976,0,0,1,118.827,471.6Z" style="fill: #fff"/>
        <path d="M147.226,453.12a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.308v1.938h-3.308V472.11h-2.246V459.875H138.7v-1.938h2.411v-2.3a4.79,4.79,0,0,1,1.281-3.522,4.317,4.317,0,0,1,3.2-1.3,4.41,4.41,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M154.985,472.442a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.868-5.266,7.688,7.688,0,0,1,1.943-5.579,6.973,6.973,0,0,1,5.25-2.006,6.317,6.317,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412A7.637,7.637,0,0,1,160.1,470.4,6.672,6.672,0,0,1,154.985,472.442Zm.165-12.927A4.292,4.292,0,0,0,151.7,461a6.134,6.134,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.347,4.347,0,0,0,3.432,1.453,4.122,4.122,0,0,0,3.369-1.425,6.211,6.211,0,0,0,1.178-4.056,6.315,6.315,0,0,0-1.178-4.1A4.105,4.105,0,0,0,155.15,459.515Z" style="fill: #fff"/>
        <path d="M172.98,460.235a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26V457.937h2.26v2.92h.056a4.942,4.942,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.217-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M193.648,471.46a7.328,7.328,0,0,1-3.859.982,6.376,6.376,0,0,1-4.871-1.972,7.169,7.169,0,0,1-1.852-5.114,7.88,7.88,0,0,1,2-5.627,6.972,6.972,0,0,1,5.332-2.124,7.388,7.388,0,0,1,3.28.692v2.325a5.733,5.733,0,0,0-3.362-1.107,4.536,4.536,0,0,0-3.549,1.557,5.925,5.925,0,0,0-1.385,4.09,5.639,5.639,0,0,0,1.3,3.93,4.475,4.475,0,0,0,3.493,1.44,5.642,5.642,0,0,0,3.472-1.232Z" style="fill: #fff"/>
        <path d="M202.963,472.442a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,202.963,472.442Zm.165-12.927A4.29,4.29,0,0,0,199.683,461a6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.206,6.206,0,0,0,1.178-4.056,6.309,6.309,0,0,0-1.178-4.1A4.105,4.105,0,0,0,203.128,459.515Z" style="fill: #fff"/>
        <path d="M233.636,472.11h-2.26v-8.139a6.162,6.162,0,0,0-.723-3.4,2.738,2.738,0,0,0-2.433-1.052,3.009,3.009,0,0,0-2.459,1.328,5.1,5.1,0,0,0-1.013,3.184v8.083h-2.26V463.7q0-4.18-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083H213.6V457.937h2.26v2.242h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.657,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M240.223,470.062h-.056v8.567h-2.259V457.937h2.259v2.491h.056a5.339,5.339,0,0,1,4.878-2.823,5.159,5.159,0,0,1,4.258,1.9,7.911,7.911,0,0,1,1.529,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.711,2.138A4.716,4.716,0,0,1,240.223,470.062Zm-.056-5.717v1.979a4.225,4.225,0,0,0,1.137,2.983,4.044,4.044,0,0,0,6.1-.353,7.261,7.261,0,0,0,1.165-4.387,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,3.993,3.993,0,0,0-3.169,1.377A5.071,5.071,0,0,0,240.167,464.345Z" style="fill: #fff"/>
        <path d="M256.758,472.11H254.5V451.127h2.26Z" style="fill: #fff"/>
        <path d="M272.674,465.591h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.166,8.166,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M286.4,457.937l-4.74,7.17,4.657,7h-2.632l-2.77-4.6q-.261-.429-.62-1.08h-.054q-.071.124-.649,1.08l-2.824,4.6h-2.605l4.809-6.948-4.6-7.225H277l2.728,4.844q.3.54.593,1.107h.055l3.528-5.951Z" style="fill: #fff"/>
        <path d="M309.686,470.975q0,7.806-7.441,7.806a9.956,9.956,0,0,1-4.575-1v-2.27a9.36,9.36,0,0,0,4.547,1.328q5.21,0,5.209-5.564v-1.55h-.055a5.695,5.695,0,0,1-9.088.824,7.571,7.571,0,0,1-1.605-5.073,8.851,8.851,0,0,1,1.729-5.744,5.765,5.765,0,0,1,4.733-2.131,4.6,4.6,0,0,1,4.231,2.3h.055v-1.965h2.26Zm-2.26-5.273v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.734,3.734,0,0,0-2.832-1.2,3.918,3.918,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.185,4.284,5.874,5.874,0,0,0,1.136,3.785,3.667,3.667,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.094-1.356A5.069,5.069,0,0,0,307.426,465.7Z" style="fill: #fff"/>
        <path d="M325.6,465.591h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.36,4.36,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.381-1.578v2.132a8.161,8.161,0,0,1-4.918,1.356,5.951,5.951,0,0,1-4.7-1.931,7.93,7.93,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.976,5.976,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.314-1.924a4.638,4.638,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M334.916,472.442a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266A7.692,7.692,0,0,1,330,459.611a6.973,6.973,0,0,1,5.25-2.006,6.315,6.315,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,334.916,472.442Zm.165-12.927A4.29,4.29,0,0,0,331.636,461a6.128,6.128,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.345,4.345,0,0,0,3.431,1.453,4.126,4.126,0,0,0,3.37-1.425,6.211,6.211,0,0,0,1.177-4.056,6.315,6.315,0,0,0-1.177-4.1A4.108,4.108,0,0,0,335.081,459.515Z" style="fill: #fff"/>
        <path d="M365.589,472.11h-2.26v-8.139a6.162,6.162,0,0,0-.723-3.4,2.738,2.738,0,0,0-2.433-1.052,3.009,3.009,0,0,0-2.459,1.328,5.1,5.1,0,0,0-1.012,3.184v8.083h-2.261V463.7q0-4.18-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V457.937h2.26v2.242h.056a4.789,4.789,0,0,1,4.381-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.659,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M381.2,465.591h-9.963a5.323,5.323,0,0,0,1.267,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.951,5.951,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.638,4.638,0,0,0-.944-3.059,3.21,3.21,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M391.164,471.972a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.33,3.33,0,0,0,.482,2.035,1.924,1.924,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M401.54,460.235a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V457.937h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M405.152,454.338a1.428,1.428,0,0,1-1.034-.415,1.4,1.4,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,405.152,454.338Zm1.1,17.772h-2.259V457.937h2.259Z" style="fill: #fff"/>
        <path d="M422.169,465.591h-9.963a5.323,5.323,0,0,0,1.268,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.132a8.164,8.164,0,0,1-4.919,1.356,5.949,5.949,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.769,7.769,0,0,1,1.867-5.391,5.973,5.973,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.638,4.638,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.093,3.643,3.643,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M424.732,471.6v-2.436a6.671,6.671,0,0,0,4.065,1.37q2.977,0,2.977-1.993a1.736,1.736,0,0,0-.255-.962,2.529,2.529,0,0,0-.69-.7,5.29,5.29,0,0,0-1.019-.547q-.587-.241-1.261-.5a15.967,15.967,0,0,1-1.646-.754,5,5,0,0,1-1.186-.858,3.218,3.218,0,0,1-.716-1.087,3.854,3.854,0,0,1-.241-1.426,3.407,3.407,0,0,1,.454-1.764,4.046,4.046,0,0,1,1.213-1.287,5.634,5.634,0,0,1,1.73-.783,7.685,7.685,0,0,1,2-.262,8.073,8.073,0,0,1,3.279.636v2.3a6.37,6.37,0,0,0-3.582-1.024,4.174,4.174,0,0,0-1.145.145,2.777,2.777,0,0,0-.875.409,1.883,1.883,0,0,0-.564.629,1.659,1.659,0,0,0-.2.81,1.938,1.938,0,0,0,.2.927,2.021,2.021,0,0,0,.586.664,4.464,4.464,0,0,0,.936.527q.55.234,1.254.511a17.6,17.6,0,0,1,1.682.741,5.8,5.8,0,0,1,1.267.858,3.35,3.35,0,0,1,.806,1.1,3.552,3.552,0,0,1,.282,1.481,3.5,3.5,0,0,1-.461,1.827,3.974,3.974,0,0,1-1.233,1.287,5.651,5.651,0,0,1-1.777.761,8.752,8.752,0,0,1-2.109.249A7.976,7.976,0,0,1,424.732,471.6Z" style="fill: #fff"/>
        <path d="M439.628,468.954l-2.2,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M458.174,472.442a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.687,7.687,0,0,1,1.942-5.579,6.973,6.973,0,0,1,5.25-2.006,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,458.174,472.442Zm.165-12.927A4.29,4.29,0,0,0,454.894,461a6.129,6.129,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.345,4.345,0,0,0,3.431,1.453,4.122,4.122,0,0,0,3.369-1.425,6.206,6.206,0,0,0,1.178-4.056,6.309,6.309,0,0,0-1.178-4.1A4.105,4.105,0,0,0,458.339,459.515Z" style="fill: #fff"/>
        <path d="M476.169,460.235a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V457.937h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M490.666,470.975q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.27a9.357,9.357,0,0,0,4.547,1.328q5.208,0,5.209-5.564v-1.55h-.056a5.695,5.695,0,0,1-9.088.824,7.575,7.575,0,0,1-1.6-5.073,8.856,8.856,0,0,1,1.728-5.744,5.767,5.767,0,0,1,4.734-2.131,4.6,4.6,0,0,1,4.23,2.3h.056v-1.965h2.259Zm-2.259-5.273v-2.091a4.064,4.064,0,0,0-1.137-2.892,3.736,3.736,0,0,0-2.832-1.2,3.917,3.917,0,0,0-3.279,1.529,6.844,6.844,0,0,0-1.186,4.284,5.874,5.874,0,0,0,1.137,3.785,3.666,3.666,0,0,0,3.011,1.419,3.927,3.927,0,0,0,3.093-1.356A5.069,5.069,0,0,0,488.407,465.7Z" style="fill: #fff"/>
        <path d="M505.341,472.11h-2.26V469.9h-.054a4.731,4.731,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.23-.595q0-3.612-2.907-3.612a6.929,6.929,0,0,0-4.6,1.743v-2.325a8.717,8.717,0,0,1,4.8-1.328q4.974,0,4.974,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.986,2.167,2.167,0,0,0,.738,1.7,2.841,2.841,0,0,0,1.963.657,3.62,3.62,0,0,0,2.777-1.183,4.241,4.241,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M521.312,472.11h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083H509.6V457.937h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.71,6.71,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M526.728,454.338a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,526.728,454.338Zm1.1,17.772H525.57V457.937h2.259Z" style="fill: #fff"/>
        <path d="M539.625,465.107H532.1v-1.786h7.523Z" style="fill: #fff"/>
        <path d="M38.134,492.6l-8.35,11.584h8.267v1.938H26.463v-.706l8.35-11.529H27.248v-1.938H38.134Z" style="fill: #fff"/>
        <path d="M51.156,506.126H48.9v-2.214h-.055a4.727,4.727,0,0,1-4.341,2.546,4.624,4.624,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.795-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.26,2.26,0,0,0-.8,1.986,2.17,2.17,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M61.959,505.988a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387H53.719v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938H58.4v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M66.135,488.354a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,66.135,488.354Zm1.1,17.772h-2.26V491.953h2.26Z" style="fill: #fff"/>
        <path d="M77.71,506.458a6.524,6.524,0,0,1-4.995-1.986,7.374,7.374,0,0,1-1.867-5.266,7.688,7.688,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.315,6.315,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.637,7.637,0,0,1-1.909,5.433A6.673,6.673,0,0,1,77.71,506.458Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.126,4.126,0,0,0,3.37-1.426,6.209,6.209,0,0,0,1.177-4.056,6.317,6.317,0,0,0-1.177-4.1A4.108,4.108,0,0,0,77.875,493.531Z" style="fill: #fff"/>
        <path d="M100.06,506.126H97.8v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V491.953h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M106.385,502.97l-2.2,6.81h-1.612l1.612-6.81Z" style="fill: #fff"/>
        <path d="M128.311,506.126h-2.26v-2.214H126a4.727,4.727,0,0,1-4.34,2.546,4.625,4.625,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.658-4.623l4.23-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.744v-2.326a8.722,8.722,0,0,1,4.8-1.328q4.976,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.516,5.516,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.986,2.17,2.17,0,0,0,.737,1.7,2.844,2.844,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M144.282,506.126h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V491.953h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.717,6.717,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M160.583,506.126h-2.259v-2.408h-.056a5.68,5.68,0,0,1-9.1.837,7.833,7.833,0,0,1-1.59-5.183,8.515,8.515,0,0,1,1.763-5.634,5.808,5.808,0,0,1,4.7-2.117,4.52,4.52,0,0,1,4.231,2.3h.056v-8.775h2.259Zm-2.259-6.408v-2.09a4.068,4.068,0,0,0-1.13-2.907,3.781,3.781,0,0,0-2.866-1.19,3.9,3.9,0,0,0-3.252,1.522,6.69,6.69,0,0,0-1.186,4.208,6.021,6.021,0,0,0,1.137,3.869,3.711,3.711,0,0,0,3.052,1.419,3.855,3.855,0,0,0,3.066-1.371A5.123,5.123,0,0,0,158.324,499.718Z" style="fill: #fff"/>
        <path d="M184.272,499.607h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.359,4.359,0,0,0,3.335,1.288,6.915,6.915,0,0,0,4.381-1.579V505.1a8.157,8.157,0,0,1-4.919,1.356,5.953,5.953,0,0,1-4.7-1.93,7.935,7.935,0,0,1-1.708-5.433,7.769,7.769,0,0,1,1.867-5.391,5.974,5.974,0,0,1,4.637-2.083,5.294,5.294,0,0,1,4.285,1.8,7.523,7.523,0,0,1,1.516,5Zm-2.315-1.924a4.633,4.633,0,0,0-.944-3.059,3.209,3.209,0,0,0-2.584-1.093,3.645,3.645,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M198,491.953l-4.74,7.17,4.657,7h-2.631l-2.77-4.595q-.263-.429-.62-1.08h-.055c-.047.083-.262.443-.648,1.08l-2.824,4.595H185.76l4.809-6.948-4.6-7.225H188.6l2.728,4.844c.2.36.4.73.592,1.107h.056l3.527-5.951Z" style="fill: #fff"/>
        <path d="M202.957,504.078H202.9v8.567h-2.26V491.953h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.156,5.156,0,0,1,4.258,1.9,7.905,7.905,0,0,1,1.529,5.1,8.814,8.814,0,0,1-1.722,5.7,5.726,5.726,0,0,1-4.712,2.138A4.718,4.718,0,0,1,202.957,504.078Zm-.055-5.717v1.979a4.227,4.227,0,0,0,1.136,2.983,4.042,4.042,0,0,0,6.1-.353,7.261,7.261,0,0,0,1.165-4.387,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,202.9,498.361Z" style="fill: #fff"/>
        <path d="M223.131,506.458a6.524,6.524,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,223.131,506.458Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.311,6.311,0,0,0-1.178-4.1A4.105,4.105,0,0,0,223.3,493.531Z" style="fill: #fff"/>
        <path d="M241.126,494.251a2.747,2.747,0,0,0-1.708-.457,2.884,2.884,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V491.953h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M250.125,505.988a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938H246.57v7.986a3.328,3.328,0,0,0,.482,2.035,1.921,1.921,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M262.059,486.278l-9.48,23.142H250.47l9.453-23.142Z" style="fill: #fff"/>
        <path d="M265.3,488.354a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.483,1.483,0,0,1,0,2.1A1.443,1.443,0,0,1,265.3,488.354Zm1.1,17.772h-2.26V491.953h2.26Z" style="fill: #fff"/>
        <path d="M291.01,506.126h-2.26v-8.139a6.162,6.162,0,0,0-.723-3.4,2.741,2.741,0,0,0-2.433-1.052,3.007,3.007,0,0,0-2.459,1.329,5.092,5.092,0,0,0-1.013,3.183v8.083h-2.26v-8.415q0-4.181-3.21-4.18a2.969,2.969,0,0,0-2.453,1.252,5.2,5.2,0,0,0-.965,3.26v8.083h-2.26V491.953h2.26V494.2h.055a4.79,4.79,0,0,1,4.382-2.574,4.075,4.075,0,0,1,4,2.934,5.033,5.033,0,0,1,4.685-2.934q4.658,0,4.658,5.771Z" style="fill: #fff"/>
        <path d="M297.6,504.078h-.056v8.567h-2.259V491.953h2.259v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.159,5.159,0,0,1,4.258,1.9,7.911,7.911,0,0,1,1.529,5.1,8.809,8.809,0,0,1-1.723,5.7,5.723,5.723,0,0,1-4.711,2.138A4.716,4.716,0,0,1,297.6,504.078Zm-.056-5.717v1.979a4.224,4.224,0,0,0,1.137,2.983,4.042,4.042,0,0,0,6.105-.353,7.261,7.261,0,0,0,1.165-4.387,5.74,5.74,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,3.993,3.993,0,0,0-3.169,1.377A5.071,5.071,0,0,0,297.541,498.361Z" style="fill: #fff"/>
        <path d="M317.771,506.458a6.524,6.524,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.951,7.767,7.767,0,0,1,1.77,5.412,7.632,7.632,0,0,1-1.909,5.433A6.669,6.669,0,0,1,317.771,506.458Zm.165-12.927a4.289,4.289,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1A5.8,5.8,0,0,0,314.5,503.1a4.348,4.348,0,0,0,3.432,1.454,4.123,4.123,0,0,0,3.369-1.426,6.21,6.21,0,0,0,1.178-4.056,6.317,6.317,0,0,0-1.178-4.1A4.105,4.105,0,0,0,317.936,493.531Z" style="fill: #fff"/>
        <path d="M335.766,494.251a2.751,2.751,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.972,3.737v7.225h-2.259V491.953h2.259v2.92h.056a4.95,4.95,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.217-.837,3.658,3.658,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M344.765,505.988a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387h-2.425v-1.938h2.425v-3.46l2.259-.734v4.194h3.556v1.938h-3.556v7.986a3.327,3.327,0,0,0,.483,2.035,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.471Z" style="fill: #fff"/>
        <path d="M357.872,504.078h-.055v8.567h-2.26V491.953h2.26v2.492h.055a5.34,5.34,0,0,1,4.878-2.824,5.156,5.156,0,0,1,4.258,1.9,7.905,7.905,0,0,1,1.529,5.1,8.814,8.814,0,0,1-1.722,5.7,5.726,5.726,0,0,1-4.712,2.138A4.718,4.718,0,0,1,357.872,504.078Zm-.055-5.717v1.979a4.224,4.224,0,0,0,1.137,2.983,4.041,4.041,0,0,0,6.1-.353,7.261,7.261,0,0,0,1.165-4.387,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,357.817,498.361Z" style="fill: #fff"/>
        <path d="M379.506,494.251a2.749,2.749,0,0,0-1.708-.457,2.883,2.883,0,0,0-2.419,1.37,6.36,6.36,0,0,0-.971,3.737v7.225h-2.26V491.953h2.26v2.92h.055a4.957,4.957,0,0,1,1.475-2.332,3.351,3.351,0,0,1,2.218-.837,3.652,3.652,0,0,1,1.35.194Z" style="fill: #fff"/>
        <path d="M393.3,499.607h-9.963a5.318,5.318,0,0,0,1.268,3.654,4.361,4.361,0,0,0,3.335,1.288,6.915,6.915,0,0,0,4.382-1.579V505.1a8.159,8.159,0,0,1-4.919,1.356,5.952,5.952,0,0,1-4.7-1.93A7.93,7.93,0,0,1,381,499.1a7.769,7.769,0,0,1,1.867-5.391,5.972,5.972,0,0,1,4.636-2.083,5.3,5.3,0,0,1,4.286,1.8,7.528,7.528,0,0,1,1.515,5Zm-2.314-1.924a4.633,4.633,0,0,0-.945-3.059,3.209,3.209,0,0,0-2.584-1.093,3.642,3.642,0,0,0-2.713,1.148,5.211,5.211,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M399.033,504.078h-.056v8.567h-2.26V491.953h2.26v2.492h.056a5.338,5.338,0,0,1,4.878-2.824,5.155,5.155,0,0,1,4.257,1.9,7.905,7.905,0,0,1,1.53,5.1,8.814,8.814,0,0,1-1.723,5.7,5.725,5.725,0,0,1-4.712,2.138A4.715,4.715,0,0,1,399.033,504.078Zm-.056-5.717v1.979a4.224,4.224,0,0,0,1.137,2.983,4.041,4.041,0,0,0,6.1-.353,7.254,7.254,0,0,0,1.165-4.387,5.734,5.734,0,0,0-1.089-3.71,3.6,3.6,0,0,0-2.949-1.342,4,4,0,0,0-3.169,1.377A5.071,5.071,0,0,0,398.977,498.361Z" style="fill: #fff"/>
        <path d="M423.409,506.126h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.623,4.623,0,0,1-3.3-1.121,3.894,3.894,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.8-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.371.782,2.26,2.26,0,0,0-.8,1.986,2.17,2.17,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M435.025,494.251a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26V491.953h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.355,3.355,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M447.579,506.126h-2.26v-2.214h-.055a4.728,4.728,0,0,1-4.341,2.546,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.191-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.926,6.926,0,0,0-4.6,1.744v-2.326a8.72,8.72,0,0,1,4.795-1.328q4.974,0,4.975,5.287Zm-2.26-7.169-3.4.47a5.526,5.526,0,0,0-2.37.782,2.26,2.26,0,0,0-.8,1.986,2.17,2.17,0,0,0,.737,1.7,2.842,2.842,0,0,0,1.964.658,3.618,3.618,0,0,0,2.776-1.184,4.237,4.237,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M458.382,505.988a4.345,4.345,0,0,1-2.108.443q-3.708,0-3.707-4.153v-8.387h-2.425v-1.938h2.425v-3.46l2.26-.734v4.194h3.555v1.938h-3.555v7.986a3.328,3.328,0,0,0,.482,2.035,1.92,1.92,0,0,0,1.6.609,2.369,2.369,0,0,0,1.474-.471Z" style="fill: #fff"/>
        <path d="M462.558,488.354a1.429,1.429,0,0,1-1.034-.415,1.407,1.407,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,462.558,488.354Zm1.1,17.772H461.4V491.953h2.26Z" style="fill: #fff"/>
        <path d="M474.133,506.458a6.524,6.524,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.683,7.683,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.316,6.316,0,0,1,4.927,1.951,7.762,7.762,0,0,1,1.771,5.412,7.633,7.633,0,0,1-1.91,5.433A6.669,6.669,0,0,1,474.133,506.458Zm.165-12.927a4.29,4.29,0,0,0-3.445,1.488,6.13,6.13,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.972,4.346,4.346,0,0,0,3.431,1.454,4.123,4.123,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.056,6.311,6.311,0,0,0-1.178-4.1A4.105,4.105,0,0,0,474.3,493.531Z" style="fill: #fff"/>
        <path d="M496.483,506.126h-2.26v-8.083q0-4.512-3.279-4.512a3.553,3.553,0,0,0-2.805,1.28,4.762,4.762,0,0,0-1.109,3.232v8.083h-2.26V491.953h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.307,4.307,0,0,1,3.541,1.5,6.712,6.712,0,0,1,1.227,4.34Z" style="fill: #fff"/>
        <path d="M515.487,487.136a3,3,0,0,0-1.5-.374q-2.37,0-2.37,3v2.187h3.307v1.938h-3.307v12.235h-2.246V493.891h-2.412v-1.938h2.412v-2.3a4.788,4.788,0,0,1,1.281-3.522,4.315,4.315,0,0,1,3.2-1.294,4.413,4.413,0,0,1,1.64.249Z" style="fill: #fff"/>
        <path d="M523.246,506.458a6.528,6.528,0,0,1-5-1.986,7.374,7.374,0,0,1-1.867-5.266,7.684,7.684,0,0,1,1.943-5.578,6.967,6.967,0,0,1,5.25-2.007,6.314,6.314,0,0,1,4.926,1.951,7.762,7.762,0,0,1,1.771,5.412,7.637,7.637,0,0,1-1.909,5.433A6.672,6.672,0,0,1,523.246,506.458Zm.165-12.927a4.291,4.291,0,0,0-3.446,1.488,6.135,6.135,0,0,0-1.267,4.1,5.8,5.8,0,0,0,1.281,3.972,4.346,4.346,0,0,0,3.432,1.454,4.124,4.124,0,0,0,3.369-1.426,6.209,6.209,0,0,0,1.177-4.056,6.317,6.317,0,0,0-1.177-4.1A4.106,4.106,0,0,0,523.411,493.531Z" style="fill: #fff"/>
        <path d="M541.241,494.251a2.751,2.751,0,0,0-1.708-.457,2.882,2.882,0,0,0-2.419,1.37,6.352,6.352,0,0,0-.972,3.737v7.225h-2.26V491.953h2.26v2.92h.056a4.948,4.948,0,0,1,1.474-2.332,3.353,3.353,0,0,1,2.218-.837,3.662,3.662,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M344.3,540.142V520.294h5.622a6.131,6.131,0,0,1,4.065,1.259,4.08,4.08,0,0,1,1.5,3.281,4.843,4.843,0,0,1-.909,2.934,4.916,4.916,0,0,1-2.508,1.772v.055a5.019,5.019,0,0,1,3.2,1.516,4.673,4.673,0,0,1,1.2,3.328,5.2,5.2,0,0,1-1.818,4.125,6.752,6.752,0,0,1-4.589,1.578Zm2.315-17.744v6.408h2.37a4.487,4.487,0,0,0,2.99-.921,3.209,3.209,0,0,0,1.089-2.6q0-2.892-3.789-2.892Zm0,8.5v7.142h3.141a4.694,4.694,0,0,0,3.163-.969,3.327,3.327,0,0,0,1.123-2.657q0-3.516-4.767-3.516Z" style="fill: #fff"/>
        <path d="M362.788,540.142h-2.314V520.294h2.314Z" style="fill: #fff"/>
        <path d="M388.129,540.142h-2.3V526.827q0-1.578.192-3.862h-.055a12.292,12.292,0,0,1-.593,1.924l-6.752,15.253h-1.129L370.753,525a11.889,11.889,0,0,1-.592-2.035h-.055q.109,1.191.11,3.889v13.288h-2.232V520.294h3.058l6.064,13.841a17.7,17.7,0,0,1,.909,2.38h.083q.592-1.632.95-2.436l6.188-13.785h2.893Z" style="fill: #fff"/>
        <path d="M401.91,522.37a1.432,1.432,0,0,1-1.035-.415,1.408,1.408,0,0,1-.426-1.052,1.448,1.448,0,0,1,1.461-1.481,1.455,1.455,0,0,1,1.053.422,1.483,1.483,0,0,1,0,2.1A1.441,1.441,0,0,1,401.91,522.37Zm1.1,17.772h-2.26V525.968h2.26Z" style="fill: #fff"/>
        <path d="M419.3,540.142h-2.26v-8.083q0-4.514-3.279-4.512a3.551,3.551,0,0,0-2.805,1.28,4.759,4.759,0,0,0-1.109,3.232v8.083h-2.26V525.968h2.26v2.353h.056a5.087,5.087,0,0,1,4.63-2.685,4.309,4.309,0,0,1,3.541,1.5,6.714,6.714,0,0,1,1.226,4.339Z" style="fill: #fff"/>
        <path d="M430.1,540a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.708-4.152v-8.388h-2.424v-1.938h2.424v-3.46l2.26-.733v4.193H430.1v1.938h-3.556v7.987a3.317,3.317,0,0,0,.483,2.034,1.919,1.919,0,0,0,1.6.609,2.369,2.369,0,0,0,1.475-.47Z" style="fill: #fff"/>
        <path d="M444.461,533.623H434.5a5.325,5.325,0,0,0,1.268,3.654,4.362,4.362,0,0,0,3.335,1.287,6.914,6.914,0,0,0,4.382-1.578v2.131a8.158,8.158,0,0,1-4.919,1.357,5.953,5.953,0,0,1-4.7-1.931,7.925,7.925,0,0,1-1.708-5.432,7.772,7.772,0,0,1,1.867-5.392,5.976,5.976,0,0,1,4.637-2.083,5.3,5.3,0,0,1,4.285,1.8,7.525,7.525,0,0,1,1.515,5Zm-2.314-1.924a4.636,4.636,0,0,0-.944-3.059,3.211,3.211,0,0,0-2.584-1.093,3.639,3.639,0,0,0-2.714,1.148,5.224,5.224,0,0,0-1.378,3Z" style="fill: #fff"/>
        <path d="M459.922,539.007q0,7.806-7.441,7.806a9.952,9.952,0,0,1-4.574-1v-2.27a9.368,9.368,0,0,0,4.547,1.328q5.208,0,5.208-5.564v-1.55h-.055a5.695,5.695,0,0,1-9.088.824,7.578,7.578,0,0,1-1.605-5.073,8.856,8.856,0,0,1,1.729-5.744,5.766,5.766,0,0,1,4.733-2.132,4.6,4.6,0,0,1,4.231,2.3h.055v-1.966h2.26Zm-2.26-5.273v-2.091a4.062,4.062,0,0,0-1.136-2.892,3.736,3.736,0,0,0-2.832-1.2,3.916,3.916,0,0,0-3.28,1.529,6.842,6.842,0,0,0-1.185,4.284,5.876,5.876,0,0,0,1.137,3.785,3.664,3.664,0,0,0,3.01,1.419,3.927,3.927,0,0,0,3.094-1.356A5.07,5.07,0,0,0,457.662,533.734Z" style="fill: #fff"/>
        <path d="M471.855,528.266a2.758,2.758,0,0,0-1.708-.457,2.88,2.88,0,0,0-2.419,1.371,6.352,6.352,0,0,0-.972,3.737v7.225H464.5V525.968h2.26v2.921h.056a4.932,4.932,0,0,1,1.475-2.332,3.352,3.352,0,0,1,2.217-.838,3.683,3.683,0,0,1,1.351.194Z" style="fill: #fff"/>
        <path d="M484.409,540.142h-2.26v-2.215h-.055a4.729,4.729,0,0,1-4.341,2.547,4.627,4.627,0,0,1-3.3-1.121,3.9,3.9,0,0,1-1.192-2.976q0-3.972,4.657-4.623l4.231-.6q0-3.612-2.907-3.612a6.93,6.93,0,0,0-4.6,1.743v-2.325a8.712,8.712,0,0,1,4.8-1.329q4.974,0,4.975,5.288Zm-2.26-7.17-3.4.471a5.5,5.5,0,0,0-2.371.782,2.257,2.257,0,0,0-.8,1.986,2.168,2.168,0,0,0,.737,1.695,2.837,2.837,0,0,0,1.964.658,3.617,3.617,0,0,0,2.776-1.183,4.239,4.239,0,0,0,1.1-3Z" style="fill: #fff"/>
        <path d="M495.212,540a4.346,4.346,0,0,1-2.108.442q-3.708,0-3.707-4.152v-8.388h-2.425v-1.938H489.4v-3.46l2.26-.733v4.193h3.555v1.938h-3.555v7.987a3.325,3.325,0,0,0,.482,2.034,1.921,1.921,0,0,0,1.6.609,2.368,2.368,0,0,0,1.474-.47Z" style="fill: #fff"/>
        <path d="M499.388,522.37a1.429,1.429,0,0,1-1.034-.415,1.409,1.409,0,0,1-.427-1.052,1.45,1.45,0,0,1,1.461-1.481,1.457,1.457,0,0,1,1.054.422,1.486,1.486,0,0,1,0,2.1A1.443,1.443,0,0,1,499.388,522.37Zm1.1,17.772h-2.26V525.968h2.26Z" style="fill: #fff"/>
        <path d="M510.963,540.474a6.528,6.528,0,0,1-5-1.986,7.376,7.376,0,0,1-1.867-5.267,7.685,7.685,0,0,1,1.942-5.578,6.97,6.97,0,0,1,5.25-2.007,6.317,6.317,0,0,1,4.927,1.952A7.762,7.762,0,0,1,517.991,533a7.632,7.632,0,0,1-1.91,5.432A6.667,6.667,0,0,1,510.963,540.474Zm.165-12.927a4.293,4.293,0,0,0-3.445,1.487,6.132,6.132,0,0,0-1.268,4.1,5.8,5.8,0,0,0,1.282,3.973,4.348,4.348,0,0,0,3.431,1.453,4.12,4.12,0,0,0,3.369-1.426,6.2,6.2,0,0,0,1.178-4.055,6.307,6.307,0,0,0-1.178-4.1A4.105,4.105,0,0,0,511.128,527.547Z" style="fill: #fff"/>
        <path d="M533.313,540.142h-2.26v-8.083q0-4.514-3.279-4.512a3.55,3.55,0,0,0-2.8,1.28,4.759,4.759,0,0,0-1.109,3.232v8.083H521.6V525.968h2.26v2.353h.055a5.089,5.089,0,0,1,4.63-2.685,4.308,4.308,0,0,1,3.541,1.5,6.708,6.708,0,0,1,1.227,4.339Z" style="fill: #fff"/>
        <path d="M538.357,540.446a1.459,1.459,0,0,1-1.082-.457,1.5,1.5,0,0,1-.448-1.093,1.528,1.528,0,0,1,.448-1.1,1.447,1.447,0,0,1,1.082-.464,1.48,1.48,0,0,1,1.1.464,1.515,1.515,0,0,1,.455,1.1,1.557,1.557,0,0,1-1.556,1.55Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="modelling_2_text">
      <text transform="translate(26.008 457.668)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan style="letter-spacing: -0.015122207179631303em">P</tspan><tspan x="15.447" y="0">roficient</tspan><tspan x="117.581" y="0" style="letter-spacing: 0.21482531389279433em"> </tspan><tspan x="131.435" y="0">in</tspan><tspan x="154.342" y="0" style="letter-spacing: 0.21479070929970595em"> </tspan><tspan x="168.196" y="0">basic</tspan><tspan x="231.27" y="0" style="letter-spacing: 0.21482531389279433em"> </tspan><tspan x="245.124" y="0">modeling</tspan><tspan x="364.13" y="0" style="letter-spacing: 0.21479070929970595em"> </tspan><tspan x="377.984" y="0">for</tspan><tspan x="413.32" y="0" style="letter-spacing: 0.21482531389279433em"> </tspan><tspan x="427.175" y="0">interior </tspan><tspan x="0" y="34.016">design,</tspan><tspan x="89.289" y="34.016" style="letter-spacing: 0.15461332191897634em"> </tspan><tspan x="101.437" y="34.016">scene</tspan><tspan x="172.247" y="34.016" style="letter-spacing: 0.15461332191897634em"> </tspan><tspan x="184.395" y="34.016">preparation</tspan><tspan x="330.226" y="34.016" style="letter-spacing: 0.15461332191897634em"> </tspan><tspan x="342.374" y="34.016">for</tspan><tspan x="377.71" y="34.016" style="letter-spacing: 0.15461332191897634em"> </tspan><tspan x="389.858" y="34.016">rendering, </tspan><tspan x="19.649" y="68.032">texturing, lighting, and post-processing.</tspan></text>
    </g>
    <g id="modelling_1_text">
      <text transform="translate(-34.818 403.744)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Competent<tspan x="140.142" y="0" style="letter-spacing: 0.5343987310641789em"> </tspan><tspan x="163.055" y="0">in</tspan><tspan x="185.962" y="0" style="letter-spacing: 0.5344333356572674em"> </tspan><tspan x="208.877" y="0">basic</tspan><tspan x="271.951" y="0" style="letter-spacing: 0.5343987310641789em"> </tspan><tspan x="294.864" y="0">modeling,</tspan><tspan x="420.015" y="0" style="letter-spacing: 0.5344333356572674em"> </tspan><tspan x="442.929" y="0">generating </tspan><tspan x="0" y="34.016">parametric</tspan><tspan x="134.025" y="34.016" style="letter-spacing: 0.025607398885416847em"> </tspan><tspan x="142.516" y="34.016">geometries</tspan><tspan x="283.059" y="34.016" style="letter-spacing: 0.025607398885416847em"> </tspan><tspan x="291.549" y="34.016">with</tspan><tspan x="344.547" y="34.016" style="letter-spacing: 0.02564200347850525em"> </tspan><tspan x="353.039" y="34.016">procedural</tspan><tspan x="487.962" y="34.016" style="letter-spacing: 0.025607398885416847em"> </tspan><tspan x="496.453" y="34.016">nodes, </tspan><tspan x="0" y="68.032">texturing,</tspan><tspan x="118.689" y="68.032" style="letter-spacing: 0.3421702164581106em"> </tspan><tspan x="136.153" y="68.032">and</tspan><tspan x="183.31" y="68.032" style="letter-spacing: 0.3421702164581106em"> </tspan><tspan x="200.774" y="68.032">solid</tspan><tspan x="259.834" y="68.032" style="letter-spacing: 0.34220482105119904em"> </tspan><tspan x="277.3" y="68.032">operations.</tspan><tspan x="416.97" y="68.032" style="letter-spacing: 0.3421702164581106em"> </tspan><tspan x="434.435" y="68.032">Capable</tspan><tspan x="535.849" y="68.032" style="letter-spacing: 0.3421702164581106em"> </tspan><tspan x="553.313" y="68.032">of </tspan><tspan x="0" y="102.047">simple</tspan><tspan x="81.663" y="102.047" style="letter-spacing: 0.3211652284534511em"> </tspan><tspan x="98.532" y="102.047">animations,</tspan><tspan x="241.996" y="102.047" style="letter-spacing: 0.3211306238603627em"> </tspan><tspan x="258.864" y="102.047">mesh</tspan><tspan x="326.174" y="102.047" style="letter-spacing: 0.3211652284534511em"> </tspan><tspan x="343.043" y="102.047">simplification,</tspan><tspan x="514.77" y="102.047" style="letter-spacing: 0.3211306238603627em"> </tspan><tspan x="531.638" y="102.047">and </tspan><tspan x="0" y="136.063">optimizing</tspan><tspan x="133.443" y="136.063" style="letter-spacing: 0.6054419606746666em"> </tspan><tspan x="158.37" y="136.063">Meshroom-generated</tspan><tspan x="433.323" y="136.063" style="letter-spacing: 0.6054765652677548em"> </tspan><tspan x="458.251" y="136.063">geometry </tspan><tspan x="347.131" y="170.079">for BIM workflows.</tspan></text>
    </g>
    <g id="title5_path">
      <g>
        <polyline points="1783.582 517.972 1783.582 568.844 1754.187 568.844" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M1754.454,563.515a5.329,5.329,0,1,0,5.328,5.329A5.329,5.329,0,0,0,1754.454,563.515Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title5_red" transform="translate(1567.858 582.052)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">SketchUp</text>
    <g id="title4_path">
      <g>
        <polyline points="1783.582 468.26 1783.582 519.132 1754.187 519.132" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M1754.454,513.8a5.329,5.329,0,1,0,5.328,5.329A5.329,5.329,0,0,0,1754.454,513.8Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title4_red" transform="translate(1589.24 532.34)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">3dsMAX</text>
    <g id="title3_path">
      <g>
        <polyline points="1783.582 417.387 1783.582 468.26 1754.187 468.26" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M1754.454,462.931a5.329,5.329,0,1,0,5.328,5.329A5.329,5.329,0,0,0,1754.454,462.931Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title3_red" transform="translate(1600.208 479.983)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Blender</text>
    <g id="_g_4" data-name="&lt;g&gt;">
      <rect id="modelling_headerbox" x="1522.472" y="353.44" width="303.945" height="84.867" rx="13.785" style="fill: #63769e"/>
      <text id="modelling_header" transform="translate(1549.553 413.345)" style="font-size: 52.6827392578125px;fill: #fff;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.01999716894347026em">Modelling</text>
    </g>
  </g>
  <g id="bim">
    <g id="bim_2">
      <rect id="clipmask_2-2" data-name="clipmask_2" x="585.671" y="55.08" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-18)">
        <image id="img_2" width="2480" height="3508" transform="translate(813.678 -567.37) scale(0.412)" xlink:href="hard-skills/img_2.png"/>
      </g>
    </g>
    <g id="bim_1">
      <rect id="clipmask_1-4" data-name="clipmask_1" x="585.671" y="55.08" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-18)">
        <image id="img_1" width="3508" height="2480" transform="translate(786.313 -281.426) scale(0.298)" xlink:href="hard-skills/img_1.png"/>
      </g>
    </g>
    <g id="bim_default">
      <rect id="clipmask_d1-2" data-name="clipmask_d1" x="585.671" y="55.08" width="1228.658" height="226.218" rx="13.785" style="fill: #93a0c5"/>
      <g style="clip-path: url(#clip-path-18)">
        <image id="img_d1" width="1000" height="817" transform="translate(823.83 -174.006)" xlink:href="hard-skills/img_d1.png"/>
      </g>
    </g>
    <g id="bim_1_text">
      <text transform="translate(1858.6 83.906)" style="font-size: 24.66141700744629px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan style="letter-spacing: -0.015154427393936534em">P</tspan><tspan x="13.439" y="0">roficient</tspan><tspan x="102.295" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="111.249" y="0">in</tspan><tspan x="131.178" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="140.132" y="0">operating</tspan><tspan x="245.907" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="254.861" y="0">the</tspan><tspan x="290.072" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="299.026" y="0">BIM</tspan><tspan x="341.869" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="350.823" y="0">environment,</tspan><tspan x="494.242" y="0" style="letter-spacing: 0.08913667136433537em"> </tspan><tspan x="503.196" y="0">including </tspan><tspan x="0" y="29.594">full</tspan><tspan x="33.621" y="29.594" style="letter-spacing: -0.028558737188573314em"> </tspan><tspan x="39.672" y="29.594">utilization</tspan><tspan x="146.34" y="29.594" style="letter-spacing: -0.028518961788589228em"> </tspan><tspan x="152.392" y="29.594">of</tspan><tspan x="174.561" y="29.594" style="letter-spacing: -0.028558737188573314em"> </tspan><tspan x="180.612" y="29.594">viewmaps</tspan><tspan x="287.869" y="29.594" style="letter-spacing: -0.028558737188573314em"> </tspan><tspan x="293.92" y="29.594">and</tspan><tspan x="334.947" y="29.594" style="letter-spacing: -0.028518961788589228em"> </tspan><tspan x="340.999" y="29.594">overrides</tspan><tspan x="441.163" y="29.594" style="letter-spacing: -0.028558737188573314em"> </tspan><tspan x="447.214" y="29.594">for</tspan><tspan x="477.956" y="29.594" style="letter-spacing: -0.028518961788589228em"> </tspan><tspan x="484.008" y="29.594">design</tspan><tspan x="556.344" y="29.594" style="letter-spacing: -0.028558737188573314em"> </tspan><tspan x="562.395" y="29.594">and </tspan><tspan x="0" y="59.188">renovations.</tspan><tspan x="132.786" y="59.188" style="letter-spacing: 0.1617665517352753em"> </tspan><tspan x="143.531" y="59.188">Capable</tspan><tspan x="231.761" y="59.188" style="letter-spacing: 0.1617665517352753em"> </tspan><tspan x="242.506" y="59.188">of</tspan><tspan x="264.675" y="59.188" style="letter-spacing: 0.1617267763352912em"> </tspan><tspan x="275.419" y="59.188">simulating</tspan><tspan x="388.385" y="59.188" style="letter-spacing: 0.1617665517352753em"> </tspan><tspan x="399.13" y="59.188">thermal</tspan><tspan x="482.676" y="59.188" style="letter-spacing: 0.1617665517352753em"> </tspan><tspan x="493.421" y="59.188">variations, </tspan><tspan x="0" y="88.781">auto-texting</tspan><tspan x="134.556" y="88.781" style="letter-spacing: 0.42846060862856783em"> </tspan><tspan x="151.878" y="88.781">elements,</tspan><tspan x="255.91" y="88.781" style="letter-spacing: 0.42850038402855195em"> </tspan><tspan x="273.233" y="88.781">and</tspan><tspan x="314.26" y="88.781" style="letter-spacing: 0.42846060862856783em"> </tspan><tspan x="331.582" y="88.781">managing</tspan><tspan x="440.85" y="88.781" style="letter-spacing: 0.42846060862856783em"> </tspan><tspan x="458.172" y="88.781">the</tspan><tspan x="493.383" y="88.781" style="letter-spacing: 0.42846060862856783em"> </tspan><tspan x="510.705" y="88.781" style="letter-spacing: -0.015154427393936534em">P</tspan><tspan x="524.144" y="88.781">roperty </tspan><tspan x="0" y="118.375">Manager to create complex rules. </tspan><tspan x="0" y="147.969">Experienced in editing imported GLB objects and </tspan><tspan x="0" y="177.563">collaborating efficiently using the </tspan><tspan x="367.494" y="177.563" style="letter-spacing: -0.10496728055800136em">T</tspan><tspan x="377.826" y="177.563">eamwork palette.</tspan></text>
    </g>
    <g id="bim_2_text">
      <text transform="translate(1858.6 83.906)" style="font-size: 24.66141700744629px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Certified in Junior and Mid-Level courses. <tspan x="0" y="29.594">Skilled</tspan><tspan x="70.698" y="29.594" style="letter-spacing: -0.030269079387888986em"> </tspan><tspan x="76.707" y="29.594">in</tspan><tspan x="96.636" y="29.594" style="letter-spacing: -0.030269079387888986em"> </tspan><tspan x="102.645" y="29.594">ellaborating</tspan><tspan x="232.914" y="29.594" style="letter-spacing: -0.030269079387888986em"> </tspan><tspan x="238.923" y="29.594">drawings,</tspan><tspan x="342.651" y="29.594" style="letter-spacing: -0.0302293039879049em"> </tspan><tspan x="348.661" y="29.594">modeling</tspan><tspan x="452.197" y="29.594" style="letter-spacing: -0.030269079387888986em"> </tspan><tspan x="458.206" y="29.594">complex</tspan><tspan x="549.976" y="29.594" style="letter-spacing: -0.030269079387888986em"> </tspan><tspan x="555.985" y="29.594">and </tspan><tspan x="0" y="59.188">organic</tspan><tspan x="81.414" y="59.188" style="letter-spacing: 0.03929809518427637em"> </tspan><tspan x="89.139" y="59.188">3D</tspan><tspan x="119.725" y="59.188" style="letter-spacing: 0.039258319784292284em"> </tspan><tspan x="127.449" y="59.188">structures</tspan><tspan x="234.44" y="59.188" style="letter-spacing: 0.03929809518427637em"> </tspan><tspan x="242.165" y="59.188">using</tspan><tspan x="301.038" y="59.188" style="letter-spacing: 0.039258319784292284em"> </tspan><tspan x="308.762" y="59.188">splines,</tspan><tspan x="388.335" y="59.188" style="letter-spacing: 0.03929809518427637em"> </tspan><tspan x="396.059" y="59.188">and</tspan><tspan x="437.086" y="59.188" style="letter-spacing: 0.03929809518427637em"> </tspan><tspan x="444.811" y="59.188">managing</tspan><tspan x="554.079" y="59.188" style="letter-spacing: 0.039258319784292284em"> </tspan><tspan x="561.803" y="59.188">the </tspan><tspan x="0" y="88.781">Drawing Organizer for layer control. </tspan><tspan x="0" y="118.375" style="letter-spacing: -0.015154427393936534em">P</tspan><tspan x="13.439" y="118.375">roficient</tspan><tspan x="102.295" y="118.375" style="letter-spacing: 0.302770344678858em"> </tspan><tspan x="116.517" y="118.375">in</tspan><tspan x="136.447" y="118.375" style="letter-spacing: 0.30273056927887393em"> </tspan><tspan x="150.668" y="118.375">importing/editing</tspan><tspan x="344.024" y="118.375" style="letter-spacing: 0.302770344678858em"> </tspan><tspan x="358.246" y="118.375">library</tspan><tspan x="426.317" y="118.375" style="letter-spacing: 0.302770344678858em"> </tspan><tspan x="440.539" y="118.375">objects,</tspan><tspan x="523.917" y="118.375" style="letter-spacing: 0.30273056927887393em"> </tspan><tspan x="538.138" y="118.375">using </tspan><tspan x="0" y="147.969">collaborative</tspan><tspan x="139.444" y="147.969" style="letter-spacing: 0.15699350373718504em"> </tspan><tspan x="150.072" y="147.969">platform</tspan><tspan x="243.431" y="147.969" style="letter-spacing: 0.15699350373718504em"> </tspan><tspan x="254.059" y="147.969">BIMplus,</tspan><tspan x="347.141" y="147.969" style="letter-spacing: 0.15699350373718504em"> </tspan><tspan x="357.768" y="147.969">exporting</tspan><tspan x="462.314" y="147.969" style="letter-spacing: 0.15699350373718504em"> </tspan><tspan x="472.942" y="147.969">to</tspan><tspan x="495.749" y="147.969" style="letter-spacing: 0.15703327913716913em"> </tspan><tspan x="506.377" y="147.969">I</tspan><tspan x="512.94" y="147.969" style="letter-spacing: -0.009784748396085006em">F</tspan><tspan x="524.74" y="147.969">C,</tspan><tspan x="545.356" y="147.969" style="letter-spacing: 0.15699350373718504em"> </tspan><tspan x="555.983" y="147.969">and </tspan><tspan x="0" y="177.563">rendering with the integrated engine. </tspan></text>
    </g>
    <g id="title2_path">
      <g>
        <polyline points="616.418 171.903 616.418 222.775 645.813 222.775" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,228.1a5.329,5.329,0,1,0-5.328-5.329A5.329,5.329,0,0,0,645.546,228.1Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title2_red" transform="translate(666.342 236.445)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Allplan</text>
    <g id="title1_path">
      <g>
        <polyline points="616.418 121.031 616.418 171.903 645.813 171.903" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.41732283464567px"/>
        <path d="M645.546,177.232a5.329,5.329,0,1,0-5.328-5.329A5.33,5.33,0,0,0,645.546,177.232Z" style="fill: #fff"/>
      </g>
    </g>
    <text id="title1_red" transform="translate(666.342 184.089)" style="font-size: 37.82524108886719px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030004350954576705em">Archicad</text>
    <g id="_g_5" data-name="&lt;g&gt;">
      <rect id="bim_headerbox" x="573.584" y="36.495" width="162.555" height="84.536" rx="13.785" style="fill: #63769e"/>
      <text id="bim_header" transform="translate(606.088 96.234)" style="font-size: 52.6827392578125px;fill: #fff;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.01999716894347026em">BIM</text>
    </g>
  </g>
</svg>
`;

const cvSVG = `<svg id="cv_content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1600">
  <g id="Layer12">
    <rect id="boxg12" x="905.678" y="1378.372" width="250" height="105" rx="13.785" transform="translate(2061.357 2861.745) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg12_1">
      <g>
        <polyline points="1140.272 1397.596 1202.21 1397.596 1202.21 822.143" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <circle cx="1140.272" cy="1397.596" r="13.855" transform="translate(-587.302 1916.234) rotate(-67.5)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg12">
      <text id="title12_red" transform="translate(1002.766 1453.88)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.13000963983328004em">ONCR </text>
      <g id="ScoutVolunteer">
        <text transform="translate(964.896 1473.457)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Scout <tspan x="54.072" y="0" style="letter-spacing: -0.04492691880628687em">V</tspan><tspan x="65.368" y="0">olunteer</tspan></text>
      </g>
      <text transform="translate(1011.906 1418.697)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2013</text>
    </g>
    <g id="time12">
      <text transform="translate(1040.488 1517.574)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 years</text>
      <g>
        <circle cx="1008.279" cy="1511.514" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1016.912" y1="1501.366" x2="1008.279" y2="1511.514" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1000.879" y1="1506.44" x2="1008.279" y2="1511.514" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer11">
    <rect id="boxg11" x="795.678" y="1215.808" width="360" height="105" rx="13.785" transform="translate(1951.357 2536.616) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg11_1">
      <g>
        <line x1="1186.017" y1="1233.447" x2="1137.406" y2="1233.447" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <circle cx="1137.406" cy="1233.448" r="13.855" transform="matrix(0.585, -0.811, 0.811, 0.585, -528.272, 1434.95)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg11">
      <text transform="translate(1010.731 1255.631)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2017</text>
      <text transform="translate(941.259 1313.42)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">C. NEGRUZZI | IASI</text>
      <text id="title11_red" transform="translate(804.679 1287.792)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.05000370762818464em">High school graduation </text>
    </g>
    <g id="time11">
      <text transform="translate(1029.561 1347.821)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">12 years</text>
      <g>
        <circle cx="994.113" cy="1342.485" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1002.746" y1="1332.337" x2="994.113" y2="1342.485" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="986.712" y1="1337.411" x2="994.113" y2="1342.485" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer10">
    <rect id="boxg10" x="1238.211" y="1027.2" width="250" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg10_1">
      <g>
        <line x1="1211.269" y1="1058.605" x2="1256.483" y2="1058.605" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1256.483,1072.46a13.855,13.855,0,1,0-13.855-13.855A13.857,13.857,0,0,0,1256.483,1072.46Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg10">
      <text transform="translate(1279.546 1074.475)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2018</text>
      <text id="title10_red" transform="translate(1278.546 1110.346)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.04000290961019173em">ALLPLAN courses</text>
    </g>
    <g id="time10">
      <text transform="translate(1321.883 1167.085)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="1292.583" cy="1159.026" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1301.215" y1="1148.878" x2="1292.583" y2="1159.026" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1285.182" y1="1153.952" x2="1292.583" y2="1159.026" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer9">
    <rect id="boxg9" x="738.974" y="981.726" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg9_1">
      <g>
        <line x1="1188.883" y1="1003.472" x2="1081.384" y2="1003.472" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1081.384,989.617a13.855,13.855,0,1,0,13.855,13.855A13.856,13.856,0,0,0,1081.384,989.617Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg9">
      <text transform="translate(971.937 1020.321)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2019</text>
      <text id="title9_red" transform="translate(747.932 1051.741)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">NEME<tspan x="85.243" y="0" style="letter-spacing: -0.009771366720003052em">T</tspan><tspan x="101.734" y="0" xml:space="preserve">SCHEK  contest</tspan></text>
      <text transform="translate(772.231 1074.061)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">1<tspan x="10.569" y="0" style="letter-spacing: -0.00975584539780171em">S</tspan><tspan x="20.794" y="0" xml:space="preserve">T prize winner  of Lumion video</tspan></text>
    </g>
    <g id="time9">
      <text transform="translate(979.902 1119.522)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">3 months</text>
      <g>
        <circle cx="950.822" cy="1111.463" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="959.455" y1="1101.315" x2="950.822" y2="1111.463" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="943.421" y1="1106.389" x2="950.822" y2="1111.463" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer8">
    <rect id="boxg8" x="1301.644" y="751.98" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg8_1">
      <g>
        <polyline points="1318.616 775.234 1202.21 775.234 1202.21 822.143" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1318.616,761.379a13.855,13.855,0,1,1-13.855,13.855A13.856,13.856,0,0,1,1318.616,761.379Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg8">
      <text id="title8_red" transform="translate(1336.033 788.649)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan xml:space="preserve">Wienerberger  contest</tspan></text>
      <text transform="translate(1336.033 813.421)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.030017985839389884em">3rd prize winner for Collective<tspan x="240.483" y="0" style="font-size: 32.073631286621094px;letter-spacing: -0.03000222457691078em"> </tspan><tspan x="248.307" y="0">housing</tspan></text>
      <text transform="translate(1336.033 840.464)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">oct-ian</text>
    </g>
    <g id="time8">
      <text transform="translate(1382.255 891.979)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">3 months</text>
      <g>
        <circle cx="1352.955" cy="883.92" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1361.587" y1="873.772" x2="1352.955" y2="883.92" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1345.554" y1="878.846" x2="1352.955" y2="883.92" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer7">
    <rect id="boxg7" x="795.678" y="801.546" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg7_1">
      <g>
        <polyline points="1188.883 729.006 1188.883 821.461 1137.406 821.461" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <circle cx="1137.406" cy="821.461" r="13.855" transform="matrix(0.949, -0.316, 0.316, 0.949, -201.401, 401.834)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg7">
      <text transform="translate(1003.289 838.666)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2020</text>
      <text id="title7_red" transform="translate(866.825 870.781)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.02000148305127385em">D.A.S. Arch. office</text>
      <text transform="translate(1020.488 896.023)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03299902152937919em">jan-july</text>
    </g>
    <g id="time7">
      <text transform="translate(1019.011 941.003)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="994.113" cy="935.666" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1002.746" y1="925.518" x2="994.113" y2="935.666" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="986.712" y1="930.592" x2="994.113" y2="935.666" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer6">
    <rect id="boxg6" x="1236.715" y="605.877" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg6_1">
      <g>
        <polyline points="1254.987 625.989 1202.21 625.989 1202.21 533.534" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1254.987,612.134a13.855,13.855,0,1,1-13.855,13.855A13.856,13.856,0,0,1,1254.987,612.134Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg6">
      <text transform="translate(1286.049 642.231)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2021</text>
      <text id="title6_red" transform="translate(1289.09 676.611)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.040033549409965556em">P<tspan x="16.68" y="0" style="letter-spacing: -0.02000148305127385em">oint Arch. office</tspan></text>
      <text transform="translate(1289.09 701.869)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">oct-march</text>
    </g>
    <g id="time6">
      <text transform="translate(1320.387 742.464)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="1291.087" cy="734.405" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1299.719" y1="724.257" x2="1291.087" y2="734.405" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1283.686" y1="729.331" x2="1291.087" y2="734.405" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer5">
    <rect id="boxg5" x="905.678" y="478.01" width="250" height="105" rx="13.785" transform="translate(2061.357 1061.02) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg5_1">
      <g>
        <line x1="1186.017" y1="501.221" x2="1137.406" y2="501.221" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <circle cx="1137.406" cy="501.221" r="13.855" transform="translate(-105.229 473.421) rotate(-22.5)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg5">
      <text id="title5_red" transform="translate(945.884 513.467)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.0300021822076438em">Monuments <tspan x="10.409" y="26.134">Ambulance</tspan></text>
      <text transform="translate(1020.488 566.603)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03299902152937919em">jan-july</text>
    </g>
    <g id="time5">
      <text transform="translate(1032.256 618.609)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">2 weeks</text>
      <g>
        <circle cx="1008.279" cy="613.272" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1016.912" y1="603.124" x2="1008.279" y2="613.272" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1000.879" y1="608.198" x2="1008.279" y2="613.272" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer4">
    <rect id="boxg4" x="1236.715" y="420.268" width="250" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg4_1">
      <g>
        <polyline points="1202.21 428.686 1202.21 443.479 1254.987 443.479" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1254.987,457.334a13.855,13.855,0,1,0-13.855-13.855A13.856,13.856,0,0,0,1254.987,457.334Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg4">
      <text transform="translate(1286.049 459.259)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2022</text>
      <text id="title4_red" transform="translate(1289.09 491.841)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030011625147793847em"><tspan xml:space="preserve">G.R.S.  office</tspan></text>
      <text transform="translate(1289.09 513.761)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">aug-sept</text>
    </g>
    <g id="time4">
      <text transform="translate(1320.387 558.667)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">1 month practice</text>
      <g>
        <circle cx="1291.087" cy="550.607" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1299.719" y1="540.459" x2="1291.087" y2="550.607" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1283.686" y1="545.533" x2="1291.087" y2="550.607" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer15">
    <rect id="boxg15_2" x="1301.644" y="1215.808" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <rect id="boxg15_1" x="848.974" y="291.81" width="250" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg15_1">
      <g>
        <polyline points="1318.616 1233.447 1196.294 1233.447 1196.295 315.968 1081.384 315.968" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1318.616,1219.593a13.855,13.855,0,1,1-13.855,13.854A13.856,13.856,0,0,1,1318.616,1219.593Z" style="fill: #fff"/>
        <path d="M1081.384,302.113a13.855,13.855,0,1,0,13.855,13.855A13.856,13.856,0,0,0,1081.384,302.113Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg15">
      <text id="title14_red" transform="translate(1336.034 1283.68)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan style="letter-spacing: -0.044923061541980724em">F</tspan><tspan x="13.824" y="0">aculty of Architecture</tspan></text>
      <text transform="translate(1336.033 1309.992)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">G.M. CAN<tspan x="84.38" y="0" style="letter-spacing: -0.035171073408485146em">T</tspan><tspan x="93.962" y="0" style="letter-spacing: -0.015109052872492909em">A</tspan><tspan x="106.313" y="0">CUZINO | IASI</tspan></text>
      <text transform="translate(965.445 332.057)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2023</text>
      <text transform="translate(892.361 384.754)" style="font-size: 20.551179885864258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">Head of promotion</text>
      <text id="title15_red" transform="translate(871.972 360.854)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.014927165757471886em">V<tspan x="18.901" y="0" style="letter-spacing: 0.030011625147793847em">aledictorian</tspan></text>
    </g>
    <g id="time15">
      <text transform="translate(1001.379 427.994)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 years</text>
      <g>
        <circle cx="969.17" cy="421.934" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="977.803" y1="411.787" x2="969.17" y2="421.934" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="961.77" y1="416.861" x2="969.17" y2="421.934" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer2">
    <rect id="boxg2" x="1300.148" y="190.437" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg2_1">
      <g>
        <polyline points="1317.12 212.912 1202.21 212.959 1202.21 307.157" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1317.114,199.057a13.855,13.855,0,1,1-13.849,13.86A13.856,13.856,0,0,1,1317.114,199.057Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg2">
      <text transform="translate(1335.93 230.798)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2024</text>
      <text id="title2_red" transform="translate(1334.537 263.852)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Albendiego office</text>
      <text transform="translate(1334.537 285.771)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">nov-nov</text>
    </g>
    <g id="time2">
      <text transform="translate(1380.759 329.383)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">1 year</text>
      <g>
        <circle cx="1351.459" cy="321.324" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1360.091" y1="311.176" x2="1351.459" y2="321.324" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="1344.058" y1="316.25" x2="1351.459" y2="321.324" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer1">
    <rect id="boxg1" x="738.356" y="81.883" width="360" height="105" rx="13.785" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg1_1">
      <g>
        <polyline points="1196.294 307.157 1196.294 105.139 1081.384 105.139" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.68503937007874px"/>
        <path d="M1081.384,91.284a13.855,13.855,0,1,0,13.855,13.855A13.856,13.856,0,0,0,1081.384,91.284Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg1">
      <text transform="translate(965.445 123.063)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2025</text>
      <text id="title1_red" transform="translate(747.779 151.416)" style="font-size: 29.76378059387207px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03000712850920933em">Hobby - Code learning</text>
      <text transform="translate(762.168 175.178)" style="font-size: 20.551179885864258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">2 websites &amp; this current example</text>
    </g>
    <g id="time1">
      <text transform="translate(951.689 222.178)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">... till present</text>
      <g>
        <circle cx="920.38" cy="214.119" r="14.166" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="929.013" y1="203.971" x2="920.38" y2="214.119" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="912.979" y1="209.045" x2="920.38" y2="214.119" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
</svg>
`;

const softSkillsSVG = `<svg id="soft-skills" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Your soft skills SVG content here -->
</svg>`;

//#endregion

//#region 2.Global Variables

// Show page only after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
  } catch (err) {
    console.error('Error setting body visibility:', err);
  }
});

// Set the worker source for pdfjs-dist
try {
  GlobalWorkerOptions.workerSrc = '/Portofoliu-FurduNicole/assets/pdfjs/pdf.worker.mjs';
} catch (err) {
  console.error('Error setting PDF worker source:', err);
}

// Toggle SVG/PDF 
function hideAllPdfContainers() {
  try {
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
  } catch (err) {
    console.error('Error in hideAllPdfContainers:', err);
  }
}

function hideAllSvgContainers() {
  try {
    const interactiveContainer = document.querySelector('.interactive-container');
    if (interactiveContainer) {
      interactiveContainer.classList.remove('active');
      interactiveContainer.style.removeProperty('visibility');
      interactiveContainer.style.removeProperty('opacity');
      interactiveContainer.style.removeProperty('pointer-events');
      interactiveContainer.innerHTML = '';
    }
    hideCheckpointAnimation(); // <-- Hide checkpoint when SVG is hidden
  } catch (err) {
    console.error('Error in hideAllSvgContainers:', err);
  }
}

// Insert the loading-eye.svg from string
function insertLoadingEyeSVG() {
  try {
    if (!loadingEyeSVG) throw new Error('Loading eye SVG string is empty');
    
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(loadingEyeSVG, 'image/svg+xml');
    if (svgDoc.querySelector('parsererror')) {
      throw new Error('SVG parsing error');
    }
    
    const loadingSpinner = document.querySelector('#loading-spinner');
    if (!loadingSpinner) throw new Error('Loading spinner element not found');
    
    loadingSpinner.innerHTML = '';
    loadingSpinner.appendChild(svgDoc.documentElement);
    if (svgDoc.documentElement) {
      startLoadingAnimation(svgDoc.documentElement);
    }
  } catch (err) {
    console.error('Error inserting loading SVG:', err);
  }
}

// Example fix
const svg = document.getElementById('loading-spinner');
if (svg) {
  const loadingElements = svg.querySelectorAll('[id^="loading"]');
  // ...rest of your code...
} else {
  console.error('SVG loading spinner not found!');
}


// Function to start the loading animation
function startLoadingAnimation(svgElement) {
  try {
    if (!svgElement) {
      throw new Error('SVG element is null in startLoadingAnimation');
    }
    const loadingElements = svgElement.querySelectorAll('[id^="loading"]');
    if (!loadingElements.length) {
      throw new Error('No loading elements found in SVG');
    }
    let index = 0;

    function animateNext() {
      try {
        if (index < loadingElements.length) {
          const element = loadingElements[index];
          if (!element) throw new Error(`Loading element at index ${index} not found`);
          
          element.style.transition = 'opacity 0.5s ease';
          element.style.opacity = '1';
          index++;

          setTimeout(animateNext, 500);
        }
      } catch (err) {
        console.error('Error in loading animation step:', err);
      }
    }

    animateNext();
  } catch (err) {
    console.error('Error in startLoadingAnimation:', err);
  }
}

// Function to reset the loading animation
function resetLoadingAnimation() {
  try {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (!loadingSpinner) throw new Error('Loading spinner not found');
    
    const svg = loadingSpinner.querySelector('svg');
    if (!svg) throw new Error('SVG element not found in loading spinner');
    
    const loadingElements = svg.querySelectorAll('[id^="loading"]');
    loadingElements.forEach(el => {
      try {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s';
      } catch (err) {
        console.error('Error resetting loading element:', err);
      }
    });
  } catch (err) {
    console.error('Error in resetLoadingAnimation:', err);
  }
}

//#endregion

//#region 3.Effects & functions for content files

// Function to insert SVG from string
function insertSVGFromString(svgString, containerSelector, callback) {
  try {
    if (!svgString) throw new Error('SVG string is empty');
    
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    if (svgDoc.querySelector('parsererror')) {
      throw new Error('SVG parsing error');
    }
    
    const container = document.querySelector(containerSelector);
    if (!container) throw new Error(`Container ${containerSelector} not found`);

    container.innerHTML = '';
    const svgElement = svgDoc.documentElement;
    container.appendChild(svgElement);
    if (callback) callback(svgElement);
  } catch (err) {
    console.error('Error inserting SVG:', err);
  }
}

function addHoverEffects(svgElement) {
  try {
    const hoverTargets = [
      { layer: 'HARD-SKILLS', buttonId: 'Pana_roz_button1', textId: 'text1' },
      { layer: 'PROFESSIONAL', buttonId: 'Pana_roz_button2', textId: 'text2' },
      { layer: 'CV', buttonId: 'Pana_roz_button3', textId: 'text3' },
      { layer: 'ACADEMIC', buttonId: 'Pana_roz_button4', textId: 'text4' },
      { layer: 'SOFT-SKILLS', buttonId: 'Pana_roz_button5', textId: 'text5' },
    ];

    hoverTargets.forEach((target) => {
      try {
        // Scope to the correct layer group
        const layerGroup = svgElement.querySelector(`#${target.layer}`);
        if (!layerGroup) throw new Error(`Layer group ${target.layer} not found`);

        // Find button by id or id^= (to match -2, etc)
        const buttonElement = layerGroup.querySelector(`[id^="${target.buttonId}"]`);
        const textElement = layerGroup.querySelector(`#${target.textId}`);

        if (!buttonElement || !textElement) {
          throw new Error(`Elements not found for target: ${JSON.stringify(target)}`);
        }

        // Store original styles
        const originalButtonFill = buttonElement.getAttribute('fill') || getComputedStyle(buttonElement).fill;
        const originalTextFill = textElement.getAttribute('fill') || getComputedStyle(textElement).fill;
        const originalFontWeight = textElement.style.fontWeight || '';
        const originalFontFamily = textElement.style.fontFamily || '';

        // Hover state counter for both elements
        let hoverCount = 0;
        const applyHoverStyles = () => {
          buttonElement.style.transition = 'fill 0.3s ease';
          buttonElement.style.fill = '#e3125f';
          textElement.style.transition = 'fill 0.3s ease';
          textElement.style.fill = '#ffca31';
          textElement.style.fontFamily = 'Segoe UI';
          textElement.style.fontWeight = 'bold';
        };
        const resetHoverStyles = () => {
          buttonElement.style.fill = originalButtonFill;
          textElement.style.fill = originalTextFill;
          textElement.style.fontWeight = originalFontWeight;
          textElement.style.fontFamily = originalFontFamily;
        };
        const onEnter = () => { hoverCount++; if (hoverCount === 1) applyHoverStyles(); };
        const onLeave = () => { hoverCount--; if (hoverCount === 0) resetHoverStyles(); };

        buttonElement.addEventListener('mouseenter', onEnter);
        buttonElement.addEventListener('mouseleave', onLeave);
        textElement.addEventListener('mouseenter', onEnter);
        textElement.addEventListener('mouseleave', onLeave);

        // Click events for both button and text (trigger the button's click handler)
        textElement.addEventListener('click', (e) => {
          e.stopPropagation();
          buttonElement.dispatchEvent(new Event('click', { bubbles: true }));
        });

      } catch (err) {
        console.error('Error setting up hover effects for target:', target, err);
      }
    });
  } catch (err) {
    console.error('Error in addHoverEffects:', err);
  }
}

// Function to attach button events
function attachButtonEvents(svgElement) {
  try {
    const svgButtons = [
      { layer: 'HARD-SKILLS', id: 'Pana_roz_button1', action: () => { 
        try { CVfunction('hard-skills', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button1 action:', err); }
      }},
      { layer: 'PROFESSIONAL', id: 'Pana_roz_button2', action: () => { 
        try { showPDF('professional.pdf', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button2 action:', err); }
      }},
      { layer: 'CV', id: 'Pana_roz_button3', action: () => { 
        try { CVfunction('cv', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button3 action:', err); }
      }},
      { layer: 'ACADEMIC', id: 'Pana_roz_button4', action: () => { 
        try { showPDF('academic.pdf', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button4 action:', err); }
      }},
      { layer: 'SOFT-SKILLS', id: 'Pana_roz_button5', action: () => { 
        try { CVfunction('soft-skills', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button5 action:', err); }
      }},
      { layer: null, id: 'HOME-BUTTON', action: () => {
        try { handleHomeButtonClick(svgElement); } catch (err) { console.error('Error in HOME-BUTTON action:', err); }
      }}
    ];

    svgButtons.forEach((button) => {
      try {
        let buttonElement;
        if (button.layer) {
          const layerGroup = svgElement.querySelector(`#${button.layer}`);
          if (!layerGroup) throw new Error(`Layer group ${button.layer} not found`);
          buttonElement = layerGroup.querySelector(`[id^="${button.id}"]`);
        } else {
          buttonElement = svgElement.querySelector(`#${button.id}`);
        }
        if (!buttonElement) {
          throw new Error(`Button with ID ${button.id} not found in the SVG.`);
        }
        buttonElement.style.cursor = 'pointer';
        buttonElement.addEventListener('click', button.action);
      } catch (err) {
        console.error(`Error setting up button ${button.id}:`, err);
      }
    });
  } catch (err) {
    console.error('Error in attachButtonEvents:', err);
  }
}

// Function to handle the "HOME-BUTTON" 
function handleHomeButtonClick(svgElement) {
  try {
    console.log("Home button clicked. Hiding containers, reversing fog, and performing soft reset...");

    hideAllSvgContainers();
    hideAllPdfContainers();

    reverseFogEffect(svgElement, () => {
      try {
        console.log("Reverse fog effect completed. Performing soft reset...");
        const contentContainer = document.getElementById('content-container');
        if (contentContainer) {
          contentContainer.innerHTML = '';
        }

        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
          loadingOverlay.style.visibility = 'hidden';
          loadingOverlay.style.opacity = '0';
        }

        console.log("Soft reset completed. Reloading the page...");
        setTimeout(() => {
          try {
            location.reload();
          } catch (err) {
            console.error('Error reloading page:', err);
          }
        }, 500);
      } catch (err) {
        console.error('Error in reverse fog callback:', err);
      }
    });
  } catch (err) {
    console.error('Error in handleHomeButtonClick:', err);
  }
}

// Function to reset the page state
function resetPageState(svgElement) {
  try {
    showLoadingOverlay();

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

    reverseFogEffect(svgElement, () => {
      try {
        hideLoadingOverlay();
        attachButtonEvents(svgElement);
      } catch (err) {
        console.error('Error in resetPageState callback:', err);
      }
    });
  } catch (err) {
    console.error('Error in resetPageState:', err);
  }
}

// Function to show the loading overlay
function showLoadingOverlay() {
  try {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) throw new Error('Loading overlay element not found');
    
    loadingOverlay.style.visibility = 'visible';
    loadingOverlay.style.opacity = '1';
  } catch (err) {
    console.error('Error in showLoadingOverlay:', err);
  }
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
  try {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (!loadingOverlay) throw new Error('Loading overlay element not found');
    
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      try {
        loadingOverlay.style.visibility = 'hidden';
      } catch (err) {
        console.error('Error in hideLoadingOverlay timeout:', err);
      }
    }, 300);
  } catch (err) {
    console.error('Error in hideLoadingOverlay:', err);
  }
}


// Function to trigger the fog effect
function triggerFogEffect(svgElement) {
  try {
    const fogLayers = svgElement.querySelectorAll('[id^="blockcolor"]');
    if (!fogLayers.length) throw new Error('No fog layers found');

    fogLayers.forEach((layer, index) => {
      try {
        const group = layer.querySelector('g');
        if (!group) throw new Error('Group element not found in fog layer');
        
        const delay = index * 250;
        setTimeout(() => {
          try {
            group.style.transition = 'opacity 1s ease';
            group.style.opacity = '0.35';
          } catch (err) {
            console.error('Error setting fog layer opacity:', err);
          }
        }, delay);
      } catch (err) {
        console.error('Error processing fog layer:', err);
      }
    });
  } catch (err) {
    console.error('Error in triggerFogEffect:', err);
  }
}

// Function to reverse the fog effect
function reverseFogEffect(svgElement, callback) {
  try {
    showLoadingOverlay();
    resetLoadingAnimation();

    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
      const svg = loadingSpinner.querySelector('svg');
      if (svg) {
        startLoadingAnimation(svg);
      }
    }

    const fogLayers = Array.from(svgElement.querySelectorAll('[id^="blockcolor"]')).reverse();
    if (!fogLayers.length) throw new Error('No fog layers found for reversal');

    let completedLayers = 0;

    fogLayers.forEach((layer, index) => {
      try {
        const group = layer.querySelector('g');
        if (!group) throw new Error('Group element not found in fog layer');
        
        const delay = index * 250;
        setTimeout(() => {
          try {
            group.style.transition = 'opacity 1s ease';
            group.style.opacity = '0';

            completedLayers++;
            if (completedLayers === fogLayers.length) {
              hideLoadingOverlay();
              if (callback) callback();
            }
          } catch (err) {
            console.error('Error in fog layer reversal:', err);
          }
        }, delay);
      } catch (err) {
        console.error('Error processing fog layer for reversal:', err);
      }
    });
  } catch (err) {
    console.error('Error in reverseFogEffect:', err);
  }
}








//#endregion

//#region 4.Parsing content files 

// PDF FILE HANDLING - Flipbook Integration
async function showPDF(pdfFile) {
  try {
    const pdfContainer = document.querySelector('.pdf-container');
    const flipbookContainer = document.getElementById('flipbook');
    if (!pdfContainer || !flipbookContainer) {
      throw new Error('PDF container or flipbook not found');
    }

    hideAllSvgContainers();
    showLoadingOverlay();

    // Insert the loading-eye.svg if not already present
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner && !loadingSpinner.querySelector('svg')) {
      insertLoadingEyeSVG();
    }

    resetLoadingAnimation();

    const loadingElements = svg ? svg.querySelectorAll('[id^="loading"]') : [];
    const totalSteps = loadingElements.length;
    let currentStep = 0; // <-- Add this line

    // Helper to update loading elements based on progress (0 to 1)
    function updateLoadingProgress(progress) {
      const activeCount = Math.floor(progress * totalSteps);
      loadingElements.forEach((el, idx) => {
        el.style.opacity = idx < activeCount ? '1' : '0';
      });
    
    }

    try {
      flipbookContainer.innerHTML = '';
      const pdfPath = `${import.meta.env.BASE_URL}pdfs/${pdfFile}`;
      const loadingTask = getDocument(pdfPath);
      const pdfDoc = await loadingTask.promise;

      const numPages = pdfDoc.numPages;
      const stepDuration = Math.max(100, 1000 / Math.max(numPages, totalSteps));

      const pageImages = [];
      for (let i = 1; i <= numPages; i++) {
        try {
          const page = await pdfDoc.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
          pageImages.push(canvas.toDataURL());

          // Update loading animation progress
          updateLoadingProgress(i / numPages);

          await new Promise(res => setTimeout(res, stepDuration));
        } catch (err) {
          console.error(`Error rendering page ${i}:`, err);
        }
      }

      pageImages.forEach((src) => {
        try {
          const pageDiv = document.createElement('div');
          pageDiv.className = 'page';
          const img = document.createElement('img');
          img.src = src;
          img.style.width = '100%';
          img.style.height = '100%';
          pageDiv.appendChild(img);
          flipbookContainer.appendChild(pageDiv);
        } catch (err) {
          console.error('Error creating page element:', err);
        }
      });

      const addBlankAtEnd = false; // set to true if you want a blank at the end
if (addBlankAtEnd && pageImages.length % 2 !== 0) {
  const blankDiv = document.createElement('div');
  blankDiv.className = 'page';
  flipbookContainer.appendChild(blankDiv);
}

      setTimeout(() => {
        try {
          pdfContainer.classList.add('active');
          hideLoadingOverlay();
        } catch (err) {
          console.error('Error finalizing PDF display:', err);
        }
      }, 100);

      try {
        // Responsive page size based on viewport width
        let pageWidth, pageHeight;
        if (window.innerWidth < 700) {
          // Use most of the viewport, but keep a minimum for readability
          pageWidth = Math.max(window.innerWidth * 0.95, 320);  // 95vw, min 320px
          pageHeight = Math.max(window.innerHeight * 0.65, 400); // 80vh, min 400px
        } else {
          pageWidth = 700;   // or whatever you want for desktop
          pageHeight = 900;
        }

        const pageFlip = new PageFlip(flipbookContainer, {
          size: 'fixed',
          width: pageWidth ,
          height: pageHeight,
          maxShadowOpacity: 0.5,
          showCover: false,
          mobileScrollSupport: true,
        });
        pageFlip.loadFromHTML(document.querySelectorAll('#flipbook .page'));
      } catch (err) {
        console.error('Error initializing PageFlip:', err);
      }

    } catch (error) {
      console.error('Error loading or rendering PDF:', error);
      hideLoadingOverlay();
    }
  } catch (err) {
    console.error('Error in showPDF:', err);
    hideLoadingOverlay();
  }
}

// CV SVG FILE HANDLING - Svg strings
async function CVfunction(svgType) {
  const interactiveContainer = document.querySelector('.interactive-container');
  if (!interactiveContainer) {
    hideLoadingOverlay();
    return;
  }



  function addCvSvgHoverEffects(svgElement) {
    const groupNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15];
    const isMobile = window.innerWidth < 800 || /Mobi|Android/i.test(navigator.userAgent);

    groupNumbers.forEach((num) => {
      // Select the group, text group, and box elements
      const group = svgElement.querySelector(`#Layer${num}`);
      const textGroup = svgElement.querySelector(`#textg${num}`);
      let box = svgElement.querySelector(`#boxg${num}`);
      const lineg = svgElement.querySelector(`#lineg${num}`, `#lineg${num}_${num}`);

      const timeGroup = svgElement.querySelector(`#time${num}`); // Select the time group
  
      // Handle multiple boxes for group 3
      let boxes = [];
      if (num === 3) {
        const box1 = svgElement.querySelector(`#boxg15_1`);
        const box2 = svgElement.querySelector(`#boxg15_2`);
        boxes = [box1, box2].filter(Boolean);
      } else if (box) {
        boxes = [box];
      }
  
      // Apply initial styles to boxes
      boxes.forEach((b) => {
        b.classList.add('boxg-style'); // Add the predefined CSS class
      });
  
      // Add hover effects
      boxes.forEach((b) => {
        b.addEventListener('mouseenter', () => {
          b.classList.add('boxg-hover'); // Add hover effect class
        });
  
        b.addEventListener('mouseleave', () => {
          b.classList.remove('boxg-hover'); // Remove hover effect class
        });
      });

      // Collect red text elements
      let redTexts = [];
      if (textGroup) {
        if (num === 3) {
          const t1 = textGroup.querySelector('#title14_red');
          const t2 = textGroup.querySelector('#title15_red');
          if (t1) redTexts.push(t1);
          if (t2) redTexts.push(t2);
  
          // Add mutual hover effects for title3_red and title3-1_red
          // Store original fill
          const originalFills = [t1?.getAttribute('fill') || t1?.style.fill, t2?.getAttribute('fill') || t2?.style.fill];

          [t1, t2].forEach((el, i, siblings) => {
            if (!el) return;

            el.addEventListener('mouseenter', () => {
              siblings.forEach((sibling) => {
                if (sibling) sibling.style.fill = '#ab2726';
              });
            });

            el.addEventListener('mouseleave', () => {
              siblings.forEach((sibling, j) => {
                if (sibling) sibling.style.fill = originalFills[j] || '';
              });
            });
          });
        } else {
          textGroup.querySelectorAll('[id$="_red"]').forEach((el) => {
            if (el.tagName.toLowerCase() === 'g') {
              const t = el.querySelector('text');
              if (t) redTexts.push(t);
            } else {
              redTexts.push(el);
            }
          });
        }
      }
  
      // --- MOBILE: Always red and always show time group ---
      if (isMobile) {
        redTexts.forEach((el) => {
          el.style.fill = '#8e0000';
        });
        if (timeGroup) {
          timeGroup.style.opacity = '1';
          timeGroup.style.filter = 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))';
          

        }
      }



        // After collecting redTexts, add links to specific title*_red elements
        const redTextLinks = {
          title1_red: "https://github.com/LammergeierFerekt",
          title2_red: "https://albendiego.ro/",
          title15_red: "https://arh.tuiasi.ro/wp-content/uploads/2023/07/Comisia-1-note-Diploma.pdf",
          title14_red: "https://arh.tuiasi.ro/",
          title5_red: "http://ambulanta-pentru-monumente.ro/",
          title6_red: "https://pointdb.ro/",
          title7_red: "https://www.digitalarchitecture-studio.com/",
          title8_red: "https://www.wienerberger.ro/despre-noi/noutati/concursul-de-proiecte-blocks.html",
          title9_red: "https://youtu.be/p1wqRzSiETA?si=xk0O1bazpQ4zCclY",
          title10_red: "https://model.allbim.net/educational/cursuri/",
          title11_red: "https://ro.wikipedia.org/wiki/Colegiul_Na%C8%9Bional_%E2%80%9ECostache_Negruzzi%E2%80%9D_din_Ia%C8%99i",
          title12_red: "https://scout.ro/"
        };

      
        redTexts.forEach((el) => {
          let id = el.id;
          if (redTextLinks[id]) {
            // Make sure it's clickable and pointer
            el.style.cursor = 'pointer';
            el.style.pointerEvents = 'all';

            // Desktop: underline on hover, open on click
            el.addEventListener('mouseenter', () => {
              el.style.textDecoration = 'underline';
              el.setAttribute('text-decoration', 'underline');
            });
            el.addEventListener('mouseleave', () => {
              el.style.textDecoration = '';
              el.setAttribute('text-decoration', '');
            });
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              window.open(redTextLinks[id], '_blank');
            });

            // Mobile: underline on touch, open on touchend
            el.addEventListener('touchstart', (e) => {
              el.style.textDecoration = 'underline';
              el.setAttribute('text-decoration', 'underline');
              // Open link immediately on touchstart for best compatibility
              window.open(redTextLinks[id], '_blank');
              e.preventDefault();
              e.stopPropagation();
            }, {passive: false});
            el.addEventListener('touchend', (e) => {
              el.style.textDecoration = '';
              el.setAttribute('text-decoration', '');
              e.preventDefault();
              e.stopPropagation();
            }, {passive: false});
          }
          // If it's a <g> with a <text> child, also attach to the <text>
          if (el.tagName && el.tagName.toLowerCase() === 'g') {
            const t = el.querySelector('text');
            if (t) {
              t.style.cursor = 'pointer';
              t.style.pointerEvents = 'all';
              t.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(redTextLinks[id], '_blank');
              });
              t.addEventListener('mouseenter', () => {
                t.style.textDecoration = 'underline';
                t.setAttribute('text-decoration', 'underline');
              });
              t.addEventListener('mouseleave', () => {
                t.style.textDecoration = '';
                t.setAttribute('text-decoration', '');
              });
              t.addEventListener('touchstart', () => {
                t.style.textDecoration = 'underline';
                t.setAttribute('text-decoration', 'underline');
              }, {passive: true});
              t.addEventListener('touchend', (e) => {
                t.style.textDecoration = '';
                t.setAttribute('text-decoration', '');
                window.open(redTextLinks[id], '_blank');
                e.stopPropagation();
              }, {passive: false});
            }
          }
        });

      // Collect all lineg elements for this group (supports linegX, lineg_X, linegy_X, etc)
      let linegElements = [];
      if (lineg) linegElements.push(lineg);

      // Optionally, add more selectors if you want to support more variants
      const extraSelectors = [
        `#lineg1_2`,
        `#lineg${num}_1`,
  
      ];
      extraSelectors.forEach(sel => {
        const el = svgElement.querySelector(sel);
        // Avoid duplicates
        if (el && !linegElements.includes(el)) linegElements.push(el);
      });

      // Collect all strokable elements and their original strokes for this group
      const allStrokables = [];
      const allOriginalStrokes = [];
      const allOriginalFills = [];
      linegElements.forEach((el) => {
        const strokables = el.querySelectorAll('line, polyline, polygon, path, rect, circle, ellipse');
        allStrokables.push(...strokables);
        allOriginalStrokes.push(...Array.from(strokables).map(child =>
          child.getAttribute('stroke') || child.style.stroke || ''
         ));
        allOriginalFills.push(...Array.from(strokables).map(child =>
          child.getAttribute('fill') || child.style.fill || ''
        ));

      });

      // Store original styles
      const originalTextColors = redTexts.map(
        (el) => el.getAttribute('fill') || el.style.fill || ''
      );
      const originalBoxOpacities = boxes.map(
        (b) => b.getAttribute('opacity') || b.style.opacity || ''
      );
      const originalBoxFilters = boxes.map((b) => b.style.filter || '');
  
      // --- MOVEMENT EFFECT ---
      if (group) {
        group.style.transition = 'transform 0.4s cubic-bezier(.4,1.4,.4,1)';
      }
  
      // ...inside addCvSvgHoverEffects(svgElement)...
      // Prevent lineg elements from triggering group hover
      linegElements.forEach(linegEl => {
        if (!linegEl) return;
        linegEl.addEventListener('mouseenter', (e) => {
          e.stopPropagation();
          resetHover();
        });
        linegEl.addEventListener('mousemove', (e) => {
          e.stopPropagation();
          resetHover();
        });
      });

      // Prevent timeg elements from triggering group hover
      if (timeGroup) {
        timeGroup.addEventListener('mouseenter', (e) => {
          e.stopPropagation();
          resetHover();
        });
        timeGroup.addEventListener('mousemove', (e) => {
          e.stopPropagation();
          resetHover();
        });
      }

      // Only trigger hover on group if NOT over a lineg or timeg element
      if (group) {
        function isInsideLinegOrTimeg(event) {
          const overLineg = linegElements.some(linegEl => linegEl && (linegEl === event.target || linegEl.contains(event.target)));
          const overTimeg = timeGroup && (timeGroup === event.target || timeGroup.contains(event.target));
          return overLineg || overTimeg;
        }
        group.addEventListener('mouseenter', (e) => {
          if (!isInsideLinegOrTimeg(e)) applyHover();
        });
        group.addEventListener('mousemove', (e) => {
          if (isInsideLinegOrTimeg(e)) {
            resetHover();
          } else {
            applyHover();
          }
        });
        group.addEventListener('mouseleave', resetHover);
      }




      // --- SVG.VG MOVEMENT EFFECTS ---
      function applyHover() {
        redTexts.forEach((el) => {
          el.style.transition = 'fill 0.2s';
          el.style.fill = '#8e0000';
        });
        boxes.forEach((b, i) => {
          b.style.opacity = originalBoxOpacities[i] || '1';
        });
        if (group) group.style.transform = 'translate(6px, 6px)';
  
        // Make the time group visible
        if (timeGroup) {
          timeGroup.style.transition = 'opacity 0.4s ease';
          timeGroup.style.opacity = '1';
          timeGroup.style.filter = 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))'; // Add shadow drop

        }

        // Set stroke color and glow for all lines in this group
        allStrokables.forEach(child => {
          child.style.stroke = '#ffffff';
          // Add SVG glow filter
          child.style.filter = 'drop-shadow(0 0 10px rgb(255, 217, 93))';
          if (child.tagName === 'polygon' || child.tagName === 'path' || child.tagName === 'circle') {
            child.style.fill = '#ffffff';
          }
        });
      }
  
      function resetHover() {
        redTexts.forEach((el, i) => {
          el.style.fill = originalTextColors[i];
        });
        boxes.forEach((b, i) => {
          b.style.opacity = originalBoxOpacities[i] || '1';
          b.style.filter = originalBoxFilters[i] || '';
        });
        if (group) group.style.transform = '';
        group.style.filter = group.dataset.defaultFilter || 'drop-shadow(10px 10px 10px rgba(0,0,0,0.25))';
        
  
        // Make the time group invisible
        if (timeGroup) {
          timeGroup.style.transition = 'opacity 0.4s ease';
          timeGroup.style.opacity = '0';
        }

        // Reset stroke, fill, and remove glow filter for all lines in this group
        allStrokables.forEach((child, i) => {
          child.style.stroke = allOriginalStrokes[i] || '';
          child.style.filter = '';
          if (child.tagName === 'polygon' || child.tagName === 'path' || child.tagName === 'circle') {
            child.style.fill = allOriginalFills[i] || '';
          }
        });
      }
  
      // Attach hover listeners to the group
      if (group) {
        group.addEventListener('mouseenter', applyHover);
        group.addEventListener('touchstart', applyHover, {passive: true});
        group.addEventListener('mouseleave', resetHover);
        group.addEventListener('touchend', resetHover, {passive: true});

      }
  
      // Make the time group invisible initially
      if (timeGroup) {
        timeGroup.style.opacity = '0';
      }

      // Make the checkpoint invisible initially
      if (timeGroup) {
        timeGroup.style.opacity = '0';
      }
    });
  }









  try {
    hideAllPdfContainers();
    showLoadingOverlay();


    

    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner && !loadingSpinner.querySelector('svg')) {
      insertLoadingEyeSVG();
    }
    resetLoadingAnimation();

    const loaderSVG = loadingSpinner?.querySelector('svg');
    const loadingElements = loaderSVG ? loaderSVG.querySelectorAll('[id^="loading"]') : [];
    const totalSteps = loadingElements.length;
    let currentStep = 0;

    let svgString;
    switch (svgType) {
      case 'hard-skills':
        await HARDSKILLSfunction(); // <-- Call the async function here
        hideCheckpointAnimation();
        break;
      case 'cv':
        svgString = cvSVG;
        break;
      case 'soft-skills':
        svgString = softSkillsSVG;
        hideCheckpointAnimation();
        break;
      default:
        hideLoadingOverlay();
        return;
    }

    if (!svgString) {
      hideLoadingOverlay();
      return;
    }

    // --- Progressive Layer Reveal for CV SVG ---
    if (svgType === 'cv') {


      // Parse CV SVG
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
      if (svgDoc.querySelector('parsererror')) {
        hideLoadingOverlay();
        return;
      }
      const svgCVContent = svgDoc.documentElement;

      // Hide all timeX groups initially
      const timeGroups = svgCVContent.querySelectorAll('g[id^="time"]');
      timeGroups.forEach(g => {
        g.style.opacity = '0';
      });

      // Find all main Layer groups (Layer1, Layer2, ..., Layer15)
      const layerGroups = Array.from(svgCVContent.querySelectorAll('g[id^="Layer"]'));

      // Hide all layers initially
      layerGroups.forEach(g => {
        g.style.opacity = '0';
        g.style.transition = 'opacity 0.8s cubic-bezier(.4,1.4,.4,1), filter 0.8s cubic-bezier(.4,1.4,.4,1)';
        g.style.filter = 'drop-shadow(0px 0px 0px rgba(0,0,0,0))';
        
      });

      // Insert SVG into container
      interactiveContainer.innerHTML = '';
      interactiveContainer.appendChild(svgCVContent);
      interactiveContainer.classList.add('active');
      interactiveContainer.style.visibility = 'visible';
      interactiveContainer.style.opacity = '1';

      // Hide loading overlay after first group is visible
      let loadingHidden = false;

      // Reveal each group step by step
      for (let i = 0; i < layerGroups.length; i++) {
        await new Promise(res => setTimeout(res, 300)); // adjust speed as needed
        layerGroups[i].style.opacity = '1';
      // Smoothly transition to the final shadow
      await new Promise(res => setTimeout(res, 50));
      layerGroups[i].style.filter = 'drop-shadow(10px 10px 10px rgba(0,0,0,0.25))';
      layerGroups[i].dataset.defaultFilter = 'drop-shadow(10px 10px 10px rgba(0,0,0,0.25))';

      if (!loadingHidden && i === 0) {
          hideLoadingOverlay();
          loadingHidden = true;
        }
      }

      // Call hover/link logic after all layers are visible
      addCvSvgHoverEffects(svgCVContent);

      await insertCheckpointSVG();
      showCheckpointAnimation();
      // Optionally, set initial checkpoint position here
   }
    
  } catch (err) {
    console.error('Error in CVfunction:', err);
    hideLoadingOverlay();
  }
}

//#region CV File Checkpoint functions

// Function to move the checkpoint based on mouse position relative to the screen
function moveCheckpoint(event) {
  try {
    const checkpoint = document.querySelector('#checkpoint');
    const traseu = document.querySelector('#traseu');
    if (!checkpoint || !traseu) return;

    const traseuBounds = traseu.getBBox();
    const minY = traseuBounds.y;
    const maxY = traseuBounds.y + traseuBounds.height;

    const mouseY = event.clientY;
    const svg = checkpoint.closest('svg');
    if (!svg) return;

    const svgPoint = svg.createSVGPoint();
    svgPoint.x = 0;
    svgPoint.y = mouseY;
    const transformedPoint = svgPoint.matrixTransform(svg.getScreenCTM().inverse());

    const clampedY = Math.max(minY, Math.min(maxY, transformedPoint.y));
    checkpoint.setAttribute('transform', `translate(0, ${clampedY})`);
  } catch (err) {
    console.error('Error in moveCheckpoint:', err);
  }
}

// Insert the checkpoint SVG if not already present
async function insertCheckpointSVG() {
  try {
    const container = document.getElementById('checkpoint-container');
    if (!container) throw new Error('Checkpoint container not found');
    if (!container.querySelector('svg')) {
      const response = await fetch('public/checkpoint.svg');
      if (!response.ok) throw new Error('Failed to load checkpoint.svg');
      const svgText = await response.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      if (svgDoc.querySelector('parsererror')) throw new Error('SVG parsing error');
      container.innerHTML = '';
      container.appendChild(svgDoc.documentElement);
      
      
    }
  } catch (err) {
    console.error('Error inserting checkpoint SVG:', err);
  }
}

// Show the checkpoint animation and add the event listener
function showCheckpointAnimation() {
  const container = document.getElementById('checkpoint-container');
  if (container) {
    container.style.opacity = '1';
    container.style.visibility = 'visible';
    window.addEventListener('mousemove', moveCheckpoint);

    // --- Ensure traseu is hidden and checkpoint glows ---
    const svg = container.querySelector('svg');
    if (svg) {
      const traseu = svg.getElementById
        ? svg.getElementById('traseu')
        : svg.querySelector('#traseu');
      if (traseu) {
        traseu.style.opacity = '0';
        traseu.querySelectorAll('*').forEach(el => {
          el.style.opacity = '0';
          el.style.stroke = 'transparent';
          el.style.fill = 'transparent';
        });
      }
      const checkpoint = svg.getElementById
        ? svg.getElementById('checkpoint')
        : svg.querySelector('#checkpoint');
      if (checkpoint) {
        checkpoint.style.filter = 'drop-shadow(0 0 12px #ffe066)';
      }
    }

    // --- Set initial checkpoint position ---
    setTimeout(() => {
      const rect = container.getBoundingClientRect();
      const event = {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
      };
      moveCheckpoint(event);
    }, 0);
  }
}

// Hide the checkpoint animation and remove the event listener
function hideCheckpointAnimation() {
  const container = document.getElementById('checkpoint-container');
  if (container) {
    container.style.opacity = '0';
    container.style.visibility = 'hidden';
    window.removeEventListener('mousemove', moveCheckpoint);
  }
}

//#endregion

//#region HARDSKILLS SVG FILE HANDLING - Svg strings 

//#region 1. Global Foundation - CONFIGURATION DATA - HARD-SKILLS
let activeTitleEl = null;
let activeImgEl = null;

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

const groupToDefaultImg = {
  bim: 'img_d1',
  modelling: 'img_d2',
  cgi: 'img_d3',
  graphics: 'img_d4',
  technical: 'img_d5'
};

const state = {
  isHovering: false,
  activeTitleEl: null,
  activeImgEl: null,
  hoverTimeout: null,
  hardSkillsImageHovered: false  
};
window.hardSkillsTitleClicked = null;

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
    // Reset the title element regardless of whether it's currently clicked
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
function resetImageTransform(img) {
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

function addHoverEffectToLayerElements(svgElement) {
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
        // Find the group for this img (e.g., 'bim', 'modelling', etc.)
        const group = Object.entries(groupToDefaultImg).find(([_, imgId]) => imgId === img.id)?.[0];
        if (!group) return;

        // Get all titles for this group
        const groupTitles = layers.find(l => l.group === group).titles.map(t => t.title);

        // If the currently clicked title is in this group, block the hover
        if (groupTitles.includes(window.hardSkillsTitleClicked)) return;

        img.style.transition = 'none';
        img.style.opacity = '1';
        img.setAttribute('transform', img.dataset.originalTransform);
        img.style.transform = '';
        void img.offsetWidth;

        if (img._leaveTimeout) {
          clearTimeout(img._leaveTimeout);
          img._leaveTimeout = null;
        }
        if (img._fadeInTimeout) {
          clearTimeout(img._fadeInTimeout);
          img._fadeInTimeout = null;
        }

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
        // Prevent hover effect if a title is clicked
        if (window.hardSkillsTitleClicked) return;

        img.style.transition = 'opacity 0.5s, transform 0.7s cubic-bezier(.4,1.4,.4,1)';
        img.style.opacity = '0';

        if (img._leaveTimeout) {
          clearTimeout(img._leaveTimeout);
        }
        if (img._fadeInTimeout) {
          clearTimeout(img._fadeInTimeout);
        }

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
  const animationDuration = 30000;

  function triggerRandom() {
    // Pause if a title is clicked
    if (window.hardSkillsTitleClicked) {
      setTimeout(triggerRandom, 1000);
      return;
    }
    // ...existing code...
  }
  triggerRandom();
}

//LAYER HOVER EFFECTS
function addHardSkillsLayerHoverEffects(svgElement) {
  // State management
  
  animateHardSkillsLayers(svgElement);

  // Setup layer event handlers
  layers.forEach(layer => {
      setupLayerHoverEffects(svgElement, layer);
      setupTitleEvents(svgElement, layer);
  });

  // Global click handler
  setupGlobalClickHandler(svgElement, layers);

  layers.forEach(layer => {
    layer.titles.forEach(({ title, show, img }) => {
      if (window.hardSkillsTitleClicked !== title) {
        resetElement(svgElement, title, show, img, layer);
      }
    });
  });
}

function setupLayerHoverEffects(svgElement, layer) {
  const groupEl = svgElement.querySelector(`#${layer.group}`);
  const header = svgElement.querySelector(`#${layer.header}`);
  const headerBox = svgElement.querySelector(`#${layer.headerBox}`);

  const headerOrigTransform = header ? header.getAttribute('transform') || '' : '';
  const headerBoxOrigTransform = headerBox ? headerBox.getAttribute('transform') || '' : '';
  const headerOrigColor = header ? (header.getAttribute('fill') || header.style.fill || '') : '';
  const headerBoxOrigFilter = headerBox ? (headerBox.style.filter || '') : '';

  // Store original transforms for titles
  const titleOrigTransforms = {};
  layer.titles.forEach(({ title }) => {
    const titleEl = svgElement.querySelector(`#${title}`);
    if (titleEl) {
      titleOrigTransforms[title] = titleEl.getAttribute('transform') || '';
    }
  });

  // Optionally, collect subgroup elements and their transforms if needed
  const subgroupElements = [];
  const subgroupOrigTransforms = [];
  // If you want to move paths inside titleX_path groups as well:
  layer.titles.forEach(({ title }) => {
    const pathId = title.replace('_red', '_path');
    const pathGroup = svgElement.querySelector(`#${pathId}`);
    if (pathGroup) {
      Array.from(pathGroup.querySelectorAll('path, polyline, polygon')).forEach(el => {
        subgroupElements.push(el);
        subgroupOrigTransforms.push(el.getAttribute('transform') || '');
      });
    }
  });

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
    const newTitleEl = svgElement.querySelector(`#${title}`);
    
    // Save original state
    newTitleEl.dataset.origFill = newTitleEl.getAttribute('fill') || '#ffffff';
    newTitleEl.dataset.origWeight = window.getComputedStyle(newTitleEl).fontWeight || 'normal';
    newTitleEl.dataset.clicked = 'false';

    const imgEl = svgElement.querySelector(`#${img}`);
    const defaultImgId = groupToDefaultImg[layer.group];
    const defaultImgEl = svgElement.querySelector(`#${defaultImgId}`);

  
    if (imgEl && imgTranslateMap[img]) {
      if (!imgEl.dataset.originalTransform) {
        imgEl.dataset.originalTransform = imgEl.getAttribute('transform') || '';
      }
    }
    if (window.hardSkillsTitleClicked && window.hardSkillsTitleClicked !== newTitleEl.id) {
      return;
    }
    // Hover handlers
    newTitleEl.addEventListener('mouseenter', () => {
      // Allow hover effects even if a title is clicked
      if (window.hardSkillsTitleClicked && window.hardSkillsTitleClicked !== newTitleEl.id) {
        return;
      }
      // Highlight hovered title
      newTitleEl.style.cursor = 'pointer';
      newTitleEl.style.fill = '#ffca31';
      newTitleEl.style.fontWeight = 'bold';

      // Hide all group images and default image for this group
      if (all) {
        all.forEach(gid => {
          const g = svgElement.querySelector(`#${gid}`);
          if (g) g.style.display = (gid === show) ? '' : 'none';
        });
      }

      // Show and animate the hovered image
      const imgEl = svgElement.querySelector(`#${img}`);
      const translate = imgTranslateMap[img];
      const defaultImgId = groupToDefaultImg[layer.group];
      const defaultImgEl = svgElement.querySelector(`#${defaultImgId}`);

      // Hide all group images and default image for this group
      layer.titles.forEach(t => {
        const otherImg = svgElement.querySelector(`#${t.img}`);
        if (otherImg && otherImg !== imgEl) otherImg.style.opacity = '0';
      });
      if (defaultImgEl) defaultImgEl.style.opacity = '0';

      if (imgEl && translate) {
        imgEl.style.opacity = '1';
        imgEl.setAttribute('transform', imgEl.dataset.originalTransform || '');
        imgEl.style.transition = 'none';
        imgEl.style.transform = '';
        void imgEl.offsetWidth;
        setTimeout(() => {
          let downTransform;
          if (img === 'img_3') {
            downTransform = `translate(${translate[0]} ${translate[1] - 100})` + (imgEl.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          } else {
            downTransform = `translate(${translate[0]} ${translate[1] + 90})` + (imgEl.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          }
          imgEl.style.transition = 'transform 60s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
          imgEl.setAttribute('transform', downTransform);
          imgEl.style.transform = '';
        }, 50);
      }
    });

    newTitleEl.addEventListener('mouseleave', () => {
      // If a title is clicked, restore its highlight and image after leaving any other title
      if (window.hardSkillsTitleClicked && window.hardSkillsTitleClicked) {
        // Restore highlight for clicked title
        const clickedTitle = svgElement.querySelector(`#${window.hardSkillsTitleClicked}`);
        if (clickedTitle) {
          clickedTitle.style.fill = '#ffca31';
          clickedTitle.style.fontWeight = 'bold';
        }

        // Restore clicked image
        const clickedLayer = layers.find(l => l.titles.some(t => t.title === window.hardSkillsTitleClicked));
        const clickedImgName = clickedLayer?.titles.find(t => t.title === window.hardSkillsTitleClicked)?.img;
        const clickedImg = svgElement.querySelector(`#${clickedImgName}`);
        const clickedTranslate = imgTranslateMap[clickedImgName];
        const clickedDefaultImgId = groupToDefaultImg[clickedLayer?.group];
        const clickedDefaultImgEl = svgElement.querySelector(`#${clickedDefaultImgId}`);

        // Hide all group images and default image for this group
        if (clickedLayer) {
          clickedLayer.titles.forEach(t => {
            const otherImg = svgElement.querySelector(`#${t.img}`);
            if (otherImg && otherImg !== clickedImg) otherImg.style.opacity = '0';
          });
          if (clickedDefaultImgEl) clickedDefaultImgEl.style.opacity = '0';
        }

        if (clickedImg && clickedTranslate) {
          clickedImg.style.opacity = '1';
          clickedImg.setAttribute('transform', clickedImg.dataset.originalTransform || '');
          clickedImg.style.transition = 'none';
          clickedImg.style.transform = '';
          void clickedImg.offsetWidth;
          setTimeout(() => {
            let downTransform;
            if (clickedImgName === 'img_3') {
              downTransform = `translate(${clickedTranslate[0]} ${clickedTranslate[1] - 100})` + (clickedImg.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
            } else {
              downTransform = `translate(${clickedTranslate[0]} ${clickedTranslate[1] + 90})` + (clickedImg.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
            }
            clickedImg.style.transition = 'transform 60s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
            clickedImg.setAttribute('transform', downTransform);
            clickedImg.style.transform = '';
          }, 50);
        }

        // Restore color for the hovered title (not clicked)
        if (newTitleEl.dataset.clicked !== 'true') {
          newTitleEl.style.fill = newTitleEl.dataset.origFill;
          newTitleEl.style.fontWeight = newTitleEl.dataset.origWeight;
        }
        return;
      }

      // If no title is clicked, restore default state
      newTitleEl.style.fill = newTitleEl.dataset.origFill;
      newTitleEl.style.fontWeight = newTitleEl.dataset.origWeight;

      // Restore group display to default
      if (all) {
        const defaultGroup = all.find(gid => gid.endsWith('_default'));
        all.forEach(gid => {
          const g = svgElement.querySelector(`#${gid}`);
          if (g) g.style.display = (gid === defaultGroup) ? '' : 'none';
        });
      }

      // Hide/reset the image
      const imgEl = svgElement.querySelector(`#${img}`);
      const defaultImgId = groupToDefaultImg[layer.group];
      const defaultImgEl = svgElement.querySelector(`#${defaultImgId}`);

      if (imgEl) {
        imgEl.style.transition = 'opacity 0.5s, transform 0.7s cubic-bezier(.4,1.4,.4,1)';
        imgEl.style.opacity = '0';

        if (imgEl._leaveTimeout) clearTimeout(imgEl._leaveTimeout);
        if (imgEl._fadeInTimeout) clearTimeout(imgEl._fadeInTimeout);

        imgEl._leaveTimeout = setTimeout(() => {
          imgEl.setAttribute('transform', imgEl.dataset.originalTransform);
          imgEl.style.transform = '';
          imgEl._fadeInTimeout = setTimeout(() => {
            imgEl.style.transition = 'opacity 0.5s';
            imgEl.style.opacity = '0'; // keep hidden after reset
            // Restore default image for the group
            if (defaultImgEl) defaultImgEl.style.opacity = '1';
          }, 200);
        }, 250);
      }
    });

    // Click handler with text element management
    newTitleEl.addEventListener('click', (event) => {
      event.stopPropagation();

      const textEl = svgElement.querySelector(`#${layer.group}_${show.split('_')[1]}_text`);
      if (!textEl) return;



      // Reset all titles and texts in the same layer
      layer.titles.forEach(({ title, img, show }) => {
        const titleEl = svgElement.querySelector(`#${title}`);
        const imgEl = svgElement.querySelector(`#${img}`);
        const textElToReset = svgElement.querySelector(`#${layer.group}_${show.split('_')[1]}_text`);

        // Reset title
        if (titleEl && titleEl !== newTitleEl) {
          titleEl.dataset.clicked = 'false';
          titleEl.style.fill = titleEl.dataset.origFill;
          titleEl.style.fontWeight = titleEl.dataset.origWeight;
        }

        // Reset image
        if (imgEl && titleEl !== newTitleEl) {
          imgEl.style.opacity = '0';
          imgEl.setAttribute('transform', imgEl.dataset.originalTransform || '');
        }

        // Hide the text
        if (textElToReset && titleEl !== newTitleEl) {
          textElToReset.style.opacity = '0';
        }
      });









      
      // Reset everything to default if another title is already clicked
      if (window.hardSkillsTitleClicked && window.hardSkillsTitleClicked !== newTitleEl.id) {
        layers.forEach(layer => {
          layer.titles.forEach(({ title, img, all }) => {
            const titleEl = svgElement.querySelector(`#${title}`);
            const imgEl = svgElement.querySelector(`#${img}`);
            const defaultImgId = groupToDefaultImg[layer.group];
            const defaultImgEl = svgElement.querySelector(`#${defaultImgId}`);
            const textElToReset = svgElement.querySelector(`#${layer.group}_${show.split('_')[1]}_text`);

            // Reset title
            if (titleEl) {
              titleEl.dataset.clicked = 'false';
              titleEl.style.fill = titleEl.dataset.origFill;
              titleEl.style.fontWeight = titleEl.dataset.origWeight;
            }

            // Reset image
            if (imgEl) {
              imgEl.style.opacity = '0';
              imgEl.setAttribute('transform', imgEl.dataset.originalTransform || '');
            }

            // Reset default image
            if (defaultImgEl) {
              defaultImgEl.style.opacity = '1';
              defaultImgEl.setAttribute('transform', defaultImgEl.dataset.originalTransform || '');
            }


            // Hide the text
            if (textElToReset) {
              textElToReset.style.opacity = '0';
            }

            // Reset group display
            if (all) {
              all.forEach(gid => {
                const g = svgElement.querySelector(`#${gid}`);
                if (g) g.style.display = gid.endsWith('_default') ? '' : 'none';
              });
            }
          });
        });

        // Reset global state
        window.hardSkillsTitleClicked = null;
        activeTitleEl = null;
        activeTextEl = null;
      }

      // If clicking the same title again, reset its state
      if (newTitleEl.dataset.clicked === 'true') {
        newTitleEl.dataset.clicked = 'false';
        newTitleEl.style.fill = newTitleEl.dataset.origFill;
        newTitleEl.style.fontWeight = newTitleEl.dataset.origWeight;

        // Hide the image
        if (imgEl) {
          imgEl.style.opacity = '0';
          imgEl.setAttribute('transform', imgEl.dataset.originalTransform || '');
        }

        // Hide the text
        if (textEl) {
          textEl.style.opacity = '0';
        }

        // Reset active elements
        activeTitleEl = null;
        activeTextEl = null;
        window.hardSkillsTitleClicked = null;

        return;
      }

      // Mark the new title as clicked
      newTitleEl.dataset.clicked = 'true';

      // Apply hover effects (duplicated from mouseenter)
      newTitleEl.style.cursor = 'pointer';
      newTitleEl.style.fill = '#ffca31';
      newTitleEl.style.fontWeight = 'bold';

      // Hide all group images and default image for this group
      if (all) {
        all.forEach(gid => {
          const g = svgElement.querySelector(`#${gid}`);
          if (g) g.style.display = (gid === show) ? '' : 'none';
        });
      }

      // Show and animate the clicked image
      if (imgEl && imgTranslateMap[img]) {
        imgEl.style.opacity = '1';
        imgEl.setAttribute('transform', imgEl.dataset.originalTransform || '');
        imgEl.style.transition = 'none';
        imgEl.style.transform = '';
        void imgEl.offsetWidth;
        setTimeout(() => {
          let downTransform;
          if (img === 'img_3') {
            downTransform = `translate(${imgTranslateMap[img][0]} ${imgTranslateMap[img][1] - 100})` + (imgEl.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          } else {
            downTransform = `translate(${imgTranslateMap[img][0]} ${imgTranslateMap[img][1] + 90})` + (imgEl.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          }
          imgEl.style.transition = 'transform 60s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
          imgEl.setAttribute('transform', downTransform);
          imgEl.style.transform = '';
        }, 50);
      }

      // Show the text
      if (textEl) {
        textEl.style.opacity = '1';
      }

      // Update active elements
      activeTitleEl = newTitleEl;
      activeTextEl = textEl;
      window.hardSkillsTitleClicked = newTitleEl.id;

      console.log('Clicked title:', window.hardSkillsTitleClicked);
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
    window.hardSkillsTitleClicked = null;

    // Restore default images
    Object.values(groupToDefaultImg).forEach(imgId => {
      const img = svgElement.querySelector(`#${imgId}`);
      const def = defaultHardSkillsImages.find(d => d.imgId === imgId);
      if (img && def) {
        img.style.opacity = '1';
        img.setAttribute('transform', img.dataset.originalTransform || '');
        img.style.transition = 'none';
        img.style.transform = '';
        void img.offsetWidth;
        setTimeout(() => {
          let downTransform;
          if (imgId === 'img_d3') {
            downTransform = `translate(${def.translate[0]} ${def.translate[1] - 100})` + (img.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          } else {
            downTransform = `translate(${def.translate[0]} ${def.translate[1] + 90})` + (img.dataset.originalTransform || '').replace(/^translate\([^)]+\)/, '');
          }
          img.style.transition = 'transform 60s cubic-bezier(.4,1.4,.4,1), opacity 0.3s';
          img.setAttribute('transform', downTransform);
          img.style.transform = '';
        }, 50);
      }
    });

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
      animateHardSkillsLayers(svgHardSkillsContent);
      addHardSkillsLayerHoverEffects(svgHardSkillsContent);
      
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

// Parse the HARD-SKILLS SVG string HERE
async function processSvgFile(svgString, totalSteps, loadingElements, currentStep) {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
  // Check for parsing errors
  if (svgDoc.querySelector('parsererror')) {
    hideLoadingOverlay();
    return null;
  }

  // Extract the SVG content
  const svgHardSkillsContent = svgDoc.documentElement;

  // Select only the relevant parts (e.g., <g> and <path> elements)
  const svgParts = svgHardSkillsContent.querySelectorAll('g, path');
  const numParts = Math.max(svgParts.length, 1);

  // Calculate the step duration based on the number of parts and total steps
  const stepDuration = Math.max(100, 1000 / Math.max(numParts, totalSteps));

  // Process each part of the SVG
  for (let i = 0; i < numParts; i++) {
    if (currentStep < totalSteps) {
      loadingElements[currentStep].style.opacity = '1';
      currentStep++;
    }
    await new Promise((res) => setTimeout(res, stepDuration));
  }

  // Ensure all steps are completed
  while (currentStep < totalSteps) {
    loadingElements[currentStep].style.opacity = '1';
    currentStep++;
    await new Promise((res) => setTimeout(res, stepDuration));
  }

  // Return the parsed SVG element
  return svgHardSkillsContent;
}
    
//#endregion


//#endregion

//#region 5. Effects& functions for design elements (artwork_div_1)

// Function to add hover effects to main elements
function addHoverEffectToMainElements() {
  try {
    document.addEventListener('mousemove', (e) => {
      try {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const allTargets = document.querySelectorAll(
          '[id*="Pana_roz_degrade"], [id*="Pana_roz_opac"], [id*="Pana_gri_opac"], #HARD-SKILLS, #PROFESSIONAL, #CV, #ACADEMIC, #SOFT-SKILLS, #HOME-BUTTON'
        );

        allTargets.forEach((el) => {
          try {
            const rect = el.getBoundingClientRect();
            const mouseInsideElement = (
              mouseX >= rect.left && mouseX <= rect.right &&
              mouseY >= rect.top && mouseY <= rect.bottom
            );

            el.style.transition = 'transform 0.3s ease';

            if (el.id === 'HOME-BUTTON') {
              el.style.transform = mouseInsideElement ? 'translateY(5px)' : 'translateY(0px)';
            } else {
              el.style.transform = mouseInsideElement ? 'translateY(30px)' : 'translateY(0px) scale(1)';
            }
          } catch (err) {
            console.error('Error processing hover effect for element:', el, err);
          }
        });
      } catch (err) {
        console.error('Error in mousemove handler:', err);
      }
    });
  } catch (err) {
    console.error('Error in addHoverEffectToMainElements:', err);
  }
}

//#region Wind Wave Animation for Feathers

let windWaveTimeout;
let windWaveActive = false;
let windWaveRepeatTimeout;
let userActive = true;
const windWaveDelay = 5000; // ms of inactivity before wind starts
const windWaveDuration = 400; // ms for each feather's animation

function parseFeatherId(id) {
  // Example: Pana_roz_degrade1_1, Pana_roz_opac2_6, Pana_gri_opac3_8
  const match = id.match(/(\d+)_(\d+)$/);
  if (!match) return { col: 0, row: 0 };
  return { col: parseInt(match[1], 10), row: parseInt(match[2], 10) };
}

function startWindWaveAnimation() {
  if (window.innerWidth < 700 && document.body.classList.contains('no-wave')) {
    return; // Don't run wave on mobile if modal is open
  }
  if (windWaveActive) return;
  windWaveActive = true;


// On small screens, animate a random bunch of feathers, not all columns
  if (window.innerWidth < 700) {
    const allFeathers = Array.from(document.querySelectorAll(
      '[id*="Pana_roz_degrade"], [id*="Pana_roz_opac"], [id*="Pana_gri_opac"]'
    ));

    // Pick a random subset (e.g., 8-14 feathers)
    const count = Math.floor(Math.random() * 6) + 8;
    const shuffled = allFeathers.sort(() => Math.random() - 0.5);
    const randomFeathers = shuffled.slice(0, count);

    randomFeathers.forEach((el, idx) => {
      setTimeout(() => {
        el.style.transition = 'transform 1s cubic-bezier(.4,1.4,.4,1)';
        el.style.transform = 'translateY(50px)';
        setTimeout(() => {
          el.style.transition = 'transform 0.7s cubic-bezier(.4,1.4,.4,1)';
          el.style.transform = 'translateY(0px)';
        }, 350);
      }, idx * 80);
    });

    setTimeout(() => {
      windWaveActive = false;
      if (!userActive) windWaveRepeatTimeout = setTimeout(startWindWaveAnimation, windWaveDelay);
    }, count * 60 + 400);

    return;
  }

  // Gather all feathers and parse their positions
  const allFeathers = Array.from(document.querySelectorAll(
    '[id*="Pana_roz_degrade"], [id*="Pana_roz_opac"], [id*="Pana_gri_opac"]'
  ));

  // Parse positions and collect max col/row for diagonal calculation
  let maxCol = 0, maxRow = 0;
  const feathers = allFeathers.map(el => {
    const { col, row } = parseFeatherId(el.id);
    if (col > maxCol) maxCol = col;
    if (row > maxRow) maxRow = row;
    return { el, col, row };
  });

  // Diagonal wave: group by (col + row)
  const diagonalMap = {};
  feathers.forEach(({ el, col, row }) => {
    const diag = col + row;
    if (!diagonalMap[diag]) diagonalMap[diag] = [];
    diagonalMap[diag].push(el);
  });

  const diagonals = Object.keys(diagonalMap).map(Number).sort((a, b) => a - b);

  // Animate diagonally, with smooth transitions
  diagonals.forEach((diag, diagIdx) => {
    diagonalMap[diag].forEach((el, elIdx) => {
      setTimeout(() => {
        el.style.transition = `transform 0.7s cubic-bezier(.4,1.6,.4,1)`; // smoother and longer
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
          el.style.transition = `transform 0.7s cubic-bezier(.4,1.6,.4,1)`;
          el.style.transform = 'translateY(0px)';
        }, windWaveDuration + 120); // let the feather stay down a bit longer
      }, diagIdx * 120 + elIdx * 10); // diagonal delay + slight offset for organic feel
    });
  });

  // Calculate total duration
  const totalDuration = diagonals.length * 120 + windWaveDuration + 400;

  setTimeout(() => {
    windWaveActive = false;
    // If user is still inactive, schedule the next wave
    if (!userActive) {
      windWaveRepeatTimeout = setTimeout(startWindWaveAnimation, windWaveDelay);
    }
  }, totalDuration);
}

function resetWindWaveTimer() {
  userActive = true;
  clearTimeout(windWaveTimeout);
  clearTimeout(windWaveRepeatTimeout);
  windWaveTimeout = setTimeout(() => {
    userActive = false;
    startWindWaveAnimation();
  }, windWaveDelay);
}

// Reset timer on user activity
['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'].forEach(evt =>
  window.addEventListener(evt, resetWindWaveTimer, { passive: true })
);

// Also reset timer if hovering any feather
document.addEventListener('mouseover', (e) => {
  if (
    e.target.matches('[id*="Pana_roz_degrade"], [id*="Pana_roz_opac"], [id*="Pana_gri_opac"]')
  ) {
    resetWindWaveTimer();
  }
});

// Start timer on page load
resetWindWaveTimer();

// Main logic
window.onload = function () {
  try {
    // Insert the main artwork SVG
    if (artworkSVG) {
      insertSVGFromString(artworkSVG, '.svg1', (svgElement) => {
        try {
          addHoverEffects(svgElement);
          attachButtonEvents(svgElement);
          addHoverEffectToMainElements();
        } catch (err) {
          console.error('Error in SVG initialization callback:', err);
        }
      });
    } else {
      throw new Error('Main artwork SVG string is empty');
    }
  } catch (err) {
    console.error('Error in window.onload:', err);
  }
};

//#endregion

//#endregion






