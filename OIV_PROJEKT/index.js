function preveriGeslo() {
    geslo = document.getElementById("password").value;

    let count = 0;
    let dolzina = 0;
    
        passwords.forEach(el => {
            dolzina += 1;
            if (el == geslo) {
                alert("Geslo vsebuje besedo, frazo ali ime, ki se pogosto nahaja v slovarjih. Priporočamo spremembo gesla!");
            } else {
                count++
            }
        });

        if (count == dolzina) {
            alert("Geslo trenutno ni bilo najdeno v nobenem slovarju!");
        }
    }


