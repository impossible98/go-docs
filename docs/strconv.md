# strconv

```go
import "strconv"
```

## Overview

This package implements conversions to and from string representations of basic data types.

### Numeric Conversions

The most common numeric conversions are Atoi (string to int) and Itoa (int to string).

```go
i, err := strconv.Atoi("-42")
s := strconv.Itoa(-42)
```

These assume decimal and the Go int type.

ParseBool, ParseFloat, ParseInt, and ParseUint convert strings to values:

```go
b, err := strconv.ParseBool("true")
f, err := strconv.ParseFloat("3.1415", 64)
i, err := strconv.ParseInt("-42", 10, 64)
u, err := strconv.ParseUint("42", 10, 64)
```

The parse functions return the widest type (float64, int64, and uint64), but if the size argument specifies a narrower width the result can be converted to that narrower type without data loss:

```go
s := "2147483647" // biggest int32
i64, err := strconv.ParseInt(s, 10, 32)
...
i := int32(i64)
```

FormatBool, FormatFloat, FormatInt, and FormatUint convert values to strings:

```go
s := strconv.FormatBool(true)
s := strconv.FormatFloat(3.1415, 'E', -1, 64)
s := strconv.FormatInt(-42, 16)
s := strconv.FormatUint(42, 16)
```

AppendBool, AppendFloat, AppendInt, and AppendUint are similar but append the formatted value to a destination slice.

### String Conversions

Quote and QuoteToASCII convert strings to quoted Go string literals. The latter guarantees that the result is an ASCII string, by escaping any non-ASCII Unicode with \u:

```go
q := strconv.Quote("Hello, 世界")
q := strconv.QuoteToASCII("Hello, 世界")
```

QuoteRune and QuoteRuneToASCII are similar but accept runes and return quoted Go rune literals.

Unquote and UnquoteChar unquote Go string and rune literals.

## Constants

```go
const IntSize = intSize
```

IntSize is the size in bits of an int or uint value.

## Variables

```go
var ErrRange = errors.New("value out of range")
```

ErrRange indicates that a value is out of range for the target type.

```go
var ErrSyntax = errors.New("invalid syntax")
```

ErrSyntax indicates that a value does not have the right syntax for the target type.

## Functions

### AppendBool

```go
func AppendBool(dst []byte, b bool) []byte
```

AppendBool appends "true" or "false", according to the value of b, to dst and returns the extended buffer.

### AppendFloat

```go
func AppendFloat(dst []byte, f float64, fmt byte, prec, bitSize int) []byte
```

AppendFloat appends the string form of the floating-point number f, as generated by FormatFloat, to dst and returns the extended buffer.

### AppendInt

```go
func AppendInt(dst []byte, i int64, base int) []byte
```

AppendInt appends the string form of the integer i, as generated by FormatInt, to dst and returns the extended buffer.

### AppendQuote

```go
func AppendQuote(dst []byte, s string) []byte
```

AppendQuote appends a double-quoted Go string literal representing s, as generated by Quote, to dst and returns the extended buffer.

### AppendQuoteRune

```go
func AppendQuoteRune(dst []byte, r rune) []byte
```

AppendQuoteRune appends a single-quoted Go character literal representing the rune, as generated by QuoteRune, to dst and returns the extended buffer.

### AppendQuoteRuneToASCII

```go
func AppendQuoteRuneToASCII(dst []byte, r rune) []byte
```

AppendQuoteRuneToASCII appends a single-quoted Go character literal representing the rune, as generated by QuoteRuneToASCII, to dst and returns the extended buffer.

### AppendQuoteRuneToGraphic

```go
func AppendQuoteRuneToGraphic(dst []byte, r rune) []byte
```

AppendQuoteRuneToGraphic appends a single-quoted Go character literal representing the rune, as generated by QuoteRuneToGraphic, to dst and returns the extended buffer.

### AppendQuoteToASCII

```go
func AppendQuoteToASCII(dst []byte, s string) []byte
```

AppendQuoteToASCII appends a double-quoted Go string literal representing s, as generated by QuoteToASCII, to dst and returns the extended buffer.

### AppendQuoteToGraphic

