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
        console.log(`${this.name}'s playlist:\r\n====================`);
        let number = 0;
        for (const i of this.list) {
            console.log(`${++number}. ${i.name} (${i.playCount})`);
        
        }       
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