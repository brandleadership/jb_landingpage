# Boilerplate for BSI CX Landingpage Design Development

If you're not familiar with this repository yet, please carefully read through the chapters of the wiki.
This will make sure that you can take advantage of all the stuff that has been prepared for you.

# First Steps

Run the BSI compiler file (studio-design-creator-win.exe file) within project's root and confirm that the compiler reported no errors within the terminal, and that the /template/www folder has been created within the project, just as the "Hello_World_LP.zip" ZIP file of the design within the project's root. 
That's the ZIP file which holds all the files of the generated BSI Design.

Please note that there is no documentation informing about how the studio-design-creator-win.exe file processes the /compiler.yml contents. See the comments within the /compiler.yml file to understand the most important parts; they have been documented there.

To edit the name of the ZIP that the compiler generates, simply change the name from "Hello_World_LP.zip" within /compiler.yml to "whateveryouwant.zip".

# Design Development

When developing the design of an LP, simply use the following approach:

- Copy the markup of the client's existing LP into /template/src/twig/layout.twig.

- Scan the markup from top to bottom, and watch out for bootstrap layouts / bootstrap classes.

- As soon as you find them, extract them from the layout.twig and create separate layout elements from them.

- Transform the wrapping markup container within layout.twig of the element you've just extracted into a BSI dropzone, to be able to drop the layout element you've just created into it in the BSI editor.

- As you go further down within layout.twig, you will find other layouts to extract, as well as already extracted layouts. Simply proceed
by replacing already extracted layouts that you see multiple times with the same layout component you've created (in twig), and by adding new layout components as detailed in the previous steps.

- You can then develop the elements + sections that were discussed / make sense according to the projects' scope. These elements / sections can then be inserted within or together with these layout components within the BSI editor.
