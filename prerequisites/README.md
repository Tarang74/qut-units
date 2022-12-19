# Prerequisites

## Link to files in this directory

```txt
http://raw.githubusercontent.com/Tarang74/qut-units/main/prerequisites/<year>.json
```

## Prerequisite Format

As there are several kinds of prerequisites, each type is referred to by a code prefix. The following is a list of all the prefixes and their meanings:

- `GPA`: Grade Point Average requirement
- `CP`: Credit Point requirement
- `POST`: Postgraduate course/major/unit constraint
- `COURSE`: Course constraint
- `MAJOR`: Major constraint
- `UNIT`: Unit constraint
- `MISC`: Miscellaneous constraint

---

Each code prefix is followed by a hyphen (`-`) and additional parameters, which are separated by hyphens. The following is a list of all the parameters and their meanings:

*All formats are shown as regular expressions (RegEx) for the sake of clarity.*

**Grade Point Average requirement:**

- `GPA-\d\.\d+` (`GPA-<gpa>`): A minimum grade point average of `<gpa>` is required.
  - For example, `GPA-4.0` means a minimum grade point average of 4.0 is required.

**Credit Point requirement:**

- `CP-\d+` (`CP-<cp>`): A minimum of `<cp>` credit points are required.
  - For example, `CP-12` means a minimum of 12 credit points are required.

*Credit Point constraints:*

- `CP-\d+-POST` (`CP-<cp>-POST`): A minimum of `<cp>` credit points are required *from any postgraduate course*.
  - For example, `CP-12-POST` means a minimum of 12 credit points are required from any postgraduate course.
- `CP-\d+-POST-\w+` (`CP-<cp>-POST-<course>`): A minimum of `<cp>` credit points are required *from the postgraduate version of the course `<course>`*.
  - For example, `CP-12-POST-Business` means a minimum of 12 credit points are required from the Master of Business course.
- `CP-\d+-COURSE(-\w{2}\d{2})+` (`CP-<cp>-COURSE-<code_1>...[-<code_n>]`): A minimum of `<cp>` credit points are required *from any of the following course(s): `<code_n>`*.
  - For example, `CP-12-COURSE-SE40-SE60` means a minimum of 12 credit points are required from either SE40 or SE60.
- `CP-\d+-MAJOR-\w{2}\d{2}(-[A-Za-z_]+)+` (`CP-<cp>-MAJOR-<code>-<major_1>...[-<major_n>]`): A minimum of `<cp>` credit points are required *from any of the following major(s): `<majors_n>`, from the course `<code>`*.
  - For example, `CP-12-MAJOR-BS05-Accounting-Financial_Planning` means a minimum of 12 credit points are required from either the Accounting or Financial Planning major from the course BS05.
- `CP-\d+-UNIT(-\w+)+` (`CP-<cp>-UNIT-<unit_1>...[-<unit_n>]`): A minimum of `<cp>` credit points are required *from the unit wildcard(s): `<unit_n>`*.
  - For example, `CP-12-UNIT-MXB-MZB` means a minimum of 12 credit points are required from any units beginning with the prefixes MXB or MZB.

**Courses:**

- `COURSE-\w{2}\d{2}` (`COURSE-<code>`): Enrolment in the course `<code>` is required.
  - For example, `COURSE-SE60` means enrolment in the course SE60 is required.

**Majors:**

- `MAJOR-\w{2}\d{2}-[A-Za-z_]+` (`MAJOR-<code>-<major>`): Enrolment in the major `<major>` from the course `<code>` is required.
  - For example, `MAJOR-BS05-Accounting` means enrolment in the Accounting major from the course BS05 is required.

**Units:**

- `UNIT-\w+\d*` (`UNIT-<unit>`): A unit code beginning with the prefix `<unit>` must be completed.
  - For example, `UNIT-SE` means a unit code beginning with the prefix `SE` must be completed.

**Miscellaneous:**

- `MISC-[A-Za-z_]+` (`MISC-<misc>`): The constraint `<misc>` must be met.
  - For example, `MISC-LANTITE` means that the LANTITE test must be completed.

---

*All prerequisites in the JSON files adhere to the above formats such that every prerequisite matches one of the above regular expressions.*

An exception of this is with specific units, which are represented as per the university's unit codes: `\w{3}\d{3}(-\d)?`.
For example, CAB301, EGH400-1, and MXB101 are all valid unit codes.

---

## Additional Information

### Disjunctive Normal Form

Disjunctive Normal Form represents simple boolean expressions as a disjunction of conjunctions.
In other words, the outer operator is an OR, and the inner operator is an AND.

For example, if a key has the value:

```py
[
    [a, b, c],
    d,
    [e, f]
]
```

it translates to the following Boolean expression: `(a AND b AND c) OR d OR (e AND f)`.

Note that due to this, some prerequisites may appear in multiple conjunctions (in multiple nested lists):

For example, the expression `a AND (b OR c)` becomes: `(a AND b) OR (a AND c)`, which is represented as:

```py
[
    [a, b],
    [a, c]
]
```
