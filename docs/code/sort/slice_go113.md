# slice_go113.go

```go
// Copyright 2017 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

//go:build go1.13
// +build go1.13

package sort

import "internal/reflectlite"

var reflectValueOf = reflectlite.ValueOf
var reflectSwapper = reflectlite.Swapper
```
