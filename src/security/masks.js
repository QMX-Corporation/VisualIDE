/** 
  MIT License.
  Copyright (C) QMX Corporation 
*/

/* Libs Imports */
import { generateKey } from "../AEMos/aemos.js";
import { encryptBlocks, decryptBlocks } from "../AEMos/encrypter.js";

/** A Variable for Mask. In JavaScript:
  Create a Variable (e.g: let yeayes = "Num"),
  this Variable in RAM (Random Access Memory) and a
  malicious plugin installed have access the
  Variable and Modify */
export let MASK_KEY = 0x5A;

/**
  @param {number} index
  A Function for
    apply the XOR-OR Mask for generation of the
    Mask Key */ 
export function gerKey(index) {
  /* A Var for the Loop */
  let MagicNumber = 0xAA557100158n;
  /* The Var of the Iterations */
  let iterations = 24;
  /** A Loop For for apply the mask
    in the MASK_KEY */ 
  for (let i = 0; i < iterations; i++) {
      /** Uses the MagicNumber with
       shift-bit (<< and >>) for apply the Mask
      in offsets */ 
      MagicNumber = (MagicNumber >> BigInt(i + 1) ^ (MagicNumber >> 2n) | (MagicNumber ^ 3n) << (MagicNumber | 4n)) ^ MASK_KEY | BigInt(index);
  }
  /** Return the MagicNumber Masked */
  return Number(MagicNumber & 0xFFn);
}

/** 
   @param {string} secretString
   A Function for apply the mask */
export function maskApply(secretString) {
  // A Handling
  if (!secretString) return [];
  // Array
  let maskedBytes = [];
  /* Convert String to Code Points Array (Branchless & Constant-Time for Unicode/Emojis) */
  let codePoints = Array.from(secretString);
  /** A Loop for apply the Mask */ 
  for (let i = 0; i < codePoints.length; i++) {
    /* Extract the Numeric Code Point Value */
    let numericValue = codePoints[i].codePointAt(0);   
    /* Apply the Mask and push without Branching */
    maskedBytes.push(numericValue ^ gerKey(i));
  }
  // Return the Array 
  return maskedBytes;
}

/**
 * A Function for unmasking
 * @param {Array<number>} maskedBytes
 * @returns {string}
 */
export function unmaskApply(maskedBytes) {
  /* A Handling */
  if (!maskedBytes || !Array.isArray(maskedBytes)) return "";
  /* A Array */
  let unmaskedChars = [];
  /** A Loop for unmask */
  for (let i = 0; i < maskedBytes.length; i++) {
    let originalNumericValue = maskedBytes[i] ^ gerKey(i);
    unmaskedChars.push(String.fromCodePoint(originalNumericValue));
  }  
  /* Return the Unmasked */ 
  return unmaskedChars.join("");
}

/**
 * High-Level Encryption Handler combining AES & Custom Masking
 * @param {Uint8Array} state - 16-byte block
 * @param {Array<Uint8Array>} roundKeys - 32 Round Keys
 */
export function processEncrypt(state, roundKeys) {
  encryptBlocks(state, roundKeys);
}

/**
 * High-Level Decryption Handler combining AES & Custom Masking
 * @param {Uint8Array} state - 16-byte block
 * @param {Array<Uint8Array>} roundKeys - 32 Round Keys
 */
export function processDecrypt(state, roundKeys) {
  decryptBlocks(state, roundKeys);
}