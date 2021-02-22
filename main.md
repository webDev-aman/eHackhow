# C Language

---
<br>

- [C Language](#c-language)
  - [Introduction](#introduction)
  - [Main Point](#main-point)
  - [Installation](#installation)
  - [Structure of C](#structure-of-c)
  - [Header Files](#header-files)
  - [Main Method / Function](#main-method--function)
  - [Variable Declaration](#variable-declaration)
  - [Program Body](#program-body)
  - [Return Statement](#return-statement)
  - [Flow of Program](#flow-of-program)
  - [C Program Based on](#c-program-based-on)
  - [C Keywords](#c-keywords)
  - [Variables and Data Type](#variables-and-data-type)
    - [Variable](#variable)
    - [Data Types](#data-types)
    - [Types](#types)
  - [C Data Types](#c-data-types)
  - [Operators](#operators)
    - [Operator Types](#operator-types)
      - [Arithmetic Operators](#arithmetic-operators)
      - [Relational Operators](#relational-operators)
      - [Logical Operators](#logical-operators)
      - [Bitwise Operator](#bitwise-operator)
      - [Assignment Operators](#assignment-operators)
      - [Miscellaneous Operators](#miscellaneous-operators)

---
<br>
<br>

## Introduction

C is a procedural programming language. It was initially developed by Dennis Ritchie in the year 1972. It was mainly developed as a system programming language to write an operating system. The main features of C language include low-level access to memory, a simple set of keywords, and clean style, these features make C language suitable for system programming's like an operating system or compiler development.

## Main Point

> C Designed by Dennis Ritchie in 1972 <br>
 C is designed for develop UNIX Kernel <br>
 C is Case Sensitive <br>
 C is Simple and Easy <br>
 C is Procedural Programming Language <br>

<br><br>

---

<br><br>

## Installation

> Install VS Code (VS Code is IDE = Integrated Development Environment)

[VS Code](https://code.visualstudio.com/)

    Open website https://code.visualstudio.com/ and download

[ming-w](http://mingw-w64.org/doku.php/download/mingw-builds)

    Download ming-w (is compiler)


[git](https://git-scm.com/downloads)

    Download git (is terminal)

C/C++ Intellisense

    Install C/C++ Intellisense in extension in VS Code

Code Runner

    Install code runner extension in VS Code

<br><br>

---

<br><br>

## Structure of C

| structure          | information                      |
| ------------------ | -------------------------------- |
| #include <stdio.h> | Header File                      |
| int main()         | Program start from main function |
| {                  |                                  |
| int a = 10;        | Variable Declaration             |
| printf("%d", a);   | printf function                  |
| return (0);        | Return Value                     |
| }                  |                                  |

<br><br>

---

<br><br>

## Header Files

| Header Files | File Information                                  |
| ------------ | ------------------------------------------------- |
| stdio.h      | Defines core input and output functions.          |
| conio.h      | MS-DOS compilers to provide console input/output. |
| string.h     | Defines string handling functions.                |
| math.h       | Defines common mathematical functions.            |
| stddef.h     | Defines several useful types and macros.          |

Syntax to include a header files in C:

```C
#include <file_name.h>
#include "file_name.h"
```

<br><br>

---

<br><br>

## Main Method / Function

Syntax for Declaration of Main Method:

```C
void main()
{}
```

int is a integer return type.
Program start from main method

<br><br>

---

<br><br>

## Variable Declaration

Syntax for Declaration of Variable:

```C
int main()
{
    int a;
    .
    .
}
```

int is a integer variable.

<br><br>

---

<br><br>

## Program Body

Syntax for Body:

```C
int main()
{
    int a = 10;
    
    printf("%d", a);
    .
}
```

All the code of program is written into body.

<br><br>

---

<br><br>

## Return Statement

Syntax for return statement :

```C
int main()
{
    int a = 10;
    
    printf("%d", a);
    .
    .
    return (0);
}
```

Return statement returns values from function.

<br><br>

---

<br><br>

## Flow of Program

| Flow           | information                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| Pre-processing | Remove program comments, expands macros, resolve header files and convert into .i file        |
| Compilation    | Convert .i file into assembly level instructions and save in .s file format                   |
| Assembly       | Convert .s file into .o file for machine level instruction (for CPU understanding like 0 & 1) |
| Linking        | Linker combine and convert .o files to .exe                                                   |
| Loading        | Program run (execute) in RAM (Random Access Memory)                                           |

Command to check flow of program:

```bash
gcc -Wall -save-temps <file-name.c> -o <file-name>(you want to give file name)
gcc -Wall -save-temps basic.c -o main
```

<br><br>

---

<br><br>

## C Program Based on

| Types           | information                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| keywords        | Keywords are predefined, reserved words in C language and each of which is associated with specific features          |
| identifier      | "Identifiers" or "symbols" are the names you supply for variables, types, functions, and labels in your program       |
| constant        | Constants are like a variable, except that their value never changes during execution once defined                    |
| string literals | A "string literal" is a sequence of characters from the source character set enclosed in double quotation marks (" ") |
| symbols         | "Identifiers" or "symbols" are the names you supply for variables, types, functions, and labels in your program       |

<br><br>

---

<br><br>

## C Keywords

| keywords |        |          |          |
| -------- | ------ | -------- | -------- |
| auto     | double | int      | struct   |
| break    | else   | long     | switch   |
| case     | enum   | register | typedef  |
| char     | extern | return   | union    |
| continue | for    | signed   | void     |
| do       | if     | static   | while    |
| default  | goto   | sizeof   | volatile |
| const    | float  | short    | unsigned |

<br><br>

---

<br><br>

## Variables and Data Type

### Variable

Variable is a name of memory location where your data temporary reserve in memory.

### Data Types

Each variable in C has an associated data type. Each data type requires different amounts of memory and has some specific operations which can be performed over it.

### Types

- Basic / Premetive
- Derived
- Enumeration
- Void

<br><br>

---

<br><br>

## C Data Types

Common Data Type

| Basic |       |      |        |
| ----- | ----- | ---- | ------ |
| int   | float | char | double |

Combination of basic data types

| Derived |         |           |       |
| ------- | ------- | --------- | ----- |
| array   | pointer | structure | union |

It is used to assign names to the integral constants which makes a program easy to read and maintain

| Enumeration |
| ----------- |
| enum        |

Void is blank data type

| void |
| ---- |
| void |

<br><br>

---

<br><br>

## Operators

```c
a + b --> (a) + (b) --> is operands & --> a (+) b --> is operator
```

### Operator Types

1. Arithmetic Operators
2. Relational Operators
3. Logical Operators
4. Bitwise Operators
5. Assignment Operators
6. Miscellaneous Operators

#### Arithmetic Operators

| Operator | Name           | Calculation |
| -------- | -------------- | ----------- |
| +        | Addition       | a + b       |
| -        | Subtraction    | a - b       |
| *        | Multiplication | a * b       |
| /        | Division       | a / b       |
| %        | Modulus        | a % b       |

#### Relational Operators

| Operator | Name                     | Calculation |
| -------- | ------------------------ | ----------- |
| ==       | is equal to              | a == b      |
| !=       | is not equal to          | a != b      |
| >        | greater than             | a >  b      |
| <        | less than                | a <  b      |
| >=       | greater than or equal to | a >= b      |
| <=       | less than or equal to    | a <= b      |

#### Logical Operators

<table>
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Calculation</th>
    </tr>
    <tr>
        <td>&&</td>
        <td>Logical AND Operator</td>
        <td>a && b is false</td>
    </tr>
    <tr>
        <td colspan="3">If both the operators are non-zero, then the condition is true.</td>
    </tr>
    <tr>
        <td>||</td>
        <td>Logical OR Operator</td>
        <td>a || b is false</td>
    </tr>
    <tr>
        <td colspan="3">If any of these two operands is non-zero then condition becomes true.</td>
    </tr>
    <tr>
        <td>!</td>
        <td>Logical NOT Operator</td>
        <td>! (a && b) is true</td>
    </tr>
    <tr>
        <td colspan="3">It is used to reverse the logical state of its operand. If condition is true, then Logical operator will make it false.</td>
    </tr>
</table>

#### Bitwise Operator

Bitwise operator convert value to binary then calculate.
Bitwise operator working on binary no.

<table>
    <tr>
        <td>&</td>
        <td>Bitwise &</td>
    </tr>
    <tr>
        <td>|</td>
        <td>Bitwise |</td>
    </tr>
    <tr>
        <td>^</td>
        <td>Bitwise ^</td>
    </tr>
</table>

<table>
    <tr>
        <td>a</td>
        <td>b</td>
        <td>a & b</td>
        <td>a | b</td>
        <td>a ^ b</td>
    </tr>
    <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
    </tr>
</table>

#### Assignment Operators

<table>
    <tr>
        <td>=</td>
        <td>Simple Assignment Operator</td>
        <td>a = b</td>
    </tr>
    <tr>
        <td colspan="3">Assign values from right side operands to left side operand</td>
    </tr>
    <tr>
        <td>+=</td>
        <td>Add AND assignment Operator</td>
        <td>a += b</td>
    </tr>
    <tr>
        <td colspan="3">It adds the right operand to the left operand and assign the result to the left operand</td>
    </tr>
    <tr>
        <td>-=</td>
        <td>Subtract AND assignment operator</td>
        <td>a -= b</td>
    </tr>
    <tr>
        <td colspan="3">It subtract the right operand from the left operand and assign the result to the left operand</td>
    </tr>
    <tr>
        <td>*=</td>
        <td>Multiply AND assignment operator</td>
        <td>a *= b</td>
    </tr>
    <tr>
        <td colspan="3">It multiplies the right operand with the left operand and the result it assigned to the left operand</td>
    </tr>
    <tr>
        <td>/=</td>
        <td>Divide AND assignment operator</td>
        <td>a /= b</td>
    </tr>
    <tr>
        <td colspan="3">It divide the left operand with the right operand and the result is assigned to the left operand</td>
    </tr>
</table>

#### Miscellaneous Operators

<table>
    <tr>
        <td>sizeof()</td>
        <td>Returns the size of variable</td>
    </tr>
    <tr>
        <td colspan="2">sizeof(), where a is int, will return int’s size of that architecture</td>
    </tr>
    <tr>
        <td>&</td>
        <td>Returns the address of a variable</td>
    </tr>
    <tr>
        <td colspan="2">&a, returns the actual address of the variable</td>
    </tr>
    <tr>
        <td>*</td>
        <td>Pointer to a variable</td>
    </tr>
    <tr>
        <td colspan="2">*a</td>
    </tr>
    <tr>
        <td>?:</td>
        <td>Conditional Expression</td>
    </tr>
    <tr>
        <td colspan="2">If condition is true ? Then value of x: otherwise value of y</td>
    </tr>
</table>

<br><br>

---

<br><br>


<style>
    h1 {
        font-size: 50px;
        text-align: center;
        border: none;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 20px;
    }

    p {
        font-size: 20px;
    }
</style>