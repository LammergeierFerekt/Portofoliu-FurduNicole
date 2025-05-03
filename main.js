import './style.css';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PageFlip } from 'page-flip';
import * as pdfjsLib from "pdfjs-dist/build/pdf";


// SVG content as strings (replace these with your actual SVG strings)
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

const hardSkillsSVG = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 595.28">
  <rect width="841.89" height="595.28" style="fill: #cb9898;stroke: #231f20;stroke-miterlimit: 10"/>
  <text transform="translate(372.84 54.89)" style="font-size: 12px;fill: #231f20;font-family: MyriadPro-Regular, Myriad Pro">ha<tspan x="12.44" y="0" style="letter-spacing: -0.010009765625em">r</tspan><tspan x="16.25" y="0">d-SKILLS</tspan></text>
</svg>
`;

const cvSVG = `<svg id="cv_content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 1467.19">
  <g id="Layer12">
    <rect id="boxg12" x="555.68" y="1311.97" width="250" height="105" rx="13.78" transform="translate(1361.36 2728.94) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg12_1">
      <g>
        <polyline points="790.27 1331.19 852.21 1331.19 852.21 755.74" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <circle cx="790.27" cy="1331.19" r="13.85" transform="translate(-742.01 1551.88) rotate(-67.5)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg12">
      <text id="title12_red" transform="translate(652.77 1387.48)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.13000963983328004em">ONCR </text>
      <g id="ScoutVolunteer">
        <text transform="translate(614.9 1407.05)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Scout <tspan x="54.07" y="0" style="letter-spacing: -0.04492691880628687em">V</tspan><tspan x="65.37" y="0">olunteer</tspan></text>
      </g>
      <text transform="translate(661.91 1352.29)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2013</text>
    </g>
    <g id="time12">
      <text transform="translate(690.49 1451.17)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 years</text>
      <g>
        <circle cx="658.28" cy="1445.11" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="666.91" y1="1434.96" x2="658.28" y2="1445.11" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="650.88" y1="1440.04" x2="658.28" y2="1445.11" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer11">
    <rect id="boxg11" x="445.68" y="1149.41" width="360" height="105" rx="13.78" transform="translate(1251.36 2403.81) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg11_1">
      <g>
        <line x1="836.02" y1="1167.04" x2="787.41" y2="1167.04" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <circle cx="787.41" cy="1167.04" r="13.85" transform="translate(-619.75 1123.44) rotate(-54.22)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg11">
      <text transform="translate(660.73 1189.23)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2017</text>
      <text transform="translate(591.26 1247.02)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">C. NEGRUZZI | IASI</text>
      <text id="title11_red" transform="translate(454.68 1221.39)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.05000370762818464em">High school graduation </text>
    </g>
    <g id="time11">
      <text transform="translate(679.56 1281.42)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">12 years</text>
      <g>
        <circle cx="644.11" cy="1276.08" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="652.75" y1="1265.93" x2="644.11" y2="1276.08" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="636.71" y1="1271.01" x2="644.11" y2="1276.08" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer10">
    <rect id="boxg10" x="888.21" y="960.8" width="250" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg10_1">
      <g>
        <line x1="861.27" y1="992.2" x2="906.48" y2="992.2" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M906.48,1006.06a13.86,13.86,0,1,0-13.85-13.86A13.87,13.87,0,0,0,906.48,1006.06Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg10">
      <text transform="translate(929.55 1008.07)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2018</text>
      <text id="title10_red" transform="translate(928.55 1043.94)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.04000290961019173em">ALLPLAN courses</text>
    </g>
    <g id="time10">
      <text transform="translate(971.88 1100.68)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="942.58" cy="1092.62" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="951.22" y1="1082.47" x2="942.58" y2="1092.62" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="935.18" y1="1087.55" x2="942.58" y2="1092.62" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer9">
    <rect id="boxg9" x="388.97" y="915.32" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg9_1">
      <g>
        <line x1="838.88" y1="937.07" x2="731.38" y2="937.07" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M731.38,923.21a13.86,13.86,0,1,0,13.86,13.86A13.86,13.86,0,0,0,731.38,923.21Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg9">
      <text transform="translate(621.94 953.92)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2019</text>
      <text id="title9_red" transform="translate(397.93 985.34)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">NEME<tspan x="85.24" y="0" style="letter-spacing: -0.009771366720003052em">T</tspan><tspan x="101.73" y="0" xml:space="preserve">SCHEK  contest</tspan></text>
      <text transform="translate(422.23 1007.66)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">1<tspan x="10.57" y="0" style="letter-spacing: -0.00975584539780171em">S</tspan><tspan x="20.79" y="0" xml:space="preserve">T prize winner  of Lumion video</tspan></text>
    </g>
    <g id="time9">
      <text transform="translate(629.9 1053.12)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">3 months</text>
      <g>
        <circle cx="600.82" cy="1045.06" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="609.45" y1="1034.91" x2="600.82" y2="1045.06" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="593.42" y1="1039.99" x2="600.82" y2="1045.06" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer8">
    <rect id="boxg8" x="951.64" y="685.58" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg8_1">
      <g>
        <polyline points="968.62 708.83 852.21 708.83 852.21 755.74" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M968.62,695a13.86,13.86,0,1,1-13.86,13.85A13.85,13.85,0,0,1,968.62,695Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg8">
      <text id="title8_red" transform="translate(986.03 722.25)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan xml:space="preserve">Wienerberger  contest</tspan></text>
      <text transform="translate(986.03 747.02)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.030017985839389884em">3rd prize winner for Collective<tspan x="240.48" y="0" style="font-size: 32.073631286621094px;letter-spacing: -0.03000222457691078em"> </tspan><tspan x="248.31" y="0">housing</tspan></text>
      <text transform="translate(986.03 774.06)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">oct-ian</text>
    </g>
    <g id="time8">
      <text transform="translate(1032.25 825.58)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">3 months</text>
      <g>
        <circle cx="1002.95" cy="817.52" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1011.59" y1="807.37" x2="1002.95" y2="817.52" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="995.55" y1="812.44" x2="1002.95" y2="817.52" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer7">
    <rect id="boxg7" x="445.68" y="735.14" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg7_1">
      <g>
        <polyline points="838.88 662.6 838.88 755.06 787.41 755.06" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <circle cx="787.41" cy="755.06" r="13.85" transform="matrix(0.95, -0.32, 0.32, 0.95, -198.36, 287.75)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg7">
      <text transform="translate(653.29 772.26)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2020</text>
      <text id="title7_red" transform="translate(516.83 804.38)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.02000148305127385em">D.A.S. Arch. office</text>
      <text transform="translate(670.49 829.62)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03299902152937919em">jan-july</text>
    </g>
    <g id="time7">
      <text transform="translate(669.01 874.6)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="644.11" cy="869.26" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="652.75" y1="859.11" x2="644.11" y2="869.26" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="636.71" y1="864.19" x2="644.11" y2="869.26" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer6">
    <rect id="boxg6" x="886.71" y="539.47" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg6_1">
      <g>
        <polyline points="904.99 559.59 852.21 559.59 852.21 467.13" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M905,545.73a13.86,13.86,0,1,1-13.86,13.86A13.85,13.85,0,0,1,905,545.73Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg6">
      <text transform="translate(936.05 575.83)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2021</text>
      <text id="title6_red" transform="translate(939.09 610.21)" style="font-size: 32.073631286621094px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.040033549409965556em">P<tspan x="16.68" y="0" style="letter-spacing: -0.02000148305127385em">oint Arch. office</tspan></text>
      <text transform="translate(939.09 635.47)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">oct-march</text>
    </g>
    <g id="time6">
      <text transform="translate(970.39 676.06)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 months</text>
      <g>
        <circle cx="941.09" cy="668" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="949.72" y1="657.85" x2="941.09" y2="668" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="933.69" y1="662.93" x2="941.09" y2="668" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer5">
    <rect id="boxg5" x="555.68" y="411.61" width="250" height="105" rx="13.78" transform="translate(1361.36 928.21) rotate(-180)" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg5_1">
      <g>
        <line x1="836.02" y1="434.82" x2="787.41" y2="434.82" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <circle cx="787.41" cy="434.82" r="13.85" transform="translate(-106.46 334.43) rotate(-22.5)" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg5">
      <text id="title5_red" transform="translate(595.88 447.06)" style="font-size: 28.346460342407227px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.0300021822076438em">Monuments <tspan x="10.41" y="26.13">Ambulance</tspan></text>
      <text transform="translate(670.49 500.2)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03299902152937919em">jan-july</text>
    </g>
    <g id="time5">
      <text transform="translate(682.26 552.21)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">2 weeks</text>
      <g>
        <circle cx="658.28" cy="546.87" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="666.91" y1="536.72" x2="658.28" y2="546.87" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="650.88" y1="541.8" x2="658.28" y2="546.87" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer4">
    <rect id="boxg4" x="886.71" y="353.86" width="250" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg4_1">
      <g>
        <polyline points="852.21 362.28 852.21 377.08 904.99 377.08" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M905,390.93a13.86,13.86,0,1,0-13.86-13.85A13.85,13.85,0,0,0,905,390.93Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg4">
      <text transform="translate(936.05 392.86)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2022</text>
      <text id="title4_red" transform="translate(939.09 425.44)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.030011625147793847em"><tspan xml:space="preserve">G.R.S.  office</tspan></text>
      <text transform="translate(939.09 447.36)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">aug-sept</text>
    </g>
    <g id="time4">
      <text transform="translate(970.39 492.26)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">1 month practice</text>
      <g>
        <circle cx="941.09" cy="484.2" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="949.72" y1="474.06" x2="941.09" y2="484.2" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="933.69" y1="479.13" x2="941.09" y2="484.2" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer15">
    <rect id="boxg15_2" x="951.64" y="1149.41" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <rect id="boxg15_1" x="498.97" y="225.41" width="250" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg15_1">
      <g>
        <polyline points="968.62 1167.05 846.29 1167.05 846.29 249.56 731.38 249.56" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M968.62,1153.19A13.86,13.86,0,1,1,954.76,1167,13.85,13.85,0,0,1,968.62,1153.19Z" style="fill: #fff"/>
        <path d="M731.38,235.71a13.86,13.86,0,1,0,13.86,13.86A13.85,13.85,0,0,0,731.38,235.71Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg15">
      <text id="title14_red" transform="translate(986.03 1217.28)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI"><tspan style="letter-spacing: -0.044923061541980724em">F</tspan><tspan x="13.82" y="0">aculty of Architecture</tspan></text>
      <text transform="translate(986.03 1243.59)" style="font-size: 19.606599807739258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">G.M. CAN<tspan x="84.38" y="0" style="letter-spacing: -0.035171073408485146em">T</tspan><tspan x="93.96" y="0" style="letter-spacing: -0.015109052872492909em">A</tspan><tspan x="106.31" y="0">CUZINO | IASI</tspan></text>
      <text transform="translate(615.45 265.65)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2023</text>
      <text transform="translate(542.36 318.35)" style="font-size: 20.551179885864258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">Head of promotion</text>
      <text id="title15_red" transform="translate(521.97 294.45)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.014927165757471886em">V<tspan x="18.9" y="0" style="letter-spacing: 0.030011625147793847em">aledictorian</tspan></text>
    </g>
    <g id="time15">
      <text transform="translate(651.38 361.59)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">6 years</text>
      <g>
        <circle cx="619.17" cy="355.53" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="627.8" y1="345.38" x2="619.17" y2="355.53" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="611.77" y1="350.46" x2="619.17" y2="355.53" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer2">
    <rect id="boxg2" x="950.15" y="124.03" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg2_1">
      <g>
        <polyline points="967.12 146.51 852.21 146.56 852.21 240.75" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M967.11,132.65a13.86,13.86,0,1,1-13.85,13.86A13.86,13.86,0,0,1,967.11,132.65Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg2">
      <text transform="translate(985.93 164.39)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2024</text>
      <text id="title2_red" transform="translate(984.54 197.45)" style="font-size: 31.181100845336914px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI">Albendiego office</text>
      <text transform="translate(984.54 219.37)" style="font-size: 23.527860641479492px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.006003612255502974em">nov-nov</text>
    </g>
    <g id="time2">
      <text transform="translate(1030.76 262.98)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">1 year</text>
      <g>
        <circle cx="1001.46" cy="254.92" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="1010.09" y1="244.77" x2="1001.46" y2="254.92" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="994.06" y1="249.85" x2="1001.46" y2="254.92" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
  <g id="Layer1">
    <rect id="boxg1" x="388.36" y="15.48" width="360" height="105" rx="13.78" style="fill: #63769e;opacity: 0.5"/>
    <g id="lineg1_1">
      <g>
        <polyline points="846.29 240.75 846.29 38.74 731.38 38.74" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3.6850393700787403px"/>
        <path d="M731.38,24.88a13.86,13.86,0,1,0,13.86,13.86A13.86,13.86,0,0,0,731.38,24.88Z" style="fill: #fff"/>
      </g>
    </g>
    <g id="textg1">
      <text transform="translate(615.45 56.66)" style="font-size: 43.495079040527344px;fill: #f4dbdb;font-family: YuGothicUI-Bold, Yu Gothic UI;font-weight: 700;letter-spacing: 0.020003964628661854em">2025</text>
      <text id="title1_red" transform="translate(397.78 85.01)" style="font-size: 29.76378059387207px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: 0.03000712850920933em">Hobby - Code learning</text>
      <text transform="translate(412.17 108.78)" style="font-size: 20.551179885864258px;fill: #fff;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">2 websites &amp; this current example</text>
    </g>
    <g id="time1">
      <text transform="translate(601.69 155.78)" style="font-size: 20.551179885864258px;fill: #ffe1ab;font-family: YuGothicUI-Regular, Yu Gothic UI;letter-spacing: -0.0050117006305619395em">... till present</text>
      <g>
        <circle cx="570.38" cy="147.72" r="14.17" style="fill: none;stroke: #ffe1ab;stroke-miterlimit: 10;stroke-width: 2.83464566929134px"/>
        <line x1="579.01" y1="137.57" x2="570.38" y2="147.72" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
        <line x1="562.98" y1="142.64" x2="570.38" y2="147.72" style="fill: none;stroke: #ffe1ab;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2.83464566929134px"/>
      </g>
    </g>
  </g>
