// "use strict";
// figma.showUI(__html__, { width: 1000, height: 1000 });
// figma.ui.onmessage = async (msg) => {
//   if (msg.type === 'create-form') {
//     await figma.loadFontAsync({ family: "Inter", style: "Regular" });

//     // Create a frame to hold the entire UI (form + sidebar)
//     const containerFrame = figma.createFrame();
//     containerFrame.resize(800, 800);
//     containerFrame.name = "Form with Sidebar";

//     // Position the container frame
//     containerFrame.x = figma.viewport.center.x;
//     containerFrame.y = figma.viewport.center.y;

//     // Create the left sidebar
//     const sidebarFrame = figma.createFrame();
//     sidebarFrame.resize(200, 600); // Width for the sidebar
//     sidebarFrame.name = "Sidebar";
//     sidebarFrame.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Dark blue background
//     containerFrame.appendChild(sidebarFrame);

//     // Create header for the sidebar
//     const sidebarHeader = figma.createFrame();
//     sidebarHeader.resize(200, 50); // Same width as the sidebar
//     sidebarHeader.fills = [{ type: 'SOLID', color:{ r: 0.16, g: 0.19, b: 0.25 } }]; // Dark blue background
//     sidebarFrame.appendChild(sidebarHeader);

//     const sidebarHeaderText = figma.createText();
//     sidebarHeaderText.characters = "Field Types";
//     sidebarHeaderText.fontSize = 16;
//     sidebarHeaderText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
//     sidebarHeaderText.x = 20;
//     sidebarHeaderText.y = 15;
//     await figma.loadFontAsync({ family: "Inter", style: "Regular" });
//     sidebarHeader.appendChild(sidebarHeaderText);

//     // Create the form frame on the right side
//     const formFrame = figma.createFrame();
//     formFrame.resize(600, 600); // Adjust the size of the form frame
//     formFrame.x = 200; // Offset to the right to make room for the sidebar
//     formFrame.name = "Form";
//     formFrame.layoutMode = 'VERTICAL'; // Vertical auto-layout for stacking items
// formFrame.itemSpacing = 20;
//     containerFrame.appendChild(formFrame);

//     // Add header to the form
//     const headerBar = figma.createFrame();
//     headerBar.resize(600, 50); // Same width as the form, 50px in height
//     headerBar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // white background
//     headerBar.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border

//     formFrame.appendChild(headerBar);

//     const headerText = figma.createText();
//     headerText.characters = "Form";
//     headerText.fontSize = 18;
//     headerText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // black text
//     headerText.x = 20;
//     headerText.y = 15;
//     await figma.loadFontAsync({ family: "Inter", style: "Regular" });
//     headerBar.appendChild(headerText);

//     // const saveButton = figma.createFrame();
//     // saveButton.resize(80, 30); // Button size
//     // saveButton.cornerRadius = 4;
//     // saveButton.fills = [{ type: 'SOLID', color: { r: 0.22, g: 0.53, b: 0.85 }}]; // Light blue color
//     // saveButton.x = 300;
//     // saveButton.y = 10;
//     // formFrame.appendChild(saveButton);

//     // const buttonText = figma.createText();
//     // buttonText.characters = "Done";
//     // buttonText.fontSize = 14;
//     // buttonText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
//     // buttonText.x = 15;
//     // buttonText.y = 7;
//     // await figma.loadFontAsync({ family: "Inter", style: "Regular" });
//     // saveButton.appendChild(buttonText);

//     // Create the fields in the sidebar below the header
//     const fields = ["Name", "Email", "Address"];
//     let yOffset = 50; // Adjusted to position below the sidebar header
//     fields.forEach((field) => {
//       // Create a rectangle to serve as the border for each field
//       const fieldBox = figma.createRectangle();
//       fieldBox.resize(220, 40); // Size of the square box for the field text
//       fieldBox.x = 10;
//       fieldBox.y = yOffset;
//       fieldBox.cornerRadius = 0; // Rounded corners
//       fieldBox.fills = [{ type: 'SOLID', color:{ r: 0.16, g: 0.19, b: 0.25 }}]; // Dark blue color
//       fieldBox.strokes = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 }}]; // Gray border
//       sidebarFrame.appendChild(fieldBox);

