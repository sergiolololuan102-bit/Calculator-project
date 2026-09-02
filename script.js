const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Definisikan fungsi untuk melakukan perhitungan berdasarkan tombol yang diklik
 const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        //Jika output mengandung '%', ganti dengan '/100' sebelum dievaluasi.
        output = eval(output.replace("%", "/100"));        
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DEL"){
        //Jika tombol 'del' diklik, hapus karakter terakhir dari output.
        output = output.toString().slice(0, -1);
    }else{
        // 
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
        
    


// Tambahkan event listener ke setiap tombol, saat diklik
buttons.forEach((button) => {
    // Listener klik tombol untuk memanggil kalkulator dengan nilai dataset sebagai argumen
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    
});