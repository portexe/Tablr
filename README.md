![Tablr Logo](https://github.com/Zackazt/Tablr/blob/master/logo.png?raw=true)
##### Written by Zack Wilson
___


## Tablr

Tablr is a fully customizable open source Angular 2+ data datable. 

## Features
###### An asterisk (*) denotes that a feature is an option.

* Resizeable Columns
* Fixed Headers *
* Custom Styles *
* Theming *

As of now, the table is absolutely positioned, and you must provide a top and left value or they will both default to '0px'. This will change in an update. 

## Options and Deafaults

Each option is an ```@Input()``` for the ```<tablr></tablr>``` element.

**Example:** ```<tablr [tablrTop]="'150px'" [fixedHeader]="true" </tablr>```

|Option               |Default  |Data Type|Description                                                       |
|---------------------|---------|---------|------------------------------------------------------------------|
|tablrTop             |'0px'    |String   |CSS top talue for Tablr element.
|tablrLeft            |'0px'    |String   |CSS left value for Tablr element.
|tablrWidth           |'500px'  |String   |CSS width value for Tablr element.
|tablrHeight          |'350px'  |String   |CSS height value for Tablr element.
|cellPadding          |'0'      |String   |CSS padding value for Tablr cells.
|evenRowBgColor       |''       |String   |CSS background-color value for even Tablr rows.
|oddRowBgColor        |''       |String   |CSS background-color value for odd Tablr rows.
|headerBgColor        |''       |String   |CSS background-color value for Tablr header row.
|alternatingRowColors |true     |Boolean  |If false, all row colors other than header will be the same.
|columnBorderColor    |''       |String   |Color of the border that separates Tablr columns.
|columnBorderWidth    |'1px'    |String   |Width of the border that separates Tablr columns.
|fixedHeader          |false    |Boolean  |If true, the header will remain fixed when scrolling vertically.
|fontSize             |'12px'   |String   |Font size of Tablr cell data.
|headerFontSize       |'14px'   |String   |Font size of Tablr header data.
|headerFontColor      |''       |String   |Font color of Tablr header data.
|fontColor            |''       |String   |Font color of Tablr cell data.

This project is currently still under development and is not yet ready for production. First production version will be 1.0.0.

