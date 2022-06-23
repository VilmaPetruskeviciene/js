class Artist {
    constructor(name) {
        this.name = name;
        this.priceSong = 0;
        this.total = 0;
        this.list = [];
    }

    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`;
    }

    money(cent) {
        return (cent / 100).toFixed(2) + ' EUR';
    }

    songPrice(newPrice) {
        this.priceSong = newPrice;
        const price = this.money(newPrice);
        return `${this.name}'s price per song is ${price}.`;
    }

    addSong(song) {
        this.list.push({
            name: song,
            playCount: 0,
        });
        return `'${song}'`;
    }

    playlist() {
        const firstLine = `${this.name}'s playlist:`;
        let maxLength = firstLine.length;
        let list1 = [];
        for (let i = 0; i < this.list.length; i++) {
            const { name, playCount } = this.list[i];
            list1.push(`${i + 1}. ${name} (${playCount})`);
            if (list1[i].length > maxLength) {
                maxLength = list1[i].length;
            }
        }
    
        return `${firstLine}\r\n${'='.repeat(maxLength)}\r\n${list1.join('\r\n')}`;           
    }

    playSong(is) {
        const song = this.list[is];
        song.playCount++;
        this.total += this.priceSong;
        return `Playing song: ${song.name}.`;
    }
    
    fortune() {
        return `Total lifetime wealth of Raimonda is ${this.money(this.total)} right now!`;
    }
}


module.exports = Artist