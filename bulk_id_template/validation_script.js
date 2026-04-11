// Validation script for bulk ID card template
// This script helps validate your data before processing

function validateExcelData(data) {
    const requiredColumns = [
        'Name', 'Class', 'Section', 'AdmissionNo', 
        'GuardianName', 'DOB', 'Phone', 'Address', 'Photo Filename'
    ];
    
    const errors = [];
    const warnings = [];
    
    // Check if all required columns exist
    if (data.length === 0) {
        errors.push("Excel file is empty");
        return { errors, warnings };
    }
    
    const columns = Object.keys(data[0]);
    
    requiredColumns.forEach(col => {
        if (!columns.includes(col)) {
            errors.push(`Missing required column: ${col}`);
        }
    });
    
    // Validate each row
    data.forEach((row, index) => {
        const rowNum = index + 2; // Excel row numbers start at 2
        
        requiredColumns.forEach(col => {
            if (!row[col] || row[col].toString().trim() === '') {
                errors.push(`Row ${rowNum}: ${col} is empty`);
            }
        });
        
        // Validate phone number format
        const phone = row['Phone'];
        if (phone && !/^\d{10}$/.test(phone.toString().replace(/\D/g, ''))) {
            warnings.push(`Row ${rowNum}: Phone number format may be incorrect: ${phone}`);
        }
        
        // Validate DOB format
        const dob = row['DOB'];
        if (dob && !/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(dob.toString())) {
            warnings.push(`Row ${rowNum}: DOB format should be DD-MMM-YYYY (e.g., 15-Jan-2010): ${dob}`);
        }
    });
    
    return { errors, warnings };
}

function validatePhotoFilenames(excelData, photoFiles) {
    const errors = [];
    const warnings = [];
    
    excelData.forEach((row, index) => {
        const rowNum = index + 2;
        const photoFilename = row['Photo Filename'];
        
        if (!photoFiles.includes(photoFilename)) {
            errors.push(`Row ${rowNum}: Photo file not found: ${photoFilename}`);
        }
    });
    
    // Check for extra photos not in Excel
    const excelPhotos = excelData.map(row => row['Photo Filename']);
    const extraPhotos = photoFiles.filter(photo => !excelPhotos.includes(photo));
    
    if (extraPhotos.length > 0) {
        warnings.push(`Extra photo files found: ${extraPhotos.join(', ')}`);
    }
    
    return { errors, warnings };
}

// Usage example:
/*
const excelData = [
    { Name: "John Doe", Class: "10", Section: "A", AdmissionNo: "001", 
      GuardianName: "Mr. Doe", DOB: "15-Jan-2010", Phone: "9876543210", 
      Address: "123 Street", "Photo Filename": "john.jpg" }
];

const photoFiles = ["john.jpg", "jane.jpg"];

const validation = validateExcelData(excelData);
const photoValidation = validatePhotoFilenames(excelData, photoFiles);

console.log("Validation Errors:", validation.errors);
console.log("Validation Warnings:", validation.warnings);
console.log("Photo Errors:", photoValidation.errors);
console.log("Photo Warnings:", photoValidation.warnings);
*/

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateExcelData, validatePhotoFilenames };
}
