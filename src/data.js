import {v4 as uuidv4} from "uuid";

function favoriteSongs()
{
    return[
        {
            name : "Senorita",
            artist : "Camila Cabello, Shawn Mendes",
            cover : "https://i1.sndcdn.com/artworks-000579665654-lhp1xj-t500x500.jpg",
            audio : "https://talkglitz.media/wp-content/uploads/2019/06/Shawn_Mendes_Camila_Cabello_-_Senorita_talkglitz.tv.mp3",
            color: ["#8B161F","#100D18"],
            id:uuidv4(),
            active :true,
        },
        {
            name : "Girls Like You",
            artist : "Maroon 5",
            cover : "https://i1.sndcdn.com/artworks-000365263767-rjiedj-t500x500.jpg",
            audio : "https://talkglitz.media/wp-content/uploads/2018/06/Maroon_5_-_Girls_Like_You_ft_Cardi_B_talkglitz.tv.mp3?_=1",
            color: ["#305068","#305068"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "Mon Soleil",
            artist : "Ashley Park",
            cover : "https://i1.sndcdn.com/artworks-zRnafPzBwpBPCXx1-2GOGcA-t500x500.jpg",
            audio : "//englishsongs.fun/filedownload/2393187/Mon-Soleil-from-Emily-in-Paris-soundtrack-(englishsongs.fun).mp3",
            color: ["#8F2830","#437C85"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "7 rings",
            artist : "Ariana Grande",
            cover : "http://www.smashtheclub.com/wp-content/uploads/2019/01/dopeone-7rings.jpg",
            audio : "https://thinknews.com.ng/wp-content/uploads/2021/10/Ariana_Grande_7_rings_(thinkNews.com.ng).mp3?_=1",
            color: ["#920567","#750DA8"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "A Thousand Years",
            artist : "Christina Perri",
            cover : "https://i1.sndcdn.com/artworks-000067838531-zhea4e-t500x500.jpg",
            audio : "https://www.ceenaija.com/wp-content/uploads/music/2020/09/Christina_Perri_-_A_Thousand_Years_CeeNaija.com_.mp3",
            color: ["#4A8FEB","#0C1116"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "Love Me Like You Do",
            artist : "Ellie Goulding",
            cover : "https://i.pinimg.com/474x/fd/ce/03/fdce03d36ead6201e9099d59814c5268--love-me-like-you.jpg",
            audio : "https://pagalworld.com.se/files/download/id/3680",
            color: ["#B9BAC3","#010101"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "Love Story",
            artist : "Taylor Swift",
            cover : "https://subrica.com/wp-content/uploads/2017/12/Taylor-Swift-Love-Story-cover.jpg",
            audio : "https://paglasongs.com/files/download/id/12653",
            color: ["#5E3F19","#E7DDCA"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "You Belong With Me",
            artist : "Taylor Swift",
            cover : "https://f4.bcbits.com/img/a3048903730_16.jpg",
            audio : "https://www.naijafinix.com.ng/wp-content/uploads/2022/04/Taylor-Swift-You-Belong-With-Me-via-Naijafinix.com_.mp3?_=1",
            color: ["#A77F4D","#E9E1D8"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "abcdefu",
            artist : "Gayle",
            cover : "https://e1.pxfuel.com/desktop-wallpaper/571/958/desktop-wallpaper-abcdefu-memes-best-of-funny-abcdefu-on-ifunny-gayle-abcdefu-thumbnail.jpg",
            audio : "https://thinknews.com.ng/wp-content/uploads/2021/12/GAYLE_abcdefu_(thinkNews.com.ng).mp3",
            color: ["#F4898F","#C2BAAD"],
            id:uuidv4(),
            active :false,
        },
        {
            name : "Shape of You",
            artist : "Ed Sheeran",
            cover : "https://i1.sndcdn.com/artworks-hHRNAPyoL1gTPNV7-mUwz9A-t500x500.jpg",
            audio : "https://www.naijafinix.com.ng/wp-content/uploads/2020/10/Ed-Sheeran-Shape-Of-You-via-Naijafinix.com_.mp3?_=1",
            color: ["#B0BDC3","#056C7B"],
            id:uuidv4(),
            active :false,
        }
    ];
}

export default favoriteSongs;