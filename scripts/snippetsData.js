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
];
