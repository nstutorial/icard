@echo off
echo Creating sample ZIP template for bulk ID card generation...
echo.

REM Create a temporary folder for the sample
if not exist "temp_sample" mkdir temp_sample

REM Copy the template files
copy "students_template.xlsx" "temp_sample\students.xlsx"
xcopy "photos" "temp_sample\photos\" /E /I /Y

REM Create the ZIP file (requires PowerShell or external zip tool)
powershell -command "Compress-Archive -Path 'temp_sample\*' -DestinationPath 'bulk_id_cards_sample.zip' -Force"

REM Clean up
rmdir /s /q temp_sample

echo.
echo Sample ZIP file created: bulk_id_cards_sample.zip
echo You can use this as a template for your actual data.
echo.
pause
