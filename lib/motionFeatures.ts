// The Framer Motion animation features the site uses (opacity and transform).
// Kept in its own file so MotionProvider can load it after the page has
// appeared, instead of making every visitor download it up front.
import { domAnimation } from "framer-motion";

export default domAnimation;
