---
slug: phase-3-day-7

title: Phase 3 - PLC Optimisation - 
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---
## Today's Tasks
1. Optimising RECIPE_COPY



<!-- truncate -->

## Optimising RECIPE_COPY


`"Real registers".REAL(\d{1,})`

`"Real registers".realArr[$1]`

```xml
      <Symbol>
        <Component Name="Real registers" />
        <Component Name="REAL(\d{1,})" />
      </Symbol>
```

```xml
      <Symbol>
        <Component Name="Real registers" />
        <Component Name="realArr" AccessModifier="Array">
          <Access Scope="LiteralConstant">
            <Constant>
              <ConstantType>DInt</ConstantType>
              <ConstantValue>$1</ConstantValue>
            </Constant>
          </Access>
        </Component>
      </Symbol>
```