```go
func AppendQuoteToGraphic(dst []byte, s string) []byte
```

AppendQuoteToGraphic appends a double-quoted Go string literal representing s, as generated by QuoteToGraphic, to dst and returns the extended buffer.

### AppendUint

```go
func AppendUint(dst []byte, i uint64, base int) []byte
```

AppendUint appends the string form of the unsigned integer i, as generated by FormatUint, to dst and returns the extended buffer.

### Atoi

```go
func Atoi(s string) (int, error)
```

Atoi is equivalent to ParseInt(s, 10, 0), converted to type int.

### CanBackquote

```go
func CanBackquote(s string) bool
```

CanBackquote reports whether the string s can be represented unchanged as a single-line backquoted string without control characters other than tab.

### FormatBool

```go
func FormatBool(b bool) string
```

FormatBool returns "true" or "false" according to the value of b.

### FormatComplex

```go
func FormatComplex(c complex128, fmt byte, prec, bitSize int) string
```

FormatComplex converts the complex number c to a string of the form (a+bi) where a and b are the real and imaginary parts, formatted according to the format fmt and precision prec.

The format fmt and precision prec have the same meaning as in FormatFloat. It rounds the result assuming that the original was obtained from a complex value of bitSize bits, which must be 64 for complex64 and 128 for complex128.

### FormatFloat

```go
func FormatFloat(f float64, fmt byte, prec, bitSize int) string
```

FormatFloat converts the floating-point number f to a string, according to the format fmt and precision prec. It rounds the result assuming that the original was obtained from a floating-point value of bitSize bits (32 for float32, 64 for float64).

The format fmt is one of 'b' (-ddddp±ddd, a binary exponent), 'e' (-d.dddde±dd, a decimal exponent), 'E' (-d.ddddE±dd, a decimal exponent), 'f' (-ddd.dddd, no exponent), 'g' ('e' for large exponents, 'f' otherwise), 'G' ('E' for large exponents, 'f' otherwise), 'x' (-0xd.ddddp±ddd, a hexadecimal fraction and binary exponent), or 'X' (-0Xd.ddddP±ddd, a hexadecimal fraction and binary exponent).

The precision prec controls the number of digits (excluding the exponent) printed by the 'e', 'E', 'f', 'g', 'G', 'x', and 'X' formats. For 'e', 'E', 'f', 'x', and 'X', it is the number of digits after the decimal point. For 'g' and 'G' it is the maximum number of significant digits (trailing zeros are removed). The special precision -1 uses the smallest number of digits necessary such that ParseFloat will return f exactly.

### FormatInt

```go
func FormatInt(i int64, base int) string
```

FormatInt returns the string representation of i in the given base, for 2 \<= base \<= 36. The result uses the lower-case letters 'a' to 'z' for digit values >= 10.

### FormatUint

```go
func FormatUint(i uint64, base int) string
```

FormatUint returns the string representation of i in the given base, for 2 \<= base \<= 36. The result uses the lower-case letters 'a' to 'z' for digit values >= 10.

### IsGraphic

```go
func IsGraphic(r rune) bool
```

IsGraphic reports whether the rune is defined as a Graphic by Unicode. Such characters include letters, marks, numbers, punctuation, symbols, and spaces, from categories L, M, N, P, S, and Zs.

### IsPrint

```go
func IsPrint(r rune) bool
```

IsPrint reports whether the rune is defined as printable by Go, with the same definition as unicode.IsPrint: letters, numbers, punctuation, symbols and ASCII space.

### Itoa

```go
func Itoa(i int) string
```

Itoa is equivalent to FormatInt(int64(i), 10).

### ParseBool

```go
func ParseBool(str string) (bool, error)
```

ParseBool returns the boolean value represented by the string. It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Any other value returns an error.

### ParseComplex

```go
func ParseComplex(s string, bitSize int) (complex128, error)
```

ParseComplex converts the string s to a complex number with the precision specified by bitSize: 64 for complex64, or 128 for complex128. When bitSize=64, the result still has type complex128, but it will be convertible to complex64 without changing its value.

