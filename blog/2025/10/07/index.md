---
slug: phase-1-investigation-day-5
title: Phase 1 - Investigation - Migrating PLC
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal , Future Task]
---

## Today's Tasks
1. [Investigate significance of migration removing OB85 & 87](https://github.com/pfAuto/project-uni/issues/17) ✅
2. [Add IO Modules to 1500 Hardware Config](https://github.com/pfAuto/project-uni/issues/19) ✅
3.  Begin creation of SCL functions which didn't migrate.
    1. [Create replacement for "REAL_TO_INT"](https://github.com/pfAuto/project-uni/issues/20) ✅
    2. [Create replacement for "REAL TO TIME"](https://github.com/pfAuto/project-uni/issues/21) ✅
    3. [Replace usage for "REAL TO TIME"](https://github.com/pfAuto/project-uni/issues/23) ✅
    4. [Replace usage for "REAL TO INT"](https://github.com/pfAuto/project-uni/issues/24) ✅
    5. [Create replacement for "SBL Reset Tmp Logg Data"](https://github.com/pfAuto/project-uni/issues/22)  <i>📝 TODO</i>
<!-- truncate -->
## Investigate significance of migration removing OB85 & 87

### What are OB85 and OB87?
#### Findings

:::info
- OB85 "Communication Fault"
- OB87 "RackFlt"

These blocks were empty, so only used to prevent CPU Stop, if they were called.
:::

### What next?

:::warning Future Task
If time allows to investigate system diagnostics.
:::
## Add IO Modules to 1500 HW Config

### Method
Re-migrated from classic project this time selecting the "Include hardware configuration"<sup>[1](#references)</sup> checkbox and followed instruction from page 47 to 54.
- [Add IO modules to Hardware Config of 1500](https://github.com/pfAuto/project-uni/issues/19) - ✅ 


Still have errors with FC248, FC250 and FC346 as these were SCL blocks without the source code. Will need to implement
new function for these FC's.

## Implementation of SCL Functions

Implemented the "REAL TO TIME" and "REAL TO INT" functions in SCL mainly employing the CONVERT function.

### Method - How to use CONVERT 

In the editor start typing CONV and a context menu pops up for the selection of source and then destination data type.

Found this in the TIA (F1) Helper docs.

Implementing FC346 "SBL Reset Tmp Logg Data" is going to take more investigation into it's use and that of the Logger
mechanism in general.

## What's next?

 Following this up, for starters, with [Is _STD_DB_BUFFER actually employed?](https://github.com/pfAuto/project-uni/issues/26)

## References
1. [Guide for Migrating SIMATIC S7-300/400 to SIMATIC S7-1500 and TIA Portal, page 47](https://cache.industry.siemens.com/dl/files/811/109478811/att_1006917/v1/109478811_GuideForMigration_S7-300_S7-1500_V11_en.pdf)