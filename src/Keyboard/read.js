/** 
  MIT License.
  Copyright (C) QMX Corporation.
*/

/** 
   @param {string} target
   @returns {string}
   A Function: Read the Keyboard 
*/

export function readInput(target) {
  /* The target is a Selector HTML or
   ID? */ 
  if (typeof target === "string") {
    /* Page Element */
    let PageElement = document.querySelector(target);
    /* Element not found? Return empty string */
    if (!PageElement) return "";
    /* Is a Input Element (e.g: <input>)? */
    if (PageElement.tagName === "INPUT" || "value" in PageElement) {
       let input = PageElement.value;
       return input;
    }
    /* No? Get the Content */
    else {
      let content = PageElement.textContent;
      return content;
    }
  }
  /* The target is the Selector HTML/ID 
    (object)? */
  if (typeof target === "object" && target !== null) {
    return target.value || target.textContent || "";
  }
  /** Handling: Return a string */
  return "";
}