The number represented by s must be of the form N, Ni, or N±Ni, where N stands for a floating-point number as recognized by ParseFloat, and i is the imaginary component. If the second N is unsigned, a + sign is required between the two components as indicated by the ±. If the second N is NaN, only a + sign is accepted. The form may be parenthesized and cannot contain any spaces. The resulting complex number consists of the two components converted by ParseFloat.

The errors that ParseComplex returns have concrete type \*NumError and include err.Num = s.

If s is not syntactically well-formed, ParseComplex returns err.Err = ErrSyntax.

If s is syntactically well-formed but either component is more than 1/2 ULP away from the largest floating point number of the given component's size, ParseComplex returns err.Err = ErrRange and c = ±Inf for the respective component.

### ParseFloat

```go
func ParseFloat(s string, bitSize int) (float64, error)
```

ParseFloat converts the string s to a floating-point number with the precision specified by bitSize: 32 for float32, or 64 for float64. When bitSize=32, the result still has type float64, but it will be convertible to float32 without changing its value.

ParseFloat accepts decimal and hexadecimal floating-point numbers as defined by the Go syntax for floating-point literals. If s is well-formed and near a valid floating-point number, ParseFloat returns the nearest floating-point number rounded using IEEE754 unbiased rounding. (Parsing a hexadecimal floating-point value only rounds when there are more bits in the hexadecimal representation than will fit in the mantissa.)

The errors that ParseFloat returns have concrete type \*NumError and include err.Num = s.

If s is not syntactically well-formed, ParseFloat returns err.Err = ErrSyntax.

If s is syntactically well-formed but is more than 1/2 ULP away from the largest floating point number of the given size, ParseFloat returns f = ±Inf, err.Err = ErrRange.

ParseFloat recognizes the string "NaN", and the (possibly signed) strings "Inf" and "Infinity" as their respective special floating point values. It ignores case when matching.

### ParseInt

```go
func ParseInt(s string, base int, bitSize int) (i int64, err error)
```

ParseInt interprets a string s in the given base (0, 2 to 36) and bit size (0 to 64) and returns the corresponding value i.

The string may begin with a leading sign: "+" or "-".

If the base argument is 0, the true base is implied by the string's prefix following the sign (if present): 2 for "0b", 8 for "0" or "0o", 16 for "0x", and 10 otherwise. Also, for argument base 0 only, underscore characters are permitted as defined by the Go syntax for integer literals.

The bitSize argument specifies the integer type that the result must fit into. Bit sizes 0, 8, 16, 32, and 64 correspond to int, int8, int16, int32, and int64. If bitSize is below 0 or above 64, an error is returned.

The errors that ParseInt returns have concrete type \*NumError and include err.Num = s. If s is empty or contains invalid digits, err.Err = ErrSyntax and the returned value is 0; if the value corresponding to s cannot be represented by a signed integer of the given size, err.Err = ErrRange and the returned value is the maximum magnitude integer of the appropriate bitSize and sign.

### ParseUint

```go
func ParseUint(s string, base int, bitSize int) (uint64, error)
```

ParseUint is like ParseInt but for unsigned numbers.

A sign prefix is not permitted.

### Quote

```go
func Quote(s string) string
```

Quote returns a double-quoted Go string literal representing s. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for control characters and non-printable characters as defined by IsPrint.

### QuoteRune

```go
func QuoteRune(r rune) string
```

QuoteRune returns a single-quoted Go character literal representing the rune. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for control characters and non-printable characters as defined by IsPrint. If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U+FFFD.

### QuoteRuneToASCII

```go
func QuoteRuneToASCII(r rune) string
```

QuoteRuneToASCII returns a single-quoted Go character literal representing the rune. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for non-ASCII characters and non-printable characters as defined by IsPrint. If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U+FFFD.

### QuoteRuneToGraphic

```go
func QuoteRuneToGraphic(r rune) string
```

QuoteRuneToGraphic returns a single-quoted Go character literal representing the rune. If the rune is not a Unicode graphic character, as defined by IsGraphic, the returned string will use a Go escape sequence (\t, \n, \xFF, \u0100). If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U+FFFD.

### QuoteToASCII

```go
func QuoteToASCII(s string) string
```

