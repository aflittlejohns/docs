---
slug: phase-3-day-3
title: Phase 3 - PLC Optimisation - _STD_CM_DI, _STD_CM_AO
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising _STD_CM_DI
2. Optimising _STD_CM_AO
<!-- truncate -->

## Optimising _STD_CM_DI

### Method

1. Added UDTs `_STD_DI_Ctrl`, `_STD_DI_Par` and `_STD_DI_Stat` to `Project Library > Types`.
2. Versioned Originals as V0.2.0
3. Edited the above UDTs positioning the bits and words, so that when the optimised DB is transferred to non-optimised DB the bit will be in the write absolute address for the SCADA's DA server.
4. Re-defined all usage of M bit memory within the FB to use the `Input` or `InOut` block interface. all prefixed with "sysCM" and "sysClockBits" **Need to replace global memory bit tags with Global DB tags.**
5. `_STD_CM_DI` compiled and copied to `Project Library > Types`
6. Updated all block calls and actual parameters in FB `INPUT_OBJ`

published pre-release [tia-v0.1.2 - Optimised - _STD_CM_DI](https://github.com/pfAuto/project-uni/releases/tag/tia_v0.1.2)

## Optimising _STD_CM_AO

### Method

1. Added UDTs `_STD_AO_Ctrl`, `_STD_AO_Par` and `_STD_AO_Stat` to `Project Library > Types`.
2. Versioned Originals as V0.2.0
3. Edited the above UDTs positioning the bits and words, so that when the optimised DB is transferred to non-optimised DB the bit will be in the write absolute address for the SCADA's DA server.
4. Re-defined all usage of M bit memory within the FB to use the `Input` or `InOut` block interface. all prefixed with `sysCM` **Need to replace global memory bit tags with Global DB tags.**
5. _STD_CM_AO compiled and copied to `Project Library > Types`
6. Updated all block calls of `_STD_CM_AO` and actual parameters in FB `OUTPUT_OBJ`

published pre-release [tia-v0.1.3 - Optimised - _STD_CM_AO](https://github.com/pfAuto/project-uni/releases/tag/tia_v0.1.3)
