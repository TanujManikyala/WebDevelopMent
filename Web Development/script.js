document.addEventListener('DOMContentLoaded', function () {
    const groundUpBtn = document.getElementById('ground-up-btn');
    const groundDownBtn = document.getElementById('ground-down-btn');
    const level1UpBtn = document.getElementById('level1-up-btn');
    const level1DownBtn = document.getElementById('level1-down-btn');
    const level2UpBtn = document.getElementById('level2-up-btn');
    const level2DownBtn = document.getElementById('level2-down-btn');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');

    // Initial elevator position
    let elevatorPosition = 'ground';

    groundUpBtn.addEventListener('click', function () {
        moveElevator('up');
    });

    groundDownBtn.addEventListener('click', function () {
        moveElevator('down');
    });

    level1UpBtn.addEventListener('click', function () {
        moveElevator('up');
    });

    level1DownBtn.addEventListener('click', function () {
        moveElevator('down');
    });

    level2UpBtn.addEventListener('click', function () {
        moveElevator('up');
    });

    level2DownBtn.addEventListener('click', function () {
        moveElevator('down');
    });

    leftBtn.addEventListener('click', function () {
        moveElevator('left');
    });

    rightBtn.addEventListener('click', function () {
        moveElevator('right');
    });

    // Function to move the elevator
    function moveElevator(direction) {
        // Check the current elevator position
        if (elevatorPosition === 'ground' && direction === 'up') {
            // Elevator is on the ground and going up
            // Move to Level 1
            elevatorPosition = 'level1';
        } else if (elevatorPosition === 'level1' && direction === 'up') {
            // Elevator is on Level 1 and going up
            // Move to Level 2
            elevatorPosition = 'level2';
        } else if (elevatorPosition === 'level2' && direction === 'down') {
            // Elevator is on Level 2 and going down
            // Move to Level 1
            elevatorPosition = 'level1';
        } else if (elevatorPosition === 'level1' && direction === 'down') {
            // Elevator is on Level 1 and going down
            // Move to Ground
            elevatorPosition = 'ground';
        } else if (elevatorPosition === 'ground' && direction === 'left') {
            // Move the elevator left
            // Implement your left movement logic here
        } else if (elevatorPosition === 'ground' && direction === 'right') {
            // Move the elevator right
            // Implement your right movement logic here
        } else {
            // Invalid movement
            console.log('Invalid movement.');
        }

        // Update the indicators
        updateIndicators();
    }

    // Function to update the indicators
    function updateIndicators() {
        // Hide all indicators
        document.querySelectorAll('.elevator').forEach(function (indicator) {
            indicator.style.backgroundColor = '#ddd';
        });

        // Show the indicator for the current level
        document.getElementById(`${elevatorPosition}-indicator`).style.backgroundColor = 'blue';
    }
});
