// Search in list
export default function filterList(inputId, listId){
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    ul = document.getElementById(listId);
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}