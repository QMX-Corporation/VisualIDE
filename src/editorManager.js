/** 
  MIT License.
  Copyright (C) QMX Corporation 
*/

/* Libs */ 
import { Editor } from './editor.js';

/* The MainClass */
export class EditorManager {

  /* Constructor */ 
  constructor() {
    /* A Array of Files-Opened */
    this.listOfFiles = [];
    /* Null: No Files Selecioneds */
    this.currentFile = null;
  }
  /**
   @param {Editor} editor
   AddFile (or OpenFile)
  */ 
  openFile(editor) {
    /* Add the File: Array */ 
    this.listOfFiles.push(editor);
    /* Define the File: Selecioned */ 
    this.currentFile = editor;
  }
  /** 
    @param {Editor} editor
    CloseFile
   */ 
  closeFile(editor) {
    /* 1. Remove the file from array */
    this.listOfFiles = this.listOfFiles.filter(item => item !== editor);
    /* 2. Check if the closed file was active */
    if (this.currentFile === editor) {
      if (this.listOfFiles.length > 0) {
        this.currentFile = this.listOfFiles[this.listOfFiles.length - 1];
      } else {
        this.currentFile = null;
      }
    }
  }
  /** 
    @param {Editor} editor
    SwitchFile 
  */ 
  switchFile(editor) {
    /* Check if the Array is in the Array */ 
    if (this.listOfFiles.includes(editor)) {
      /* Update the Active File */
      this.currentFile = editor;
    }
  }
}