//       // Create the field label text inside the border
//       const fieldText = figma.createText();
//       fieldText.characters = field;
//       fieldText.fontSize = 14;
//       fieldText.x = fieldBox.x + 10; // Padding inside the box
//       fieldText.y = fieldBox.y + 12; // Vertically center the text
//       fieldText.fills = [{ type: 'SOLID', color:{ r: 1, g: 1, b: 1 }}]; // Dark text
     
//       sidebarFrame.appendChild(fieldText);

//       yOffset += 50; // Space between fields
//     });

//     // Set yOffset for the form fields inside the form frame
//     let formYOffset = 70;

//     // Create form fields based on the user's selection
//     msg.fields.forEach((field) => {
//       if (field === "Name") {
//         // Create a frame for the entire Name section
//         const nameSectionFrame = figma.createFrame();
//         nameSectionFrame.resize(530, 80); // Width for the frame 
//         nameSectionFrame.layoutMode = 'HORIZONTAL'; // Layout mode is vertical for stacking
//         nameSectionFrame.itemSpacing = 40; // Space between items
//         nameSectionFrame.paddingTop = 10; // Add some padding above
//         nameSectionFrame.paddingBottom = 10; // Add some padding below
//         nameSectionFrame.x = 50; // Positioning
//         nameSectionFrame.y = formYOffset; // Vertical position
//         formFrame.appendChild(nameSectionFrame);
    
//         // Common Name Label
//         const nameCommonLabel = figma.createText();
//         nameCommonLabel.characters = "Name"; // Common name label
//         nameCommonLabel.resize(100, 30); 
//         nameCommonLabel.fontSize = 14; // Larger font for the common label
//         nameCommonLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
//         nameSectionFrame.appendChild(nameCommonLabel);
    
//         // Create a frame for First Name
//         const firstNameFrame = figma.createFrame();
//         firstNameFrame.resize(170, 40); // Width for the frame
//         firstNameFrame.layoutMode = 'VERTICAL'; // Layout mode is vertical for stacking
//         firstNameFrame.itemSpacing = 2; // Space between label and input
       
//         nameSectionFrame.appendChild(firstNameFrame); // Add firstNameFrame to nameSectionFrame
    
//         // First Name Field
//         const firstNameInput = figma.createRectangle();
//         firstNameInput.resize(160, 30); // Width and height for the input box
//         firstNameInput.cornerRadius = 0; // Rounded corners
//         firstNameInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
//         firstNameInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
//         firstNameFrame.appendChild(firstNameInput); // Add input to the firstNameFrame
    
//         const firstNameLabel = figma.createText();
//         firstNameLabel.characters = "First Name";
//         firstNameLabel.fontSize = 12; // Smaller font size for the label
//         firstNameLabel.fills = [{ type: 'SOLID', color: {  r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
//         firstNameFrame.appendChild(firstNameLabel); // Add label below the input
    
//         // Create a frame for Last Name
//         const lastNameFrame = figma.createFrame();
//         lastNameFrame.resize(360, 40); // Width for the frame
//         lastNameFrame.layoutMode = 'VERTICAL'; // Layout mode is vertical for stacking
//         lastNameFrame.itemSpacing = 0; // Space between label and input
//         nameSectionFrame.appendChild(lastNameFrame); // Add lastNameFrame to nameSectionFrame
    
//         // Last Name Field
//         const lastNameInput = figma.createRectangle();
//         lastNameInput.resize(160, 30); // Width and height for the input box
//         lastNameInput.cornerRadius = 0; // Rounded corners
//         lastNameInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
//         lastNameInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
//         lastNameFrame.appendChild(lastNameInput); // Add input to the lastNameFrame
    
//         const lastNameLabel = figma.createText();
//         lastNameLabel.characters = "Last Name";
//         lastNameLabel.fontSize = 12; // Smaller font size for the label
//         lastNameLabel.fills = [{ type: 'SOLID', color: {  r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
//         lastNameFrame.appendChild(lastNameLabel); // Add label below the input
    
//         formYOffset +=20; // Space for the next field
//     }
    
//      else if (field === "Email") {
//         // Create Email field with an icon
//         // const emailLabel = figma.createText();
//         // emailLabel.characters = "Email";
//         // emailLabel.fontSize = 14;
//         // emailLabel.x = 20;
//         // emailLabel.y = formYOffset;
//         // formFrame.appendChild(emailLabel);

