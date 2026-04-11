# Bulk ID Card Generator - ZIP Template Structure

## Overview
This template helps you prepare bulk ID card generation by organizing student data and photos in a structured ZIP file.

## Required ZIP Structure
```
your_bulk_id_cards.zip
|
+-- students.xlsx (Excel file with student data)
|
+-- photos/
    |
    +-- photo1.jpg
    +-- photo2.jpg
    +-- photo3.jpg
    +-- ... (all student photos)
```

## Excel File Format (students.xlsx)
The Excel file must contain the following columns in this exact order:

| Column Header | Description | Example |
|---------------|-------------|---------|
| Name | Student's full name | "John Doe" |
| Class | Student's class/grade | "10" |
| Section | Class section | "A" |
| AdmissionNo | Admission number | "2024001" |
| GuardianName | Parent/guardian name | "Mr. Smith Doe" |
| DOB | Date of Birth (DD-MMM-YYYY) | "15-Jan-2010" |
| Phone | Contact number | "9876543210" |
| Address | Full address | "123 Main St, City" |
| Photo Filename | Photo filename with extension | "photo1.jpg" |

### Important Notes:
- Column headers must match exactly (case-sensitive)
- Photo filenames must match the actual files in the photos folder
- DOB format should be DD-MMM-YYYY (e.g., 15-Jan-2010)
- All fields are required for each student

## Photo Requirements
- Format: JPG, JPEG, or PNG
- Recommended size: 250x305 pixels or higher
- File names should match the "Photo Filename" column in Excel
- Place all photos directly in the photos folder (no subfolders)

## Sample Excel Data

| Name | Class | Section | AdmissionNo | GuardianName | DOB | Phone | Address | Photo Filename |
|------|-------|---------|-------------|--------------|-----|-------|---------|----------------|
| Alice Johnson | 10 | A | 2024001 | Mr. Robert Johnson | 15-Jan-2010 | 9876543210 | 123 Park Avenue, City | alice.jpg |
| Bob Smith | 10 | B | 2024002 | Mrs. Mary Smith | 22-Feb-2010 | 9876543211 | 456 Oak Street, City | bob.jpg |
| Carol Williams | 11 | A | 2024003 | Mr. David Williams | 10-Mar-2009 | 9876543212 | 789 Pine Road, City | carol.jpg |

## How to Use
1. Fill the Excel file with all student data
2. Place all student photos in the photos folder
3. Ensure photo filenames match the Excel column
4. Create a ZIP file containing both the Excel file and photos folder
5. Upload the ZIP file using the bulk ID card generator
6. Click "Generate Bulk ID Cards"

## Password
The system requires password: **svps**

## Output
- Each ID card will be automatically downloaded as PNG files
- Filename format: StudentName_ID_Card.png
- Cards are generated using the template design

## Troubleshooting
- **"No Excel file found"**: Ensure your ZIP contains an .xlsx file
- **"Photo not found"**: Check that photo filenames match exactly
- **"Incorrect password"**: Use password "svps"
- **Generation fails**: Check all required fields are filled in Excel

## Tips
- Use consistent photo naming conventions
- Keep photo file sizes reasonable (under 1MB each)
- Test with a small batch (2-3 students) first
- Backup your original data before processing
