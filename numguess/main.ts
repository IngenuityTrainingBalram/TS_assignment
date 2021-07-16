window.onload = () => {


    const ran: number = Math.floor(Math.random() * 100 + 1);
    const guess: HTMLInputElement = <HTMLInputElement>document.getElementById("guess");
    const result: HTMLElement = document.querySelector("#result");
    guess.onblur = () => {

        let num: number = Number(guess.value);

        if (num > ran) {
            result.innerHTML += `<p>Try smaller number, your number was ${num}</p>`;
        }
        else if (num < ran) {
            result.innerHTML += `<p>Try larger number, your number was ${num}</p>`;
        }
        else if (num === ran) {
            result.innerHTML += `<p>Right, your number was ${num}</p>`;
        }
        else {
            result.innerHTML += `try valid input`;
        }

    }


}