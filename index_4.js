const fs = require("fs")

const write = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) console.log(err)
            resolve("JSON dosyası oluşturuldu")
        })
    })
}

const read = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err) => {
            if (err) console.log(err)
            resolve("Dosya Okunuyor...")
        })
    })
}

const add = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) console.log(err)
            resolve("Yeni veri eklendi")
        })
    })
}

const erase = (file) => {
    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if (err) console.log(err)
            resolve("Dosya silindi")
        })
    })
}

const CRUD = async () => {
    try {
        const file = 'employees.json'
        const data = '{"name": "Employee1Name", "salary": 2000}'
        const data2 = '{"name": "Employee2Name", "salary": 4000}'
        await write(file, data)
            .then(result => console.log(result))
        await read(file)
            .then(result => console.log(result))
        console.log("Dosya :", data, "\nDosya okundu")
        await add(file, data2)
            .then(result => console.log(result))
        console.log(`Eklenen veri : ${data2}`)
        await erase(file)
            .then(result => console.log(result))
    }
    catch (err) {
        console.log("Hata:", err)
    }

}

CRUD()


