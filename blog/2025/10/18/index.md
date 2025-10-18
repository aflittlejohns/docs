---
slug: phase-3-day-1
title: Phase 3 - PLC Optimisation
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---

## Setting blocks to optimized

Compilation Errors with following blocks
- _STD_SystemFLT
- AerationAlarms, because of FaultTDAlsafe
- FaultTDAlsafe
- ALS Compare2RealArea
- ALS HMI Decoder IF/RF
- ALS RecipeCopy
- ALS StepTimeChange
- ALS TimeCalc
- CIPFlipSteps
- CIPSBSteps
- COM_M_Alcip_FC
- ControlModulesBegin
- EndVCLSteps
- FillEmptySteps
- LevelFaults, because of FaultTDAlsafe
- MixOutletSteps
- OtherFaults, because of FaultTDAlsafe
- PIC420, becasue of "RECIPE_COPY"
- RaiseLevelInCIP
- RECIPE_COPY
- Recipie, because of "ALS RecipeCopy" 
- SblRestTmpLoggData
- TankPressure, because of FaultTDAlsafe
- TempGuards, because of FaultTDAlsafe
- TT_BrokenFaults, because of FaultTDAlsafe
- "Valve Stroke", various IDBs not compiled.
- _STD_CM_AI
