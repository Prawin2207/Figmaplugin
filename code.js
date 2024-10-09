"use strict";
figma.showUI(__html__, { width: 1000, height: 1000 });
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-form') {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    // Create a frame to hold the entire UI (form + sidebar)
    const containerFrame = figma.createFrame();
    containerFrame.resize(800, 800);
    containerFrame.name = "Form with Sidebar";

    // Position the container frame
    containerFrame.x = figma.viewport.center.x;
    containerFrame.y = figma.viewport.center.y;

    // Create the left sidebar
    const sidebarFrame = figma.createFrame();
    sidebarFrame.resize(180, 600); // Width for the sidebar
    sidebarFrame.name = "Sidebar";
    sidebarFrame.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Dark blue background
    containerFrame.appendChild(sidebarFrame);

    // Create header for the sidebar
    const sidebarHeader = figma.createFrame();
    sidebarHeader.resize(200, 50); // Same width as the sidebar
    sidebarHeader.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Dark blue background
    sidebarFrame.appendChild(sidebarHeader);

    const sidebarHeaderText = figma.createText();
    sidebarHeaderText.characters = "Field Types";
    sidebarHeaderText.fontSize = 16;
    sidebarHeaderText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
    sidebarHeaderText.x = 20;
    sidebarHeaderText.y = 15;
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    sidebarHeader.appendChild(sidebarHeaderText);

    // Create the form frame on the right side
    const formFrame = figma.createFrame();
    formFrame.resize(600, 600); // Adjust the size of the form frame
    formFrame.x = 200; // Offset to the right to make room for the sidebar
    formFrame.name = "Form";
    formFrame.layoutMode = 'VERTICAL'; // Vertical auto-layout for stacking items
    formFrame.itemSpacing = 20;
    formFrame.layoutGrow = 1;
    containerFrame.appendChild(formFrame);

    // Add header to the form
    const headerBar = figma.createFrame();
    headerBar.resize(600, 50); // Same width as the form, 50px in height
    headerBar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // white background
    headerBar.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border

    formFrame.appendChild(headerBar);

    const headerText = figma.createText();
    headerText.characters = "Form";
    headerText.fontSize = 18;
    headerText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // black text
    headerText.x = 20;
    headerText.y = 15;
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    headerBar.appendChild(headerText);

    // const saveButton = figma.createFrame();
    // saveButton.resize(80, 30); // Button size
    // saveButton.cornerRadius = 4;
    // saveButton.fills = [{ type: 'SOLID', color: { r: 0.22, g: 0.53, b: 0.85 }}]; // Light blue color
    // saveButton.x = 300;
    // saveButton.y = 10;
    // formFrame.appendChild(saveButton);

    // const buttonText = figma.createText();
    // buttonText.characters = "Done";
    // buttonText.fontSize = 14;
    // buttonText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
    // buttonText.x = 15;
    // buttonText.y = 7;
    // await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    // saveButton.appendChild(buttonText);

    // Create the fields in the sidebar below the header
    const fields = ["Form1", "Form2", "Form3"];
    let yOffset = 50; // Adjusted to position below the sidebar header
    fields.forEach((field) => {
      // Create a rectangle to serve as the border for each field
      const fieldBox = figma.createRectangle();
      fieldBox.resize(220, 40); // Size of the square box for the field text
      fieldBox.x = 10;
      fieldBox.y = yOffset;
      fieldBox.cornerRadius = 0; // Rounded corners
      fieldBox.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Dark blue color
      fieldBox.strokes = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Gray border
      sidebarFrame.appendChild(fieldBox);

      // Create the field label text inside the border
      const fieldText = figma.createText();
      fieldText.characters = field;
      fieldText.fontSize = 14;
      fieldText.x = fieldBox.x + 10; // Padding inside the box
      fieldText.y = fieldBox.y + 12; // Vertically center the text
      fieldText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // Dark text

      sidebarFrame.appendChild(fieldText);

      yOffset += 50; // Space between fields
    });

    // Set yOffset for the form fields inside the form frame
    let formYOffset = 70;

    // Create form fields based on the user's selection
    msg.fields.forEach((field) => {

      const fieldFrame = figma.createFrame();
  fieldFrame.resize(560, 100); // Adjust width/height as needed for the field
  fieldFrame.layoutMode = 'VERTICAL'; // Stack content vertically
  fieldFrame.itemSpacing = 10; // Space inside each field frame

      if (field === "Name") {
        // Create a frame for the entire Name section
        const nameSectionFrame = figma.createFrame();
        nameSectionFrame.resize(530, 80); // Width for the frame 
        nameSectionFrame.layoutMode = 'HORIZONTAL'; // Layout mode is vertical for stacking
        nameSectionFrame.itemSpacing = 40; // Space between items
        nameSectionFrame.paddingTop = 10; // Add some padding above
        nameSectionFrame.paddingBottom = 10; // Add some padding below
        nameSectionFrame.x = 50; // Positioning
        nameSectionFrame.y = formYOffset; // Vertical position
        formFrame.appendChild(nameSectionFrame);

        // Common Name Label
        const nameCommonLabel = figma.createText();
        nameCommonLabel.characters = "Name"; // Common name label
        nameCommonLabel.resize(100, 30);
        nameCommonLabel.fontSize = 14; // Larger font for the common label
        nameCommonLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
        nameSectionFrame.appendChild(nameCommonLabel);

        // Create a frame for First Name
        const firstNameFrame = figma.createFrame();
        firstNameFrame.resize(170, 40); // Width for the frame
        firstNameFrame.layoutMode = 'VERTICAL'; // Layout mode is vertical for stacking
        firstNameFrame.itemSpacing = 2; // Space between label and input

        nameSectionFrame.appendChild(firstNameFrame); // Add firstNameFrame to nameSectionFrame

        // First Name Field
        const firstNameInput = figma.createRectangle();
        firstNameInput.resize(160, 30); // Width and height for the input box
        firstNameInput.cornerRadius = 0; // Rounded corners
        firstNameInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        firstNameInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        firstNameFrame.appendChild(firstNameInput); // Add input to the firstNameFrame

        const firstNameLabel = figma.createText();
        firstNameLabel.characters = "First Name";
        firstNameLabel.fontSize = 12; // Smaller font size for the label
        firstNameLabel.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
        firstNameFrame.appendChild(firstNameLabel); // Add label below the input

        // Create a frame for Last Name
        const lastNameFrame = figma.createFrame();
        lastNameFrame.resize(360, 40); // Width for the frame
        lastNameFrame.layoutMode = 'VERTICAL'; // Layout mode is vertical for stacking
        lastNameFrame.itemSpacing = 0; // Space between label and input
        nameSectionFrame.appendChild(lastNameFrame); // Add lastNameFrame to nameSectionFrame

        // Last Name Field
        const lastNameInput = figma.createRectangle();
        lastNameInput.resize(160, 30); // Width and height for the input box
        lastNameInput.cornerRadius = 0; // Rounded corners
        lastNameInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        lastNameInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        lastNameFrame.appendChild(lastNameInput); // Add input to the lastNameFrame

        const lastNameLabel = figma.createText();
        lastNameLabel.characters = "Last Name";
        lastNameLabel.fontSize = 12; // Smaller font size for the label
        lastNameLabel.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
        lastNameFrame.appendChild(lastNameLabel); // Add label below the input

        formYOffset += 20; // Space for the next field
      }

      else if (field === "Email") {
        // Create Email field with an icon
        // const emailLabel = figma.createText();
        // emailLabel.characters = "Email";
        // emailLabel.fontSize = 14;
        // emailLabel.x = 20;
        // emailLabel.y = formYOffset;
        // formFrame.appendChild(emailLabel);

        // const emailInput = figma.createRectangle();
        // emailInput.resize(360, 40); // Width and height for the input box
        // emailInput.x = 20;
        // emailInput.y = formYOffset + 20; // Slight offset to appear below the label
        // emailInput.cornerRadius = 4; // Rounded corners
        // emailInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        // formFrame.appendChild(emailInput);

        // const emailIcon = figma.createText();
        // emailIcon.characters = ""; // Example email icon
        // emailIcon.fontSize = 14;
        // emailIcon.x = 380; // Position the icon at the right of the input field
        // emailIcon.y = formYOffset + 25; // Center it vertically
        // formFrame.appendChild(emailIcon);

        // formYOffset += 80; // Space for the next field

        const emailFrame = figma.createFrame();

        emailFrame.resize(170, 40);
        emailFrame.itemSpacing = 70; // Space between the label and input
        emailFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
        emailFrame.itemSpacing = 105; // Space between label and input
        emailFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
        emailFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
        emailFrame.x = 20; // Positioning
        emailFrame.y = formYOffset;
        formFrame.appendChild(emailFrame); // Append the frame to the form

        // Create the label for the multiline input
        const emailLabel = figma.createText();
        emailLabel.characters = "Email";
        emailLabel.fontSize = 14;
        emailLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
        emailFrame.appendChild(emailLabel); // Append label to the frame
        const emailInput = figma.createRectangle();
        emailInput.resize(160, 30); // Width and height for the input box
        emailInput.cornerRadius = 0; // Rounded corners
        emailInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        emailInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        emailFrame.appendChild(emailInput); // Append input to the frame

        // Update formYOffset for the next element
        formYOffset += 40;
      }
      else if (field === "Phone") {
        const phoneFrame = figma.createFrame();

        phoneFrame.resize(170, 40);
        phoneFrame.itemSpacing = 70; // Space between the label and input
        phoneFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
        phoneFrame.itemSpacing = 99; // Space between label and input
        phoneFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
        phoneFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
        phoneFrame.x = 20; // Positioning
        phoneFrame.y = formYOffset;
        formFrame.appendChild(phoneFrame); // Append the frame to the form

        // Create the label for the multiline input
        const phoneLabel = figma.createText();
        phoneLabel.characters = "phone";
        phoneLabel.fontSize = 14;
        phoneLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
        phoneFrame.appendChild(phoneLabel); // Append label to the frame
        const phoneInput = figma.createRectangle();
        phoneInput.resize(160, 30); // Width and height for the input box
        phoneInput.cornerRadius = 0; // Rounded corners
        phoneInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        phoneInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        phoneFrame.appendChild(phoneInput); // Append input to the frame

        // Update formYOffset for the next element
        formYOffset += 40;

      }
      else if (field === "Address") {


        // Create the main address section frame
        const addressSectionFrame = figma.createFrame();
        addressSectionFrame.resize(530, 180); // Adjusted height for both rows
        addressSectionFrame.layoutMode = 'VERTICAL'; // Layout mode is vertical to stack rows
        addressSectionFrame.itemSpacing = 20; // Space between rows
        addressSectionFrame.paddingTop = 10; // Add padding above
        addressSectionFrame.paddingBottom = 10; // Add padding below
        addressSectionFrame.x = 50; // Positioning
        addressSectionFrame.y = formYOffset; // Vertical position
        formFrame.appendChild(addressSectionFrame); // Append address section to the form

        // Row 1 frame (for Street 1 and Street 2)
        const row1Frame = figma.createFrame();
        row1Frame.resize(530, 44); // Adjusted width and height for first row
        row1Frame.layoutMode = 'HORIZONTAL'; // Horizontal layout for side-by-side inputs
        row1Frame.itemSpacing = 40; // Space between items
        addressSectionFrame.appendChild(row1Frame); // Add to the main section

        // Row 2 frame (for Street 3 and Street 4)
        const row2Frame = figma.createFrame();
        row2Frame.resize(530, 44); // Adjusted width and height for second row
        row2Frame.layoutMode = 'HORIZONTAL'; // Horizontal layout for side-by-side inputs
        row2Frame.itemSpacing = 40; // Space between items
        addressSectionFrame.appendChild(row2Frame); // Add to the main section

        // Create a common Address label for both rows
        const createAddressLabel = () => {
          const addressLabel = figma.createText();
          addressLabel.characters = "Address"; // Common address label
          addressLabel.resize(100, 30);
          addressLabel.fontSize = 14; // Larger font for the common label
          addressLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
          return addressLabel;
        };
        const createAddressLabelempty = () => {
          const addressLabel = figma.createText();
          addressLabel.characters = ""; // Common address label
          addressLabel.resize(100, 30);
          addressLabel.fontSize = 14; // Larger font for the common label
          addressLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
          return addressLabel;
        };

        // Add Address label to Row 1
        row1Frame.appendChild(createAddressLabel());

        // Add Address label to Row 2
        row2Frame.appendChild(createAddressLabelempty());

        // Create Street 1 input frame and label
        const street1Frame = figma.createFrame();
        street1Frame.resize(170, 40); // Width for the frame
        street1Frame.layoutMode = 'VERTICAL'; // Vertical layout for stacking label and input
        street1Frame.itemSpacing = 2; // Space between label and input
        row1Frame.appendChild(street1Frame); // Add street1Frame to row1Frame

        const street1Input = figma.createRectangle();
        street1Input.resize(160, 30); // Width and height for the input box
        street1Input.cornerRadius = 0; // Rounded corners
        street1Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        street1Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        street1Frame.appendChild(street1Input); // Add input to the street1Frame

        const street1Label = figma.createText();
        street1Label.characters = "Street 1"; // Label for the street 1 input
        street1Label.fontSize = 12; // Smaller font size for the label
        street1Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
        street1Frame.appendChild(street1Label); // Add label below the input

        // Repeat the same process for Street 2, Street 3, and Street 4 inputs
        // Add Street 2 frame to row1Frame
        const street2Frame = figma.createFrame();
        street2Frame.resize(170, 40);
        street2Frame.layoutMode = 'VERTICAL';
        street2Frame.itemSpacing = 2;
        row1Frame.appendChild(street2Frame);

        const street2Input = figma.createRectangle();
        street2Input.resize(160, 30);
        street2Input.cornerRadius = 0;
        street2Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
        street2Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        street2Frame.appendChild(street2Input);

        const street2Label = figma.createText();
        street2Label.characters = "Street 2";
        street2Label.fontSize = 12;
        street2Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }];
        street2Frame.appendChild(street2Label);

        // Add Street 3 frame to row2Frame
        const street3Frame = figma.createFrame();
        street3Frame.resize(170, 40);
        street3Frame.layoutMode = 'VERTICAL';
        street3Frame.itemSpacing = 2;
        row2Frame.appendChild(street3Frame);

        const street3Input = figma.createRectangle();
        street3Input.resize(160, 30);
        street3Input.cornerRadius = 0;
        street3Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
        street3Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        street3Frame.appendChild(street3Input);

        const street3Label = figma.createText();
        street3Label.characters = "Street 3";
        street3Label.fontSize = 12;
        street3Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }];
        street3Frame.appendChild(street3Label);

        // Add Street 4 frame to row2Frame
        const street4Frame = figma.createFrame();
        street4Frame.resize(170, 40);
        street4Frame.layoutMode = 'VERTICAL';
        street4Frame.itemSpacing = 2;
        row2Frame.appendChild(street4Frame);

        const street4Input = figma.createRectangle();
        street4Input.resize(160, 30);
        street4Input.cornerRadius = 0;
        street4Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
        street4Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        street4Frame.appendChild(street4Input);

        const street4Label = figma.createText();
        street4Label.characters = "Street 4";
        street4Label.fontSize = 12;
        street4Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }];
        street4Frame.appendChild(street4Label);

        const row3Frame = figma.createFrame();
        row3Frame.resize(530, 44); // Adjusted width and height for third row
        row3Frame.layoutMode = 'HORIZONTAL'; // Horizontal layout for side-by-side inputs
        row3Frame.itemSpacing = 40; // Space between items
        addressSectionFrame.appendChild(row3Frame);

        row3Frame.appendChild(createAddressLabelempty());
        // Add Street 5 to Row 3
        const street5Frame = figma.createFrame();
        street5Frame.resize(170, 40); // Width for the frame
        street5Frame.layoutMode = 'VERTICAL'; // Vertical layout for stacking
        street5Frame.itemSpacing = 2; // Space between label and input
        row3Frame.appendChild(street5Frame); // Add street5Frame to row3Frame

        const street5Input = figma.createRectangle();
        street5Input.resize(160, 30); // Width and height for the input box
        street5Input.cornerRadius = 0; // Rounded corners
        street5Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        street5Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        street5Frame.appendChild(street5Input); // Add input to the street5Frame

        const street5Label = figma.createText();
        street5Label.characters = "Street 5"; // Label for the street 5 input
        street5Label.fontSize = 12; // Smaller font size for the label
        street5Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
        street5Frame.appendChild(street5Label); // Add label below the input

        // Add Street 6 to Row 3
        const street6Frame = figma.createFrame();
        street6Frame.resize(170, 40); // Width for the frame
        street6Frame.layoutMode = 'VERTICAL'; // Vertical layout for stacking
        street6Frame.itemSpacing = 2; // Space between label and input
        row3Frame.appendChild(street6Frame); // Add street6Frame to row3Frame

        const street6Input = figma.createRectangle();
        street6Input.resize(160, 30); // Width and height for the input box
        street6Input.cornerRadius = 0; // Rounded corners
        street6Input.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        street6Input.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        street6Frame.appendChild(street6Input); // Add input to the street6Frame

        const street6Label = figma.createText();
        street6Label.characters = "Street 6"; // Label for the street 6 input
        street6Label.fontSize = 12; // Smaller font size for the label
        street6Label.fills = [{ type: 'SOLID', color: { r: 0.16, g: 0.19, b: 0.25 } }]; // Text color
        street6Frame.appendChild(street6Label); // Add label below the input

        // Update formYOffset for the next section
        formYOffset += 280;


      } else if (field === "Multi Line") {
        // Create a frame for the multiline input
        const multilineFrame = figma.createFrame();
        multilineFrame.resize(350, 80); // Increased size for multiline input box
        multilineFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
        multilineFrame.itemSpacing = 48; // Space between the label and input
        multilineFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
        multilineFrame.counterAxisSizingMode = 'AUTO'; // Align items to the left
        multilineFrame.x = 20; // Positioning
        multilineFrame.y = formYOffset; // Set Y-offset based on the current form's position
        formFrame.appendChild(multilineFrame); // Append the frame to the form

        // Create the label for the multiline input
        const multilineLabel = figma.createText();
        multilineLabel.characters = "Multiline Input";
        multilineLabel.fontSize = 14;
        multilineLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
        multilineFrame.appendChild(multilineLabel); // Append label to the frame

        // Create the input box for the multiline input
        const multilineInput = figma.createRectangle();
        multilineInput.resize(250, 70); // Increased width and height for the input box
        multilineInput.cornerRadius = 4; // Rounded corners
        multilineInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        multilineInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        multilineFrame.appendChild(multilineInput); // Append input to the frame

        // Update formYOffset for the next element
        formYOffset += 100; // Adjust to leave space for the multiline input box

      }
      else if (field === "Dropdown") {
        // Create a frame for the Dropdown
        const dropdownFrame = figma.createFrame();
        dropdownFrame.resize(360, 40); // Width for the frame
        dropdownFrame.layoutMode = 'HORIZONTAL';
        dropdownFrame.itemSpacing = 0; // No space between fields
        dropdownFrame.primaryAxisAlignItems = 'MIN'; // Align items to the top
        dropdownFrame.counterAxisAlignItems = 'MIN'; // Align items to the left
        dropdownFrame.x = 20; // Positioning
        dropdownFrame.y = formYOffset; // Vertical position
        formFrame.appendChild(dropdownFrame);
        
        // Dropdown Label
        const dropdownLabel = figma.createText();
        dropdownLabel.characters = "Select Option"; // Change the label as needed
        dropdownLabel.fontSize = 14;
        dropdownLabel.x = 0; // Align in the frame
        dropdownFrame.appendChild(dropdownLabel);
        
        // Dropdown Input Box
        const dropdownInput = figma.createRectangle();
        dropdownInput.resize(240, 40); // Width and height for the input box
        dropdownInput.cornerRadius = 4; // Rounded corners
        dropdownInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        dropdownFrame.appendChild(dropdownInput);
        
        // Add "Select" Text in the middle of the dropdown input
        const selectText = figma.createText();
        selectText.characters = "Select"; // The text displayed in the dropdown
        selectText.fontSize = 12; // Smaller font size
        
        // Center the text horizontally and vertically in the dropdown input
        selectText.x = dropdownInput.x + (dropdownInput.width - selectText.width) / 2; // Center horizontally
        selectText.y = dropdownInput.y + (dropdownInput.height - selectText.height) / 2; // Center vertically
        dropdownInput.appendChild(selectText); // Add selectText inside the dropdown input
        
        // Add Dropdown Arrow
        const dropdownArrow = figma.createPolygon();
        dropdownArrow.resize(8, 8); // Size for the dropdown arrow
        dropdownArrow.rotation = 180; // Rotate to point downwards
        dropdownArrow.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Arrow color
        
        // Position the arrow inside the input box (10 for padding)
        dropdownArrow.x = dropdownInput.x + dropdownInput.width - dropdownArrow.width - 10; // Position the arrow
        dropdownArrow.y = dropdownInput.y + (dropdownInput.height - dropdownArrow.height) / 2; // Center vertically
        dropdownInput.appendChild(dropdownArrow); // Add dropdownArrow inside the dropdown input
        
        formYOffset += 60; // Space for the next field
      }        


      else {
        // Create standard fields for other types (Single Line, Number, Date)
        // Create a frame to hold both the label and the input field
        // Create a frame to hold both the label and the input field
        const multiLineFrame = figma.createFrame();

        multiLineFrame.resize(170, 40);
        multiLineFrame.itemSpacing = 70; // Space between the label and input
        multiLineFrame.layoutMode = 'HORIZONTAL'; // Horizontal layout for label and input
        multiLineFrame.itemSpacing = 70; // Space between label and input
        multiLineFrame.primaryAxisSizingMode = 'AUTO'; // Auto-resize width based on contents
        multiLineFrame.counterAxisSizingMode = 'AUTO';// Align items to the left
        multiLineFrame.x = 20; // Positioning
        multiLineFrame.y = formYOffset;
        formFrame.appendChild(multiLineFrame); // Append the frame to the form

        // Create the label for the multiline input
        const multiLineLabel = figma.createText();
        multiLineLabel.characters = "Single Line";
        multiLineLabel.fontSize = 14;
        multiLineLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Text color
        multiLineFrame.appendChild(multiLineLabel); // Append label to the frame
        const multiLineInput = figma.createRectangle();
        multiLineInput.resize(160, 30); // Width and height for the input box
        multiLineInput.cornerRadius = 0; // Rounded corners
        multiLineInput.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Gray border
        multiLineInput.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White background
        multiLineFrame.appendChild(multiLineInput); // Append input to the frame

        // Update formYOffset for the next element
        formYOffset += 40; // Adjust vertical space for the next field

      }

      // Add similar blocks for other field types (Address, Phone, etc.) as needed
    });

        // Adjust the height of the form frame based on content
        const totalHeight = msg.fields.length * (200 + formFrame.itemSpacing);
        formFrame.resize(600, totalHeight); // Resize based on number of fields
        sidebarFrame.resize(600,totalHeight);
    
        // Ensure scrolling appears if content exceeds visible area
        if (totalHeight > containerFrame.height) {
          containerFrame.resize(800, totalHeight); // Adjust container height if needed
          containerFrame.scrollBehavior = 'SCROLL'; // Enable scrolling behavior if necessary
        }
        
        figma.viewport.scrollAndZoomIntoView([containerFrame]);
    // Close the plugin once done
    figma.closePlugin();
  }
};
