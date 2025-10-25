---
slug: phase-3-day-8

title: Phase 3 - PLC Optimisation - 
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising RECIPE_COPY



<!-- truncate -->

## Optimising RECIPE_COPY

| Usage      | use case                                                                               |
|:-----------|:---------------------------------------------------------------------------------------|
| PIC420 :5  | Copy part of running viscoParams recipe to FIXED consecutive reals in "Real registers" | 
| PIC420 :28 | transfer one parameter of Selected Recipe into RecipeRunning.  `PC420_Step115`         | 
| PIC420 :28 | transfer one parameter of Selected Recipe into RecipeRunning.  `PC420_Step120`         | 
| PIC420 :29 | transfer one parameter of Selected Recipe into RecipeRunning.   `PC420_Step40_45`      | 
| PIC420 :35 | transfer RecipeEdit to  Selected Recipe.                                               | 


On reflection, the use cases of this function all can be achieved by use of Array indirect addressing, according to
use case directly at point of need.

Making the `RECIPE_COPY` function redundant.