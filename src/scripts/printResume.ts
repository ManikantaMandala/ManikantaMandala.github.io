export default function print():void{
    const name = document.getElementById('name');
    if (name)  name.innerHTML = "Manikanta Mandala";
    window.print();
    location.reload();
}
