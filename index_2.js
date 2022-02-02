// Blog oluşturma
// Blog Arrey oluşturuldu
let blog = [
    { post: "Lorem" },
    { post: "Ipsum" },
    { post: "Dolor" }
]
// Terminalde gösterilecek olan blogların fonksiyonu 
const displayblog = (() => {
    blog.map((bloges => {
        console.log(bloges.post)
    }))
})
// Ekleme işleminden önce ve sonra kullanıcıya bilgilendirme mesajı atan fonksiyon
const sırala = (newpost => {
    return new Promise((resolve, reject) => {
        console.log("Yeni post ekleniyor")
        if (newpost) {
            resolve("Yeni post eklendi")
        } else {
            reject("Yeni post eklenemedi")
        }
    });
})
// Bloga yeni post ekleyen fonksiyon
const addpost = (addedpost => {
    const Promise1 = new Promise((resolve, reject) => {
        blog.push(addedpost)
        resolve(blog)
        //reject("Post eklenemedi")
    })

    return Promise1
})
// try ve catch kullanarak yeni eklemeyi await metoduyla bekleyen ve termianale yazdıran fonksiyon
async function last() {
    try {
        await addpost({ post: "Sit" })
        const sorted = await sırala(true)
        displayblog()
        console.log(sorted)

    } catch (err) {
        console.log(err)
    }
}

last()