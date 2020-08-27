# Blogger Snippets

### Javascript block

```xml
<script type='text/javascript'>
  //<![CDATA[

 //]]>
</script>
```

### Javascript Babel

Using JSX in blogger<br>
Require Latest version of babel standalone<br>
`<script crossorigin='crossorigin' src='https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js'></script>`

```xml
<script type='text/babel'>
  //<![CDATA[

 //]]>
</script>
```

### Skin (Template CSS)

```xml
<b:skin><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:      Template Name
Designer:  Template Designer
URL:       https://example.com
----------------------------------------------- */

/* Template CSS here */

]]></b:skin>
```

### Template Skin (Layout CSS)

```xml
<b:template-skin>
  <![CDATA[

  ]]>
</b:template-skin>
```

### Style Block

```xml
<style type='text/css'>
  /* <![CDATA[ */

    /* CSS here */

  /* ]]> */
</style>
```

### Section Tag

```xml
<b:section id='sectionId' class='sectionClass' maxwidgets="10" showaddelement="yes"></b:section>
```

### Blog widget

```xml
<b:widget id='Blog1' locked='true' title='Blog_Posts' type='Blog' version='1'/>
```

### Header Widget

```xml
<b:widget id='Header1' locked='true' title='Blog_Name' type='Header' version='1'/>
```

### Menu Widget

```xml
<b:widget id='PageList1' locked='true' title='Menu' type='PageList' version='1'/>
```

### HTML Widget

```xml
<b:widget id='HTML1' locked='false' title='Widget_Title' type='HTML' version='1'/>
```

### Labels Widget

```xml
<b:widget id='Label1' locked='false' title='Labels' type='Label'/>
```

### Class

```xml
<b:class cond='data:view.isHomepage' name='home'/>
```

### if condition

```xml
<b:if cond='_condition_'>

</b:if>
```