</svg>
`;

const softSkillsSVG = `<svg id="soft-skills" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Your soft skills SVG content here -->
</svg>`;


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
        try { showSVGContent('hard-skills', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button1 action:', err); }
      }},
      { layer: 'PROFESSIONAL', id: 'Pana_roz_button2', action: () => { 
        try { showPDF('professional.pdf', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button2 action:', err); }
      }},
      { layer: 'CV', id: 'Pana_roz_button3', action: () => { 
        try { showSVGContent('cv', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button3 action:', err); }
      }},
      { layer: 'ACADEMIC', id: 'Pana_roz_button4', action: () => { 
        try { showPDF('academic.pdf', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button4 action:', err); }
      }},
      { layer: 'SOFT-SKILLS', id: 'Pana_roz_button5', action: () => { 
        try { showSVGContent('soft-skills', svgElement); triggerFogEffect(svgElement); } catch (err) { console.error('Error in button5 action:', err); }
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

// PDF Flipbook Integration
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


// Show SVG content from string
async function showSVGContent(svgType) {
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
        svgString = hardSkillsSVG;
        break;
      case 'cv':
        svgString = cvSVG;
        break;
      case 'soft-skills':
        svgString = softSkillsSVG;
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
      const svgContent = svgDoc.documentElement;

      // Hide all timeX groups initially
      const timeGroups = svgContent.querySelectorAll('g[id^="time"]');
      timeGroups.forEach(g => {
        g.style.opacity = '0';
      });

      // Find all main Layer groups (Layer1, Layer2, ..., Layer15)
      const layerGroups = Array.from(svgContent.querySelectorAll('g[id^="Layer"]'));

      // Hide all layers initially
      layerGroups.forEach(g => {
        g.style.opacity = '0';
        g.style.transition = 'opacity 0.8s cubic-bezier(.4,1.4,.4,1), filter 0.8s cubic-bezier(.4,1.4,.4,1)';
        g.style.filter = 'drop-shadow(0px 0px 0px rgba(0,0,0,0))';
      });

      // Insert SVG into container
      interactiveContainer.innerHTML = '';
      interactiveContainer.appendChild(svgContent);
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

      if (!loadingHidden && i === 0) {
          hideLoadingOverlay();
          loadingHidden = true;
        }
      }

      // Call hover/link logic after all layers are visible
      addCvSvgHoverEffects(svgContent);

      await insertCheckpointSVG();
      showCheckpointAnimation();
      // Optionally, set initial checkpoint position here
  
   }











      
    async function processSvgFile(svgString, totalSteps, loadingElements, currentStep) {
      // Parse the SVG string of the specific file
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');

      // Check for parsing errors
      if (svgDoc.querySelector('parsererror')) {
        hideLoadingOverlay();
        return null;
      }

      // Extract the SVG content
      const svgContent = svgDoc.documentElement;

      // Select only the relevant parts (e.g., <g> and <path> elements)
      const svgParts = svgContent.querySelectorAll('g, path');
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
      return svgContent;
    }



    
    // --- CALL THE FUNCTION HERE ---
    const svgContent = await processSvgFile(svgString, totalSteps, loadingElements, currentStep);
    if (!svgContent) return;

    interactiveContainer.innerHTML = '';
    interactiveContainer.appendChild(svgContent);
    interactiveContainer.classList.add('active');
    interactiveContainer.style.visibility = 'visible';
    interactiveContainer.style.opacity = '1';
    hideLoadingOverlay();

    // CV.SVG-specific function called here
    if (svgType === 'cv') {
      addCvSvgHoverEffects(svgContent);
    }
  } catch (err) {
    console.error('Error in showSVGContent:', err);
    hideLoadingOverlay();
  }
}






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



// --- Wind Wave Animation for Feathers ---
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
// ...rest of your code...

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


