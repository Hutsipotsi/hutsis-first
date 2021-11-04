function tell() {
    let name = document.getElementById('name').value;

    document.getElementById('name').innerHTML = "";
    document.getElementById('tellName').innerHTML = "";
    document.getElementById('nameError').innerHTML = "";

    if(name === "") {
        document.getElementById('nameError').innerHTML = "Write your name";
        return;
    }
    document.getElementById('tellName').innerHTML = "Welcome to my first GitHub site " + name + "!"
}