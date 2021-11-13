# Main Layout

In main Layout, add two components; **Head** and **NavBar**.

> **Head** contains meta data and tap title.  
> **NavBar** contains path data and gives the data to children.

# Tip of Chakra-ui

## Media Query

```javascript
<Stack direction={{ base: "column", sm: "row" }} spacing="24px"></Stack>
```

_base_ is original and _sm_ is media sizing.  
The example of _sm_ makes this class in basic.

```javascript
@media screen and (min-width: 40em) // 40em, 41em, ...
.css-166wi6h {
    flex-direction: row;
}
```

It can be interpreted like this:  
If the size is bigger than sm, its direction is row.
