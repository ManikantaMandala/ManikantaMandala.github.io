export default function print():void{
    const navBar = document.getElementById('nav-bar');
    const printButton = document.getElementById('print-button');
    const name = document.getElementById('name');
    const root = document.getElementById('root');
    if (navBar) navBar.innerHTML = '';
    if (printButton) printButton.innerHTML = "";
    if (name)  name.innerHTML = "Manikanta Mandala";
    if (root) root.style.maxWidth = 'none';
    window.print();
    location.reload();
}
