/** 
   MIT License.
   Copyright (C) QMX Corporation.
*/

/* A Mask */
let MASK_KEY;

/* The MagicNumber */
let MagicNumber = 0xAA557100158n;

/** 
   @param {variable} Key
   The Function under generate the Key */
export function generateKey(Key) {
  /* The Offset */ 
  let offset = 16n;
  /* A Simple Mask */ 
  let SimpleMask = 0x55578192202029n;
  /* A Temporary Key */
  let TemporKey = 0xAA559ADn;
  /* The Loop for define the Mask */
  for (let i = 0n; i < offset; i++) {
    /* Apply a Mask in Offset*/ 
    TemporKey = (SimpleMask << 200n) >>
      (SimpleMask | 400n ^ 1n) << 
      (SimpleMask >> 2n | 4n) >>
      (SimpleMask ^ 3n | 5n) <<
      (SimpleMask | 4n ^ 5n) >>
      500n | offset ^ MagicNumber;
    /* Define the Real Mask */
    MASK_KEY = (TemporKey << 200n) >>
      (TemporKey | 400n ^ 1n) << 
      (TemporKey >> 2n | 4n) >>
      (TemporKey ^ 3n | 5n) <<
      (TemporKey | 4n ^ 5n) >>
      500n | SimpleMask ^ MagicNumber;
  }
  return Key | SimpleMask ^
    MagicNumber << offset >> 
    MagicNumber | MASK_KEY;
}