Digital Clock

This is a simple digital clock project built using HTML, CSS, and JavaScript. The clock displays the current time in a 12-hour format, with an indication of AM/PM. It dynamically updates every second.

Features

Displays the current hour, minute, and second.
Time is shown in 12-hour format.
Updates every second.
Shows AM/PM based on the current time.

Technologies Used

HTML: Structure of the clock.
CSS: Styling for the clock layout.
JavaScript: Logic to fetch and update the current time.

Project Structure

index.html: The main structure of the clock.
style.css: Styles the clock's layout and appearance.
app.js: Contains the JavaScript logic for fetching and updating the time every second.

How It Works

The JavaScript file (app.js) uses the Date object to get the current hour, minute, and second. It then formats the time in 12-hour format, adjusting for AM or PM. The clock is updated every second using setTimeout().

Clock Breakdown

Hours, Minutes, Seconds: The time is displayed in separate <span> elements.
AM/PM: A separate <span> shows whether it is AM or PM.
Automatic Update: The updateTime() function is called every second to refresh the time.

Setup

Clone the repository:

git clone https://github.com/yourusername/digital-clock.git

Navigate to the project directory:

cd digital-clock
Open index.html in a web browser:

You can simply open the index.html file in any modern web browser to see the digital clock in action.

Customization

To change the clock's styling, modify the style.css file.
You can easily tweak the JavaScript logic to change the time format or add additional features.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to contribute or suggest improvements by submitting a pull request or opening an issue.

Author
Sachin Kumar
GitHub: Sachin20187

