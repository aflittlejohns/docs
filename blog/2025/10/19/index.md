---
slug: phase-3-day-2
title: Phase 3 - PLC Optimisation - _STD_CM_AI
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---

## Optimising _STD_CM_AI

### Method

1. Added UDTs `_STD_AI_Ctrl`, `_STD_AI_Par` and `_STD_AI_Stat` to `Project Library > Types`.
2. Versioned Originals as V0.0.1
3. Edited the above UDTs employing arrays and positioned the bits of each boolean array, so that when the optimised DB is transferred to non-optimised DB the bit will be in the write absolute address for the SCADA's DA server.
4. Re-defined all usage of M bit memory within the FB to use the `Input` or `InOut` block interface. all prefixed with "system" **Need to replace global memory bit tags with Global DB tags.**
5. _STD_CM_AI compiled and copied to `Project Library > Types`
<!-- truncate -->

published pre-release [tia-v0.1.1 - Optimisation - _STD_CM_AI](https://github.com/pfAuto/project-uni/releases/tag/tia_v0.1.1)