//         // const emailInput = figma.createRectangle();
//         // emailInput.resize(360, 40); // Width and height for the input box
//         // emailInput.x = 20;
//         // emailInput.y = formYOffset + 20; // Slight offset to appear below the label
//         // emailInput.cornerRadius = 4; // Rounded corners
//         // emailInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
//         // formFrame.appendChild(emailInput);

//         // const emailIcon = figma.createText();
//         // emailIcon.characters = ""; // Example email icon
//         // emailIcon.fontSize = 14;
//         // emailIcon.x = 380; // Position the icon at the right of the input field
//         // emailIcon.y = formYOffset + 25; // Center it vertically
//         // formFrame.appendChild(emailIcon);

//         // formYOffset += 80; // Space for the next field

//         const emailFrame = figma.createFrame();

//         emailFrame.resize(170,40);
//         emailFrame.itemSpacing = 70; // Space between the label and input
//         emailFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
//         emailFrame.itemSpacing = 105; // Space between label and input
//         emailFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
//         emailFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
//         emailFrame.x = 20; // Positioning
//         emailFrame.y = formYOffset;
// formFrame.appendChild(emailFrame); // Append the frame to the form

// // Create the label for the multiline input
// const emailLabel = figma.createText();
// emailLabel.characters = "Email";
// emailLabel.fontSize = 14;
// emailLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
// emailFrame.appendChild(emailLabel); // Append label to the frame
// const emailInput = figma.createRectangle();
// emailInput.resize(160, 30); // Width and height for the input box
// emailInput.cornerRadius = 0; // Rounded corners
// emailInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
// emailInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
// emailFrame.appendChild(emailInput); // Append input to the frame

// // Update formYOffset for the next element
// formYOffset += 40;
//       }
//       else if (field === "Phone") {
//         const phoneFrame = figma.createFrame();

//         phoneFrame.resize(170,40);
//         phoneFrame.itemSpacing = 70; // Space between the label and input
//         phoneFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
//         phoneFrame.itemSpacing = 99; // Space between label and input
//         phoneFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
//         phoneFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
//         phoneFrame.x = 20; // Positioning
//         phoneFrame.y = formYOffset;
// formFrame.appendChild(phoneFrame); // Append the frame to the form

// // Create the label for the multiline input
// const phoneLabel = figma.createText();
// phoneLabel.characters = "phone";
// phoneLabel.fontSize = 14;
// phoneLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
// phoneFrame.appendChild(phoneLabel); // Append label to the frame
// const phoneInput = figma.createRectangle();
// phoneInput.resize(160, 30); // Width and height for the input box
// phoneInput.cornerRadius = 0; // Rounded corners
// phoneInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
// phoneInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
// phoneFrame.appendChild(phoneInput); // Append input to the frame

// // Update formYOffset for the next element
// formYOffset += 40;
                
//               }
//              else if (field === "Address") {

              
//               const addressmainSectionFrame = figma.createFrame();
//               addressmainSectionFrame.resize(530, 80); // Width for the frame 
//               // addressmainSectionFrame.layoutMode = 'HORIZONTAL'; // Layout mode is vertical for stacking
//               // addressmainSectionFrame.itemSpacing = 40; // Space between items
//               // addressmainSectionFrame.paddingTop = 10; // Add some padding above
//               // addressmainSectionFrame.paddingBottom = 10; // Add some padding below
//               // addressmainSectionFrame.x = 50; // Positioning
//               // addressmainSectionFrame.y = formYOffset; // Vertical position
//               formFrame.appendChild(addressmainSectionFrame);

              



