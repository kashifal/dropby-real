import { withShurikenUI } from '@shuriken-ui/tailwind';
import colors from 'tailwindcss/colors';

/**
 * The `withShurikenUI` function injects the Shuriken UI preset
 * into the Tailwind CSS configuration.
 *
 * Allows VSCode to provide autocompletion
 * for Tailwind CSS classes.
 */
export default withShurikenUI({
  content: [
         // Paths to your files where Tailwind CSS classes will be used
        
  ],
  plugins: [
    // Add other Tailwind plugins here if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        muted: colors.stone,
      },
      // You can add other theme extensions here
    },
  },
});
