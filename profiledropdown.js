<script>


document.addEventListener("DOMContentLoaded", function() {
    var userMenuButton = document.getElementById("user-menu-button");
    var profileDropdown = document.getElementById("profileDropdown");

    // Show the dropdown when the button is clicked
    userMenuButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the document click event from firing
        profileDropdown.classList.toggle("pflmenu"); // Toggle the visibility of the dropdown
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!profileDropdown.contains(event.target) && event.target !== userMenuButton) {
            profileDropdown.classList.add("pflmenu"); // Hide the dropdown
        }
    });
});


    </script>