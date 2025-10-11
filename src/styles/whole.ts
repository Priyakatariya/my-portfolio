// File: src/styles/whole.ts (Ensure this structure is correct)

import { createGlobalStyle } from 'styled-components';

export const wholeglobalstyles = createGlobalStyle`
    /* A small CSS reset to remove default browser styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Color variables defined on the root element */
    :root {
        --dark-bg: #121E36; 
        --blue-accent: #64FFDA;
        --light-slate: #CCD6F6;
        --slate: #8892B0;
        --dark-slate: #233554; 
        --card-bg: #172A45; 
    }

    html {
        font-size: 62.5%; /* 1rem = 10px */
        scroll-behavior: smooth;
    }

    /* Main body styles: IMPLICITLY USE !important IF STYLES ARE NOT APPLYING */
    body {
        background-color: var(--dark-bg) !important; /* Added !important for safety */
        color: var(--light-slate) !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 1.6rem;
        line-height: 1.5;
        min-height: 100vh; /* Ensure body covers full viewport */
        overflow-x: hidden;
    }

    /* ... (rest of the styles) ... */
`;