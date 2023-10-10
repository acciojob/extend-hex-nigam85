const extendHex = (shortHex) => {
  // write your code here
	 shortHex = shortHex.replace("#", "");

    // Check if the input is a short hex code with 3 characters
    if (shortHex.length === 3) {
        // Convert each short hex character to a full hex component (e.g., "a" to "aa")
        const fullHex = shortHex.split("").map((char) => char + char).join("");

        // Add "#" to the beginning and return the full hex code
        return "#" + fullHex.toUpperCase(); // Convert to uppercase for consistency
    }

    // Return the input as-is if it's not a short hex code
    return shortHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
