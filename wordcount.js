// Add a listener to the textarea for input events
document.getElementById("message").addEventListener("input", function() {
    var message = this.value;
    var words = message.trim().split(/\s+/).length;
    // Update the word count display
    document.getElementById("wordCount").textContent = words + " words";
  });