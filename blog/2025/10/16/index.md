---
slug: phase-2-day-8
title: Phase 2 - Resolve Compilation Warnings
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---

## Today's Tasks
:::info
Directly below are links to project issues. **Use the sidebar for in-blog navigation --->**
:::
1. Compilation Warnings
    1. [_USR_PhaseBasic](https://github.com/pfAuto/project-uni/issues/56)
<!-- truncate -->

## Compilation Warnings

### _USR_PhaseBasic

#### Method

Like `_STD_PhaseBasic`,

1. Set block to `optimized block access` ![img1.png](/img/2025/10/16/img1.png)
2. Delete construction of ANY pointer in network 3
3. define formal `InOut` parameter `InterlocksHeader` with type `_STD_CondHeader`
4. define formal `InOut` parameter `Interlocks` with type `Array[*] of _STD_CondType`
5. define formal `InOut` parameter `RunningFaultsHeader` with type `_STD_CondHeader`
6. define formal `InOut` parameter `RunningFaults` with type `Array[*] of _STD_CondType`
7. deleted `LOG_AddData` formal parameter in `InOut`
8. Replaced calls of `_STD_CondEvaluation` with optimized access block `_stdConditionEvaluation`
9. Program Blocks > Compile > Software(rebuild all)

:::info
Published release `tia-v0.1.0`
:::