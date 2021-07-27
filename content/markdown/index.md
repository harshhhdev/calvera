# What is Markdown?

Before we get into the syntax, it's important to understand... what is markdown?

As quoted from [Markdown Guide](https://www.markdownguide.org/getting-started), "Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents."

This blog runs on [Markdown] files, making it easy to write new posts.

# Headings

There are 6 different headings in [Markdown], each level is represented by a hash

```md
# Hello
## Hello
### Hello
#### Hello
##### Hello
###### Hello
```

This produces the following HTML:

```html
<h1>Hello</h1>
<h2>Hello</h2>
<h3>Hello</h3>
<h4>Hello</h4>
<h5>Hello</h5>
<h6>Hello</h6>
```

# Links

```md
[GitHub](https://github.com/harshhhdev/)
```

This produces the following HTML:

```html
<a href="https://github.com/harshhhdev/">GitHub</a>
```

### Tooltips

```md
[GitHub](https://github.com/harshhhdev/ "Follow me on GitHub!")
```

Produces the following HTML:

```html
<a href="https://github.com/harshhhdev/" title="Follow me on GitHub!">GitHub</a>
```

and produces the following output:

[GitHub](https://github.com/harshhhdev/ "Follow me on GitHub!")

# Lists

```md
 - Item one
 - Item two
 - Item three
```

```html
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>
```

# Text Emphasis

### Bold

```md
**Bold text**
```

```html
<p>
    <strong>Bold text</strong>
</p>
```

### Italic

```md
*Italic text*
```

```html
<p>
    <em>Italic text</em>
</p>
```

### Strikethrough

```md
~~Strikethrough Text~~
```

```html
<p>
    <del>Italic text</del>
</p>
```

# Images & Gifs

```md
![Alt Text](https://octodex.github.com/images/nyantocat.gif)
```

Produces the following HTML:

```html
<img src="https://octodex.github.com/images/nyantocat.gif" alt="Alt Text" />
```

![Nyantocat](https://octodex.github.com/images/nyantocat.gif)

# Codeblocks

To create cool and highlighted code snippets, you can use a codeblock!

Codeblocks use the [JetBrais Mono](https://www.jetbrains.com/lp/mono/) Font, which is a font designed for the best developer reading experience.

````
```elx
iex> "Elixir" |> String.graphemes() |> Enum.frequencies()
%{"E" => 1, "i" => 2, "l" => 1, "r" => 1, "x" => 1}
```
````

This produces the following HTML:

```html
<pre>
  <code>
      iex> "Elixir" |> String.graphemes() |> Enum.frequencies()
      %{"E" => 1, "i" => 2, "l" => 1, "r" => 1, "x" => 1}
  </code>
</pre>
```

# Tables

Tables are used to neatly organise content into columns

```md
| Greeting | Thoughts             |
| -------- | -------------------- |
| hi       | boring               |
| hello    | slightly less boring |
| hey      | not boring at all    |
```

Produces the following HTML:

```
<table>
  <thead>
    <tr>
      <th>Greeting</th>
      <th>Thoughts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hi</td>
      <td>boring</td>
    </tr>
    <tr>
      <td>hello</td>
      <td>slightly less boring</td>
    </tr>
    <tr>
      <td>hey</td>
      <td>not boring at all</td>
    </tr>
  </tbody>
</table>
```


[markdown]: https://en.wikipedia.org/wiki/Markdown

