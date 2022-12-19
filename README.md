# QUT Units

This repository is a collection of data concerning units offered at QUT.

## What is provided?

The repository structure is as follows:

```txt
root
├── postrequisites
│   ├── 2022.json
│   └── ...
├── prerequisites
│   ├── 2022.json
│   └── ...
├── units
│   ├── 2022.json
│   └── ...
└── units_full
    ├── 2022.json
    └── ...
```

each folder contains a JSON file for each year starting from 2022. The data in each file corresponds to the year in the filename.

### units_full

A list of dictionaries with information regarding all units offered in a given year. These files are consequently larger than the files under `units` as certain units are offered in multiple periods.

### units

A subset of `units_full` that only contains unique units, and removes additional information about the period the unit is offered in.

### prerequisites

A dictionary of prerequisites for units offered in the given year in Disjunctive Normal Form (DNF).

### postrequisites

A dictionary of postrequisites for units offered in the given year.

## Type Definitions

Type information is provided in `*.ts` files.

## There is an error in the data!

If you spot any errors in the data, please open an issue, or submit a pull request.
