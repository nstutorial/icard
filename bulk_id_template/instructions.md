# Quick Setup Instructions

## Step 1: Prepare Your Data
1. Open `students_template.xlsx` 
2. Replace sample data with your actual student information
3. Ensure all columns are filled correctly
4. Save the file as `students.xlsx`

## Step 2: Prepare Photos
1. Place all student photos in the `photos` folder
2. Rename photos to match the "Photo Filename" column in Excel
3. Use JPG, JPEG, or PNG format
4. Recommended size: 250x305 pixels or higher

## Step 3: Create ZIP File
### Option A: Use the batch file (Windows)
- Double-click `create_sample_zip.bat`
- This will create `bulk_id_cards_sample.zip`

### Option B: Manual ZIP creation
1. Select both `students.xlsx` and the `photos` folder
2. Right-click and select "Send to > Compressed (zipped) folder"
3. Name the file as desired

## Step 4: Generate ID Cards
1. Open the ID Card Generator (index.html)
2. Upload your ZIP file
3. Click "Generate Bulk ID Cards"
4. Enter password: svps
5. ID cards will download automatically

## File Structure After Setup
```
your_zip_file.zip
|
+-- students.xlsx
|
+-- photos/
    |
    +-- student1_photo.jpg
    +-- student2_photo.jpg
    +-- student3_photo.jpg
    +-- ...
```

## Important Notes
- Password is case-sensitive: svps
- Photo filenames must match exactly (including extension)
- All Excel fields are required
- Test with 2-3 students first before processing large batches
