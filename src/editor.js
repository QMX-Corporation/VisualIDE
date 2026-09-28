/** 
  MIT License.
  Copyright (C) QMX Corporation 
*/


/* The MainClass */
export class Editor {
  /* Bad Constructor */
  constructor() {
    /* The Content */
    this.contentText = "";
    /* Language (e.g: C, C++, Assembly) */
    this.languageFile = null;
    /* Alterations: No Save */
    this.dirtyState = false;
    /* Name of File */ 
    this.nameFile = "";
  }
  /**
     @param {string} newText
     Method: Update the Content if 
   the User write in the File */ 
  updateContent(newText) {
    /* Update the contentText */ 
    this.contentText = newText;
    /* Dirty State: TRUE! */ 
    this.dirtyState = true;
  }
  /**
    @param {string|object} File
    Method: 
      Save the File */ 
  saveFile(File) {
    /* Is a String? */ 
    if (typeof File === "string") {
      this.nameFile = File;
    }
    /* Is a Object? */
    if (typeof File === "object" && File !== null) {
      /* Update the NameFile */
      this.nameFile = File.name;
    }
    /* Reset dirty state after saving */
    this.dirtyState = false;
  }
  /** 
   @param {string} lang
   Method: 
   Set the Language
  */ 
  setLanguage(lang) {
    this.languageFile = lang;
  }
}