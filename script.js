let display = document.getElementById('display');

function operators(input) {
    display.value += input;
};

function calculate() {
   try{ display.value = eval(display.value);
   }
   catch(erro){
display.value="Error";
   }
};

function cleardisplay() {
    display.value = '';
}