//                     } else if (field === "Multi Line") {
//                       // Create a larger Multi Line input field
//                       const multiLineLabel = figma.createText();
//                       multiLineLabel.characters = "Multi Line";
//                       multiLineLabel.fontSize = 14;
//                       multiLineLabel.x = 20;
//                       multiLineLabel.y = formYOffset;
//                       formFrame.appendChild(multiLineLabel);
//                       const multiLineInput = figma.createRectangle();
//                       multiLineInput.resize(360, 100); // Wider and taller for multi-line
//                       multiLineInput.x = 20;
//                       multiLineInput.y = formYOffset + 20;
//                       multiLineInput.cornerRadius = 4; // Rounded corners
//                       multiLineInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
//                       formFrame.appendChild(multiLineInput);
//                       formYOffset += 120; // Adjust space for the next field
//                     } 
//                     else if (field === "Dropdown") {
//                       // Create a frame for the Dropdown
//                       const dropdownFrame = figma.createFrame();
//                       dropdownFrame.resize(360, 40); // Width for the frame
//                       dropdownFrame.layoutMode = 'HORIZONTAL';
//                       dropdownFrame.itemSpacing = 0; // No space between fields
//                       dropdownFrame.primaryAxisAlignItems = 'MIN'; // Align items to the top
//                       dropdownFrame.counterAxisAlignItems = 'MIN'; // Align items to the left
//                       dropdownFrame.x = 20; // Positioning
//                       dropdownFrame.y = formYOffset; // Vertical position
//                       formFrame.appendChild(dropdownFrame);
                  
//                       // Dropdown Label
//                       const dropdownLabel = figma.createText();
//                       dropdownLabel.characters = "Select Option"; // Change the label as needed
//                       dropdownLabel.fontSize = 14;
//                       dropdownLabel.x = 0; // Align in the frame
//                       dropdownFrame.appendChild(dropdownLabel);
                  
//                       // Dropdown Input Box
//                       const dropdownInput = figma.createRectangle();
//                       dropdownInput.resize(240, 40); // Width and height for the input box
//                       dropdownInput.cornerRadius = 4; // Rounded corners
//                       dropdownInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
//                       dropdownFrame.appendChild(dropdownInput);
                  
//                       // Add "Select" Text in the middle of the dropdown input
//                       const selectText = figma.createText();
//                       selectText.characters = "Select"; // The text displayed in the dropdown
//                       selectText.fontSize = 12; // Smaller font size
//                       // Center the text horizontally and vertically in the dropdown input
//                       selectText.x = dropdownInput.x + (dropdownInput.width - selectText.width) / 2; // Center horizontally
//                       selectText.y = dropdownInput.y + (dropdownInput.height - selectText.height) / 2; // Center vertically
//                       dropdownFrame.appendChild(selectText);
                  
//                       // Add Dropdown Arrow
//                       const dropdownArrow = figma.createPolygon();
//                       dropdownArrow.resize(8, 8); // Size for the dropdown arrow
//                       dropdownArrow.rotation = 180; // Rotate to point downwards
//                       dropdownArrow.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Arrow color
//                       dropdownArrow.x = dropdownInput.x + dropdownInput.width - dropdownArrow.width - 10; // Position the arrow inside the input box (10 for padding)
//                       dropdownArrow.y = dropdownInput.y + (dropdownInput.height - dropdownArrow.height) / 2; // Center vertically
//                       dropdownFrame.appendChild(dropdownArrow);
                  
//                       formYOffset += 60; // Space for the next field
//                   }
                  
                  
//                   else {
//                       // Create standard fields for other types (Single Line, Number, Date)
//                                       // Create a frame to hold both the label and the input field
//               // Create a frame to hold both the label and the input field
// const multiLineFrame = figma.createFrame();

// multiLineFrame.resize(170,40);
// multiLineFrame.itemSpacing = 70; // Space between the label and input
// multiLineFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
// multiLineFrame.itemSpacing = 70; // Space between label and input
// multiLineFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
// multiLineFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
// multiLineFrame.x = 20; // Positioning
// multiLineFrame.y = formYOffset;
// formFrame.appendChild(multiLineFrame); // Append the frame to the form

// // Create the label for the multiline input
// const multiLineLabel = figma.createText();
// multiLineLabel.characters = "Single Line";
// multiLineLabel.fontSize = 14;
// multiLineLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
// multiLineFrame.appendChild(multiLineLabel); // Append label to the frame
// const multiLineInput = figma.createRectangle();
// multiLineInput.resize(160, 30); // Width and height for the input box
// multiLineInput.cornerRadius = 0; // Rounded corners
// multiLineInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
// multiLineInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
// multiLineFrame.appendChild(multiLineInput); // Append input to the frame

// // Update formYOffset for the next element
// formYOffset += 40; // Adjust vertical space for the next field

//                     }
      
//       // Add similar blocks for other field types (Address, Phone, etc.) as needed
//     });

//     // Close the plugin once done
//     figma.closePlugin();
//   }
// };
