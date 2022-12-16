import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

function btn1onclick() {
    document.getElementById('btn2').classList.add('unchecked');
    document.getElementById('btn1').classList.remove('unchecked');
}
function btn2onclick() {
    document.getElementById('btn1').classList.add('unchecked');
    document.getElementById('btn2').classList.remove('unchecked');
}