---

title: Phase 4 - HMI Design - Importing OPC UA Tags
authors: [ aflittlejohns ]
tags: [ Log Book, TIA Portal,]
---

## Today's Tasks

1. [Add OPC UA Tags to Ignition Project](https://github.com/pfAuto/project-uni/issues/5)

<!-- truncate -->

## Add OPC UA Tags to Ignition Project

OPC UA tags can be discovered by the client. Employing the Inductive Automation Ignition designer's "Browse Devices"
facility, imported all the visible data blocks into the ignition gateway.

![img1](/img/2025/12/24/img1.png)

## Problem - The imported alarm tags require configuration.

```json
{
  "valueSource": "opc",
  "opcItemPath": "nsu\u003dhttp://www.siemens.com/simatic-s7-opcua;s\u003d\"AlarmHMI\".\"Alarm5\"",
  "dataType": "Boolean",
  "name": "Alarm5",
  "tagType": "AtomicTag",
  "opcServer": "SIMATIC.S7-1500.OPC-UA.Application:PLC_1"
}
```

The above JSON object shows a typical OPC boolean tag, which is not configured as an alarm tag. However, it's `name`
key has a value of "Alarm5"

We manually configured one such tag as an alarm tag and exported the "AlarmHMI" tag folder as a JSON file.
We found that the designer had added an `alarms` key to the alarm tags JSON object, as seen below;

```json

"alarms": [
{
"mode": "Inequality",
"name": "Alarm",
"displayPath": "",
"ackMode": "Auto"
}
]
```

We wanted to use the `displayPath` key to store the alarm comment.

From previous experience of the systems Aveva (Wonderware Intouch) SCADA, we knew the alarm comments are accessible in
a DBdump.csv file of the Intouch tags. From this file we extracted the following alarm comments , which were saved as a
ww_alarms.txt.
```text
Alarm: 000: M1 fault
Alarm: 001
Alarm: 002
Alarm: 003 M424 fault
Alarm: 004 M525 Fault
Alarm: 005 Power break
Alarm: 006 Material ID fault
Alarm: 007 Profibus fault
Alarm: 008 M4 fault
Alarm: 009 M4.1 fault
Alarm: 010 M5 fault
Alarm: 100 V415 fault
Alarm: 101 V431 fault
Alarm: 102 V432 fault
Alarm: 103 V434 fault
Alarm: 104 V435 fault
Alarm: 105 V436 fault
Alarm: 106 V437 fault
Alarm: 107 V438 fault
Alarm: 108 V439 fault
Alarm: 109 V441 fault
Alarm: 011 M5.1 fault
Alarm: 110 V444 fault
Alarm: 111 V445 fault
Alarm: 112 V448 fault
Alarm: 113 V462 fault
Alarm: 114 V463 fault
Alarm: 115 V465 fault
Alarm: 116 V473 fault
Alarm: 117 V475 fault
Alarm: 118 V476 fault
Alarm: 119 V480 fault
Alarm: 012 M525 High Temp Fault
Alarm: 120 V481 fault
Alarm: 121 V482 fault
Alarm: 122 V484 fault
Alarm: 123 V485 fault
Alarm: 124 V464 fault
Alarm: 125 V420 fault
Alarm: 126 V421 fault
Alarm: 127 V422 fault
Alarm: 128 V423 fault
Alarm: 129 V424 fault
Alarm: 013 M525 Shaft Seal Fault
Alarm: 130 V425 fault
Alarm: 131 V426 fault
Alarm: 132 V427 fault
Alarm: 133 V483 fault
Alarm: 134 V22_10 fault - Gasti EOL
Alarm: 135 V22_11 fault - Gasti EOL
Alarm: 136 V22_12 fault - Gasti EOL
Alarm: 137 V22_13 fault - Gasti EOL
Alarm: 138 V22_21 fault - Gasti EOL
Alarm: 139 V22_26 fault - Gasti EOL
Alarm: 014  Ampack 1 Doser steam barrier not active
Alarm: 140 TT440_B Broken
Alarm: 141 TT441_B Broken
Alarm: 142 Spare 142
Alarm: 143 Spare 143
Alarm: 144
Alarm: 145
Alarm: 146
Alarm: 147
Alarm: 148
Alarm: 149
Alarm: 015
Alarm: 150
Alarm: 151
Alarm: 152
Alarm: 153
Alarm: 154
Alarm: 155
Alarm: 156
Alarm: 157
Alarm: 158
Alarm: 159
Alarm: 016
Alarm: 017 Running fault: Tank pressure fault
Alarm: 018 CIP aborted
Alarm: 019 FT505 Fault
Alarm: 020 FT505 Low Flow
Alarm: 021 FT505 High Flow
Alarm: 022 LT525 broken
Alarm: 023 TT504 barrier fault
Alarm: 024
Alarm: 025 V401 fault
Alarm: 026 V403 fault
Alarm: 027 SV447 leakage detect
Alarm: 028 PSH515 fault
Alarm: 029 PSHH515 fault
Alarm: 030
Alarm: 031 V411 fault
Alarm: 032
Alarm: 033 Communication fault - CIP
Alarm: 034 Communication fault - Tetra Alsafe Steriliser
Alarm: 035
Alarm: 036 Communication fault - GEMINI
Alarm: 037 TT503 Fault
Alarm: 038 TT504 Fault
Alarm: 039 TT505 Fault
Alarm: 040 Emergency stop
Alarm: 041 Emergency stop
Alarm: 042 TT503 fault
Alarm: 043  TT504 fault
Alarm: 044  TT505 fault
Alarm: 045 Filter warning
Alarm: 046 PSH430 fault in CIP
Alarm: 047 Panel cooler fault
Alarm: 048 High level fault
Alarm: 049 Low level fault
Alarm: 050 Empty fault
Alarm: 500 Aer - TT881 is broken
Alarm: 501 Aer - TT852 is broken
Alarm: 502 Aer - TT871 is broken
Alarm: 503 Aer - TT872 is broken
Alarm: 504 Aer - TT873 is broken
Alarm: 505 Aer - TT874 is broken
Alarm: 506 Aer - TT851 is broken
Alarm: 507 Aer - TT882 is broken
Alarm: 508 Aer - TT853 is broken
Alarm: 509 Aer - TT883 is broken
Alarm: 051 Tank Low Sterile Pressure fault
Alarm: 510 Aer - PT853 is broken
Alarm: 511 Aer - PT883 is broken
Alarm: 512 Aer - Spare
Alarm: 513 Aer - Spare
Alarm: 514 Aer - Spare
Alarm: 515 Aer - Spare
Alarm: 516 Aer - Spare
Alarm: 517 Aer - Spare
Alarm: 518 Aer - Spare
Alarm: 519 Aer - Spare
Alarm: 052 Ster temp fault
Alarm: 520 Aer - Spare
Alarm: 521 Aer - Em-Stop remote IO Panel T059-11
Alarm: 522 Aer - Em-Stop SPX Aerator
Alarm: 523 Aer - Em-Stop Aeration area
Alarm: 524 Aer - Spare
Alarm: 525 Aer - Spare
Alarm: 526 Aer - Spare
Alarm: 527 Aer - Spare
Alarm: 528 Aer - Spare
Alarm: 529 Aer - Spare
Alarm: 053
Alarm: 530 Aer - Spare
Alarm: 531 Aer - Spare
Alarm: 054 Tank forward line pressure low
Alarm: 055 Filter fault
Alarm: 056 Air pressure fault
Alarm: 057
Alarm: 058
Alarm: 059
Alarm: 060 CIP unit fault
Alarm: 600 Aer - Comms lost with SPX Aerator
Alarm: 601 Aer - GS851 Connection fault
Alarm: 602 Aer - GS852 Connection fault
Alarm: 603 Aer - SIP Seq02 - Max time wait for drain temp
Alarm: 604 Aer - SIP Seq02 - Max time wait for heating temp
Alarm: 605 Aer - SIP Seq02 - Max time waiting for sterilising temp
Alarm: 606 Aer - SIP Seq03 - Max time wait for drain temp
Alarm: 607 Aer - SIP Seq03 - Max time wait for heating temp
Alarm: 608 Aer - SIP Seq03 - Max time waiting for sterilising temp
Alarm: 609 Aer - Barrier Cool - Condensate temp too high
Alarm: 061 Temp differenceTT440/TT441 too big
Alarm: 610 Aer - Cooling - Balance tank full
Alarm: 611 Aer - Cooling - Balance tank empty
Alarm: 612 Aer - Cooling - Product temperature too high
Alarm: 613 Aer - Cooling - Product temperature too low
Alarm: 614 Aer - Cooling - PHE low differential pressure
Alarm: 615 Aer - Transfer - Max time waiting to fill to aerator
Alarm: 616 Aer - Transfer - Max time waiting to fill to end of line
Alarm: 617 Aer - Transfer - Max time waiting for static product purge
Alarm: 618 Aer - Transfer - Max time for product static in line
Alarm: 619 Aer - Cooler steam barrier low temperature
Alarm: 062 Communication fault
Alarm: 620 Aer - Aerator steam barrier low temperature
Alarm: 621 Aer - Remote IO Panel T059-11 low air pressure pressure
Alarm: 622 Aer - Aerator low air pressure
Alarm: 623 Aer - Spare
Alarm: 624 Aer - Spare
Alarm: 625 Aer - Spare
Alarm: 626 Aer - Spare
Alarm: 627 Aer - Spare
Alarm: 628 Aer - Spare
Alarm: 629 Aer - Spare
Alarm: 063 TT441 broken
Alarm: 630 Aer - Spare
Alarm: 631 Aer - Spare
Alarm: 064 TT440 broken
Alarm: 065 TT485 broken
Alarm: 066 TT490 broken
Alarm: 067 Visco G1 Emptying level attained
Alarm: 068 TT460 broken
Alarm: 069 TT470 broken
Alarm: 070 TT445 broken
Alarm: 071
Alarm: 072
Alarm: 073 TT442 broken
Alarm: 074 TT443 broken
Alarm: 075 Override filter fault
Alarm: 076 Pressure high fault
Alarm: 077 V501 Fault
Alarm: 078 V502 Fault
Alarm: 079 V510 Fault
Alarm: 080 TT440 fault
Alarm: 081 TT460 fault
Alarm: 082 M525 No cooling water flow
Alarm: 083 TT490 fault
Alarm: 084 TT445 fault
Alarm: 085 TT485 fault
Alarm: 086 TT442 fault
Alarm: 087 Low volume in during SW Flush
Alarm: 088 Low flow out during SW Flush
Alarm: 089
Alarm: 090 Simulation active
Alarm: 091 Tank air pressure low
Alarm: 092 V402 fault
Alarm: 093 V405 fault
Alarm: 094 V406 fault
Alarm: 095 V408 fault
Alarm: 096 V409 fault
Alarm: 097 V410 fault
Alarm: 098 V413 fault
Alarm: 099 V414 fault
```

In this file we have the Alarm identification number in the "000" format followed by the alarm comment.

All we had to do was iterate through the ww_alarms.txt file, extracting the alarm number, converting this `str` to an
`Int`, then find the alarm in the alarms_tags.json file and add the appropriate `alarms` key to alarm tags identified by
the numbers in the ww_alarms.txt file.

Below is the python3 function we developed and ran in 'Jet Brains Intellij Ultimate' IDE for this task.

```python

def update_displaypath_from_ww_alarm_comments(ww_alarm_comments_file, input_OPC_AlarmTag_JsonFile, outputJsonFile):
    # read input files
    with open(ww_alarm_comments_file, encoding="utf-8") as file:
        alarm_text = file.read().splitlines()
    with open(input_OPC_AlarmTag_JsonFile, encoding="utf-8") as file:
        json_input = json.loads(file.read())
    if 'tags' in json_input.keys():
        alarm_tags = json_input['tags']

        # iterate through text file
        for line in alarm_text:
            chunks = line.split(" ")
            alarm_number = int(chunks[1].replace(':', ''))
            alarm_comment = chunks[2:]
            alarm_comment_string = ""
            count = 0
            for word in alarm_comment:
                if count < len(alarm_comment):
                    alarm_comment_string = alarm_comment_string + word + " "
                else:
                    alarm_comment_string = alarm_comment_string + word

            # 
            # Build the key 'name': value 'alarm_name'
            # to find the correct tag JSON object in the tags array
            # Add 1 to alarm_numbers 0 to 4 and ignore 5 - quirk in the raw data
            if alarm_number < 5:
                alarm_number = alarm_number + 1
            if alarm_number == 5:  # ignore 5
                continue
            alarm_name = 'Alarm{}'.format(alarm_number)
            alarms = [
                {
                    "mode": "Inequality",
                    "name": "Alarm",
                    "displayPath": alarm_comment_string,
                    "ackMode": "Auto"
                }
            ]
            for item in alarm_tags:
                if 'name' in item.keys():
                    if alarm_name != item['name']:
                        continue
                    else:
                        item['alarms'] = alarms
                        break

    with open(outputJsonFile, 'w') as f:
        json.dump(json_input, f, indent=2)
```