// One IntersectionObserver shared by every scroll reveal on the page.
//
// Creating a separate observer per element is a common cause of jank on
// slower phones, so every <Reveal> registers here instead. We never listen to
// scroll events: the browser tells us when an element crosses the viewport.

type RevealCallback = (entry: IntersectionObserverEntry) => void;

const callbacks = new Map<Element, RevealCallback>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (observer === null) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const callback = callbacks.get(entry.target);
          if (callback) {
            callback(entry);
          }
        }
      },
      // Trigger once an element is 10% of the way up the screen, so the
      // animation is seen rather than happening just out of view.
      { rootMargin: "0px 0px -10% 0px" },
    );
  }
  return observer;
}

export function observeReveal(element: Element, callback: RevealCallback) {
  callbacks.set(element, callback);
  getObserver().observe(element);
}

export function unobserveReveal(element: Element) {
  callbacks.delete(element);
  if (observer !== null) {
    observer.unobserve(element);
  }
}
