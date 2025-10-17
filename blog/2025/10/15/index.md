---
slug: phase-2-day-7
title: Phase 2 - Resolve Compilation Warnings
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal, IT]
---

## Today's Tasks
:::info
Directly below are links to project issues. **Use the sidebar for in-blog navigation --->**
:::
1. Compilation Warnings
    1. [_STD_PhaseBasic](https://github.com/pfAuto/project-uni/issues/56)
<!-- truncate -->

## Compilation Warnings

### _STD_PhaseBasic

:::info The Formal Parameter - `Array[*]`
"Optimized block access" allows the use of the `Array[*]` formal parameter. 

With `Array[*]`, arrays with variable length can be transferred to functions and function blocks.
:::

1. Set the block attributes property "Optimized block access" to TRUE, which enables the use of the `Array[*]` formal 
parameter. With `Array[*]`, arrays with variable length can be transferred to functions and function blocks.  
2. Split the Interlock and RunningFault block parameters each into two formal parameters, as shown below. ![Use of Array[*]](/img/2025/10/15/img1.png)
3. deleted all **** LOGGING **** networks, as not used and caused compilation errors. 
4. Replaced the function `_STD_CondEvaluation` with a newly created function `_stdConditionEvaluation`. This function
written in SCL makes use of `Array[*]` and symbolic indirect addressing, i.e `array[index].variable`.
5. Updated block calls and actual parameters of `_STD_PhaseBasic` throughout code base.
6. Program Blocks > Compile > Software(rebuild all).


## Green light - OT Network