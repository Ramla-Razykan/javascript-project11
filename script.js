function calculateShape() {
    let shape = document.getElementById("shapes").value;
    let result = '';

    if (shape === 'square') {
        let side = prompt("Enter the side length of the square:");
        let perimeter = 4 * side;
        let area = side * side;
        result = `Shape: Square<br>Side: ${side}<br>Perimeter: ${perimeter}<br>Area: ${area}`;
    } 
    else if (shape === 'circle') {
        let radius = prompt("Enter the radius of the circle:");
        let circumference = 2 * Math.PI * radius;
        let area = Math.PI * radius * radius;
        result = `Shape: Circle<br>Radius: ${radius}<br>Circumference: ${circumference.toFixed(2)}<br>Area: ${area.toFixed(2)}`;
    } 
    else if (shape === 'rectangle') {
        let length = prompt("Enter the length of the rectangle:");
        let width = prompt("Enter the width of the rectangle:");
        let perimeter = 2 * (length + width);
        let area = length * width;
        result = `Shape: Rectangle<br>Length: ${length}, Width: ${width}<br>Perimeter: ${perimeter}<br>Area: ${area}`;
    } 
    else if (shape === 'triangle') {
        let base = prompt("Enter the base of the triangle:");
        let height = prompt("Enter the height of the triangle:");
        let area = 0.5 * base * height;
        result = `Shape: Triangle<br>Base: ${base}, Height: ${height}<br>Area: ${area}`;
    }

    document.getElementById("result").innerHTML = result;
}