QuoteToASCII returns a double-quoted Go string literal representing s. The returned string uses Go escape sequences (\t, \n, \xFF, \u0100) for non-ASCII characters and non-printable characters as defined by IsPrint.

### QuoteToGraphic

```go
func QuoteToGraphic(s string) string
```

QuoteToGraphic returns a double-quoted Go string literal representing s. The returned string leaves Unicode graphic characters, as defined by IsGraphic, unchanged and uses Go escape sequences (\t, \n, \xFF, \u0100) for non-graphic characters.

### QuotedPrefix

```go
func QuotedPrefix(s string) (string, error)
```

QuotedPrefix returns the quoted string (as understood by Unquote) at the prefix of s. If s does not start with a valid quoted string, QuotedPrefix returns an error.

### Unquote

```go
func Unquote(s string) (string, error)
```

Unquote interprets s as a single-quoted, double-quoted, or backquoted Go string literal, returning the string value that s quotes.
(If s is single-quoted, it would be a Go character literal; Unquote returns the corresponding one-character string.)

### UnquoteChar

```go
func UnquoteChar(s string, quote byte) (value rune, multibyte bool, tail string, err error)
```

UnquoteChar decodes the first character or byte in the escaped string or character literal represented by the string s. It returns four values:

1. value, the decoded Unicode code point or byte value;
2. multibyte, a boolean indicating whether the decoded character requires a multibyte UTF-8 representation;
3. tail, the remainder of the string after the character; and
4. an error that will be nil if the character is syntactically valid.

The second argument, quote, specifies the type of literal being parsed and therefore which escaped quote character is permitted. If set to a single quote, it permits the sequence \' and disallows unescaped '. If set to a double quote, it permits \" and disallows unescaped ". If set to zero, it does not permit either escape and allows both quote characters to appear unescaped.

## Types

### NumError

```go
type NumError struct {
	Func string // the failing function (ParseBool, ParseInt, ParseUint, ParseFloat, ParseComplex)
	Num  string // the input
	Err  error  // the reason the conversion failed (e.g. ErrRange, ErrSyntax, etc.)
}
```

A NumError records a failed conversion.

#### (\*NumError) Error

```go
func (e *NumError) Error() string
```

#### (\*NumError) Unwrap

```go
func (e *NumError) Unwrap() error
```

## Examples

### AppendBool

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b := []byte("bool:")
	b = strconv.AppendBool(b, true)
	fmt.Println(string(b))

}
```

**Output:**

```
bool:true
```

### AppendFloat

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b32 := []byte("float32:")
	b32 = strconv.AppendFloat(b32, 3.1415926535, 'E', -1, 32)
	fmt.Println(string(b32))

	b64 := []byte("float64:")
	b64 = strconv.AppendFloat(b64, 3.1415926535, 'E', -1, 64)
	fmt.Println(string(b64))

}
```

**Output:**

```
float32:3.1415927E+00
float64:3.1415926535E+00
```

### AppendInt

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b10 := []byte("int (base 10):")
	b10 = strconv.AppendInt(b10, -42, 10)
	fmt.Println(string(b10))

	b16 := []byte("int (base 16):")
	b16 = strconv.AppendInt(b16, -42, 16)
	fmt.Println(string(b16))

}
```

**Output:**

```
int (base 10):-42
int (base 16):-2a
```

### AppendQuote

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b := []byte("quote:")
	b = strconv.AppendQuote(b, `"Fran & Freddie's Diner"`)
	fmt.Println(string(b))

}
```

**Output:**

```
quote:"\"Fran & Freddie's Diner\""
```

### AppendQuoteRune

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b := []byte("rune:")
	b = strconv.AppendQuoteRune(b, '☺')
	fmt.Println(string(b))

}
```

**Output:**

```
rune:'☺'
```

### AppendQuoteRuneToASCII

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b := []byte("rune (ascii):")
	b = strconv.AppendQuoteRuneToASCII(b, '☺')
	fmt.Println(string(b))

}
```

**Output:**

```
rune (ascii):'\u263a'
```

