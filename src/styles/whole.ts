import { createGlobalStyle } from 'styled-components';

export const wholeglobalstyles = createGlobalStyle`
    /* A small CSS reset to remove default browser styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Color variables for consistent styling */
    :root {
        --dark-bg: #0A192F;
        --light-slate: #404f80ff;
        --blue-accent: #64FFDA;
        --slate: #8892B0;
        --dark-slate: #495670;
    }

    html {
        font-size: 62.5%; /* 1rem = 10px */
        scroll-behavior: smooth;
    }

    /* Main body styles, this will fix the white background */
    body {
        background-color: var(--dark-bg);
        color: var(--light-slate);
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        overflow-x: hidden;
    }

    /* Fix for invisible text on a dark background */
    h1, h2, h3, h4, h5, h6 {
      color: var(--light-slate);
      font-weight: 700;
    }

    p {
        color: var(--slate);
    }
    
    a {
        text-decoration: none;
        color: var(--blue-accent);
    }
`;