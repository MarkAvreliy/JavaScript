const settings = {
    size: 8,
    letters: ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''],
    digits: ['', '8', '7', '6', '5', '4', '3', '2', '1', '']
};

const chessDesk = {
    table: document.createElement('table'),

    render() {
        for (let i = 0; i < settings.size+2; ++i) {
            let tr = document.createElement('tr');
            this.table.append(tr);
            for (let j = 0; j < settings.size+2; ++j) {
                let td = document.createElement('td');
                tr.append(td);
                td.innerHTML = `${(i + 1) + j}`;

                if (td.innerHTML % 2 === 0) {
                    td.style.backgroundColor = "#000000";
                }
                if (i === 9 && 0 <= j <= 9) {
                    td.innerHTML = settings.letters[j];
                } else if (i === 0 && 0 <= j <= 9){
                    td.innerHTML = settings.letters[j];
                } else if (i <= 8 && j === 0) {
                    td.innerHTML = settings.digits[i];
                } else if (i <= 8 && j === 9) {
                    td.innerHTML = settings.digits[i];
                } else {
                    td.innerHTML = '';
                }
            }
        }
        document.querySelector('div').appendChild(this.table);
    }
}

chessDesk.render();