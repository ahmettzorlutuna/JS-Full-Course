class Music{
    constructor(title, singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const MusicList = [
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3"),
    new Music("Escobar","Killa Hakan","4.jpg","4.mp3"),
    new Music("Tek Şans","Killa Hakan","5.jpg","5.mp3")
]