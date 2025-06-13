import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getTextBgColor(firstLetter: string) {
    const colorPairs: { [key: string]: { textColor: string; bgColor: string } } = {
      A: { textColor: "#333", bgColor: "#ffbb00" },  // matches btn-primary start
      B: { textColor: "#333", bgColor: "#fd9f07" },  // matches btn-primary end
      C: { textColor: "#333", bgColor: "#ff6b6b" },  // from gradient-1
      D: { textColor: "#333", bgColor: "#ff8e53" },  // from gradient-1
      E: { textColor: "#333", bgColor: "#4ecdc4" },  // from gradient-2
      F: { textColor: "#333", bgColor: "#6dd5fa" },  // from gradient-2 / 12
      G: { textColor: "#333", bgColor: "#a1c4fd" },  // from gradient-3
      H: { textColor: "#333", bgColor: "#c2e9fb" },  // from gradient-3
      I: { textColor: "#333", bgColor: "#ff9a9e" },  // from gradient-4
      J: { textColor: "#333", bgColor: "#fad0c4" },  // from gradient-4 / 13
      K: { textColor: "#333", bgColor: "#d4fc79" },  // from gradient-5
      L: { textColor: "#333", bgColor: "#96e6a1" },  // from gradient-5
      M: { textColor: "#333", bgColor: "#84fab0" },  // from gradient-6
      N: { textColor: "#333", bgColor: "#8fd3f4" },  // from gradient-6
      O: { textColor: "#333", bgColor: "#f6d365" },  // from gradient-7
      P: { textColor: "#333", bgColor: "#fda085" },  // from gradient-7
      Q: { textColor: "#333", bgColor: "#a18cd1" },  // from gradient-8
      R: { textColor: "#333", bgColor: "#fbc2eb" },  // from gradient-8
      S: { textColor: "#333", bgColor: "#48c6ef" },  // from gradient-9
      T: { textColor: "#333", bgColor: "#6f86d6" },  // from gradient-9
      U: { textColor: "#333", bgColor: "#e0c3fc" },  // from gradient-10
      V: { textColor: "#333", bgColor: "#8ec5fc" },  // from gradient-10
      W: { textColor: "#333", bgColor: "#ffecd2" },  // from gradient-11
      X: { textColor: "#333", bgColor: "#fcb69f" },  // from gradient-11
      Y: { textColor: "#333", bgColor: "#fad0c4" },  // from gradient-13
      Z: { textColor: "#333", bgColor: "#ffd1ff" }   // from gradient-13
    };

    const upper = firstLetter.toUpperCase();
    return colorPairs[upper] || { textColor: "#000000", bgColor: "#FFFFFF" }; // default if not A-Z
  }
}
