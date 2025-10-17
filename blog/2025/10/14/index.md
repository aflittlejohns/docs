---
slug: phase-2-day-6
title: Phase 2 - Resolve Compilation Warnings
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal]
---

## Today's Tasks
:::info
Directly below are links to project issues. **Use the sidebar for in-blog navigation --->**
:::
1. Compilation Warnings
    1. [_STD_CM_Motor](https://github.com/pfAuto/project-uni/issues/71)
   2. [SBL Object Control PAP](https://github.com/pfAuto/project-uni/issues/52)
   3. [_STD_PhaseBasic](https://github.com/pfAuto/project-uni/issues/56)
<!-- truncate -->

## Compilation Warnings

### _STD_CM_Motor

#### Investigation

Absolute address access employed for three UDT's, _STD_Motor_Ctrl, _STD_Motor_Par and _STD_Motor_Stat.

Word0 of _STD_Motor_Ctrl requires symbolic access, UDT word 0 is all bool, can there added variable of type word

Word0 of _STD_Motor_Par requires symbolic access, UDT has mix types, therefore requires new UDT for access

DWord0 of _STD_Motor_Stat requires symbolic access, UDT DWord 0 is all bool, can there added variable of type DWord

#### The Fix

Created new UDT's
- _stdMotorParAccess

Replace usage of absolute address with the appropriate symbolic address.

### SBL Object Control PAP

### The Fix
Moved all block parameters which were raising compilation warnings to the `InOut` interface parameter area

### _STD_PhaseBasic

#### Investigation

This function block employs two formal parameters with the `ANY` data type in the `Input` block interface. The actual 
parameter of each reference's a `Struct` data type which is construct from a UDT and an array of another UDT.

Internally the ANY pointer is modified to include a multiple-instance offset with the result stored in a temp variable.

However, in tia we could employ symbolic addressing and split the fix header and variable length array of UDT's into 
two formal parameters.

Then pass these as references to internally called functions.

To be continued...