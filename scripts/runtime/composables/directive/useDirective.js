import { spacing, toArray, hasValue } from "../utils/useProps.js";
export function useDirective(element) {
  if (element && element.attributes) {
    for (const attr of element.attributes) {
      switch (attr.name) {
        // useBlock.ts
        case "text-break":
          element.classList.add(`text-break`);
          break;
        case "text-alignment":
          element.classList.add(`text-${attr.value}`);
          break;
        case "text-wrap":
          element.classList.add(`text-${attr.value}`);
          break;
        case "align-self":
          element.classList.add(`align-self-${attr.value}`);
          break;
        case "align-items":
          element.classList.add(`align-items-${attr.value}`);
          break;
        case "align-content":
          element.classList.add(`align-content-${attr.value}`);
          break;
        case "flex":
          element.classList.add(
            ...addClassNames(
              attr.value,
              (n) => `d${hasValue(attr.value) ? `-${n}` : ""}-flex`
            )
          );
          break;
        case "flex-direction":
          element.classList.add(...addClassNames(attr.value, (n) => `flex-${n}`));
          break;
        case "flex-fill":
          element.classList.add(
            ...addClassNames(
              attr.value,
              (n) => `flex${hasValue(attr.value) ? `-${n}` : ""}-fill`
            )
          );
          break;
        case "flex-grow":
          element.classList.add(`flex-${attr.value}`);
          break;
        case "flex-wrap":
          element.classList.add(...addClassNames(attr.value, (n) => `flex-${n}`));
          break;
        case "flex-order":
          element.classList.add(`order-${attr.value}`);
          break;
        case "float":
          element.classList.add(`float-${attr.value}`);
          break;
        case "shadow":
          element.classList.add(
            `shadow${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        // ratio ?
        case "ratio":
          element.classList.add(`ratio-${attr.value}`);
          break;
        case "fixed":
          element.classList.add(`fixed-${attr.value}`);
          break;
        case "sticky":
          element.classList.add(`sticky-top`);
          break;
        // clearfix ?
        case "overflow":
          element.classList.add(`overflow-${attr.value}`);
          break;
        case "table-responsive":
          element.classList.add(
            `table-responsive${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "justify-content":
          element.classList.add(`justify-content-${attr.value}`);
          break;
        // vstack ?
        // hstack ?
        case "align":
          element.classList.add(`align-${attr.value}`);
          break;
        case "order":
          element.classList.add(`order-${attr.value}`);
          break;
        case "offset":
          element.classList.add(...addClassNames(attr.value, (n) => `offset-${n}`));
          break;
        case "object-fit":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `object-fit-${n}`)
          );
          break;
        case "z":
          element.classList.add(...addClassNames(attr.value, (n) => `z-${n}`));
          break;
        // useInline
        case "font-size":
          element.classList.add(`fs-${attr.value}`);
          break;
        case "font-weight":
          element.classList.add(`fw-${attr.value}`);
          break;
        case "font-style":
          element.classList.add(`fst-${attr.value}`);
          break;
        case "line-height":
          element.classList.add(`lh-${attr.value}`);
          break;
        case "font-monospace":
          element.classList.add(`font-monospace`);
          break;
        case "text-reset":
          element.classList.add(`text-reset`);
          break;
        case "text-decoration":
          element.classList.add(`text-decoration-${attr.value}`);
          break;
        case "text-truncate":
          element.classList.add(`text-truncate`);
          break;
        case "text-transform":
          element.classList.add(`text-${attr.value}`);
          break;
        case "text-background":
          element.classList.add(`text-bg-${attr.value}`);
          break;
        case "headings":
          element.classList.add(`h${attr.value}`);
          break;
        // lead ?
        // marl ?
        // small ?
        case "text-color":
          element.classList.add(`text-${attr.value}`);
          break;
        case "padding":
          element.classList.add(
            ...addClassNames(attr.value, (n) => spacing(n, "p"))
          );
          break;
        case "margin":
          element.classList.add(
            ...addClassNames(attr.value, (n) => spacing(n, "m"))
          );
          break;
        case "gap":
          element.classList.add(...addClassNames(attr.value, (n) => `gap-${n}`));
          break;
        case "visually-hidden":
          element.classList.add(
            `visually-hidden${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "vertical-Align":
          element.classList.add(`align-${attr.value}`);
          break;
        // invisible ?
        case "user-select":
          element.classList.add(`user-select-${attr.value}`);
          break;
        case "pointer-events":
          element.classList.add(`pe-${attr.value}`);
          break;
        case "background-color":
          element.classList.add(`bg-${attr.value}`);
          break;
        case "background-gradient":
          element.classList.add(`bg-gradient`);
          break;
        case "background-opacity":
          element.classList.add(`bg-opacity-${attr.value}`);
          break;
        case "relative-width":
          element.classList.add(`w-${attr.value}`);
          break;
        case "relative-height":
          element.classList.add(`h-${attr.value}`);
          break;
        case "max-width":
          element.classList.add(`mw-100`);
          break;
        case "max-height":
          element.classList.add(`mh-100`);
          break;
        case "viewport-width":
          element.classList.add(`vw-100`);
          break;
        case "viewport-height":
          element.classList.add(`vh-100`);
          break;
        case "min-viewport-width":
          element.classList.add(`min-vw-100`);
          break;
        case "min-viewport-height":
          element.classList.add(`min-vh-100`);
          break;
        case "display":
          element.classList.add(...addClassNames(attr.value, (n) => `d-${n}`));
          break;
        case "opacity":
          element.classList.add(`opacity-${attr.value}`);
          break;
        case "placeholder":
          element.classList.add(
            `placeholder${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "placeholder-size":
          element.classList.add(`placeholder-${attr.value}`);
          break;
        case "col":
          element.classList.add(
            ...addClassNames(hasValue(attr.value), (n) => `col-${n}`)
          );
          break;
        case "position":
          element.classList.add(`position-${attr.value}`);
          break;
        case "top":
          element.classList.add(`top-${attr.value}`);
          break;
        case "start":
          element.classList.add(`start-${attr.value}`);
          break;
        case "end":
          element.classList.add(`end-${attr.value}`);
          break;
        case "bottom":
          element.classList.add(`bottom-${attr.value}`);
          break;
        case "translate":
          element.classList.add(`translate-${attr.value}`);
          break;
        // initialism ?
        case "focus-ring":
          element.classList.add(`focus-ring`);
          break;
        case "border":
          element.classList.add(
            `border${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "border-color":
          element.classList.add(`border-${attr.value}`);
          break;
        case "border-width":
          element.classList.add(`border-${attr.value}`);
          break;
        case "rounded":
          element.classList.add(
            `rounded${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "rounded-size":
          element.classList.add(`rounded-${attr.value}`);
          break;
        case "link-opacity":
          element.classList.add(`link-opacity-${attr.value}`);
          break;
        case "link-underline":
          element.classList.add(`link-underline`);
          element.classList.add(
            ...addClassNames(
              hasValue(attr.value),
              (n) => `link-underline-opacity-${n}`
            )
          );
          break;
        case "link-offset":
          element.classList.add(
            ...addClassNames(hasValue(attr.value), (n) => `link-offset-${n}`)
          );
          break;
        case "stretched-link":
          element.classList.add(`stretched-link`);
          break;
        case "link":
          element.classList.add(`link-${attr.value}`);
          break;
      }
    }
  }
}
function addClassNames(value, func) {
  const classArray = [];
  const values = toArray(value);
  values.forEach((n) => {
    classArray.push(func(n));
  });
  return classArray;
}
