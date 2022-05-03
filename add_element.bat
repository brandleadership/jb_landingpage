set /P groupName="Group Name: "



cd template/src/twig/content-elements

if not exist "template/src/twig/content-elements/%groupName%" mkdir "%groupName%"

cd %groupName%

set /A groupName=%groupName%



set /P elementName="Element Name: "

if not exist "%elementName%" (

    mkdir "%elementName%"
    cd %elementName% 
    echo off > template.twig
    echo off > design.properties
    echo off > styles.less
    echo off > custom.js
    echo Element folder has been created with success.

) else (

    echo Element Folder already exists! It has not been overwritten.

)
