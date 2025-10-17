---
title: Accessing Instance DB in STL
---

The result of the following instructions, has changed in TIA Portal.
- `OPN DI`
- `LAR2`
- `+AR2`
- `TDB`
- `TAR`

Although the above instructions change the contents of the DI or address registers, **the address registers are NOT 
evaluated when addressing local parameters.**

## Example 1
The following example shows the modified semantics of the instruction `OPN DI`
```text
    L #MyIn1
    L #MyIn2
    +I
    T #MyOut3
    
    OPN DI "MyDB" // The global datablock "MyDB" is written to the DI register.
    
    L #MyIn1     // The `L` and `T` instructions address the tags that were declared in the block interface. The DI  
    L #MyIn2     // register is not evaluated for access in S7-1500.
    +I
    T #MyOut3
```
:::warning
This will affect multi-instance use cases.
:::

## Example 2
The following example shows the modified semantics of the instruction `LAR2`
```text
    L P#M23.0
    LAR2
    L #MyIn1        // Access to the formal parameter "MyIn1" is correctly executed
    
    L IW [AR2, P#1.0]  // Access to %IW24.0
    A [AR2, P#0.4]      // Access to %M23.4
    

```
## Example 3
The following shows how a DB tag can be accessed indirectly in S7-1500 without using the address register. That is, by
using arrays.
```text
    OPN "MyDB"
    L #index
    LAR1
    L DBW [AR1 , P#10.0]
    
    L "MyDB".MyArray1[#index] // This line replaces the above four lines. 
    
```

    

:::danger  A lot of work in this approach!
However, symbolic tag names within "MyDB" will change, requiring multiple modifications where original tags names 
were used.
:::                
