const snippets = [
  {
    name: "js",
    body: `<script type='text/javascript'>
    //<![CDATA[
  
    //]]>
  </script>`,
  },
  {
    name: "css",
    body: `<style type='text/css'>
  /*<![CDATA[*/
  
  /*]]>*/
  </style>`,
  },
  {
    name: "section",
    body: `<b:section id='sectionId' class='sectionClass' maxwidgets="10" showaddelement="yes">
      
  </b:section>`,
  },
  {
    name: "widget/blog",
    body: `<b:widget id='Blog1' locked='true' title='Blog_Posts' type='Blog' version='1'/>`,
  },
  {
    name: "widget/header",
    body: `<b:widget id='Header1' locked='true' title='Blog_Name' type='Header' version='1'/>`,
  },
  {
    name: "widget/menu",
    body: `<b:widget id='PageList1' locked='true' title='Menu' type='PageList' version='1'/>`,
  },
  {
    name: "widget/html",
    body: `<b:widget id='HTML1' locked='false' title='Widget_Title' type='HTML' version='1'/>`,
  },
  {
    name: "widget/labels",
    body: `<b:widget id='Label1' locked='false' title='Labels' type='Label'/>`,
  },
  {
    name: "js/encoded",
    body: `&lt;script type=&#39;text/javascript&#39;&gt;
  
  &lt;/script&gt;`,
  },
  {
    name: "skin",
    body: `<b:skin><![CDATA[/*
  -----------------------------------------------
  Blogger Template Style
  Name:      Template Name
  Designer:  Template Designer
  URL:       https://example.com
  ----------------------------------------------- */
  
  /* Template CSS here */
  
  ]]></b:skin>`,
  },
  {
    name: "template-skin",
    body: `<b:template-skin>
    <![CDATA[

    ]]>
  </b:template-skin>`,
  },
  {
    name: "js/blogData",
    body: `<!-- global blog data -->
    &lt;script type=&#39;text/javascript&#39;&gt;

      // Blog data
      const blogURL = &quot;<data:blog.homepageUrl/>&quot;;
      const blogTitle = &quot;<data:blog.title/>&quot;;
      const langDir = &quot;<data:blog.languageDirection/>&quot;;
      const blogId = &quot;<data:blog.blogId/>&quot;;

      // Current page data
      const PageType = &quot;<data:blog.pageType/>&quot;;
      const pageURL = &quot;<data:blog.url/>&quot;;
      const pageTitle = &quot;<data:blog.pageTitle/>&quot;;

    &lt;/script&gt;`,
  },
  {
    name: "normalize.css",
    body: `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`,
  },
  {
    name: "view-classes",
    body: `<!-- global view classes, after container element [body Recommended] -->
<b:class cond='data:view.isLayoutMode' name='layout-view'/>
<b:class cond='data:view.isPreview' name='preview'/>
<b:class cond='data:view.isHomepage' name='homepage-view'/>
<b:class cond='data:view.isPost' name='post-view'/>
<b:class cond='data:view.isPage' name='page-view'/>
<b:class cond='data:view.isMultipleItems' name='feed-view'/>
<b:class cond='data:view.isSingleItem' name='item-view'/>
<b:class cond='data:view.isArchive' name='archive-view'/>
<b:class cond='data:view.isLabelSearch' name='label-view'/>
<b:class cond='data:view.isSearch and !data:view.isLabelSearch' name='search-view'/>
<b:class cond='data:view.isError' name='error-view'/>
<b:class cond='data:view.isMobile' name='mobile-view'/>`,
  },
];
