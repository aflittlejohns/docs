---
slug: phase-3-day-8

title: Phase 3 - PLC Optimisation - 
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising RECIPE_COPY
2. Optimising _USR_COUNT_1



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

### Changes in PIC420


![PIC420 Network 5, Changes](/img/2025/10/25/pic420Network5.png)

The screenshot above show network 5 as it was, which was subsequently deleted, and the code in network 6 which replaces
and becomes network 5.

![PIC420 Network 28 Changes](/img/2025/10/25/img2.png)

The screenshot above show network 28. The `MOVE` instruction replaces the functionality of the `RECIPE_COPY` function,
which was subsequently deleted. This was repeated to move parameter `PC420_Step120` of the selected recipe to `PC420_Step120`
of the running recipe.

![PIC420 Network 35, Changes](/img/2025/10/25/img3.png)

The screenshot above show network 35. The `MOVE` instruction replaces the functionality of the `RECIPE_COPY` function,
which was subsequently deleted. In this case the selected recipe UDT data is moved to the running recipe.

## Optimising _USR_Count1

See Section 2 of the following manual.
[SIMATIC ET200S Technological Functions](https://cache.industry.siemens.com/dl/files/111/9264111/att_80181/v1/et200s_technological_functions_operating_instructions_en_en-US.pdf)