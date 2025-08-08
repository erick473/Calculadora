 function addToDisplay(value) {
        document.getElementById('display').value += value;
    }

    const clearDisplay = () => document.getElementById('display').value = ''


    function calculate() {
        var expression = document.getElementById('display').value;
        try {
            var result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
    function Eiminar()
    {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
          
}