### AppendQuoteToASCII

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b := []byte("quote (ascii):")
	b = strconv.AppendQuoteToASCII(b, `"Fran & Freddie's Diner"`)
	fmt.Println(string(b))

}
```

**Output:**

```
quote (ascii):"\"Fran & Freddie's Diner\""
```

### AppendUint

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	b10 := []byte("uint (base 10):")
	b10 = strconv.AppendUint(b10, 42, 10)
	fmt.Println(string(b10))

	b16 := []byte("uint (base 16):")
	b16 = strconv.AppendUint(b16, 42, 16)
	fmt.Println(string(b16))

}
```

**Output:**

```
uint (base 10):42
uint (base 16):2a
```

### Atoi

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := "10"
	if s, err := strconv.Atoi(v); err == nil {
		fmt.Printf("%T, %v", s, s)
	}

}
```

**Output:**

```
int, 10
```

### CanBackquote

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(strconv.CanBackquote("Fran & Freddie's Diner ☺"))
	fmt.Println(strconv.CanBackquote("`can't backquote this`"))

}
```

**Output:**

```
true
false
```

### FormatBool

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := true
	s := strconv.FormatBool(v)
	fmt.Printf("%T, %v\n", s, s)

}
```

**Output:**

```
string, true
```

### FormatFloat

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := "3.1415926535"
	if s, err := strconv.ParseFloat(v, 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat(v, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("NaN", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	// ParseFloat is case insensitive
	if s, err := strconv.ParseFloat("nan", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("+Inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("-Inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("-0", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("+0", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

}
```

**Output:**

```
float64, 3.1415927410125732
float64, 3.1415926535
float64, NaN
float64, NaN
float64, +Inf
float64, +Inf
float64, -Inf
float64, -0
float64, 0
```

### FormatInt

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := int64(-42)

	s10 := strconv.FormatInt(v, 10)
	fmt.Printf("%T, %v\n", s10, s10)

	s16 := strconv.FormatInt(v, 16)
	fmt.Printf("%T, %v\n", s16, s16)

}
```

**Output:**

```
string, -42
string, -2a
```

### FormatUint

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := uint64(42)

	s10 := strconv.FormatUint(v, 10)
	fmt.Printf("%T, %v\n", s10, s10)

	s16 := strconv.FormatUint(v, 16)
	fmt.Printf("%T, %v\n", s16, s16)

}
```

**Output:**

```
string, 42
string, 2a
```

### IsGraphic

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	shamrock := strconv.IsGraphic('☘')
	fmt.Println(shamrock)

	a := strconv.IsGraphic('a')
	fmt.Println(a)

	bel := strconv.IsGraphic('\007')
	fmt.Println(bel)

}
```

**Output:**

```
true
true
false
```

### IsPrint

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	c := strconv.IsPrint('\u263a')
	fmt.Println(c)

	bel := strconv.IsPrint('\007')
	fmt.Println(bel)

}
```

**Output:**

```
true
false
```

### Itoa

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	i := 10
	s := strconv.Itoa(i)
	fmt.Printf("%T, %v\n", s, s)

}
```

**Output:**

```
string, 10
```

### NumError

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	str := "Not a number"
	if _, err := strconv.ParseFloat(str, 64); err != nil {
		e := err.(*strconv.NumError)
		fmt.Println("Func:", e.Func)
		fmt.Println("Num:", e.Num)
		fmt.Println("Err:", e.Err)
		fmt.Println(err)
	}

}
```

**Output:**

```
Func: ParseFloat
Num: Not a number
Err: invalid syntax
strconv.ParseFloat: parsing "Not a number": invalid syntax
```

### ParseBool

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := "true"
	if s, err := strconv.ParseBool(v); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

}
```

**Output:**

```
bool, true
```

### ParseFloat

```go
import (
	"fmt"
	"strconv"
)

func main() {
	v := "3.1415926535"
	if s, err := strconv.ParseFloat(v, 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat(v, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("NaN", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	// ParseFloat is case insensitive
	if s, err := strconv.ParseFloat("nan", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("+Inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("-Inf", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("-0", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseFloat("+0", 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

}
```

**Output:**

```
float64, 3.1415927410125732
float64, 3.1415926535
float64, NaN
float64, NaN
float64, +Inf
float64, +Inf
float64, -Inf
float64, -0
float64, 0
```

### ParseInt

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v32 := "-354634382"
	if s, err := strconv.ParseInt(v32, 10, 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseInt(v32, 16, 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

	v64 := "-3546343826724305832"
	if s, err := strconv.ParseInt(v64, 10, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseInt(v64, 16, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

}
```

**Output:**

```
int64, -354634382
int64, -3546343826724305832
```

### ParseUint

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	v := "42"
	if s, err := strconv.ParseUint(v, 10, 32); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}
	if s, err := strconv.ParseUint(v, 10, 64); err == nil {
		fmt.Printf("%T, %v\n", s, s)
	}

}
```

**Output:**

```
uint64, 42
uint64, 42
```

### Quote

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	// This string literal contains a tab character.
	s := strconv.Quote(`"Fran & Freddie's Diner	☺"`)
	fmt.Println(s)

}
```

**Output:**

```
"\"Fran & Freddie's Diner\t☺\""
```

### QuoteRune

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := strconv.QuoteRune('☺')
	fmt.Println(s)

}
```

**Output:**

```
'☺'
```

### QuoteRuneToASCII

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := strconv.QuoteRuneToASCII('☺')
	fmt.Println(s)

}
```

**Output:**

```
'\u263a'
```

### QuoteRuneToGraphic

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := strconv.QuoteRune('☺')
	fmt.Println(s)

}
```

**Output:**

```
'☺'
```

### QuoteToASCII

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := strconv.QuoteRuneToASCII('☺')
	fmt.Println(s)

}
```

**Output:**

```
'\u263a'
```

### QuoteToGraphic

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := strconv.QuoteRuneToGraphic('☺')
	fmt.Println(s)

	s = strconv.QuoteRuneToGraphic('\u263a')
	fmt.Println(s)

	s = strconv.QuoteRuneToGraphic('\u000a')
	fmt.Println(s)

	s = strconv.QuoteRuneToGraphic('	') // tab character
	fmt.Println(s)

}
```

**Output:**

```
'☺'
'☺'
'\n'
'\t'
```

### Unquote

```go
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s, err := strconv.Unquote("You can't unquote a string without quotes")
	fmt.Printf("%q, %v\n", s, err)
	s, err = strconv.Unquote("\"The string must be either double-quoted\"")
	fmt.Printf("%q, %v\n", s, err)
	s, err = strconv.Unquote("`or backquoted.`")
	fmt.Printf("%q, %v\n", s, err)
	s, err = strconv.Unquote("'\u263a'") // single character only allowed in single quotes
	fmt.Printf("%q, %v\n", s, err)
	s, err = strconv.Unquote("'\u2639\u2639'")
	fmt.Printf("%q, %v\n", s, err)

}
```

**Output:**

```
"", invalid syntax
"The string must be either double-quoted", <nil>
"or backquoted.", <nil>
"☺", <nil>
"", invalid syntax
```

### UnquoteChar

```go
package main

import (
	"fmt"
	"log"
	"strconv"
)

func main() {
	v, mb, t, err := strconv.UnquoteChar(`\"Fran & Freddie's Diner\"`, '"')
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("value:", string(v))
	fmt.Println("multibyte:", mb)
	fmt.Println("tail:", t)

}
```

**Output:**

```
value: "
multibyte: false
tail: Fran & Freddie's Diner\"
```

## Source Files

- [atob.go](/code/strconv/atob)
- [atoc.go](/code/strconv/atoc)
- [atof.go](/code/strconv/atof)
- [atoi.go](/code/strconv/atoi)
- [bytealg.go](/code/strconv/bytealg)
- [ctoa.go](/code/strconv/ctoa)
- [decimal.go](/code/strconv/decimal)
- [doc.go](/code/strconv/doc)
- [eisel_lemire.go](/code/strconv/eisel_lemire)
- [ftoa.go](/code/strconv/ftoa)
- [ftoaryu.go](/code/strconv/ftoaryu)
- [isprint.go](/code/strconv/isprint)
- [itoa.go](/code/strconv/itoa)
- [quote.go](/code/strconv/quote)